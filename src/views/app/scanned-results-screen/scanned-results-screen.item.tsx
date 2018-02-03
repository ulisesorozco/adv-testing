import * as React from 'react'
import { TouchableOpacity, View } from 'react-native'
import Icon from 'react-native-vector-icons/FontAwesome'
import { Text } from '../../shared/text'
import { color } from '../../theme'

import * as screenStyles from './scanned-results-screen.styles'

interface ResultProps {
  score?: number
  name?: string
  ID?: string
  date?: string
  onPress?: () => void
}

export default class Result extends React.Component<ResultProps, {}> {
  public static defaultProps: Partial<ResultProps> = {
    score: 0,
    name: 'Test',
    ID: 'ID1234',
    date: '10/30/2017',
  }

  render() {
    const { score, name, ID, date, onPress } = this.props
    return (
      <TouchableOpacity style={screenStyles.resultItem} onPress={onPress}>
        <View style={screenStyles.resultHeader}>
          <Text text={score.toString()} />
        </View>
        <View style={screenStyles.resultCenter}>
          <Text text={name} />
          <Text text={`ID: ${ID} | ${date}`} />
        </View>
        <View style={screenStyles.resultFooter}>
          <Icon name="caret-right" size={20} color={color.palette.darkGreen} />
        </View>
      </TouchableOpacity>
    )
  }
}
