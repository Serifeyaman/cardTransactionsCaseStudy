module.exports = {
  presets: ['module:metro-react-native-babel-preset'],
  plugins: [
    'nativewind/babel',
    [
      'module-resolver',
      {
        extensions: [
          '.ios.js',
          '.android.js',
          '.ios.jsx',
          '.android.jsx',
          '.js',
          '.jsx',
          '.json',
        ],
        root: ['./'],
        alias: {
          '@app/views': './src/views',
          '@app/routes': './src/routes',
          '@app/components': './src/components',
          '@app/assets': './src/assets',
          '@app/lib': './src/lib',
        },
      },
    ],
  ],
};
