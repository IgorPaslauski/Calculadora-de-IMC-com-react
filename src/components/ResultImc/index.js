import React from "react";
import { View, Text } from "react-native";
import styles from "../NumberField/style";

export default function ResultImc(props) {
    return (
        <View>
           <Text style={styles.label}>{props.messageResultImc} {props.resultImc}</Text>
        </View>
    );
}