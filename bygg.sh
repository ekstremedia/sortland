#!/bin/bash
echo "building sortland..."
rm -rf js/
npm run b
cp ./dathtaccess ../js/.htaccess
