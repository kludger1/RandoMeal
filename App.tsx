import 'react-native-gesture-handler';
import React from 'react';
import RootNavigation from "./src/navigation/RootNavigation";
import GlobalDataState from "./src/context/global/GlobalDataState";
// import AsyncStorage from '@react-native-community/async-storage';



const App: React.FC = () =>  (
  <GlobalDataState>
    <RootNavigation/>
  </GlobalDataState>
);

// const styles = StyleSheet.create({
// });

export default App;
