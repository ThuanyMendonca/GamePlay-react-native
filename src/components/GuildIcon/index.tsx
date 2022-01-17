import React from 'react';
import { Image } from 'react-native';

import { styles } from './styles';


export function GuildIcon(){
    const uri = 'https://xboxplay.games/uploadStream/24408.jpg';
    return(
        <Image 
        source={{ uri }}
        style={styles.image}
        resizeMode='cover'
        />
    );
}
