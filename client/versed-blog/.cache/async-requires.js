// prefer default export if available
const preferDefault = m => m && m.default || m

exports.components = {
  "component---src-templates-tags-js": () => import("/Users/syed/Documents/Programs/AskVersed/versed-blog/src/templates/tags.js" /* webpackChunkName: "component---src-templates-tags-js" */),
  "component---src-templates-blog-post-js": () => import("/Users/syed/Documents/Programs/AskVersed/versed-blog/src/templates/blog-post.js" /* webpackChunkName: "component---src-templates-blog-post-js" */),
  "component---cache-dev-404-page-js": () => import("/Users/syed/Documents/Programs/AskVersed/versed-blog/.cache/dev-404-page.js" /* webpackChunkName: "component---cache-dev-404-page-js" */),
  "component---src-pages-404-js": () => import("/Users/syed/Documents/Programs/AskVersed/versed-blog/src/pages/404.js" /* webpackChunkName: "component---src-pages-404-js" */),
  "component---src-pages-index-js": () => import("/Users/syed/Documents/Programs/AskVersed/versed-blog/src/pages/index.js" /* webpackChunkName: "component---src-pages-index-js" */)
}

exports.data = () => import("/Users/syed/Documents/Programs/AskVersed/versed-blog/.cache/data.json")

