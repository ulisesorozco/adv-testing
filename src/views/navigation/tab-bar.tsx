import * as React from 'react'
import { Image, View, ViewStyle, Text, TextStyle, StyleSheet, TouchableOpacity } from 'react-native'
import { color, images, metrics } from '../theme'

export interface TXTabBarProps {
  navigation: any
}

export interface TXTabBarState {
  selected: number
}

export class TXTabBar extends React.Component<TXTabBarProps, TXTabBarState> {
  constructor(props) {
    super(props)
    this.state = { selected: 0 }
  }

  toStudents = () => {
    this.setState({ selected: 0 })
    this.props.navigation.navigate('students')
  }

  toScan = () => {
    this.setState({ selected: 1 })
    this.props.navigation.navigate('scan')
  }

  toSettings = () => {
    this.setState({ selected: 2 })
    this.props.navigation.navigate('settings')
  }

  render() {
    const { selected } = this.state

    return (
      <View style={screenStyles.ROOT}>
        <View style={screenStyles.Left}>
          <TouchableOpacity style={screenStyles.button} onPress={this.toStudents}>
            <Image
              source={images.atHat}
              style={{ tintColor: selected == 0 ? color.palette.blue : color.text }}
            />
            <Text
              style={[
                screenStyles.text,
                { color: selected == 0 ? color.palette.blue : color.text },
              ]}
            >
              Students
            </Text>
          </TouchableOpacity>
        </View>
        <View style={screenStyles.Center}>
          <TouchableOpacity style={screenStyles.camera} onPress={this.toScan}>
            <Image source={images.atCamera} />
          </TouchableOpacity>
        </View>
        <View style={screenStyles.Right}>
          <TouchableOpacity style={screenStyles.button} onPress={this.toSettings}>
            <Image
              source={images.atGear}
              style={{ tintColor: selected == 2 ? color.palette.blue : color.text }}
            />
            <Text
              style={[
                screenStyles.text,
                { color: selected == 2 ? color.palette.blue : color.text },
              ]}
            >
              Settings
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    )
  }
}

const screenStyles = StyleSheet.create({
  ROOT: {
    flexDirection: 'row',
    width: metrics.screenWidth,
    height: 60,
  } as ViewStyle,
  Left: {
    flex: 2,
    alignItems: 'center',
    paddingTop: 10,
  } as ViewStyle,
  Center: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  } as ViewStyle,
  Right: {
    flex: 2,
    alignItems: 'center',
    paddingTop: 10,
  } as ViewStyle,
  button: {
    alignItems: 'center',
    justifyContent: 'center',
  } as ViewStyle,
  camera: {
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'rgb(85,97,95)',
    borderRadius: 3,
    paddingBottom: 10,
    width: 100,
    height: 78,
  } as ViewStyle,
  text: {
    color: 'rgb(85,97,95)',
    fontSize: 12,
  } as TextStyle,
})
