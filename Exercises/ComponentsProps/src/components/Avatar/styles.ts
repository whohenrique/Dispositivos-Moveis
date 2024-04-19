import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    container: {
        width: '100%',
        height: 300,
        flexDirection: "column",
        backgroundColor: '#D2D2D2',
        justifyContent: "space-around",
        alignItems: "center",  
    },
    center: {
        justifyContent: "center",
        alignItems: "center"
    },
    imageContainer: {
        width: 150,
        height: 150,
        borderRadius: 100
    },
    titleContainer: {
        marginTop: 10,
        fontSize: 24,
        fontWeight: "700"
    },
    containerButtons: {
        width: '100%',
        flexDirection: 'row',
        justifyContent: 'space-around'
    },
})