const types = {
    // 这就是你的船了，包含了你的船的信息，即一个自定义控件类型
    type: 'ASCII_CONVERT_WIDGET', // 当作是船的型号，最好使用全英文大写，下划线连接
    title: 'ASCII', // 当作是船的名字
    icon: 'https://creation.codemao.cn/716/appcraft/IMAGE_pYUk6GEdj_1654590687623.svg', // 一艘船得有一个好看的图标作为标识，一般用.svg的图片
    isInvisibleWidget: true, // （实在想不到什么比喻了）用于决定这个控件是否不可见，这个教程只教不可见控件，想要了解可见控件参考其他教程
    isGlobalWidget: true, // （实在想不到什么比喻了）用于决定这个控件是否全局
    properties: [], // 你的船会有一些独特的属性在这里定义，控件的属性列表，本教程中未使用，但也得写上
    methods: [
      // 你的船能做什么就看它了，控件的方法列表
      {
        // 每一个方法都由类似这样的一段大括号里面的内容定义
        key: 'ToAscii', // 这个方法的名字，会在下面用到
        valueType: 'number', // 我们进行完转换后返回转换后的字符串
        params: [
          // 进行一些操作，经常是给方法一些参数的
          {
            key: 'text', // 参数名，要和下面对应
            label: '把', // 更好的衔接积木，增加可读性
            labelAfter: '转换成 ASCII 码', // 更好的衔接积木，增加可读性
            valueType: 'string', // 我们要输入一个字符串进行转换大写
            defaultValue: 'A', // 积木里默认的值
          },
        ],
        tooltip: '将字符转换成 ASCII 码', // 向使用这个控件的人描述这个方法是做什么的，怎么用的
      },
      {
        key: 'ToChar', // 这个方法的名字，会在下面用到
        valueType: 'string',
        params: [
          {
            key: 'ascii',
            label: '把',
            labelAfter: '转换成字符', // 更好的衔接积木，增加可读性
            valueType: 'number',
            defaultValue: 65,
          },
        ],
        tooltip: '将 ASCII 码转换成字符', // 向使用这个控件的人描述这个方法是做什么的，怎么用的
      },
    ],
    events: [], // 你的船不是一帆风顺的，总是会发生一些事情，控件的事件列表，本教程中未使用，但也得写上
  };
  
  // 下面开始有点难了哟~还是得硬核
  // eslint-disable-next-line no-undef
  class Widget extends InvisibleWidget {
    // 现在，把你船的框架填上代码吧！
    // eslint-disable-next-line no-useless-constructor
    constructor(props) {
      // 这个是构造函数，必须要有的
      super(props); // 调用超类的构造函数，必须要有的
    }
  
    ToAscii = (text) => {
      // 定义上面对应的方法，这里的参数要和上面对应
      // 这里调用了JavaScript字符串对象的原生方法
      return text.charCodeAt(); // 这里返回的内容数据类型要和上面对应
    };
  
    ToChar = (ascii) => {
      // 定义上面对应的方法，这里的参数要和上面对应
      return String.fromCharCode(ascii); // 这里返回的内容数据类型要和上面对应
    };
  }
  
  // 最后导出这艘船，让它下海，即导出自定义控件
  exports.types = types;
  exports.widget = Widget;
  