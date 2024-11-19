import {Text, View, StyleSheet} from 'react-native';

export function Resultado( props ) {
    return(
    <View style={styles.mainContainer}>
        <Text>{props.descripcion}</Text>
        <Text style={styles.resulvalues}>{props.valor}</Text>
    </View>
    );
}

const styles = StyleSheet.create({
mainContainer:{
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginVertical: 2,
},
descripcion:{
    fontSize: 14,
    color: '#333'
},
resulvalues: {
    fontSize: 14,
    fontWeight: 'bold',
    color: '#333'
}
});