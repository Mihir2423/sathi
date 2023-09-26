import React from "react";
import { ScrollView, Text, TouchableOpacity, View } from "react-native";
import { useNavigation } from "@react-navigation/native";
import CustomSafeAreaView from "../../components/common/SafeAreaView";
import CustomView from "../../components/common/View";
import SumbitBtn from "../../components/common/SubmitBtn";

const WelcomeScreen = () => {
  const navigation = useNavigation();
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
            <TouchableOpacity
              onPress={() => {
                navigation.navigate("Login");
                console.log("Login");
              }}
            >
              <SumbitBtn title="Go to login" />
            </TouchableOpacity>
          </View>
        </ScrollView>
      </CustomView>
    </CustomSafeAreaView>
  );
};

export default WelcomeScreen;
