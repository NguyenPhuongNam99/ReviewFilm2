import { StyleSheet, Text, View, Button, TextInput, TouchableOpacity,Linking } from 'react-native';
import React from 'react';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import Header from '../../components/header';
import { images } from '../../assets';
const Report = (props) => {
    return (
        <View style={styles.container}>
            <Header
                title={'Report bugs'}
                iconLeft={images.ic_back}
                onLeftPress={()=>props.navigation.goBack()}
                lStyle={{tintColor:'white'}}
            />
            <View style={{ alignItems: "center", margin: 30 }}>
                <Icon name="email" size={70} color="#FFA100" />
            </View>
            <View style={{ alignItems: "center", margin: 10 }}>
                <View style={styles.boxInput}>
                    <TextInput style={styles.txtInput}
                        placeholder="E-mail"
                        placeholderTextColor="#FFA100"
                        keyboardType='email-address' />
                </View>
                <View style={styles.boxInput}>
                    <TextInput style={styles.txtInput}
                        placeholder="Full Name"
                        placeholderTextColor="#FFA100" />
                </View>
                <View style={styles.boxInput}>
                    <TextInput style={styles.txtInput}
                        placeholder="Your message"
                        placeholderTextColor="#FFA100" />
                </View>
                <TouchableOpacity style={styles.btnSend} onPress={() => Linking.openURL('mailto:luanlay2010@gmail.com?subject=SendMail&body=Description') }>
                    <View style={styles.txtContainer}>
                        <Icon name="send" size={30} color="#FFF" />
                        <Text style={styles.txtSend}>Sent Message
                        </Text>
                    </View>
                </TouchableOpacity>
            </View>

        </View>
    );
}

export default Report;

const styles = StyleSheet.create({
    container: {
        width: "100%",
        height: "100%",
        backgroundColor: "black"
    },
    boxInput: {
        width: "70%",
        borderRadius: 10,
        borderWidth: 1,
        borderColor: "#FFA100",
        paddingHorizontal: 10,
        margin: 10
    },
    txtInput: {
        color: "#FFF",
        margin: 5
    },
    btnSend: {
        backgroundColor: "#FFA100",
        width: "70%",
        height: 60,
        borderRadius: 8,
    },
    txtContainer: {
        flexDirection: "row",
        justifyContent: "space-between",
        paddingHorizontal: 20,
        alignItems: "center",
        marginTop: 15

    },
    txtSend: {
        color: "#FFF",
        fontWeight: "bold",
    }
})