import {Button, Header, Icon, Input, Item} from 'native-base';
import React from 'react';
import {Text} from 'react-native';

// Component responsible for creating search bar

const SearchBar = ({
  value,
  onChangeText,
  onLeftIconPress,
  onRightIconPress,
  placeholder,
}) => {
  return (
    <Header searchBar rounded>
      <Item>
        <Icon name="ios-search" onPress={onLeftIconPress} />
        <Input
          placeholder={placeholder}
          value={value}
          onChangeText={onChangeText}
          onSubmitEditing={onLeftIconPress}
        />
        <Icon name="ios-close-circle" onPress={onRightIconPress} />
      </Item>
      <Button transparent>
        <Text>{placeholder}</Text>
      </Button>
    </Header>
  );
};

export default SearchBar;
