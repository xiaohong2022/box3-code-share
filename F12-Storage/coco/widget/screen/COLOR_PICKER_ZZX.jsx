/* eslint-disable no-undef */
/* eslint-disable react/react-in-jsx-scope */

/*
 * 鍢匡紝娆㈣繋浣跨敤棰滆壊閫夋嫨鍣紝鐢变腑瀛愭槦000鍒朵綔
 * 浣滆€咃細涓瓙鏄�000
 * 涓婚〉锛歨ttps://shequ.codemao.cn/user/2867423
 * QQ锛�2422481178
 * 浣跨敤鏂规硶锛氬瓧闈㈡剰鎬�
 */

// eslint-disable-next-line @typescript-eslint/no-var-requires
const Color = require('color');

const BLOCK_COLOR = '#FFE4B5DD';
const WIDGET_ICON =
  'https://creation.codemao.cn/716/appcraft/IMAGE_vJpgmz-iez_1647311384041';
const BLOCK_ICON =
  'https://creation.codemao.cn/716/appcraft/IMAGE_JlHR8A8wdX_1647311384039';

const types = {
  type: 'COLOR_PICKER_ZZX_WIDGET',
  icon: WIDGET_ICON,
  title: '棰滆壊閫夋嫨鍣�',
  version: '1.0.0',
  platforms: ['android', 'ios', 'web'],
  isInvisibleWidget: false,
  isGlobalWidget: false,
  properties: [
    {
      key: '__width', // 鍐呯疆灞炴€�
      label: '宽度',
      valueType: 'number', // 鏁板瓧绫诲瀷
      defaultValue: 36,
    },
    {
      key: '__height', // 鍐呯疆灞炴€�
      label: '高度',
      valueType: 'number', // 鏁板瓧绫诲瀷
      defaultValue: 36,
    },
    {
      key: 'color',
      label: '颜色',
      valueType: 'color',
      defaultValue: '#000000',
      tooltip: `获取当前的颜色`,
    },
  ],
  methods: [],
  events: [
    {
      key: 'onChange',
      label: '改变时',
      params: [
        {
          key: 'color',
          label: '颜色',
          valueType: 'color',
        },
      ],
      blockOptions: {
        icon: BLOCK_ICON,
        color: BLOCK_COLOR,
      },
      tooltip: `当被改变时，事件onChange`,
    },
  ],
};

class Widget extends VisibleWidget {
  constructor(props) {
    super(props);
    this.widgetLog('嘿，欢迎使用颜色选择器，由中子星000制作');
    this.color = props.color;
  }

  onChange = (event) => {
    const color = event.target.value;
    this.setProps({ color: color });
    this.emit('onChange', color);
  };

  render() {
    let color = this.color;

    try {
      color = Color(this.color).hex();
    } catch (e) {
      console.error('Color error', e);
      color = '#000000';
    }

    return (
      <input
        type="color"
        value={color}
        onChange={this.onChange}
        style={{
          width: '100%',
          height: '100%',
        }}
      />
    );
  }
}

exports.types = types;
exports.widget = Widget;