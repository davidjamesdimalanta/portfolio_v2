import * as React from "react"
import { ChevronRight, MoreHorizontal } from "lucide-react"
import { cn } from "@/lib/utils"
import Link from "next/link"

const Breadcrumb = React.forwardRef(
  ({ className, ...props }, ref) => (
    <nav
      ref={ref}
      aria-label="breadcrumb"
      className={cn("flex", className)}
      {...props}
    />
  )
)
Breadcrumb.displayName = "Breadcrumb"

const BreadcrumbList = React.forwardRef(
  ({ className, ...props }, ref) => (
    <ol
      ref={ref}
      className={cn(
        "flex flex-wrap items-center gap-1.5 break-words text-sm text-muted-foreground sm:gap-2.5",
        className
      )}
      {...props}
    />
  )
)
BreadcrumbList.displayName = "BreadcrumbList"

const BreadcrumbItem = React.forwardRef(
  ({ className, ...props }, ref) => (
    <li
      ref={ref}
      className={cn("inline-flex items-center gap-1.5", className)}
      {...props}
    />
  )
)
BreadcrumbItem.displayName = "BreadcrumbItem"

const BreadcrumbLink = React.forwardRef(
  ({ asChild, className, ...props }, ref) => {
    const Comp = asChild ? React.Fragment : Link
    return (
      <Comp
        ref={ref}
        className={cn("hover:text-foreground transition-colors", className)}
        {...props}
      />
    )
  }
)
BreadcrumbLink.displayName = "BreadcrumbLink"

const BreadcrumbPage = React.forwardRef(
  ({ className, ...props }, ref) => (
    <span
      ref={ref}
      role="link"
      aria-current="page"
      aria-disabled="true"
      className={cn("font-medium text-foreground", className)}
      {...props}
    />
  )
)
BreadcrumbPage.displayName = "BreadcrumbPage"

const BreadcrumbSeparator = ({
  children,
  className,
  ...props
}) => (
  <li
    role="presentation"
    aria-hidden="true"
    className={cn("[&>svg]:size-3.5", className)}
    {...props}
  >
    {children || <ChevronRight className="h-4 w-4" />}
  </li>
)
BreadcrumbSeparator.displayName = "BreadcrumbSeparator"

const BreadcrumbEllipsis = ({
  className,
  ...props
}) => (
  <span
    role="presentation"
    aria-hidden="true"
    className={cn("flex h-9 w-9 items-center justify-center", className)}
    {...props}
  >
    <MoreHorizontal className="h-4 w-4" />
    <span className="sr-only">More</span>
  </span>
)
BreadcrumbEllipsis.displayName = "BreadcrumbEllipsis"

export {
  Breadcrumb,
  BreadcrumbList,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbPage,
  BreadcrumbSeparator,
  BreadcrumbEllipsis,
} 