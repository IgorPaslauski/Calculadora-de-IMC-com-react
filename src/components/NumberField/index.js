import React from "react";
import { View, Text, TextInput } from "react-native";

export default function NumberField(props) {

    const exibeLabel = () => props.label != null ? <Text>{props.label}</Text> : '';

    const handleValorChange = (valorNovo) => {
        // Verifica se o valor contém apenas dígitos
        const regex =  /^[0-9]+(\,[0-9]{0,2})?$/;
        if (regex.test(valorNovo)) {
            props.onChangeText?.(valorNovo);
        }
      };

    return (
        <View>
            {exibeLabel()}
            <TextInput 
                onChangeText={handleValorChange}
                value={props.value || ''}
                placeholder={props.placeholder || ''} 
                InputModeOptions="decimal-pad">
            </TextInput>
        </View>
    );
}