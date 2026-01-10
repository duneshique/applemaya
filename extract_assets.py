import os
import re
import base64
import uuid

def extract_and_clean(html_path, output_html_name, image_dir):
    print(f"Processing {html_path}...")
    
    if not os.path.exists(image_dir):
        os.makedirs(image_dir, exist_ok=True)

    with open(html_path, 'r', encoding='utf-8') as f:
        content = f.read()

    # Regex to find base64 image data
    # data:image/[ext];base64,[data]
    pattern = r'src="data:image/(?P<ext>[^;]+);base64,(?P<data>[^"]+)"'
    
    count = 0
    def replace_func(match):
        nonlocal count
        count += 1
        ext = match.group('ext')
        # Some extensions might have extra info like x-icon
        if '/' in ext:
            ext = ext.split('/')[-1]
        if 'svg' in ext:
            ext = 'svg'
        
        data = match.group('data')
        
        filename = f"img_{count:03d}.{ext}"
        filepath = os.path.join(image_dir, filename)
        
        try:
            with open(filepath, 'wb') as img_f:
                img_f.write(base64.b64decode(data))
            
            # Return the new relative path for HTML
            # The HTML will be in the root, so path is image/...
            rel_path = os.path.relpath(filepath, start=os.path.dirname(os.path.abspath(output_html_name)))
            return f'src="{rel_path}"'
        except Exception as e:
            print(f"Error saving image {count}: {e}")
            return match.group(0) # Keep original if failed

    new_content = re.sub(pattern, replace_func, content)
    
    with open(output_html_name, 'w', encoding='utf-8') as f:
        f.write(new_content)
    
    print(f"Finished {html_path}. Extracted {count} images. Saved to {output_html_name}")

if __name__ == "__main__":
    base_dir = "/Users/junsikhwang/Documents/GitHub/applemaya"
    mapping = [
        ("old/home - Maya Flor - 마야 플로르.html", "home.html", "image/home"),
        ("old/Maya Flor Class - Maya Flor - 마야 플로르.html", "class.html", "image/class"),
        ("old/Maya Flor Media - Maya Flor - 마야 플로르.html", "media.html", "image/media"),
        ("old/contact - Maya Flor - 마야 플로르.html", "contact.html", "image/contact"),
    ]
    
    for old_rel, new_name, img_rel in mapping:
        old_path = os.path.join(base_dir, old_rel)
        new_path = os.path.join(base_dir, new_name)
        img_dir = os.path.join(base_dir, img_rel)
        
        if os.path.exists(old_path):
            extract_and_clean(old_path, new_path, img_dir)
        else:
            print(f"File not found: {old_path}")
