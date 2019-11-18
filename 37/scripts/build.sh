#!/usr/bin/env bash
# js transform
babel --presets react,es2015 js/source/ -d js/build
# js 打包
browserify js/build/app.js -o bundle.js
browserify js/build/discover.js -o discover-bundle.js
# 完成
#date; echo;
