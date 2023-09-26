import React from "react";
import { ScrollView, TouchableOpacity, View } from "react-native";
import CustomSafeAreaView from "../../components/common/SafeAreaView";
import CustomView from "../../components/common/View";
import SumbitBtn from "../../components/common/SubmitBtn";

const ProfileScreen = () => {
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
                alert("Welcome To Profile")
              }}
            >
              <SumbitBtn title="Click Me" />
            </TouchableOpacity>
          </View>
        </ScrollView>
      </CustomView>
    </CustomSafeAreaView>
  );
};

export default ProfileScreen;
