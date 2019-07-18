const { TypedCssModulesPlugin } = require('typed-css-modules-webpack-plugin');

module.exports = ({ config }) => {
  const rules = config.module.rules
    .filter(({ test }) => !test.toString().includes('svg'))
    .concat([
      {
        test: /\.(ts|tsx)$/,
        use: [
          {
            loader: require.resolve('awesome-typescript-loader'),
            options: {
              configFileName: './.storybook/tsconfig.json',
            },
          },
        ],
      },
      {
        test: /\.scss$/,
        use: [
          {
            loader: require.resolve('style-loader'),
          },
          {
            loader: require.resolve('css-loader'),
            options: {
              modules: true,
            },
          },
          {
            loader: require.resolve('sass-loader'),
          },
        ],
      },
      {
        test: /\.svg$/,
        use: [
          {
            loader: '@svgr/webpack',
          },
        ],
      },
    ]);

  config.plugins.push(
    new TypedCssModulesPlugin({
      globPattern: 'src/**/*.scss',
    }),
  );

	config.resolve.extensions.push('.ts', '.tsx');

  return {
		...config,
		module: {
			...config.module,
			rules,
		},
	};
};
