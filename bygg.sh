#!/bin/bash
echo "building nesthus.no..."
rm -rf js/
npm run b
cp ./dathtaccess ../js/.htaccess
