import * as React from 'react'
import { View } from 'react-native'
import Icon from 'react-native-vector-icons/FontAwesome'
import { TextField } from '../text-field'
import { color } from '../../theme'

import * as screenStyles from './search-box.styles'

interface SearchBoxProps {
  onChangeText?(e: string): void
}

export class SearchBox extends React.Component<SearchBoxProps, {}> {
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

export default SearchBox
