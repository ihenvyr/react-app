const config = {
  // Environment
  env: process.env.NODE_ENV || 'development',

  // Server
  server_host: 'localhost',
  server_port: process.env.PORT || 3000,

  // Webpack
  compiler_hot: true,
  compiler_lazy: false,
  compiler_css_modules: true,
  compiler_devtool: 'source-map',
  compiler_hash_type: 'hash',
  compiler_fail_on_warning: false,
  compiler_quiet: false,
  compiler_public_path: '/',
  compiler_stats: {
    chunks: false,
    chunkModules: false,
    colors: true
  },
  compiler_vendor: [
    // 'history',
    'react',
    // 'react-redux',
    // 'react-router',
    // 'react-router-redux',
    // 'redux'
  ]
};

config.globals = {
  'process.env': {
    'NODE_ENV': JSON.stringify(config.env)
  },
  'NODE_ENV': config.env,
  '__DEV__': config.env === 'development',
  '__PROD__': config.env === 'production',
  '__TEST__': config.env === 'test',
  '__DEBUG__': config.env === 'development'
};

module.exports = config;
