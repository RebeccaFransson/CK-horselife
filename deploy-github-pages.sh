#!/bin/sh
# Script to manage github pages deployment using a 'distribution' directory
# Ref: http://www.damian.oquanta.info/posts/one-line-deployment-of-your-site-to-gh-pages.html
# https://gist.github.com/cobyism/4730490
#
# This script assumes '${TARGET_DEPLOYMENT_BRANCH}' branch is the target deployment branch
#  note: in the case of standard github pages, this is is 'gh-pages')
#  note: in the case of a user github pages, this is is 'master')
# This script will deploy the CURRENT branch to TARGET_DEPLOYMENT_BRANCH
set -o

TARGET_DEPLOYMENT_BRANCH='gh-pages'

npm run build

# Check if there are any changes which might need to be commited and prevent deployment
# http://stackoverflow.com/questions/5139290/how-to-check-if-theres-nothing-to-be-committed-in-the-current-branch
if [ "$(git status --porcelain)" ];
then