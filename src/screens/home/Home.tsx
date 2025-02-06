import {StatusBar} from 'react-native';
import React from 'react';
import Layout from '../../components/layout/Layout';
import ScrollableView from '../../components/layout/ScrollableView';
import TrailerSection from './containers/TrailerSection';
import {globalStyles} from '../../styles/globalStyles';
import HomeMovieSection from './containers/HomeMovieSection';
import HomeMoviesForYou from './containers/HomeMoviesForYou';

const Home = () => {
  return (
    <Layout>
      <StatusBar barStyle={'light-content'} />
      <ScrollableView contentContainerStyle={[globalStyles.pb10]}>
        {/* <GlobalView> */}
        <TrailerSection />
        <HomeMovieSection
          url="/top-box-office-movies"
          sectionTitle="Continue watching"
        />
        <HomeMovieSection
          url="/most-trending-movies"
          sectionTitle="Most Trending"
          movieLength={10}
        />
        <HomeMoviesForYou />
        <HomeMovieSection
          url="/movies-by-genre?genre=romance"
          sectionTitle="Romance"
          movieLength={10}
        />
        <HomeMovieSection
          url="/movies-by-genre?genre=drama"
          sectionTitle="Drama"
          movieLength={10}
        />
      </ScrollableView>
      {/* </GlobalView> */}
    </Layout>
  );
};

export default Home;
