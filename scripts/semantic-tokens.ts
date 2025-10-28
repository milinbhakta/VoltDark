/**
 * Semantic Token Colors Configuration
 * Defines semantic highlighting for LSP-aware syntax highlighting
 */

import { ColorPalette } from './palette';

/**
 * Generate semantic token colors from palette
 */
export const createSemanticTokenColors = (palette: ColorPalette) => {
  const { syntax } = palette;
  
  return {
    // Variables
    'variable': syntax.variable,
    'variable.readonly': syntax.constant,
    'variable.defaultLibrary': syntax.class,
    'variable.constant': syntax.constant,
    
    // Properties
    'property': syntax.property,
    'property.readonly': syntax.constant,
    
    // Parameters
    'parameter': syntax.parameter,
    
    // Functions
    'function': syntax.function,
    'function.defaultLibrary': syntax.function,
    
    // Methods
    'method': syntax.function,
    'method.defaultLibrary': syntax.function,
    
    // Classes
    'class': syntax.class,
    'class.defaultLibrary': syntax.class,
    
    // Interfaces
    'interface': syntax.class,
    
    // Types
    'type': syntax.type,
    'typeParameter': syntax.type,
    
    // Enums
    'enum': syntax.class,
    'enumMember': syntax.class,
    
    // Namespaces
    'namespace': syntax.class,
    
    // Keywords
    'keyword': syntax.keyword,
    
    // Strings
    'string': syntax.string,
    
    // Numbers
    'number': syntax.number,
    
    // Comments
    'comment': {
      foreground: syntax.comment,
      fontStyle: 'italic',
    },
    
    // Operators
    'operator': syntax.operator,
    
    // Macros (for C/C++, Rust)
    'macro': syntax.function,
    
    // Decorators (for Python, TypeScript)
    'decorator': syntax.function,
    
    // Labels
    'label': syntax.keyword,
  };
};
