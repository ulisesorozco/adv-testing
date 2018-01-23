import { CheckboxPresetNames } from './checkbox.presets'

export interface CheckboxProps {
  /**
   * Text which is looked up via i18n.
   */
  tx?: string

  /**
   * The text to display if not using `tx` or nested components.
   */
  text?: string

  /**
   * The status of checkbox
   */
  checked?: boolean

  /**
   * This would be triggered when checkbox changed.
   */
  onChange?: any

  /**
   * One of the different types of checkbox presets.
   */
  preset?: CheckboxPresetNames
}
