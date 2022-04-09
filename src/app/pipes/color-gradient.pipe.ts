import { Pipe, PipeTransform } from '@angular/core';
import { Color } from '../models/color.model';

@Pipe({
  name: 'colorGradient',
})
export class ColorGradientPipe implements PipeTransform {
  transform(
    currentState: number,
    startColor: Color = { red: 255, green: 0, blue: 0 },
    middleColor: Color = { red: 0, green: 255, blue: 0 },
    endColor: Color = { red: 0, green: 0, blue: 255 },
    min: number = 0,
    max: number = 100
  ): string {
    let currentPercent = (currentState - min) / max;

    let color1: Color = startColor;
    let color2: Color = middleColor;
    let currentColor: Color = {
      red: 0,
      green: 0,
      blue: 0,
    };

    // Do we have 3 colors for the gradient? Need to adjust the params.
    currentPercent = currentPercent * 2;

    // Find which interval to use and adjust the fade percentage
    if (currentPercent >= 1) {
      currentPercent -= 1;
      color1 = middleColor;
      color2 = endColor;
    }

    let diffRed = color2.red - color1.red;
    let diffGreen = color2.green - color1.green;
    let diffBlue = color2.blue - color1.blue;

    currentColor.red = Math.round(diffRed * currentPercent + color1.red);
    currentColor.green = Math.round(diffGreen * currentPercent + color1.green);
    currentColor.blue = Math.round(diffBlue * currentPercent + color1.blue);

    let currentColorString: string =
      '#' +
      this.componentToHex(currentColor.red) +
      this.componentToHex(currentColor.green) +
      this.componentToHex(currentColor.blue);

    // debugger;

    return currentColorString;
  }

  componentToHex(c: number): string {
    var hex = c.toString(16);
    return hex.length == 1 ? '0' + hex : hex;
  }
}
