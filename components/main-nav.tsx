"use client"
import { usePathname } from "next/navigation"
import { Menu } from "lucide-react"
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

  return (
    <div className="mr-4 flex">
      <Sheet>
        {/* The "3 lines" hamburger button */}
        <SheetTrigger asChild>
          <Button variant="ghost" size="icon" className="md:hidden">
            <Menu className="h-5 w-5" />
            <span className="sr-only">Toggle Menu</span>
          </Button>
        </SheetTrigger>
        
        {/* FIX 1: Add aria-describedby={undefined} if you don't want a description, 
            or include <SheetDescription> inside. We are doing both to be safe. */}
        <SheetContent side="left" className="pr-0">
          
          {/* FIX 2: You MUST have a SheetTitle and SheetDescription inside SheetContent. 
              The 'sr-only' class keeps them completely hidden from the screen. */}
          <SheetTitle className="sr-only">Navigation Menu</SheetTitle>
          <SheetDescription className="sr-only">
            Main navigation for the application.
          </SheetDescription>

          <div className="flex flex-col space-y-4 pt-8">
            {/* FIX 3: YOUR LINKS GO HERE. 
              DO NOT ADD A <SheetClose> OR <X /> BUTTON HERE! 
              The <SheetContent> wrapper already renders the "X" automatically.
            */}
            <a href="/" className="text-lg font-medium">Home</a>
            <a href="/about" className="text-lg font-medium">About</a>
          </div>
          
        </SheetContent>
      </Sheet>
    </div>
  )
}
