import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, TextInput } from 'react-native';
import { TextButton } from './components/TextButton';
import {Stepper} from './components/Stepper'
import PercentageButton from './components/PercentageButtonTapped';
import { Resultado } from './components/Results';
import { useState } from 'react';

export default function App() {

  const [importe, setImporte] = useState ('');
  const [personas, setPersonas] = useState ('');
  const [propina, setPropina] = useState ('');
  const [ImportePropina, setIPropina] = useState('');
  const [PropinaPorPersona, setPPersona] = useState ('');
  const [ImporteTotal, setITotal] = useState ('');
  const [ImportePorPersona, setIPPersona] = useState ('');

  function importeTextInputHandler(enteredText){
    setImporte(enteredText);
  }
  function personasTextHandler(enteredText){
    setPersonas(enteredText);
  }
  function propinaTextHandler(enteredText){
    setPropina(enteredText);
  }

  function onCalcularButtonTapped() {

    const importeNum = parseFloat(importe);
    const propinaNum = parseFloat(propina);
    const personasNum = parseInt(personas);

    const importePropina = importeNum * (propinaNum / 100);
    const importeTotal = importeNum + importePropina;
    const propinaPorPersona = importePropina / personasNum;
    const importePorPersona = importeTotal / personasNum;


    setIPropina(importePropina.toFixed(2));
    setITotal(importeTotal.toFixed(2));
    setPPersona(propinaPorPersona.toFixed(2));
    setIPPersona(importePorPersona.toFixed(2));

  }

  function OnPercentageButtonTapped (percentage) {
    setPropina(percentage)
  }

  function onTappedLimpiarButton(){
    setImporte(''); 
    setPersonas('1');
    setPropina('5');
    setIPropina('');
    setPPersona('');
    setITotal('');
    setIPPersona('');
  }

  return (
    <View style={styles.mainContainer}>

      <View style={styles.mainBox}>

        <View style={styles.inputContainer}>
          <Text style={styles.label}>Importe</Text>
          <TextInput 
            style={styles.textInput}
            onChangeText={importeTextInputHandler}
            value={importe}
            placeholder="Ingrese la cantidad del gasto" 
          />
        </View>

        <View style={styles.inputContainer}>
          <Text style={styles.label}>Num.Personas</Text>
          <TextInput 
            style={styles.textInput}
            onChangeText={personasTextHandler}
            value={personas} 
            placeholder="Ingrese el # de Personas" 
          />
          <View style={styles.personasButtons}>
            <Stepper 
            minValue='1'
            maxValue='10'
            increment='1'
            value={personas}
            onChange={(newValue) => setPersonas(newValue)}/>
          </View>
        </View>

        <View style={styles.buttonContainer}>
          <PercentageButton percentage='8' onPress={OnPercentageButtonTapped}/>
          <PercentageButton percentage='10' onPress={OnPercentageButtonTapped}/>
          <PercentageButton percentage='12.5' onPress={OnPercentageButtonTapped}/>
          <PercentageButton percentage='15' onPress={OnPercentageButtonTapped}/>
        </View>

        <View style={styles.inputContainer}>
          <Text style={styles.label}>% Propina</Text>
          <TextInput 
            style={styles.textInput}
            onChangeText={propinaTextHandler}
            value={propina} 
            placeholder="Ingrese el % de Propina" 
            keyboardType="numeric-pad"
          />
          <View style={styles.personasButtons}>
            <Stepper 
            minValue='0'
            maxValue='50'
            increment='0.5'
            value={propina}
            onChange={(value) => setPropina(value)}/>
          </View>
        </View>
      </View>

      <View style={styles.commandContainer}>
        <TextButton title="Calcular" onPress={onCalcularButtonTapped}/>
        <TextButton title="Limpiar" onPress={onTappedLimpiarButton}/>
      </View>

      <View style={styles.resultContainer}>
        <Resultado descripcion="Importe de la Propina:" valor={ImportePropina} />
        <Resultado descripcion="Propina por Persona:" valor={PropinaPorPersona} />
        <Resultado descripcion="Importe Total:" valor={ImporteTotal} />
        <Resultado descripcion="Importe por Persona:" valor={ImportePorPersona} />
      </View>
      <StatusBar style="auto" />
    </View>
  );
}


const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    backgroundColor: '#F5F5F5',
    paddingVertical: 70,
    paddingHorizontal: 20,
  },
  mainBox: {
    padding: 15,
    borderRadius: 10,
    marginBottom: 20,
    backgroundColor: '#FFFFFF', 
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3, 
  },
  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingVertical: 10,
    marginVertical: 8,
    borderBottomColor: '#CCCCCC',
    borderBottomWidth: 1,
  },
  label: {
    fontSize: 16,
    fontWeight: '600',
    color: '#333333', 
    marginRight: 10,
  },
  textInput: {
    paddingHorizontal: 10,
    height: 40,
    flex: 1,
    backgroundColor: '#F0F0F0', 
    color: '#333333', 
    borderRadius: 5,
    borderWidth: 1,
    borderColor: '#CCCCCC',
  },
  personasButtons: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginVertical: 10,
  },
  commandContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginVertical: 15,
  },
  resultContainer: {
    padding: 15,
    borderRadius: 8,
    backgroundColor: '#FFFFFF', 
    borderColor: '#CCCCCC',
    borderWidth: 1,
    marginTop: 10,
  },
  textButton: {
    padding: 10,
    borderRadius: 5,
    backgroundColor: '#FFFFFF', 
    borderWidth: 1,
    borderColor: '#CCCCCC', 
    alignItems: 'center',
  },
  textButtonText: {
    color: '#333333',
    fontSize: 16,
    fontWeight: '500',
  },
});