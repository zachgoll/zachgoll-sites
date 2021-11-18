import classNames from 'classnames';

const Variant = {
  primary: 'bg-blue-200 text-blue-500',
  secondary: '',
  link: '',
  warning: '',
  danger: '',
};

export interface ButtonProps {
  variant?: keyof typeof Variant;
  href?: string;
  as?: React.ElementType;
  className?: string;
  children?: React.ReactNode;
}

export function Button({
  variant = 'primary',
  href,
  as,
  className,
  children,
  ...rest
}: ButtonProps) {
  const classes = classNames(
    className,
    Variant[variant],
    'font-medium rounded leading-6 whitespace-nowrap select-none cursor-pointer',
    'focus:outline-none focus:ring focus:ring-opacity-60',
    'disabled:opacity-50 disabled:pointer-events-none'
  );

  const Tag = as || (href ? 'a' : 'button');

  return (
    <Tag className={classes} role="button" {...(href && { href })} {...rest}>
      {children}
    </Tag>
  );
}

export default Button;
