import * as React from 'react'
import { TouchableOpacity, View } from 'react-native'
import Icon from 'react-native-vector-icons/FontAwesome'
import moment from 'moment'
import { Text } from '../../shared/text'

import * as screenStyles from './scanned-results-screen.styles'

interface ResultProps {
  score?: number
  name?: string
  id?: number
  date?: string
  onPress?: () => void
}

export default class Result extends React.Component<ResultProps, {}> {
  public static defaultProps: Partial<ResultProps> = {
    score: 0,
    name: 'Test',
    id: 1,
    date: '10/30/2017',
  }

  render() {
    const { score, name, id, date, onPress } = this.props
    return (
      <TouchableOpacity style={screenStyles.resultItem} onPress={onPress}>
        <View style={screenStyles.resultHeader}>
          <Text text={score.toString()} style={screenStyles.headerText} />
        </View>
        <View style={screenStyles.resultCenter}>
          <Text text={name} style={screenStyles.headerText} />
          <Text
            text={`ID: ${id} | ${moment(date).format('MM/DD/YYYY')}`}
            style={screenStyles.infoText}
          />
        </View>
        <View style={screenStyles.resultFooter}>
          <Icon name="caret-right" size={20} color="rgb(85,97,95)" />
        </View>
      </TouchableOpacity>
    )
  }
}
