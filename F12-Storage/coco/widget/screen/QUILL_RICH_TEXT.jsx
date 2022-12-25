/* eslint-disable no-undef */
/* eslint-disable react/react-in-jsx-scope */

const types = {
    type: 'QUILL_RICH_TEXT_WIDGET',
    icon: 'https://creation.codemao.cn/716/appcraft/IMAGE_FraESl3kt_1656573654713.svg',
    title: '富文本',
    platforms: ['web', 'android', 'ios'],
    isInvisibleWidget: false,
    isGlobalWidget: false,
    properties: [
      {
        key: 'content',
        label: '文本',
        valueType: 'richTextString',
        defaultValue:
          '<p><strong class="ql-size-title2" style="color: rgb(56, 56, 56); background-color: rgb(183, 221, 251);"><em><u>富文本</u></em></strong></p>',
        editorType: 'RichTextEditor',
      },
      {
        key: '__width',
        label: '长度',
        valueType: 'number',
        defaultValue: 160,
        blockOptions: {
          generateBlock: false,
        },
      },
      {
        key: '__height',
        label: '宽度',
        valueType: 'number',
        defaultValue: 40,
        blockOptions: {
          generateBlock: false,
        },
      },
      {
        key: 'hideOverflow',
        label: '溢出文本框时隐藏',
        valueType: 'boolean',
        defaultValue: true,
      },
      {
        key: '__size',
        label: '',
        valueType: 'number',
        defaultValue: 100,
        readonly: true,
        blockOptions: {
          setter: {
            keys: ['__height', '__width'],
          },
          getter: {
            keys: ['__height', '__width'],
          },
        },
      },
    ],
    methods: [],
    events: [
      {
        key: 'onClick',
        label: '被点击时',
        params: [],
      },
    ],
  };
  
  class QuillRichTextWidget extends VisibleWidget {
    constructor(props) {
      super(props);
      this.content = props.content;
      this.hideOverflow = props.hideOverflow;
    }
  
    onClick = () => {
      this.emit('onClick');
    };
  
    render() {
      const hideOverflow = this.hideOverflow === true;
      return (
        <div
          className="ql-snow"
          onClick={this.onClick}
          style={{
            height: hideOverflow ? '100%' : undefined,
          }}>
          <div
            dangerouslySetInnerHTML={{ __html: this.content }}
            className="ql-editor"
            style={{
              padding: '4px 8px',
              overflow: hideOverflow ? 'hidden' : undefined,
              '::WebkitScrollbar': { width: 0 },
            }}
          />
        </div>
      );
    }
  }
  
  exports.types = types;
  exports.widget = QuillRichTextWidget;
