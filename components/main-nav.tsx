"use client"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { Menu, LayoutDashboard } from "lucide-react" // Replace LayoutDashboard with your actual logo icon
import { Button } from "@/components/ui/button"
import {
  Sheet,
  SheetContent,
  SheetTrigger,
  SheetTitle,
  SheetDescription,
} from "@/components/ui/sheet"

export function MainNav() {
  const pathname = usePathname()

  // 1. ADD YOUR LINKS HERE! 
  // You only need to write them once. They will automatically render on both Mobile and Desktop.
  const routes = [
    { href: "/", label: "Home" },
    { href: "/student/dashboard", label: "Dashboard" },
    { href: "/student/documents", label: "Documents" },
    { href: "/about", label: "About" },
  ]

  return (
    <div className="flex items-center gap-4 md:gap-6 w-full">
      
      {/* --- MOBILE NAVIGATION --- */}
      {/* The Sheet (Hamburger Menu) is only visible on small screens (hidden on md and up) */}
      <div className="md:hidden">
        <Sheet>
          <SheetTrigger asChild>
            <Button variant="ghost" size="icon" className="md:hidden">
              <Menu className="h-5 w-5" />
              <span className="sr-only">Toggle Menu</span>
            </Button>
          </SheetTrigger>
          
          <SheetContent side="left" className="pr-0 sm:max-w-xs">
            {/* Accessibility requirements (Hidden from view) */}
            <SheetTitle className="sr-only">Navigation Menu</SheetTitle>
            <SheetDescription className="sr-only">Main navigation for the application</SheetDescription>

            <div className="flex flex-col space-y-4 pt-6">
              {/* Mobile Logo inside the menu */}
              <Link href="/" className="flex items-center space-x-2 pb-4 border-b pr-6">
                <LayoutDashboard className="h-6 w-6 text-primary" />
                <span className="font-bold text-lg">MyBrand</span>
              </Link>
              
              {/* Mobile Links */}
              <div className="flex flex-col space-y-3">
                {routes.map((route) => (
                  <Link
                    key={route.href}
                    href={route.href}
                    className={`block px-2 py-1 text-base transition-colors hover:text-primary ${
                      pathname === route.href 
                        ? "text-primary font-semibold" 
                        : "text-muted-foreground"
                    }`}
                  >
                    {route.label}
                  </Link>
                ))}
              </div>
            </div>
          </SheetContent>
        </Sheet>
      </div>

      {/* --- DESKTOP BRAND / LOGO --- */}
      {/* Always visible, but aligns nicely next to the links on Desktop */}
      <Link href="/" className="flex items-center space-x-2">
        <LayoutDashboard className="h-6 w-6 text-primary hidden md:block" />
        <span className="font-bold text-lg hidden md:block">MyBrand</span>
      </Link>

      {/* --- DESKTOP NAVIGATION --- */}
      {/* Hidden on mobile, flex on desktop (md and up) */}
      <nav className="hidden md:flex items-center space-x-6 text-sm font-medium">
        {routes.map((route) => (
          <Link
            key={route.href}
            href={route.href}
            className={`transition-colors hover:text-primary ${
              pathname === route.href 
                ? "text-foreground font-semibold" 
                : "text-muted-foreground"
            }`}
          >
            {route.label}
          </Link>
        ))}
      </nav>
      
    </div>
  )
}
