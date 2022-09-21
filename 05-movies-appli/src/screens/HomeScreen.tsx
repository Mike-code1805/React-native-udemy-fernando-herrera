import React from 'react';
import {
  View,
  ActivityIndicator,
  Dimensions,
  Text,
  FlatList,
} from 'react-native';
import {SafeAreaView, useSafeAreaInsets} from 'react-native-safe-area-context';
import {useMovies} from '../hooks/useMovies';
import {MoviePoster} from '../components/MoviePoster';
import Carousel from 'react-native-snap-carousel';
import {useEffect} from 'react';
import {ScrollView} from 'react-native-gesture-handler';
import { moviesData } from '../data/movies';

const {width: windowWidth} = Dimensions.get('window');

export const HomeScreen = () => {
  const {isLoading, nowPlaying} = useMovies();
  const {top} = useSafeAreaInsets();
  console.log(nowPlaying);
  if (isLoading) {
    return (
      <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
        <ActivityIndicator size={200} color="purple" />
      </View>
    );
  }

  return (
    <ScrollView style={{marginTop: top + 20}}>
      {/* height added to show shadowbox entirely  */}
      <View style={{height: 440}}>
        <Carousel
          layout={'default'}
          data={nowPlaying}
          sliderWidth={windowWidth}
          itemWidth={300}
          renderItem={({item}) => <MoviePoster movie={item} />}
        />
      </View>
      <View>
        <Text>On cine</Text>
        <FlatList
          data={nowPlaying}
          renderItem={({item}) => <MoviePoster movie={item} height={200} />}
          keyExtractor={item => item.id.toString()}
          horizontal
          showsHorizontalScrollIndicator={false}
        />
      </View>
    </ScrollView>
  );
};
