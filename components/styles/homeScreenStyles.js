import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
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

    userText: {
        color: '#ff0092',
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
});