// prefer default export if available
const preferDefault = m => m && m.default || m


exports.components = {
  "component---src-templates-tags-js": preferDefault(require("C:\\Users\\Hfoster\\Desktop\\AskVersed\\client\\versed-blog\\src\\templates\\tags.js")),
  "component---src-templates-blog-post-js": preferDefault(require("C:\\Users\\Hfoster\\Desktop\\AskVersed\\client\\versed-blog\\src\\templates\\blog-post.js")),
  "component---cache-dev-404-page-js": preferDefault(require("C:\\Users\\Hfoster\\Desktop\\AskVersed\\client\\versed-blog\\.cache\\dev-404-page.js")),
  "component---src-pages-404-js": preferDefault(require("C:\\Users\\Hfoster\\Desktop\\AskVersed\\client\\versed-blog\\src\\pages\\404.js")),
  "component---src-pages-index-js": preferDefault(require("C:\\Users\\Hfoster\\Desktop\\AskVersed\\client\\versed-blog\\src\\pages\\index.js"))
}

