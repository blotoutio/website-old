module.exports = {
  serverBuildTarget: 'vercel',
  assetsBuildDirectory: 'public/build',
  serverBuildPath: 'server/build',
  routes(defineRoute) {
    return defineRoute((route) => {
      route('', 'routes/home.jsx')
    })
  },
}
