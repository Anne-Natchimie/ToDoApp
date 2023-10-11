import { View, Text, ImageBackground } from 'react-native'
import React from 'react'
import stylesTest from './stylesTest'

const Test = () => {
    return (
        <View style={stylesTest.container}>
            <ImageBackground
                source={{uri:'https://images.pexels.com/photos/2336676/pexels-photo-2336676.jpeg?auto=compress&cs=tinysrgb&w=1200'}}
            >
            </ImageBackground>
        </View>
    )
}

export default Test