import React, { useState } from 'react';
import { View, FlatList, Text } from 'react-native';
import styles from './styles';
import Profile from '../../components/Profile';
import Background from '../../components/Background';
import ButtonAdd from '../../components/ButtonAdd';
import CategorySelect from '../../components/CategroySelect';
import ListHeader from '../../components/ListHeader';
import { Appointment } from '../../components/Appointment';
import ListDivider from '../../components/ListDivider';

const Home = () => {
  const [category, setCategory] = useState('');

  const appointments = [
    {
      id: '1',
      guild: {
        id: '1',
        name: 'Lendários',
        icon: null,
        owner: false
      },
      category: '1',
      date: '22/06 às 20h40',
      description: 'É hoje que vamos chegar ao challenger sem perder nenhuma partida da md10'
    },
    {
      id: '2',
      guild: {
        id: '1',
        name: 'Lendários',
        icon: null,
        owner: true
      },
      category: '1',
      date: '22/06 às 20h40',
      description: 'É hoje que vamos chegar ao challenger sem perder nenhuma partida da md10'
    },
    {
      id: '3',
      guild: {
        id: '1',
        name: 'Lendários',
        icon: null,
        owner: false
      },
      category: '1',
      date: '22/06 às 20h40',
      description: 'É hoje que vamos chegar ao challenger sem perder nenhuma partida da md10'
    },
    {
      id: '4',
      guild: {
        id: '1',
        name: 'Lendários',
        icon: null,
        owner: false
      },
      category: '1',
      date: '22/06 às 20h40',
      description: 'É hoje que vamos chegar ao challenger sem perder nenhuma partida da md10'
    },
    {
      id: '5',
      guild: {
        id: '1',
        name: 'Lendários',
        icon: null,
        owner: false
      },
      category: '1',
      date: '22/06 às 20h40',
      description: 'É hoje que vamos chegar ao challenger sem perder nenhuma partida da md10'
    },
  ]

  function handleCategorySelection(categoryId: string) {
    categoryId === category ? setCategory('') : setCategory(categoryId);
  }

  return (
    <Background>
      <View
        style={styles.container}
      >
        <View
          style={styles.header}
        >
          <Profile />
          <ButtonAdd />
        </View>
        <CategorySelect
          categorySelected={category}
          setCategory={handleCategorySelection}
        />
        <View
          style={styles.content}
        >
          <ListHeader
            title="Partidas agendadas"
            subtitle="Total 6"
          />
          <FlatList
            data={appointments}
            keyExtractor={(item => item.id)}
            renderItem={({ item }) => (
              <Appointment
                data={item}
              />
            )}
            style={styles.matches}
            showsVerticalScrollIndicator={false}
            ItemSeparatorComponent={() => <ListDivider />}
          />
        </View>
      </View>
    </Background>
  );
}

export default Home;