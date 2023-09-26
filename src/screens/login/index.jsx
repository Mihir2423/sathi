import React from "react";
import { ScrollView, Text, TouchableOpacity, View } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { useDispatch } from "react-redux";
import { login } from "../../redux/features/auth/authSlice";
import CustomSafeAreaView from "../../components/common/SafeAreaView";
import CustomView from "../../components/common/View";
import SubmitBtn from "../../components/common/SubmitBtn";

const LoginScreen = () => {
  const dispatch = useDispatch();
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
                navigation.navigate("Welcome");
                console.log("Welcome");
              }}
            >
              <SubmitBtn title="Back to Welcome" />
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => {
                dispatch(login());
              }}
              style={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                marginTop: 100,
              }}
            >
              <SubmitBtn title={"Login as Kaidi101"} />
            </TouchableOpacity>
          </View>
        </ScrollView>
      </CustomView>
    </CustomSafeAreaView>
  );
};

export default LoginScreen;
