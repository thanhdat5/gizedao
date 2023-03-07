import tinyColor from 'tinycolor2';
export const transformColorToRgba = (color: string, ratio: number) =>
  tinyColor(color).setAlpha(ratio).toRgbString();