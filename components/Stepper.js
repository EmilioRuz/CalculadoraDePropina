import { StyleSheet, View } from "react-native";
import { TextButton } from "./TextButton";

export function Stepper( props ){

    const defaultMinValue = 0;
    const defaultMaxValue = 100;
    const defaultIncrement = 1;
    let value = parseFloat(props.value) || defaultMinValue;

    const minValue = parseFloat(props.minValue) || defaultMinValue;
    const maxValue = parseFloat(props.maxValue) || defaultMaxValue;
    const increment = parseFloat(props.increment) || defaultIncrement;

    function onIncrementButtonTapped() {
        if (value + increment <= maxValue) {
            const newValue = value + increment;
            props.onChange(newValue.toString()); 
        }
    }

    function onDecrementButtonTapped() {
        if (value - increment >= minValue) {
            const newValue = value - increment;
            props.onChange(newValue.toString());
        }
    }


    return(
        <View style={styles.mainContainer}>
            <TextButton title='-' 
            buttonStyle={styles.minusButtonStyle} 
            textStyle={styles.buttonTextStyle}
            onPress={onDecrementButtonTapped}/>
            <TextButton title='+' 
            buttonStyle={styles.plusButtonStyle} 
            textStyle={styles.buttonTextStyle}
            onPress={onIncrementButtonTapped}/>
        </View>
    );
}

const styles = StyleSheet.create({
    mainContainer:{
        flexDirection: 'row',
        justifyContent: 'flex-end',
    },
    plusButtonStyle:{
        borderColor: 'lightgray',
        backgroundColor: 'lightgray',
        minWidth: 36,
        minHeight: 36,
        alignItems: 'center'
    },
    minusButtonStyle:{
        borderColor: 'light-gray',
        backgroundColor: 'light-gray',
        minWidth: 36,
        minHeight: 36,
        alignItems: 'center'
    },
    buttonTextStyle: {
        fontSize: 24,
        color: 'black',
        fontWeight: 'bold'
    }
})