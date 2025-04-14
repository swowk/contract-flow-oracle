
import {
  BarChart3,
  FileText,
  Users,
  Calculator,
  PieChart,
  Settings,
  Lightbulb,
  LineChart,
  AlertTriangle,
} from "lucide-react";
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
} from "@/components/ui/sidebar";

const MainSidebar = () => {
  return (
    <Sidebar>
      <SidebarHeader>
        <div className="px-3 py-2">
          <div className="flex items-center">
            <LineChart className="h-6 w-6 mr-2 text-blue-600" />
            <span className="text-xl font-bold">合同流程智能平台</span>
          </div>
          <p className="text-xs text-muted-foreground mt-1">Contract Flow Oracle</p>
        </div>
      </SidebarHeader>
      
      <SidebarContent>
        <SidebarGroup>
          <SidebarGroupLabel>主要功能</SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu>
              <SidebarMenuItem>
                <SidebarMenuButton asChild>
                  <a href="#dashboard">
                    <BarChart3 className="h-4 w-4 mr-2" />
                    <span>仪表盘</span>
                  </a>
                </SidebarMenuButton>
              </SidebarMenuItem>
              <SidebarMenuItem>
                <SidebarMenuButton asChild>
                  <a href="#documents">
                    <FileText className="h-4 w-4 mr-2" />
                    <span>投标文件分析</span>
                  </a>
                </SidebarMenuButton>
              </SidebarMenuItem>
              <SidebarMenuItem>
                <SidebarMenuButton asChild>
                  <a href="#costs">
                    <Calculator className="h-4 w-4 mr-2" />
                    <span>成本测算</span>
                  </a>
                </SidebarMenuButton>
              </SidebarMenuItem>
              <SidebarMenuItem>
                <SidebarMenuButton asChild>
                  <a href="#bidding">
                    <PieChart className="h-4 w-4 mr-2" />
                    <span>投标博弈</span>
                  </a>
                </SidebarMenuButton>
              </SidebarMenuItem>
              <SidebarMenuItem>
                <SidebarMenuButton asChild>
                  <a href="#suppliers">
                    <Users className="h-4 w-4 mr-2" />
                    <span>供应商管理</span>
                  </a>
                </SidebarMenuButton>
              </SidebarMenuItem>
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
        
        <SidebarGroup>
          <SidebarGroupLabel>高级功能</SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu>
              <SidebarMenuItem>
                <SidebarMenuButton asChild>
                  <a href="#experts">
                    <Lightbulb className="h-4 w-4 mr-2" />
                    <span>专家管理</span>
                  </a>
                </SidebarMenuButton>
              </SidebarMenuItem>
              <SidebarMenuItem>
                <SidebarMenuButton asChild>
                  <a href="#risk">
                    <AlertTriangle className="h-4 w-4 mr-2" />
                    <span>风险预警</span>
                  </a>
                </SidebarMenuButton>
              </SidebarMenuItem>
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>
      
      <SidebarFooter>
        <SidebarMenu>
          <SidebarMenuItem>
            <SidebarMenuButton asChild>
              <a href="#settings">
                <Settings className="h-4 w-4 mr-2" />
                <span>系统设置</span>
              </a>
            </SidebarMenuButton>
          </SidebarMenuItem>
        </SidebarMenu>
      </SidebarFooter>
    </Sidebar>
  );
};

export default MainSidebar;
