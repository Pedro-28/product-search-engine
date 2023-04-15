// npm i -D @babel/cli @babel/core @babel/node @babel/preset-env @babel/preset-typescript babel-plugin-module-resolver
module.exports = {
  presets: [
    [
      '@babel/preset-env',
      {
        targets: {
          node: 'current'
        }
      }
    ],
    '@babel/preset-typescript'
  ],
  plugins: [
    ['module-resolver', {
      alias: {
        '@application': './src/application',
        '@helpers': './src/helpers',
        '@infra': './src/infra'
      }
    }]
  ],
  ignore: [
    '**/*.spec.ts'
  ]
}