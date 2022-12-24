/* eslint-disable no-undef */
/* eslint-disable react/react-in-jsx-scope */

// eslint-disable-next-line @typescript-eslint/no-var-requires
const Antd = require('antd-mobile');

const types = {
  type: 'ANTD_RATE_WIDGET',
  icon: 'https://static.codemao.cn/appcraft/extension-widgets/production/rate.svg',
  title: '评分',
  platforms: ['web', 'android', 'ios'],
  isInvisibleWidget: false,
  isGlobalWidget: false,
  properties: [
    {
      key: '__width',
      label: '宽度',
      valueType: 'number',
      defaultValue: 160,
    },
    {
      key: '__height',
      label: '高度',
      valueType: 'number',
      defaultValue: 28,
    },
    {
      key: 'rate',
      label: '评分',
      valueType: 'number',
      defaultValue: 3,
    },
    {
      key: 'count',
      label: '总分',
      valueType: 'number',
      defaultValue: 5,
    },
    {
      key: 'allowClear',
      label: '可清除',
      valueType: 'boolean',
      defaultValue: true,
    },
    {
      key: 'allowHalf',
      label: '允许半星',
      valueType: 'boolean',
      defaultValue: true,
    },
    {
      key: 'readOnly',
      label: '只读',
      valueType: 'boolean',
      defaultValue: false,
    },
    {
      key: 'starSize',
      label: '星星大小',
      valueType: 'number',
      defaultValue: 24,
    },
    {
      key: 'starColor',
      label: '星星颜色',
      valueType: 'color',
      defaultValue: '#ffd21e',
    },
  ],
  methods: [],
  events: [
    {
      key: 'onRateChange',
      label: '当评分更改',
      params: [
        {
          key: 'rate',
          label: '评分',
          valueType: 'number',
        },
      ],
    },
  ],
};

class RateWidget extends VisibleWidget {
  constructor(props) {
    super(props);
    this.rate = props.rate;
    this.count = props.count;
    this.allowClear = props.allowClear;
    this.allowHalf = props.allowHalf;
    this.readOnly = props.readOnly;
    this.starSize = props.starSize;
    this.starColor = props.starColor;
  }

  onChange = (value) => {
    this.setProps({
      rate: value,
    });
    this.emit('onRateChange', value);
  };

  render() {
    return (
      <Antd.Rate
        allowClear={this.allowClear}
        allowHalf={this.allowHalf}
        readOnly={this.readOnly}
        value={this.rate}
        count={this.count}
        onChange={this.onChange}
        style={{
          '--star-size': `${this.starSize}px`,
          '--active-color': this.starColor,
        }}
      />
    );
  }
}

exports.types = types;
exports.widget = RateWidget;