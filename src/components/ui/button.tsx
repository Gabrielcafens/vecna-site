import * as React from 'react'
import { cn } from '@/lib/utils'

type Variant = 'default' | 'ghost' | 'outline'
type Size = 'default' | 'sm' | 'icon'

const variants: Record<Variant, string> = {
  default: 'bg-[var(--accent)] text-[var(--accent-foreground)] hover:opacity-90',
  ghost: 'hover:bg-[var(--border)]/50',
  outline: 'border border-[var(--border)] hover:bg-[var(--border)]/30',
}

const sizes: Record<Size, string> = {
  default: 'h-9 px-4 text-sm',
  sm: 'h-8 px-3 text-xs',
  icon: 'h-9 w-9',
}

export function Button({
  className,
  variant = 'default',
  size = 'default',
  ...props
}: React.ButtonHTMLAttributes<HTMLButtonElement> & { variant?: Variant; size?: Size }) {
  return (
    <button
      className={cn(
        'inline-flex items-center justify-center gap-2 rounded-md font-medium transition-colors disabled:opacity-50 disabled:pointer-events-none cursor-pointer',
        variants[variant],
        sizes[size],
        className
      )}
      {...props}
    />
  )
}
