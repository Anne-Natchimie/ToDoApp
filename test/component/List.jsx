import { View, Text } from 'react-native'
import { useState, useEffect } from 'react'
import React from 'react'

const List = () => {

    const [items, setItems] = useState([])

    useEffect(() => {
        console.log('lister')
    }, [])
    

    return (
        <View>
        <Text>List</Text>
        </View>
    )
}

export default List