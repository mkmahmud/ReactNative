import { StyleSheet, Text, View } from 'react-native';


export default function Home () {
    return (
        <View >
            <Text style={styles.home}>This is Home</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    home:{
        color:'yellow'
    }
})