import { ViewStyle } from 'react-native'
import { color, spacing } from '../../theme'

export const ROOT: ViewStyle = {
  flex: 1,
  backgroundColor: color.background,
}

export const navBar: ViewStyle = {
  flexDirection: 'row',
  padding: spacing[6],
}

export const content: ViewStyle = {
  flex: 1,
  paddingHorizontal: spacing[6],
}

export const boderLine: ViewStyle = {
  flexDirection: 'row',
  borderBottomColor: color.palette.lightGrey,
  borderBottomWidth: 1,
  paddingBottom: spacing[2],
  marginVertical: spacing[5],
}

export const resultItem: ViewStyle = {
  flexDirection: 'row',
  marginBottom: spacing[3],
  height: 60,
}

export const resultHeader: ViewStyle = {
  alignItems: 'center',
  justifyContent: 'center',
  width: 60,
  borderWidth: 1,
  borderTopLeftRadius: 2,
  borderBottomLeftRadius: 2,
  borderColor: color.borderGreen,
  backgroundColor: color.palette.lightGreen,
}

export const resultCenter: ViewStyle = {
  flex: 1,
  borderTopWidth: 1,
  borderBottomWidth: 1,
  borderColor: color.border,
  padding: spacing[3],
}

export const resultFooter: ViewStyle = {
  alignItems: 'flex-end',
  justifyContent: 'center',
  padding: spacing[3],
  borderTopWidth: 1,
  borderRightWidth: 1,
  borderBottomWidth: 1,
  borderTopRightRadius: 2,
  borderBottomRightRadius: 2,
  borderColor: color.border,
}

export const submitButton: ViewStyle = {
  padding: spacing[3],
  backgroundColor: color.button,
  borderRadius: 2,
}

export const footer: ViewStyle = {
  padding: spacing[6],
  backgroundColor: 'white',
  borderTopWidth: 1,
  borderTopColor: color.border,
}
