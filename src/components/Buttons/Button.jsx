export default function Button({
  active = false,
  activeClassName = '',
  backgroundColor,
  borderColor,
  borderRadius,
  children,
  className = '',
  color,
  fontSize,
  gap,
  hoverBackgroundColor,
  hoverBorderColor,
  hoverColor,
  padding,
  style,
  type = 'button',
  ...props
}) {
  const customStyles = {
    '--button-background': backgroundColor,
    '--button-border-color': borderColor,
    '--button-border-radius': borderRadius,
    '--button-color': color,
    '--button-font-size': fontSize,
    '--button-gap': gap,
    '--button-hover-background': hoverBackgroundColor,
    '--button-hover-border-color': hoverBorderColor,
    '--button-hover-color': hoverColor,
    '--button-padding': padding,
    ...style,
  }

  return (
    <button
      className={[className, active ? activeClassName : null].filter(Boolean).join(' ')}
      style={customStyles}
      type={type}
      {...props}
    >
      {children}
    </button>
  )
}
