# 删除上一个版本
rm -rf __deployme
mkdir __deployme
# 构建
sh scripts/build.sh
# 压缩JavaScript
uglify -s bundle.js -o __deployme/bundle.js
# 压缩CSS
cssshrink bundle.css > __deployme/bundle.css
# 复制HTML和图片
cp index.html __deployme/index.html
cp -r images/ __deployme/images/
# 完成
date; echo;