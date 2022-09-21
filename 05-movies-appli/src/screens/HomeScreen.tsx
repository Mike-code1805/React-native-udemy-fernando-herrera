import React from 'react';
import {
  View,
  ActivityIndicator,
  Dimensions,
  Text,
  FlatList,
} from 'react-native';
import {useSafeAreaInsets} from 'react-native-safe-area-context';
import {useMovies} from '../hooks/useMovies';
import {MoviePoster} from '../components/MoviePoster';
import Carousel from 'react-native-snap-carousel';
import {ScrollView} from 'react-native-gesture-handler';
import {HorizontalSlider} from '../components/HorizontalSlider';

const {width: windowWidth} = Dimensions.get('window');

export const HomeScreen = () => {
  const {isLoading, nowPlaying, popular, topRated, upcoming} = useMovies();
  const {top} = useSafeAreaInsets();
  if (isLoading) {
    return (
      <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
        <ActivityIndicator size={200} color="purple" />
      </View>
    );
  }

  return (
    <ScrollView style={{marginTop: top + 20, backgroundColor: 'gray'}}>
      {/* height added to show shadowbox entirely  */}
      <View style={{height: 440}}>
        <Carousel
          layout={'default'}
          data={nowPlaying}
          sliderWidth={windowWidth}
          itemWidth={300}
          renderItem={({item}) => <MoviePoster movie={item} />}
          inactiveSlideOpacity={0.5}
        />
      </View>
      <View>
        <Text style={{color: 'black'}}>On cine</Text>
        <FlatList
          data={nowPlaying}
          renderItem={({item}) => (
            <MoviePoster movie={item} height={220} width={150} />
          )}
          keyExtractor={item => item.id.toString()}
          horizontal
          showsHorizontalScrollIndicator={false}
        />
        {/* Películas populares */}
        <HorizontalSlider title="Popular" movies={popular} />
        <HorizontalSlider title="Top Rated" movies={topRated} />
        <HorizontalSlider title="Upcoming" movies={upcoming} />
      </View>
    </ScrollView>
  );
};
