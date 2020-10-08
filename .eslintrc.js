module.exports = {
  'extends': [
    "airbnb",
    "plugin:@typescript-eslint/recommended",
    "prettier",
    "prettier/react",
    "plugin:import/errors",
    "plugin:import/warnings",
    "plugin:import/typescript"
  ],
  'parser': '@typescript-eslint/parser',
  'env': {
    'jest': true,
  },
  'rules': {
    "react/jsx-props-no-spreading": "off",
    "import/prefer-default-export": 'off',
    "no-use-before-define": "off",
    "@typescript-eslint/no-use-before-define": "off",
    'react/jsx-filename-extension': 'off',
    'react/prop-types': 'off',
    'comma-dangle': 'off',
    "@typescript-eslint/indent": [2, 2],
    "import/no-unresolved": [2, { "commonjs": true, "amd": true }],
    "import/named": 2,
    "import/namespace": 2,
    "import/default": 2,
    "import/export": 2,
    "import/extensions": [
      "error",
      "ignorePackages",
      {
        "js": "never",
        "jsx": "never",
        "ts": "never",
        "tsx": "never"
      }
    ]
  },
  'globals': {
    "fetch": false
  }
}
