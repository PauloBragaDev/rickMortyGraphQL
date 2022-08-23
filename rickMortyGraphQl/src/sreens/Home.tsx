import {
    View, Text, FlatList
} from 'react-native';

import { useQuery } from '@apollo/client';
import INFO_PERSON from '../queries';
import Card from '../components/card';

export default function Home() {

    const {loading, error, data} = useQuery(INFO_PERSON);

    return(
        <View>
            { loading && <Text>Loading ...</Text>}
            { error && <Text>Errro ...</Text>}
            { data && 
                <FlatList
                    data={data.characters.results}
                    renderItem={({item})=><Card card={item}/>}
                />
            }
            <Text>Teste</Text>
            <View></View>
        </View>
    );
}