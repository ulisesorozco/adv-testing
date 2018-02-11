import * as React from 'react'
import { View } from 'react-native'
import Icon from 'react-native-vector-icons/FontAwesome'
import { color } from '../../theme'

import * as screenStyles from './settings-screen.styles'

export interface CheckBoxProps {
  checked?: boolean
}

export class CheckBox extends React.Component<CheckBoxProps, {}> {
  public static defaultProps: Partial<CheckBoxProps> = {
    checked: false,
  }

  render() {
    const { checked } = this.props
    return (
      <View
        style={[
          screenStyles.checkCircle,
          { backgroundColor: checked ? color.darkYellow : color.transparent },
        ]}
      >
        {checked && <Icon name="check" size={20} color={color.palette.white} />}
      </View>
    )
  }
}
