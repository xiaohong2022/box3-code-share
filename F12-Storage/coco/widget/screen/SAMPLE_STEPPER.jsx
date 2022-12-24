/* eslint-disable react/react-in-jsx-scope */
/* eslint-disable no-undef */
// eslint-disable-next-line @typescript-eslint/no-var-requires
const Antd = require('antd-mobile');

const types = {
  type: 'SAMPLE_STEPPER_WIDGET',
  icon: 'https://static.codemao.cn/appcraft/extension-widgets/production/stepper-ui2.svg',
  title: '进步器',
  platforms: ['web', 'android', 'ios'],
  isInvisibleWidget: false,
  isGlobalWidget: false,
  properties: [
    {
      key: '__width',
      label: '长度',
      valueType: 'number',
      defaultValue: 90,
    },
    {
      key: '__height',
      label: '宽度',
      valueType: 'number',
      defaultValue: 36,
    },
    {
      key: 'count',
      label: '当前值',
      valueType: 'number',
      defaultValue: 0,
    },
    {
      key: 'min',
      label: '最小值',
      valueType: 'number',
      defaultValue: 0,
    },
    {
      key: 'max',
      label: '最大值',
      valueType: 'number',
      defaultValue: 100,
    },
    {
      key: 'step',
      label: '步幅',
      valueType: 'number',
      defaultValue: 1,
    },
    {
      key: 'disabled',
      label: '禁用',
      valueType: 'boolean',
      defaultValue: false,
    },
    {
      key: 'inputFontSize',
      label: '输入框字体大小',
      valueType: 'number',
      defaultValue: 14,
    },
    {
      key: 'inputFontColor',
      label: '输入框字体颜色',
      valueType: 'color',
      defaultValue: '#000000',
    },
    {
      key: 'borderRadius',
      label: '圆角',
      valueType: 'number',
      defaultValue: 2,
    },
    {
      key: 'borderWidth',
      label: '边框宽度',
      valueType: 'number',
      defaultValue: 1,
    },
    {
      key: 'borderColor',
      label: '边框颜色',
      valueType: 'color',
      defaultValue: '#cccccc',
    },
    {
      key: 'buttonWidth',
      label: '按钮字体大小',
      valueType: 'number',
      defaultValue: 22,
    },
    {
      key: 'buttonBgColor',
      label: '按钮背景颜色',
      valueType: 'color',
      defaultValue: '#ffffff',
    },
    {
      key: 'buttonTextColor',
      label: '按钮文本颜色',
      valueType: 'color',
      defaultValue: '#1677ff',
    },
    {
      key: 'buttonFontSize',
      label: '按钮字体大小',
      valueType: 'number',
      defaultValue: 14,
    },
  ],
  methods: [
    {
      key: 'decrease',
      label: '减少',
      params: [],
    },
    {
      key: 'increase',
      label: '增加',
      params: [],
    },
  ],
  events: [
    {
      key: 'onChange',
      label: '变化时',
      params: [
        {
          key: 'count',
          label: '褰撳墠鍊�',
          valueType: 'number',
        },
      ],
    },
    {
      key: 'onFocus',
      label: '获得焦点时',
      params: [],
    },
    {
      key: 'onBlur',
      label: '失去焦点时',
      params: [],
    },
  ],
};

class StepperWidget extends VisibleWidget {
  constructor(props) {
    super(props);
    this.count = props.count;
    this.max = props.max;
    this.min = props.min;
    this.step = props.step;
    this.disabled = props.disabled;
    this.inputFontSize = props.inputFontSize;
    this.inputFontColor = props.inputFontColor;
    this.borderRadius = props.borderRadius;
    this.borderWidth = props.borderWidth;
    this.borderColor = props.borderColor;
    this.buttonWidth = props.buttonWidth;
    this.buttonBgColor = props.buttonBgColor;
    this.buttonTextColor = props.buttonTextColor;
    this.buttonFontSize = props.buttonFontSize;
  }

  decrease = () => {
    this.setProps({
      count: this.count - 1,
    });
    this.emit('onChange', this.count);
  };

  increase = () => {
    this.setProps({
      count: this.count + 1,
    });
    this.emit('onChange', this.count);
  };

  onChange = (value) => {
    this.setProps({
      count: value,
    });
  };

  onFocus = () => {
    this.emit('onFocus');
  };

  onBlur = () => {
    this.emit('onBlur');
  };

  render() {
    const height = this.__height;
    return (
      <Antd.Stepper
        value={this.count}
        onChange={this.onChange}
        onFocus={this.onFocus}
        onBlur={this.onBlur}
        disabled={this.disabled}
        max={this.max}
        min={this.min}
        step={this.step}
        style={{
          // height: '100%',
          width: '100%',
          '--height': `${height}px`,
          '--input-font-size': `${this.inputFontSize}px`,
          '--input-font-color': this.inputFontColor,
          '--border-radius': `${this.borderRadius}px`,
          '--border': `${this.borderWidth}px solid ${this.borderColor}`,
          '--button-width': `${this.buttonWidth}px`,
          '--button-background-color': this.buttonBgColor,
          '--button-text-color': this.buttonTextColor,
          '--button-font-size': `${this.buttonFontSize}px`,
        }}
      />
    );
  }
}

exports.types = types;
exports.widget = StepperWidget;