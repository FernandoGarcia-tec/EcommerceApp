import React from "react";
import { BottomTabScreenProps, createBottomTabNavigator } from "@react-navigation/bottom-tabs"
import { CompositeScreenProps } from "@react-navigation/native"
import { Entypo, AntDesign, Ionicons } from "@expo/vector-icons"
import { RootStackScreenProps } from "./RootNavigator";
import HomeScreen from "../Screens/HomeScreens";
import CartScreen from "../Screens/CartScreen";
import DealsCreen from "../Screens/DealScreen";
import ProfileScreen from "../Screens/ProfileScreen";


// Este código define un stack de navegación de pestañas para una aplicación React Native utilizando React Navigation.
// Se importan los tipos necesarios de React Navigation y se define un tipo para los parámetros del stack.
// El stack de navegación de pestañas tiene dos pantallas: Home y cart.
// Home es la pantalla principal de la aplicación y cart es la pantalla del carrito de compras.
export type TabsStackParamObj = {
    Home: undefined;
    cart: undefined;
    deals: undefined;
    profile: undefined;
}

// Este es el stack de navegación de pestañas que se utiliza en la aplicación
// Se utiliza createBottomTabNavigator para crear el stack de navegación y se define el tipo de parámetros que acepta.
// Se utiliza el tipo TabsStackParamObj para definir los parámetros que acepta el stack de navegación de pestañas
// Se utiliza el tipo T para definir el tipo de pantalla que se está utilizando en el stack de navegación de pestañas
// Se utiliza el tipo BottomTabScreenProps para definir las propiedades que se pasan a las pantallas del stack de navegación de pestañas
const TabStack = createBottomTabNavigator<TabsStackParamObj>();

// Este es el tipo de propiedades que se pasan a las pantallas del stack de navegación de pestañas
// Se utiliza BottomTabScreenProps para definir las propiedades que se pasan a las pantallas del stack de navegación de pestañas
// Se utiliza el tipo TabsStackParamObj para definir los parámetros que acepta el stack de navegación de pestañas
// Se utiliza el tipo T para definir el tipo de pantalla que se está utilizando en el stack de navegación de pestañas
// Se utiliza el tipo CompositeScreenProps para combinar las propiedades de las pantallas del stack de navegación de pestañas
// Se utiliza el tipo RootStackScreenProps para definir las propiedades que se pasan a las pantallas del stack de navegación raíz
// Se utiliza el tipo TabsStackParamObj para definir los parámetros que acepta el stack de navegación de pestañas
// Se utiliza el tipo T para definir el tipo de pantalla que se está utilizando en el stack de navegación de pestañas

export type TabStackScreenProps<T extends keyof TabsStackParamObj> = CompositeScreenProps<BottomTabScreenProps<TabsStackParamObj, T>, RootStackScreenProps<"TabsStack">>;

// Este es el stack de navegación de pestañas que se utiliza en la aplicación
const TabsNavigator = () => {
    return (
        // TabStack.Navigator configura la barra de pestañas inferior.
        <TabStack.Navigator screenOptions={{ tabBarShowLabel: false }}>
            {/* Pantalla principal "Home" con icono personalizado */}
            <TabStack.Screen
                name="Home"
                component={HomeScreen}
                options={{
                    headerShown: false,
                    tabBarIcon: ({ focused }) =>
                        focused ? (
                            <Entypo name="home" size={24} color="#000BE97" />
                        ) : (
                            <AntDesign name="home" size={24} color="black" />
                        ),
                }}
            />
            {/* Pantalla "cart" con icono personalizado */}
            <TabStack.Screen
                name="cart"
                component={CartScreen}
                options={{
                    headerShown: false,
                    tabBarIcon: ({ focused }) =>
                        focused ? (
                            <AntDesign name="shoppingcart" size={24} color="#000BE97" />
                        ) : (
                            <AntDesign name="shoppingcart" size={24} color="black" />
                        ),
                }}
            />
            {/* Pantalla "deals" con icono personalizado */}
            <TabStack.Screen
                name="deals"
                component={DealsCreen}
                options={{
                    headerShown: false,
                    tabBarIcon: ({ focused }) =>
                        focused ? (
                            <Ionicons name="copy" size={24} color="#000BE97" />
                        ) : (
                            <Ionicons name="copy-outline" size={24} color="black" />
                        ),
                }}
            />
            {/* Pantalla "profile" con icono personalizado */}
            <TabStack.Screen
                name="profile"
                component={ProfileScreen}
                options={{
                    headerShown: false,
                    tabBarIcon: ({ focused }) =>
                        focused ? (
                            <Ionicons name="person" size={24} color="#000BE97" />
                        ) : (
                            <Ionicons name="person-outline" size={24} color="black" />
                        ),
                }}
            />
            {/* Pantalla "cart" comentada, descomenta para usar */}
            {/* <TabStack.Screen name="cart" component={CartScreen} /> */}
        </TabStack.Navigator>
    )
}
export default TabsNavigator;
