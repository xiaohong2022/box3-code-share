/* eslint-disable prettier/prettier */
/* eslint-disable no-undef */

// eslint-disable-next-line @typescript-eslint/no-var-requires
const Vika = require('vika');
const BLOCK_COLOR = '#f78767';

// 控件类型定义
const types = {
  type: 'VIKA_TABLE_WIDGET',
  icon: 'https://static.codemao.cn/appcraft/extension-widgets/production/vika-table.svg',
  title: '维格云表格',
  platforms: ['android', 'ios', 'web'],
  isGlobalWidget: true,
  isInvisibleWidget: true,
  docs: {
    url: 'https://www.yuque.com/coco-central/guide/ckx02f',
  },
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
      key: 'createRowDict',
      label: '创建字典',
      params: [
        {
          key: 'value',
          label: '',
          valueType: ['string', 'object'], // 为了积木显示正常，valueType 增加 string 并设置默认值为 ''
          defaultValue: '',
        },
      ],
      blockOptions: {
        color: BLOCK_COLOR,
      },
    },
    {
      key: 'addRowDictKeyValue',
      label: '设置',
      params: [
        {
          key: 'key',
          label: '键',
          valueType: 'string',
          defaultValue: '',
        },
        {
          key: 'value',
          label: '值',
          valueType: ['string', 'number', 'array', 'boolean'],
          defaultValue: '',
        },
      ],
      blockOptions: {
        color: BLOCK_COLOR,
      },
    },
    {
      key: 'clearRowDict',
      label: '重置为空字典',
      params: [],
      blockOptions: {
        color: BLOCK_COLOR,
      },
    },
    {
      key: 'getRowDict',
      label: '返回字典',
      valueType: ['object'],
      params: [],
      blockOptions: {
        color: BLOCK_COLOR,
      },
    },
    {
      key: 'getRowDictValue',
      label: '根据键返回值',
      valueType: ['string', 'number', 'array', 'boolean'],
      params: [
        {
          key: 'key',
          label: '键',
          valueType: 'string',
          defaultValue: '',
        },
      ],
      blockOptions: {
        space: 30,
        color: BLOCK_COLOR,
      },
    },
    {
      key: 'create',
      label: '新增数据',
      params: [
        {
          key: 'data',
          label: '字典数据',
          valueType: ['string', 'object'],
          defaultValue: '',
        },
      ],
      blockOptions: {
        icon: 'BLOCK_CLOUD_VARIABLE_ICON',
      },
    },
    {
      key: 'query',
      label: '查询数据',
      params: [
        {
          key: 'condition',
          label: '查询条件',
          valueType: 'string',
          defaultValue: '',
        },
      ],
      blockOptions: {
        icon: 'BLOCK_CLOUD_VARIABLE_ICON',
      },
    },
    {
      key: 'update',
      label: '更新数据',
      params: [
        {
          key: 'recordId',
          label: '行号',
          valueType: 'string',
          defaultValue: '',
        },
        {
          key: 'rowData',
          label: '字典数据',
          valueType: ['string', 'object'],
          defaultValue: ''
        },
      ],
      blockOptions: {
        icon: 'BLOCK_CLOUD_VARIABLE_ICON',
      },
    },
    {
      key: 'delete',
      label: '删除数据',
      params: [
        {
          key: 'recordId',
          label: '行号',
          valueType: 'string',
          defaultValue: '',
        },
      ],
      blockOptions: {
        icon: 'BLOCK_CLOUD_VARIABLE_ICON',
      },
    },
  ],
  events: [
    {
      key: 'onCreateSuccess',
      label: '新增成功',
      params: [
        {
          key: 'record',
          label: '数据',
          valueType: 'object',
        },
        {
          key: 'recordId',
          label: '行号',
          valueType: 'string',
        },
      ],
    },
    {
      key: 'onCreateError',
      label: '新增失败',
      params: [
        {
          key: 'message',
          label: '失败原因',
          valueType: 'string',
        },
      ],
    },
    {
      key: 'onQuerySuccess',
      label: '查询成功',
      params: [
        {
          key: 'records',
          label: '数据列表',
          valueType: 'array',
        },
        {
          key: 'recordIds',
          label: '行号列表',
          valueType: 'array',
        },
      ],
    },
    {
      key: 'onQueryError',
      label: '查询失败',
      params: [
        {
          key: 'message',
          label: '失败原因',
          valueType: 'string',
        },
      ],
    },
    {
      key: 'onUpdateSuccess',
      label: '更新成功',
      params: [
        {
          key: 'record',
          label: '数据',
          valueType: 'array',
        },
        {
          key: 'recordId',
          label: '行号',
          valueType: 'array',
        },
      ],
    },
    {
      key: 'onUpdateError',
      label: '更新失败',
      params: [
        {
          key: 'message',
          label: '失败原因',
          valueType: 'string',
        },
      ],
    },
    {
      key: 'onDeleteSuccess',
      label: '删除成功',
      params: [
        {
          key: 'recordId',
          label: '行号',
          valueType: 'string',
        },
      ],
    },
    {
      key: 'onDeleteError',
      label: '删除失败',
      params: [
        {
          key: 'message',
          label: '失败原因',
          valueType: 'string',
        },
      ],
    },
  ],
};

