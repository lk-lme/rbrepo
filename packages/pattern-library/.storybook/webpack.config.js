const SpeedMeasurePlugin = require('speed-measure-webpack-plugin');
const { TypedCssModulesPlugin } = require('typed-css-modules-webpack-plugin');

const smp = new SpeedMeasurePlugin();

module.exports = ({ config }) => {
  const rules = config.module.rules
    .filter(({ test }) => !test.toString().includes('svg'))
    .concat([
      {
        test: /(?!test)\.(ts|tsx)$/,
        use: [
          {
            loader: require.resolve('ts-loader'),
            options: {
              transpileOnly: true,
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

  return smp.wrap({
		...config,
		module: {
			...config.module,
			rules,
		},
	});
};
