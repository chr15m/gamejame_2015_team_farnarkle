#!/bin/bash

# get into this script's own root
cd "$( dirname "${BASH_SOURCE[0]}" )/.."

OUTDIR=gh-pages-build/

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
