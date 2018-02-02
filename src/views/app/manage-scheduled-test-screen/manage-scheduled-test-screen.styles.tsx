import { TextStyle, ViewStyle } from 'react-native'
import { color, spacing } from '../../theme'

export const ROOT: ViewStyle = {
  flex: 1,
  backgroundColor: color.background,
}

export const top: ViewStyle = {
  padding: spacing[5],
}

export const navBar: ViewStyle = {
  flexDirection: 'row',
}

export const navTitle: ViewStyle = {
  marginLeft: 20,
}

export const manageContainer: ViewStyle = {
  borderWidth: 1,
  borderColor: color.border,
  backgroundColor: 'white',
  marginBottom: spacing[3],
  marginTop: spacing[8],
}

export const testType: ViewStyle = {
  padding: spacing[3],
}

export const testDetail: ViewStyle = {
  flexDirection: 'row',
  padding: spacing[3],
}

export const testButtons: ViewStyle = {
  flexDirection: 'row',
}

export const space: ViewStyle = {
  flex: 1,
}

export const footer: ViewStyle = {
  flex: 1,
  backgroundColor: 'white',
  padding: spacing[5],
}

export const editButton: ViewStyle = {
  flex: 1,
  padding: spacing[3],
  backgroundColor: color.button,
  borderRadius: 2,
}

export const cancelButton: ViewStyle = {
  flex: 1,
  padding: spacing[3],
  backgroundColor: color.cancel,
  borderRadius: 2,
}

export const spaceButton: ViewStyle = {
  height: spacing[5],
}

export const submitButton: TextStyle = {
  fontSize: 18,
  fontWeight: '900',
}
