import * as React from 'react'
import { TextInput, TextInputProperties, TextStyle, View, ViewStyle } from 'react-native'
import { color, spacing } from '../../theme'
import { translate } from '../../../i18n'
import { Text } from '../text'

// the base styling for the container
const CONTAINER: ViewStyle = {
  paddingVertical: spacing[3],
}

const LINE: ViewStyle = {
  flexDirection: 'row',
  justifyContent: 'space-between',
  backgroundColor: color.palette.lightpurple,
}

// the base styling for the TextInput
const INPUT: TextStyle = {
  flex: 1,
  color: color.text,
  minHeight: 44,
  fontSize: 18,
  backgroundColor: color.palette.lightpurple,
  paddingLeft: spacing[2],
}

// the base styling for the label above the TextInput
const LABEL: TextStyle = {
  paddingBottom: spacing[2],
}

// currently we have no presets, but that changes quickly when you build your aspp
const PRESETS: { [name: string]: ViewStyle } = {
  default: {},
}

export interface TextFieldProps extends TextInputProperties {
  /** The placeholder i18n key. */
  placeholderTx?: string
  /** The Placeholder text if no placeholderTx is provided. */
  placeholder?: string
  /** The label i18n key. */
  labelTx?: string
  /** The label text if no labelTx is provided. */
  label?: string
  /** Optional container style overrides useful for margins & padding */
  style?: ViewStyle
  /** Optional style overrides for the input. */
  inputStyle?: TextStyle
  /** Various look & feels. */
  preset?: 'default'
  /** Optional parameter toggle show label on/off */
  hideLabel?: boolean
  /** Optional parameter toggle left button */
  renderRight?: React.ReactNode
}

/**
 * A component which has a label and an input together.
 */
export class TextField extends React.PureComponent<TextFieldProps, {}> {
  focus() {
    (this.refs.TextInput as any).focus()
  }

  render() {
    const {
      placeholderTx,
      placeholder,
      labelTx,
      label,
      preset = 'default',
      style: styleOverride,
      inputStyle: inputStyleOverride,
      hideLabel,
      renderRight,
      ...rest,
    } = this.props
    const containerStyle: ViewStyle = { ...CONTAINER, ...PRESETS[preset], ...styleOverride }
    const inputStyle: TextStyle = { ...INPUT, ...inputStyleOverride }
    const actualPlaceholder = placeholderTx ? translate(placeholderTx) : placeholder
    const labelStyle: TextStyle = { ...LABEL }

    let maybeLabel = null
    if (!hideLabel)
      maybeLabel = <Text preset="fieldLabel" tx={labelTx} text={label} style={labelStyle} />

    return (
      <View style={containerStyle}>
        {maybeLabel}
        <View style={LINE}>
          <TextInput
            placeholder={actualPlaceholder}
            placeholderTextColor={color.palette.lighterGrey}
            underlineColorAndroid={color.transparent}
            {...rest}
            style={inputStyle}
            ref="TextInput"
          />
          {renderRight}
        </View>
      </View>
    )
  }
}
