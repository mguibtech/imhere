import { useState } from "react";
import { View, Text, TextInput, TouchableOpacity, Alert, FlatList } from "react-native";

import { Participant } from "../../components/Participant";

import { styles } from './styles';

export function Home() {
    const [participants, setParticipants] = useState(['Guib'])

    // const participants = ['Guib']

    function handleParticipantAdd() {
        if(participants.includes("Messe")){
            return Alert.alert("Atenção", "Este nome já existe na lista")
        }  
        
        setParticipants(prevSatate =>[...prevSatate, 'Ana']);
    }

    function handleParticipantRemove(name: string) {
        Alert.alert("Remover", `Deseja remover o particiipante ${name}?`, [
            {
                text: 'Sim',
                onPress: () => Alert.alert("Deletado!")
            },
            {
                text: 'Não',
                style: 'cancel'
            }
        ])
    }

    return (
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

           <FlatList
                data={participants}
                keyExtractor={item => item}
                renderItem={({item}) => (
                    <Participant
                        key={item} 
                        name={item} 
                        onRemove={() => handleParticipantRemove(item)} 
                    />
                )}
                showsVerticalScrollIndicator={false}
                ListEmptyComponent={() => (
                    <Text style={styles.listEmptyText}>
                        Ninguém chegou no evento ainda? Adicione participantes a sua lista de presença.
                    </Text>
                )}
            />           

        </View>
    )
}