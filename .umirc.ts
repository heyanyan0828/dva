import { defineConfig } from 'umi';

export default defineConfig({
  nodeModulesTransform: {
    type: 'none',
  },
  // 配置代理能力，解决跨域问题
  proxy: {
    '/api': {
      'target': 'http://public-api-v1.aspirantzhang.com',
      'changeOrigin': true,
      'pathRewrite': { '^/api' : '' },
    },
  },
  dva:{}
});
