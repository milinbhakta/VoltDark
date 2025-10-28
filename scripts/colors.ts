export const colors = {
  black: '#111',
  white: '#fff',
  gray: ['#fafbfc', '#f6f8fa', '#e1e4e8', '#d1d5da', '#959da5', '#6a737d', '#586069', '#444d56', '#2f363d', '#24292e'],
  blue: ['#f1f8ff', '#dbedff', '#c8e1ff', '#79b8ff', '#2188ff', '#0366d6', '#005cc5', '#044289', '#032f62', '#05264c'],
  green: ['#f0fff4', '#dcffe4', '#bef5cb', '#85e89d', '#34d058', '#28a745', '#22863a', '#176f2c', '#165c26', '#144620'],
  yellow: ['#fffdef', '#fffbdd', '#fff5b1', '#ffea7f', '#ffdf5d', '#ffd33d', '#f9c513', '#dbab09', '#b08800', '#735c0f'],
  orange: ['#fff8f2', '#ffebda', '#ffd1ac', '#ffab70', '#fb8532', '#f66a0a', '#e36209', '#d15704', '#c24e00', '#a04100'],
  red: ['#ffeef0', '#ffdce0', '#fdaeb7', '#f97583', '#ea4a5a', '#d73a49', '#cb2431', '#b31d28', '#9e1c23', '#86181d'],
  purple: ['#f5f0ff', '#e6dcfd', '#d1bcf9', '#b392f0', '#8a63d2', '#6f42c1', '#5a32a3', '#4c2889', '#3a1d6e', '#29134e'],
  pink: ['#ffeef8', '#fedbf0', '#f9b3dd', '#f692ce', '#ec6cb9', '#ea4aaa', '#d03592', '#b93a86', '#99306f', '#6d224f'],
}

