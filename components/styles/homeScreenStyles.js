import { StyleSheet, Dimensions } from "react-native";

const windowWidth = Dimensions.get('window').width;
const CARD_WIDTH = windowWidth * 0.7;
const CARD_HEIGHT = CARD_WIDTH * 1.4; // Maintains 2.5:3.5 ratio

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#000000',
        alignItems: 'center',
    },

    titleSection: {
        alignItems: 'center',
        paddingTop: 40,
    },

    titleText: {
        color: '#ffffff',
        fontFamily: 'Inter',
        fontWeight: '700',
        fontSize: 38,
        paddingTop: 30,
    },

    playCard: {
        backgroundColor: '#ffffff',
        width: CARD_WIDTH,
        height: CARD_HEIGHT,
        borderRadius: 15,
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 100,  // Fixed distance from title
        elevation: 5,
        shadowColor: '#ff0092',
        shadowOffset: { width: 0, height: 4 },
        shadowOpacity: 0.3,
        shadowRadius: 5,
        paddingBottom: 10,
    },

    playCardText: {
        color: '#000000',
        fontSize: 28,
        fontWeight: '700',
        textAlign: 'center',
        padding: 20,
    },

    playCardUsername: {
        color: '#ff0092',
        fontSize: 28,
        fontWeight: '700',
    },
    // Bottom Navigation
    bottomNav: {
        position: 'absolute',
        bottom: 20,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        width: '100%',
        paddingHorizontal: 40,
        paddingVertical: 10,
    },

    centerButton: {
        backgroundColor: '#ff0092',
        width: 70,
        height: 70,
        borderRadius: 35,
        justifyContent: 'center',
        alignItems: 'center',
        elevation: 5,
    },

    sideButton: {
        alignItems: 'center',
    },

    buttonText: {
        color: '#ffffff',
        marginTop: 5,
        fontSize: 12,
    },

    menuButton: {
        position: 'absolute',
        top: 40,
        right: 20,
        zIndex: 3, // Increased z-index
    },

    menuIcon: {
        color: '#ff0092',
        fontSize: 30,
    },

    menuContent: {
        position: 'absolute',
        top: 80,
        right: 20,
        backgroundColor: '#ffffff',
        borderRadius: 10,
        padding: 10,
        elevation: 5,
        zIndex: 3, // Added z-index
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.25,
    },

    menuItem: {
        paddingVertical: 10,
        paddingHorizontal: 20,
    },

    menuItemText: {
        color: '#000000',
        fontSize: 16,
    },

    titleSection: {
        alignItems: 'center',
        marginTop: 40,
        zIndex: 1, // Lower z-index
    },
});