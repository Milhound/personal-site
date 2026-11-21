#!/bin/bash
# Publish the static site to the directory Caddy serves (/var/www/milhound.com).
set -euo pipefail

SRC="$(cd "$(dirname "${BASH_SOURCE[0]}")" && pwd)/site/"
DEST=/var/www/milhound.com

sudo mkdir -p "$DEST"
sudo rsync -a --delete --chmod=D755,F644 --chown=root:root "$SRC" "$DEST/"
echo "Published $SRC -> $DEST"
