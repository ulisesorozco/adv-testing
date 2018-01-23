import { TextStyle } from 'react-native'
import { color } from '../../theme/color'

/**
 * All text will start off looking like this.
 */
const BASE: TextStyle = {
  color: color.text,
  fontSize: 15,
}

/**
 * All the variations of text styling within the app.
 *
 * You want to customize these to whatever you need in your app.
 */
export const presets = {
  /**
   * The default text styles.
   */
  default: BASE,

  /**
   * A bold version of the default text.
   */
  bold: { ...BASE, fontWeight: '600' } as TextStyle,

  /**
   * A super bold version of the default text.
   */
  superBold: { ...BASE, fontWeight: '800' } as TextStyle,

  /**
   * Large headers.
   */
  header: { ...BASE, fontSize: 24, fontWeight: '100' } as TextStyle,

  /**
   * Large bold headers.
   */
  title: { ...BASE, fontSize: 24, fontWeight: '900' } as TextStyle,

  /**
   * A small font size version of the default text.
   */
  description: { ...BASE, fontSize: 12 } as TextStyle,

  /**
   * Field labels that appear on forms above the inputs.
   */
  fieldLabel: { ...BASE, fontSize: 12, fontWeight: '100', color: color.text } as TextStyle,

  /**
   * A smaller piece of secondard information.
   */
  secondary: { ...BASE, fontSize: 9, color: color.dim } as TextStyle,

  /**
   * Appears above the form when there is a problem.
   */
  formError: { ...BASE, fontSize: 12, color: color.error } as TextStyle,
}

/**
 * A list of preset names.
 */
export type TextPresetNames = keyof typeof presets
