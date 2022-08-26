import { View, Text, TextInput, TouchableOpacity, Alert} from "react-native";

import { Participant } from "../../components/Participant";

import {styles} from './styles';

export function Home(){

    function handleParticipantAdd(){
        console.log('Clicou no botão de adicionar participante');

        Alert.alert("Você clicou", "Este é um botão de add participante")
    }

  return(
    <View style={styles.container}>
        <Text style={styles.eventName}>
            Nome do evento
        </Text>
        <Text style={styles.eventDate}>
            Sexta, 26 de agosto
        </Text>

        <View style={styles.form}>
            <TextInput
                style={styles.input}
                placeholder="Nome do participante"
                placeholderTextColor='#6b6b8b'
            />

            <TouchableOpacity 
                style={styles.button}
                onPress={handleParticipantAdd}
            >
                <Text style={styles.buttonText}>
                    +
                </Text>
            </TouchableOpacity>
        </View>

        <Participant />
        <Participant />
        <Participant />
        <Participant />
    </View>
  )
}