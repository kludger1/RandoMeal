import React from "react";
import {SafeAreaView} from "react-native-safe-area-context";
import {StyleSheet, View} from "react-native";

interface MainContentWrapperProps {
  children: React.ReactNode;
}
const ScreenWrapper: React.FC<MainContentWrapperProps> = ({children}) => (
  <SafeAreaView style={styles.container}>
    <View style={styles.mainContent}>
      {children}
    </View>
  </SafeAreaView>
);

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  mainContent: {
    flex: 1
  }
});

export default ScreenWrapper;
