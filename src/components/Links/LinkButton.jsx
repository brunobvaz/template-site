export default function LinkButton({
  as: Component = 'a',
  backgroundColor,
  borderColor,
  borderRadius,
  children,
  className = '',
  color,
  fontSize,
  fontWeight,
  gap,
  hoverBackgroundColor,
  hoverBorderColor,
  hoverColor,
  minHeight,
  padding,
  style,
  variant = 'primary',
  ...props
}) {
  const customStyles = {
    '--link-button-color': color,
    '--link-button-background': backgroundColor,
    '--link-button-border-color': borderColor,
    '--link-button-hover-color': hoverColor,
    '--link-button-hover-background': hoverBackgroundColor,
    '--link-button-hover-border-color': hoverBorderColor,
    '--link-button-border-radius': borderRadius,
    '--link-button-font-size': fontSize,
    '--link-button-font-weight': fontWeight,
    '--link-button-gap': gap,
    '--link-button-min-height': minHeight,
    '--link-button-padding': padding,
    ...style,
  }

  return (
    <Component
      className={['btn', `btn-${variant}`, className].filter(Boolean).join(' ')}
      style={customStyles}
      {...props}
    >
      {children}
    </Component>
  )
}
