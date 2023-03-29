import React, { useState } from "react";
import { View, Text, TextInput, Button } from "react-native";
import ResultImc from "../form/ResultIMC";

export default function Form() {
    const [height, setHeiht] = useState(null);
    const [weight, setWeight]= useState(null);
    const [massageImc, setMassageImc]= useState("Preencha o peso e altura");
    const [imc, setImc]= useState(null);
    const [textButton, setTextButton]= useState("Calcular");

    function imcCalculator(){
        return setImc((weight / (height * height)).toFixed(2));
    }

    function validateImc(){
        if (height != null && weight != null){
            imcCalculator();
            setHeiht(null);
            setWeight(null);
            setMassageImc("Seu IMC é:");
            setTextButton("Calcular Novamente");
            return;
        } else {
            setMassageImc("Preencha o peso e altura");
            setTextButton("Calcular");
            setImc(null);
            return;
        }
    }

    return (
        <View>
            <View>
                <Text>Altura:</Text>
                <TextInput 
                    onChangeText={(height) => setHeiht(height)}
                    value={height}
                    placeholder="Ex 1.75" 
                    keyboardType="numeric">
                    </TextInput>
                <Text>Peso:</Text>
                <TextInput
                    onChangeText={(weight) => setWeight(weight)}
                    value={weight}
                    placeholder="Ex 75.35" 
                    keyboardType="numeric"
                ></TextInput>
                <Button
                    onPress={validateImc}
                    title="Calcular IMC"></Button>
            </View>
            <ResultImc messageResultImc={massageImc} resultImc={imc}/>
        </View>
    );
}