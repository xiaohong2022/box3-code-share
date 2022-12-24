/* eslint-disable prettier/prettier */
/* eslint-disable no-undef */

// eslint-disable-next-line @typescript-eslint/no-var-requires
const Vika = require('vika');

const LOCAL_BLOCK_COLOR = '#E4BE33';
const WIDGET_ICON_URL =
  'https://static.codemao.cn/appcraft/extension-widgets/production/vika-tinydb.svg';
const CLOUD_BLOCK_URL =
  'https://static.codemao.cn/appcraft/extension-widgets/production/vika-cloud-fill.svg';
const LOCAL_BLOCK_URL =
  'https://static.codemao.cn/appcraft/extension-widgets/production/vika-performance-fill.svg';

// 控件类型定义
const types = {
  type: 'VIKA_TINYDB_WIDGET',
  icon: WIDGET_ICON_URL,
  title: '维格云字典',
  version: '0.1.0',
  platforms: ['android', 'ios', 'web'],
  docs: {
    url: 'https://www.yuque.com/coco-central/guide/qx2i42',
  },
  isGlobalWidget: true,
  isInvisibleWidget: true,
  properties: [
    {
      key: 'token',
      label: 'API Token',
      valueType: 'string',
      defaultValue: '',
      blockOptions: {
        generateBlock: false,
      },
    },
    {
      key: 'datasheetId',
      label: '表格ID',
      valueType: 'string',
      defaultValue: '',
      blockOptions: {
        generateBlock: false,
      },
    },
  ],
  methods: [
    {
      key: 'queryAllData',
      label: '获取数据 缓存到本地',
      params: [],
      blockOptions: {
        icon: LOCAL_BLOCK_URL,
        color: LOCAL_BLOCK_COLOR,
      },
      tooltip: `维格云字典的数据存储在云端，如果每次都从云端拉取速度较慢，网络较差的情况下影响使用；可以用该积木从云端拉取最新的数据缓存到本地，用带“闪电”图标的积木从本地缓存进行数据查询，提升查询速度。
      注意：线上数据更新后需要再次从云端拉取数据，否则本地和云端数据不一致。`,
    },
    {
      key: 'queryGxnByKey',
      label: '',
      params: [
        {
          key: 'k',
          label: '键为',
          labelAfter: '的值',
          valueType: 'string',
          defaultValue: '',
        },
      ],
      valueType: ['string', 'number'],
      blockOptions: {
        icon: LOCAL_BLOCK_URL,
        color: LOCAL_BLOCK_COLOR,
        callMethodLabel: false,
      },
      tooltip: `从本地缓存中查询某个键的值。
      注意：需要先使用“获取数据缓存到本地”积木才能查询到最新数据。`,
    },
    {
      key: 'queryGxnTotalNum',
      label: '键值对个数',
      params: [],
      valueType: 'number',
      blockOptions: {
        icon: LOCAL_BLOCK_URL,
        color: LOCAL_BLOCK_COLOR,
        callMethodLabel: false,
      },
      tooltip: `从本地缓存中查询键值对个数。
      注意：需要先使用“获取数据缓存到本地”积木才能查询到最新数据。`,
    },
    {
      key: 'queryGxnAllKey',
      label: '所有键',
      params: [],
      valueType: 'array',
      blockOptions: {
        icon: LOCAL_BLOCK_URL,
        color: LOCAL_BLOCK_COLOR,
        callMethodLabel: false,
      },
      tooltip: `从本地缓存中查询所有键，作为一个列表返回。
      注意：需要先使用“获取数据缓存到本地”积木才能查询到最新数据。`,
    },
    {
      key: 'queryGxnExistByKey',
      label: '是否存在键',
      params: [
        {
          key: 'k',
          label: '',
          valueType: 'string',
          defaultValue: '',
        },
      ],
      valueType: 'boolean',
      blockOptions: {
        icon: LOCAL_BLOCK_URL,
        color: LOCAL_BLOCK_COLOR,
        space: 40,
        callMethodLabel: false,
      },
      tooltip: `从本地缓存中判断是否存在某个键，存在则返回true，不存在则返回false。
      注意：需要先使用“获取数据缓存到本地”积木才能查询到最新数据。`,
    },
    {
      key: 'addPair',
      label: '新建键值对',
      params: [
        {
          key: 'k',
          label: '键为',
          valueType: 'string',
          defaultValue: '',
        },
        {
          key: 'v',
          label: '值为',
          valueType: 'number',
          checkType: ['number', 'string'],
          defaultValue: 0,
        },
      ],
      blockOptions: {
        icon: CLOUD_BLOCK_URL,
      },
      tooltip: '在云端字典中新建一个键值对。',
    },
    {
      key: 'setPair',
      label: '设置键值对',
      params: [
        {
          key: 'k',
          label: '键为',
          valueType: 'string',
          defaultValue: '',
        },
        {
          key: 'v',
          label: '值为',
          valueType: 'number',
          checkType: ['number', 'string'],
          defaultValue: 0,
        },
      ],
      blockOptions: {
        icon: CLOUD_BLOCK_URL,
      },
      tooltip: '在云端字典中修改某个键的值。',
    },
    {
      key: 'deleteByKey',
      label: '删除键值对',
      params: [
        {
          key: 'k',
          label: '键为',
          valueType: 'string',
          defaultValue: '',
        },
      ],
      blockOptions: {
        icon: CLOUD_BLOCK_URL,
      },
      tooltip: '删除云端字典中某个键值对。',
    },
    {
      key: 'clearAll',
      label: '清空数据',
      params: [],
      blockOptions: {
        icon: CLOUD_BLOCK_URL,
      },
      tooltip: '将云端字典所有数据清空，不可撤销。',
    },
    {
      key: 'queryByKey',
      label: '',
      params: [
        {
          key: 'k',
          label: '键为',
          labelAfter: '的值',
          valueType: 'string',
          defaultValue: '',
        },
      ],
      valueType: ['string', 'number'],
      blockOptions: {
        icon: CLOUD_BLOCK_URL,
        callMethodLabel: false,
      },
      tooltip: '查询云端字典中某个键的值。',
    },
    {
      key: 'queryTotalNum',
      label: '键值对个数',
      params: [],
      valueType: 'number',
      blockOptions: {
        icon: CLOUD_BLOCK_URL,
        callMethodLabel: false,
      },
      tooltip: '查询云端字典中键值对的个数。',
    },
    {
      key: 'queryAllKey',
      label: '所有键',
      params: [],
      valueType: 'array',
      blockOptions: {
        icon: CLOUD_BLOCK_URL,
        callMethodLabel: false,
      },
      tooltip: '查询云端字典中所有键，作为一个列表返回。',
    },
    {
      key: 'queryExistByKey',
      label: '是否存在键',
      params: [
        {
          key: 'k',
          label: '',
          valueType: 'string',
          defaultValue: '',
        },
      ],
      valueType: 'boolean',
      blockOptions: {
        icon: CLOUD_BLOCK_URL,
        callMethodLabel: false,
      },
      tooltip:
        '查询云端字典中是否存在某个键，存在则返回true，不存在则返回false。',
    },
  ],
  events: [
    {
      key: 'onVikaError',
      label: '发生错误',
      params: [
        {
          key: 'code',
          label: '错误码',
          valueType: 'string',
          tooltip: '错误类型的代码',
        },
        {
          key: 'data',
          label: '错误信息',
          valueType: 'string',
          tooltip: '具体错误原因的描述',
        },
      ],
    },
  ],
};

