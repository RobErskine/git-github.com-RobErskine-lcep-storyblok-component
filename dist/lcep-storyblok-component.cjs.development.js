'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var React = require('react');

var index = (function (_ref) {
  var _ref$slot = _ref.slot,
    slot = _ref$slot === void 0 ? 'top' : _ref$slot,
    story = _ref.story;
  if (!story) {
    return React.createElement("div", null, React.createElement("span", null, "Loading..."));
  }
  var slotContent = story.content.bottomSlot;
  if (slot === 'top') {
    slotContent = story.content.topSlot;
  }
  slotContent = slotContent.replace(/\n\n/g, '<br />');
  return React.createElement("div", null, React.createElement("p", {
    dangerouslySetInnerHTML: {
      __html: slotContent
    }
  }));
});

exports.default = index;
//# sourceMappingURL=lcep-storyblok-component.cjs.development.js.map
