import * as React from 'react'
import { ActivityIndicator, TouchableOpacity, ViewStyle } from 'react-native'
import { Text } from '../text'
import { viewPresets, textPresets, loaderPresets, disabledViewPresets } from './button.presets'
import { ButtonProps } from './button.props'

/**
 * It's a button.  That you tap!
 */
export function Button(props: ButtonProps) {
  // grab the props
  const {
    preset = 'primary',
    disabled = false,
    children,
    tx,
    text,
    style: styleOverride,
    textStyle: textStyleOverride,
    stretch,
    rounded,
    transparent,
    renderRight,
    ...rest,
  } = props

  // grab the appropriate preset stuff to use
  const viewPresetToUse = viewPresets[preset] || viewPresets.primary
  const disabledViewPresetToUse = disabledViewPresets[preset] || disabledViewPresets.primary
  const textPresetToUse = textPresets[preset] || textPresets.primary

  // assemble the base TouchableOpacity style
  const setViewStyle = {
    ...viewPresetToUse,
    ...({ alignSelf: stretch ? 'stretch' : 'center' } as ViewStyle),
    ...({ borderRadius: stretch ? 0 : 4 } as ViewStyle),
    ...({ borderRadius: rounded ? 50 : 0 } as ViewStyle),
    ...({
      backgroundColor: transparent ? 'transparent' : viewPresets.primary.backgroundColor,
    } as ViewStyle),
    ...styleOverride,
    ...(props.disabled ? disabledViewPresetToUse : {}),
  }

  // assemble the base text style
  const setTextStyle = {
    ...textPresetToUse,
    ...textStyleOverride,
  }

  return (
    <TouchableOpacity {...rest} style={setViewStyle}>
      {disabled && <ActivityIndicator color="white" size="large" style={loaderPresets} />}
      <Text tx={tx} text={text} style={setTextStyle} />
      {renderRight}
    </TouchableOpacity>
  )
}
