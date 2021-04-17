import React from 'react'
import { Pressable, Text, View } from 'react-native'
import styles from './styles'

const index = (props) => {

    const {type, content, onPress} = props;

    const backgroundColor = type === 'primary'  ?  '#171A20CC': '#FFFFFFA6';
    const textcolor = type === 'primary'  ?  '#FFFFFF':'#171A20';

    return (
        <View style={styles.container}>
        <Pressable
            style={[styles.button, {backgroundColor: backgroundColor }]}
            onPress = {onPress}
        >
            <Text style={[styles.text, {color: textcolor}]}> {content} </Text>


        </Pressable>
        </View>
    )
}

export default index

