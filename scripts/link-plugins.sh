#!/bin/sh

SCRIPT_DIR="$(dirname "$0")"
cd "$SCRIPT_DIR"

PLUGIN_COLLECTIONS="../../gatsby-plugin-collections/"

if [ -d "$PLUGIN_COLLECTIONS" ]; then
  echo "Located gatsby-plugin-collections"
  ln -s ../../gatsby-plugin-collections/lib ../node_modules/gatsby-plugin-collections
  echo "Linked."
else
  echo "Could not find gatsby-plugin-collections"
fi
