import * as React from 'react'
import { View } from 'react-native'
import { Text } from '../../shared/text'
import { NavigationScreenProps } from 'react-navigation'

import * as screenStyles from './students-screen.styles'

export interface StudentsScreenProps extends NavigationScreenProps<{}> {}

export class StudentsScreen extends React.Component<StudentsScreenProps, {}> {
  render() {
    return (
      <View style={screenStyles.ROOT}>
        <Text preset="header" tx="studentsScreen.header" />
      </View>
    )
  }
}
