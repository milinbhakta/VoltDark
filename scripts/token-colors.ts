/**
 * Token Colors Configuration
 * Defines syntax highlighting rules using the color palette
 * Following DRY principle with helper functions
 */

import { ColorPalette } from './palette';

/**
 * Helper type for token color settings
 */
interface TokenColorSetting {
  foreground?: string;
  background?: string;
  fontStyle?: string;
}

interface TokenColorRule {
  name?: string;
  scope: string | string[];
  settings: TokenColorSetting;
}

/**
 * Helper function to create token color rule
 */
const rule = (
  scope: string | string[],
  settings: TokenColorSetting,
  name?: string
): TokenColorRule => ({
  ...(name && { name }),
  scope,
  settings,
});

/**
 * Generate token colors from palette
 */
export const createTokenColors = (palette: ColorPalette): TokenColorRule[] => {
  const { syntax, success, error, warning, info } = palette;
  
  return [
    // ========================================================================
    // STRINGS
    // ========================================================================
    rule('string', { foreground: syntax.string }, 'Strings'),
    rule(
      ['punctuation.definition.string.begin', 'punctuation.definition.string.end'],
      { foreground: syntax.string },
      'String punctuation'
    ),
    
    // ========================================================================
    // NUMBERS & CONSTANTS
    // ========================================================================
    rule('constant.numeric', { foreground: syntax.number }, 'Numbers'),
    rule('constant', { foreground: syntax.constant }, 'Constants'),
    rule('punctuation.definition.constant', { foreground: syntax.constant }),
    rule('constant.language', { foreground: syntax.boolean }, 'Language constants'),
    rule('variable.other.constant', { foreground: syntax.constant }),
    rule('support.constant', { foreground: syntax.constant }),
    
    // ========================================================================
    // KEYWORDS
    // ========================================================================
    rule('keyword', { foreground: syntax.keyword }, 'Keywords'),
    rule('keyword.control', { foreground: syntax.keyword }, 'Control keywords'),
    rule('storage', { foreground: syntax.keyword }, 'Storage keywords'),
    rule('keyword.operator.new', { foreground: syntax.keyword }),
    rule('keyword.operator.expression.typeof', { foreground: syntax.keyword }),
    rule('keyword.operator.expression.instanceof', { foreground: syntax.keyword }),
    
    // ========================================================================
    // OPERATORS
    // ========================================================================
    rule('keyword.operator', { foreground: syntax.operator }, 'Operators'),
    rule(['keyword.operator.logical', 'keyword.operator.bitwise'], { foreground: syntax.operator }),
    rule(['keyword.operator.arithmetic', 'keyword.operator.comparison'], { foreground: syntax.operator }),
    
    // ========================================================================
    // FUNCTIONS
    // ========================================================================
    rule(
      ['entity.name.function', 'support.function', 'meta.function-call'],
      { foreground: syntax.function },
      'Functions'
    ),
    rule('support.function.builtin', { foreground: syntax.function }),
    rule('keyword.other.special-method', { foreground: syntax.function }),
    
    // ========================================================================
    // CLASSES & TYPES
    // ========================================================================
    rule(
      ['entity.name.class', 'entity.name.type', 'support.class', 'support.type'],
      { foreground: syntax.class },
      'Classes and Types'
    ),
    rule('entity.name.type.namespace', { foreground: syntax.class }),
    rule('entity.name.namespace', { foreground: syntax.class }),
    
    // ========================================================================
    // VARIABLES
    // ========================================================================
    rule('variable', { foreground: syntax.variable }, 'Variables'),
    rule('variable.other.readwrite', { foreground: syntax.variable }),
    rule('variable.other.property', { foreground: syntax.property }),
    rule('meta.object-literal.key', { foreground: syntax.property }),
    rule('support.variable.property', { foreground: syntax.property }),
    
    // ========================================================================
    // PARAMETERS
    // ========================================================================
    rule('variable.parameter', { foreground: syntax.parameter }, 'Function parameters'),
    rule('variable.parameter.function', { foreground: syntax.parameter }),
    
    // ========================================================================
    // COMMENTS
    // ========================================================================
    rule('comment', { foreground: syntax.comment, fontStyle: 'italic' }, 'Comments'),
    rule('punctuation.definition.comment', { foreground: syntax.comment }),
    
    // ========================================================================
    // HTML/XML TAGS
    // ========================================================================
    rule('entity.name.tag', { foreground: syntax.tag }, 'HTML/XML Tags'),
    rule('entity.other.attribute-name', { foreground: syntax.attribute }, 'Attributes'),
    rule('entity.other.attribute-name.id', { foreground: syntax.function, fontStyle: 'normal' }),
    
    // ========================================================================
    // JSON
    // ========================================================================
    rule('support.type.property-name.json', { foreground: syntax.property }, 'JSON keys'),
    rule(
      [
        'source.json meta.structure.dictionary.json > value.json > string.quoted.json',
        'source.json meta.structure.array.json > value.json > string.quoted.json'
      ],
      { foreground: syntax.string },
      'JSON string values'
    ),
    
    // ========================================================================
    // MARKDOWN
    // ========================================================================
    rule('markup.heading', { foreground: syntax.variable }, 'Markdown headings'),
    rule('markup.bold', { foreground: syntax.constant, fontStyle: 'bold' }, 'Markdown bold'),
    rule('markup.italic', { foreground: syntax.keyword, fontStyle: 'italic' }, 'Markdown italic'),
    rule('markup.inline.raw', { foreground: syntax.string }, 'Markdown inline code'),
    rule('markup.underline.link', { foreground: syntax.keyword }, 'Markdown links'),
    rule('string.other.link.title.markdown', { foreground: syntax.function }, 'Markdown link titles'),
    
    // ========================================================================
    // CSS/SCSS
    // ========================================================================
    rule('support.type.property-name.css', { foreground: syntax.property }, 'CSS properties'),
    rule('support.constant.property-value.css', { foreground: syntax.constant }, 'CSS values'),
    rule('entity.other.attribute-name.class.css', { foreground: syntax.attribute }, 'CSS classes'),
    rule('entity.other.attribute-name.id.css', { foreground: syntax.function }, 'CSS IDs'),
    rule('meta.selector', { foreground: syntax.keyword }, 'CSS selectors'),
    
    // ========================================================================
    // JAVASCRIPT/TYPESCRIPT
    // ========================================================================
    rule('support.type.primitive.ts', { foreground: syntax.type }, 'TypeScript primitives'),
    rule('keyword.operator.expression.import', { foreground: syntax.function }, 'Import keyword'),
    rule('variable.language', { foreground: syntax.class }, 'Language variables (this, super)'),
    
    // ========================================================================
    // PYTHON
    // ========================================================================
    rule('support.type.python', { foreground: syntax.type }, 'Python types'),
    rule('keyword.operator.logical.python', { foreground: syntax.keyword }, 'Python logical operators'),
    rule('meta.function.decorator.python', { foreground: syntax.function }, 'Python decorators'),
    
    // ========================================================================
    // JAVA
    // ========================================================================
    rule('storage.type.java', { foreground: syntax.type }, 'Java types'),
    rule('storage.modifier.import.java', { foreground: syntax.class }, 'Java imports'),
    
    // ========================================================================
    // RUST
    // ========================================================================
    rule('entity.name.lifetime.rust', { foreground: syntax.class }, 'Rust lifetimes'),
    rule('support.function.std.rust', { foreground: syntax.function }, 'Rust std functions'),
    
    // ========================================================================
    // REGEX
    // ========================================================================
    rule('string.regexp', { foreground: syntax.class }, 'Regular expressions'),
    rule('constant.character.escape', { foreground: syntax.class }, 'Escape characters'),
    
    // ========================================================================
    // DIFF
    // ========================================================================
    rule('markup.inserted.diff', { foreground: success }, 'Diff inserted'),
    rule('markup.deleted.diff', { foreground: syntax.variable }, 'Diff deleted'),
    rule('markup.changed.diff', { foreground: info }, 'Diff changed'),
  ];
};
