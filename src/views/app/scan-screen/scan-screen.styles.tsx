import { TextStyle, ViewStyle, ImageStyle } from 'react-native'
import { color, metrics, spacing } from '../../theme'

export const ROOT: ViewStyle = {
  flex: 1,
  backgroundColor: color.background,
}

export const navBar: ViewStyle = {
  flexDirection: 'row',
  paddingHorizontal: spacing[4],
  paddingVertical: spacing[2],
  height: 70,
}

export const camera: ViewStyle = {
  flex: 1,
  alignItems: 'center',
  justifyContent: 'flex-end',
  width: metrics.screenWidth,
  height: 400,
}

export const croppedImage: ImageStyle = {
  resizeMode: 'contain',
  width: metrics.screenWidth,
  height: 400,
}

export const studentItem: ViewStyle = {
  flexDirection: 'row',
  alignItems: 'center',
  margin: spacing[2],
  borderWidth: 0.5,
  borderRadius: 5,
  borderColor: color.border,
  overflow: 'hidden',
  shadowOffset: { width: 0, height: 1 },
  shadowColor: color.palette.darkGreen,
  shadowOpacity: 0.15,
  shadowRadius: 2,
}

export const studentText: ViewStyle = {
  padding: spacing[2],
  paddingHorizontal: spacing[3],
}

export const studentLine: ViewStyle = {
  flexDirection: 'row',
}

export const studentRemove: ViewStyle = {
  flex: 1,
  alignItems: 'center',
  justifyContent: 'center',
  backgroundColor: color.palette.angry,
  maxHeight: metrics.screenHeight / 15,
  padding: spacing[1],
  height: '100%',
}

export const content: ViewStyle = {
  flex: 1,
  alignItems: 'center',
  justifyContent: 'center',
  position: 'relative',
}

export const documentImage: ImageStyle = {
  resizeMode: 'contain',
  width: metrics.screenWidth,
  height: 2 * metrics.screenHeight / 3,
}

export const footer: ViewStyle = {
  flexDirection: 'row',
  alignItems: 'center',
  backgroundColor: 'white',
  borderTopWidth: 0.5,
  borderTopColor: color.border,
  padding: spacing[6],
  width: metrics.screenWidth,
  height: 0.15 * metrics.screenHeight,
}

export const closeButton: ViewStyle = {
  alignItems: 'center',
  justifyContent: 'center',
  backgroundColor: color.wrong,
  borderRadius: 4,
  marginRight: spacing[4],
  width: 50,
  height: 50,
}

export const doneButton: ViewStyle = {
  flex: 1,
  alignSelf: 'center',
  borderRadius: 4,
  backgroundColor: color.button,
  height: 50,
}

export const overlay: ViewStyle = {
  flex: 1,
  alignItems: 'center',
  justifyContent: 'center',
  position: 'absolute',
  left: 0,
  top: 0,
  width: metrics.screenWidth,
  height: metrics.screenHeight,
  zIndex: 999,
}

export const rectangle: ViewStyle = {
  backgroundColor: 'green',
  opacity: 0.3,
  position: 'absolute',
  left: 0.04 * metrics.screenWidth,
  width: 0.92 * metrics.screenWidth,
  height: 0.23 * metrics.screenWidth,
}

export const descContainer: ViewStyle = {
  alignItems: 'center',
  justifyContent: 'center',
  backgroundColor: '#159679',
  padding: spacing[3],
  width: metrics.screenWidth,
  height: 40,
}

export const description: TextStyle = {
  color: 'white',
}
