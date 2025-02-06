import {
  View,
  Text,
  StyleSheet,
  Pressable,
  Dimensions,
  ActivityIndicator,
  Platform,
} from 'react-native';
import React, {FC, useEffect, useRef, useState} from 'react';
// import {globalStyles, height, width} from '../../styles/globalStyles';
import Video, {OnPlaybackStateChangedData, VideoRef} from 'react-native-video';
// import VideoPlayer, {type VideoPlayerRef} from 'react-native-video-player';
import LinearGradient from 'react-native-linear-gradient';
import {SafeAreaView} from 'react-native-safe-area-context';
import Icon from 'react-native-vector-icons/Ionicons';
// import LeftFooterSection from './containers/LeftFooterSection';
// import RightFooterSection from './containers/RightFooterSection';
import _IonIcon from 'react-native-vector-icons/Ionicons';
import {globalStyles, height, width} from '../../../styles/globalStyles';
import LeftFooterSection from '../containers/LeftFooterSection';
import RightFooterSection from '../containers/RightFooterSection';
import {IOnboarding} from '../../../data/data';
import {useIsFocused} from '@react-navigation/native';

const IonIcon = _IonIcon as any;

interface SingleShortsProps extends IOnboarding {
  activeVideo: string;
}
const SingleShorts: FC<SingleShortsProps> = ({
  caption,
  title,
  video,
  activeVideo,
  id,
}) => {
  const videoShortsRef = useRef<VideoRef>(null);
  const [status, setStatus] = useState<OnPlaybackStateChangedData>();
  const [isLoading, setIsLoading] = useState(false);
  const isFocused = useIsFocused();

  useEffect(() => {
    if (!videoShortsRef.current) return;
    if (!isFocused) {
      videoShortsRef.current.pause();
      return;
    }
    if (activeVideo !== id) {
      videoShortsRef.current.pause();
    }
    if (activeVideo === id) {
      videoShortsRef.current.resume();
    }
  }, [activeVideo, videoShortsRef.current, isFocused]);

  const onPlaybackChanged = (e: OnPlaybackStateChangedData) => {
    setStatus(e);
  };

  const onPress = () => {
    if (!videoShortsRef.current) {
      return;
    } else if (status && status?.isPlaying) {
      videoShortsRef.current.pause();
    } else {
      videoShortsRef.current.resume();
    }
  };
  return (
    <View style={[{height}]}>
      <Video
        ref={videoShortsRef}
        style={[StyleSheet.absoluteFill, {height: height}]}
        resizeMode="cover"
        source={{
          uri: video,
        }}
        onBuffer={() => {
          setIsLoading(true);
        }}
        onPlaybackStateChanged={onPlaybackChanged}
        onReadyForDisplay={() => {
          setIsLoading(false);
        }}
        controls
        repeat
        muted={false}
        enterPictureInPictureOnLeave={true}
        onLoad={() => {
          setIsLoading(false);
        }}
        onLoadStart={() => {
          setIsLoading(true);
        }}
      />

      <Pressable style={[globalStyles.flex]} onPress={onPress}>
        <LinearGradient
          colors={['transparent', 'transparent', 'rgba(0,0,0,0.5)']}
          style={[StyleSheet.absoluteFillObject, {width: width}]}
        />
        {!status?.isPlaying && !status?.isSeeking && !isLoading && (
          <Pressable
            style={[
              globalStyles.absolute,
              globalStyles.alignSelfCenter,
              {top: Platform.OS === 'android' ? '40%' : '50%'},
            ]}>
            <IonIcon name="play" size={60} color="rgba(255,255,255,0.7)" />
          </Pressable>
        )}

        {isLoading && !status?.isPlaying && !status?.isSeeking && (
          <View
            style={[
              globalStyles.absolute,
              globalStyles.alignSelfCenter,
              {top: '50%'},
            ]}>
            <ActivityIndicator size="small" color="#fff" />
          </View>
        )}

        <SafeAreaView style={[globalStyles.flex]}>
          <View
            style={[
              globalStyles.w10,
              styles.footer,
              globalStyles.px15,
              globalStyles.flexRow,
              globalStyles.justifyBetween,
              globalStyles.alignItemsFlexEnd,
              globalStyles.absolute,
              {bottom: '20%'},
            ]}>
            {/* Left column */}
            <LeftFooterSection title={title} caption={caption} />
            <RightFooterSection />
          </View>
        </SafeAreaView>
      </Pressable>
    </View>
  );
};

export default SingleShorts;

const styles = StyleSheet.create({
  overlay: {
    top: '50%',
  },
  wrapper: {},
  footer: {
    marginTop: 'auto',
  },
  button: {
    width: 200,
    height: 33,
    backgroundColor: '#F30745',
    borderRadius: 8,
  },
});

{
  /* <VideoPlayer
        ref={playerRef}
        endWithThumbnail
        thumbnail={{
          uri: 'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/images/BigBuckBunny.jpg',
        }}
        source={{
          uri: 'https://videos.pexels.com/video-files/3629511/3629511-hd_720_900_24fps.mp4',
          // uri: 'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4',
        }}
        onError={e => console.log(e, 'Errorsss')}
        showDuration={true}
        customStyles={{
          wrapper: [
            styles.wrapper,
            StyleSheet.absoluteFillObject,
            globalStyles.flex,
            {
              width: Dimensions.get('screen').width,
              height: Dimensions.get('screen').height,
            },
          ],
          videoWrapper: [
            styles.wrapper,
            StyleSheet.absoluteFillObject,
            globalStyles.flex,
            {
              width: Dimensions.get('screen').width,
              height: Dimensions.get('screen').height,
            },
          ],
          video: [
            styles.wrapper,
            StyleSheet.absoluteFillObject,
            globalStyles.flex,
            {
              width: Dimensions.get('screen').width,
              height: Dimensions.get('screen').height,
            },
          ],
        }}
        style={
          [
            // StyleSheet.absoluteFill,
            //   globalStyles.inset,
            //   globalStyles.absolute,
            //   globalStyles.flex,
            //   {height: '100%'},
          ]
        }
        autoplay
        // videoHeight={4000}
      /> */
}
