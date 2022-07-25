import { Image, Text, View } from "react-native";
import { global } from "../../css/Styles.js";

export default function Main(){
    return (
        <View style={global.main}>
            <View style={global.txtbeneficio}>
                <Text style={global.txtbeneficio2}>O que deseja fazer?</Text>
                <Text style={global.txtbeneficio3}>Veja Benefícios</Text>
            </View>
            <View style={global.main2}>
                <View style={global.boxopcoes}>
                    <Image source={require("../../assets/card.png")} style={global.imgcard}></Image>
                    <Text style={global.txtcartao}>Recarga Cartão pré-pago</Text>
                </View>
                <View style={global.boxtranferencia}>
                    <Image source={require("../../assets/transferencia.png")} style={global.imgtransferencia}></Image>
                    <Text style={global.txttransferencia}>Transferência Bancária</Text>
                </View>
            </View>
            <View style={global.main2}>
                <View style={global.boxopcoes}>
                    <Image source={require("../../assets/dinheiro.png")} style={global.imgcard}></Image>
                    <Text style={global.txtcartao}>Depositar Dinheiro</Text>
                </View>
                <View style={global.boxtranferencia}>
                    <Image source={require("../../assets/chat.png")} style={global.imgtransferencia}></Image>
                    <Text style={global.txttransferencia}>Atendimento/ Chat</Text>
                </View>
            </View>
            <View style={global.main2}>
                <View style={global.boxopcoes}>
                    <Image source={require("../../assets/barcode.png")} style={global.imgcard}></Image>
                    <Text style={global.txtcartao}>Pagamento de Boletos</Text>
                </View>
                <View style={global.boxtranferencia}>
                    <Image source={require("../../assets/pix.png")} style={global.imgtransferencia}></Image>
                    <Text style={global.txttransferencia}>Pagamento/Transferência PIX</Text>
                </View>
            </View>
            
        </View>
    )
}