import { TextStyle, ViewStyle } from 'react-native'
import { color } from '../../theme'

/**
 * All text will start off looking like this.
 */
const BASE_VIEW: ViewStyle = {}

const BASE_TEXT: TextStyle = {
  color: color.text,
  fontSize: 14,
}

/**
 * All the variations of checkbox styling within the app.
 *
 * You want to customize these to whatever you need in your app.
 */
export const viewPresets = {
  /**
   * The default container styles.
   */
  default: BASE_VIEW,
}

export const textPresets = {
  /**
   * The default text styles.
   */
  default: BASE_TEXT,
}

/**
 * A list of preset names.
 */
export type CheckboxPresetNames = keyof typeof viewPresets
