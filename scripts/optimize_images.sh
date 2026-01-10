#!/bin/bash

# Maya Flor Image Optimization Script
# Requirement: ImageMagick (brew install imagemagick)

SOURCE_DIR="public/images/original"
TARGET_DIR="public/images/optimized"

mkdir -p "$TARGET_DIR"

echo "Starting image optimization..."

# Recursively find all jpg/png files in original folder
find "$SOURCE_DIR" -type f \( -name "*.jpg" -o -name "*.jpeg" -o -name "*.png" \) | while read img; do
    # Get relative path
    rel_path=$(realpath --relative-to="$SOURCE_DIR" "$img")
    target_path="$TARGET_DIR/${rel_path%.*}.webp"
    
    # Create target directory if it doesn't exist
    mkdir -p "$(dirname "$target_path")"
    
    echo "Optimizing: $rel_path -> ${target_path}"
    
    # Convert to webp with 85% quality
    magick "$img" -quality 85 "$target_path"
done

echo "Optimization complete!"
