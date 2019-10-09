import React from 'react';
import SafeAreaView from 'react-native-safe-area-view';
import {DrawerNavigatorItems} from 'react-navigation-drawer';
import { StyleSheet, ScrollView } from 'react-native';


export const SidemenuScreen = props => (
  <ScrollView>
    <SafeAreaView
      style={styles.container}
      forceInset={{top: 'always', horizontal: 'never'}}>
      <DrawerNavigatorItems {...props} />
    </SafeAreaView>
  </ScrollView>
);

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
