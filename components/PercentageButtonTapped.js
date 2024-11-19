import { TextButton } from './TextButton';
import { StyleSheet, View } from 'react-native';


export default function PercentageButton( props ){
    return(
        <View>
            <TextButton title={props.percentage + '%'} 
            style={styles.percentTipButton} 
            onPress={() => props.onPress(props.percentage)}/>
        </View>
    );
}

const styles = StyleSheet.create({
    percentTipButton: {
        fontSize: 10,
        minWidth: 70,
        alignItems: 'center'
    },
});