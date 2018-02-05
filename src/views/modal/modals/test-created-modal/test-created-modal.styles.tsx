import { ViewStyle, TextStyle } from 'react-native'
import { color, spacing } from '../../../theme'

export const ROOT: ViewStyle = {
  flex: 1,
  padding: spacing[6],
  borderRadius: 4,
  backgroundColor: color.background,
}

export const container: ViewStyle = {
  flex: 1,
}

export const content: ViewStyle = {
  padding: spacing[3],
}

export const checked: ViewStyle = {
  alignSelf: 'center',
  width: 80,
  height: 80,
  marginVertical: spacing[6],
  padding: 20,
  borderRadius: 40,
  backgroundColor: color.palette.darkGreen,
}

export const infoContainer: ViewStyle = {
  flex: 1,
}

export const centerText: TextStyle = {
  textAlign: 'center',
}

export const marginVertical: ViewStyle = {
  marginVertical: spacing[3],
}

export const doneButton: ViewStyle = {
  alignSelf: 'center',
  backgroundColor: 'transparent',
}

export const doneButtonText: TextStyle = {
  color: color.palette.darkGreen,
  textDecorationStyle: 'solid',
}
