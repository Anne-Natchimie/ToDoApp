import { View, Text, ImageBackground } from 'react-native'

import React from 'react'
import tutoStyles from './tutoStyles'

const Tuto = () => {
    return (
        <View style={tutoStyles.container}>
            <ImageBackground source={{uri:'https://images.pexels.com/photos/3293148/pexels-photo-3293148.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'}} style={tutoStyles.container2}>
                <View style={tutoStyles.subContainer}>
                    <View style={tutoStyles.box1} />
                    <View style={tutoStyles.box2} /> 
                    <View style={tutoStyles.box3} />
                </View>
            </ImageBackground>
        </View>
    )
}

export default Tuto