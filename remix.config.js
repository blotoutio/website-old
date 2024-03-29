module.exports = {
  appDirectory: 'app',
  browserBuildDirectory: 'public/build',
  publicPath: '/build/',
  serverBuildDirectory: 'server/build',
  devServerPort: 8002,
  routes(defineRoute) {
    return defineRoute((route) => {
      route('', 'routes/home.jsx')
    })
  },
}
