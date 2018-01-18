/*
**  Lib common helpers
*/

// Check if element is neither null or undefined
export function exists(item) {
  return item !== null && item !== undefined
}

// Check if item is non-empty string
export function fullString(str) {
  return exists(item) && str.trim() !== ""
}
