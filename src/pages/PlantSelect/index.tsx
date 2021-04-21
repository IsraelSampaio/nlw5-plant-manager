import React from 'react'
import { View, StyleSheet, FlatList } from 'react-native'

import PlantSelect from './styles'

import Header from '../../components/Header'
import EnvironmentButton from '../../components/EnvironmentButton'

const PlantSelectPage: React.FC = () => {
  return (
    <PlantSelect>
      <PlantSelect.Header>
        <Header />

        <PlantSelect.Title>Em qual ambiente</PlantSelect.Title>

        <PlantSelect.Subtitle>
          você quer colocar sua planta?
        </PlantSelect.Subtitle>
      </PlantSelect.Header>

      <View>
        <FlatList
          data={[1, 2, 3, 4, 5, 6, 7, 8]}
          renderItem={({ item }) => (
            <EnvironmentButton key={item} title="Cozinha" />
          )}
          horizontal
          showsHorizontalScrollIndicator={false}
          nestedScrollEnabled
          contentContainerStyle={styles.environmentList}
        />
      </View>
    </PlantSelect>
  )
}

const styles = StyleSheet.create({
  environmentList: {
    height: 40,
    paddingBottom: 5,
    paddingLeft: 24,
    marginVertical: 32
  }
})

export default PlantSelectPage
