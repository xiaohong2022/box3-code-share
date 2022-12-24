/* eslint-disable no-undef */
/* eslint-disable react/react-in-jsx-scope */

// eslint-disable-next-line @typescript-eslint/no-var-requires
const Antd = require('antd-mobile');

const defaultImageList = [
  'https://creation.codemao.cn/716/appcraft/IMAGE_9r5q_5aCBS_1640252560978.png',
  'https://creation.codemao.cn/716/appcraft/IMAGE_xkwMsmKiB0_1640252550877.png',
  'https://creation.codemao.cn/716/appcraft/IMAGE_c5Yj5_O5qY_1640252550877.png',
];

const defaultImageColorList = ['#ace0ff', '#bcffbd', '#e4fabd'];

const types = {
  type: 'ANTD_SWIPER_WIDGET',
  icon: 'https://static.codemao.cn/appcraft/extension-widgets/production/swiper.svg',
  title: '轮播',
  platforms: ['web', 'android', 'ios'],
  isInvisibleWidget: false,
  isGlobalWidget: false,
  properties: [
    {
      key: '__width',
      label: '长度',
      valueType: 'number',
      defaultValue: 300,
    },
    {
      key: '__height',
      label: '宽度',
      valueType: 'number',
      defaultValue: 200,
    },
    {
      key: 'direction',
      label: '方向',
      valueType: 'string',
      defaultValue: 'horizontal',
      dropdown: [
        { label: '横向', value: 'horizontal' },
        { label: '竖向', value: 'vertical' },
      ],
    },
    {
      key: 'bgColor',
      label: '背景颜色',
      valueType: 'color',
      defaultValue: 'transparent',
    },
    {
      key: 'borderRadius',
      label: '圆角',
      valueType: 'number',
      defaultValue: 0,
      unit: '像素',
    },
    {
      key: 'autoplay',
      label: '自动播放',
      valueType: 'boolean',
      defaultValue: false,
    },
    {
      key: 'autoplayInterval',
      label: '自动播放间隔',
      valueType: 'number',
      defaultValue: 2000,
      unit: '毫秒',
    },
    {
      key: 'loop',
      label: '循环',
      valueType: 'boolean',
      defaultValue: true,
    },
    {
      key: 'indicatorVisible',
      label: '是否显示指示器',
      valueType: 'boolean',
      defaultValue: true,
    },
    {
      key: 'slideSize',
      label: '图片尺寸',
      valueType: 'number',
      defaultValue: 100,
      unit: '%',
    },
    {
      key: 'padding',
      label: '图片间距',
      valueType: 'string',
      defaultValue: '0px 0px 0px 0px',
    },
    {
      key: 'images',
      label: '图片列表',
      valueType: ['string'],
      defaultValue: defaultImageList.join(','),
      editorType: 'TextArea',
    },
    {
      key: 'imageColors',
      label: '图片背景颜色列表',
      valueType: ['string'],
      defaultValue: defaultImageColorList.join(','),
      editorType: 'TextArea',
    },
  ],
  methods: [
    {
      key: 'swipeTo',
      label: '跳到第',
      params: [
        {
          key: 'index',
          label: '',
          labelAfter: '张',
          valueType: 'number',
          defaultValue: 1,
        },
      ],
    },
    {
      key: 'swipePrev',
      label: '上一张',
      params: [],
    },
    {
      key: 'swipeNext',
      label: '下一张',
      params: [],
    },
  ],
  events: [
    {
      key: 'onItemClick',
      label: '图片被点击时',
      params: [
        {
          key: 'index',
          label: '序号',
          valueType: 'number',
        },
      ],
    },
    {
      key: 'onIndexChange',
      label: '切换成功时',
      params: [
        {
          key: 'index',
          label: '序号',
          valueType: 'number',
        },
      ],
    },
  ],
};

class RainbowTextWidget extends VisibleWidget {
  constructor(props) {
    super(props);
    this.direction = props.direction;
    this.images = props.images;
    this.imageColors = props.imageColors;
    this.bgColor = props.bgColor;
    this.autoplay = props.autoplay;
    this.autoplayInterval = props.autoplayInterval;
    this.loop = props.loop;
    this.borderRadius = props.borderRadius;
    this.padding = props.padding;
    this.indicatorVisible = props.indicatorVisible;
    this.slideSize = props.slideSize;
    this.swiperRef = React.createRef();
  }

  onClick = (index) => {
    this.widgetLog(`第${index + 1}被点击`);
    this.emit('onItemClick', index + 1);
  };

  setImageList(imageList) {
    this.imageList = imageList;
  }

  setImageBgColorList(colorList) {
    this.imageBgColorList = colorList;
  }

  onIndexChange = (index) => {
    this.emit('onIndexChange', index + 1);
  };

  swipeNext = () => {
    if (this.swiperRef && this.swiperRef.current) {
      this.swiperRef.current.swipeNext();
      this.widgetLog('上一张');
    }
  };

  swipePrev = () => {
    if (this.swiperRef && this.swiperRef.current) {
      this.swiperRef.current.swipePrev();
      this.widgetLog('下一张');
    }
  };

  swipeTo = (index) => {
    if (this.swiperRef && this.swiperRef.current) {
      this.swiperRef.current.swipeTo(index);
      this.widgetLog(`跳转到${index}张`);
    }
  };

  render() {
    const imageList = this.images.split(',');
    const imageColors = this.imageColors.split(',');
    return (
      <Antd.Swiper
        direction={this.direction}
        autoplay={this.autoplay}
        autoplayInterval={this.autoplayInterval}
        loop={this.loop}
        onIndexChange={this.onIndexChange}
        indicator={this.indicatorVisible ? undefined : () => null}
        slideSize={this.slideSize}
        ref={this.swiperRef}
        style={{
          '--height': '100%',
          '--border-radius': `${this.borderRadius}px`,
          '--track-padding': this.padding,
        }}>
        {imageList.map((image, index) => (
          <Antd.Swiper.Item
            key={image}
            onClick={() => {
              this.onClick(index);
            }}>
            <img
              src={image.trim()}
              draggable={false}
              style={{
                width: '100%',
                height: '100%',
                objectFit: 'contain',
                background: imageColors[index] || this.bgColor,
              }}
              alt=""
            />
          </Antd.Swiper.Item>
        ))}
      </Antd.Swiper>
    );
  }
}

exports.types = types;
exports.widget = RainbowTextWidget;