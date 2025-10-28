/**
 * UI Colors Configuration
 * Defines VS Code UI theme colors using the color palette
 * Following DRY principle with structured approach
 */

import { ColorPalette, alpha } from './palette';

/**
 * Generate UI colors from palette
 */
export const createUIColors = (palette: ColorPalette) => {
  const { ui, editor, sidebar, terminal, primary, error, warning, info } = palette;
  
  return {
    // ========================================================================
    // GLOBAL UI
    // ========================================================================
    'foreground': ui.foreground,
    'focusBorder': primary,
    'selection.background': ui.selection,
    'widget.shadow': alpha('#000000', 0.36),
    'icon.foreground': ui.foreground,
    
    // ========================================================================
    // EDITOR
    // ========================================================================
    'editor.background': editor.background,
    'editor.foreground': editor.foreground,
    'editorCursor.foreground': editor.cursor,
    'editorCursor.background': editor.cursorBackground,
    'editor.lineHighlightBackground': editor.lineHighlight,
    'editor.lineHighlightBorder': alpha('#282828', 1),
    'editor.selectionBackground': editor.selection,
    'editor.inactiveSelectionBackground': alpha('#3a3d41', 1),
    'editor.selectionHighlightBackground': alpha('#add6ff', 0.15),
    'editor.selectionHighlightBorder': alpha('#495F77', 1),
    'editorLineNumber.foreground': editor.lineNumber,
    'editorLineNumber.activeForeground': editor.lineNumberActive,
    'editorWhitespace.foreground': alpha('#e3e4e2', 0.16),
    'editorIndentGuide.background': alpha('#404040', 1),
    'editorIndentGuide.activeBackground': alpha('#707070', 1),
    'editorRuler.foreground': alpha('#5a5a5a', 1),
    
    // Editor - Find/Replace
    'editor.findMatchBackground': alpha('#515c6a', 1),
    'editor.findMatchBorder': alpha('#74879f', 1),
    'editor.findMatchHighlightBackground': alpha('#ea5c00', 0.33),
    'editor.findRangeHighlightBackground': alpha('#3a3d41', 0.4),
    'editor.wordHighlightBackground': alpha('#575757', 0.72),
    'editor.wordHighlightStrongBackground': alpha('#004972', 0.72),
    'editor.hoverHighlightBackground': alpha('#264f78', 0.25),
    
    // Editor - Errors & Warnings
    'editorError.foreground': error,
    'editorError.border': alpha('#ffffff', 0),
    'editorWarning.foreground': ui.foreground,
    'editorWarning.border': alpha('#ffffff', 0),
    'editorInfo.foreground': info,
    'editorInfo.border': alpha('#ffffff', 0),
    
    // Editor - Gutter
    'editorGutter.background': editor.background,
    'editorGutter.modifiedBackground': info,
    'editorGutter.addedBackground': alpha('#587c0c', 1),
    'editorGutter.deletedBackground': error,
    
    // Editor - Bracket matching
    'editorBracketMatch.background': alpha('#006400', 0.1),
    'editorBracketMatch.border': alpha('#888888', 1),
    
    // Editor - Code Lens
    'editorCodeLens.foreground': alpha('#999999', 1),
    
    // Editor - Links
    'editorLink.activeForeground': info,
    
    // ========================================================================
    // SIDEBAR
    // ========================================================================
    'sideBar.background': sidebar.background,
    'sideBar.foreground': sidebar.foreground,
    'sideBar.border': sidebar.border,
    'sideBar.dropBackground': alpha('#191324', 1),
    'sideBarTitle.foreground': alpha('#bbbbbb', 0.19),
    'sideBarSectionHeader.background': ui.background,
    'sideBarSectionHeader.foreground': alpha(primary, 0.52),
    'sideBarSectionHeader.border': alpha('#1d1d1d', 1),
    
    // ========================================================================
    // ACTIVITY BAR
    // ========================================================================
    'activityBar.background': ui.background,
    'activityBar.foreground': primary,
    'activityBar.inactiveForeground': alpha(primary, 0.27),
    'activityBar.border': alpha('#000000', 0),
    'activityBarBadge.background': primary,
    'activityBarBadge.foreground': ui.background,
    
    // ========================================================================
    // LISTS & TREES
    // ========================================================================
    'list.activeSelectionBackground': primary,
    'list.activeSelectionForeground': ui.background,
    'list.inactiveSelectionBackground': alpha('#1d1d1d', 1),
    'list.inactiveSelectionForeground': alpha('#cccccc', 1),
    'list.hoverBackground': alpha(primary, 0.52),
    'list.hoverForeground': ui.foreground,
    'list.focusBackground': alpha(primary, 0.36),
    'list.focusForeground': ui.foreground,
    'list.highlightForeground': ui.foreground,
    'list.dropBackground': alpha('#191324', 1),
    'tree.indentGuidesStroke': alpha('#191919', 1),
    
    // ========================================================================
    // STATUS BAR
    // ========================================================================
    'statusBar.background': ui.background,
    'statusBar.foreground': alpha('#929292', 1),
    'statusBar.border': alpha('#000000', 0),
    'statusBar.debuggingBackground': primary,
    'statusBar.debuggingForeground': ui.background,
    'statusBar.debuggingBorder': primary,
    'statusBar.noFolderBackground': ui.background,
    'statusBar.noFolderForeground': ui.foreground,
    'statusBarItem.activeBackground': alpha('#ffffff', 0.15),
    'statusBarItem.hoverBackground': alpha('#ffffff', 0.12),
    'statusBarItem.remoteBackground': ui.background,
    'statusBarItem.remoteForeground': primary,
    
    // ========================================================================
    // TITLE BAR
    // ========================================================================
    'titleBar.activeBackground': ui.background,
    'titleBar.activeForeground': alpha('#cccccc', 1),
    'titleBar.inactiveBackground': alpha('#1d1d1d', 1),
    'titleBar.inactiveForeground': alpha('#cccccc', 0.6),
    'titleBar.border': alpha('#000000', 0),
    
    // ========================================================================
    // MENU BAR
    // ========================================================================
    'menubar.selectionForeground': ui.foreground,
    'menubar.selectionBackground': alpha('#ffffff', 0.1),
    'menu.foreground': alpha('#cccccc', 1),
    'menu.background': alpha('#1d1d1d', 1),
    'menu.selectionForeground': ui.background,
    'menu.selectionBackground': primary,
    'menu.selectionBorder': alpha('#000000', 0),
    'menu.separatorBackground': alpha('#bbbbbb', 1),
    'menu.border': alpha('#000000', 0.52),
    
    // ========================================================================
    // BUTTONS
    // ========================================================================
    'button.background': primary,
    'button.foreground': ui.background,
    'button.hoverBackground': alpha('#aae1ff', 1),
    'button.secondaryBackground': alpha('#3a3d41', 1),
    'button.secondaryForeground': ui.foreground,
    'button.secondaryHoverBackground': alpha('#45494e', 1),
    
    // ========================================================================
    // INPUT FIELDS
    // ========================================================================
    'input.background': alpha('#1d1d1d', 1),
    'input.foreground': ui.foreground,
    'input.border': alpha('#000000', 0),
    'input.placeholderForeground': alpha('#a6a6a6', 1),
    'inputOption.activeBackground': primary,
    'inputOption.activeForeground': ui.background,
    'inputOption.activeBorder': alpha('#007acc', 0),
    
    // ========================================================================
    // DROPDOWNS & CHECKBOXES
    // ========================================================================
    'dropdown.background': alpha('#1d1d1d', 1),
    'dropdown.foreground': ui.foreground,
    'dropdown.border': alpha('#000000', 0),
    'checkbox.background': alpha('#1d1d1d', 1),
    'checkbox.foreground': ui.foreground,
    'checkbox.border': alpha('#000000', 0),
    
    // ========================================================================
    // SCROLLBAR
    // ========================================================================
    'scrollbar.shadow': ui.background,
    'scrollbarSlider.background': alpha(primary, 0.37),
    'scrollbarSlider.hoverBackground': primary,
    'scrollbarSlider.activeBackground': primary,
    
    // ========================================================================
    // TABS
    // ========================================================================
    'editorGroupHeader.tabsBackground': ui.background,
    'editorGroupHeader.tabsBorder': alpha('#1d1d1d', 1),
    'editorGroup.border': alpha('#444444', 1),
    'editorGroup.emptyBackground': ui.background,
    'tab.activeBackground': alpha('#1d1d1d', 1),
    'tab.activeForeground': ui.foreground,
    'tab.activeBorder': primary,
    'tab.activeBorderTop': alpha('#000000', 0),
    'tab.inactiveBackground': ui.background,
    'tab.inactiveForeground': alpha('#ffffff', 0.5),
    'tab.border': alpha('#1d1d1d', 1),
    
    // ========================================================================
    // PANELS
    // ========================================================================
    'panel.background': ui.background,
    'panel.border': alpha('#808080', 0.35),
    'panelTitle.activeBorder': alpha('#e7e7e7', 1),
    'panelTitle.activeForeground': alpha('#e7e7e7', 1),
    'panelTitle.inactiveForeground': alpha('#e7e7e7', 0.6),
    'panelSection.border': alpha('#808080', 0.35),
    
    // ========================================================================
    // TERMINAL
    // ========================================================================
    'terminal.foreground': alpha('#cccccc', 1),
    'terminal.background': ui.background,
    'terminal.border': alpha('#808080', 0.35),
    'terminal.selectionBackground': alpha('#ffffff', 0.25),
    'terminalCursor.foreground': ui.background,
    'terminalCursor.background': primary,
    
    // Terminal ANSI colors
    'terminal.ansiBlack': terminal.black,
    'terminal.ansiRed': terminal.red,
    'terminal.ansiGreen': terminal.green,
    'terminal.ansiYellow': terminal.yellow,
    'terminal.ansiBlue': terminal.blue,
    'terminal.ansiMagenta': terminal.magenta,
    'terminal.ansiCyan': terminal.cyan,
    'terminal.ansiWhite': terminal.white,
    'terminal.ansiBrightBlack': terminal.brightBlack,
    'terminal.ansiBrightRed': terminal.brightRed,
    'terminal.ansiBrightGreen': terminal.brightGreen,
    'terminal.ansiBrightYellow': terminal.brightYellow,
    'terminal.ansiBrightBlue': terminal.brightBlue,
    'terminal.ansiBrightMagenta': terminal.brightMagenta,
    'terminal.ansiBrightCyan': terminal.brightCyan,
    'terminal.ansiBrightWhite': terminal.brightWhite,
    
    // ========================================================================
    // NOTIFICATIONS
    // ========================================================================
    'notifications.background': alpha('#1d1d1d', 1),
    'notifications.foreground': alpha('#cccccc', 1),
    'notifications.border': alpha('#1d1d1d', 1),
    'notificationCenter.border': ui.background,
    'notificationCenterHeader.background': ui.background,
    'notificationCenterHeader.foreground': alpha('#cccccc', 1),
    'notificationToast.border': ui.background,
    'notificationsErrorIcon.foreground': error,
    'notificationsWarningIcon.foreground': primary,
    'notificationsInfoIcon.foreground': info,
    
    // ========================================================================
    // BADGES
    // ========================================================================
    'badge.background': alpha('#4d4d4d', 1),
    'badge.foreground': ui.foreground,
    
    // ========================================================================
    // PROGRESS BAR
    // ========================================================================
    'progressBar.background': primary,
    
    // ========================================================================
    // BREADCRUMBS
    // ========================================================================
    'breadcrumb.background': editor.background,
    'breadcrumb.foreground': alpha('#cccccc', 0.8),
    'breadcrumb.focusForeground': alpha('#e0e0e0', 1),
    'breadcrumb.activeSelectionForeground': alpha('#e0e0e0', 1),
    
    // ========================================================================
    // EDITOR WIDGETS
    // ========================================================================
    'editorWidget.background': alpha('#1b1b1b', 1),
    'editorWidget.foreground': alpha('#cccccc', 1),
    'editorWidget.resizeBorder': alpha('#5F5F5F', 1),
    
    // Suggest Widget
    'editorSuggestWidget.background': ui.background,
    'editorSuggestWidget.foreground': ui.foreground,
    'editorSuggestWidget.border': alpha('#1d1d1d', 1),
    'editorSuggestWidget.highlightForeground': info,
    'editorSuggestWidget.selectedBackground': alpha(primary, 0.29),
    
    // Hover Widget
    'editorHoverWidget.background': ui.background,
    'editorHoverWidget.foreground': ui.foreground,
    'editorHoverWidget.border': alpha('#1d1d1d', 1),
    
    // ========================================================================
    // PEEK VIEW
    // ========================================================================
    'peekView.border': info,
    'peekViewEditor.background': alpha('#011b1a', 1),
    'peekViewEditor.matchHighlightBackground': alpha('#ff8f00', 0.27),
    'peekViewEditor.matchHighlightBorder': alpha('#ee931e', 1),
    'peekViewEditorGutter.background': alpha('#011b1a', 1),
    'peekViewResult.background': ui.background,
    'peekViewResult.fileForeground': ui.foreground,
    'peekViewResult.lineForeground': alpha('#bbbbbb', 1),
    'peekViewResult.matchHighlightBackground': alpha('#ea5c00', 0.3),
    'peekViewResult.selectionBackground': alpha('#3399ff', 0.2),
    'peekViewResult.selectionForeground': ui.foreground,
    'peekViewTitle.background': ui.background,
    'peekViewTitleLabel.foreground': ui.foreground,
    'peekViewTitleDescription.foreground': alpha('#cccccc', 0.7),
    
    // ========================================================================
    // GIT DECORATIONS
    // ========================================================================
    'gitDecoration.addedResourceForeground': info,
    'gitDecoration.modifiedResourceForeground': primary,
    'gitDecoration.deletedResourceForeground': error,
    'gitDecoration.untrackedResourceForeground': info,
    'gitDecoration.ignoredResourceForeground': alpha('#8c8c8c', 1),
    'gitDecoration.conflictingResourceForeground': alpha('#6c6cc4', 1),
    'gitDecoration.submoduleResourceForeground': alpha('#8db9e2', 1),
    'gitDecoration.stageModifiedResourceForeground': alpha('#e2c08d', 1),
    'gitDecoration.stageDeletedResourceForeground': error,
    
    // ========================================================================
    // DIFF EDITOR
    // ========================================================================
    'diffEditor.border': alpha('#444444', 1),
    'diffEditor.insertedTextBackground': alpha('#9bb955', 0.2),
    'diffEditor.removedTextBackground': alpha('#ff0000', 0.2),
    
    // ========================================================================
    // MERGE CONFLICTS
    // ========================================================================
    'merge.currentHeaderBackground': alpha('#367366', 1),
    'merge.currentContentBackground': alpha('#27403B', 1),
    'merge.incomingHeaderBackground': alpha('#395F8F', 1),
    'merge.incomingContentBackground': alpha('#28384B', 1),
    'merge.commonHeaderBackground': alpha('#383838', 1),
    'merge.commonContentBackground': alpha('#282828', 1),
    
    // ========================================================================
    // MINIMAP
    // ========================================================================
    'minimap.background': ui.background,
    'minimap.findMatchHighlight': alpha('#515c6a', 1),
    'minimap.selectionHighlight': editor.selection,
    'minimap.errorHighlight': error,
    'minimap.warningHighlight': ui.background,
    'minimapGutter.addedBackground': alpha('#587c0c', 1),
    'minimapGutter.modifiedBackground': info,
    'minimapGutter.deletedBackground': error,
    
    // ========================================================================
    // DEBUG
    // ========================================================================
    'debugToolBar.background': alpha('#333333', 1),
    'debugToolBar.border': alpha('#474747', 1),
    'debugExceptionWidget.background': alpha('#333333', 1),
    'debugExceptionWidget.border': alpha('#474747', 1),
    
    // ========================================================================
    // SETTINGS
    // ========================================================================
    'settings.headerForeground': ui.foreground,
    'settings.focusedRowBackground': alpha('#ffffff', 0.027),
    
    // ========================================================================
    // PICKER (Command Palette)
    // ========================================================================
    'pickerGroup.foreground': ui.foreground,
    'pickerGroup.border': alpha('#3f3f46', 1),
    
    // ========================================================================
    // TEXT LINK
    // ========================================================================
    'textLink.foreground': primary,
    
    // ========================================================================
    // EDITOR MARKERS
    // ========================================================================
    'editorMarkerNavigation.background': alpha('#1d1d1d', 1),
    'editorMarkerNavigationError.background': error,
    'editorMarkerNavigationWarning.background': primary,
    'editorMarkerNavigationInfo.background': info,
    
    // ========================================================================
    // OVERVIEW RULER
    // ========================================================================
    'editorOverviewRuler.background': alpha('#252525', 0),
    'editorOverviewRuler.border': alpha('#7f7f7f', 0.3),
  };
};
