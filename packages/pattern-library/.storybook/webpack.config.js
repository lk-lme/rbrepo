const R = require('ramda');
const path = require('path');
const { TypedCssModulesPlugin } = require('typed-css-modules-webpack-plugin');

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
  
  config.resolve = R.mergeDeepLeft({
    alias: {
      Components: path.resolve(__dirname, '../src/components/'),
      Hooks: path.resolve(__dirname, '../src/hooks/'),
      HOC: path.resolve(__dirname, '../src/hoc/'),
      SVG: path.resolve(__dirname, '../src/svg/'),
      Utils: path.resolve(__dirname, '../src/utils/'),
      Styles: path.resolve(__dirname, '../src/styles/'),
      Decorators: path.resolve(__dirname, './decorators'),
    },
  })(config.resolve);

  return {
		...config,
		module: {
			...config.module,
			rules,
		},
	};
};



//
// const R = require('ramda');
// const path = require('path');
// const { TypedCssModulesPlugin } = require('typed-css-modules-webpack-plugin');

// module.exports = ({ config }) => {
//   // const rules = config.module.rules
//   //   .filter(({ test }) => !test.toString().includes('svg'))
//   //   .concat([
//   //     {
//   //       test: /(?!test)\.(ts|tsx)$/,
//   //       use: [
//   //         {
//   //           loader: require.resolve('ts-loader'),
//   //           options: {
//   //             transpileOnly: true,
//   //           },
//   //         },
//   //       ],
//   //     },
//   //     {
//   //       test: /\.scss$/,
//   //       use: [
//   //         {
//   //           loader: require.resolve('style-loader'),
//   //         },
//   //         {
//   //           loader: require.resolve('css-loader'),
//   //           options: {
//   //             modules: true,
//   //           },
//   //         },
//   //         {
//   //           loader: require.resolve('sass-loader'),
//   //         },
//   //       ],
//   //     },
//   //     {
//   //       test: /\.svg$/,
//   //       use: [
//   //         {
//   //           loader: '@svgr/webpack',
//   //         },
//   //       ],
//   //     },
//   //   ]);

//   // config.plugins.push(
//   //   new TypedCssModulesPlugin({
//   //     globPattern: 'src/**/*.scss',
//   //   }),
//   // );

//   // config.resolve.extensions.push('.ts', '.tsx');
  
//   config.resolve = R.mergeDeepLeft({
//     alias: {
//       Components: path.resolve(__dirname, '../src/components/'),
//       Hooks: path.resolve(__dirname, '../src/hooks/'),
//       HOC: path.resolve(__dirname, '../src/hoc/'),
//       SVG: path.resolve(__dirname, '../src/svg/'),
//       Styles: path.resolve(__dirname, '../src/styles/'),
//       Decorators: path.resolve(__dirname, './decorators'),
//     },
//   })(config.resolve);

//   // console.log(config.resolve);

//   return R.pipe(
//     R.over(
//       R.lensPath(['module', 'rules']),
//       R.pipe(
//         R.filter(({ test }) => !test.toString().includes('svg')),
//         R.concat([
//         {
//           test: /(?!test)\.(ts|tsx)$/,
//           use: [
//             {
//               loader: require.resolve('ts-loader'),
//               options: {
//                 transpileOnly: true,
//               },
//             },
//           ],
//         },
//         {
//           test: /\.scss$/,
//           use: [
//             {
//               loader: require.resolve('style-loader'),
//             },
//             {
//               loader: require.resolve('css-loader'),
//               options: {
//                 modules: true,
//               },
//             },
//             {
//               loader: require.resolve('sass-loader'),
//             },
//           ],
//         },
//         {
//           test: /\.svg$/,
//           use: [
//             {
//               loader: '@svgr/webpack',
//             },
//           ],
//         },
//       ])
//       ),
//     ),
//     // R.over(R.lensProp('extensions'), R.concat(['.ts', '.tsx'])),
//     // R.over(
//     //   R.lensProp('plugins'),
//     //   R.append(
//     //     new TypedCssModulesPlugin({
//     //       globPattern: 'src/**/*.scss',
//     //     }),
//     //   ),
//     // ),
//     R.mergeDeepLeft({
//       resolve: {
//         alias: {
//           Components: path.resolve(__dirname, '../src/components/'),
//           Hooks: path.resolve(__dirname, '../src/hooks/'),
//           HOC: path.resolve(__dirname, '../src/hoc/'),
//           SVG: path.resolve(__dirname, '../src/svg/'),
//           Styles: path.resolve(__dirname, '../src/styles/'),
//           Decorators: path.resolve(__dirname, './decorators'),
//         },
//       },
//     }),
//   )(config);

//   return {
// 		...config,
// 		module: {
// 			...config.module,
// 			rules,
// 		},
// 	};
// };
