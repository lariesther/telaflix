import React from 'react'
import { View, Text, Platform,TouchableOpacity, ScrollView } from 'react-native'
import{StatusBar} from 'expo-status-bar'
import {Bars3BottomLeftIcon, MagnigyingGlassIcon} from 'react-native-heroicons/outline'
import{styles} from '../theme'

export default function HomeScreen() {
  return (
    <View className="flex-1 bg-neutral-800"> 
      <View className={ios ? "-mb-2" : "mb-3"}>
        <StatusBar style='light' />
         <View className="flex-row justify-between items-center mx-4 mt-8">
          <TouchableOpacity>
            <Bars3BottomLeftIcon size={30} strokeWidth={2} color="white"/> 
          </TouchableOpacity>

            <Text className="text-white text-3x1 font-bold">
              <Text style={styles.text}>GM</Text>ovies
            </Text>

          <TouchableOpacity>
            <MagnigyingGlassIcon  size ={30} strokeWidth={2} color='white'/>
          </TouchableOpacity>
      </View>
    </View>
    <ScrollView
    showsVerticalScrollIndicator={false}
    contentContainerStyle={{paddingBottom: 20}}
    >
    
    </ScrollView>
  </View>
  )
}