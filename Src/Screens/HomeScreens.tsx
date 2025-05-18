import { BottomTabScreenProps } from "@react-navigation/bottom-tabs";
import react from "react";
import { View, Text, SafeAreaView, Platform, ScrollView } from "react-native";
import { TabStackScreenProps } from "../Navigations/TabNavigator";
import { HeaderComponent } from "../Components/HeaderComponent";
import ImageSlider from "../Components/ImageSlider";

const HomeScreen = ({ navigation, route }: TabStackScreenProps<"Home">) => {
    const gotoCartScreen = () => {
        navigation.navigate("cart");
    }
//imagenes aleatorias para el slider cambiarlas
    const sliderImages = [
        "https://images.unsplash.com/photo-1506744038136-46273834b3fb",
        "https://images.unsplash.com/photo-1465101046530-73398c7f28ca",
        "https://images.unsplash.com/photo-1519125323398-675f0ddb6308"
    ];
    return (
        // Este componente es la pantalla de inicio de la aplicación
        // Utiliza SafeAreaView para evitar que el contenido se superponga con la barra de estado en dispositivos iOS

        <SafeAreaView style={{ paddingTop: Platform.OS === "android" ? 40 : 0, flex: 1, backgroundColor: "#000" }}>
            <HeaderComponent goToCartScreen={gotoCartScreen} />
        <ScrollView style={{ backgroundColor: "#eee" }}>
            <ImageSlider images={sliderImages} />
            <View style={{ backgroundColor: "#eee", borderWidth: 3, borderColor: "#fff", marginTop: 5 }} />
            <Text style={{ fontSize: 25, marginHorizontal: 5, marginTop: 10 }}>Nueva Categoria </Text>
            <ScrollView horizontal showsHorizontalScrollIndicator={false}>
                {/* Aquí puedes agregar los elementos de la nueva categoría */}
            </ScrollView>
        </ScrollView>
        </SafeAreaView>
    )
}
export default HomeScreen;
// Este código define una pantalla de inicio para una aplicación React Native utilizando React Navigation.

//2:05:38 https://www.youtube.com/watch?v=Q5llevzCEIM