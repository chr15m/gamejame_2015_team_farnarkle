#!/bin/bash

# get into this script's own root
cd "$( dirname "${BASH_SOURCE[0]}" )/.."

OUTDIR=gh-pages-build/
COMMIT_ID=`git rev-parse master`

echo "Cleaning with lein cljsbuild clean."
lein cljsbuild clean
echo "Building statically with lein cljsbuild."
# lein with-profile -dev,+build-static cljsbuild once
lein with-profile +dev cljsbuild once
rm -rf gh-pages-build
mkdir -p gh-pages-build && \
rsync -a --progress resources/public/ $OUTDIR && \
echo "Running 'lein dump-index-html'"
lein dump-index-html > $OUTDIR/index.html
echo "Checking out gh-pages branch and syncing."
git checkout gh-pages && \
rsync -a --progress $OUTDIR .
echo "Adding everything to the gh-pages branch."
git add css img index.html js music
echo "Now do:"
echo "git commit -m 'gh-pages build of commit ID $COMMIT_ID'"
echo "git push # to get gh-pages branch live."
