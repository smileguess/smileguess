/**
 * # __mockes__/react-native.js
 *
 * This class stubs out the React-Native classes with React classes
 */
'use strict';

/* eslint-disable react/no-multi-comp react/prefer-stateless-function */

/**
 * ## Imports
 *
 * ReactNative is actually React
 */
const React = require('react');
const ReactNative = React;

/**
 * ## These need additional mocking
 *
 * ReactNative is actually React
 */
ReactNative.StyleSheet = {
  create: function create(styles) {
    return styles;
  },
};
class View extends React.Component {
  render() { return false; }
}

View.propTypes = {
  style: React.PropTypes.any,
};

class TextInput extends React.Component {
  clear() { return null; }
  render() { return false; }
}

TextInput.propTypes = {
  style: React.PropTypes.object,
};

class Text extends React.Component {
  render() { return false; }
}

Text.propTypes = {
  style: React.PropTypes.any,
};

class PixelRatio extends React.Component {
  static get() { return 1; }
}

class Dimensions {
  get() {
    return { height: 568, width: 320 };
  }
}

class ListView extends React.Component {
  render() {
    return (
      <View>
        {
          this.props.dataSource.map((datum) =>
            this.props.renderRow(datum))
        }
      </View>
    );
  }
}

ListView.DataSource = class {
  cloneWithRows(dataSource) {
    return dataSource;
  }
};

ListView.propTypes = {
  dataSource: React.PropTypes.array,
  renderRow: React.PropTypes.func,
};

/**
 * ## Stubs
 *
 * Simple replacements for testing
 */
ReactNative.View = View;
ReactNative.ScrollView = View;
ReactNative.Text = Text;
ReactNative.TouchableOpacity = View;
ReactNative.TouchableHighlight = View;
ReactNative.TouchableWithoutFeedback = View;
ReactNative.ToolbarAndroid = View;
ReactNative.Image = View;
ReactNative.TextInput = TextInput;
ReactNative.PixelRatio = PixelRatio;
ReactNative.NativeModules = {};
ReactNative.Dimensions = new Dimensions();
ReactNative.ListView = ListView;

ReactNative.Platform = {};
module.exports = ReactNative;


/* eslint-enable react/no-multi-comp react/prefer-stateless-function  */
