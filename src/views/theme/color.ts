import { palette } from './palette'

export const color = {
  /**
   * The palette is available to use, but prefer using the name.
   */
  palette,

  transparent: 'rgba(0, 0, 0, 0)',
  /**
   * The screen background.
   */
  background: 'rgb(246, 246, 246)',
  /**
   * The main tinting color.
   */
  primary: palette.orange,
  /**
   * A subtle color used for borders and lines.
   */
  line: palette.offWhite,
  /**
   * The default color of text in many components.
   */
  text: palette.darkGreen,
  /**
   * The default color of buttons.
   */
  button: 'rgb(229,150,58)',
  cancel: '#FC404C',
  /**
   * The default color of borders.
   */
  border: palette.darkGreen,
  borderGreen: '#9DB2A6',
  /**
   * The default color of Right and Wrong.
   */
  right: '#159679',
  wrong: '#FF4B4B',
  /**
   * The default color of shadow.
   */
  shadow: '#55615F26',
}
