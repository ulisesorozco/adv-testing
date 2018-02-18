import { ViewStyle, TextStyle, StyleSheet } from 'react-native'
import { color, spacing, metrics } from '../../theme'

export const ROOT: ViewStyle = {
  flex: 1,
  backgroundColor: color.background,
}

export const content: ViewStyle = {
  padding: spacing[4],
}

export const navBar: ViewStyle = {
  flexDirection: 'row',
  marginTop: spacing[4],
  paddingTop: spacing[4],
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
  borderWidth: 0.5,
  borderRadius: 2,
  borderColor: color.border,
  backgroundColor: color.palette.white,
  padding: spacing[3],
  marginBottom: spacing[3],
  shadowOffset: { width: 0, height: 2.5 },
  shadowColor: color.palette.darkGreen,
  shadowOpacity: 0.15,
  shadowRadius: 2,
}

export const scheduledFooter: ViewStyle = {
  marginLeft: 'auto',
  alignSelf: 'center',
}

export const completedItem: ViewStyle = {
  flexDirection: 'row',
  marginBottom: spacing[3],
  backgroundColor: color.palette.white,
  shadowOffset: { width: 0, height: 2.5 },
  shadowColor: color.palette.darkGreen,
  shadowOpacity: 0.15,
  shadowRadius: 2,
}

export const completedHeader: ViewStyle = {
  flex: 1,
  alignItems: 'center',
  justifyContent: 'center',
  borderWidth: 0.5,
  borderTopLeftRadius: 2,
  borderBottomLeftRadius: 2,
  borderColor: color.border,
  backgroundColor: color.palette.lightGreen,
}

export const scoreText: TextStyle = {
  fontSize: 15,
  fontWeight: '900',
  color: color.palette.darkGreen,
}

export const completedCenter: ViewStyle = {
  flex: 3,
  borderTopWidth: 0.5,
  borderBottomWidth: 1,
  borderColor: color.border,
  padding: spacing[3],
}

export const completedFooter: ViewStyle = {
  flex: 1,
  alignItems: 'flex-end',
  justifyContent: 'center',
  padding: spacing[3],
  borderTopWidth: 0.5,
  borderRightWidth: 1,
  borderBottomWidth: 1,
  borderTopRightRadius: 2,
  borderBottomRightRadius: 2,
  borderColor: color.border,
}

export const submitContainer: ViewStyle = {
  backgroundColor: 'white',
  borderTopColor: 'rgb(85,97,95)',
  borderTopWidth: StyleSheet.hairlineWidth,
  bottom: 0,
  padding: spacing[4],
  position: 'absolute',
  width: metrics.screenWidth,
}

export const submitButton: ViewStyle = {
  padding: spacing[3],
  backgroundColor: color.button,
  borderRadius: 2,
}
