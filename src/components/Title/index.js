import React from "react";
import { View, Text, StyleSheet } from "react-native";

export default function Title() {
    return (
        <View>
            <Text style={styles.title}>Calculadora de IMC Atualizada</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    title: {
        fontSize: 24,
        color: '#000',
        fontWeight: 'bold',
        marginBottom: 95,
    },
});
