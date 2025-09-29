"use client"

import * as React from "react"
import { cn } from "@/lib/utils"

interface SheetProps {
  open?: boolean
  onOpenChange?: (open: boolean) => void
  children: React.ReactNode
}

const Sheet = ({ children, open, onOpenChange }: SheetProps) => {
  return (
    <div>
      {React.Children.map(children, (child) => {
        if (React.isValidElement(child)) {
          return React.cloneElement(
            child as React.ReactElement<SheetTriggerProps | SheetContentProps>,
            { open, onOpenChange }
          )
        }
        return child
      })}
    </div>
  )
}

interface SheetTriggerProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  asChild?: boolean
  open?: boolean
  onOpenChange?: (open: boolean) => void
}

const SheetTrigger = React.forwardRef<HTMLButtonElement, SheetTriggerProps>(
  ({ className, children, open, onOpenChange, asChild, ...props }, ref) => {
    const handleClick = () => {
      onOpenChange?.(true)
    }

    if (asChild && React.isValidElement(children)) {
      return React.cloneElement(children, {
        ...children.props,
        onClick: handleClick,
      })
    }

    return (
      <button
        ref={ref}
        className={className}
        onClick={handleClick}
        {...props}
      >
        {children}
      </button>
    )
  }
)
SheetTrigger.displayName = "SheetTrigger"

interface SheetContentProps extends React.HTMLAttributes<HTMLDivElement> {
  side?: "top" | "right" | "bottom" | "left"
  open?: boolean
  onOpenChange?: (open: boolean) => void
}

const SheetContent = React.forwardRef<HTMLDivElement, SheetContentProps>(
  ({ className, children, side = "right", open, onOpenChange, ...props }, ref) => {
    if (!open) return null

    const sideClasses: Record<NonNullable<SheetContentProps["side"]>, string> = {
      top: "top-0 left-0 right-0 h-1/3",
      right: "top-0 right-0 bottom-0 w-80",
      bottom: "bottom-0 left-0 right-0 h-1/3",
      left: "top-0 left-0 bottom-0 w-80",
    }

    return (
      <div className="fixed inset-0 z-50">
        {/* Backdrop */}
        <div
          className="fixed inset-0 bg-black/80"
          onClick={() => onOpenChange?.(false)}
        />

        {/* Sheet */}
        <div
          ref={ref}
          className={cn(
            "fixed bg-background shadow-lg border animate-in",
            sideClasses[side],
            className
          )}
          {...props}
        >
          {children}
        </div>
      </div>
    )
  }
)
SheetContent.displayName = "SheetContent"

export { Sheet, SheetTrigger, SheetContent }
