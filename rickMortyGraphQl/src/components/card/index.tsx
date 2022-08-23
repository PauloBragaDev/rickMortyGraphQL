import { View, Text, Image, SafeAreaView } from 'react-native';
import styles from './style'

import { IProps } from '../../types';

export default function Card({card}:IProps){
    return (
        <SafeAreaView style={styles.card}>
                    <Image 
                        source={{ uri: card.image }}
                        style={styles.image}
                    />
     
            <View style={styles.imageDescription}>
                <Text style={styles.text}>
                    {`${card.name}, ${card.gender}`}
                </Text>
            </View>
        </SafeAreaView>
    );
}