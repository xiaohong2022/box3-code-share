const AUTHOR = '刘yxAndy';
const HOMEPAGE = 'https://www.yuque.com/liulyxandy';
const QQ = 3449556207;

const types = {
  type: 'SUPER_LINK_WIDGET',
  icon: 'https://creation.codemao.cn/716/appcraft/IMAGE_vwZPnyOpm_1643090741772.svg',
  title: '超链接',
  version: '1.1.0',
  platforms: ['android', 'ios', 'web'],
  isInvisibleWidget: false,
  isGlobalWidget: false,
  docs: {
    url: 'https://www.yuque.com/coco-central/guide/suplnkwid',
  },
  properties: [
    {
      key: 'content',
      label: '链接文案',
      valueType: 'string',
      defaultValue: '编程猫',
      tooltip: '链接中显示的文本',
    },
    {
      key: 'href',
      label: '目标URL',
      valueType: 'string',
      defaultValue: 'https://www.codemao.cn/',
      tooltip: '链接指向的URL',
    },
    {
      key: 'color',
      label: '文本颜色',
      valueType: 'color',
      defaultValue: '#1890ff',
      tooltip: '链接文本颜色',
    },
    {
      key: 'textSize',
      label: '文本大小',
      valueType: 'number',
      defaultValue: 16,
      tooltip: '链接文本大小',
    },
    {
      key: 'textOblique',
      label: '文本斜体',
      valueType: 'boolean',
      defaultValue: false,
    },
    {
      key: 'textBold',
      label: '文本加粗',
      valueType: 'boolean',
      defaultValue: false,
    },
    {
      key: 'underline',
      label: '下划线',
      valueType: 'boolean',
      defaultValue: true,
    },
  ],
  methods: [],
  events: [],
};

// eslint-disable-next-line no-undef
class SuperLink extends VisibleWidget {
  constructor(props) {
    super(props);
    this.content = props.content;
    this.href = props.href;
    this.color = props.color;
    this.textSize = props.textSize;
    if (props.textBold === true) {
      this.textBold = 'bold';
    } else {
      this.textBold = 'normal';
    }
    if (props.textOblique === true) {
      this.textOblique = 'oblique';
    } else {
      this.textOblique = 'normal';
    }
    this.underline = props.underline;
  }

  render() {
    return (
      // eslint-disable-next-line react/react-in-jsx-scope
      <a
        href={this.href}
        style={{
          color: this.color,
          fontSize: this.textSize,
          fontWeight: this.textBold,
          fontStyle: this.textOblique,
          textDecoration: this.underline ? 'underline' : undefined,
        }}>
        {this.content}
      </a>
    );
  }
}

exports.types = types;
exports.widget = SuperLink;