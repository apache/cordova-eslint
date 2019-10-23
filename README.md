# @cordova/eslint-config
This repository centralizes the ESLint configuration used for Cordova's development.

## Installation

`eslint-config-cordova` comes with all plugins configs and even `eslint` itself. So all you need to do to get started is:

    npm i -D @cordova/eslint-config


## Usage
```yml
# In package.json
{
  "scripts": {
    "eslint": "eslint ."
  }
}
```

```yml
# In .eslintrc.yml
root: true
extends: '@cordova/eslint-config/node'
```

```yml
# In spec/.eslintrc.yml
extends: '@cordova/eslint-config/node-tests'
```

```yml
# In cordova-js-src/.eslintrc.yml
extends: '@cordova/eslint-config/browser'
```

## Reference

This package exposes the following shareable ESLint configurations:

### `@cordova/eslint-config/node` (or simply `@cordova`)
For linting scripts intended to be run with Node.js.

### `@cordova/eslint-config/node-tests`
For linting Jasmine tests of Cordova's Node.js scripts.

### `@cordova/eslint-config/browser`
For linting cordova-style CommonJS modules intended to be run in the browser (before they are bundled).

### `@cordova/eslint-config/browser-tests`
For linting Jasmine tests of Cordova's browser code.
