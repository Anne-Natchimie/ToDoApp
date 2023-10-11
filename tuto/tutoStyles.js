import { StyleSheet } from "react-native";

export default StyleSheet.create({
    container:{
        flex: 1,
        backgroundColor: "#000",
        flexDirection: "row",
        // alignItems: "center",
        justifyContent: "center",
    },
    box1:{
        flex: 1,
        width: 50,
        height: 50,
        backgroundColor: "orange", 
        marginRight: 10,
    },
    box2:{
        width: 50,
        height: 50,
        backgroundColor: "purple", 
        marginRight: 10,
    },
    box3:{
        width: 50,
        height: 50,
        backgroundColor: "blue",
    },
    subContainer:{
        width: 350,
        height: 50,
        backgroundColor: "white",
        flexDirection: "row", 
        alignItems: "center",
        justifyContent: "space-between",
    },
    container2:{
        width: 350,
        height: 400,
        backgroundColor: "gray",
        justifyContent: "flex-end",
        borderTopLeftRadius: 20,
        borderTopRightRadius: 20,
    }
})