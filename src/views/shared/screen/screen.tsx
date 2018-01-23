import * as React from 'react'
import { ScrollView, View, ViewStyle } from 'react-native'
import { color, spacing } from '../../theme'

// component properties
export interface ScreenProps {
  children?: React.ReactNode
  style?: ViewStyle
  noScroll?: boolean
}

// static styles
const ROOT: ViewStyle = {
  backgroundColor: color.background,
  flex: 1,
}

const SCROLLER_CONTENT: ViewStyle = {
  paddingTop: 30,
  paddingLeft: spacing[4],
  paddingRight: spacing[4],
  paddingBottom: spacing[4],
}

/**
 * A starting point for every screen.
 */
export class Screen extends React.Component<ScreenProps, {}> {
  render() {
    const { style: styleOverride } = this.props
    const rootStyle = { ...ROOT, ...styleOverride }
    const contentStyle = { ...SCROLLER_CONTENT, ...styleOverride }

    if (this.props.noScroll) {
      return <View style={rootStyle}>{this.props.children}</View>
    } else {
      return (
        <ScrollView
          style={rootStyle}
          contentContainerStyle={contentStyle}
          keyboardShouldPersistTaps="handled"
        >
          {this.props.children}
        </ScrollView>
      )
    }
  } // render
} // component
