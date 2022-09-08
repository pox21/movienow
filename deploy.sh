#!/usr/bin/env sh

# abort on errors
set -e

# build
npm run build

# navigate into the build output directory
cd build

# if you are deploying to a custom domain
# echo 'www.example.com' > CNAME
github.com/pox21/colors-shop
git init
git checkout -b deploy
git add -A
git commit -m 'deploy'

# if you are deploying to https://pox21.github.io
# git push -f git@github.com:pox21/pox21.github.io.git main

# if you are deploying to https://pox21.github.io/colors-shop
# git push -f git@github.com:pox21/colors-shop.git main:gh-pages