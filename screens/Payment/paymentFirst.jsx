import React from 'react'
import { Center, NativeBaseProvider, NumberInput, ScrollView, View, VStack } from 'native-base';
import { Image, TextInput } from 'react-native';
import { Pressable, StyleSheet, Text } from 'react-native';
import PaymentOption from '../../components/PaymentOption/PaymentOption';

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#121212',
        display: 'flex',
        flexDirection: 'column',
        paddingLeft: '7.5%',
        paddingTop: 20,
    },
    cards: {
        marginTop: 20,
    },
    container2: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        backgroundColor: '#5b4275',
        opacity: 0.7,
    },
    text: {
        color: '#ffffff',
        fontSize: 20,
        fontWeight: 'bold',
        marginLeft: 10,
    },
    hstack: {
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'flex-start',
        marginLeft: 0,
    },
    name: {
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        marginLeft: 5,
    },
    dropdown:{
        marginRight:15,
    },
    enteredAmt: {
        color: '#ffffff',
        fontWeight: "400",
        fontSize: 25,
        marginLeft: 15,
    },
    netAmt: {
        color: '#9D9D9D',
        fontSize: 15,
        fontWeight: "300",
        marginRight:15,
    },
});

const CurrencyCard = (props) => {
    return (
        <>
        <Pressable style={styles.hstack} onPress={() => console.log("pressed")}>
            <Center w="90%" h="20" rounded="19" shadow={3} style={styles.container2}>
                <View style={styles.name}>
                    <Image source={props.logo} />
                    <Text style={styles.text}>{props.text}</Text>
                </View>
                    <Image source={props.dropdown} style={styles.dropdown} />
            </Center>
        </Pressable>
        </>
    );
}

const MoneyCard = (props) => {
    return (
        <>
            <Center w="90%" h="20" rounded="19" shadow={3} style={styles.container2}>
                <View>
                    <TextInput style={styles.enteredAmt} keyboardType='number-pad' placeholder='Enter Amount' placeholderTextColor={'#d0d0d0'}/>
                </View>
                <View >
                    <Text style={styles.netAmt}>
                        = ${props.netValue}
                    </Text>
                </View>
            </Center>
        </>
    );
}

const Payment1 = () => {
  return (
    <>
        <NativeBaseProvider>
            <ScrollView style={styles.container}>
                <VStack>

                    <View>
                        <Pressable
                            onPress={() => {
                                console.log('Pressed');
                            }}
                            style={{
                                marginTop: 20,
                            }}
                        >
                            <Image source={require('../../assets/back.png')} />
                        </Pressable>
                    </View>

                    <View>
                        <Text
                            style={{
                                color: '#fff',
                                fontSize: 24,
                                fontWeight: 'bold',
                                marginTop: 20,
                                alignSelf: 'center',
                            }}
                        >
                            Enter Amount
                        </Text>
                    </View>
                    
                    <View style={styles.cards}>
                    <CurrencyCard dropdown={require('../../assets/dropdown.png')} logo={require('../../assets/USD.png')} text="USD"/>
                    </View>
                    <View style={styles.cards}>
                    <MoneyCard amount="500" netValue="500"/>
                    </View>


                </VStack>
            </ScrollView>
        </NativeBaseProvider>
    </>
  )
}

export default Payment1