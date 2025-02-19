import { ExpectColorOptions } from "../src/config.ts";
import { Template } from "../src/lib/compareTemplate.ts";
import { Color } from "../src/lib/isSameColor.ts";

export interface ColorMatchers<R> {
  /**
   * @description
   * Check if a color equals another color.
   * Converting actual color into the color-space of expected color.
   *
   * @example
   * expect('cmyk(0, 100, 100, 0)').toEqualColor('red');
   */
  toEqualColor(color: string | Color, options?: ExpectColorOptions): R;
  /**
   * @description
   * Check if a color is the same then expected color in the same color-space.
   *
   * @example
   * expect('rgb(255, 0, 0)').toEqualColor('red');
   */
  toBeColor(color: string | Color): R;
}

export default ColorMatchers;
