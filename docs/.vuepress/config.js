module.exports = {
  title:'React笔记',
  description: 'Web前端开发技术笔记',
  themeConfig: {
    // vuepress- theme - reco 将原有的侧边栏的中的多级标题移出，生成子侧边栏，放在了页面的右侧
    subSidebar: 'auto',
    // 导航栏
    nav: [
      { text: '首页', link: '/' },
      {
        text: 'Raymond的Web前端笔记',
        items: [
          { text: 'Gitgub', link: 'https://github.com/Raymond-WH' },
          { text: 'Gitee', link:'https://gitee.com/shuimulianhua'},
        ]
      }
    ],
    // 侧边栏
    sidebar: [
      {
        title: "欢迎学习",
        path: '/',
        collapsable: false, //不折叠
        children: [
          { title: '学前必读', path: '/'}
        ]
      }, {
        title: '基础学习',
        path: '/handbook/ConditionalTypes',
        collapsable: false, //不折叠
        children: [
          { title: '条件类型', path: '/handbook/ConditionalTypes' },
          { title: '类型断言', path: '/handbook/Generics' },
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