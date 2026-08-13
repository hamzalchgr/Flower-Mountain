import clsx from 'clsx';
import type { ButtonHTMLAttributes, ReactNode } from 'react';

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
   variant?: keyof typeof variants;
   size?: keyof typeof sizes;
   children: ReactNode;
};

const variants: {
   default: string;
   secondary: string;
   outline: string;
   ghost: string;
} = {
   default: 'bg-black text-white hover:bg-neutral-800',
   secondary: 'bg-neutral-100 text-black hover:bg-neutral-200',
   outline: 'border border-black hover:bg-neutral-100',
   ghost: 'bg-white hover:bg-neutral-100',
};

const sizes: { sm: string; default: string; lg: string; icon: string } = {
   sm: 'h-9 px-3',
   default: 'h-10 px-4',
   lg: 'h-12 px-8',
   icon: 'h-12 w-12',
};

const Button = ({
   className = '',
   variant = 'default',
   size = 'default',
   children,
   ...props
}: ButtonProps) => {
   const baseClasses = 'rounded-full capitalize font-medium leading-tight cursor-pointer grid place-items-center disabled:text-neutral-400 disabled:bg-neutral-100 disabled:cursor-default';

   return (
      <button
         className={clsx(
            className,
            variants[variant],
            baseClasses,
            sizes[size],
         )}
         {...props}
      >
         {children}
      </button>
   );
};

export default Button;
