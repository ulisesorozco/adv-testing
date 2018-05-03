import { ViewStyle, StyleSheet } from 'react-native'
import { color, spacing } from '../../../theme'

export const ROOT: ViewStyle = {
  flex: 1,
  padding: spacing[5],
  backgroundColor: color.background,
}

export const container: ViewStyle = {
  flex: 1,
  marginTop: spacing[3],
}

export const content: ViewStyle = {
  padding: spacing[3],
}

export const boderLine: ViewStyle = {
  flexDirection: 'row',
  borderBottomColor: color.palette.lightGrey,
  borderBottomWidth: 1,
  paddingBottom: spacing[2],
  marginVertical: spacing[5],
}

export const checkCircle: ViewStyle = {
  alignItems: 'center',
  justifyContent: 'center',
  backgroundColor: 'rgba(203,208,223,0.4)',
  borderRadius: 15,
  borderColor: color.palette.darkGreen,
  borderWidth: StyleSheet.hairlineWidth,
  width: 30,
  height: 30,
}

export const testButton: ViewStyle = {
  backgroundColor: color.palette.white,
}

export const doneButton: ViewStyle = {
  marginTop: spacing[3],
}
