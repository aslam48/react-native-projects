import { View, Text, SafeAreaView, Image} from 'react-native'
import React from 'react'
import { useNavigation } from '@react-navigation/native'
import { useLayoutEffect } from 'react'
import {Avatar} from '../assets'
import { GooglePlacesAutocomplete } from 'react-native-google-places-autocomplete';




const Discover = () => {
    const navigation = useNavigation()

    useLayoutEffect(() => {
        navigation.setOptions({
            headerShown: false
        })
    },[])

  return (
   <SafeAreaView className="flex-1 bg-white relative mt-5">
    <View className="flex-row items-center justify-between px-8">
        <View>
            <Text className="text-[40px] text-[#0b646b] font-bold">Discover</Text>
            <Text className="text-[#527283] text-[36px]">the beauty today</Text>
        </View>

        <View className=" w-12 h-12 bg-gray-400 rounded-md items-center justify-center shadow-lg">
           <Image source={Avatar} className="w-full h-full rounded-md object-cover"/>
        </View>
    </View>


    {/* search area */}

    <View className="flex-row items-center bg-white mx-4 rounded-xl py-1 px-4 shadow-lg mt-4">
    <GooglePlacesAutocomplete
      GooglePlacesDetailsQuery={{fields:"geometry"}}
      placeholder='Search'
      fetchDetails={true}
      onPress={(data, details = null) => {
        // 'details' is provided when fetchDetails = true
        console.log(details ?.geometry?.viewport);
      }}
      query={{
        key: 'YOUR API KEY',
        language: 'en',
      }}
    />
    </View>

   </SafeAreaView>
  )
}

export default Discover