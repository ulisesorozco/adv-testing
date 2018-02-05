import * as React from 'react'
import { TouchableOpacity, Image, View, ViewStyle } from 'react-native'
import Icon from 'react-native-vector-icons/FontAwesome'
import { Text } from '../text'
import {
  viewPresets,
  textPresets,
  imagePresets,
  disabledViewPresets,
  checkPresets,
} from './button.presets'
import { ButtonProps } from './button.props'

/**
 * It's a button.  That you tap!
 */
export function Button(props: ButtonProps) {
  // grab the props
  const {
    type,
    preset = 'primary',
    children,
    tx,
    text,
    source,
    style: styleOverride,
    textStyle: textStyleOverride,
    stretch,
    rounded,
    transparent,
    ...rest,
  } = props

  // grab the appropriate preset stuff to use
  const viewPresetToUse = viewPresets[preset] || viewPresets.primary
  const disabledViewPresetToUse = disabledViewPresets[preset] || disabledViewPresets.primary
  const textPresetToUse = textPresets[preset] || textPresets.primary
  const imagePresetToUse = imagePresets[preset] || imagePresets.primary
  const checkPresetToUse = checkPresets[preset] || checkPresets.unChecked

  // assemble the base TouchableOpacity style
  const setViewStyle = {
    ...viewPresetToUse,
    ...({ alignSelf: stretch ? 'stretch' : 'center' } as ViewStyle),
    ...({ borderRadius: stretch ? 0 : 4 } as ViewStyle),
    ...({ borderRadius: rounded ? 50 : 0 } as ViewStyle),
    ...({
      backgroundColor: transparent ? 'transparent' : viewPresets[preset].backgroundColor,
    } as ViewStyle),
    ...styleOverride,
    ...(props.disabled ? disabledViewPresetToUse : {}),
  }

  // assemble the base text style
  const setTextStyle = {
    ...textPresetToUse,
    ...textStyleOverride,
  }

  switch (type) {
    case 'image':
      return (
        <TouchableOpacity {...rest} style={setViewStyle}>
          <Image style={imagePresetToUse} source={source} />
        </TouchableOpacity>
      )
    case 'content':
      return (
        <TouchableOpacity {...rest} style={setViewStyle}>
          {children}
        </TouchableOpacity>
      )
    case 'check':
      const checked = preset === 'checked'
      return (
        <TouchableOpacity {...rest} style={setViewStyle}>
          <Text preset="button" text={text} />
          <View style={checkPresetToUse}>
            {checked && <Icon name="check" size={20} color="white" />}
          </View>
        </TouchableOpacity>
      )
    default:
      return (
        <TouchableOpacity {...rest} style={setViewStyle}>
          <Text tx={tx} text={text} style={setTextStyle} />
        </TouchableOpacity>
      )
  }
}
