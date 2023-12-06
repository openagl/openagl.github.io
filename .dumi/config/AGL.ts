export const BaseConfig = {
  logo: 'https://mdn.alipayobjects.com/huamei_xgb3qj/afts/img/A*VU5eSq-BtJUAAAAAAAAAAAAADtmcAQ/original',
  favicon: [
    'https://mdn.alipayobjects.com/huamei_xgb3qj/afts/img/A*JiTDRaNWTQkAAAAAAAAAAAAADtmcAQ/original',
  ],
  metas: [
    {
      name: 'keywords',
      content: 'AGL, All-Scale Graph Learning, 大规模图学习系统',
    },
    {
      name: 'description',
      content: 'AGL（All-Scale Graph Learning）大规模图学习系统',
    },
  ],
  footer: '© 版权所有 2022 Ant Group Co., Ltd. 京ICP备15032932号-38',
};

export default {
  // 标识
  PRIMARY_KEY: 'AGL',
  // 标题
  PRIMARY_TITLE: {
    zh: '大规模图学习系统',
    en: 'All-Scale Graph Learning',
  },
  // 描述
  PRIMARY_DESCRIPTION: {
    zh: 'All-Scale Graph Learning',
    en: 'All-Scale Graph Learning',
  },
  // GITHUB
  GITHUB: 'GitHub',
  // GITHUB URL
  GITHUB_URL: 'https://github.com/TuGraph-family/TuGraph-AntGraphLearning',
  // 帮助文档链接
  HELP_URL: 'https://github.com/TuGraph-family/TuGraph-AntGraphLearning/blob/main/README_CN.md',
  // 帮助文档
  HELP_DOCUMENT: { zh: '帮助文档', en: 'Document' },
  // 公告信息
  ANNOUNCEMENT_INFO_DATA: [
    {
      title: {
        zh: 'AGL开源发布',
        en: 'AGL open source release',
      },
      description: {
        zh: '外滩大会蚂蚁开源大规模图学习系统AGL',
        en: 'Bund Conference Ant open source large-scale graph learning system AGL',
      },
      linkUrl: 'https://mp.weixin.qq.com/s/e4Jcvp8dlyj3ZJJukHi5WA',
      imgUrl:
        'https://mdn.alipayobjects.com/huamei_xgb3qj/afts/img/A*i1HwQKSMFo0AAAAAAAAAAAAADtmcAQ/original',
    },
  ],
  // 技术特性
  TECHNICAL_FEATURES_TITLE: { zh: '技术特性', en: 'Technical Features' },
  TECHNICAL_FEATURES_STYLE: {
    minCardWidth: 100,
  },
  TECHNICAL_FEATURES_DATA: [
    {
      title: {
        zh: '易用',
        en: 'easy to use',
      },
      description: {
        zh: '提供多个在金融场景的使用案例',
        en: 'Provides multiple use eases in financial scenarios',
      },
      imgUrl:
        'https://mdn.alipayobjects.com/huamei_xgb3qj/afts/img/A*qAvdQoWBKX8AAAAAAAAAAAAADtmcAQ/original',
      imgStyle: { width: 112, height: 112 },
    },
    {
      title: {
        zh: '大规模',
        en: 'Large-scale',
      },
      description: {
        zh: '支持百亿节点千亿边',
        en: 'Supports billions of nodes and trillions of edges',
      },
      imgUrl:
        'https://mdn.alipayobjects.com/huamei_xgb3qj/afts/img/A*_cbTQKqJ5LMAAAAAAAAAAAAADtmcAQ/original',
      imgStyle: { width: 112, height: 112 },
    },
    {
      title: {
        zh: '扩展性强',
        en: 'Highly extensible',
      },
      description: {
        zh: '支持 Tensorflow/Pytorch多引擎，提供丰富的图学习算子',
        en: 'Supports multiple engines like Tensorflow/Pytorch, provides rich graph learning operators',
      },
      imgUrl:
        'https://mdn.alipayobjects.com/huamei_xgb3qj/afts/img/A*kKciS5ldXGIAAAAAAAAAAAAADtmcAQ/original',
      imgStyle: { width: 112, height: 112 },
    },
    {
      title: {
        zh: '知识驱动',
        en: 'Knowledge-driven',
      },
      description: {
        zh: '支持 Tensorflow/Pytorch多引擎，提供丰富的图学习算子',
        en: 'Supports multiple engines like Tensorflow/Pytorch, provides rich graph learning operators',
      },
      imgUrl:
        'https://mdn.alipayobjects.com/huamei_xgb3qj/afts/img/A*PheCT7fLUwsAAAAAAAAAAAAADtmcAQ/original',
      imgStyle: { width: 112, height: 112 },
    },
  ],
  // 业务应用
  BUSINESS_APPLICATION_TITLE: { zh: '业务应用', en: 'Business Applications' },
  BUSINESS_APPLICATION_DATA: [
    {
      title: {
        zh: '营销推荐场景',
        en: 'Marketing Recommendation',
      },
      description: {
        zh: '基于图谱中的知识以及社交网络中的趋同性驱动模型，迁移用户偏好至新供给上',
        en: 'Transfer user preferences to new supplies based on knowledge in the graph and convergence-driven models in social networks',
      },
      imgUrl: {
        zh: 'https://mdn.alipayobjects.com/huamei_xgb3qj/afts/img/A*T04oTZV3uUQAAAAAAAAAAAAADtmcAQ/original',
        en: 'https://mdn.alipayobjects.com/huamei_xgb3qj/afts/img/A*yPjsTa96yuMAAAAAAAAAAAAADtmcAQ/original',
      },
      children: [
        {
          title: {
            zh: '业务背景',
            en: 'Business Background',
          },
          children: [
            {
              zh: '用基于图谱中的知识以及社交网络中的趋同性驱动模型，迁移用户偏好至新供给上',
              en: 'Transfer user preferences to new supply using knowledge from graph and convergence-driven models in social networks',
            },
          ],
        },
        {
          title: {
            zh: '技术方案',
            en: 'Technical Solution',
          },
          children: [
            {
              zh: '用户偏好上高同配性的图结构数（社交关系等）作为信息迁移的桥梁',
              en: 'Utilize graph structures with high homophily in user preferences (such as social relationships) as bridges for information transfer',
            },
            {
              zh: '利用图谱中实体表征来连接并迁移用户偏好至新供给上',
              en: 'Use entity representations in the graph to connect and transfer user preferences to new supplies',
            },
          ],
        },
      ],
    },
    {
      title: {
        zh: '企业授信场景',
        en: 'Enterprise Credit',
      },
      description: {
        zh: '在复杂的企业关系图中基于路径感知的方法挖掘上下游供应链关系，并基于供应链图进行多维度的风险分析',
        en: 'Utilize path-aware methods to mine upstream and downstream supply chain relationships in complex enterprise relationship graphs and conduct multi-dimensional risk analysis based on the supply chain graph',
      },
      imgUrl: {
        zh: 'https://mdn.alipayobjects.com/huamei_xgb3qj/afts/img/A*O1SYToYyQnMAAAAAAAAAAAAADtmcAQ/original',
        en: '',
      },
      children: [
        {
          title: {
            zh: '业务背景',
            en: 'Business Background',
          },
          children: [
            {
              zh: '在复杂的企业关系图中基于路径感知的方法挖掘上下游供应链关系，并基于供应链图进行多维度的风险分析',
              en: 'In the complex enterprise relationship diagram, the relationship between upstream and downstream supply chain is mined based on the path perception method, and the risk analysis is carried out based on the supply chain diagram',
            },
          ],
        },
        {
          title: {
            zh: '技术方案',
            en: 'Technical Solution',
          },
          children: [
            {
              zh: '利用实体丰富的属性特征信息',
              en: 'Utilize rich attribute feature information of entities',
            },
            {
              zh: '学习表征节点间复杂拓扑结构',
              en: 'Learn representations of complex topological structures between nodes',
            },
            {
              zh: '路径感知GNN传播-聚合结构',
              en: 'Path-aware GNN propagation-aggregation structure',
            },
          ],
        },
      ],
    },
  ],
  // 合作伙伴
  COOPERATOR_TITLE: {
    zh: '合作伙伴',
    en: 'Cooperators',
  },
  COOPERATOR_DATA: [
    {
      imgUrl: '',
      title: {
        zh: '北京邮电大学',
        en: 'Beijing University of Posts and Telecommunications',
      },
      imgHidden: true,
    },
    {
      imgUrl: '',
      title: {
        zh: 'OpenKG知识图谱社区',
        en: 'OpenKG Knowledge Graph Community',
      },
    },
  ],
  // 关于我们
  ABOUT_US_CONFIG: [
    {
      title: {
        zh: '资源',
        en: 'Resources',
      },
      description: {
        zh: 'GitHub',
        en: 'GitHub',
      },
      imgUrl:
        'https://mdn.alipayobjects.com/huamei_xgb3qj/afts/img/A*JRo8Roq8B9EAAAAAAAAAAAAADtmcAQ/original',
      linkUrl: 'https://github.com/TuGraph-family/TuGraph-AntGraphLearning',
    },
    {
      title: {
        zh: '社区',
        en: 'Community',
      },
      description: {
        zh: '社区地址',
        en: 'Community Address',
      },
      linkUrl: '',
      hidden: true,
    },
    {
      title: {
        zh: '关注我们',
        en: 'follow us',
      },
      description: {
        zh: '邮箱: feidongni.fdn@antgroup.com',
        en: 'Email: feidongni.fdn@antgroup.com',
      },
      linkUrl: 'mailto:feidongni.fdn@antgroup.com',
    },
  ],
  OR_CODE_CONFIG_TITLE: {
    zh: '蚂蚁图学习',
    en: 'Ant Graph Learning',
  },
  OR_CODE_CONFIG_URL:
    'https://mdn.alipayobjects.com/huamei_xgb3qj/afts/img/A*Q_HdTayGBzIAAAAAAAAAAAAADtmcAQ/original',
};
