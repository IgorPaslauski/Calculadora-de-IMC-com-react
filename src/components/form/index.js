import React, { useState } from "react";
import { View, Button } from "react-native";
import ResultImc from "../form/ResultIMC";
import NumberField from "../NumberField";
import pool from "../../service/connection";

export default function Form() {
    const [height, setHeiht] = useState(null);
    const [weight, setWeight]= useState(null);
    const [massageImc, setMassageImc]= useState("Preencha o peso e altura");
    const [imc, setImc]= useState(null);
    const [textButton, setTextButton]= useState("Calcular");
    const imcCalculator = () => setImc((weight / (height * height)).toFixed(2));

    function validateImc(){
        if (height != null && weight != null){
            imcCalculator();
            pool.query('INSERT INTO imc (height, weight, imc) VALUES ($1, $2, $3)', [height, weight, imc], (err, res) => {
                if (err) {
                  console.error('Erro ao conectar ao banco de dados', err.stack);
                } else {
                  console.log('Conexão com o banco de dados estabelecida com sucesso');
                }
                pool.end();
            });
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
                <NumberField label="Altura:" onChangeText={height => setHeiht(height)} value={height} placeholder="Ex 1.75" />
                <NumberField label="Peso:" onChangeText={weight => setWeight(weight)} value={weight} placeholder="Ex 75.35" />
                <Button onPress={validateImc} title={textButton}></Button>
            </View>
            <ResultImc messageResultImc={massageImc} resultImc={imc}/>
        </View>
    );
}