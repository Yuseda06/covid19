import { StyleSheet, Text, View , Button} from 'react-native'
import React from 'react';


const HomeScreen = ({ navigation }) => {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Button
        title="Covid Statistics"
        onPress={() => navigation.navigate('Covid')}
      />
    </View>
  )
}

export default HomeScreen

const styles = StyleSheet.create({})