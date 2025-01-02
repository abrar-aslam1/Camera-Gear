#!/bin/bash

# Fix photography pages
sed -i '' 's/from "'\''/from "@\//g' app/photography/page.tsx
sed -i '' 's/from "'\''/from "@\//g' app/photography/wedding/page.tsx
sed -i '' 's/from "'\''/from "@\//g' app/photography/landscape/page.tsx
sed -i '' 's/from "'\''/from "@\//g' app/photography/portrait/page.tsx
sed -i '' 's/from "'\''/from "@\//g' app/photography/wildlife/page.tsx
sed -i '' 's/from "'\''/from "@\//g' app/photography/guides-2025/page.tsx

# Fix videography pages
sed -i '' 's/from "'\''/from "@\//g' app/videography/page.tsx
sed -i '' 's/from "'\''/from "@\//g' app/videography/filmmaking/page.tsx
sed -i '' 's/from "'\''/from "@\//g' app/videography/youtube/page.tsx
sed -i '' 's/from "'\''/from "@\//g' app/videography/documentary/page.tsx
sed -i '' 's/from "'\''/from "@\//g' app/videography/commercial/page.tsx
sed -i '' 's/from "'\''/from "@\//g' app/videography/guides-2025/page.tsx
