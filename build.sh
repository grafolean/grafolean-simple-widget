#!/bin/bash
set -xe

npm run build
cp src/manifest.json dist/
cd dist/
mv main.js widget.js
tar -cvzf ../remotewidget.tar.gz widget.js manifest.json
