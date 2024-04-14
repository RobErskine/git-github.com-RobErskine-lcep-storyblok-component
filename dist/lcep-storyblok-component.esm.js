import { createElement } from 'react';

function renderRichText(richText) {
  var html = '';
  if (!richText) {
    return html;
  }
  richText.content.forEach(function (item) {
    if (item.type === 'heading') {
      var _item$attrs, _item$content;
      var level = (_item$attrs = item.attrs) == null ? void 0 : _item$attrs.level;
      var contentText = (_item$content = item.content) == null || (_item$content = _item$content[0]) == null ? void 0 : _item$content.text;
      if (level && contentText) {
        html += "<h" + level + ">" + contentText + "</h" + level + ">";
      }
    } else if (item.type === 'paragraph') {
      if (item.content) {
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
    return createElement("div", null, createElement("span", null, "Loading..."));
  }
  var styles = "\n    .lcep-video {\n      display: block;\n      width: 100%;\n      max-width: 960px;\n      margin:0 auto;\n      padding:2rem 1rem;\n      position: relative;\n    }\n\n    .lcep-video video {\n      height: 100%;\n    }\n\n    .lcep-promotion {\n      display: flex;\n      flex-direction: column;\n      align-items: center;\n      justify-content: center;\n      width: 100%;\n      height:400px;\n      max-width: 200px;\n      margin: 0 auto;\n      padding: 2rem 1rem;\n      position: relative;\n      z-index: 1;\n      background-size: cover;\n      background-position: center;\n      background-repeat: no-repeat;\n      color: #fff;\n      border-radius: 12px;\n      overflow: hidden;\n    }\n\n    .lcep-promotion:after{\n      display: block;\n      z-index: 2;\n      position: absolute;\n      top: 0px;\n      right: 0px;\n      bottom: 0px;\n      left: 0px;\n      background-color: rgba(0,0,0,0.5);\n    }\n\n    .lcep-promotion a,\n    .lcep-promotion span {\n      position: relative;\n      z-index: 3;\n      display: block;\n      width: 100%;\n      padding: 15px;\n    }\n\n    .lcep-promotion span {\n      text-shadow: 1px 1px 2px rgba(0, 0, 0, 0.33);\n    }\n\n    .lcep-promotion a {\n      background-color: #fff;\n      color: #000;\n      text-align: center;\n      text-decoration: none;\n      border-radius: 12px;\n      margin-top: 1rem;\n      padding: 1rem;\n    }\n  ";
  // top slot
  if (slot === 'top') {
    return createElement("div", null, createElement("style", null, styles), createElement("div", {
      dangerouslySetInnerHTML: {
        __html: renderRichText(story.content.topSlot)
      }
    }));
  }
  // bottom slot
  else if (slot === 'bottom') {
    return createElement("div", null, createElement("style", null, styles), createElement("div", {
      dangerouslySetInnerHTML: {
        __html: renderRichText(story.content.bottomSlot)
      }
    }));
  }
  // video slot
  else if (slot === 'video') {
    return createElement("div", {
      className: "lcep-video"
    }, createElement("style", null, styles), createElement("video", {
      controls: true
    }, createElement("source", {
      src: story.content.productVideos[0].filename,
      type: "video/mp4"
    })));
  }
  // promotion slot
  else if (slot === 'promotion' && story.content.showPromotion === true) {
    var _story$content;
    return createElement("div", {
      className: "lcep-promotion",
      style: {
        backgroundImage: "url(" + ((_story$content = story.content) == null ? void 0 : _story$content.promotionImage.filename) + ")"
      }
    }, createElement("style", null, styles), createElement("span", {
      dangerouslySetInnerHTML: {
        __html: renderRichText(story.content.promotionContent)
      }
    }), createElement("a", {
      href: story.content.promotionLink.url
    }, "Learn more"));
    // slot not found
  } else {
    return createElement("div", null, createElement("p", null, "Slot not configured."));
  }
});

export default index;
//# sourceMappingURL=lcep-storyblok-component.esm.js.map
