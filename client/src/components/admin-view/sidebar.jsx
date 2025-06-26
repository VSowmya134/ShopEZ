import {
    BadgeCheck,
    ChartNoAxesCombined,
    LayoutDashboard,
    ShoppingBasket,
  } from "lucide-react";
  import { Fragment } from "react";
  import { useNavigate, useLocation } from "react-router-dom";
  import { Sheet, SheetContent, SheetHeader, SheetTitle } from "../ui/sheet";
  
  const adminSidebarMenuItems = [
    {
      id: "dashboard",
      label: "Dashboard",
      path: "/admin/dashboard",
      icon: <LayoutDashboard />,
    },
    {
      id: "products",
      label: "Products",
      path: "/admin/products",
      icon: <ShoppingBasket />,
    },
    {
      id: "orders",
      label: "Orders",
      path: "/admin/orders",
      icon: <BadgeCheck />,
    },
  ];
  
  function MenuItems({ setOpen }) {
    const navigate = useNavigate();
    const location = useLocation();
  
    return (
      <nav className="mt-8 flex-col flex gap-2">
        {adminSidebarMenuItems.map((menuItem) => {
          const isActive = location.pathname === menuItem.path;
  
          return (
            <div
              key={menuItem.id}
              onClick={() => {
                navigate(menuItem.path);
                if (setOpen) setOpen(false);
              }}
              className={`flex items-center gap-3 px-4 py-3 rounded-md cursor-pointer transition-all duration-200 ${
                isActive
                  ? "bg-gray-200 text-black font-semibold"
                  : "text-gray-600 hover:bg-gray-100 hover:text-black"
              }`}
            >
              {menuItem.icon}
              <span>{menuItem.label}</span>
            </div>
          );
        })}
      </nav>
    );
  }
  
  function AdminSideBar({ open, setOpen }) {
    const navigate = useNavigate();
  
    return (
      <Fragment>
        {/* Mobile Sidebar (Sheet) */}
        <Sheet open={open} onOpenChange={setOpen}>
          <SheetContent side="left" className="w-64 bg-white text-black">
            <div className="flex flex-col h-full">
              <SheetHeader className="border-b border-gray-200">
                <SheetTitle className="flex gap-2 mt-5 mb-5 items-center">
                  <ChartNoAxesCombined size={30} />
                  <h1 className="text-2xl font-extrabold">Admin Panel</h1>
                </SheetTitle>
              </SheetHeader>
              <MenuItems setOpen={setOpen} />
            </div>
          </SheetContent>
        </Sheet>
  
        {/* Desktop Sidebar */}
        <aside className="hidden lg:flex w-64 flex-col border-r bg-white text-black p-6">
          <div
            onClick={() => navigate("/admin/dashboard")}
            className="flex cursor-pointer items-center gap-2 mb-6"
          >
            <ChartNoAxesCombined size={30} />
            <h1 className="text-2xl font-extrabold">Admin Panel</h1>
          </div>
          <MenuItems />
        </aside>
      </Fragment>
    );
  }
  
  export default AdminSideBar;
  