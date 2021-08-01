export default function focusClasses (classes, isFocused) {
  const classNames = classes.split(' ')
  return classNames.map((className) => {
    return `focus:${className}${isFocused ? ` ${className}` : ''}`
  }).join(' ')
}