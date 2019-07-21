/*
 * @Author: kingweicai 
 * @Date: 2019-05-16 16:18:46 
 * @Last Modified by: kingweicai
 * @Last Modified time: 2019-06-26 17:19:19
 */
const path = require('path');

const testSuit = {
  name: 'suit10',
  compilerConfig: {
    cmd: ['-d', '-cc', '0', '-gn', '$gwx'],
    'FILESBASE': path.join(__dirname, './proj'),
    outputDir: path.join(__dirname, './out'),
    'FILES': [
      './page/index/index.wxs',
      './page/tools.wxs',
      './page/index1/index1.wxml',
      './page/logic.wxs',
      './page/index/index.wxml',

    ]
  },
  units: [{
      name: './page/index1/index1.wxml',
      renderPath: './page/index1/index1.wxml',
      renderData: function () {
        let env = {};
        let dd = {};
        let global = {};
        return {
          env: env,
          dd: dd,
          global: global
        };
      },
      global: {}
    },
    {
      name: './page/index/index.wxml',
      renderPath: './page/index/index.wxml',
      renderData: function () {
        let env = {};
        let dd = {};
        let global = {};
        return {
          env: env,
          dd: dd,
          global: global
        };
      },
      global: {}
    }
  ]
};

module.exports = testSuit;