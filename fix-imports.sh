#!/bin/bash

# Function to fix imports in a file
fix_imports() {
    local file=$1
    # Fix component imports
    sed -i '' 's/from "'\''/from "@\//g' "$file"
    # Fix next/image and next/link imports
    sed -i '' 's/from "next\//from "next\//g' "$file"
}

# Photography pages
fix_imports "app/photography/page.tsx"
fix_imports "app/photography/wedding/page.tsx"
fix_imports "app/photography/landscape/page.tsx"
fix_imports "app/photography/portrait/page.tsx"
fix_imports "app/photography/wildlife/page.tsx"
fix_imports "app/photography/guides-2025/page.tsx"

# Videography pages
fix_imports "app/videography/page.tsx"
fix_imports "app/videography/filmmaking/page.tsx"
fix_imports "app/videography/youtube/page.tsx"
fix_imports "app/videography/documentary/page.tsx"
fix_imports "app/videography/commercial/page.tsx"
fix_imports "app/videography/guides-2025/page.tsx"
