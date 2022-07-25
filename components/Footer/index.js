import { Image, Text, View } from "react-native";
import { global } from "../../css/Styles.js";

export default function Footer(){
    return (
        <View style={global.footer}>
            <View style={global.home1}>
            <Image source={require("../../assets/home.png")} style={global.imghome2}/>
            <Text style={global.txthome}>Início</Text>
            </View>
            <View style={global.home1}>
            <Image source={require("../../assets/extrato.png")} style={global.imgextrato}/>
            <Text style={global.txthome2}>Extrato</Text>
            </View>
            <View style={global.home1}>
            <Image source={require("../../assets/vendas.png")} style={global.imgvendas}/>
            <Text style={global.txthome2}>Vendas</Text>
            </View>
            <View style={global.home1}>
            <Image source={require("../../assets/card2.png")} style={global.imgcartoes}/>
            <Text style={global.txthome2}>Cartões</Text>
            </View>
            <View style={global.home1}>
            <Image source={require("../../assets/opcoes.png")} style={global.imgopcoes}/>
            <Text style={global.txthome2}>Opções</Text>
            </View>
        </View>
)}