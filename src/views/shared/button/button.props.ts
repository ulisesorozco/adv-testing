import { ViewStyle, TouchableOpacityProperties, TextStyle } from 'react-native'
import { ButtonPresetNames } from './button.presets'

export interface ButtonProps extends TouchableOpacityProperties {
  /**
   * One of the different types of button. text || image
   */
  type?: string

  /**
   * Text which is looked up via i18n.
   */
  tx?: string

  /**
   * The text to display if not using `tx` or nested components.
   */
  text?: string

  /**
   * The image to display if image button.
   */
  source?: any

  /**
   * An optional style override for the button' TouchableOpacity
   */
  style?: ViewStyle

  /**
   * An optional style override for nested button text.
   */
  textStyle?: TextStyle

  /**
   * One of the different types of text presets.
   */
  preset?: ButtonPresetNames

  /**
   * Should we stretch this button horizontally to fit the container?
   */
  stretch?: boolean

  /**
   * Should the button be rounded at the edges?
   */
  rounded?: boolean

  /**
   * Should the button' background be transparent?
   */
  transparent?: boolean

  children?: any
}
