import React from "react";
import {Text, View} from "react-native";
import ScreenWrapper from "../../components/ScreenWrapper";

const RandomizeScreen: React.FC = () =>  (
    <ScreenWrapper>
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center', backgroundColor: 'pink'  }}>
            <Text>RandomizeScreen!</Text>
        </View>
    </ScreenWrapper>
);

export default RandomizeScreen
