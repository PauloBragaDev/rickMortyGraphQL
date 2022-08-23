import { StyleSheet, Dimensions } from "react-native";

const { height } = Dimensions.get('window');

export default StyleSheet.create({
    card:{
        height: height - 100,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#fff',
        borderRadius:5,
        shadowColor:'#000',
        shadowOffset:{
            width:0,
            height:2
        },
        shadowRadius:7,
        shadowOpacity:0.5,
        elevation:2,
        marginBottom:10
    },
    image:{
        borderRadius:2,
        flex:1,
        elevation:2,
        marginBottom:2,
        width:'100%'
    },
    imageDescription:{
        justifyContent:'flex-end',
        alignItems:'flex-start',
        flexDirection:'column',
        height:'100%',
        position:'absolute',
        left:10,
        bottom:10
    },
    text:{
        fontSize:20,
        textAlign:'center',
        textShadowColor:'#000',
        textShadowRadius:15,
        color:'#fff'

    }, 
    cardHeader:{
        width:'80%'
    }
})