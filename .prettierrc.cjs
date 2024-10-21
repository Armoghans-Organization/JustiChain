module.exports = {
    semi: true,
    tabWidth: 2, 
    useTabs: false, 
    singleQuote: true,
    trailingComma: 'es5',
    bracketSpacing: true,
    arrowParens: 'always',
    endOfLine: 'lf',
    printWidth: 80,
    htmlWhitespaceSensitivity: 'ignore',
    cssWhitespaceSensitivity: 'strict', 
    proseWrap: 'preserve',
    overrides: [
      {
        files: '*.html',
        options: {
          printWidth: 120,
        },
      },
    ],
  };
  