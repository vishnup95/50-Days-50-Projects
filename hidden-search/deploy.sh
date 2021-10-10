#!/usr/bin/env sh

# abort on errors
set -e

# build

# navigate into the build output directory
mkdir dist
cd dist
git init
git fetch git@personal:vishnup95/50-Days-50-Projects.git
git pull git@personal:vishnup95/50-Days-50-Projects.git gh-pages --rebase
rm -rf hidden-search
npm run build


# if you are deploying to a custom domain
# echo 'www.example.com' > CNAME


git add -A
git commit -m 'deploy'
# git status

# if you are deploying to https://<USERNAME>.github.io
# git push -f git@github.com:<USERNAME>/<USERNAME>.github.io.git master

# if you are deploying to https://<USERNAME>.github.io/<REPO>

git push git@personal:vishnup95/50-Days-50-Projects.git master:gh-pages -f

cd -