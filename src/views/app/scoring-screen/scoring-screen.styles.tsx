import { ViewStyle, TextStyle } from 'react-native'
import { color, spacing } from '../../theme'

export const ROOT: ViewStyle = {
  flex: 1,
  justifyContent: 'center',
  padding: spacing[8],
  backgroundColor: color.right,
}

export const header: TextStyle = {
  textAlign: 'center',
  fontSize: 24,
  fontWeight: '900',
  color: 'white',
}

export const loading: TextStyle = {
  textAlign: 'center',
  fontSize: 12,
  color: 'white',
}
