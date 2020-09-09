import React from 'react';
import {
  View,
  FlatList,
  StyleSheet,
  StatusBar,
  ActivityIndicator,
} from 'react-native';
import {getRestaurants, getRestaurantSearches} from '../utilities';
import {RestaurantCard, SearchBar} from '../components';
import {COLORS} from '../Constants';

export default class Home extends React.Component {
  state = {
    keyword: '',
    restaurants: [],
    loading: true,
    showingSearchResults: false,
  };

  componentDidMount = async () => {
    const restaurants = await getRestaurants();
    this.setState({restaurants, loading: false});
  };

  onSubmit = async () => {
    const {keyword} = this.state;

    this.setState({loading: true});
    const restaurants = await getRestaurantSearches(keyword);
    this.setState({restaurants, loading: false, showingSearchResults: true});
  };

  onClear = async () => {
    const {showingSearchResults} = this.state;

    if (showingSearchResults) {
      this.setState({loading: true});
      const restaurants = await getRestaurants();
      this.setState({
        restaurants,
        keyword: '',
        loading: false,
        showingSearchResults: false,
      });
    } else {
      this.setState({
        keyword: '',
      });
    }
  };

  renderLoading() {
    return (
      <View
        style={{
          flex: 1,
          justifyContent: 'center',
          alignItems: 'center',
          paddingBottom: 40,
        }}>
        <ActivityIndicator size={32} color={COLORS.DARK} />
      </View>
    );
  }

  renderSearchBar() {
    const {keyword} = this.state;
    return (
      <SearchBar
        value={keyword}
        placeholder={'Search for restaurants'}
        onChangeText={(keyword) => this.setState({keyword})}
        onSubmit={this.onSubmit}
        onClear={this.onClear}
      />
    );
  }

  renderRestaurants() {
    const {restaurants, loading} = this.state;

    if (loading) {
      return this.renderLoading();
    }
    return (
      <FlatList
        data={restaurants}
        keyExtractor={(item) => item.place_id}
        renderItem={({item}) => <RestaurantCard data={item} />}
        ListFooterComponent={<View style={{height: 40}} />}
      />
    );
  }

  render() {
    return (
      <View style={{flex: 1, backgroundColor: COLORS.WHITE}}>
        <StatusBar backgroundColor={COLORS.WHITE} barStyle="dark-content" />
        {this.renderSearchBar()}
        {this.renderRestaurants()}
      </View>
    );
  }
}

const styles = StyleSheet.create({});
