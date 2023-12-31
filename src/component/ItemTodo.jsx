import { View, Text } from 'react-native'
import { Button } from 'react-native'

import React from 'react'
import firestore from '@react-native-firebase/firestore'
import styles from '../styles'

const ItemTodo = ({todo}) => {

    const supprimer = () => {
        firestore().collection('Todo').doc(todo.id).delete()
    }

    const realiser = () => {
        firestore().collection('Todo').doc(todo.id).update({
            status : !todo.status,
        })
    }

    return (

        <View>
        {todo.status ? <Text style={{textDecorationLine:'line-through'}}>{todo?.task}</Text> 
                        : <Text style={{color:"white"}} >{todo?.task}</Text>
                        }
        <Button title='Del' onPress={supprimer} />
        <Button title='Upd' onPress={realiser} />
        </View>

    )
}

export default ItemTodo