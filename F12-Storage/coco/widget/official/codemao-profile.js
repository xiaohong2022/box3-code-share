/* eslint-disable @typescript-eslint/no-var-requires */
const axios = require('axios');

// eslint-disable-next-line no-var
var window = this.window;
let userInfo;

const IMG_USER_DEFAULT =
  'https://static.codemao.cn/appcraft/extension-widgets/production/img-user-defult.png';

function getCodemaoProfilApiUrl() {
  let prefix = 'backend-dev';
  const { hostname } = window.location;
  if (hostname.startsWith('dev')) {
    prefix = 'backend-dev';
  } else if (hostname.startsWith('test')) {
    prefix = 'test-api';
  } else if (hostname.startsWith('staging')) {
    prefix = 'backend-test';
  } else if (hostname.endsWith('.codemao.cn')) {
    prefix = 'api';
  }
  return `https://${prefix}.codemao.cn/tiger/v3/web/accounts/profile`;
}

const types = {
  type: 'CODEMAO_PROFILE_WIDGET',
  title: '编程猫登录',
  icon: 'https://static.codemao.cn/appcraft/extension-widgets/test/ic_bcm.svg',
  isInvisibleWidget: true,
  isGlobalWidget: true,
  properties: [],
  methods: [
    {
      key: 'GetLoginStatus',
      label: '登录状态',
      valueType: 'boolean',
      params: [],
      blockOptions: {
        callMethodLabel: false,
      },
      tooltip: '获取编程猫登录状态',
    },
    {
      key: 'GetUserInfo',
      valueType: 'string',
      params: [
        {
          key: 'type',
          label: '用户',
          valueType: 'string',
          dropdown: [
            { label: '昵称', value: 'nickname' },
            { label: 'ID', value: 'id' },
            { label: '头像', value: 'avatar_url' },
          ],
        },
      ],
      blockOptions: {
        callMethodLabel: false,
      },
      tooltip: '获取编程猫用户信息',
    },
  ],
  events: [],
};

// eslint-disable-next-line no-undef
class Widget extends InvisibleWidget {
  // eslint-disable-next-line no-useless-constructor
  constructor(props) {
    super(props);
  }

  GetLoginStatus = async () => {
    if (userInfo) return true;
    try {
      const result = await axios.get(getCodemaoProfilApiUrl(), {
        withCredentials: true,
        timeout: 20000,
      });
      if (result && result.status === 200) {
        userInfo = result.data;
        return true;
      } else {
        return false;
      }
    } catch (e) {
      console.error(e);
      return false;
    }
  };

  GetUserInfo = async (type) => {
    if (userInfo && userInfo[type]) {
      return userInfo[type];
    } else {
      const isLogin = await this.GetLoginStatus();
      if (isLogin) {
        return this.GetUserInfo(type);
      }
      if (type === 'avatar_url') {
        return IMG_USER_DEFAULT;
      } else {
        return '用户未登录';
      }
    }
  };
}

exports.types = types;
exports.widget = Widget;
