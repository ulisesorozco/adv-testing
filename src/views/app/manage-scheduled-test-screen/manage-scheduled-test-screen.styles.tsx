import { TextStyle, ViewStyle } from 'react-native'
import { color, spacing } from '../../theme'

export const ROOT: ViewStyle = {
  flex: 1,
  backgroundColor: color.background,
}

export const top: ViewStyle = {
  padding: spacing[4],
}

export const navBar: ViewStyle = {
  flexDirection: 'row',
  marginTop: spacing[4],
  paddingTop: spacing[4],
}

export const navTitle: ViewStyle = {
  marginLeft: 20,
}

export const manageContainer: ViewStyle = {
  backgroundColor: 'white',
  borderWidth: 0.5,
  borderColor: color.palette.darkGreen,
  marginTop: spacing[8],
  marginBottom: spacing[3],
  shadowOffset: { width: 0, height: 2.5 },
  shadowColor: color.palette.darkGreen,
  shadowOpacity: 0.15,
  shadowRadius: 2,
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
  borderTopWidth: 0.5,
  borderTopColor: color.palette.darkGreen,
}

export const space: ViewStyle = {
  flex: 1,
}

export const footer: ViewStyle = {
  flex: 1,
  padding: spacing[5],
  borderTopWidth: 0.5,
  borderTopColor: color.palette.darkGreen,
  backgroundColor: 'white',
}

export const editButton: ViewStyle = {
  flex: 1,
  padding: spacing[3],
  borderRightWidth: 0.5,
  borderRightColor: color.palette.darkGreen,
  backgroundColor: color.palette.lightGreen,
}

export const editButtonText: TextStyle = {
  color: color.palette.darkGreen,
}

export const cancelButton: ViewStyle = {
  flex: 1,
  padding: spacing[3],
  backgroundColor: color.cancel,
}

export const spaceButton: ViewStyle = {
  height: spacing[5],
}

export const submitButton: TextStyle = {
  fontSize: 18,
  fontWeight: '900',
}
