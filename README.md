<!--
#
# Licensed to the Apache Software Foundation (ASF) under one
# or more contributor license agreements.  See the NOTICE file
# distributed with this work for additional information
# regarding copyright ownership.  The ASF licenses this file
# to you under the Apache License, Version 2.0 (the
# "License"); you may not use this file except in compliance
# with the License.  You may obtain a copy of the License at
#
#   http://www.apache.org/licenses/LICENSE-2.0
#
# Unless required by applicable law or agreed to in writing,
# software distributed under the License is distributed on an
# "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
# KIND, either express or implied.  See the License for the
# specific language governing permissions and limitations
# under the License.
#
-->

# @cordova/eslint-config

[![NPM](https://nodei.co/npm/@cordova/eslint-config.svg?style=flat&data=n,v,u&color=blue)](https://nodei.co/npm/@cordova/eslint-config/)

[![Node CI](https://github.com/apache/cordova-eslint/actions/workflows/ci.yml/badge.svg?branch=master)](https://github.com/apache/cordova-eslint/actions/workflows/ci.yml?query=branch%3Amaster)
[![Release Audit](https://github.com/apache/cordova-eslint/actions/workflows/release-audit.yml/badge.svg?branch=master)](https://github.com/apache/cordova-eslint/actions/workflows/release-audit.yml?query=branch%3Amaster)
[![codecov.io](https://codecov.io/github/apache/cordova-eslint/coverage.svg?branch=master)](https://codecov.io/github/apache/cordova-eslint?branch=master)

This repository centralizes the ESLint configuration used for Cordova's development, specifically repositories that start with `apache/cordova-`.

## Installation

`@cordova/eslint-config` comes with all plugins configs and even `eslint` itself. So all you need to do to get started is:

```shell
npm i -D @cordova/eslint-config
```

## Usage

```yml
# In package.json
{
  "scripts": {
    "lint": "eslint"
  }
}
```

```javascript
// In eslint.config.js
const { defineConfig, globalIgnores } = require('eslint/config');
const nodeConfig = require('@cordova/eslint-config/node');
const nodeTestConfig = require('@cordova/eslint-config/node-tests');
const browserConfig = require('@cordova/eslint-config/browser');

module.exports = defineConfig([
    globalIgnores([
        // Add files or folders to ignore...
        // For example: exclude everything in the "coverage" directory.
        'coverage'
    ]),

    // Node Linting
    ...nodeConfig.map(config => ({
        files: [
            // Add files or folders to check...
            // For example: include everything in the "lib" directory.
            // By default, ESLint lints files with extensions .js, .mjs & .cjs.
            'lib'
        ],

        // Spread each shared config to preserve its settings while extending or overriding specific properties
        ...config
    })),

    // Node Test Linting
    ...nodeTestConfig.map(config => ({
        // Add files or folders to check...
        // For example: include everything in the "spec" directory.
        // By default, ESLint lints files with extensions .js, .mjs & .cjs.
        files: [
            'spec'
        ],

        // Spread each shared config to preserve its settings while extending or overriding specific properties
        ...config,

        // Overriding Rules
        rules: {
            // Make sure the original rules are applied
            ...(config.rules || {}),

            // Then append or update rules
            'prefer-promise-reject-errors': 'off'
        }
    })),

    // Browser Linting
    ...browserConfig.map(config => ({
        files: [
            // Add files or folders to check...
            // For Example: Platforms usuall has "cordova-js-src" that comiles down into a cordova.js file to runs in the app's WebView.
            'cordova-js-src'
        ],

        // Spread each shared config to preserve its settings while extending or overriding specific properties
        ...config,

        // Overriding Language Options
        languageOptions: {

            // Make sure the original languageOptions are applied if existing
            ...(config?.languageOptions || {}),

            // Overriding Global
            globals: {
                // Make sure the original languageOptions.globals are applied
                ...(config.languageOptions?.globals || {})

                // Then append or update globals
                require: 'readonly',
                module: 'readonly',
            }
        }
    }))
]);
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
