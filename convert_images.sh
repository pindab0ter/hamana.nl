#!/bin/bash

cd "$(pwd)" || exit

shopt -s nullglob nocaseglob extglob

for FILE in *.@(jpg|jpeg|tif|tiff|png); do
    cwebp -m 6 -q 70 -mt -af -progress "$FILE" -o "${FILE%.*}".webp;
done
