import { TextStyle, ViewStyle } from 'react-native'
import { color, spacing } from '../../../theme'

export const ROOT: ViewStyle = {
  flex: 1,
  padding: spacing[4],
  borderRadius: 4,
  backgroundColor: color.background,
}

export const header: ViewStyle = {
  flexDirection: 'row',
  justifyContent: 'space-between',
  alignItems: 'center',
}

export const closeButton: ViewStyle = {
  justifyContent: 'center',
  alignItems: 'center',
  width: 35,
  height: 35,
  borderRadius: 4,
  backgroundColor: color.wrong,
}

export const container: ViewStyle = {
  flex: 1,
  paddingVertical: spacing[6],
}

export const content: ViewStyle = {
  padding: spacing[4],
}

export const inputTextField: ViewStyle = {
  paddingTop: spacing[6],
}

export const inputText: ViewStyle = {
  height: 50,
  borderWidth: 0.5,
  borderRadius: 3,
  borderColor: 'rgb(85, 97, 95)',
  backgroundColor: '#fff',
}
