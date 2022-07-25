import { Image, Text, View } from "react-native";
import { global } from "../../css/Styles.js";

export default function Header(){
    return(
        <View style={global.header2}>
            <View style={global.header}>
                <Text style={global.txtpagbank}> PagBank </Text>
                <Image source={require("../../assets/seta.png")} style={global.imgseta} />
                <Image source={require("../../assets/notificação.png")} style={global.imgnoti} />
            </View>

                <Text style={global.txtsaldo1}> Saldo Disponível </Text>

            <View style={global.saldo}>
                <Text style={global.txtsaldo2}> R$ 3.000 </Text>
                <Image source={require("../../assets/olho.png")} style={global.imgolho} />
            </View>

            <View style={global.txtcomplemento1}>
                <Text style={global.txtbloqueado}> Bloqueado </Text> 
                <Text style={global.txtreceber}> A receber </Text>
            </View>

            <View style={global.txtcomplemento2}>
                <Text style={global.txtbloqueado2}> R$ 20,65 </Text>
                <Text style={global.txtreceber2}> R$ 1.200,34 </Text>
                <Image source={require("../../assets/pergunte.png")} style={global.imgpergunte} />
            </View>

            <View style={global.txtcashback1}>
                <Text style={global.txtcashback2}> CashBack dos últimos 30 dias </Text>
                <Text style={global.txtcashback3}> R$ 52,59 </Text>
                <Image source={require("../../assets/pergunte.png")} style={global.imgpergunte2} />
            </View>
        </View>
    );
}
