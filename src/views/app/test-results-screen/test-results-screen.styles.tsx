import { ViewStyle, TextStyle } from 'react-native'
import { color, spacing } from '../../theme'

export const ROOT: ViewStyle = {
  flex: 1,
  backgroundColor: color.background,
}

export const navBar: ViewStyle = {
  flexDirection: 'row',
  padding: spacing[4],
}

export const navTitle: ViewStyle = {
  marginLeft: 20,
}

export const content: ViewStyle = {
  flex: 1,
  paddingHorizontal: spacing[6],
  marginTop: spacing[6],
}

export const resultItem: ViewStyle = {
  marginVertical: spacing[3],
}

export const resultText: ViewStyle = {
  flexDirection: 'row',
  justifyContent: 'space-between',
}

export const resultProgress: ViewStyle = {
  flexDirection: 'row',
  marginVertical: spacing[2],
  borderWidth: 1,
  borderColor: color.border,
}

export const progressText: TextStyle = {
  marginRight: spacing[1],
  color: 'white',
  textAlign: 'right',
}

export const divider: ViewStyle = {
  alignItems: 'stretch',
  marginVertical: spacing[4],
  height: 1,
  backgroundColor: color.border,
}

export const Footer: ViewStyle = {
  padding: spacing[6],
  borderTopWidth: 1,
  borderTopColor: color.border,
  backgroundColor: 'white',
}

export const backButton: ViewStyle = {
  backgroundColor: color.button,
}
