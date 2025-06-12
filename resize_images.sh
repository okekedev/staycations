#!/bin/bash

# Directory containing images
IMG_DIR="/home/okeke/Desktop/Staycations/staycations/public/images"
BACKUP_DIR="$IMG_DIR/originals"

# Maximum width and height (1920x1080 for hero size)
MAX_WIDTH=1920
MAX_HEIGHT=1080

# JPEG quality
QUALITY=85

echo "Starting image optimization..."
echo "Backing up and resizing images larger than ${MAX_WIDTH}x${MAX_HEIGHT}..."

# Process all jpg, JPG, jpeg, JPEG, png, PNG files
for img in "$IMG_DIR"/*.{jpg,JPG,jpeg,JPEG,png,PNG}; do
    # Skip if file doesn't exist (handles glob pattern when no matches)
    [ -e "$img" ] || continue
    
    # Skip if it's the originals directory
    [[ "$img" == *"/originals/"* ]] && continue
    
    # Get filename
    filename=$(basename "$img")
    
    # Skip already processed files and special files
    if [[ "$filename" == "favicon.png" ]] || [[ "$filename" == "logo.png" ]] || [[ "$filename" == "react.svg" ]]; then
        echo "Skipping special file: $filename"
        continue
    fi
    
    # Get image dimensions
    dimensions=$(ffprobe -v error -select_streams v:0 -show_entries stream=width,height -of csv=s=x:p=0 "$img" 2>/dev/null)
    
    if [ -z "$dimensions" ]; then
        echo "Could not get dimensions for $filename, skipping..."
        continue
    fi
    
    width=$(echo $dimensions | cut -d'x' -f1)
    height=$(echo $dimensions | cut -d'x' -f2)
    
    # Check if image needs resizing
    if [ "$width" -gt "$MAX_WIDTH" ] || [ "$height" -gt "$MAX_HEIGHT" ]; then
        echo "Resizing $filename (${width}x${height})..."
        
        # Backup original
        cp "$img" "$BACKUP_DIR/$filename"
        
        # Resize image maintaining aspect ratio
        # -vf scale='min(1920,iw)':'-1' means: width = minimum of 1920 or input width, height = maintain aspect ratio
        if [[ "${filename,,}" == *.png ]]; then
            # For PNG files
            ffmpeg -i "$img" -vf "scale='min($MAX_WIDTH,iw)':'min($MAX_HEIGHT,ih)':force_original_aspect_ratio=decrease" -y "${img}.tmp.png" 2>/dev/null
            mv "${img}.tmp.png" "$img"
        else
            # For JPEG files
            ffmpeg -i "$img" -vf "scale='min($MAX_WIDTH,iw)':'min($MAX_HEIGHT,ih)':force_original_aspect_ratio=decrease" -q:v 2 -y "${img}.tmp.jpg" 2>/dev/null
            mv "${img}.tmp.jpg" "$img"
        fi
        
        # Get new size
        new_size=$(ls -lh "$img" | awk '{print $5}')
        echo "  Resized to: $new_size"
    else
        echo "Skipping $filename (${width}x${height}) - already optimal size"
    fi
done

echo ""
echo "Image optimization complete!"
echo "Original images backed up to: $BACKUP_DIR"
echo ""
echo "New image sizes:"
ls -lh "$IMG_DIR"/*.{jpg,JPG,jpeg,JPEG,png,PNG} 2>/dev/null | grep -v "/originals/" | awk '{print $9 ": " $5}'