import React from 'react';
import { View, ScrollView } from 'react-native';

import TeacherItem from '../TeacherItem';
import PageHeader from '../PageHeader';

import styles from './styles';


function TeacherList() {
    return (
        <View style={styles.container}>
            <PageHeader title="Proffys disponíveis"/>
            
            <ScrollView
                style={styles.teacherList}
                contentContainerStyle={{
                    paddingHorizontal: 16,
                    paddingBottom: 16,
                }}
            >
                <TeacherItem />
                <TeacherItem />
                <TeacherItem />
                <TeacherItem />
            </ScrollView>
        </View>
    );
}

export default TeacherList;