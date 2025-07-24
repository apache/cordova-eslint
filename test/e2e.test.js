/*!
    Licensed to the Apache Software Foundation (ASF) under one
    or more contributor license agreements.  See the NOTICE file
    distributed with this work for additional information
    regarding copyright ownership.  The ASF licenses this file
    to you under the Apache License, Version 2.0 (the
    "License"); you may not use this file except in compliance
    with the License.  You may obtain a copy of the License at

        http://www.apache.org/licenses/LICENSE-2.0

    Unless required by applicable law or agreed to in writing,
    software distributed under the License is distributed on an
    "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
    KIND, either express or implied.  See the License for the
    specific language governing permissions and limitations
    under the License.
*/

const { describe, it } = require('node:test');
const assert = require('assert');

const path = require('path');
const { ESLint } = require('eslint');

describe('Cordova ESLint configuration', () => {
    const configs = ['index', 'node', 'node-tests', 'browser', 'browser-tests'];

    for (const config of configs) {
        it(`loads config "${config}" without throwing`, () => {
            let eslinter = null;

            assert.doesNotThrow(() => {
                eslinter = new ESLint({
                    overrideConfigFile: path.join(__dirname, '..', `${config}.js`)
                });
            });

            // We have to actually invoke the linter for the config files to get parsed
            return eslinter.lintText('');
        });
    }
});
