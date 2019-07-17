const { TypedCssModulesPlugin } = require('typed-css-modules-webpack-plugin');

module.exports = ({ config  }) => {
	config.module.rules.push({
		test: /\.(ts|tsx)$/,
		use: [
			{
				loader: require.resolve('awesome-typescript-loader'),
				options: {
					configFileName: './.storybook/tsconfig.json'
				},
			},
		],
	});

	config.module.rules.push({
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
	});

	config.plugins.push(
		new TypedCssModulesPlugin({
      globPattern: 'src/**/*.scss',
    }),
	);

	config.resolve.extensions.push('.ts', '.tsx');

	return config;
};
