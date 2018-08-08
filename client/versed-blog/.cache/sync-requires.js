// prefer default export if available
const preferDefault = m => m && m.default || m


exports.components = {
  "component---src-templates-tags-js": preferDefault(require("/Users/syed/Documents/Programs/AskVersed/versed-blog/src/templates/tags.js")),
  "component---src-templates-blog-post-js": preferDefault(require("/Users/syed/Documents/Programs/AskVersed/versed-blog/src/templates/blog-post.js")),
  "component---cache-dev-404-page-js": preferDefault(require("/Users/syed/Documents/Programs/AskVersed/versed-blog/.cache/dev-404-page.js")),
  "component---src-pages-404-js": preferDefault(require("/Users/syed/Documents/Programs/AskVersed/versed-blog/src/pages/404.js")),
  "component---src-pages-index-js": preferDefault(require("/Users/syed/Documents/Programs/AskVersed/versed-blog/src/pages/index.js"))
}

