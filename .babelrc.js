// SPDX-FileCopyrightText: 2022 aas-core3.0rc02-typescript AUTHORS
//
// SPDX-License-Identifier: MIT

const sharedPresets = ['@babel/typescript'];
const shared = {
  ignore: ['src/**/*.spec.ts'],
  presets: sharedPresets
}

module.exports = {
  env: {
    esmUnbundled: shared,
    esmBundled: {
      ...shared,
      presets: [['@babel/preset-env', {
        targets: "> 0.25%, not dead"
      }], ...sharedPresets],
    },
    cjs: {
      ...shared,
      presets: [['@babel/preset-env', {
        modules: 'commonjs'
      }], ...sharedPresets],
    },
    test: {
      presets: ['@babel/preset-env', ...sharedPresets]    
    },
  }
}