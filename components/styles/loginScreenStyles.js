import { StyleSheet } from 'react-native';


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

    // Forgot Password
    forgotPasswordContainer: {
        alignSelf: 'flex-start',
        marginTop: '5%',
        marginRight: 10,
    },

    forgotPasswordText: {
        color: '#ffffff',
        fontFamily: 'Inter',
        fontSize: 14,
    },

    forgotPasswordLink: {
        color: '#FF0092',
        fontWeight: '600',
    },

    // Divider Styles:
    dividerContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        paddingTop: '5%',
        paddingRight: '10%',
    },

    dividerLine: {
        flex: 1,
        height: 1,
        backgroundColor: "#FF0092",
    },

    dividerText:{
        color: '#FF0092',
        paddingHorizontal: 10,
        fontSize: 16,
        fontWeight: '600',
    },

    // Google Button
    googleBtn: {
        backgroundColor: '#5382EB',
        borderRadius: 20,
        padding: 15,
        width: '90%',
        alignItems: 'center',
        flexDirection: 'row',
        borderWidth: 1,
        marginBottom: 10,
    },
    googleBtnText: {
        color: '#ffffff',
        fontWeight: '700',
        fontSize: 18,
        marginLeft: 10,
    },
    googleIcon: {
        width: 20,
        height: 20,
        borderRadius: 10,
    },

    buttonContainer: {
        flexDirection: 'column',
        alignItems: 'flex-start',
        justifyContent: 'space-between',
        width: '100%',
        height: '15%',
        marginTop: '10%',
    },

    loginBtnContainer: {
        flexDirection: 'column',
        alignItems: 'flex-start',
        width: '100%',
        height: '15%',
    },

    loginBtn: {
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

    loginBtnText: {
        color: 'black',
        fontSize: 18,
        fontWeight: 'bold',
    },
});