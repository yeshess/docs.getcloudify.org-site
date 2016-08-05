find -L content -name "*.md" | xargs -l node migrate-docs.js
find -L content -type f -name "overview.md" -execdir mv {} index.md \;
