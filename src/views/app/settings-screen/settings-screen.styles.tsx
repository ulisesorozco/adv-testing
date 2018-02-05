import { ViewStyle, TextStyle } from 'react-native'
import { color, metrics, spacing } from '../../theme'

export const ROOT: ViewStyle = {
  flex: 1,
  backgroundColor: color.background,
  paddingTop: spacing[4],
  paddingHorizontal: spacing[4],
}

export const container: ViewStyle = {
  flex: 1,
  padding: spacing[3],
}

export const header: TextStyle = {
  marginTop: spacing[6],
}

export const inputContainer: ViewStyle = {
  flex: 1,
  paddingTop: spacing[3],
}

export const inputContent: ViewStyle = {
  paddingVertical: spacing[4],
  backgroundColor: color.background,
}

export const inputTextField: ViewStyle = {
  paddingVertical: spacing[4],
}

export const inputText: ViewStyle = {
  height: 50,
  borderWidth: 0.5,
  borderRadius: 3,
  borderColor: 'rgb(85, 97, 95)',
  backgroundColor: '#fff',
}

export const boderLine: ViewStyle = {
  flexDirection: 'row',
  borderBottomColor: color.palette.lightGrey,
  borderBottomWidth: 1,
  marginTop: spacing[5],
}

export const button: ViewStyle = {
  marginTop: spacing[4],
  marginBottom: spacing[5],
}
