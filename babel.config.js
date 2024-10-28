module.exports = function(api) {
  api.cache(true);
  return {
    presets: ['babel-preset-expo'],
    plugins: [
      [
        'module-resolver',
        {
          root: ['./src'], //pasta raíz onde vou querer mexer - raiz e seu filho ai ja consigo pegar seus sub arquivos
          alias: {
            '@assets': './src/assets',
            '@components': './src/components',
            '@routes': './src/routes',
            '@screens': './src/screens',
            '@storage': './src/storage',
            '@utils': './src/utils',
          },
        },
      ],
    ],
  };
};
