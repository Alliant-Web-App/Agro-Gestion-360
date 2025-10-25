import * as React from "react"
import { cva, type VariantProps } from "class-variance-authority"
import { LucideIcon } from "lucide-react"

import { cn } from "../lib/utils"

const navigationItemVariants = cva(
  "inline-flex items-center gap-3 px-6 py-4 text-left rounded-lg transition-all duration-200 cursor-pointer focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-ring focus-visible:ring-offset-2 hover:scale-105 active:scale-95",
  {
    variants: {
      variant: {
        default: "bg-white border border-gray-200 hover:bg-gray-50 hover:border-gray-300 shadow-sm hover:shadow-md",
        active: "bg-blue-600 text-white border border-blue-600 shadow-lg hover:shadow-xl",
        ghost: "hover:bg-gray-100",
        outline: "border-2 border-gray-300 bg-transparent hover:bg-gray-50",
      },
      size: {
        default: "text-base",
        sm: "text-sm px-4 py-3",
        lg: "text-lg px-8 py-5",
        xl: "text-xl px-10 py-6",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
)

export interface NavigationItemProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof navigationItemVariants> {
  icon?: LucideIcon
  iconPosition?: "left" | "right"
  title: string
  description?: string
  badge?: string | number
  href?: string
}

const NavigationItem = React.forwardRef<HTMLButtonElement, NavigationItemProps>(
  ({
    className,
    variant,
    size,
    icon: Icon,
    iconPosition = "left",
    title,
    description,
    badge,
    href,
    ...props
  }, ref) => {
    const content = (
      <>
        {Icon && iconPosition === "left" && (
          <Icon className="h-6 w-6 flex-shrink-0" />
        )}
        <div className="flex-1 min-w-0">
          <div className="flex items-center gap-2">
            <span className="font-semibold truncate">{title}</span>
            {badge && (
              <span className="inline-flex items-center px-2 py-1 rounded-full text-xs font-medium bg-red-100 text-red-800">
                {badge}
              </span>
            )}
          </div>
          {description && (
            <p className="text-sm text-gray-600 mt-1 truncate">
              {description}
            </p>
          )}
        </div>
        {Icon && iconPosition === "right" && (
          <Icon className="h-6 w-6 flex-shrink-0" />
        )}
      </>
    )

    if (href) {
      return (
        <a
          href={href}
          className={cn(navigationItemVariants({ variant, size, className }))}
          aria-label={`${title}${description ? ` - ${description}` : ''}`}
        >
          {content}
        </a>
      )
    }

    return (
      <button
        className={cn(navigationItemVariants({ variant, size, className }))}
        ref={ref}
        aria-label={`${title}${description ? ` - ${description}` : ''}`}
        {...props}
      >
        {content}
      </button>
    )
  }
)
NavigationItem.displayName = "NavigationItem"

export { NavigationItem, navigationItemVariants }