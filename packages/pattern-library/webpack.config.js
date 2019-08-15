const path = require('path');

/**
 * Dummy webpack config for IntelliJ path resolution
 */
module.exports = {
  context: __dirname,
  resolve: {
    alias: {
      Components: path.resolve(__dirname, '../src/components/'),
      Hooks: path.resolve(__dirname, '../src/hooks/'),
      HOC: path.resolve(__dirname, '../src/hoc/'),
      SVG: path.resolve(__dirname, '../src/svg/'),
      Utils: path.resolve(__dirname, '../src/utils/'),
      Styles: path.resolve(__dirname, '../src/styles/'),
      Decorators: path.resolve(__dirname, './decorators'),ction SelectInProjectView
    },
  }
};
