import * as React from 'react'
import RNCheckBox from 'react-native-check-box'
import { textPresets, viewPresets } from './checkbox.presets'
import { CheckboxProps } from './checkbox.props'
import { translate } from '../../../i18n'
import { color } from '../../theme'

/**
 * For your checkbox displaying needs.
 *
 * This component is a HOC over the built-in React Native one.
 */
export function CheckBox(props: CheckboxProps) {
  // grab the props
  const { preset = 'default', tx, text, checked, onChange } = props

  // figure out which content to use
  const i18nText = tx && translate(tx)
  const content = i18nText || text || ''

  // assemble the style
  const viewToUse = viewPresets[preset] || viewPresets.default
  const textToUse = textPresets[preset] || textPresets.default

  return (
    <RNCheckBox
      isChecked={checked}
      rightText={content}
      rightTextStyle={textToUse}
      style={viewToUse}
      checkBoxColor={color.text}
      onClick={onChange}
    />
  )
}
