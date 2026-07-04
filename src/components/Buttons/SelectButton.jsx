export default function SelectButton({
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
  leadingIcon: LeadingIcon,
  leadingIconSize = 18,
  minHeight,
  padding,
  style,
  trailingIcon: TrailingIcon,
  trailingIconSize = 16,
  type = 'button',
  ...props
}) {
  const customStyles = {
    '--select-button-background': backgroundColor,
    '--select-button-border-color': borderColor,
    '--select-button-border-radius': borderRadius,
    '--select-button-color': color,
    '--select-button-font-size': fontSize,
    '--select-button-font-weight': fontWeight,
    '--select-button-gap': gap,
    '--select-button-hover-background': hoverBackgroundColor,
    '--select-button-hover-border-color': hoverBorderColor,
    '--select-button-hover-color': hoverColor,
    '--select-button-min-height': minHeight,
    '--select-button-padding': padding,
    ...style,
  }

  return (
    <button
      className={className}
      style={customStyles}
      type={type}
      {...props}
    >
      {LeadingIcon && <LeadingIcon aria-hidden="true" size={leadingIconSize} strokeWidth={1.8} />}
      {children}
      {TrailingIcon && <TrailingIcon aria-hidden="true" size={trailingIconSize} strokeWidth={1.8} />}
    </button>
  )
}
