import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    // Main Container
    container: {
        flex: 1,
        backgroundColor: '#000000',
        alignItems: 'left',
        paddingTop: '20%',
        paddingLeft: '10%',
    },
  
    // Title Styles
    titleText: {
        paddingTop: '5%',
        color: '#ffffff',
        fontFamily: 'Inter',
        fontWeight: '700',
        fontSize: 38
    },

    // Back Button Style
    backBtn: {
        zIndex: 1,
        fontSize: 32,
        color: '#FF0092'
    },

    // Input Styles

    inputContainer: {
        marginTop: '10%',
        flexDirection: 'column',
        paddingRight: '10%',
        width: '100%',
        height: '10%',
        backgroundColor: '#000000',
        color: '#ffffff',
        fontFamily: 'Inter',
        fontWeight: '400',
        fontSize: 14,
        alignContent: 'flex-start',
    },

    inputHeading: {
        color: '#ffffff',
        fontFamily: 'Inter',
        fontWeight: '500',
        fontSize: 18,
        marginBottom: 10,
    },

    inputFocused: {
        borderColor: '#FF0092',
        borderWidth: 1,
    },

    input: {
        marginBottom: 15,
        padding: 10,
    },   

    inputText: {
        flex: 1,
        color: '#FF0092',
        fontFamily: 'Inter',
        fontWeight: '400',
        fontSize: 14,
    },

    inputIcon: {
        color: '#FF0092',
        fontSize: 20,
        marginRight: 10,
    },

    inputIconEye: {
        color: '#FF0092',
        fontSize: 20,
        marginLeft: '0%',
        alignContent: 'flex-end',
    },

    inputSlot:{
        paddingRight: 10,
    },

    inputWithBorder: {
        flexDirection: 'row',
        alignItems: 'center',
        borderColor: '#FFFFFF',
        borderWidth: 1,
        borderRadius: 5,
        paddingHorizontal: 10,
        paddingVertical: 10,
    },

    btnContainer: {
        flex: 1,
        backgroundColor: '#000000',
        alignItems: 'center',
        paddingTop: '10%',
        width: '90%',
    },

    signUpBtn: {
        backgroundColor: '#ffffff',
        borderRadius: 20,
        padding: 10,
        width: '90%',
        alignItems: 'center',
        flexDirection: 'row',
        borderWidth: 1,
        justifyContent: 'center',
        marginTop: '15%',
    },
    signUpBtnText: {
        color: 'black',
        fontSize: 18,
        fontWeight: 'bold',
    },
});