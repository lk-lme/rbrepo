module.exports = {
  setupFilesAfterEnv: [
    '@testing-library/react/cleanup-after-each',
    '@testing-library/jest-dom/extend-expect',
    './jest.setup.js',
  ],
  moduleNameMapper: {
    '\\.(jpg|jpeg|png|gif|eot|otf|webp|svg|ttf|woff|woff2|mp4|webm|wav|mp3|m4a|aac|oga)$': 'identity-obj-proxy',
    '\\.(css|scss)$': 'identity-obj-proxy',
    "^Components(.*)$": "<rootDir>/src/components$1",
    "^Hooks(.*)$": "<rootDir>/src/hooks$1",
    "^HOC(.*)$": "<rootDir>/src/hoc$1",
    "^SVG(.*)$": "<rootDir>/src/svg$1",
    "^Utils(.*)$": "<rootDir>/src/utils$1",
    "^Styles(.*)$": "<rootDir>/src/styles$1",
    "^Decorators(.*)$": "<rootDir>/src/decorators$1",
  },
};