export const VoltThemes = {
  // Base colors
  primary: ['#87B1C8', '#5A8BA3'],
  background: ['#000000', '#ffffff'],
  backgroundAlt: ['#1d1d1d', '#f5f5f5'],
  foreground: ['#ffffff', '#000000'],
  foregroundAlt: ['#cccccc', '#333333'],
  foregroundMuted: ['#929292', '#6d6d6d'],
  foregroundInactive: ['#adadad', '#525252'],
  
  // Transparency variants
  primaryTransparent30: ['#87B1C830', '#5A8BA330'],
  primaryTransparent36: ['#87B1C836', '#5A8BA336'],
  primaryTransparent45: ['#87B1C845', '#5A8BA345'],
  primaryTransparent4a: ['#87B1C84a', '#5A8BA34a'],
  primaryTransparent5c: ['#87B1C85c', '#5A8BA35c'],
  primaryTransparent5e: ['#87B1C85e', '#5A8BA35e'],
  primaryTransparent85: ['#87B1C885', '#5A8BA385'],
  
  // Foreground transparency variants
  foregroundTransparent07: ['#ffffff07', '#00000007'],
  foregroundTransparent0A: ['#ffffff0A', '#0000000A'],
  foregroundTransparent0b: ['#ffffff0b', '#0000000b'],
  foregroundTransparent1a: ['#ffffff1a', '#0000001a'],
  foregroundTransparent1f: ['#ffffff1f', '#0000001f'],
  foregroundTransparent25: ['#FFFFFF25', '#00000025'],
  foregroundTransparent40: ['#ffffff40', '#00000040'],
  foregroundTransparent80: ['#ffffff80', '#00000080'],
  
  // Semantic colors
  error: ['#eb5757', '#d73a49'],
  warning: ['#e2c08d', '#bf8803'],
  info: ['#6dfff8', '#0969da'],
  success: ['#587c0c', '#28a745'],
  
  // Editor
  editorBackground: ['#000000', '#ffffff'],
  editorForeground: ['#d4d4d4', '#24292e'],
  editorLineNumberForeground: ['#ffffff25', '#00000040'],
  editorLineNumberActiveForeground: ['#e2e2e2', '#1d1d1d'],
  editorCursorForeground: ['#ffffff', '#000000'],
  editorCursorBackground: ['#000000', '#ffffff'],
  editorSelectionBackground: ['#87B1C830', '#5A8BA330'],
  editorInactiveSelectionBackground: ['#3a3d41', '#e8e8e8'],
  editorWhitespace: ['#e3e4e229', '#33333329'],
  editorSelectionHighlightBackground: ['#add6ff26', '#b3d7ff26'],
  editorSelectionHighlightBorder: ['#495F77', '#c8e1ff'],
  editorFindMatchBackground: ['#515c6a', '#ffdf5d'],
  editorFindMatchBorder: ['#74879f', '#f9c513'],
  editorFindMatchHighlightBackground: ['#ea5c0055', '#ffea7f55'],
  editorFindMatchHighlightBorder: ['#ffffff00', '#00000000'],
  editorFindRangeHighlightBackground: ['#3a3d4166', '#e8e8e866'],
  editorFindRangeHighlightBorder: ['#ffffff00', '#00000000'],
  editorRangeHighlightBackground: ['#ffffff0b', '#0000000b'],
  editorRangeHighlightBorder: ['#ffffff00', '#00000000'],
  editorHoverHighlightBackground: ['#264f7840', '#b3d7ff40'],
  editorWordHighlightStrongBackground: ['#004972b8', '#0969dab8'],
  editorWordHighlightBackground: ['#575757b8', '#d1d5dab8'],
  editorLineHighlightBackground: ['#ffffff0A', '#0000000A'],
  editorLineHighlightBorder: ['#282828', '#e8e8e8'],
  editorLinkActiveForeground: ['#6dfff8', '#0969da'],
  editorIndentGuideBackground: ['#404040', '#d1d5da'],
  editorIndentGuideActiveBackground: ['#707070', '#959da5'],
  editorRulerForeground: ['#5a5a5a', '#d1d5da'],
  editorBracketMatchBackground: ['#0064001a', '#28a7451a'],
  editorBracketMatchBorder: ['#888888', '#959da5'],
  editorFoldBackground: ['#264f784d', '#b3d7ff4d'],
  editorOverviewRulerBackground: ['#25252500', '#e8e8e800'],
  editorOverviewRulerBorder: ['#7f7f7f4d', '#d1d5da4d'],
  
  // Activity Bar
  activityBarForeground: ['#87B1C8', '#5A8BA3'],
  activityBarBackground: ['#000000', '#f5f5f5'],
  activityBarInactiveForeground: ['#87B1C845', '#5A8BA345'],
  activityBarBadgeForeground: ['#000000', '#ffffff'],
  activityBarBadgeBackground: ['#87B1C8', '#5A8BA3'],
  
  // Side Bar
  sideBarBackground: ['#000000', '#f5f5f5'],
  sideBarForeground: ['#adadad', '#525252'],
  sideBarBorder: ['#362d5966', '#e1e4e866'],
  sideBarDropBackground: ['#191324', '#e8e8e8'],
  sideBarSectionHeaderBackground: ['#000000', '#f5f5f5'],
  sideBarSectionHeaderForeground: ['#87B1C885', '#5A8BA385'],
  sideBarSectionHeaderBorder: ['#1d1d1d', '#e1e4e8'],
  sideBarTitleForeground: ['#bbbbbb30', '#33333330'],
  
  // List
  listInactiveSelectionBackground: ['#1d1d1d', '#e8e8e8'],
  listInactiveSelectionForeground: ['#cccccc', '#333333'],
  listHoverBackground: ['#87B1C885', '#5A8BA385'],
  listHoverForeground: ['#ffffff', '#000000'],
  listActiveSelectionBackground: ['#87B1C8', '#5A8BA3'],
  listActiveSelectionForeground: ['#000000', '#ffffff'],
  listDropBackground: ['#191324', '#e8e8e8'],
  listHighlightForeground: ['#ffffff', '#000000'],
  listFocusBackground: ['#87B1C85c', '#5A8BA35c'],
  listFocusForeground: ['#ffffff', '#000000'],
  treeIndentGuidesStroke: ['#191919', '#e1e4e8'],
  listFilterWidgetBackground: ['#653723', '#fff5b1'],
  listFilterWidgetOutline: ['#00000000', '#00000000'],
  listFilterWidgetNoMatchesOutline: ['#be1100', '#d73a49'],
  
  // Status Bar
  statusBarForeground: ['#929292', '#6d6d6d'],
  statusBarBackground: ['#000000', '#5A8BA3'],
  statusBarDebuggingBackground: ['#87B1C8', '#ff8c00'],
  statusBarDebuggingForeground: ['#000000', '#ffffff'],
  statusBarDebuggingBorder: ['#87B1C8', '#ff8c00'],
  statusBarNoFolderBackground: ['#000000', '#5A8BA3'],
  statusBarNoFolderForeground: ['#ffffff', '#ffffff'],
  statusBarItemHoverBackground: ['#ffffff1f', '#ffffff1f'],
  statusBarItemRemoteBackground: ['#000000', '#5A8BA3'],
  statusBarItemRemoteForeground: ['#87B1C8', '#ffffff'],
  statusBarItemActiveBackground: ['#FFFFFF25', '#ffffff25'],
  
  // Title Bar
  titleBarActiveBackground: ['#000000', '#f5f5f5'],
  titleBarActiveForeground: ['#cccccc', '#333333'],
  titleBarInactiveBackground: ['#1d1d1d', '#e8e8e8'],
  titleBarInactiveForeground: ['#cccccc99', '#33333399'],
  titleBarBorder: ['#00000000', '#e1e4e8'],
  
  // Menu
  menubarSelectionForeground: ['#ffffff', '#000000'],
  menubarSelectionBackground: ['#ffffff1a', '#0000001a'],
  menuForeground: ['#cccccc', '#333333'],
  menuBackground: ['#1d1d1d', '#ffffff'],
  menuSelectionForeground: ['#000000', '#ffffff'],
  menuSelectionBackground: ['#87B1C8', '#5A8BA3'],
  menuSelectionBorder: ['#00000000', '#00000000'],
  menuSeparatorBackground: ['#bbbbbb', '#e1e4e8'],
  menuBorder: ['#00000085', '#e1e4e885'],
  
  // Button
  buttonBackground: ['#87B1C8', '#5A8BA3'],
  buttonForeground: ['#000000', '#ffffff'],
  buttonHoverBackground: ['#aae1ff', '#7aadc5'],
  buttonSecondaryForeground: ['#ffffff', '#000000'],
  buttonSecondaryBackground: ['#3a3d41', '#e1e4e8'],
  buttonSecondaryHoverBackground: ['#45494e', '#d1d5da'],
  
  // Input
  inputBackground: ['#1d1d1d', '#ffffff'],
  inputBorder: ['#00000000', '#d1d5da'],
  inputForeground: ['#ffffff', '#000000'],
  inputPlaceholderForeground: ['#a6a6a6', '#6a737d'],
  inputOptionActiveBackground: ['#87B1C8', '#5A8BA3'],
  inputOptionActiveBorder: ['#007acc00', '#0969da00'],
  inputOptionActiveForeground: ['#000000', '#ffffff'],
  
  // Text Link
  textLinkForeground: ['#87B1C8', '#5A8BA3'],
  
  // Editor Gutter
  editorGutterBackground: ['#000000', '#ffffff'],
  editorGutterModifiedBackground: ['#6dfff8', '#0969da'],
  editorGutterAddedBackground: ['#587c0c', '#28a745'],
  editorGutterDeletedBackground: ['#eb5757', '#d73a49'],
  editorGutterFoldingControlForeground: ['#c5c5c5', '#6a737d'],
  editorGutterCommentRangeForeground: ['#c5c5c5', '#6a737d'],
  
  // Editor Code Lens
  editorCodeLensForeground: ['#999999', '#6a737d'],
  
  // Editor Group
  editorGroupBorder: ['#444444', '#e1e4e8'],
  editorGroupEmptyBackground: ['#000000', '#ffffff'],
  
  // Diff Editor
  diffEditorInsertedTextBackground: ['#9bb95533', '#28a74533'],
  diffEditorRemovedTextBackground: ['#ff000033', '#d73a4933'],
  diffEditorBorder: ['#444444', '#e1e4e8'],
  
  // Panel
  panelBackground: ['#000000', '#f5f5f5'],
  panelBorder: ['#80808059', '#e1e4e859'],
  panelTitleActiveBorder: ['#e7e7e7', '#5A8BA3'],
  panelTitleActiveForeground: ['#e7e7e7', '#000000'],
  panelTitleInactiveForeground: ['#e7e7e799', '#6a737d99'],
  panelSectionBorder: ['#80808059', '#e1e4e859'],
  
  // Badge
  badgeBackground: ['#4d4d4d', '#5A8BA3'],
  badgeForeground: ['#ffffff', '#ffffff'],
  
  // Terminal
  terminalForeground: ['#cccccc', '#333333'],
  terminalSelectionBackground: ['#ffffff40', '#00000040'],
  terminalBorder: ['#80808059', '#e1e4e859'],
  terminalAnsiBlack: ['#000000', '#000000'],
  terminalAnsiBlue: ['#2472c8', '#0969da'],
  terminalAnsiBrightBlack: ['#666666', '#6a737d'],
  terminalAnsiBrightBlue: ['#3b8eea', '#1f6feb'],
  terminalAnsiBrightCyan: ['#6dfff8', '#39c5cf'],
  terminalAnsiBrightGreen: ['#cdff5c', '#34d058'],
  terminalAnsiBrightMagenta: ['#d670d6', '#bc4abb'],
  terminalAnsiBrightRed: ['#f14c4c', '#e36209'],
  terminalAnsiBrightWhite: ['#e5e5e5', '#ffffff'],
  terminalAnsiBrightYellow: ['#f5f543', '#ffd33d'],
  terminalAnsiCyan: ['#6dfff8', '#1b7c83'],
  terminalAnsiGreen: ['#cdff5c', '#28a745'],
  terminalAnsiMagenta: ['#bc3fbc', '#8a4baf'],
  terminalAnsiRed: ['#cd3131', '#d73a49'],
  terminalAnsiWhite: ['#e5e5e5', '#d1d5da'],
  terminalAnsiYellow: ['#87B1C8', '#dbab09'],
  terminalCursorBackground: ['#87B1C8', '#5A8BA3'],
  terminalCursorForeground: ['#000000', '#ffffff'],
  
  // Breadcrumb
  breadcrumbBackground: ['#000000', '#f5f5f5'],
  breadcrumbForeground: ['#cccccccc', '#333333cc'],
  breadcrumbFocusForeground: ['#e0e0e0', '#000000'],
  breadcrumbActiveSelectionForeground: ['#e0e0e0', '#000000'],
  
  // Editor Group Header
  editorGroupHeaderTabsBackground: ['#000000', '#f5f5f5'],
  editorGroupHeaderTabsBorder: ['#1d1d1d', '#e1e4e8'],
  
  // Tab
  tabActiveForeground: ['#ffffff', '#000000'],
  tabBorder: ['#1d1d1d', '#e1e4e8'],
  tabActiveBackground: ['#1d1d1d', '#ffffff'],
  tabActiveBorder: ['#87B1C8', '#5A8BA3'],
  tabActiveBorderTop: ['#00000000', '#00000000'],
  tabInactiveBackground: ['#000000', '#f5f5f5'],
  tabInactiveForeground: ['#ffffff80', '#00000080'],
  
  // Scrollbar
  scrollbarShadow: ['#000000', '#6a737d33'],
  scrollbarSliderBackground: ['#87B1C85e', '#5A8BA35e'],
  scrollbarSliderHoverBackground: ['#87B1C8', '#5A8BA3'],
  scrollbarSliderActiveBackground: ['#87B1C8', '#5A8BA3'],
  
  // Progress Bar
  progressBarBackground: ['#87B1C8', '#5A8BA3'],
  
  // Widget
  widgetShadow: ['#0000005c', '#6a737d5c'],
  
  // Editor Widget
  editorWidgetForeground: ['#cccccc', '#333333'],
  editorWidgetBackground: ['#1b1b1b', '#f5f5f5'],
  editorWidgetResizeBorder: ['#5F5F5F', '#d1d5da'],
  
  // Picker Group
  pickerGroupBorder: ['#3f3f46', '#e1e4e8'],
  pickerGroupForeground: ['#ffffff', '#000000'],
  
  // Debug Tool Bar
  debugToolBarBackground: ['#333333', '#f5f5f5'],
  debugToolBarBorder: ['#474747', '#e1e4e8'],
  
  // Debug Exception Widget
  debugExceptionWidgetBackground: ['#333333', '#f5f5f5'],
  debugExceptionWidgetBorder: ['#474747', '#e1e4e8'],
  
  // Notifications
  notificationsForeground: ['#cccccc', '#333333'],
  notificationsBackground: ['#1d1d1d', '#ffffff'],
  notificationsBorder: ['#000000', '#e1e4e8'],
  notificationToastBorder: ['#000000', '#e1e4e8'],
  notificationsErrorIconForeground: ['#eb5757', '#d73a49'],
  notificationsWarningIconForeground: ['#87B1C8', '#bf8803'],
  notificationsInfoIconForeground: ['#6dfff8', '#0969da'],
  notificationCenterBorder: ['#000000', '#e1e4e8'],
  notificationCenterHeaderForeground: ['#cccccc', '#333333'],
  notificationCenterHeaderBackground: ['#000000', '#f5f5f5'],
  
  // Git Decoration
  gitDecorationAddedResourceForeground: ['#6dfff8', '#28a745'],
  gitDecorationConflictingResourceForeground: ['#6c6cc4', '#e36209'],
  gitDecorationDeletedResourceForeground: ['#eb5757', '#d73a49'],
  gitDecorationIgnoredResourceForeground: ['#8c8c8c', '#959da5'],
  gitDecorationModifiedResourceForeground: ['#87B1C8', '#0969da'],
  gitDecorationStageDeletedResourceForeground: ['#eb5757', '#d73a49'],
  gitDecorationStageModifiedResourceForeground: ['#e2c08d', '#bf8803'],
  gitDecorationSubmoduleResourceForeground: ['#8db9e2', '#0969da'],
  gitDecorationUntrackedResourceForeground: ['#6dfff8', '#28a745'],
  
  // Editor Marker Navigation
  editorMarkerNavigationBackground: ['#1d1d1d', '#f5f5f5'],
  editorMarkerNavigationErrorBackground: ['#eb5757', '#d73a49'],
  editorMarkerNavigationWarningBackground: ['#87B1C8', '#bf8803'],
  editorMarkerNavigationInfoBackground: ['#6dfff8', '#0969da'],
  
  // Merge
  mergeCurrentHeaderBackground: ['#367366', '#9be9a8'],
  mergeCurrentContentBackground: ['#27403B', '#ddf4ff'],
  mergeIncomingHeaderBackground: ['#395F8F', '#79b8ff'],
  mergeIncomingContentBackground: ['#28384B', '#dbedff'],
  mergeCommonHeaderBackground: ['#383838', '#e1e4e8'],
  mergeCommonContentBackground: ['#282828', '#f6f8fa'],
  
  // Editor Suggest Widget
  editorSuggestWidgetBackground: ['#000000', '#ffffff'],
  editorSuggestWidgetBorder: ['#1d1d1d', '#e1e4e8'],
  editorSuggestWidgetForeground: ['#ffffff', '#000000'],
  editorSuggestWidgetHighlightForeground: ['#6dfff8', '#0969da'],
  editorSuggestWidgetSelectedBackground: ['#87B1C84a', '#5A8BA34a'],
  
  // Editor Hover Widget
  editorHoverWidgetForeground: ['#ffffff', '#000000'],
  editorHoverWidgetBackground: ['#000000', '#ffffff'],
  editorHoverWidgetBorder: ['#1d1d1d', '#e1e4e8'],
  
  // Peek View
  peekViewBorder: ['#6dfff8', '#0969da'],
  peekViewEditorBackground: ['#011b1a', '#f5f5f5'],
  peekViewEditorMatchHighlightBackground: ['#ff8f0046', '#ffea7f46'],
  peekViewEditorMatchHighlightBorder: ['#ee931e', '#f9c513'],
  peekViewEditorGutterBackground: ['#011b1a', '#f5f5f5'],
  peekViewResultBackground: ['#000000', '#f5f5f5'],
  peekViewResultFileForeground: ['#ffffff', '#000000'],
  peekViewResultLineForeground: ['#bbbbbb', '#6a737d'],
  peekViewResultMatchHighlightBackground: ['#ea5c004d', '#ffea7f4d'],
  peekViewResultSelectionBackground: ['#3399ff33', '#0969da33'],
  peekViewResultSelectionForeground: ['#ffffff', '#000000'],
  peekViewTitleBackground: ['#000000', '#f5f5f5'],
  peekViewTitleDescriptionForeground: ['#ccccccb3', '#6a737db3'],
  peekViewTitleLabelForeground: ['#ffffff', '#000000'],
  
  // Icon
  iconForeground: ['#ffffff', '#000000'],
  
  // Checkbox
  checkboxBackground: ['#1d1d1d', '#ffffff'],
  checkboxForeground: ['#ffffff', '#000000'],
  checkboxBorder: ['#00000000', '#d1d5da'],
  
  // Dropdown
  dropdownBackground: ['#1d1d1d', '#ffffff'],
  dropdownForeground: ['#ffffff', '#000000'],
  dropdownBorder: ['#00000000', '#d1d5da'],
  
  // Minimap
  minimapFindMatchHighlight: ['#515c6a', '#ffdf5d'],
  minimapSelectionHighlight: ['#87B1C830', '#5A8BA330'],
  minimapErrorHighlight: ['#eb5757', '#d73a49'],
  minimapWarningHighlight: ['#e2c08d', '#bf8803'],
  minimapBackground: ['#000000', '#ffffff'],
  minimapGutterAddedBackground: ['#587c0c', '#28a745'],
  minimapGutterModifiedBackground: ['#6dfff8', '#0969da'],
  minimapGutterDeletedBackground: ['#eb5757', '#d73a49'],
  
  // Settings
  settingsHeaderForeground: ['#ffffff', '#000000'],
  settingsFocusedRowBackground: ['#ffffff07', '#00000007'],
  
  // Walk Through
  walkThroughEmbeddedEditorBackground: ['#00000050', '#f5f5f550'],
  
  // Special colors
  focusBorder: ['#87B1C8', '#5A8BA3'],
  selectionBackground: ['#87B1C836', '#5A8BA336'],
  editorErrorForeground: ['#eb5757', '#d73a49'],
  editorErrorBackground: ['#B73A3400', '#d73a4900'],
  editorErrorBorder: ['#ffffff00', '#00000000'],
  editorWarningForeground: ['#e2c08d', '#bf8803'],
  editorWarningBackground: ['#eb575700', '#bf880300'],
  editorWarningBorder: ['#ffffff00', '#00000000'],
  editorInfoForeground: ['#6dfff8', '#0969da'],
  editorInfoBackground: ['#4490BF00', '#0969da00'],
  editorInfoBorder: ['#4490BF00', '#0969da00'],
} satisfies Record<string, [string, string]>
