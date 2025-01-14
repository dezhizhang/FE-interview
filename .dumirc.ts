/*
 * :file description:
 * :name: /fe-interview/.dumirc.ts
 * :author:张德志
 * :copyright: (c) 2024, Xiaozhi
 * :date created: 2024-10-10 20:20:45
 * :last editor: 张德志
 * :date last edited: 2024-11-06 20:47:21
 */
import { defineConfig } from 'dumi';

import path from 'path';
import OSS_CONFIG from './config/oss';
const { REACT_APP_ENV } = process.env;
const isProduction = process.env.NODE_ENV === 'production';
//获取package.json中的version变量,需要根据项目目录结构确认

const PKG = require(path.resolve(process.cwd(), 'package.json'));
const WebpackAliyunOssPlugin = require('webpack-aliyun-oss-plugin');
const baseURL = 'https://cdn.shuqin.cc';

// 静态文件路径前缀
const VER_PATH = REACT_APP_ENV === 'prod' ? `${baseURL}/${PKG.name}/` : `/`; // 获取编译环境配置

const publicPath = isProduction ? VER_PATH : '/';

export default defineConfig({
  themeConfig: {
    mode: 'site',
    name: 'fe-interview',
    antd: {},
    base: '/',
    logo: `${baseURL}/digitwin/assets/logo.svg`,
    history: { type: 'hash' },
    footer: false,
    nav: [
      {
        title: 'HTML',
        link: '/html',
      },
      {
        title: 'CSS',
        link: 'css',
      },
      {
        title: 'ECMAScript',
        link: '/ecmascript',
      },

      {
        title: 'TypeScript',
        link: '/typescript',
      },

      {
        title: 'React',
        link: '/react',
      },
      {
        title: 'Webpack',
        link: '/webpack',
      },
      {
        title: 'HTTP',
        link: '/http',
      },
      {
        title:'Node',
        link:'/node'
      },
      {
        title: 'Webgl',
        link: '/webgl',
      },
      {
        title:'Three',
        link:'/three'
      }
    ],
  },
  favicons: [`${baseURL}/digitwin/assets/logo.svg`],
  publicPath: publicPath,
  outputPath: `${PKG.name}`,
  headScripts: [
    isProduction
      ? `
    var _hmt = _hmt || [];
    (function() {
      var hm = document.createElement("script");
      hm.src = "https://hm.baidu.com/hm.js?9b067f386fa1ab101b8b1b4d188ce3cb";
      var s = document.getElementsByTagName("script")[0]; 
      s.parentNode.insertBefore(hm, s);
    })();

    `
      : '',
  ],
  chainWebpack(memo: any) {
    if (REACT_APP_ENV === 'prod') {
      memo.plugin('WebpackAliyunOssPlugin').use(WebpackAliyunOssPlugin, [
        {
          ...OSS_CONFIG,
          filter: function (build: any) {
            return !/\.html$/.test(build);
          },
        },
      ]);
    }
  },
});
