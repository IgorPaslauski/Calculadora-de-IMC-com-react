import React from "react";
import { View, Text, TextInput } from "react-native";
import styles from "./style";

export default function NumberField(props) {

    const exibeLabel = () => props.label != null ? <Text style={styles.label}>{props.label}</Text> : '';

    return (
        <View>
            {exibeLabel()}
            <TextInput 
                style={styles.input}
                onChangeText={props.onChangeText}
                value={props.value || ''}
                placeholder={props.placeholder || ''} 
                keyboardType="numeric">
            </TextInput>
        </View>
    );
}