import React from "react";
import { NativeStackScreenProps, createNativeStackNavigator } from "@react-navigation/native-stack"
import { NavigatorScreenParams } from "@react-navigation/native";
import TabsNavigator, { TabsStackParamObj } from "./TabNavigator";



// Este código define un stack de navegación raíz para una aplicación React Native utilizando React Navigation.
// Se importan los tipos necesarios de React Navigation y se define un tipo para los parámetros del stack.
// El stack de navegación raíz tiene tres pantallas: TabsStack, Deals y cart.
// TabsStack es un stack de navegación secundario que se define en otro archivo.

export type RootStackParamList = {
    TabsStack: NavigatorScreenParams<TabsStackParamObj>; // Este es un stack de navegación secundario que se define en otro archivo
    Deals: undefined;
    cart: undefined;
};
// Este es el stack de navegación raíz que se utiliza en la aplicación
// Se utiliza createNativeStackNavigator para crear el stack de navegación y se define el tipo de parámetros que acepta.

const RootStack = createNativeStackNavigator<RootStackParamList>();
// Este es el tipo de propiedades que se pasan a las pantallas del stack de navegación raíz
// Se utiliza NativeStackScreenProps para definir el tipo de propiedades que se pasan a las pantallas del stack de navegación raíz
// Este tipo se utiliza para definir las propiedades de las pantallas que se pasan al stack de navegación raíz
// Se utiliza el tipo RootStackParamList para definir los parámetros que acepta el stack de navegación raíz
// Se utiliza el tipo T para definir el tipo de pantalla que se está utilizando en el stack de navegación raíz
// Se utiliza el tipo NativeStackScreenProps para definir las propiedades que se pasan a las pantallas del stack de navegación raíz
// Se utiliza el tipo RootStackParamList para definir los parámetros que acepta el stack de navegación raíz
// Se utiliza el tipo T para definir el tipo de pantalla que se está utilizando en el stack de navegación raíz
// Se utiliza el tipo NativeStackScreenProps para definir las propiedades que se pasan a las pantallas del stack de navegación raíz

export type RootStackScreenProps<T extends keyof RootStackParamList> = NativeStackScreenProps<RootStackParamList, T>;

const RootNavigator = () => {
    return (
        // RootStack.Navigator configura el stack de navegación raíz.
        // RootStack.Screen define las pantallas que se utilizan en el stack de navegación raíz.
        <RootStack.Navigator>
            <RootStack.Screen name="TabsStack" component={TabsNavigator} options={{ headerShown: false }} />
        </RootStack.Navigator>
    );
}
export default RootNavigator;
// Este código define un stack de navegación raíz para una aplicación React Native utilizando React Navigation.