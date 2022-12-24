/* eslint-disable @typescript-eslint/no-var-requires */
/* eslint-disable no-undef */
const axios = require('axios');
const utils = require('utils');

// 控件类型定义
const types = {
  type: 'IP_SAMPLE_WIDGET',
  icon: 'https://creation.codemao.cn/716/appcraft/IMAGE_xiIl10o5e_1648113886329.svg',
  title: 'IP',
  platforms: ['android', 'ios', 'web'],
  isGlobalWidget: true,
  isInvisibleWidget: true,
  properties: [],
  methods: [
    {
      key: 'getIP',
      label: '获取IP地址',
      params: [],
      valueType: 'string',
    },
  ],
  events: [],
};

const defaultValue = '0.0.0.0';

// 控件实体定义
class Widget extends InvisibleWidget {
  constructor(props) {
    super(props);
    this.ip = defaultValue;
  }
  async getIP() {
    let url = '/http-widget-proxy/ip';
    if (utils.isNative()) {
      url = 'https://coco.codemao.cn' + url;
    }
    if (this.ip === defaultValue) {
      try {
        const res = await axios.get(url);
        if (res && res.data && res.data.ip) {
          this.ip = res.data.ip;
        }
      } catch (e) {
        console.error(e);
      }
    }
    return this.ip;
  }
}

exports.types = types;
exports.widget = Widget;
