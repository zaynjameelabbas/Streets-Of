import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
    // Main Container
    container: {
      flex: 1,
      backgroundColor: '#000000',
      alignItems: 'center',
      padding: '20%'
    },

    // Title Styles
    titleText: {
      color: '#ffffff',
      fontFamily: 'Inter',
      fontWeight: '700',
      fontSize: 64
    },

    titleView: {
      paddingTop: '20%',
      paddingBottom: '20%',
    },

    // Buttons

    buttonContainer: {
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'space-between',
      width: '100%',
      height: '100%',
      marginTop: '20%',
    },

    loginBtn: {
      backgroundColor: '#ffffff',
      borderRadius: 20,
      padding: 10,
      width: 220,
      alignItems: 'center',
      flexDirection: 'row',
      borderWidth: 1,
      justifyContent: 'center',
      marginBottom: 15,
    },
    loginBtnText: {
      color: '#000000',
      fontWeight: '500',
      fontSize: 14
    },
    googleBtn: {
      backgroundColor: '#5382EB',
      borderRadius: 20,
      padding: 10,
      marginTop: 10,
      width: 220,
      alignItems: 'center',
      flexDirection: 'row',
      borderWidth: 1,
      marginBottom: 10,
        // borderColor: '#dadce0',
    },
    googleBtnText: {
      color: '#ffffff',
      fontWeight: '500',
      fontSize: 14,
      marginLeft: 10,
    },
    googleIcon: {
      width: 18,
      height: 18,
      borderRadius: 10,
    },
    pinkText: {
      color: '#FF0092',
    },

    // Divider Styles:
    dividerContainer: {
      flexDirection: 'row',
      alignItems: 'center',
      paddingTop: '10%',
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
    }
});