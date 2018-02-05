import { ImageStyle, ViewStyle } from 'react-native'
import { color, metrics, spacing } from '../../theme'

export const ROOT: ViewStyle = {
  flex: 1,
  backgroundColor: 'white',
}

export const container: ViewStyle = {
  flex: 1,
}

export const logoContainer: ViewStyle = {
  alignItems: 'center',
  justifyContent: 'center',
  width: metrics.screenWidth,
  height: 0.3 * metrics.screenHeight,
}

export const logo: ImageStyle = {
  width: metrics.screenWidth * 0.3,
  height: metrics.screenWidth * 0.3,
  resizeMode: 'contain',
}

export const inputContainer: ViewStyle = {
  width: metrics.screenWidth,
  height: 0.7 * metrics.screenHeight,
}

export const inputContent: ViewStyle = {
  backgroundColor: color.background,
}

export const loginContent: ViewStyle = {
  flex: 1,
  paddingVertical: spacing[7],
  paddingHorizontal: spacing[6],
}

export const signupContent: ViewStyle = {
  flex: 1,
  paddingVertical: spacing[6],
  paddingHorizontal: spacing[6],
}

export const signupButton: ViewStyle = {
  marginTop: spacing[3],
}

export const inputTextField: ViewStyle = {
  padding: 0,
  paddingVertical: 8,
}

export const inputText: ViewStyle = {
  height: 50,
  borderWidth: 0.5,
  borderRadius: 3,
  borderColor: 'rgb(85, 97, 95)',
  backgroundColor: '#fff',
}

export const submitButton: ViewStyle = {
  alignSelf: 'flex-end',
}
