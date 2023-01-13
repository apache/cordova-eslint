<!--
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
-->

# Release Notes for Cordova ESLint

## 5.0.0 (Jan 13, 2023)

**Breaking:**

* [GH-35](https://github.com/apache/cordova-eslint/pull/35) dep!: bump all available packages
  * `eslint@^8.31.0`
  * `eslint-config-standard@^17.0.0`
  * `eslint-plugin-import@^2.27.2`
  * `eslint-plugin-promise@^6.1.1`
  * `jasmine@^4.5.0`
* [GH-37](https://github.com/apache/cordova-eslint/pull/37) chore!: update node engine requirement for external users
* [GH-34](https://github.com/apache/cordova-eslint/pull/34) chore!: bump node engine requirement >=16.0.0

**Other Changes:**

* [GH-33](https://github.com/apache/cordova-eslint/pull/33) ci(gh-actions): update workflow and dependencies
* [GH-30](https://github.com/apache/cordova-eslint/pull/30) chore(deps): bump minimist from 1.2.5 to 1.2.6

## 4.0.0 (Oct 27, 2021)

**Breaking:**

* [GH-22](https://github.com/apache/cordova-eslint/pull/22) feat!: bump `node` engine requirement `>=12.0.0`
* [GH-26](https://github.com/apache/cordova-eslint/pull/26) dep!: drop `eslint-plugin-standard`
* [GH-23](https://github.com/apache/cordova-eslint/pull/23) dep!: bump eslint, configs & plugins
  * `eslint@^7.32.0`
  * `eslint-config-standard@^16.0.3`
  * [GH-27](https://github.com/apache/cordova-eslint/pull/27) `eslint-plugin-import@^2.25.2`
  * `eslint-plugin-node@^11.1.0`
  * [GH-28](https://github.com/apache/cordova-eslint/pull/28) `eslint-plugin-promise@^5.1.1`

**Other Changes:**

* [GH-29](https://github.com/apache/cordova-eslint/pull/29) dep(dev): bump `jasmine@3.10.0`
* [GH-16](https://github.com/apache/cordova-eslint/pull/16) dep(dev): bump `nyc@^15.1.0`
* [GH-24](https://github.com/apache/cordova-eslint/pull/24) ci: fix workflow typo
* [GH-13](https://github.com/apache/cordova-eslint/pull/13) ci: apply random missing minor changes
* [GH-20](https://github.com/apache/cordova-eslint/pull/20) chore: rebuilt `package-lock` w/ version 2
* [GH-18](https://github.com/apache/cordova-eslint/pull/18) chore: `npmrc`
* chore(asf): update git notification settings

## 3.0.0 (Mar 24, 2020)

* [GH-12](https://github.com/apache/cordova-eslint/pull/12) breaking: bump package version to `3.0.0-dev` & dependencies upgrade
  * `eslint@^6.8.0`
  * `eslint-config-standard@^14.1.1`
  * `eslint-plugin-import@^2.20.1`
  * `eslint-plugin-node@^11.0.0`
* [GH-11](https://github.com/apache/cordova-eslint/pull/11) chore(dependency): drop `eslint-config-semistandard`

## 2.0.0 (Nov 11, 2019)

* chore: update `node` requirement `>= 10.13.0` & `eslint@6.6.0`
* [GH-10](https://github.com/apache/cordova-eslint/pull/10) feat: make base rules stricter & closer to `semistandard`
* [GH-9](https://github.com/apache/cordova-eslint/pull/9) docs: use new 'overrides' directive in sample config
* [GH-8](https://github.com/apache/cordova-eslint/pull/8) chore: update dependencies
* [GH-7](https://github.com/apache/cordova-eslint/pull/7) chore: increment package version to 2.0.0-dev
* [GH-5](https://github.com/apache/cordova-eslint/pull/5) Test all exported configurations
* [GH-6](https://github.com/apache/cordova-eslint/pull/6) Add GitHub Actions CI

## 1.0.0 (Nov 07, 2019)

* [GH-4](https://github.com/apache/cordova-eslint/pull/4) chore: updated `package-lock` & added `RELEASENOTES.md`
* [GH-3](https://github.com/apache/cordova-eslint/pull/3) chore: add `.npmignore`
* [GH-1](https://github.com/apache/cordova-eslint/pull/1) chore: added missing package repo & bug field
* [GH-2](https://github.com/apache/cordova-eslint/pull/2) chore: add `.asf.yaml`
* chore: format, lint, & add Apache license
* Release candidate
* chore: create eslint config for `cordova@9.x`
* Initial commit
