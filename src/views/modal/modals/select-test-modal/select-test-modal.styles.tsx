import { ViewStyle } from 'react-native'
import { color, spacing } from '../../../theme'

export const ROOT: ViewStyle = {
  flex: 1,
  padding: spacing[5],
  backgroundColor: color.background,
}

export const container: ViewStyle = {
  flex: 1,
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
