import {useContext, useEffect} from 'react';
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
import {GradientBackground} from '../components/GradientBackground';
import {getImageColors} from '../helpers/getImageColors';
import {GradientContext} from '../context/GradientContext';

const {width: windowWidth} = Dimensions.get('window');

export const HomeScreen = () => {
  const {isLoading, nowPlaying, popular, topRated, upcoming} = useMovies();
  const {setMainColors} = useContext(GradientContext);
  const {top} = useSafeAreaInsets();

  const getPosterColors = async (index: number) => {
    const movie = nowPlaying[index];
    const uri = `https://image.tmdb.org/t/p/w500${movie.poster_path}`;
    const [primary = 'green', secondary = 'orange'] = await getImageColors(uri);
    setMainColors({primary, secondary});
  };

  useEffect(() => {
    nowPlaying.length > 0 ? getPosterColors(0) : null;
  }, [nowPlaying]);

  if (isLoading) {
    return (
      <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
        <ActivityIndicator size={200} color="purple" />
      </View>
    );
  }

  return (
    <GradientBackground>
      <ScrollView style={{marginTop: top + 20}}>
        {/* height added to show shadowbox entirely  */}
        <View style={{height: 440}}>
          <Carousel
            layout={'default'}
            data={nowPlaying}
            sliderWidth={windowWidth}
            itemWidth={300}
            renderItem={({item}) => <MoviePoster movie={item} />}
            inactiveSlideOpacity={0.5}
            onSnapToItem={index => getPosterColors(index)}
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
    </GradientBackground>
  );
};
