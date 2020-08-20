import React from 'react';
import { View, Image, Text } from 'react-native';
import { RectButton } from 'react-native-gesture-handler';

import heartOutLineIcon from '../../assets/images/icons/heart-outline.png';
import unfavoriteIcon from '../../assets/images/icons/unfavorite.png';
import whatsappIcon from '../../assets/images/icons/whatsapp.png';

import styles from './styles';

function TeacherItem() {
    return(
        <View style={styles.container}>
            <View style={styles.profile}>
                <Image
                    style={styles.avatar}
                    source={{ uri: 'https://github.com/RicardoEstudante.png' }}
                />

                <View style={styles.profileInfo}>
                    <Text style={styles.name}>Ricardo Carvalho</Text>
                    <Text style={styles.subject}>Matematica</Text>
                </View>
            </View>
            
            <Text style={styles.bio}>
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. 
                {'\n'}{'\n'}
                Officia distinctio eaque similique dolores rerum architecto ea, quos quibusdam nam mollitia suscipit error explicabo hic!
            </Text>

            <View style={styles.footer}>
                <Text style={styles.price}>
                    Preço/hora {'   '}
                    <Text style={styles.buttonsContainer}>R$ 20,00</Text>
                </Text>

                <View style={styles.buttonsContainer}>
                    <RectButton style={[styles.favoriteButton, styles.favorited]}>
                       {/*<Image source={heartOutLineIcon} /> */}
                        <Image source={unfavoriteIcon} />
                    </RectButton>

                    <RectButton style={styles.contactButton}>
                        <Image source={whatsappIcon} />
                        <Text style={styles.contactButtonText}>Entrar em contato</Text>
                    </RectButton>
                </View>
            </View>
        </View>
    )
}

export default TeacherItem;