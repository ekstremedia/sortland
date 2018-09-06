#!/bin/bash
echo "building sortland..."
rm -rf js/
npm run b2
cp ./dathtaccess ../js/.htaccess
