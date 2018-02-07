import { ViewStyle } from 'react-native'
import { color, spacing } from '../../theme'

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
}

export const testItem: ViewStyle = {
  flexDirection: 'row',
  height: 50,
  shadowOffset: { width: 0, height: 2.5 },
  shadowColor: color.palette.darkGreen,
  shadowOpacity: 0.15,
  shadowRadius: 2,
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
