import React from "react";
import { ScrollView, TouchableOpacity, View } from "react-native";
import { useDispatch } from "react-redux";
import { logout } from "../../redux/features/auth/authSlice";
import CustomSafeAreaView from "../../components/common/SafeAreaView";
import CustomView from "../../components/common/View";
import SumbitBtn from "../../components/common/SubmitBtn";

const DashboardScreen = () => {
  const dispatch = useDispatch();
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
                alert("Welcome To Dashboard");
              }}
            >
              <SumbitBtn title="Click Me" />
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => {
                dispatch(logout());
              }}
              style={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                marginTop: 100,
              }}
            >
              <SumbitBtn title={"Logout, cuz y not"} />
            </TouchableOpacity>
          </View>
        </ScrollView>
      </CustomView>
    </CustomSafeAreaView>
  );
};

export default DashboardScreen;
