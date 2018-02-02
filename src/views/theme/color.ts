import { palette } from './palette'

/**
 * Roles for colors.  Prefer using these over the palette.  It makes it easier
 * to change things.
 *
 * The only roles we need to place in here are the ones that span through the app.
 *
 * If you have a specific use-case, like a spinner color.  It makes more sense to
 * put that in the <Spinner /> component.
 */
export const color = {
  /**
   * The palette is available to use, but prefer using the name.
   */
  palette,
  /**
   * A helper for making something see-thru. Use sparingly as many layers of transparency
   * can cause older Android devices to slow down due to the excessive compositing required
   * by their under-powered GPUs.
   */
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
  text: palette.black,
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
}
