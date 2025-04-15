
import {
  FileText,
  Users,
  Calculator,
  PieChart,
  Settings,
  Lightbulb,
  LineChart,
  AlertTriangle,
  FileSpreadsheet,
  Briefcase,
  Building,
  Presentation,
  Scale,
  FileSearch,
  ShieldAlert,
  TrendingUp,
  ScrollText,
  BookOpen,
  Gavel,
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
import { useLocation } from "react-router-dom";
import { Link } from "react-router-dom";

const MainSidebar = () => {
  const location = useLocation();
  const currentPath = location.pathname;
  
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
          <SidebarGroupLabel>系统导航</SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu>
              <SidebarMenuItem>
                <SidebarMenuButton asChild>
                  <Link to="/bidding">
                    <FileSpreadsheet className="h-4 w-4 mr-2" />
                    <span>投标端</span>
                  </Link>
                </SidebarMenuButton>
              </SidebarMenuItem>
              <SidebarMenuItem>
                <SidebarMenuButton asChild>
                  <Link to="/tendering">
                    <Building className="h-4 w-4 mr-2" />
                    <span>招标端</span>
                  </Link>
                </SidebarMenuButton>
              </SidebarMenuItem>
              <SidebarMenuItem>
                <SidebarMenuButton asChild>
                  <Link to="/advanced">
                    <Settings className="h-4 w-4 mr-2" />
                    <span>高级功能</span>
                  </Link>
                </SidebarMenuButton>
              </SidebarMenuItem>
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
        
        {currentPath.includes('/bidding') && (
          <SidebarGroup>
            <SidebarGroupLabel>投标功能</SidebarGroupLabel>
            <SidebarGroupContent>
              <SidebarMenu>
                <SidebarMenuItem>
                  <SidebarMenuButton asChild>
                    <Link to="/bidding?tab=dashboard">
                      <LineChart className="h-4 w-4 mr-2" />
                      <span>仪表盘</span>
                    </Link>
                  </SidebarMenuButton>
                </SidebarMenuItem>
                <SidebarMenuItem>
                  <SidebarMenuButton asChild>
                    <Link to="/bidding?tab=documents">
                      <FileText className="h-4 w-4 mr-2" />
                      <span>投标文件分析</span>
                    </Link>
                  </SidebarMenuButton>
                </SidebarMenuItem>
                <SidebarMenuItem>
                  <SidebarMenuButton asChild>
                    <Link to="/bidding?tab=costs">
                      <Calculator className="h-4 w-4 mr-2" />
                      <span>成本测算</span>
                    </Link>
                  </SidebarMenuButton>
                </SidebarMenuItem>
                <SidebarMenuItem>
                  <SidebarMenuButton asChild>
                    <Link to="/bidding?tab=bidding">
                      <PieChart className="h-4 w-4 mr-2" />
                      <span>投标博弈</span>
                    </Link>
                  </SidebarMenuButton>
                </SidebarMenuItem>
                <SidebarMenuItem>
                  <SidebarMenuButton asChild>
                    <Link to="/bidding?tab=creator">
                      <ScrollText className="h-4 w-4 mr-2" />
                      <span>投标文件智能编制</span>
                    </Link>
                  </SidebarMenuButton>
                </SidebarMenuItem>
                <SidebarMenuItem>
                  <SidebarMenuButton asChild>
                    <Link to="/bidding?tab=coaching">
                      <Presentation className="h-4 w-4 mr-2" />
                      <span>智能述标辅导</span>
                    </Link>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              </SidebarMenu>
            </SidebarGroupContent>
          </SidebarGroup>
        )}
        
        {currentPath.includes('/tendering') && (
          <SidebarGroup>
            <SidebarGroupLabel>招标功能</SidebarGroupLabel>
            <SidebarGroupContent>
              <SidebarMenu>
                <SidebarMenuItem>
                  <SidebarMenuButton asChild>
                    <Link to="/tendering?tab=dashboard">
                      <LineChart className="h-4 w-4 mr-2" />
                      <span>仪表盘</span>
                    </Link>
                  </SidebarMenuButton>
                </SidebarMenuItem>
                <SidebarMenuItem>
                  <SidebarMenuButton asChild>
                    <Link to="/tendering?tab=suppliers">
                      <Briefcase className="h-4 w-4 mr-2" />
                      <span>供应商管理</span>
                    </Link>
                  </SidebarMenuButton>
                </SidebarMenuItem>
                <SidebarMenuItem>
                  <SidebarMenuButton asChild>
                    <Link to="/tendering?tab=experts">
                      <Users className="h-4 w-4 mr-2" />
                      <span>专家管理</span>
                    </Link>
                  </SidebarMenuButton>
                </SidebarMenuItem>
                <SidebarMenuItem>
                  <SidebarMenuButton asChild>
                    <Link to="/tendering?tab=tenderDocs">
                      <FileSearch className="h-4 w-4 mr-2" />
                      <span>招标文件智能编制</span>
                    </Link>
                  </SidebarMenuButton>
                </SidebarMenuItem>
                <SidebarMenuItem>
                  <SidebarMenuButton asChild>
                    <Link to="/tendering?tab=evaluation">
                      <Scale className="h-4 w-4 mr-2" />
                      <span>智能评标</span>
                    </Link>
                  </SidebarMenuButton>
                </SidebarMenuItem>
                <SidebarMenuItem>
                  <SidebarMenuButton asChild>
                    <Link to="/tendering?tab=risk">
                      <AlertTriangle className="h-4 w-4 mr-2" />
                      <span>风险侦测</span>
                    </Link>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              </SidebarMenu>
            </SidebarGroupContent>
          </SidebarGroup>
        )}
        
        {currentPath.includes('/advanced') && (
          <SidebarGroup>
            <SidebarGroupLabel>高级功能</SidebarGroupLabel>
            <SidebarGroupContent>
              <SidebarMenu>
                <SidebarMenuItem>
                  <SidebarMenuButton asChild>
                    <Link to="/advanced?tab=dashboard">
                      <LineChart className="h-4 w-4 mr-2" />
                      <span>仪表盘</span>
                    </Link>
                  </SidebarMenuButton>
                </SidebarMenuItem>
                <SidebarMenuItem>
                  <SidebarMenuButton asChild>
                    <Link to="/advanced?tab=supplyChain">
                      <ShieldAlert className="h-4 w-4 mr-2" />
                      <span>供应链风险预警</span>
                    </Link>
                  </SidebarMenuButton>
                </SidebarMenuItem>
                <SidebarMenuItem>
                  <SidebarMenuButton asChild>
                    <Link to="/advanced?tab=contract">
                      <ScrollText className="h-4 w-4 mr-2" />
                      <span>智能履约评价</span>
                    </Link>
                  </SidebarMenuButton>
                </SidebarMenuItem>
                <SidebarMenuItem>
                  <SidebarMenuButton asChild>
                    <Link to="/advanced?tab=procurement">
                      <TrendingUp className="h-4 w-4 mr-2" />
                      <span>采购策略沙盘推演</span>
                    </Link>
                  </SidebarMenuButton>
                </SidebarMenuItem>
                <SidebarMenuItem>
                  <SidebarMenuButton asChild>
                    <Link to="/advanced?tab=regulatory">
                      <Gavel className="h-4 w-4 mr-2" />
                      <span>法规动态引擎</span>
                    </Link>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              </SidebarMenu>
            </SidebarGroupContent>
          </SidebarGroup>
        )}
      </SidebarContent>
      
      <SidebarFooter>
        <SidebarMenu>
          <SidebarMenuItem>
            <SidebarMenuButton asChild>
              <Link to="/settings">
                <Settings className="h-4 w-4 mr-2" />
                <span>系统设置</span>
              </Link>
            </SidebarMenuButton>
          </SidebarMenuItem>
        </SidebarMenu>
      </SidebarFooter>
    </Sidebar>
  );
};

export default MainSidebar;
