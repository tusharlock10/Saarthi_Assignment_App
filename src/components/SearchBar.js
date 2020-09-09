import React from 'react';
import {View, TextInput, StyleSheet} from 'react-native';
import Icon from 'react-native-vector-icons/Feather';
import {COLORS, FONTS} from '../Constants';

export const SearchBar = (props) => {
  const {placeholder, value, onChangeText, onClear, onSubmit} = props;

  return (
    <View style={styles.SearchView}>
      <Icon
        name="search"
        size={20}
        color={COLORS.LIGHT_GRAY}
        style={{marginRight: 10}}
        onPress={onSubmit}
      />
      <View style={{flex: 1}}>
        <TextInput
          placeholder={placeholder}
          value={value}
          onChangeText={onChangeText}
          placeholderTextColor={COLORS.LIGHT_GRAY}
          style={styles.TextInput}
          onSubmitEditing={onSubmit}
        />
      </View>
      <Icon
        name="x"
        size={20}
        color={COLORS.LIGHT_GRAY}
        style={{marginRight: 5}}
        onPress={onClear}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  SearchView: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 10,
    margin: 10,
    borderRadius: 10,
    borderWidth: 1.5,
    borderColor: COLORS.LIGHT_GRAY,
  },
  TextInput: {
    padding: 0,
    fontFamily: FONTS.LATO,
    color: COLORS.DARK,
    fontSize: 16,
  },
});