const ErrorDesc = {
  QUERY_ALLDATA: { desc: '查询全量数据错误', code: 1001 },
  UPDATE_DATA: { desc: '更新数据错误', code: 1002 },
  QUERY_ALLKEYS: { desc: '查询全量主键错误', code: 1003 },
  QUERY_ALLNUM: { desc: '查询数据总量错误', code: 1004 },
  QUERY_BYKEY: { desc: '键查询数据错误', code: 1005 },
  QUERY_EXITBYKEY: { desc: '键查询是否存在错误', code: 1006 },
  ADD_DATA: { desc: '增加数据错误', code: 1007 },
  CLEAR_DATA: { desc: '清空数据错误', code: 1008 },
  DEL_DATA: { desc: '删除数据错误', code: 1009 },
  KEY_EXISTS: { desc: '当前键已存在', code: 1010 },
};

// 控件实体定义
class Widget extends InvisibleWidget {
  constructor(props) {
    super(props);
    this.token = props.token;
    this.datasheetId = props.datasheetId;
    if (!this.token) {
      this.widgetError('请填写 API Token');
      return;
    }
    if (!this.datasheetId) {
      this.widgetError('请填写表格 ID');
      return;
    }
    this.vika = new Vika({
      token: this.token,
    });
    this.datasheet = this.vika.datasheet(this.datasheetId);
    this.gxnTotalNum = 0;
    this.gxnKeys = [];
    this.gxnValues = [];
  }

