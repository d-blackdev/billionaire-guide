import {View, Text, FlatList, Pressable} from 'react-native';
import React, {useCallback, useEffect, useState} from 'react';
import {IMovie} from '../../../types/appTypes.types';
import {axiosInstance} from '../../../api/globalApi';
import {AxiosError, AxiosResponse} from 'axios';
import {globalStyles} from '../../../styles/globalStyles';
import SingleHomeMovieCard from '../components/SingleHomeMovieCard';
import SectionMovieLoader from '../components/SectionMovieLoader';
import SectionHeader from '../components/SectionHeader';

const HomeMoviesForYou = () => {
  const [moviesList, setMoviesList] = useState<IMovie[] | []>([]);
  const [status, setStatus] = useState({
    isLoading: false,
    error: false,
    errMsg: '',
  });

  const getMoviesList = useCallback(() => {
    setStatus({...status, error: false, errMsg: '', isLoading: true});
    axiosInstance
      .get('/upcoming-movies')
      .then(
        (res: AxiosResponse<{movies: {date: string; list: IMovie[]}[]}>) => {
          setMoviesList(res.data.movies[0]?.list);
          setStatus({...status, error: false, errMsg: '', isLoading: false});
        },
      )
      .catch((err: AxiosError) => {
        setStatus({
          ...status,
          error: true,
          errMsg: err?.message,
          isLoading: false,
        });
      });
  }, []);

  useEffect(() => {
    getMoviesList();
  }, [getMoviesList]);

  //   console.log(moviesList);

  return (
    <View style={[globalStyles.w10, globalStyles.pt3, globalStyles.px2]}>
      <SectionHeader title="For you" />
      <View style={[globalStyles.mt2]}>
        {status?.error && !status?.isLoading && (
          <View
            style={[globalStyles.w10, globalStyles.flexCol, globalStyles.mt2]}>
            <Text style={[{color: '#FF1D45', fontSize: 12}]}>
              {status?.errMsg}
            </Text>
            <Pressable onPress={getMoviesList} style={[globalStyles.pt1]}>
              <Text
                style={[
                  {
                    color: '#fff',
                    fontSize: 12,
                    textDecorationLine: 'underline',
                  },
                ]}>
                Try again
              </Text>
            </Pressable>
          </View>
        )}
        {status?.isLoading && !status?.error && <SectionMovieLoader />}
        {!status?.isLoading && !status?.error && (
          <FlatList
            data={moviesList?.slice(0, 10)}
            keyExtractor={item => item.title}
            renderItem={({item}) => (
              <SingleHomeMovieCard {...item} showCategory />
            )}
            contentContainerStyle={[globalStyles.gapColumn20]}
            horizontal
            showsHorizontalScrollIndicator={false}
            bounces={false}
            snapToAlignment="start"
            decelerationRate="fast"
            pagingEnabled
            ListEmptyComponent={
              <View
                style={[
                  globalStyles.w10,
                  globalStyles.flexCol,
                  globalStyles.mt2,
                ]}>
                <Text style={[{color: '#fff', fontSize: 12}]}>
                  No movies available.
                </Text>
              </View>
            }
            //   ItemSeparatorComponent={() => <View/>}
          />
        )}
      </View>
    </View>
  );
};

export default HomeMoviesForYou;
