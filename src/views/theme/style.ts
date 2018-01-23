import { StyleSheet } from 'react-native'
import { color } from '../theme'

//common styles which can be shared
export const commonStyles = StyleSheet.create({
  //tabbar stuff
  tabBar: {
    backgroundColor: color.background,
    shadowColor: color.palette.black,
    shadowOffset: { width: 0, height: -1 },
    shadowOpacity: 0.5,
  },
  tabBarLabel: {
    fontSize: 12,
  },

  //text style
  text: {
    color: color.text,
    fontSize: 15,
  },
})
