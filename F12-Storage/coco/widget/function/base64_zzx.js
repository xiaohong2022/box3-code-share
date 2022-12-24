/* eslint-disable */

/*
 * 嘿，欢迎使用Base编解码，由中子星000制作
 * 作者：中子星000
 * 主页：https://shequ.codemao.cn/user/2867423
 * QQ：2422481178
 * 使用方法：字面意思
 */

const BLOCK_COLOR = '#00B6B6AA';
const WIDGET_ICON =
  'https://creation.codemao.cn/716/appcraft/IMAGE_bZbAOhRcTa_1643095470593.svg';
const BLOCK_ICON =
  'https://creation.codemao.cn/716/appcraft/IMAGE_xMzcMWdJQ_1643095470592.svg';
const AUTHER = '中子星000';
const HOMEPAGE = 'https://shequ.codemao.cn/user/2867423';
const QQ = 2422481178;

const types = {
  type: 'BASE_ZZX_WIDGET',
  icon: WIDGET_ICON,
  title: 'Base编解码',
  version: '1.1.0',
  platforms: ['android', 'ios', 'web'],
  isInvisibleWidget: true,
  isGlobalWidget: true,
  docs: {
    url: 'https://www.yuque.com/coco-central/guide/base64',
  },
  properties: [],
  methods: [
    {
      key: 'base64',
      label: 'Base64',
      valueType: 'string',
      params: [
        {
          key: 'mode',
          valueType: 'string',
          defaultValue: 'encode',
          dropdown: [
            { label: '编码', value: 'encode' },
            { label: '解码', value: 'decode' },
          ],
        },
        {
          key: 'str',
          label: '文本',
          valueType: 'string',
          defaultValue: '',
        },
      ],
      blockOptions: {
        icon: BLOCK_ICON,
        color: BLOCK_COLOR,
      },
      tooltip: `本扩展支持中文 编码模式：将字符串编码为Base64；解码模式：将Base64解码为字符串`,
    },
    {
      key: 'base91',
      label: 'Base91',
      valueType: 'string',
      params: [
        {
          key: 'mode',
          valueType: 'string',
          defaultValue: 'encode',
          dropdown: [
            { label: '编码', value: 'encode' },
            { label: '解码', value: 'decode' },
          ],
        },
        {
          key: 'str',
          label: '文本',
          valueType: 'string',
          defaultValue: '',
        },
      ],
      blockOptions: {
        icon: BLOCK_ICON,
        color: BLOCK_COLOR,
      },
      tooltip: `本扩展支持中文 编码模式：将字符串编码为Base91；解码模式：将Base91解码为字符串`,
    },
  ],
  events: [],
};

/* base91.js */
function base91Encode(d){b91_enctab=Array('A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z','a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z','0','1','2','3','4','5','6','7','8','9','!','#','$','%','&','(',')','*','+',',','.','/',':',';','<','=','>','?','@','[',']','^','_','`','{','|','}','~','"');n=0;o="";b=0;for(i=0;i<d.length;++i){b|=(d[i]).charCodeAt()<<n;n+=8;if(n>13){v=b&8191;if(v>88){b>>=13;n-=13}else{v=b&16383;b>>=14;n-=14}o+=(b91_enctab[v%91]+b91_enctab[parseInt(v/91)])}}if(n){o+=b91_enctab[b%91];if(n>7||b>90)o+=b91_enctab[parseInt(b/91)]}return o}function array_flip(trans){var key,tmp_ar={};for(key in trans)if(trans.hasOwnProperty(key))tmp_ar[trans[key]]=key;return tmp_ar}function base91Decode(d){b91_dectab=array_flip(Array('A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z','a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z','0','1','2','3','4','5','6','7','8','9','!','#','$','%','&','(',')','*','+',',','.','/',':',';','<','=','>','?','@','[',']','^','_','`','{','|','}','~','"'));v=-1;b=0;n=0;o="";for(i=0;i<d.length;++i){c=b91_dectab[d[i]];if((typeof(c)=="undefined"))continue;if(v<0)v=parseInt(c);else{v+=parseInt(c)*91;b|=v<<n;n+=(v&8191)>88?13:14;do{o+=String.fromCharCode(b&255);b>>=8;n-=8}while(n>7);v=-1}}if(v+1)o+=String.fromCharCode((b|v<<n)&255);return o}

class Widget extends InvisibleWidget {
  constructor(props) {
    super(props);
  }

  base64(mode, str) {
    if (mode === 'encode') {
      return btoa(
        encodeURIComponent(str).replace(
          /%([0-9A-F]{2})/g,
          function toSolidBytes(match, p1) {
            return String.fromCharCode('0x' + p1);
          }
        )
      );
    } else {
      return decodeURIComponent(
        atob(str)
          .split('')
          .map(function (c) {
            return '%' + ('00' + c.charCodeAt(0).toString(16)).slice(-2);
          })
          .join('')
      );
    }
  }

  base91(mode, str) {
    if (mode === 'encode') {
      return base91Encode(
        encodeURIComponent(str).replace(
          /%([0-9A-F]{2})/g,
          function toSolidBytes(match, p1) {
            return String.fromCharCode('0x' + p1);
          }
        )
      );
    } else {
      return decodeURIComponent(
        base91Decode(str)
          .split('')
          .map(function (c) {
            return '%' + ('00' + c.charCodeAt(0).toString(16)).slice(-2);
          })
          .join('')
      );
    }
  }
}

console.log('嘿，欢迎使用Base编解码，由中子星000制作');
console.log('作者：中子星000');
console.log('主页：https://shequ.codemao.cn/user/2867423');
console.log('QQ：2422481178');
console.log('使用方法：字面意思');

exports.types = types;
exports.widget = Widget;
