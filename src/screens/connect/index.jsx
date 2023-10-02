import React from "react";
import { ScrollView, View, Text } from "react-native";
import CustomSafeAreaView from "../../components/common/SafeAreaView";
import CustomView from "../../components/common/View";

const ConnectScreen = () => {
  return (
    <CustomSafeAreaView>
      <CustomView>
        <ScrollView
          contentContainerStyle={{
            flexGrow: 1,
          }}
          keyboardShouldPersistTaps="handled"
          showsVerticalScrollIndicator={false}
        >
          <View>
            <Text>Hello Connect</Text>
          </View>
        </ScrollView>
      </CustomView>
    </CustomSafeAreaView>
  );
};

export default ConnectScreen;
