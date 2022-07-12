/** @returns {import('webpack').Configuration} Webpack Configuration */
module.exports = (config, { mode }) => {
  if (mode === 'development') {
    // Add dev plugin
  }

  // Add custom rules for your project
  // config.module.rules.push(YOUR_RULE)

  // Add custom plugins for your project
  // config.plugins.push(YOUR_PLUGIN)

  console.log({ config })
  config.module.rules.push({
    test: /\.less$/,
    use: [
      {
        loader: 'style-loader',
      },
      {
        loader: 'css-loader', // translates CSS into CommonJS
      },
      {
        loader: 'less-loader', // compiles Less to CSS
        options: {
          lessOptions: {
            // If you are using less-loader@5 please spread the lessOptions to options directly
            modifyVars: {
              'primary-color': '#001529',
              'link-color': '#1DA57A',
              'border-radius-base': '2px',
              'text-color-light': '#FFFFFF',
            },
            javascriptEnabled: true,
          },
        },
      },
    ],
    // ...other rules
  })
  return config
}
