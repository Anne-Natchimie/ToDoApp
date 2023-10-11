import { Dimensions, StyleSheet } from "react-native";

const {width} = Dimensions.get("window")

export default StyleSheet.create({
    container:{
        flex: 1, 
    },
    cardContainer:{
        // backgroundColor: "purple",
        padding: 10, 
    },
    cardImage:{
        width: width - 20,
        height: ((width - 20) / 3) * 1.5, 
        // backgroundColor: "pink",
        borderRadius: 20,
        alignItems: "flex-end",
    },
    favoriteIcon:{
        width: 40,
        height: 40,
        // backgroundColor: "rgba(250, 250, 250, 0.5)",
        margin: 20, 
        borderRadius: 10,
        alignItems: "center",
        justifyContent: "center",
    },
    containerTitlePrice:{
        flexDirection: "row",
        height: 30,
        width: width - 20, 
        // backgroundColor: "#ccc",
        marginTop: 10,
        justifyContent: "space-between",
        paddingHorizontal: 20,
        alignItems: "center",
    },
    title:{
        fontSize: 18, 
        fontWeight: "700",
    },
    price:{
        fontSize: 18, 
        fontWeight: "700",
        color: "orange",
    },
    containerBrand:{
        flexDirection: "row",
        height: 50,
        width: width - 20, 
        // backgroundColor: "#ccc",
        marginTop: 10,
        paddingHorizontal: 20,
        alignItems: "center",
    },
    brand:{
        color: "orange",
        backgroundColor: "#f9eee8",
        padding: 5,
        margin: 5, 
        borderRadius: 5,
    },

})