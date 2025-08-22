const { shareAll, withModuleFederationPlugin } = require('@angular-architects/module-federation/webpack');


module.exports = withModuleFederationPlugin({
  name: 'shell',
  remotes: {
    'auth-mf': 'authMf@http://localhost:4301/remoteEntry.js',
    'project-mf': 'projectMf@http://localhost:4302/remoteEntry.js',
    'analytics-mf': 'analyticsMf@http://localhost:4303/remoteEntry.js',
  },
  shared: {
    ...shareAll({ singleton: true, strictVersion: true, requiredVersion: 'auto' }),
  },
});
