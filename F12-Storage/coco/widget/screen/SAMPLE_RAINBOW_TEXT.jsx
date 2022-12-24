/* eslint-disable no-undef */
/* eslint-disable react/react-in-jsx-scope */
const types = {
    type: 'SAMPLE_RAINBOW_TEXT_WIDGET',
    icon: 'https://static.codemao.cn/appcraft/extension-widgets/production/rainbow-text.svg',
    title: '褰╄櫣鏂囧瓧',
    platforms: ['web', 'android', 'ios'],
    isInvisibleWidget: false,
    isGlobalWidget: false,
    properties: [
      {
        key: '__width',
        label: '长度',
        valueType: 'number',
        defaultValue: 100,
      },
      {
        key: '__height',
        label: '宽度',
        valueType: 'number',
        defaultValue: 50,
      },
      {
        key: 'content',
        label: '文本',
        valueType: 'string',
        defaultValue: '彩虹文字',
      },
      {
        key: 'startColor',
        label: '开始颜色',
        valueType: 'color',
        defaultValue: 'red',
      },
      {
        key: 'endColor',
        label: '结束颜色',
        valueType: 'color',
        defaultValue: 'blue',
      },
    ],
    methods: [
      {
        key: 'change',
        label: '变色',
        params: [],
      },
    ],
    events: [
      {
        key: 'onClick',
        label: '被点击',
        params: [],
      },
    ],
  };
  
  function Color() {
    this.r = Math.floor(Math.random() * 255);
    this.g = Math.floor(Math.random() * 255);
    this.b = Math.floor(Math.random() * 255);
    this.color = 'rgba(' + this.r + ',' + this.g + ',' + this.b + ',0.8)';
  }
  
  class RainbowTextWidget extends VisibleWidget {
    constructor(props) {
      super(props);
      this.startColor = props.startColor;
      this.endColor = props.endColor;
      this.content = props.content;
    }
  
    onClick = () => {
      this.emit('onClick');
    };
  
    change = () => {
      const startColor = new Color().color;
      const endColor = new Color().color;
      this.setProps({
        startColor,
        endColor,
      });
    };
  
    render() {
      return (
        <div>
          <span
            onClick={this.onClick}
            style={{
              backgroundImage: `linear-gradient(to right, ${this.startColor}, ${this.endColor})`,
              backgroundClip: 'text',
              WebkitBackgroundClip: 'text',
              color: 'transparent',
            }}>
            {this.content}
          </span>
        </div>
      );
    }
  }
  
  exports.types = types;
  exports.widget = RainbowTextWidget;