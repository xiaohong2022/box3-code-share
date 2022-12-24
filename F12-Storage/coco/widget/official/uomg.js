/* eslint-disable @typescript-eslint/no-var-requires */
/* eslint-disable no-undef */

const http = require('http');
const utils = require('utils');

const TUomg = {
  type: 'UOMG_SAMPLE_WIDGET',
  icon: 'https://static.codemao.cn/appcraft/tmp-extension-widgets/production/uomg2.svg',
  title: 'uomg',
  platforms: ['android', 'ios'],
  properties: [],
  methods: [
    {
      key: 'getQQLevel',
      label: '查看QQ等级',
      params: [
        {
          key: 'qq',
          label: '',
          valueType: 'string',
          defaultValue: '10000',
        },
        {
          key: 'skey',
          label: '',
          valueType: 'string',
          defaultValue: 'skey',
        },
      ],
    },
    {
      key: 'getLoveStory',
      label: '获取随机土味情话',
      params: [],
    },
    {
      key: 'getRandomPicture',
      label: '获取随机图片',
      params: [],
    },
  ],
  events: [
    {
      key: 'onGetQQLevelSuccess',
      label: '获取QQ等级成功',
      params: [
        {
          key: 'qq',
          label: 'qq',
          valueType: 'string',
        },
        {
          key: 'nick',
          label: '昵称',
          valueType: 'string',
        },
        {
          key: 'avatar',
          label: '头像',
          valueType: 'string',
        },
      ],
    },
    {
      key: 'onGetLoveStorySuccess',
      label: '获取土味情话成功',
      params: [
        {
          key: 'content',
          label: '情话内容',
          valueType: 'string',
        },
      ],
    },
    {
      key: 'onGetLoveStoryError',
      label: '获取土味情话失败',
      params: [
        {
          key: 'content',
          label: '失败原因',
          valueType: 'string',
        },
      ],
    },
    {
      key: 'onGetRandomPictureSuccess',
      label: '获取随机图片成功',
      params: [
        {
          key: 'url',
          label: '图片链接',
          valueType: 'string',
        },
      ],
    },
    {
      key: 'onGetRandomPictureError',
      label: '获取随机图片失败',
      params: [
        {
          key: 'content',
          label: '失败原因',
          valueType: 'string',
        },
      ],
    },
  ],
};

const origin = 'https://api.uomg.com';

// 运行态使用
class Uomg extends InvisibleWidget {
  getQQLevel(qq, skey) {
    // 需要打包才能运行，其它环境跳过执行
    if (!utils.isNative()) {
      return;
    }
    http.get(
      origin + '/api/get.qqdj',
      {
        qq,
        skey,
      },
      {},
      (response) => {
        console.log('getQQLevel response', response);
        if (response.data) {
          try {
            const info = JSON.parse(response.data).info;
            this.emit('onGetQQLevelSuccess', qq, info.nickname, info.logo);
          } catch (e) {
            console.error('getQQLevel error', e);
          }
        }
      }
    );
  }
  getRandomPicture() {
    if (!utils.isNative()) {
      return;
    }
    http.get(
      origin + '/api/rand.img2',
      {
        sort: '二次元',
        format: 'json',
      },
      {},
      (response) => {
        console.log('getRandomPicture response', response);
        if (response.data) {
          try {
            const data = JSON.parse(response.data);
            const imageUrl = data.imgurl;
            this.emit('onGetRandomPictureSuccess', imageUrl);
          } catch (e) {
            this.emit('onGetRandomPictureError', String(e));
            console.error('getRandomPicture error', e);
          }
        }
      }
    );
  }
  getLoveStory() {
    if (!utils.isNative()) {
      return;
    }
    http.get(
      origin + '/api/rand.qinghua',
      {
        format: 'json',
      },
      {},
      (response) => {
        console.log('getLoveStory response', response);
        if (response.data) {
          try {
            const content = JSON.parse(response.data).content;
            this.emit('onGetLoveStorySuccess', content);
          } catch (e) {
            this.emit('onGetLoveStoryError', String(e));
            console.error('getLoveStory error', e);
          }
        }
      }
    );
  }
}

exports.types = TUomg;
exports.widget = Uomg;
