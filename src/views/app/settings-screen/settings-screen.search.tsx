import * as React from 'react'
import { View } from 'react-native'
import Icon from 'react-native-vector-icons/FontAwesome'
import { TextField } from '../../shared/text-field'
import { color } from '../../theme'

import * as screenStyles from './settings-screen.styles'

interface SearchScreenProps {
  onChangeText?(e: string): void
}

export default class SearchScreen extends React.Component<SearchScreenProps, {}> {
  render() {
    const { onChangeText } = this.props
    return (
      <View style={screenStyles.searchItem}>
        <Icon name="search" size={30} color={color.palette.lightGrey} />
        <TextField
          hideLabel
          style={screenStyles.searchContainer}
          inputStyle={screenStyles.searchInput}
          onChangeText={e => onChangeText(e)}
        />
      </View>
    )
  }
}
