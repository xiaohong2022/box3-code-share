const axios = require('axios');

const types = {
    isInvisibleWidget: true,
    type: "FOR_IP_WIDGET",
    icon: "https://static.codemao.cn/appcraft/extension-widgets/production/for-ip.svg",
    title: "ip地址查询",
    version: "1.0",
    isGlobalWidget: true,
    properties: [],
    methods: [],
    events: [],
};

class Widget extends InvisibleWidget {
    constructor(props) {
        super(props);

    }

}

types['events'].push({
    key: 'api_win',
    label: '查询成功',
    params: [
      {
          key: 'ip',
          label: 'ip',
          valueType: 'string',
      },
      {
          key: 'country',
          label: '国家',
          valueType: 'string',
      },
      {
          key: 'prov',
          label: '省份',
          valueType: 'string',
      },
      {
          key: 'city',
          label: '城市',
          valueType: 'string',
      },
      {
          key: 'lsp',
          label: '网络',
          valueType: 'string',
      },
      {
          key: 'postcode',
          label: 'postcode',
          valueType: 'string',
      },],

})

types['events'].push({
    key: 'api_err',
    label: '查询失败',
    params: [
      {
          key: 'err_name',
          label: '错误',
          valueType: 'string',
      },],

})

types['methods'].push({
    key: 'ip',
    label: '地址查询',
    params: [],

    blockOptions: {
    color: '#cc33cc',
    icon: '',
    generateBlock: true,
    inputsInline: true,
    space: 16,
},
})
Widget.prototype.ip = function () {
      axios.get('https://api.vvhan.com/api/getIpInfo')
    .then((response) => {
      this.emit("api_win"  , (response.data['ip']), (response.data['info']['country']), (response.data['info']['prov']), (response.data['info']['city']), (response.data['info']['lsp']), (response.data['info']['postcode']));
    })
    .catch((error) => {
      this.emit("api_err"  , (error));
    });

}
exports.types = types;
exports.widget = Widget;
