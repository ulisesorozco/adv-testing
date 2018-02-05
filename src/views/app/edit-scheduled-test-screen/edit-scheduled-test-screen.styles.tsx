import { ViewStyle } from 'react-native'
import { color, spacing } from '../../theme'

export const ROOT: ViewStyle = {
  flex: 1,
  backgroundColor: color.background,
  padding: spacing[4],
}

export const navBar: ViewStyle = {
  flexDirection: 'row',
}

export const navTitle: ViewStyle = {
  marginLeft: 20,
}

export const content: ViewStyle = {
  padding: spacing[4],
  marginTop: spacing[6],
}

export const testItem: ViewStyle = {
  marginVertical: spacing[3],
  shadowOffset: { width: 0, height: 2.5 },
  shadowColor: color.palette.darkGreen,
  shadowOpacity: 0.15,
  shadowRadius: 2,
}

export const testDetail: ViewStyle = {
  flexDirection: 'row',
  justifyContent: 'space-between',
  marginTop: spacing[2],
  padding: spacing[4],
  borderWidth: 0.5,
  borderColor: color.palette.black,
}

export const editButton: ViewStyle = {
  marginTop: spacing[4],
}

export const backButton: ViewStyle = {
  marginTop: spacing[4],
}
