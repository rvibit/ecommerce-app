import {StyleSheet, ActivityIndicator, View} from 'react-native';
import React from 'react';
import {colors} from '@src/theme';

type LoaderProps = {
  visible: boolean;
};

const Loader = ({visible}: LoaderProps) => {
  if (!visible) {
    return null;
  } else {
    return (
      <View style={styles.container}>
        <ActivityIndicator size="large" color={colors.primary[700]} />
      </View>
    );
  }
};

export default Loader;

const styles = StyleSheet.create({
  container: {
    ...StyleSheet.absoluteFillObject,
    backgroundColor: colors.primary[200],
    opacity: 0.5,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
