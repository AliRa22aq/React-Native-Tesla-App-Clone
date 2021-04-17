import React from 'react'
import { Text, View, ImageBackground } from 'react-native'
import styles from './styles'

const CarItem = (props) => {
    return (
    <View style={styles.carContainer}>
        <ImageBackground 
             source={require('../../assets/images/ModelX.jpeg')} 
             style={styles.image}
             />
        <View style={styles.titles}> 
          <Text style={styles.title}> Model X </Text>
          <Text style={styles.subtitle}> Starting at $69,000 </Text>
        </View>
    </View>
    )
}

export default CarItem

