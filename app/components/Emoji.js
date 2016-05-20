import React, {
  PropTypes,
  View,
  Image,
} from 'react-native';
import emojiSpriteMap from 'image!emojis';

/**
 * This is a basic emoji component.  It renders an image of an emoji based on the spritemap in the
 * 'image!emojis' static resource and the x/y coordinates you provide to the component.
 * @param {number} x - the x coordinate of the emoji that you want to render in the spritemap
 * @param {number} y - the y coordinate of the emoji that you want to render in the spritemap
 */
const Emoji = ({ x, y, scale = 1 }) => (
  <View
    style={{
      width: 32 * scale,
      height: 32 * scale,
      overflow: 'hidden',
    }}
  >
    <Image
      source={emojiSpriteMap}
      style={{
        width: emojiSpriteMap.width * scale * 0.5,
        height: emojiSpriteMap.height * scale * 0.5,
        left: -32 * x * scale,
        top: -32 * y * scale,
      }}
    />
  </View>
);

Emoji.propTypes = {
  x: PropTypes.number.isRequired,
  y: PropTypes.number.isRequired,
  scale: PropTypes.number,
};

export default Emoji;
