import { ViewStyle } from 'react-native'
import { color, spacing } from '../../theme'

export const searchItem: ViewStyle = {
  flexDirection: 'row',
  alignItems: 'center',
  justifyContent: 'space-between',
  marginTop: spacing[5],
  padding: spacing[1],
  paddingLeft: spacing[3],
  borderRadius: 3,
  borderWidth: 0.5,
  borderColor: color.palette.lightGrey,
  backgroundColor: color.palette.white,
  shadowOffset: { width: 0, height: 2.5 },
  shadowColor: color.palette.darkGreen,
  shadowOpacity: 0.15,
  shadowRadius: 2,
}

export const searchContainer: ViewStyle = {
  flex: 1,
  paddingVertical: 0,
}

export const searchInput: ViewStyle = {
  backgroundColor: color.transparent,
}
