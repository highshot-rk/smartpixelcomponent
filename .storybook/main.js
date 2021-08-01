module.exports = {
  stories: [
    // Paths to the story files
    '../components/**/*.stories.mdx',
    '../components/**/*.stories.@(js|jsx|ts|tsx)'
  ],
  addons: ['@storybook/addon-postcss', '@storybook/addon-links', '@storybook/addon-essentials', '@storybook/addon-controls', 'storybook-tailwind-dark-mode'],
  webpackFinal: async config => {
    config.module.rules.push({
      test: /\.scss$/,
      use: ['style-loader', 'css-loader', 'postcss-loader', 'sass-loader']
    })
    return config
  }
}
