const MODULE_RESOLVER = [
  'module-resolver',
  {
    extension: ['.js', '.ts', '.ios.js', '.ios.ts', '.android.js', '.android.ts', '.json'],
    alias: {
      '@Components': './src/components',
      '@Navigation': './src/navigation'
    }
  }
]

module.exports = {
  presets: ['module:@react-native/babel-preset'],
  plugins: ['react-native-reanimated/plugin']
};
