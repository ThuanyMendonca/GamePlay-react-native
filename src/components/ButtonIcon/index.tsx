import React from 'react';
import {
    Text,
    Image,
    View,
    TouchableOpacity,
    TouchableOpacityProps
} from 'react-native';
import DiscordImg from '../../assets/discord.png';
import { styles } from './styles';

// interface (sem o =)
type Props = TouchableOpacityProps & {
    // opcionais (?)
    title: string;
}
// pegando propriedade title que foi definido e todas propriedades do TouchableOpacityProps
export function ButtonIcon({ title, ...rest } : Props){
    return(
        <TouchableOpacity 
        style={styles.container}
        {...rest}
        >
            <View style={styles.iconWrapper}>
                <Image source={DiscordImg} style={styles.icon} />
            </View>

            <Text style={styles.title}>
                { title }
            </Text>
        </TouchableOpacity>
        
    )
}
