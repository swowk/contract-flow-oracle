
import { useState } from "react";
import { Bell, Search, User } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Input } from "@/components/ui/input";
import { SidebarTrigger } from "@/components/ui/sidebar";

const MainHeader = () => {
  const [searchQuery, setSearchQuery] = useState("");

  return (
    <header className="border-b border-border h-16 px-4 flex items-center justify-between bg-background">
      <div className="flex items-center">
        <SidebarTrigger className="mr-4" />
        <h1 className="text-xl font-semibold">合同流程智能平台</h1>
      </div>
      
      <div className="flex-1 max-w-md mx-8">
        <div className="relative">
          <Search className="absolute left-2 top-3 h-4 w-4 text-muted-foreground" />
          <Input
            placeholder="搜索..."
            className="w-full pl-8"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
        </div>
      </div>
      
      <div className="flex items-center space-x-4">
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="ghost" size="icon">
              <Bell className="h-5 w-5" />
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end">
            <DropdownMenuItem>无新通知</DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
        
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="ghost" size="icon">
              <User className="h-5 w-5" />
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end">
            <DropdownMenuItem>账户设置</DropdownMenuItem>
            <DropdownMenuItem>退出登录</DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </div>
    </header>
  );
};

export default MainHeader;
