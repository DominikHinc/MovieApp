import {Button, Container, Header, Icon, Input, Item} from 'native-base';
import React from 'react';
import {Text} from 'react-native';

const SearchBar = ({
  value,
  onChangeText,
  onLeftIconPress,
  onRightIconPress,
  placeholder,
}) => {
  return (
    <Container>
      <Header searchBar rounded>
        <Item>
          <Icon name="ios-search" onPress={onLeftIconPress} />
          <Input
            placeholder={placeholder}
            value={value}
            onChangeText={onChangeText}
          />
          <Icon name="ios-close-circle" onPress={onRightIconPress} />
        </Item>
        <Button transparent>
          <Text>{placeholder}</Text>
        </Button>
      </Header>
    </Container>
  );
};

export default SearchBar;
