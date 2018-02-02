import { TextStyle, ViewStyle } from 'react-native'
import { color, metrics, spacing } from '../../theme'

export const ROOT: ViewStyle = {
  flex: 1,
  backgroundColor: color.background,
  padding: spacing[4],
}

export const navBar: ViewStyle = {
  flexDirection: 'row',
  padding: spacing[3],
}

export const boderLine: ViewStyle = {
  flexDirection: 'row',
  borderBottomColor: color.palette.lightGrey,
  borderBottomWidth: 1,
  paddingBottom: spacing[2],
  marginVertical: spacing[5],
}

export const studentItem: ViewStyle = {
  flexDirection: 'row',
  justifyContent: 'space-between',
  alignItems: 'center',
  height: 60,
  marginBottom: spacing[3],
  padding: spacing[3],
  borderWidth: 1,
  borderRadius: 2,
  borderColor: color.border,
  backgroundColor: 'white',
}

export const studentFooter: ViewStyle = {
  marginLeft: 'auto',
  alignSelf: 'center',
}
