import {httpClient} from './httpClient';
import {URLS, API_KEY} from '../Constants';

export const getRestaurants = async () => {
  const {
    data: {results},
  } = await httpClient.get(URLS.NEAR_BY_SEARCH, {
    params: {
      location: '47.6204,-122.3491',
      radius: '2500',
      type: 'restaurant',
      key: API_KEY,
    },
  });

  return results;
};

export const getRestaurantSearches = async (keyword) => {
  const {
    data: {results},
  } = await httpClient.get(URLS.SEARCH, {
    params: {
      location: '47.6204,-122.3491',
      radius: '2500',
      type: 'restaurant',
      key: API_KEY,
      keyword,
    },
  });

  return results;
};
