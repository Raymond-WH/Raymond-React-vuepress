module.exports = {
  title: 'Raymond前端个人笔记',
  description: 'Web前端开发技术笔记,技术博客,前端技术笔记,react,vue,javascript7',
  // 路径名为""<REPO>"
  base: '/Raymond-React-vuepress/',
  // 光标效果
  plugins: [
    // 光标效果
    ['cursor-effects', {
      size: 2, // size of the particle, default: 2
      shape: 'star', // ['star' | 'circle'], // shape of the particle, default: 'star'
      zIndex: 999999999, // z-index property of the canvas, default: 999999999
    }],
    // 代码复制
    ["vuepress-plugin-nuggets-style-copy", {
      copyText: "复制代码",
      tip: {
        content: "复制成功"
      }
    }],
    // 返回顶部
    ['@vuepress/back-to-top'],
    // 在线运行vue单文件示例
    ['run', {
      jsLabs: ['https://unpkg.com/element-ui/lib/index.js'],
      cssLabs: ['https://unpkg.com/element-ui/lib/theme-chalk/index.css'],

    }]

  ],
  themeConfig: {
    // vuepress- theme - reco 将原有的侧边栏的中的多级标题移出，生成子侧边栏，放在了页面的右侧
    subSidebar: 'auto',
    // 导航栏
    nav: [
      { text: '首页', link: '/' },
      {
        text: '面试题', items: [
          { text: 'javascript', link: '/interview/javascript' },
          { text: 'webApi', link: '/interview/webApi' },
          { text: 'vue', link: '/interview/vue' },
          { text: 'react', link: '/interview/react' },

        ]
      },
      {
        text: '个人笔记', items: [
          { text: 'javascript', link: '/notes/javascript' },
          { text: 'webApi', link: '/notes/webApi' },
          { text: 'vue', link: '/notes/vue' },
          { text: 'react', link: '/notes/react' },

        ]
      },
      {
        text: 'Raymond的Web前端笔记',
        items: [
          { text: 'Gitgub', link: 'https://github.com/Raymond-WH' },
          { text: 'Gitee', link: 'https://gitee.com/shuimulianhua' },
        ]
      },

    ],
    // 侧边栏
    sidebar: [
      {
        title: "欢迎学习",
        path: '/',
        collapsable: false, //不折叠
        children: [
          { title: '学前必读', path: '/' }
        ]
      }, {
        title: '基础学习',
        path: '/handbook/ConditionalTypes',
        collapsable: false, //不折叠
        children: [
          { title: '条件类型', path: '/handbook/ConditionalTypes' },
          { title: '类型断言', path: '/handbook/Generics' },
        ]
      }, {
        title: '面试题',
        path: '/interview/javascript',
        children: [
          { title: 'javascript', path: '/interview/javascript' },
          { title: 'webApi', path: '/interview/webApi' },
          { title: 'vue', path: '/interview/vue' },
          { title: 'react', path: '/interview/react' },

        ]

      }
    ]
  },
  // https://vuepress-theme-reco.recoluan.com/
  // 主题有loading动画+暗黑模式
  theme: 'reco',
  // 2022-12-12格式
  locales: {
    '/': {
      lang: 'zh-CN',
    }
  }
}