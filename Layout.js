
import React from "react";
import { Link, useLocation } from "react-router-dom";
import { createPageUrl } from "@/utils";
import { Code, ShoppingCart, FileText, Cloud, Home } from "lucide-react";
import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarHeader,
  SidebarFooter,
  SidebarProvider,
  SidebarTrigger,
} from "@/components/ui/sidebar";

const navigationItems = [
  {
    title: "Code Generator",
    url: createPageUrl("Home"),
    icon: Home,
  },
  {
    title: "My Saved Codes",
    url: createPageUrl("MyCodes"),
    icon: Code,
  },
  {
    title: "README",
    url: createPageUrl("README"),
    icon: FileText,
  },
  {
    title: "Hosting Guide",
    url: createPageUrl("HostingGuide"),
    icon: Cloud,
  },
];

export default function Layout({ children, currentPageName }) {
  const location = useLocation();

  return (
    <SidebarProvider>
      <style>{`
        :root {
          --navy-blue: #1E3A5F;
          --navy-deep: #0A1929;
          --dark-grey: #1A1A1A;
          --darker-grey: #0F0F0F;
          --lime-green: #32CD32;
          --lime-bright: #00FF00;
          --red-warning: #DC2626;
          --white: #FFFFFF;
        }
      `}</style>
      <div className="min-h-screen flex w-full bg-[#0F0F0F]">
        <Sidebar className="border-r border-[#1E3A5F]/30 bg-[#0A1929]">
          <SidebarHeader className="border-b border-[#1E3A5F]/30 p-6 bg-gradient-to-br from-[#1E3A5F]/20 to-transparent">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-gradient-to-br from-[#32CD32] to-[#00FF00] rounded-xl flex items-center justify-center shadow-lg shadow-[#32CD32]/50">
                <Code className="w-6 h-6 text-black" />
              </div>
              <div>
                <h2 className="font-bold text-white text-lg">GKroon CodeWeb</h2>
                <p className="text-xs text-[#32CD32]">AI Code Generation</p>
              </div>
            </div>
          </SidebarHeader>
          
          <SidebarContent className="p-3 bg-[#0A1929]">
            <SidebarGroup>
              <SidebarGroupLabel className="text-xs font-medium text-white/50 uppercase tracking-wider px-3 py-3">
                Navigation
              </SidebarGroupLabel>
              <SidebarGroupContent>
                <SidebarMenu>
                  {navigationItems.map((item) => (
                    <SidebarMenuItem key={item.title}>
                      <SidebarMenuButton 
                        asChild 
                        className={`hover:bg-[#1E3A5F]/50 hover:text-[#32CD32] transition-all duration-300 rounded-xl mb-2 ${
                          location.pathname === item.url 
                            ? 'bg-gradient-to-r from-[#1E3A5F] to-[#1E3A5F]/50 text-[#32CD32] shadow-lg shadow-[#1E3A5F]/50' 
                            : 'text-white/70'
                        }`}
                      >
                        <Link to={item.url} className="flex items-center gap-3 px-4 py-3">
                          <item.icon className="w-5 h-5" />
                          <span className="font-medium">{item.title}</span>
                        </Link>
                      </SidebarMenuButton>
                    </SidebarMenuItem>
                  ))}
                </SidebarMenu>
              </SidebarGroupContent>
            </SidebarGroup>
          </SidebarContent>

          <SidebarFooter className="border-t border-[#1E3A5F]/30 p-6 bg-gradient-to-br from-[#1E3A5F]/20 to-transparent">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-gradient-to-br from-[#32CD32] to-[#00FF00] rounded-full flex items-center justify-center text-black font-bold shadow-lg">
                G
              </div>
              <div className="flex-1 min-w-0">
                <p className="font-semibold text-white text-sm truncate">GKroon</p>
                <p className="text-xs text-white/50 truncate">Premium Code Generation</p>
              </div>
            </div>
          </SidebarFooter>
        </Sidebar>

        <main className="flex-1 flex flex-col bg-[#0F0F0F]">
          <header className="bg-gradient-to-r from-[#0A1929] to-[#1E3A5F] border-b border-[#1E3A5F]/30 px-6 py-4 md:hidden shadow-xl">
            <div className="flex items-center gap-4">
              <SidebarTrigger className="hover:bg-[#1E3A5F]/50 p-2 rounded-lg transition-colors duration-300 text-white" />
              <h1 className="text-xl font-bold text-white">GKroon CodeWeb</h1>
            </div>
          </header>

          <div className="flex-1 overflow-auto">
            {children}
          </div>
        </main>
      </div>
    </SidebarProvider>
  );
}
