(function () {
  if (/Trident/i.test(platform.layout) || /edge/i.test(platform.layout)) {
      var cssText =
          "div,p,a,span {\
              margin: 0;\
              padding: 0;\
              box-sizing: border-box;\
          }\
          .detect-browser-banner { \
              font-family: 'Helvetica Neue',Helvetica,'PingFang SC','Hiragino Sans GB','Microsoft YaHei',Arial,sans-serif;\
              position: fixed; \
              left: 0; \
              right: 0; \
              bottom: 0; \
              height: 120px; \
              background: black;\
              background: hsla(0, 0%, 0%, 0.8); \
              z-index: 100; \
              text-align: center; \
          } \
          \
          .detect-browser-banner__close-btn {\
              background: url(https://static.codemao.cn/whitef/detect-browser/google-browser-compressor-1.png) no-repeat -492px 0;\
              width: 34px; \
              height: 34px; \
              position: absolute;\
              right: 10px;\
              top: 10px; \
              cursor:pointer; \
          }\
          .detect-browser-banner .text-wrapper { \
              display: inline-block; \
              vertical-align: top; \
              height: 100%; \
              width: 270px; \
              margin-right: 20px; \
          } \
           \
          .detect-browser-banner .text_wrapper__para { \
              font-size: 14px; \
              color: white; \
              margin-top: 20px; \
              margin-right: 28px; \
              text-align: left; \
              line-height: 22px;\
              white-space: nowrap;\
          } \
           \
          .detect-browser-banner .text-wrapper__dot { \
              background: #349ED2; \
              display: inline-block; \
              border-radius: 2px; \
              width: 16px; \
              height: 16px; \
              vertical-align: text-bottom; \
              margin-right: 10px; \
          } \
           \
          .detect-browser-banner .img-wrapper { \
              display: inline-block; \
              vertical-align: top; \
              background-repeat: no-repeat; \
              background-image: url(https://static.codemao.cn/whitef/detect-browser/google-browser-compressor-1.png); \
              background-position:  -39px 16px; \
              width: 332px; \
              height: 100%; \
              margin-right: 30px; \
          } \
           \
          .detect-browser-banner .download-wrapper { \
              display: inline-block; \
              vertical-align: top; \
              height: 100%; \
          } \
           \
          .detect-browser-banner .download-wrapper__logo { \
              width: 88px; \
              height: 100%; \
              margin-right: 20px; \
              display: inline-block; \
              vertical-align: top; \
              background: url(https://static.codemao.cn/whitef/detect-browser/google-browser-compressor-1.png) no-repeat -388px 16px; \
          } \
           \
          .detect-browser-banner .download-wrapper__area { \
              width: 180px; \
              height: 100%; \
              vertical-align: top; \
              display: inline-block; \
              padding-top: 16px; \
          } \
           \
          .detect-browser-banner .download-wrapper__download-text { \
              color: #34E7F2; \
              font-size: 22px; \
              margin-bottom: 12px; \
          } \
           \
          .detect-browser-banner .download-wrapper__download-btn { \
              background-image: linear-gradient(180deg, #F7554D 0%, #FF382E 100%); \
              border: 1px solid #E54137; \
              border-radius: 6px; \
              width: 170px; \
              height: 40px; \
              color: white; \
              font-size: 20px; \
              text-align: center; \
              line-height: 40px; \
              cursor: pointer; \
              display: block; \
              text-decoration: none; \
          } \
           \
          .detect-browser-banner .download-wrapper__download-btn:visited { \
              color: white; \
          } \
           \
          .detect-browser-banner .spliter { \
              width: 1px; \
              height: 80px; \
              margin-top: 20px; \
              display: inline-block; \
              vertical-align: top; \
              background-color: hsl(0, 0%, 40%); \
              margin-right: 30px; \
          }";
      var style = document.createElement('style');
      style.type = 'text/css';
      if (style.styleSheet) {
          style.styleSheet.cssText = cssText;
      } else {
          style.appendChild(document.createTextNode(cssText));
      }
      document.getElementsByTagName('head')[0].appendChild(style);
      var checkBanner = document.createElement('section');
      checkBanner.className = 'detect-browser-banner';
      checkBanner.innerHTML = ' <div class="text-wrapper"> \
                  <div class="detect-browser-banner__close-btn"></div>\
                  <div class="text_wrapper__para"> \
                      <p><span class="text-wrapper__dot"></span> \
                          猫老祖检测到你的浏览器是Interner</p> \
                      <p>Explorer内核，与编程猫使用的新技术存在</p> \
                      <p>许多兼容性问题；推荐使用[Google]浏览</p> \
                      <p>器体验完整功能。</p> \
                  </div> \
              </div> \
              <div class="img-wrapper"></div> \
              <div class="spliter""></div> \
              <div class="download-wrapper"> \
                  <div class="download-wrapper__logo"></div> \
                  <div class="download-wrapper__area"> \
                      <p class="download-wrapper__download-text"> \
                          Google浏览器 \
                      </p> \
                      <a class="download-wrapper__download-btn">立即下载</a> \
                  </div> \
              </div>';
      var btn = checkBanner.querySelector('.download-wrapper__download-btn');
      var get_chrome_link = function() {
        var user_agent = navigator.userAgent;
        var is_win_64 = (user_agent.toLowerCase().includes('win64') || user_agent.toLowerCase().includes('wow64'));
        var isMacUser = /mac/ig.test(navigator.userAgent);
        if (isMacUser) {
          return 'https://static.codemao.cn/whitepaw/download/chrome_installer_v84_mac.dmg';
        }
        if (user_agent.indexOf('Windows NT 5.1') > -1 || user_agent.indexOf('Windows XP') > -1) {
          return 'https://static.codemao.cn/whitepaw/download/chrome_installer_v49_xp.exe';
        }
        return is_win_64 ?
          'https://static.codemao.cn/whitepaw/download/chrome_installer_v88_win64.exe' :
          'https://static.codemao.cn/whitepaw/download/chrome_installer_v88_win32.exe';
      };
      btn.href = get_chrome_link();
      var closeBtn = checkBanner.querySelector('.detect-browser-banner__close-btn');
      closeBtn.onclick = function () {
          checkBanner.style.display = 'none';
      };
      document.body.appendChild(checkBanner);
  }
}());