  async queryAllData() {
    const data = await this.datasheet.records.query({
      pageSize: 1000,
    });

    if (data.success !== true) {
      this.emit(
        'onVikaError',
        ErrorDesc.QUERY_ALLDATA.code,
        ErrorDesc.QUERY_ALLDATA.desc
      );
      this.widgetError(data.message);
      return ErrorDesc.QUERY_ALLDATA.desc;
    }
    if (data && data.data && data.data.records) {
      this.gxnTotalNum = data.data.records.length;
      this.gxnValues = data.data.records.map((item) =>
        item.fields.类型 && item.fields.类型 === '1'
          ? Number(item.fields.值)
          : item.fields.值
      );
      this.gxnKeys = data.data.records.map((item) => item.fields.键);
      return data.data.records.length;
    }

    return 0;
  }
  async queryGxnTotalNum() {
    return this.gxnTotalNum;
  }

  async queryGxnAllKey() {
    return this.gxnKeys;
  }

  async queryGxnByKey(k) {
    const index = this.gxnKeys.indexOf(k);
    return this.gxnValues[index];
  }

  async queryGxnExistByKey(k) {
    const index = this.gxnKeys.indexOf(k);
    console.log('index : ', index);
    return index !== -1;
  }

  async queryTotalNum() {
    const data = await this.datasheet.records.query({
      pageSize: 1000,
    });

    if (data.success !== true) {
      this.emit(
        'onVikaError',
        ErrorDesc.QUERY_ALLNUM.code,
        ErrorDesc.QUERY_ALLNUM.desc
      );
      this.widgetError(data.message);
      return ErrorDesc.QUERY_ALLNUM.desc;
    }
    if (data && data.data && data.data.records) {
      console.log('query recordId', data.data.records);
      return data.data.records.length;
    }

    return 0;
  }

  async queryAllKey() {
    const data = await this.datasheet.records.query({
      pageSize: 1000,
    });

    if (data.success !== true) {
      this.emit(
        'onVikaError',
        ErrorDesc.QUERY_ALLKEYS.code,
        ErrorDesc.QUERY_ALLKEYS.desc
      );
      this.widgetError(data.message);
      return ErrorDesc.QUERY_ALLKEYS.desc;
    }
    if (data && data.data && data.data.records) {
      const allKeys = data.data.records.map((item) => item.fields.键);
      return allKeys;
    }

    return [];
  }

  async queryByKey(k) {
    const data = await this.datasheet.records.query({
      filterByFormula: `{键}="${k}"`,
    });
    if (data.success !== true) {
      this.emit(
        'onVikaError',
        ErrorDesc.QUERY_BYKEY.code,
        ErrorDesc.QUERY_BYKEY.desc
      );
      this.widgetError(data.message);
      return ErrorDesc.QUERY_BYKEY.desc;
    }
    if (data && data.data && data.data.records.length > 0) {
      console.log('query recordId', data.data.records);
      const v = data.data.records[0].fields['值'];
      if (
        data.data.records[0].fields['类型'] &&
        data.data.records[0].fields['类型'] === '1'
      ) {
        return Number(v);
      }
      return v;
    }

    this.widgetError(`${k}键已删除或不存在`);
    return 'Error10000';
  }

  async queryExistByKey(k) {
    const data = await this.datasheet.records.query({
      filterByFormula: `{键}="${k}"`,
    });

    if (data.success !== true) {
      this.emit(
        'onVikaError',
        ErrorDesc.QUERY_EXITBYKEY.code,
        ErrorDesc.QUERY_EXITBYKEY.desc
      );
      this.widgetError(data.message);
      return ErrorDesc.QUERY_EXITBYKEY.desc;
    }

    if (data && data.data && data.data.records.length > 0) {
      console.log('query recordId', data.data.records);
      return true;
    }

    return false;
  }

