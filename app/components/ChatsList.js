/* Import Components */
import React, {
  ListView,
  StyleSheet,
  PropTypes,
  Dimensions,
  View,
} from 'react-native';
import GuessMessage from './GuessMessage.js';
import SystemMessage from './SystemMessage.js';
import ClueMessage from './ClueMessage.js';

const { width: screenWidth } = Dimensions.get('window');

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  contentContainer: {
    justifyContent: 'flex-end',
    padding: 6,
    alignItems: 'center',
    width: screenWidth,
  },
});

/**
 * ChatsList is a React class component.
 * It renders a ListView control using a Message component to render each row.
 * @param {Object} props - prop for ChatsList component.
 * @param {Array<Object>} props.messages - An array of messages to render in the  * ChatsList.
 */
class ChatsList extends React.Component {
  constructor(props) {
    super(props);

    const ds = new ListView.DataSource({ rowHasChanged: (oldRow, newRow) => oldRow !== newRow });
    this.state = {
      dataSource: ds.cloneWithRows(this.props.messages),
    };

    this.renderRow = this.renderRow.bind(this);
  }

  /* When component receives new props we need to manually update the ListView
   * data source since render is not triggered automatically.
   */
  componentWillReceiveProps(nextProps) {
    const ds = new ListView.DataSource({ rowHasChanged: (oldRow, newRow) => oldRow !== newRow });
    this.setState({
      dataSource: ds.cloneWithRows(nextProps.messages),
    });
  }

  /* This function defines how a row will be rendered and is passed into
   * the ListView
   */
  renderRow(rowData = {}) {
    if (rowData.type === 'guess') {
      return (
        <GuessMessage
          {...rowData}
          players={this.props.players}
          screenSize={this.props.screenSize}
          currentUser={this.props.user}
        />
      );
    } else if (rowData.type === 'system') {
      return (
        <SystemMessage {...rowData} />
      );
    } else if (rowData.type === 'clue') {
      return (
        <ClueMessage
          {...rowData}
          players={this.props.players}
          screenSize={this.props.screenSize}
          currentUser={this.props.user}
        />
      );
    } else {
      return (<View />);
    }
  }

  /* Renders the ListView component */
  render() {
    return (
      <ListView
        style={[styles.container]}
        renderRow={this.renderRow}
        dataSource={this.state.dataSource}
        contentContainerStyle={[styles.contentContainer]}
        keyboardDismissMode="interactive"
        enableEmptySections
      />
    );
  }
}

ChatsList.propTypes = {
  messages: PropTypes.array.isRequired,
  players: PropTypes.object.isRequired,
  screenSize: PropTypes.object.isRequired,
  user: PropTypes.object.isRequired,
};

export default ChatsList;
