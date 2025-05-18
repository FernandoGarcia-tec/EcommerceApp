import { View, Text, StyleSheet, Pressable, TextInput } from 'react-native';
import React, { useState } from 'react';
import { Entypo, AntDesign, Ionicons } from "@expo/vector-icons"

interface IHeaderParams {
    goToPrevios?: () => void;
    search?: () => void;
    cartlenght?: number;
    goToCartScreen?: () => void;
}

export const HeaderComponent = ({ goToPrevios, search, cartlenght, goToCartScreen }: IHeaderParams) => {
    const [searchInput, setSearchInput] = useState("");
    console.log("searchInput", searchInput);
    return (
        // Este componente es un encabezado que contiene un campo de búsqueda 
        <View style={{ backgroundColor: "#000", padding: 10, flexDirection: "row", alignItems: "center" }}>
            {/* campo de busqueda */}
            <Pressable style={{ flexDirection: "row", alignItems: "center", marginHorizontal: 7, gap: 10, backgroundColor: "white", borderRadius: 10, height: 38, flex: 1 }}>
                {/* Icono de búsqueda */}
                <Pressable style={{ padding: 10 }} onPress={search}>
                    <AntDesign name="search1" size={20} color="black" />
                </Pressable>

                {/* Campo de texto */}
                <TextInput
                    style={{ flex: 1, height: '100%', padding: 0 }}
                    value={searchInput}
                    onChangeText={setSearchInput}
                    placeholder="Search Item"
                    placeholderTextColor="#888"/>            
            </Pressable>

        </View>
    )
}