# Drawing Board Application

This is a simple drawing board application built with Electron. The application allows users to draw shapes like rectangles and circles, as well as free-form drawing. It also includes an eraser tool for removing parts of the drawing and a clear canvas button to reset the entire drawing area. Additionally, users can save their drawings as PNG files.

## Features

- **Draw Shapes**:
  - **Rectangle**: Draw rectangles by clicking and dragging on the canvas.
  - **Circle**: Draw circles by clicking and dragging on the canvas.
  - **Free-form Drawing**: Draw freely on the canvas using the mouse.

- **Eraser**:
  - Erase parts of your drawing by selecting the eraser tool and dragging over the areas you want to remove.

- **Clear Canvas**:
  - Clear the entire canvas at once using the clear canvas button.

- **Save Drawing**:
  - Save your drawing as a PNG file with a white background.

## How to Use

1. **Select a Tool**: Use the toolbar at the top of the application to select your desired tool (Rectangle, Circle, Free Draw, or Eraser).

2. **Draw on the Canvas**: Click and drag on the canvas to draw shapes or free-form lines.

3. **Change Color**: Use the color picker in the toolbar to change the drawing color.

4. **Erase or Clear**:
   - To erase specific parts of your drawing, select the Eraser tool and drag over the areas you want to remove.
   - To clear the entire canvas, click the "Clear Canvas" button.

5. **Save Your Drawing**: Once you're satisfied with your drawing, you can save it as a PNG file by selecting the "Save as PNG" option from the "File" menu.

## Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/nazmurr/drawing-board.git
   cd drawing-board
   npm install
   npm start