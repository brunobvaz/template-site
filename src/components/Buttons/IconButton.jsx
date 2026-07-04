export default function IconButton({
  backgroundColor,
  borderColor,
  borderRadius,
  className = '',
  color,
  height,
  hoverBackgroundColor,
  hoverBorderColor,
  hoverColor,
  icon: Icon,
  iconSize = 24,
  iconStrokeWidth = 1.8,
  padding,
  style,
  type = 'button',
  width,
  ...props
}) {
  const customStyles = {
    '--icon-button-background': backgroundColor,
    '--icon-button-border-color': borderColor,
    '--icon-button-border-radius': borderRadius,
    '--icon-button-color': color,
    '--icon-button-height': height,
    '--icon-button-hover-background': hoverBackgroundColor,
    '--icon-button-hover-border-color': hoverBorderColor,
    '--icon-button-hover-color': hoverColor,
    '--icon-button-padding': padding,
    '--icon-button-width': width,
    ...style,
  }

  return (
    <button
      className={className}
      style={customStyles}
      type={type}
      {...props}
    >
      {Icon && <Icon aria-hidden="true" size={iconSize} strokeWidth={iconStrokeWidth} />}
    </button>
  )
}
