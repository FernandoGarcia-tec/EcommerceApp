import { BottomTabScreenProps } from "@react-navigation/bottom-tabs";
import react from "react";
import { View, Text, SafeAreaView, Platform, ScrollView } from "react-native";
import { TabStackScreenProps } from "../Navigations/TabNavigator";
import { HeaderComponent } from "../Components/HeaderComponent";

const HomeScreen = ({navigation,route}:TabStackScreenProps<"Home">) => {
    const gotoCartScreen = () => {
        navigation.navigate("cart");
    }
    return (
        <SafeAreaView style={{ padding: Platform.OS === "android" ? 40 : 0, flex: 1, backgroundColor: "#000" }}>
            <HeaderComponent goToCartScreen={gotoCartScreen}/>
            <ScrollView horizontal showsHorizontalScrollIndicator={false} 
                style={{ backgroundColor: "#eee" }}>

            </ScrollView>
        </SafeAreaView>
    )
}
export default HomeScreen;
// Este código define una pantalla de inicio para una aplicación React Native utilizando React Navigation.