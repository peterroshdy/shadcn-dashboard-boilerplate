import { NavLink } from "react-router-dom";
import { Package2, Menu } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import UserMenu from "./UserMenu";

const Navbar = () => (
  <header className="sticky top-0 flex h-16 items-center gap-4 border-b bg-background px-4 md:px-6">
    <nav className="hidden flex-col gap-6 text-lg font-medium md:flex md:flex-row md:items-center md:gap-5 md:text-sm lg:gap-6">
      <NavLink to="/" className="flex items-center gap-2 text-lg font-semibold md:text-base">
        <Package2 className="h-6 w-6" />
        <span className="sr-only">Acme Inc</span>
      </NavLink>
      <NavLink
        to="/dashboard"
        className={({ isActive }) =>
          isActive ? "text-foreground font-semibold" : "text-muted-foreground transition-colors hover:text-foreground"
        }
      >
        Dashboard
      </NavLink>
      <NavLink
        to="/orders"
        className={({ isActive }) =>
          isActive ? "text-foreground font-semibold" : "text-muted-foreground transition-colors hover:text-foreground"
        }
      >
        Orders
      </NavLink>
      <NavLink
        to="/products"
        className={({ isActive }) =>
          isActive ? "text-foreground font-semibold" : "text-muted-foreground transition-colors hover:text-foreground"
        }
      >
        Products
      </NavLink>
      <NavLink
        to="/customers"
        className={({ isActive }) =>
          isActive ? "text-foreground font-semibold" : "text-muted-foreground transition-colors hover:text-foreground"
        }
      >
        Customers
      </NavLink>
      <NavLink
        to="/settings"
        className={({ isActive }) =>
          isActive ? "text-foreground font-semibold" : "text-muted-foreground transition-colors hover:text-foreground"
        }
      >
        Settings
      </NavLink>
    </nav>
    <Sheet>
      <SheetTrigger asChild>
        <Button variant="outline" size="icon" className="shrink-0 md:hidden">
          <Menu className="h-5 w-5" />
          <span className="sr-only">Toggle navigation menu</span>
        </Button>
      </SheetTrigger>
      <SheetContent side="left">
        <nav className="grid gap-6 text-lg font-medium">
          <NavLink to="/" className="flex items-center gap-2 text-lg font-semibold">
            <Package2 className="h-6 w-6" />
            <span className="sr-only">Acme Inc</span>
          </NavLink>
          <NavLink
            to="/dashboard"
            className={({ isActive }) =>
              isActive ? "text-foreground font-semibold" : "text-muted-foreground hover:text-foreground"
            }
          >
            Dashboard
          </NavLink>
          <NavLink
            to="/orders"
            className={({ isActive }) =>
              isActive ? "text-foreground font-semibold" : "text-muted-foreground hover:text-foreground"
            }
          >
            Orders
          </NavLink>
          <NavLink
            to="/products"
            className={({ isActive }) =>
              isActive ? "text-foreground font-semibold" : "text-muted-foreground hover:text-foreground"
            }
          >
            Products
          </NavLink>
          <NavLink
            to="/customers"
            className={({ isActive }) =>
              isActive ? "text-foreground font-semibold" : "text-muted-foreground hover:text-foreground"
            }
          >
            Customers
          </NavLink>
          <NavLink
            to="/settings"
            className={({ isActive }) =>
              isActive ? "text-foreground font-semibold" : "hover:text-foreground"
            }
          >
            Settings
          </NavLink>
        </nav>
      </SheetContent>
    </Sheet>
    <div className="flex w-full items-center gap-4 md:ml-auto md:gap-2 lg:gap-4">
      <UserMenu />
    </div>
  </header>
);

export default Navbar;