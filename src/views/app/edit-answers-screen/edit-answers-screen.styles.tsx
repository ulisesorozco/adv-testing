import { ViewStyle } from 'react-native'
import { color, metrics, spacing } from '../../theme'

export const ROOT: ViewStyle = {
  flex: 1,
  backgroundColor: color.background,
  padding: spacing[4],
}

export const navBar: ViewStyle = {
  flexDirection: 'row',
  marginTop: spacing[4],
  paddingTop: spacing[4],
}

export const sectionHeader: ViewStyle = {
  flexDirection: 'row',
  justifyContent: 'space-between',
  alignItems: 'center',
  height: 50,
  marginBottom: spacing[3],
  borderBottomWidth: 1,
  borderColor: color.border,
}

export const sectinHeaderCollapse: ViewStyle = {
  marginLeft: 'auto',
  alignSelf: 'center',
}

export const sectionBody: ViewStyle = {
  flexDirection: 'column',
}

export const answerContainer: ViewStyle = {
  padding: spacing[4],
  paddingTop: 0,
  marginTop: spacing[4],
  marginBottom: spacing[8],
}

export const testItem: ViewStyle = {
  flexDirection: 'row',
  height: 50,
}

export const testNumber: ViewStyle = {
  flex: 1,
}

export const testStatus: ViewStyle = {
  flex: 2,
}

export const testAnswer: ViewStyle = {
  flex: 3,
}

export const testAnswerSubmitted: ViewStyle = {
  flex: 3,
}

export const testAnswerEdit: ViewStyle = {
  flex: 4,
}

export const footerColumn: ViewStyle = {
  padding: spacing[4],
  position: 'absolute',
  bottom: 0,
  width: metrics.screenWidth,
}

export const footerRow: ViewStyle = {
  flexDirection: 'row',
  justifyContent: 'space-between',
  padding: spacing[4],
  position: 'absolute',
  bottom: 0,
  width: metrics.screenWidth,
}

export const backButton: ViewStyle = {
  backgroundColor: color.button,
}

export const cancelButton: ViewStyle = {
  backgroundColor: color.wrong,
}
