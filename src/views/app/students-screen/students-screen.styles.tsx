import { ViewStyle } from 'react-native'
import { color, spacing } from '../../theme'

export const ROOT: ViewStyle = {
  flex: 1,
  backgroundColor: color.background,
  padding: spacing[4],
}

export const header: ViewStyle = {
  flexDirection: 'row',
  justifyContent: 'space-between',
  alignItems: 'center',
  marginTop: spacing[4],
  paddingTop: spacing[4],
}

export const closeButton: ViewStyle = {
  justifyContent: 'center',
  alignItems: 'center',
  width: 40,
  height: 40,
  borderRadius: 4,
  backgroundColor: color.button,
}

export const boderLine: ViewStyle = {
  flexDirection: 'row',
  borderBottomColor: color.palette.lightGrey,
  borderBottomWidth: 1,
  paddingBottom: spacing[2],
  marginVertical: spacing[5],
}

export const studentItem: ViewStyle = {
  flexDirection: 'row',
  justifyContent: 'space-between',
  alignItems: 'center',
  height: 60,
  marginBottom: spacing[3],
  padding: spacing[3],
  borderWidth: 0.5,
  borderRadius: 2,
  borderColor: color.border,
  backgroundColor: 'white',
  shadowOffset: { width: 0, height: 1 },
  shadowColor: color.palette.darkGreen,
  shadowOpacity: 0.15,
  shadowRadius: 2,
}

export const studentFooter: ViewStyle = {
  marginLeft: 'auto',
  alignSelf: 'center',
}
