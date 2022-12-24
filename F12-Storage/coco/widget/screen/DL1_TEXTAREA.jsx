/* eslint-disable no-undef */
/* eslint-disable react/react-in-jsx-scope */


const version = '1.0.1';
const types = {
  type: 'DL1_TEXTAREA_WIDGET',
  icon: 'https://creation.codemao.cn/716/appcraft/IMAGE_Qac9Q_c1f_1643209021773.svg',
  title: '澶氳杈撳叆妗�',
  platforms: ['android', 'web', 'ios'],
  version: version,
  isInvisibleWidget: false,
  isGlobalWidget: false,
  properties: [
    {
      key: 'text',
      label: '文本',
      valueType: 'string',
      defaultValue: '',
    },
    {
      key: 'placeholder',
      label: '提示语',
      valueType: 'string',
      defaultValue: '请输入文本...',
    },
    {
      key: 'fontSize',
      label: '文本大小',
      valueType: 'number',
      defaultValue: 14,
    },
    {
      key: 'color',
      label: '文本颜色',
      valueType: 'color',
      defaultValue: 'black',
    },
    {
      key: 'borderColor',
      label: '边框颜色',
      valueType: 'color',
      defaultValue: '#ccc',
    },
    {
      key: 'borderRadius',
      label: '圆角大小',
      valueType: 'number',
      defaultValue: 3,
    },
    {
      key: 'padding',
      label: '间距',
      valueType: 'number',
      defaultValue: 5,
    },
  ],
  methods: [],
  events: [
    {
      key: 'onChange',
      label: '内容改变时',
      params: [
        {
          key: 'text',
          label: '文本',
          valueType: 'string',
        },
      ],
    },
    {
      key: 'onFocus',
      label: '获取焦点时',
      params: [],
    },
    {
      key: 'onBlur',
      label: '失去焦点时',
      params: [],
    },
  ],
};

class Widget extends VisibleWidget {
  constructor(props) {
    super(props);
    this.author = 'DL1';
    this.text = props.text;
    this.fontSize = props.fontSize;
    this.borderColor = props.borderColor;
    this.borderRadius = props.borderRadius;
    this.color = props.color;
    this.placeholder = props.placeholder;
    this.padding = props.padding;
  }

  onChange(e) {
    const value = e.target.value;
    this.setProps({
      text: value,
    });
    this.emit('onChange', value);
  }
  onFocus() {
    this.emit('onFocus');
  }
  onBlur() {
    this.emit('onBlur');
  }
  render() {
    return (
      <textarea
        style={{
          color: this.color,
          width: '100%',
          height: '100%',
          borderRadius: this.borderRadius,
          borderColor: this.borderColor,
          padding: this.padding,
          fontSize: this.fontSize,
          resize: 'none',
        }}
        placeholder={this.placeholder}
        value={this.text}
        onChange={this.onChange.bind(this)}
        onFocus={this.onFocus.bind(this)}
        onBlur={this.onBlur.bind(this)}
      />
    );
  }
}

exports.types = types;
exports.widget = Widget;