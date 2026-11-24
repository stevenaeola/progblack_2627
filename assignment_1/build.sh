#!/bin/bash
sed '/^---/ d' PITCHME.md | sed '/^@/ d' | sed '/^:::/ d' | sed 's/{.*}//' > README.md

PATHEND=$(pwd | rev | cut -d'/' -f-2 | rev)
ASSIGNMENT_NAME="COMP1101 Prog Black Web Dev"

pandoc  -V theme=simple -t revealjs -s PITCHME.md -o PITCHME.html
pandoc -V fontfamily:ClearSans -V fontfamilyoptions:sfdefault README.md -o README.pdf
pandoc -V fontfamily:ClearSans -V fontfamilyoptions:sfdefault FAQ.md -o FAQ.pdf

qpdf --empty --pages "${ASSIGNMENT_NAME} Coversheet.pdf" README.pdf -- "${ASSIGNMENT_NAME} Specification.pdf"

git add .
git commit -m "Working on presentation $PATHEND"
git push -u origin main

