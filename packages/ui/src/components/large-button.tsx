import * as React from "react"
import { cva, type VariantProps } from "class-variance-authority"
import { LucideIcon } from "lucide-react"

import { cn } from "../lib/utils"

const largeButtonVariants = cva(
  "inline-flex items-center justify-center gap-3 whitespace-nowrap rounded-lg text-lg font-semibold ring-offset-background transition-all duration-200 focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 active:scale-95",
  {
    variants: {
      variant: {
        default: "bg-primary text-primary-foreground hover:bg-primary/90 shadow-lg hover:shadow-xl",
        destructive:
          "bg-destructive text-destructive-foreground hover:bg-destructive/90 shadow-lg hover:shadow-xl",
        outline:
          "border-2 border-input bg-background hover:bg-accent hover:text-accent-foreground shadow-md hover:shadow-lg",
        secondary:
          "bg-secondary text-secondary-foreground hover:bg-secondary/80 shadow-lg hover:shadow-xl",
        ghost: "hover:bg-accent hover:text-accent-foreground",
        success: "bg-green-600 text-white hover:bg-green-700 shadow-lg hover:shadow-xl",
        warning: "bg-yellow-500 text-white hover:bg-yellow-600 shadow-lg hover:shadow-xl",
      },
      size: {
        default: "h-16 px-8 py-4",
        sm: "h-12 px-6 py-3 text-base",
        lg: "h-20 px-10 py-5 text-xl",
        xl: "h-24 px-12 py-6 text-2xl",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
)

export interface LargeButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof largeButtonVariants> {
  icon?: LucideIcon
  iconPosition?: "left" | "right"
  loading?: boolean
}

const LargeButton = React.forwardRef<HTMLButtonElement, LargeButtonProps>(
  ({
    className,
    variant,
    size,
    icon: Icon,
    iconPosition = "left",
    loading = false,
    children,
    disabled,
    ...props
  }, ref) => {
    return (
      <button
        className={cn(largeButtonVariants({ variant, size, className }))}
        ref={ref}
        disabled={disabled || loading}
        aria-label={typeof children === 'string' ? children : undefined}
        {...props}
      >
        {loading ? (
          <>
            <div className="animate-spin rounded-full h-6 w-6 border-2 border-current border-t-transparent" />
            <span>Cargando...</span>
          </>
        ) : (
          <>
            {Icon && iconPosition === "left" && <Icon className="h-6 w-6" />}
            <span className="text-center">{children}</span>
            {Icon && iconPosition === "right" && <Icon className="h-6 w-6" />}
          </>
        )}
      </button>
    )
  }
)
LargeButton.displayName = "LargeButton"

export { LargeButton, largeButtonVariants }