/**
 * This file defines standard formatting for elements
 which can be reused across the application's files.
 To extend with additional properties within files,
 refer to the following example syntax:
 Object.assign({}, baseButton, {
  flex: 1,
  backgroundColor: colors.caramel,
 })
 */
import { colors } from './colors.js';

export const baseButton = {
  'color': colors.primary1,
  'fontSize': 14,
};

export const baseComponent = {
  'fontSize': 14,
  'color': colors.secondary1,
  'backgroundColor': colors.primary1,
  'borderColor': colors.secondary2,
  'borderWidth': 4,
};

export const baseContainer = {
  'flex': 1, 
  'justifyContent': 'center',
  'alignItems': 'center',
};

