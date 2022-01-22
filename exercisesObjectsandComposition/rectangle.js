function solve(width, height, color) {
   let pattern = color[0];
  color = color.replace(pattern, pattern.toUpperCase());
    let rectangle = {
        width,
        height,
        color,
        calcArea() {
            let result = this.width * this.height;
            return result;
        },
    }
    return rectangle;
}
