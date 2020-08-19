import React from 'react';
import { View } from 'react-native';

import TeacherItem from '../TeacherItem';
import PageHeader from '../PageHeader';

import styles from './styles';

function TeacherList() {
    return (
        <View style={styles.container}>
            <PageHeader title="Proffys disponíveis"/>
            <TeacherItem />
        </View>
    );
}

export default TeacherList;