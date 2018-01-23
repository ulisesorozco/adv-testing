import * as React from 'react'
import { View, ViewStyle } from 'react-native'
import { color } from '../theme'

const ROOT: ViewStyle = {
  flex: 1,
  backgroundColor: color.background,
  justifyContent: 'center',
  alignItems: 'center',
}

export function Preloader() {
  return <View style={ROOT} />
}
