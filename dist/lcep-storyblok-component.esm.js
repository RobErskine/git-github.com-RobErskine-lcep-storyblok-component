import { createElement } from 'react';

var index = (function (_ref) {
  var _ref$slot = _ref.slot,
    slot = _ref$slot === void 0 ? 'top' : _ref$slot,
    story = _ref.story;
  if (!story) {
    return createElement("div", null, createElement("span", null, "Loading..."));
  }
  var slotContent = story.content.bottomSlot;
  if (slot === 'top') {
    slotContent = story.content.topSlot;
  }
  slotContent = slotContent.replace(/\n\n/g, '<br />');
  return createElement("div", null, createElement("p", {
    dangerouslySetInnerHTML: {
      __html: slotContent
    }
  }));
});

export default index;
//# sourceMappingURL=lcep-storyblok-component.esm.js.map
