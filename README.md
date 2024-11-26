# Interactive Color and Cursor Tracking Web Application

## Overview
This is a simple interactive web application that creates a dynamic visual experience by tracking mouse movements and changing the background color of a central div based on cursor position.

## Features
- Mouse cursor tracking
- Dynamic cursor representation (a small span element)
- Quadrant-based color changing for a central div
- CSS color variables for easy theme customization

## Project Structure
```
project-root/
│
├── index.html      # Main HTML structure
├── style.css       # CSS styling
└── indexJS.js      # JavaScript interactivity
```

## HTML Structure
- A `<span>` element used as a custom cursor
- A `<div>` that serves as the interactive color-changing element

## CSS Highlights
- CSS Variables for color theming
  - `--body`: Background color
  - `--font`: Font color
  - `--section`: Initial div color
  - `--elements`: Accent color
- Absolute positioning for span and div
- Responsive design principles

## JavaScript Functionality
- Event listener for `mousemove`
- Cursor tracking with `event.clientX` and `event.clientY`
- Div color change based on mouse quadrant
- Random RGB color generation

## Interaction Details
- Cursor (span) follows mouse movement
- div background color changes randomly based on which quadrant of the div the mouse is in
  - Top-right quadrant triggers color change
  - Top-left quadrant triggers color change
  - Bottom-right quadrant triggers color change
  - Bottom-left quadrant triggers color change

## How to Use
1. Open `index.html` in a web browser
2. Move your mouse around the screen
3. Observe the cursor and div color changes

## Customization
Modify CSS variables in `:root` to change:
- Background color
- Font color
- Section color
- Element colors

## Browser Compatibility
- Modern browsers with JavaScript and CSS3 support

## Potential Improvements
- Add touch support for mobile devices
- More complex color generation algorithms
- Smoother color transitions
- Customizable interaction zones

## License
Open-source project. Feel free to use and modify.
