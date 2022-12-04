import { HStack, NativeBaseProvider, VStack } from 'native-base';
import React from 'react'
import { View, Text, StyleSheet, Image, Dimensions, ScrollView, Pressable } from 'react-native'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import CoinShow from '../../components/CoinShow';
import ChainShow from '../../components/ChainShow';

const {height, width} = Dimensions.get('window');
const Tab = createBottomTabNavigator();

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#212121'
    },
    container2: {
        width: width*0.9,
        alignSelf: 'center',
    },
    accountCard:{
        marginTop: height*0.05,
        width: width*0.9,
        height: height*0.20,
        backgroundColor: '#6100FF',
        borderRadius: 30,
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between',
        marginBottom: height*0.05,
    },
    transaction:{
        width: width*0.9,
        height: height*0.09,
        backgroundColor: '#50366a',
        borderRadius: 20,
        justifyContent: 'center',
        marginTop: height*0.02,
    },
    genText:{
        color: '#979998',
        alignSelf: 'center',
    }
})

const PersonalInfo = (props) => {
    return (
        <>
        <View style={{
            marginTop: height*0.1,
        }}>
            <HStack style={{
                display: 'flex',
                flexDirection: 'row',
                justifyContent: 'space-between'
            }} mt={0}>
                <View>
                    <VStack>
                        <Text style={{
                            color: '#ffffff',
                            fontSize: 25,
                        }}>Hello {props.username}</Text>
                        <Text style={{
                            color: '#ffffff',
                            fontSize: 12,
                        }}>Welcome back!!</Text>
                    </VStack>
                </View>
                <View>
                    <Image source={require('../../assets/favicon.png')}/>
                </View>
            </HStack>
        </View>
        </>
    );
}

const BasicView = (props) => {
    return (
        <>
            <View style={styles.accountCard}>
                    <View style={{
                        paddingTop: height*0.035,
                        display: 'flex',
                        flexDirection: 'row',
                        justifyContent: 'space-between',
                        paddingRight: width*0.08,
                    }}>
                        <View>
                            <Text style={{
                                color: '#ffffff',
                                fontSize: 22,
                                paddingLeft: width*0.05,
                            }}>{props.username}</Text>
                        </View>
                        <View>
                            <Pressable onPress={() => {
                                props.setisopen(true);
                            }}>
                                <Image source={require('../../assets/dropdown.png')}/>
                            </Pressable>
                        </View>
                    </View>
                    <View>
                        <View><Text style={{
                            color: '#C7C7C7',
                            paddingLeft: width*0.05,
                        }}>Wallet</Text></View>
                        <View><Text style={{
                            color: '#ffffff',
                            fontSize: 22,
                            paddingLeft: width*0.05,
                            paddingBottom: height*0.035,
                        }}>${props.balance}</Text></View>
                    </View>
            </View>
        </>
    );
}

const AccountCard = (props) => {
    const [isopen, setisopen] = React.useState(false);
    const [iscoinopen, setiscoinopen] = React.useState(false);
    return (
        <>
            {!isopen?
                <BasicView username={props.username} balance={props.balance} setisopen={setisopen} setiscoinopen={setiscoinopen}/>
                :
                <>
                    {
                        iscoinopen ?
                        <CoinShow username={props.username} network="Ethereum Mainnet" balance={props.balance} setisopen={setisopen} setiscoinopen={setiscoinopen}/>
                        :
                        <ChainShow username={props.username} network="Ethereum Mainnet" balance={props.balance} setisopen={setisopen} setiscoinopen={setiscoinopen}/>
                    }
                </>
            }
        </>
    );
}

const TransactionCard = (props) => {
    return (
        <>
            <View style={styles.transaction}>
                <View style={{
                    display: 'flex',
                    flexDirection: 'row',
                    justifyContent: 'space-between',
                    alignContent: 'center',
                }}>
                    <View style={{
                        display: 'flex',
                        flexDirection: 'column',
                        justifyContent: 'center',
                        paddingLeft: width*0.05,
                    }}>
                        <View><Text style={{
                            color: '#ffffff',
                            fontSize: 17,
                            fontWeight: "400",
                        }}>{props.reciever}</Text></View>
                        <View><Text style={{
                            color: '#80828F',
                            fontSize: 12,
                        }}>{props.time}</Text></View>
                    </View>
                    <View>
                        <Text style={{
                            color: 'red',
                            paddingRight: width*0.05,
                            paddingTop: height*0.01,
                        }}>
                            - Rs. {props.spent}
                        </Text>
                    </View>
                </View>
            </View>
        </>
    );
}

const bottomComponent = (props) => {
    return(
        <>
            <View>
                <View><Image source={props.img} /></View>
                <View><Text>{props.name}</Text></View>
            </View>
        </>
    );
}


const BottomNavBar = (props) => {
    return(
        <>
            <View style={{
                display: 'flex',
                flexDirection: 'row',
                justifyContent: 'space-evenly',
            }}>
                <View style={{
                    display: 'flex',
                    flexDirection: 'row',
                    backgroundColor: '#404240',
                    justifyContent: 'space-evenly',
                    height: height*0.09,
                    width:width,
                    alignItems: 'center',
                }}>
                    <View style={{alignItems: 'center' }}>
                        <View style={{alignSelf:'center'}}><Image source={require('../../assets/home.png')} /></View>
                        <View><Text style={styles.genText}>Home</Text></View>
                    </View>
                    <View style={{alignItems: 'center' }}>
                        <View style={{alignSelf:'center'}}><Image source={require('../../assets/crypto.png')} /></View>
                        <View><Text style={styles.genText}>Crypto</Text></View>
                    </View>
                    <View style={{alignItems: 'center' }}>
                        <Pressable onPress={()=> console.log("pressed")}>
                            <View style={{alignSelf:'center'}}><Image source={require('../../assets/scan.png')} /></View>
                            <View><Text style={styles.genText}>Scan</Text></View>
                        </Pressable>
                    </View>
                    <View style={{alignItems: 'center' }}>
                        <View style={{alignSelf:'center'}}><Image source={require('../../assets/flat.png')} /></View>
                        <View><Text style={styles.genText}>Flat</Text></View>
                    </View>
                    <View style={{alignItems: 'center' }}>
                        <View style={{alignSelf:'center'}}><Image source={require('../../assets/club.png')} /></View>
                        <View><Text style={styles.genText}>Club</Text></View>
                    </View>
                </View>
            </View>
        </>
    );
}

const Dashboard = () => {
  return (
    <>
        <NativeBaseProvider>
            <ScrollView style={styles.container}>
                <ScrollView style={styles.container2}>
                    <VStack>

                        <PersonalInfo username="Lisa" />
                        <AccountCard username="Lisa" balance="500000" />
                        <View>
                            <Text style={{
                                color: '#A5A5A5',
                                fontSize: 20,
                                marginTop: height*0.01,
                                fontSize: 20,
                            }}>Transaction History </Text>
                        </View>
                        <TransactionCard reciever="Flipkart" time="18 Aug, 10am" spent="549"/>
                        <TransactionCard reciever="Flipkart" time="18 Aug, 10am" spent="549"/>
                        <TransactionCard reciever="Flipkart" time="18 Aug, 10am" spent="549"/>

                    </VStack>
                </ScrollView>
            </ScrollView>
            <View>
            <BottomNavBar/>
            </View>
        </NativeBaseProvider>
</>
  )
}

export default Dashboard
