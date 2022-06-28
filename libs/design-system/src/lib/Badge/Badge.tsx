import classNames from 'classnames';
import { PropsWithChildren } from 'react';

const Variant = Object.freeze({
  primary: 'bg-slate-300 font-semibold',
  secondary: '',
  link: '',
  warning: '',
  danger: '',
});

const Size = Object.freeze({
  sm: 'py-1 px-1.5 text-xs rounded-sm',
  md: 'py-1 px-2 text-sm rounded',
  lg: 'py-2 px-3 text-base rounded-md',
});

export type BadgeProps = PropsWithChildren<{
  isActive: boolean;
  onClick: () => void;
  variant?: keyof typeof Variant;
  size?: keyof typeof Size;
  className?: string;
}>;

export function Badge({
  isActive,
  onClick,
  variant = 'primary',
  size = 'md',
  className,
  children,
  ...rest
}: BadgeProps) {
  return (
    <div
      onClick={onClick}
      className={classNames(
        'inline-block cursor-pointer',
        isActive
          ? 'bg-opacity-100 border border-transparent'
          : 'bg-opacity-0 border border-slate-200',
        Variant[variant],
        Size[size],
        className
      )}
    >
      <span>{children}</span>
    </div>
  );
}

export default Badge;
