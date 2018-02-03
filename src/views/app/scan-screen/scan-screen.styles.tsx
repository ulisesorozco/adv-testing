import { ViewStyle } from 'react-native'
import { color, spacing } from '../../theme'

export const ROOT: ViewStyle = {
  flex: 1,
  backgroundColor: color.background,
}

export const navBar: ViewStyle = {
  flexDirection: 'row',
  padding: spacing[4],
}

export const studentItem: ViewStyle = {
  flexDirection: 'row',
  alignItems: 'center',
  margin: spacing[2],
  padding: spacing[2],
  borderWidth: 0.5,
  borderRadius: 5,
  borderColor: color.border,
}

export const studentText: ViewStyle = {
  paddingHorizontal: spacing[2],
}

export const content: ViewStyle = {
  flex: 1,
  alignItems: 'center',
  paddingHorizontal: spacing[6],
}

export const footer: ViewStyle = {
  flexDirection: 'row',
  padding: spacing[6],
  borderTopWidth: 1,
  borderTopColor: color.border,
  backgroundColor: 'white',
}

export const closeButton: ViewStyle = {
  padding: spacing[4],
  marginRight: spacing[4],
  borderRadius: 4,
  backgroundColor: color.wrong,
}

export const doneButton: ViewStyle = {
  flex: 1,
  borderRadius: 4,
  backgroundColor: color.button,
}
