import { ViewStyle, TextStyle } from 'react-native'
import { color, spacing } from '../../../theme'

export const ROOT: ViewStyle = {
  flex: 1,
  backgroundColor: color.background,
}

export const header: ViewStyle = {
  flexDirection: 'row',
  justifyContent: 'space-between',
  alignItems: 'center',
  padding: spacing[4],
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
}

export const content: ViewStyle = {
  padding: spacing[4],
}

export const testItem: ViewStyle = {
  marginVertical: spacing[3],
  shadowOffset: { width: 0, height: 1 },
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

export const itemLabel: TextStyle = {
  color: color.palette.black,
}
