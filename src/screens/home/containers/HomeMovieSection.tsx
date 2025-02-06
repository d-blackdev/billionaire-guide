import {View, Text, FlatList, Pressable} from 'react-native';
import React, {useCallback, useEffect, useState} from 'react';
import {IMovie} from '../../../types/appTypes.types';
import {axiosInstance} from '../../../api/globalApi';
import {AxiosError, AxiosResponse} from 'axios';
import {globalStyles} from '../../../styles/globalStyles';
import SingleHomeMovieCard from '../components/SingleHomeMovieCard';
import SectionMovieLoader from '../components/SectionMovieLoader';
import SectionHeader from '../components/SectionHeader';

const HomeMovieSection = ({
  url,
  sectionTitle,
  movieLength = 10,
}: {
  url: string;
  sectionTitle: string;
  movieLength?: number;
}) => {
  const [moviesList, setMoviesList] = useState<IMovie[] | []>([]);
  const [status, setStatus] = useState({
    isLoading: false,
    error: false,
    errMsg: '',
  });

  const getMoviesList = useCallback(() => {
    setStatus({...status, error: false, errMsg: '', isLoading: true});
    axiosInstance
      .get(url)
      .then((res: AxiosResponse<{movies: IMovie[]}>) => {
        setMoviesList(res.data.movies);
        setStatus({...status, error: false, errMsg: '', isLoading: false});
      })
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
  return (
    <View style={[globalStyles.w10, globalStyles.pt3, globalStyles.px2]}>
      <SectionHeader title={sectionTitle} />
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
            data={moviesList?.slice(0, movieLength)}
            keyExtractor={item => item.title}
            renderItem={({item}) => <SingleHomeMovieCard {...item} />}
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

export default HomeMovieSection;
