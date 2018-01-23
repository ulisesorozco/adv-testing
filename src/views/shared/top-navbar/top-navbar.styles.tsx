import { Platform } from 'react-native'
import { spacing, color, commonStyles } from '../../theme'
import { TextStyle, ViewStyle } from 'react-native'

// currently we have no presets, but that changes quickly when you build your aspp
export const PRESETS: { [name: string]: ViewStyle } = {
  default: {},
}

// the base styling for the container
export const CONTAINER: ViewStyle = {
  paddingBottom: spacing[4],
  height: 75,
  width: '100%',
  backgroundColor: color.background,
  flexDirection: 'row',
  justifyContent: 'space-between',
  alignItems: 'flex-end',
  zIndex: 100,
}

// the base style for Navigation Title
export const NAV_LABEL_CONTAINER: ViewStyle = {
  flex: 1,
  paddingHorizontal: spacing[3],
}

// the base style for SearchText
export const LABEL = [
  commonStyles.text,
  {
    padding: 0,
    ...Platform.select({
      android: {
        marginBottom: -5,
      },
    }),
  },
]

// the base style for Navigationbar Icons
export const ICON_CONTAINER: ViewStyle = {
  paddingLeft: spacing[4],
  paddingRight: spacing[2],
}

// title text
export const TITLE_TEXT: TextStyle = {
  fontSize: 20,
}
