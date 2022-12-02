import React from 'react'
import { ScrollView, StyleSheet, View, Text } from 'react-native';
import ButtonCustom from '../../components/Button';
import { Dimensions } from 'react-native';
const { width, height } = Dimensions.get('window');

const styles = StyleSheet.create({
    container: {
        position:'relative',
        backgroundColor: '#222122',
        color: 'white',
        display: 'flex',
        flexDirection: 'column',
        alignContent: 'center',
    },
    header1:{
        marginTop: height*0.4,
        marginLeft:width*0.034,
    },
    header2:{
        marginLeft:width*0.034,
        fontColor: '#ffffff',
    },
    subtext:{
        marginLeft:width*0.034,
    },
    button:{
        // marginTop: 20,
        marginLeft: width*0.034,
    },
});

// const Authcard = (props) => {
//     return (
//       <>
//           <View>
//               {/* <View> // horizontal */}
//                 <View>   </View>
//                   <View> // vertical
//                         <View>
//                             <Text>
//                                 Hello
//                             </Text>
//                         </View>
//                         <View>
//                             <Text>
//                                 Hii
//                             </Text>
//                         </View>
//                   </View>
//           </View>
//       </>
//     )
//   }

const AuthPage = () => {
  return (
    <>
        <ScrollView style={styles.container}>

            <View style={styles.header1}>
                <Text style={{
                    color: '#ffffff',
                    fontSize: 32,
                    fontFamily: 'Montserrat',
                }}>
                    Welcome to
                </Text>
            </View>

            <View style={styles.header2}>
                <Text style={{
                    color: '#ffffff',
                    fontSize: 32,
                    fontFamily: 'Montserrat',
                }}>
                    ChainPe
                </Text>
            </View>

            <View style={styles.subtext}>
                <Text style={{
                    color: '#868686',
                }}>
                    Choose the type of account you want to open in ChainPe
                </Text>
            </View>

            {/* Component Cards for method of payments */}

            {/* Component Cards for method of payments */}

            <View style={styles.button}>
                <ButtonCustom title="Continue"/>
            </View>

        </ScrollView>
    </>
  );
}

export default AuthPage