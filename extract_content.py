import os
import json
from bs4 import BeautifulSoup

def extract_content(html_path):
    if not os.path.exists(html_path):
        return None
    
    with open(html_path, 'r', encoding='utf-8') as f:
        soup = BeautifulSoup(f, 'html.parser')

    data = {
        "title": soup.title.string if soup.title else "",
        "meta_description": "",
        "sections": []
    }

    meta_desc = soup.find("meta", attrs={"name": "description"})
    if meta_desc:
        data["meta_description"] = meta_desc.get("content", "")

    # Extract all text and links from specific containers if they exist (based on previous analysis)
    # Common containers in this template: mcnTextContent, mcnImageBlock, mcnButtonBlock
    
    blocks = soup.find_all("div", class_=lambda x: x and ("mcnTextContent" in x or "mcnButtonBlock" in x or "mcnImageBlock" in x or "mcnCaptionBlock" in x))
    
    for block in blocks:
        section_info = {}
        
        # Text extraction
        text = block.get_text(strip=True, separator='\n')
        if text:
            section_info["text"] = text
            
        # Links extraction
        links = []
        for a in block.find_all('a', href=True):
            links.append({
                "label": a.get_text(strip=True),
                "url": a['href']
            })
        if links:
            section_info["links"] = links
            
        # Image info (now that placeholders are local paths)
        imgs = []
        for img in block.find_all('img', src=True):
            imgs.append({
                "alt": img.get('alt', ''),
                "src": img['src']
            })
        if imgs:
            section_info["images"] = imgs
            
        if section_info:
            data["sections"].append(section_info)

    return data

if __name__ == "__main__":
    base_dir = "/Users/junsikhwang/Documents/GitHub/applemaya"
    files = ["home.html", "class.html", "media.html", "contact.html"]
    
    all_data = {}
    for file_name in files:
        file_path = os.path.join(base_dir, file_name)
        content_data = extract_content(file_path)
        if content_data:
            all_data[file_name] = content_data
            
    output_path = os.path.join(base_dir, "cms_raw_data.json")
    with open(output_path, 'w', encoding='utf-8') as f:
        json.dump(all_data, f, ensure_ascii=False, indent=2)
    
    print(f"Content extraction complete. Data saved to {output_path}")
