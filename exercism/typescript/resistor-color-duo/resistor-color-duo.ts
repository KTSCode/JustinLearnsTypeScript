export class ResistorColor {
  private colors: string[];

  constructor(inputColors: string[]) {
    if (inputColors.length < 2){
      throw new Error("At least two colors need to be present")
    }
    this.colors = inputColors;
  }
  public value(): number {
    const first = this.colorTable(this.colors[0])
    const second = this.colorTable(this.colors[1])
    return Number(first + second)
  }
  private colorTable(colorLookup: string): string {
    switch (colorLookup) {
      case "black": {
        return "0"
      }
      case "brown": {
        return "1"
      }
      case "red": {
        return "2"
      }
      case "orange": {
        return "3"
      }
      case "yellow": {
        return "4"
      }
      case "green": {
        return "5"
      }
      case "blue": {
        return "6"
      }
      case "violet": {
        return "7"
      }
      case "grey": {
        return "8"
      }
      case "white": {
        return "9"
      }
      default: {
        return ""
      }
    }
  }
}
// Black - Brown - Red - Orange - Yellow - Green - Blue - Violet - Grey - White
// 0 - 9