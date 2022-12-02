import React from 'react'
import { ScrollView,Image, View, Text, StyleSheet, TextInput , Pressable} from 'react-native'
import { Dimensions } from 'react-native'
const { width, height } = Dimensions.get('window')

const styles = StyleSheet.create({
    logincard: {
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
    }
})

const LoginCards = (props) => {
    return (
      <>
          <Pressable
              style={{
                  backgroundColor: '#5b4275',
                  opacity: 0.3,
                  width: 364,
                  height: 50,
                  borderRadius: 10,
                  justifyContent: 'center',
                  alignItems: 'center',
                  marginTop: height*0.03,
              }}
          >
            <View style={styles.logincard}>
                <Image source={require('../assets/user.png')} />
                <Text style={{
                    marginLeft: width*0.04,
                    color: 'white',
                    fontSize: 16,
                    fontWeight: '500',
                }}>
                    {props.title}
                </Text>
            </View>
          </Pressable>
      </>
    )
  }

export default LoginCards