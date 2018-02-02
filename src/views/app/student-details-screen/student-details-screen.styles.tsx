import { ViewStyle } from 'react-native'
import { color, spacing } from '../../theme'

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

export const scheduledItem: ViewStyle = {
  flexDirection: 'row',
  justifyContent: 'space-between',
  borderWidth: 1,
  borderRadius: 2,
  borderColor: color.border,
  padding: spacing[3],
  marginBottom: spacing[3],
}

export const scheduledFooter: ViewStyle = {
  marginLeft: 'auto',
  alignSelf: 'center',
}

export const completedItem: ViewStyle = {
  flexDirection: 'row',
  marginBottom: spacing[3],
}

export const completedHeader: ViewStyle = {
  flex: 1,
  alignItems: 'center',
  justifyContent: 'center',
  borderWidth: 1,
  borderTopLeftRadius: 2,
  borderBottomLeftRadius: 2,
  borderColor: color.borderGreen,
  backgroundColor: color.palette.lightGreen,
}

export const completedCenter: ViewStyle = {
  flex: 3,
  borderTopWidth: 1,
  borderBottomWidth: 1,
  borderColor: color.border,
  padding: spacing[3],
}

export const completedFooter: ViewStyle = {
  flex: 1,
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
