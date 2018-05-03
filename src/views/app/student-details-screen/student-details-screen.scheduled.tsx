import * as React from 'react'
import { TouchableOpacity, View } from 'react-native'
import Icon from 'react-native-vector-icons/FontAwesome'
import moment from 'moment'
import { isNil } from 'ramda'
import { Text } from '../../shared/text'
import { color } from '../../theme'

import * as screenStyles from './student-details-screen.styles'

interface ScheduledScreenProps {
  exam?: any
  type?: any
  onPress?: () => void
}

export default class ScheduledScreen extends React.Component<ScheduledScreenProps, {}> {
  render() {
    const { exam, type } = this.props

    if (isNil(exam)) {
      return <View />
    }

    return (
      <TouchableOpacity style={screenStyles.scheduledItem} onPress={this.props.onPress}>
        <View>
          <Text text={`${type.exam_type} ${type.exam_version}`} style={screenStyles.itemHeader} />
          <Text
            text={`ID: ${exam.id} | ${moment(exam.updated_at).format('MM/DD/YYYY')}`}
            style={screenStyles.itemDesc}
          />
        </View>
        <View style={screenStyles.scheduledFooter}>
          <Icon name="caret-right" size={20} color={color.palette.darkGreen} />
        </View>
      </TouchableOpacity>
    )
  }
}
