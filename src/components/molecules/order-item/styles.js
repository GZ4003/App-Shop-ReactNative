import { StyleSheet } from "react-native";
import { colors } from "../../../constants/themes";

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        marginHorizontal: 20,
        marginVertical: 10
    },
    header: {
        flex: 1,
    },
    date: {
        fontSize: 20,
        fontFamily: "OpenSans-Bold",
        color: '#000'
    },
    details: {
        flex: 1,
        flexDirection: "row",
        flexWrap: "wrap",
        alignItems: 'center',
        color:colors.textColor,
        justifyContent: 'space-between',
    },
    buttonsContainer: {
        flexDirection: "row",
        color:colors.textColor,
        alignItems: 'center',
    }
})