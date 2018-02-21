import { ViewStyle, StyleSheet } from 'react-native'
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
  borderBottomWidth: StyleSheet.hairlineWidth,
  paddingBottom: spacing[2],
  marginVertical: spacing[5],
}

export const resultItem: ViewStyle = {
  flexDirection: 'row',
  marginBottom: spacing[3],
  height: 60,
  shadowOffset: { width: 0, height: 2.5 },
  shadowColor: color.palette.darkGreen,
  shadowOpacity: 0.15,
  shadowRadius: 2,
}

export const resultHeader: ViewStyle = {
  alignItems: 'center',
  justifyContent: 'center',
  borderColor: color.border,
  borderWidth: StyleSheet.hairlineWidth,
  borderTopLeftRadius: 2,
  borderBottomLeftRadius: 2,
  backgroundColor: color.palette.lightGreen,
  width: 60,
}

export const resultCenter: ViewStyle = {
  flex: 1,
  borderTopWidth: StyleSheet.hairlineWidth,
  borderBottomWidth: StyleSheet.hairlineWidth,
  borderColor: color.border,
  padding: spacing[3],
}

export const resultFooter: ViewStyle = {
  alignItems: 'flex-end',
  justifyContent: 'center',
  padding: spacing[3],
  borderTopWidth: StyleSheet.hairlineWidth,
  borderRightWidth: StyleSheet.hairlineWidth,
  borderBottomWidth: StyleSheet.hairlineWidth,
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
  borderTopWidth: StyleSheet.hairlineWidth,
  borderTopColor: color.border,
}
