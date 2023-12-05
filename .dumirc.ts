import { defineConfig } from 'dumi';
import { BaseConfig } from './.dumi/config/base';

const { logo, favicon, metas, footer } = BaseConfig;

const ProductionConfig = {
  headScripts: [
    'https://gw.alipayobjects.com/os/lib/react/18.2.0/umd/react.production.min.js',
    'https://gw.alipayobjects.com/os/lib/react-dom/18.2.0/umd/react-dom.production.min.js',
  ],
  externals: {
    react: 'React',
    reactDom: 'ReactDOM',
  },
};

export default defineConfig({
  themeConfig: {
    prefersColor: {
      default: 'dark',
      switch: false,
    },
    logo,
    footer,
  },
  favicons: favicon,
  analytics: {
    ga_v2: 'G-J1RSFD64LL',
  },
  metas,
  locales: [
    { id: 'zh-CN', name: '中文' },
    { id: 'en-US', name: 'English' },
  ],
  ...(process.env.NODE_ENV === 'production' ? ProductionConfig : {}),
});