  // 设置键值对
  async setPair(k, v) {
    const data = await this.datasheet.records.query({
      filterByFormula: `{键}="${k}"`,
    });

    if (!data.success) {
      this.emit(
        'onVikaError',
        ErrorDesc.QUERY_BYKEY.code,
        ErrorDesc.QUERY_BYKEY.desc
      );
      this.widgetError(data.message);
      return ErrorDesc.QUERY_BYKEY.desc;
    }

    let vType = '';
    if (typeof v == 'number') {
      vType = '1';
      v = String(v);
    }

    if (
      data &&
      data.data &&
      data.data.records &&
      data.data.records.length >= 1
    ) {
      const res = await this.datasheet.records.update([
        {
          recordId: data.data.records[0].recordId,
          fields: {
            键: k,
            值: v,
            类型: vType,
          },
        },
      ]);

      if (!res.success) {
        console.log('update vika: ', res);
        this.widgetError(res.message);
        this.emit(
          'onVikaError',
          ErrorDesc.UPDATE_DATA.code,
          ErrorDesc.UPDATE_DATA.desc
        );
      }
    }
  }

  // 新增键值对
  async addPair(k, v) {
    const data = await this.datasheet.records.query({
      filterByFormula: `{键}="${k}"`,
    });
    const errMsg = '新建键值对失败';
    if (!data.success) {
      this.widgetError(data.message || errMsg);
      this.emit(
        'onVikaError',
        ErrorDesc.QUERY_BYKEY.code,
        ErrorDesc.QUERY_BYKEY.desc
      );
      return;
    }

    // 判断当前键是否存在
    if (data && data.data && data.data.records && data.data.records.length) {
      this.widgetError('当前键已存在');
      this.emit(
        'onVikaError',
        ErrorDesc.KEY_EXISTS.code,
        ErrorDesc.KEY_EXISTS.desc
      );
      return;
    }

    let vType = '';
    if (typeof v == 'number') {
      vType = '1';
      v = String(v);
    }

    // 添加
    const res = await this.datasheet.records.create([
      {
        fields: { 键: k, 值: v, 类型: vType },
      },
    ]);

    if (!res.success) {
      this.widgetError(res.message);
      this.emit(
        'onVikaError',
        ErrorDesc.ADD_DATA.code,
        ErrorDesc.ADD_DATA.desc
      );
    }
  }

  async deleteByKey(k) {
    const data = await this.datasheet.records.query({
      filterByFormula: `{键}="${k}"`,
      pageSize: 1000,
    });

    if (data.success !== true) {
      this.widgetError(data.message);
      this.emit(
        'onVikaError',
        ErrorDesc.QUERY_ALLDATA.code,
        ErrorDesc.QUERY_ALLDATA.desc
      );
      return ErrorDesc.QUERY_ALLDATA.desc;
    }

    if (data && data.data && data.data.records.length > 0) {
      console.log('delete recordId', data.data.records);
      if (data.data && data.data.records && data.data.records.length > 0) {
        const recordIds = data.data.records.map((item) => item.recordId);
        await this.clearRecords(recordIds);
      }
      return;
    }
  }

  async clearAll() {
    const data = await this.datasheet.records.query({ pageSize: 1000 });

    if (data.success !== true) {
      this.widgetError(data.message);
      this.emit(
        'onVikaError',
        ErrorDesc.CLEAR_DATA.code,
        ErrorDesc.CLEAR_DATA.desc
      );
      return ErrorDesc.CLEAR_DATA.desc;
    }

    if (data && data.data && data.data.records.length > 0) {
      console.log('delete recordId', data.data.records);
      if (data.data && data.data.records && data.data.records.length > 0) {
        const recordIds = data.data.records.map((item) => item.recordId);
        this.clearRecords(recordIds);
      }
      return;
    }
  }

  async clearRecords(recordIds) {
    for (let i = 0; i < recordIds.length; i = i + 10) {
      const res = await this.datasheet.records.delete(
        recordIds.slice(i, i + 10)
      );
      if (res.success !== true) {
        this.widgetError(data.message);
        this.emit(
          'onVikaError',
          ErrorDesc.DEL_DATA.code,
          ErrorDesc.DEL_DATA.desc
        );
        return ErrorDesc.DEL_DATA.desc;
      }
    }
  }
}

exports.types = types;
exports.widget = Widget;
