import {View, Text, StyleSheet, Image} from 'react-native';
import React, {FC} from 'react';
import {globalStyles} from '../../../styles/globalStyles';
import {IMovie} from '../../../types/appTypes.types';
// import Placeholder from '../../../assets/images/image_placeholder.png';

interface SingleHomeMovieCardProps extends IMovie {
  showCategory?: boolean;
}

const SingleHomeMovieCard: FC<SingleHomeMovieCardProps> = ({
  image,
  title,
  showCategory,
  categories,
}) => {
  return (
    <View style={[]}>
      <Image
        source={{uri: image}}
        style={[styles.cardImage]}
        resizeMode="cover"
        // defaultSource={Placeholder}
        fadeDuration={1000}
      />
      <View
        style={[
          globalStyles.flexColumn,
          globalStyles.gapRow05,
          globalStyles.pt1,
        ]}>
        {showCategory && (
          <View
            style={[
              globalStyles.flexRow,
              globalStyles.alignItemsCenter,
              globalStyles.gapColumn05,
            ]}>
            {categories &&
              categories?.length > 0 &&
              categories.slice(0, 2).map((category, index) => (
                <View key={index}>
                  <Text
                    // numberOfLines={1}
                    key={index}
                    style={[
                      {
                        fontSize: 12,
                        fontWeight: '400',
                        color: 'rgba(255,255,255,0.6)',
                      },
                    ]}>
                    {category}
                  </Text>
                </View>
              ))}
          </View>
        )}
        <View style={[globalStyles.w8]}>
          <Text
            numberOfLines={1}
            style={[{fontSize: 14, fontWeight: '600', color: '#fff'}]}>
            {title}
          </Text>
        </View>
      </View>
    </View>
  );
};

export default SingleHomeMovieCard;

const styles = StyleSheet.create({
  cardImage: {
    height: 200,
    borderRadius: 8,
    width: 150,
  },
});
