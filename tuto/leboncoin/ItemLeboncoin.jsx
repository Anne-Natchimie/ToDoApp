import { View, Text, ImageBackground, TouchableOpacity } from 'react-native'
import Icon from 'react-native-vector-icons/dist/MaterialIcons'

import React from 'react'
import leboncoinStyles from './leboncoinStyles'

const ItemLeboncoin = ({product}) => {

    const goto = () => {
        console.log('product', product.id)
    }

    return (
        <TouchableOpacity onPress={goto} style={leboncoinStyles.cardContainer}>
            <ImageBackground style={leboncoinStyles.cardImage} 
                source={{uri:product.thumbnail}} 
                resizeMode='cover'
                imageStyle={{borderRadius:20}}
                >
                <View style={leboncoinStyles.favoriteIcon}>
                    <Icon name="favorite-border" size={30} color="#fff"/>
                </View>
            </ImageBackground>
            <View style={leboncoinStyles.containerTitlePrice}> 
                <Text style={leboncoinStyles.title}>{product.title}</Text>
                <Text style={leboncoinStyles.price}>{product.price} €</Text>
            </View>
            <View style={leboncoinStyles.containerBrand}>
                <Text style={leboncoinStyles.brand}>{product.brand}</Text>
                <Text style={leboncoinStyles.brand}>{product.category}</Text>
            </View>
        </TouchableOpacity>
    )
}

export default ItemLeboncoin