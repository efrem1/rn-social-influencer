import React, {Component} from 'react';
import {StyleSheet, View} from 'react-native';
import {TextInput} from 'react-native-gesture-handler';
import {colours} from 'styles';

export class Input extends Component {
  constructor(props) {
    super(props);
    this.state = {
      borderColor: colours.creamwhite,
    };
  }
  onFocus = () => {
    this.setState({borderColor: 'blue'});
  };
  onBlur = () => {
    this.setState({borderColor: colours.creamwhite});
  };
  render() {
    const {
      containerStyle,
      inputRef,
      size,
      colour,
      style,
      rightComponent,
      ...otherProps
    } = this.props;
    const {borderColor} = this.state;
    return (
      <View style={[styles.container, containerStyle, {borderColor}]}>
        <TextInput
          onFocus={this.onFocus}
          onBlur={this.onBlur}
          {...otherProps}
          ref={inputRef}
          style={[
            styles.input,
            size && {fontSize: size},
            colour && {color: colour},
            style,
          ]}
        />
        {rightComponent && rightComponent()}
      </View>
    );
  }
}

Input.defaultProps = {
  rightComponent: null,
};

const styles = StyleSheet.create({
  container: {
    borderWidth: 1,
    backgroundColor: colours.white,
    borderRadius: 8,
    paddingHorizontal: 20,
    paddingVertical: 6,
    marginVertical: 12,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  input: {
    fontSize: 16,
    height: 40,
    width: '80%',
  },
});
