'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var React = require('react');
var react = require('@storyblok/react');

var index = (function (_ref) {
  var _ref$slot = _ref.slot,
    slot = _ref$slot === void 0 ? 'top' : _ref$slot,
    story = _ref.story;
  if (!story) {
    return React.createElement("div", null, React.createElement("span", null, "Loading..."));
  }
  var styles = "\n    /* Video Component */\n    .lcep-video {\n      display: block;\n      width: 100%;\n      max-width: 960px;\n      margin:0 auto;\n      padding:2rem 1rem;\n      position: relative;\n    }\n\n    .lcep-video:after {\n      content: '';\n      display: block;\n      position: relative;\n      padding-bottom: 56.25%;\n      height: 0;\n      overflow: hidden;\n    }\n\n    .lcep-video video {\n      position: absolute;\n      top: 0px;\n      right: 0px;\n\n      bottom: 0px;\n      left: 0px;\n      width: 100%;\n      height: 100%;\n    }\n\n\n    /* Promotion Component */\n    .lcep-promotion {\n      display: flex;\n      align-items: center;\n      justify-content: end;\n      width: 100%;\n      max-width: 200px;\n      margin: 0 auto;\n      padding: 2rem 1rem;\n      position: relative;\n      z-index: 1;\n      background-size: cover;\n      background-position: center;\n      background-repeat: no-repeat;\n      color: #fff;\n    }\n\n    .lcep-promotion:after{\n      display: block;\n      content: '';\n      z-index: 2;\n      position: absolute;\n      top: 0px;\n      right: 0px;\n      bottom: 0px;\n      left: 0px;\n      background-color: rgba(0,0,0,0.5);\n    }\n  ";
  var topSlotContent = react.renderRichText(story.content.topSlot);
  var promotionContent = react.renderRichText(story.content.promotionContent);
  var bottomSlotContent = react.renderRichText(story.content.bottomSlot);
  // top slot
  if (slot === 'top') {
    return React.createElement("div", null, React.createElement("style", null, styles), topSlotContent);
  }
  // bottom slot
  else if (slot === 'bottom') {
    return React.createElement("div", null, React.createElement("style", null, styles), bottomSlotContent);
  }
  // video slot
  else if (slot === 'video') {
    return React.createElement("div", {
      className: "lcep-video"
    }, React.createElement("style", null, styles), React.createElement("video", {
      controls: true
    }, React.createElement("source", {
      src: story.content.productVideos[0].source,
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
    }, React.createElement("style", null, styles), promotionContent, React.createElement("a", {
      href: story.content.promotionLink.url
    }, "Learn more"));
    // slot not found
  } else {
    return React.createElement("div", null, React.createElement("p", null, "Slot not configured."));
  }
});

exports.default = index;
//# sourceMappingURL=lcep-storyblok-component.cjs.development.js.map
