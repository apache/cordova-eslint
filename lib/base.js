/*
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

module.exports = {
    extends: 'standard',

    env: {
        // `standard` sets this to true. We reset it here,
        // to make the config extend logic clearer.
        node: false
    },

    rules: {
        indent: ['error', 4],
        camelcase: 'off',

        // We replicate the eslint-config-semistandard rules here instead of
        // extending that config, since it is poorly maintained.
        semi: [2, 'always'],
        'no-extra-semi': 2
    }
};
