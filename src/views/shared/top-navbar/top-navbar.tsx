import * as React from 'react'
import { View, ViewStyle, TouchableOpacity, TextInput } from 'react-native'
import { translate } from '../../../i18n'
import { Text } from '../text'
import Icon from 'react-native-vector-icons/Feather'
import { color } from '../../theme'
import * as screenStyles from './top-navbar.styles'

export interface TopNavBarProps {
  /** The Title i18n key. */
  titleTx?: string
  /** The title text if no titleTx is provided. */
  title?: string
  /** Various look & feels. */
  preset?: 'default'
  /** Toggle between TopSearchbar & TopNavbar */
  isSearchBar?: boolean
  /** Toogle between backbutton / menubuton */
  isBackButton?: boolean
  /** Toggle SearchIcon */
  showSearchIcon?: boolean
  /** toggle settingIcon */
  showSettingIcon?: boolean

  /** The event called when back pressed */
  onBackPress?: Function
  /** The event called when menu pressed */
  onMenuPress?: Function
  /** The event called when search pressed */
  onSearchPress?: Function
  /** The event called when setting pressed */
  onSettingPress?: Function

  /** Search Placeholder i18n key */
  searchPlaceholderTx?: string
  /** Event happens when search text is changed */
  onSearchTextChanged?: Function
}

export interface TopNavBarState {
  isSearchBar: boolean
}
/**
 * A NavigationBar which is on top of the screen
 */
export class TopNavBar extends React.PureComponent<TopNavBarProps, TopNavBarState> {
  constructor(props) {
    super(props)

    this.state = {
      isSearchBar: props.isSearchBar ? true : false,
    }
  }

  _onLeftIconPressed = () => {
    const { onBackPress, onMenuPress, isBackButton } = this.props
    const { isSearchBar } = this.state

    if (isSearchBar) {
      this.setState({ isSearchBar: false })
      return
    }

    if (isBackButton) {
      onBackPress && onBackPress()
    } else {
      onMenuPress && onMenuPress()
    }
  }

  _onSettingPressed = () => {
    const { onSettingPress } = this.props

    onSettingPress && onSettingPress()
  }

  _onSearchPressed = () => {
    const { onSearchPress } = this.props

    this.setState({ isSearchBar: true })

    onSearchPress && onSearchPress()
  }

  _onSearchTextChanged = text => {
    const { onSearchTextChanged } = this.props

    onSearchTextChanged && onSearchTextChanged(text)
  }

  render() {
    const {
      preset = 'default',
      showSearchIcon,
      showSettingIcon,
      isBackButton,
      titleTx,
      searchPlaceholderTx,
    } = this.props
    const { isSearchBar } = this.state
    const containerStyle: ViewStyle = {
      ...screenStyles.CONTAINER,
      ...screenStyles.PRESETS[preset],
    }

    let maybeBackOrMenuIcon =
      isBackButton || isSearchBar ? (
        <TouchableOpacity onPress={this._onLeftIconPressed} style={screenStyles.ICON_CONTAINER}>
          <Icon name="arrow-left" size={24} color={color.text} />
        </TouchableOpacity>
      ) : null
    // <TouchableOpacity onPress={this._onLeftIconPressed} style={screenStyles.ICON_CONTAINER}>
    //   <Icon name="menu" size={24} color={color.text} />
    // </TouchableOpacity>

    let maybeTitleOrSearchBox = isSearchBar ? (
      <TextInput
        style={screenStyles.LABEL}
        placeholderTextColor={color.dim}
        placeholder={translate(searchPlaceholderTx)}
        onChangeText={this._onSearchTextChanged}
      />
    ) : (
      <Text tx={titleTx} style={screenStyles.TITLE_TEXT} />
    )

    let maybeSearchIcon = null
    if (showSearchIcon && !isSearchBar)
      maybeSearchIcon = (
        <TouchableOpacity onPress={this._onSearchPressed} style={screenStyles.ICON_CONTAINER}>
          <Icon name="search" size={15} color={color.text} />
        </TouchableOpacity>
      )
    if (isSearchBar)
      maybeSearchIcon = (
        <Icon name="search" size={15} color={color.dim} style={screenStyles.ICON_CONTAINER} />
      )

    let maybeSettingIcon = null
    if (showSettingIcon && !isSearchBar)
      maybeSettingIcon = (
        <TouchableOpacity onPress={this._onSettingPressed} style={screenStyles.ICON_CONTAINER}>
          <Icon name="more-vertical" size={17} color={color.text} />
        </TouchableOpacity>
      )

    return (
      <View style={containerStyle}>
        {maybeBackOrMenuIcon}

        <View style={screenStyles.NAV_LABEL_CONTAINER}>{maybeTitleOrSearchBox}</View>

        {maybeSearchIcon}

        {maybeSettingIcon}
      </View>
    )
  }
}
