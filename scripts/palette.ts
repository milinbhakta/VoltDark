/**
 * Color Palette - Single source of truth for all colors
 * Following DRY principle: Define colors once, reference everywhere
 */

export interface ColorPalette {
  // Primary brand colors
  primary: string;
  secondary: string;
  accent: string;
  
  // Semantic colors
  success: string;
  warning: string;
  error: string;
  info: string;
  
  // Syntax highlighting colors
  syntax: {
    string: string;
    number: string;
    boolean: string;
    keyword: string;
    function: string;
    class: string;
    variable: string;
    comment: string;
    operator: string;
    constant: string;
    type: string;
    property: string;
    parameter: string;
    tag: string;
    attribute: string;
  };
  
  // UI colors
  ui: {
    background: string;
    foreground: string;
    selection: string;
    border: string;
    hover: string;
    active: string;
    inactive: string;
    focus: string;
  };
  
  // Editor colors
  editor: {
    background: string;
    foreground: string;
    lineHighlight: string;
    selection: string;
    cursor: string;
    cursorBackground: string;
    lineNumber: string;
    lineNumberActive: string;
  };
  
  // Sidebar colors
  sidebar: {
    background: string;
    foreground: string;
    border: string;
  };
  
  // Terminal colors
  terminal: {
    black: string;
    red: string;
    green: string;
    yellow: string;
    blue: string;
    magenta: string;
    cyan: string;
    white: string;
    brightBlack: string;
    brightRed: string;
    brightGreen: string;
    brightYellow: string;
    brightBlue: string;
    brightMagenta: string;
    brightCyan: string;
    brightWhite: string;
  };
}

/**
 * Helper function to create color with alpha
 */
export const alpha = (color: string, opacity: number): string => {
  // Convert opacity (0-1) to hex (00-FF)
  const alphaHex = Math.round(opacity * 255).toString(16).padStart(2, '0');
  return `${color}${alphaHex}`;
};

/**
 * Volt Dark Color Palette
 */
export const voltDarkPalette: ColorPalette = {
  // Primary brand colors
  primary: '#87B1C8',      // Electric blue
  secondary: '#6dfff8',    // Cyan/aqua
  accent: '#cdff5c',       // Lime yellow
  
  // Semantic colors
  success: '#cdff5c',      // Green/lime
  warning: '#fabf46',      // Orange/yellow
  error: '#eb5757',        // Red
  info: '#6dfff8',         // Cyan
  
  // Syntax highlighting
  syntax: {
    string: '#cdff5c',     // Lime yellow for strings
    number: '#cf256d',     // Pink for numbers
    boolean: '#cf256d',    // Pink for booleans
    keyword: '#eb5757',    // Red for keywords
    function: '#fabf46',   // Orange for functions
    class: '#6dfff8',      // Cyan for classes
    variable: '#ffffff',   // White for variables
    comment: '#515151',    // Gray for comments
    operator: '#6dfff8',   // Cyan for operators
    constant: '#cf256d',   // Pink for constants
    type: '#6dfff8',       // Cyan for types
    property: '#ffffff',   // White for properties
    parameter: '#d4d4d4',  // Light gray for parameters
    tag: '#fabf46',        // Orange for HTML tags
    attribute: '#cf256d',  // Pink for attributes
  },
  
  // UI colors
  ui: {
    background: '#000000',
    foreground: '#ffffff',
    selection: alpha('#87B1C8', 0.36),
    border: alpha('#362d59', 0.66),
    hover: alpha('#ffffff', 0.1),
    active: '#87B1C8',
    inactive: alpha('#87B1C8', 0.45),
    focus: '#87B1C8',
  },
  
  // Editor colors
  editor: {
    background: '#000000',
    foreground: '#d4d4d4',
    lineHighlight: alpha('#ffffff', 0.1),
    selection: alpha('#87B1C8', 0.3),
    cursor: '#6dfff8',
    cursorBackground: '#000000',
    lineNumber: alpha('#ffffff', 0.25),
    lineNumberActive: '#e2e2e2',
  },
  
  // Sidebar
  sidebar: {
    background: '#000000',
    foreground: '#adadad',
    border: alpha('#362d59', 0.66),
  },
  
  // Terminal ANSI colors
  terminal: {
    black: '#000000',
    red: '#cd3131',
    green: '#cdff5c',
    yellow: '#87B1C8',
    blue: '#2472c8',
    magenta: '#bc3fbc',
    cyan: '#6dfff8',
    white: '#e5e5e5',
    brightBlack: '#666666',
    brightRed: '#f14c4c',
    brightGreen: '#cdff5c',
    brightYellow: '#f5f543',
    brightBlue: '#3b8eea',
    brightMagenta: '#d670d6',
    brightCyan: '#6dfff8',
    brightWhite: '#e5e5e5',
  },
};

/**
 * Create a light variant by inverting colors
 * This demonstrates extensibility
 */
export const voltLightPalette: ColorPalette = {
  ...voltDarkPalette,
  ui: {
    ...voltDarkPalette.ui,
    background: '#ffffff',
    foreground: '#000000',
  },
  editor: {
    ...voltDarkPalette.editor,
    background: '#ffffff',
    foreground: '#1a1a1a',
  },
  sidebar: {
    ...voltDarkPalette.sidebar,
    background: '#f5f5f5',
    foreground: '#424242',
  },
};
