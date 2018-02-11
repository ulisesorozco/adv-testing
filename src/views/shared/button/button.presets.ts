import { ViewStyle, TextStyle } from 'react-native'
import { color, spacing } from '../../theme'

const BASE_VIEW: ViewStyle = {
  paddingVertical: spacing[2],
  paddingHorizontal: spacing[2],
  borderRadius: 4,
  alignSelf: 'stretch',
  minHeight: 50,
  minWidth: 120,
  justifyContent: 'center',
}

const BASE_TEXT: TextStyle = {
  fontWeight: '900',
  textAlign: 'center',
  paddingHorizontal: spacing[3],
}

const BASE_CHECKVIEW: ViewStyle = {
  flexDirection: 'row',
  alignItems: 'center',
  justifyContent: 'space-between',
  marginTop: spacing[3],
  padding: spacing[3],
  borderRadius: 3,
  borderWidth: 0.5,
  borderColor: color.palette.lightGrey,
}

/**
 * What the base view looks like.
 */
export const viewPresets = {
  primary: { ...BASE_VIEW, backgroundColor: color.button } as ViewStyle,
  secondary: { ...BASE_CHECKVIEW } as ViewStyle,
}

/**
 * What the text looks like.
 */
export const textPresets = {
  primary: {
    ...BASE_TEXT,
    fontSize: 16,
    color: color.palette.white,
  } as TextStyle,
  secondary: {
    ...BASE_TEXT,
    fontSize: 16,
    color: color.text,
  },
}

/**
 * What the base view looks like when disabled.
 */
export const disabledViewPresets = {
  primary: { backgroundColor: color.palette.lightGrey, borderWidth: 0 } as ViewStyle,
}

/**
 * A list of preset names.
 */
export type ButtonPresetNames = keyof typeof viewPresets | keyof typeof textPresets
