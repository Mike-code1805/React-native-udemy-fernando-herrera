module.exports = {
  presets: ['module:metro-react-native-babel-preset'],
  plugins: [
    [
      'module:react-native-dotenv',
      {
        allowlist: ['RN_TMDB_KEY'],
      },
    ],
    'react-native-reanimated/plugin',
  ],
};
