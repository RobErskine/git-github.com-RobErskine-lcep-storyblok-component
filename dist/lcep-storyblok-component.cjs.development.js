'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var React = require('react');

function renderRichText(richText) {
  var html = '';
  if (!richText) {
    return html;
  }
  richText.content.forEach(function (item) {
    if (item.type === 'heading') {
      var level = item.attrs.level;
      html += "<h" + level + ">" + item.content[0].text + "</h" + level + ">";
    } else if (item.type === 'paragraph') {
      if (item.content.length > 0) {
        html += '<p>';
        item.content.forEach(function (contentItem) {
          var text = contentItem.text;
          if (contentItem.marks) {
            contentItem.marks.forEach(function (mark) {
              if (mark.type === 'bold') {
                text = "<b>" + text + "</b>";
              }
              // Add other mark types if needed (italic, underline, etc.)
            });
          }
          html += text;
        });
        html += '</p>';
      }
    } else {
      console.log('Unknown type: ', item.type);
    }
  });
  return html;
}
var index = (function (_ref) {
  var _ref$slot = _ref.slot,
    slot = _ref$slot === void 0 ? 'top' : _ref$slot,
    story = _ref.story;
  if (!story) {
    return React.createElement("div", null, React.createElement("span", null, "Loading..."));
  }
  var styles = "\n    /* Video Component */\n    .lcep-video {\n      display: block;\n      width: 100%;\n      max-width: 960px;\n      margin:0 auto;\n      padding:2rem 1rem;\n      position: relative;\n    }\n\n    .lcep-video:after {\n      content: '';\n      display: block;\n      position: relative;\n      padding-bottom: 56.25%;\n      height: 0;\n      overflow: hidden;\n    }\n\n    .lcep-video video {\n      position: absolute;\n      top: 0px;\n      right: 0px;\n\n      bottom: 0px;\n      left: 0px;\n      width: 100%;\n      height: 100%;\n    }\n\n\n    /* Promotion Component */\n    .lcep-promotion {\n      display: flex;\n      flex-direction: column;\n      align-items: center;\n      justify-content: center;\n      width: 100%;\n      height:400px;\n      max-width: 200px;\n      margin: 0 auto;\n      padding: 2rem 1rem;\n      position: relative;\n      z-index: 1;\n      background-size: cover;\n      background-position: center;\n      background-repeat: no-repeat;\n      color: #fff;\n      border-radius: 12px;\n      overflow: hidden;\n    }\n\n    .lcep-promotion:after{\n      display: block;\n      content: '';\n      z-index: 2;\n      position: absolute;\n      top: 0px;\n      right: 0px;\n      bottom: 0px;\n      left: 0px;\n      background-color: rgba(0,0,0,0.5);\n    }\n\n    .lcep-promotion a,\n    .lcep-promotion span {\n      position: relative;\n      z-index: 3;\n      display: block;\n      width: 100%;\n      padding: 15px;\n    }\n\n    .lcep-promotion a {\n      background-color: #fff;\n      color: #000;\n      text-align: center;\n      text-decoration: none;\n      border-radius: 12px;\n      margin-top: 1rem;\n      padding: 1rem;\n    }\n  ";
  // top slot
  if (slot === 'top') {
    return React.createElement("div", {
      dangerouslySetInnerHTML: {
        __html: renderRichText(story.content.topSlot)
      }
    }, React.createElement("style", null, styles));
  }
  // bottom slot
  else if (slot === 'bottom') {
    return React.createElement("div", {
      dangerouslySetInnerHTML: {
        __html: renderRichText(story.content.bottomSlot)
      }
    }, React.createElement("style", null, styles));
  }
  // video slot
  else if (slot === 'video') {
    return React.createElement("div", {
      className: "lcep-video"
    }, React.createElement("style", null, styles), React.createElement("video", {
      controls: true
    }, React.createElement("source", {
      src: story.content.productVideos[0].filename,
      type: "video/mp4"
    })));
  }
  // promotion slot
  else if (slot === 'promotion' && story.content.showPromotion === true) {
    var _story$content;
    return React.createElement("div", {
      className: "lcep-promotion",
      style: {
        backgroundImage: "url(" + ((_story$content = story.content) == null ? void 0 : _story$content.promotionImage.filename) + ")"
      }
    }, React.createElement("style", null, styles), React.createElement("span", {
      dangerouslySetInnerHTML: {
        __html: renderRichText(story.content.promotionContent)
      }
    }), React.createElement("a", {
      href: story.content.promotionLink.url
    }, "Learn more"));
    // slot not found
  } else {
    return React.createElement("div", null, React.createElement("p", null, "Slot not configured."));
  }
});

exports.default = index;
//# sourceMappingURL=lcep-storyblok-component.cjs.development.js.map
