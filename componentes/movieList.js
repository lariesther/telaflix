import React from 'react'
import { View, Text, TouchableOpacity, ScrollView, TouchableWithoutFeedback, Image, Dimensions } from 'react-native'
import { styles } from '../theme'
import { useNavigation } from '@react-navigation/native';

var { width, height} = Dimensions.get('window');

export default function MovieList({ title, data}) {
    let movieName = "Joker: Folie á Deux";
    const navigation = useNavigation();
    return (
        <View>
            <Text>movieList</Text>
            
        </View>
    )
}