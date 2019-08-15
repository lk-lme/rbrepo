const R = require('ramda');
const path = require('path');
const { TypedCssModulesPlugin } = require('typed-css-modules-webpack-plugin');

module.exports = R.pipe(
  R.prop('config'),
  R.over(
    R.lensPath(['module', 'rules']),
    R.pipe(
      R.filter(({ test }) => !test.toString().includes('svg')),
      R.concat([
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
      ]),
    ),
  ),
  R.over(
    R.lensPath(['plugins']),
    R.append(
      new TypedCssModulesPlugin({
        globPattern: 'src/**/*.scss',
      }),
    ),
  ),
  R.over(
    R.lensPath(['resolve', 'extensions']),
    R.concat(['.ts', '.tsx']),
  ),
  R.over(
    R.lensPath(['resolve']),
    R.mergeDeepLeft({
      alias: {
        Components: path.resolve(__dirname, '../src/components/'),
        Hooks: path.resolve(__dirname, '../src/hooks/'),
        HOC: path.resolve(__dirname, '../src/hoc/'),
        SVG: path.resolve(__dirname, '../src/svg/'),
        Utils: path.resolve(__dirname, '../src/utils/'),
        Styles: path.resolve(__dirname, '../src/styles/'),
        Decorators: path.resolve(__dirname, './decorators'),
      },
    }),
  ),
);
