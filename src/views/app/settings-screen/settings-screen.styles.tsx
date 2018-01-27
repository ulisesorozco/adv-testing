import { ImageStyle, ViewStyle, TextStyle } from 'react-native'
import { color, metrics, spacing } from '../../theme'

export const ROOT: ViewStyle = {
  flex: 1,
  backgroundColor: color.background,
  padding: spacing[4],
}

export const container: ViewStyle = {
  flex: 1,
}

export const header: TextStyle = {
  fontSize: 31,
}

export const inputContainer: ViewStyle = {
  padding: spacing[3],
}

export const inputContent: ViewStyle = {
  backgroundColor: color.background,
}

export const inputTextField: ViewStyle = {
  flex: 1,
  padding: 0,
  paddingVertical: 8,
}

export const inputText: ViewStyle = {
  height: 50,
  borderWidth: 1,
  borderRadius: 3,
  borderColor: 'rgb(85, 97, 95)',
  backgroundColor: '#fff',
}

export const testItem: ViewStyle = {
  flexDirection: 'row',
  alignItems: 'center',
  justifyContent: 'space-between',
  marginTop: spacing[3],
  padding: spacing[3],
  borderRadius: 3,
  borderWidth: 1,
  borderColor: color.palette.lightGrey,
}

export const testCircle: ViewStyle = {
  alignItems: 'center',
  justifyContent: 'center',
  backgroundColor: color.background,
  borderColor: color.palette.lightGrey,
  borderWidth: 1,
  borderRadius: metrics.screenWidth / 20,
  width: metrics.screenWidth / 10,
  height: metrics.screenWidth / 10,
}
