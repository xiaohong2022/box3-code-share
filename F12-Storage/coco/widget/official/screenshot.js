/* eslint-disable @typescript-eslint/no-var-requires */
/* eslint-disable no-undef */
const html2canvas = require('html2canvas');
const axios = require('axios');
const _doc = this.document;
// 控件类型定义
const types = {
  type: 'SCREENSHOT_WIDGET',
  icon: 'https://creation.codemao.cn/716/appcraft/ic_screenshot.svg',
  title: '截图工具',
  platforms: ['android', 'ios', 'web'],
  isGlobalWidget: true,
  isInvisibleWidget: true,
  properties: [],
  methods: [
    {
      key: 'getImage',
      label: '获取截图',
      params: [],
      valueType: 'string',
    },
    {
      key: 'getImageIntercept',
      label: '获取截图',
      params: [
        {
          key: 'X',
          label: 'X',
          valueType: 'number',
          defaultValue: 0,
        },
        {
          key: 'Y',
          label: 'Y',
          valueType: 'number',
          defaultValue: 0,
        },
        {
          key: 'width',
          label: '宽',
          valueType: 'number',
          defaultValue: 300,
        },
        {
          key: 'height',
          label: '高',
          valueType: 'number',
          defaultValue: 300,
        },
      ],
      valueType: 'string',
    },
    {
      key: 'downloadImage',
      label: '下载图片',
      params: [
        {
          key: 'image',
          label: '',
          valueType: 'string',
          defaultValue: '',
        },
      ],
    },
  ],
  events: [],
};

// 控件实体定义
class Widget extends InvisibleWidget {
  async getImage() {
    const canvas = await html2canvas(
      _doc.querySelector('#rootPlayer .screen-view-inner'),
      {
        scale: 1,
        allowTaint: true,
        useCORS: true,
        logging: false,
        // clone dom 不会改变原有dom
        onclone: function (documentClone) {
          const webPlayer = documentClone.querySelector('#webPlayer');
          if (webPlayer) {
            webPlayer.style.transform = 'none';
          }
        },
      }
    );
    return canvas.toDataURL();
  }
  async getImageIntercept(x, y, width, height) {
    const canvas = await html2canvas(
      _doc.querySelector('#rootPlayer .screen-view-inner'),
      {
        scale: 1,
        allowTaint: true,
        useCORS: true,
        logging: false,
        x,
        y,
        width,
        height,
        // clone dom 不会改变原有dom
        onclone: function (documentClone) {
          const webPlayer = documentClone.querySelector('#webPlayer');
          if (webPlayer) {
            webPlayer.style.transform = 'none';
          }
        },
      }
    );
    return canvas.toDataURL();
  }
  async downloadImage(image) {
    let data = image;
    if (image.startsWith('http')) {
      data = await this.getImageForURL(image);
    }
    if (!data || !data.startsWith('data:image')) {
      this.widgetError('下载图片失败');
      return;
    }
    const dl = _doc.createElement('a');
    dl.href = data;
    dl.download = '';
    dl.click();
    dl.remove();
  }
  async getImageForURL(image) {
    try {
      const data = await axios.get(image, {
        responseType: 'blob',
      });
      const blob = data.data;
      const bgDataUrl = await this.blobToDataUrl(blob);
      return bgDataUrl;
    } catch (e) {
      console.error('加载图片失败', this.backgroundImage);
    }
  }
  async blobToDataUrl(blob) {
    return new Promise((resolve, reject) => {
      const reader = new FileReader();
      reader.onload = function (e) {
        if (e.target && e.target.result) {
          resolve(e.target.result.toString());
        } else {
          reject(new Error('blob to base64 error'));
        }
      };
      reader.readAsDataURL(blob);
    });
  }
}

exports.types = types;
exports.widget = Widget;
