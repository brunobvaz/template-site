import { NavLink as RouterNavLink } from 'react-router-dom'

function resolveClassName(className, state) {
  return typeof className === 'function' ? className(state) : className
}

export default function NavLink({
  activeBackgroundColor,
  activeClassName = 'nav-link-active',
  activeColor,
  backgroundColor,
  borderRadius,
  children,
  className = '',
  color,
  fontSize,
  fontWeight,
  gap,
  hoverBackgroundColor,
  hoverColor,
  padding,
  style,
  underline = false,
  underlineColor,
  underlineInset,
  underlineOffset,
  underlineThickness,
  variant = 'default',
  ...props
}) {
  const customStyles = {
    '--nav-link-color': color,
    '--nav-link-background': backgroundColor,
    '--nav-link-hover-color': hoverColor,
    '--nav-link-hover-background': hoverBackgroundColor,
    '--nav-link-active-color': activeColor,
    '--nav-link-active-background': activeBackgroundColor,
    '--nav-link-underline-color': underlineColor,
    '--nav-link-underline-inset': underlineInset,
    '--nav-link-underline-offset': underlineOffset,
    '--nav-link-underline-thickness': underlineThickness,
    '--nav-link-font-size': fontSize,
    '--nav-link-font-weight': fontWeight,
    '--nav-link-padding': padding,
    '--nav-link-border-radius': borderRadius,
    '--nav-link-gap': gap,
    ...style,
  }

  return (
    <RouterNavLink
      className={(state) => {
        const resolvedClassName = resolveClassName(className, state)
        const classes = ['nav-link', resolvedClassName]

        if (state.isActive) {
          classes.push(activeClassName)
        }

        if (variant === 'underline') {
          classes.push('nav-link--animated-underline')
        }

        if (underline) {
          classes.push('nav-link--underline')
        }

        return classes.filter(Boolean).join(' ')
      }}
      style={customStyles}
      {...props}
    >
      {children}
    </RouterNavLink>
  )
}
