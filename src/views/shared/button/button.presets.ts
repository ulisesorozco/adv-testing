import { ViewStyle, TextStyle, ImageStyle } from 'react-native'
import { color } from '../../theme/color'
import { spacing } from '../../theme/spacing'

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
  textAlign: 'center',
  paddingHorizontal: spacing[3],
}

const BASE_IMAGE: ImageStyle = {
  flex: 1,
  resizeMode: 'stretch',
  alignSelf: 'center',
}

/**
 * What the base view looks like.
 */
export const viewPresets = {
  primary: { ...BASE_VIEW, backgroundColor: color.palette.purple } as ViewStyle,
}

/**
 * What the text looks like.
 */
export const textPresets = {
  primary: { ...BASE_TEXT, fontSize: 12, color: color.palette.white } as TextStyle,
}

/**
 * What the image looks like.
 */
export const imagePresets = {
  primary: { ...BASE_IMAGE } as ImageStyle,
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
export type ButtonPresetNames = keyof typeof viewPresets
