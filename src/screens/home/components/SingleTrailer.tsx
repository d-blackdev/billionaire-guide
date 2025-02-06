import {View, StyleSheet, ActivityIndicator} from 'react-native';
import React, {FC, useEffect, useRef, useState} from 'react';
import {globalStyles, width} from '../../../styles/globalStyles';
import LinearGradient from 'react-native-linear-gradient';
import Video, {OnPlaybackStateChangedData, VideoRef} from 'react-native-video';
import {IOnboarding} from '../../../data/data';
import {HOME_TRAILER_HEIGHT} from '../../../constants/constants';

interface SingleTrailerProps extends IOnboarding {
  activeVideo: string;
}
const SingleTrailer: FC<SingleTrailerProps> = ({video, activeVideo, id}) => {
  const videoRef = useRef<VideoRef>(null);
  const [status, setStatus] = useState<OnPlaybackStateChangedData>();
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    if (!videoRef.current) return;
    if (id === activeVideo && videoRef.current) {
      setTimeout(() => {
        if (videoRef.current) {
          videoRef.current.resume();
        }
      }, 3000);
    }
    if (activeVideo !== id) {
      videoRef.current.pause();
    }
  }, [activeVideo, videoRef.current]);

  const onPlaybackChanged = (e: OnPlaybackStateChangedData) => {
    setStatus(e);
  };

  return (
    <View
      style={[
        globalStyles.flex,
        {
          height: HOME_TRAILER_HEIGHT,
          width,
        },
      ]}>
      <Video
        ref={videoRef}
        style={[StyleSheet.absoluteFill, {height: HOME_TRAILER_HEIGHT}]}
        resizeMode="cover"
        source={{uri: video}}
        muted
        onPlaybackStateChanged={onPlaybackChanged}
        onReadyForDisplay={() => {
          setIsLoading(false);
        }}
        onLoad={() => {
          setIsLoading(false);
        }}
        onLoadStart={() => {
          setIsLoading(true);
        }}
        repeat
      />
      {isLoading && !status?.isPlaying && !status?.isSeeking && (
        <View
          style={[
            globalStyles.absolute,
            globalStyles.alignSelfCenter,
            {top: '50%'},
          ]}>
          <ActivityIndicator size="small" color="rgba(243, 7, 69, 1)" />
        </View>
      )}
      <LinearGradient
        colors={[
          'rgba(0,0,0,0.2)',
          'rgba(0,0,0,0.3)',
          'transparent',
          'rgba(0,0,0,0.6)',
          'rgba(0,0,0,0.8)',
          'rgba(0,0,0,1)',
        ]}
        style={[StyleSheet.absoluteFillObject, {width: width}]}
      />
    </View>
  );
};

export default SingleTrailer;
