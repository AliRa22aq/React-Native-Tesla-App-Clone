import React from 'react'
import { View, Pressable, Image } from 'react-native'
import styles from './styles'

const Header = () => {
    return (
        <View style={styles.container}>
            <Pressable onPress = {()=> {console.warn("Tesla is Love")}}> 
            <Image 
                style={styles.logo} 
                source={require('../../assets/images/logo.png')} 
            />
            </Pressable>

            <Pressable onPress = {()=> {console.warn("Tesla is Love")}} > 
            <Image 
                style={styles.menu} 
                source={require('../../assets/images/menu.png')} 
            />
            </Pressable>


        </View>
    )
}

export default Header