// 控件实体定义
class Widget extends InvisibleWidget {
  constructor(props) {
    super(props);
    this.token = props.token;
    this.datasheetId = props.datasheetId;
    if (!this.token) {
      this.widgetError('初始化维格表失败，API Token 不能为空');
      return;
    }
    this.vika = new Vika({
      token: this.token,
    });
    if (!this.datasheetId) {
      this.widgetError('请传入表格ID, 可以从维格表 url 上获取，表格ID 通常以 dst 开头');
      return;
    }
    this.datasheet = this.vika.datasheet(this.datasheetId);
    this.rowDict = {};
  }

  createRowDict = (data) => {
    console.info('vika createRowDict data', data);

    if (typeof data === 'string') {
      try {
        data = JSON.parse(data);
      } catch(e) {
        this.widgetError('创建字典数据失败，参数格式错误');
      }
    }

    if (typeof data !== 'object' || Array.isArray(data)) {
      this.widgetError('创建字典数据失败，参数格式错误');
      return;
    }

    this.rowDict = { ...data };
  };

  addRowDictKeyValue = (key, value) => {
    this.rowDict[key] = value;
  };

  clearRowDict = () => {
    this.rowDict = {};
  };

  getRowDict = () => {
    return this.rowDict;
  };

  getRowDictValue = (key) => {
    return this.rowDict[key] || '';
  };

  // 创建数据
  create(dict) {
    console.info('vika create dict', dict);

    if (typeof dict === 'string') {
      try {
        dict = JSON.parse(dict);
      } catch(e) {
        this.widgetError('参数格式错误');
        return;
      }
    }

    if (Array.isArray(dict) || typeof dict !== 'object') {
      this.widgetError('参数格式错误');
      return;
    }

    const errMsg = 'Create error';
    this.datasheet.records
      .create([
        {
          fields: dict,
        },
      ])
      .then((data) => {
        console.info('vika create data', data);
        this.widgetLog(`新增数据：${JSON.stringify(data)}`);
        if (
          data.success &&
          data.data &&
          data.data.records &&
          data.data.records[0]
        ) {
          const record = data.data.records[0];
          this.emit('onCreateSuccess', record.fields, record.recordId);
        } else if (!data.success) {
          this.emit('onCreateError', data.message || errMsg);
        }
      })
      .catch((err) => {
        console.error('vika create error', err);
        this.widgetError(err.message || errMsg);
        this.emit('onCreateError', err.message || errMsg);
      });
  }

  // 查询数据

  query(condition) {
    const errMsg = `Query error, condition: ${condition}`;
    console.info('vika query condition', condition);
    this.datasheet.records
      .query({
        filterByFormula: condition,
      })
      .then((data) => {
        console.info('vika query data', data);
        this.widgetLog(`查询数据：${JSON.stringify(data)}`);
        if (data.success && data.data && data.data.records) {
          const records = [];
          const recordIds = [];
          data.data.records.forEach((item) => {
            records.push(item.fields);
            recordIds.push(item.recordId);
          });
          this.emit('onQuerySuccess', records, recordIds);
        } else if (!data.success) {
          this.emit('onQueryError', data.message || errMsg);
        }
      })
      .catch((err) => {
        console.error('vika query error', err);
        this.widgetError(err.message || errMsg);
        this.emit('onQueryError', err.message || errMsg);
      });
  }

  // 更新数据
  update(recordId, fields) {
    const errMsg = `update error, recordId: ${recordId}`;
    console.info('vika update recordId', recordId, 'fields', fields);
    this.datasheet.records
      .update([
        {
          recordId: recordId,
          fields: fields,
        },
      ])
      .then((data) => {
        console.info('vika update data', data);
        this.widgetLog(`更新数据：${JSON.stringify(data)}`);
        if (data.success) {
          this.emit('onUpdateSuccess', fields, recordId);
        } else {
          this.emit('onUpdateError', data.message || errMsg);
        }
      })
      .catch((err) => {
        console.error('vika update error', err);
        this.widgetError(err.message || errMsg);
        this.emit('onUpdateError', err.message || errMsg);
      });
  }

  // 删除数据
  delete(recordId) {
    const errMsg = `Delete error, recordId: ${recordId}`;
    this.datasheet.records
      .delete([recordId])
      .then((data) => {
        console.info('vika delete data', data);
        this.widgetLog(`删除数据：${JSON.stringify(data)}`);
        if (data.success) {
          this.emit('onDeleteSuccess', recordId);
        } else {
          this.emit('onDeleteError', data.message || errMsg);
        }
      })
      .catch((err) => {
        console.error('vika delete error', err);
        this.widgetError(err.message || errMsg);
        this.emit('onDeleteError', err.message || errMsg);
      });
  }
}

exports.types = types;
exports.widget = Widget;
