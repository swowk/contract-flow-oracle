
import { useState, useEffect } from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import SupplierAnalysis from "@/components/suppliers/SupplierAnalysis";
import ExpertManager from "@/components/experts/ExpertManager";
import TenderingDashboard from "@/components/tendering/TenderingDashboard";
import TenderDocumentCreator from "@/components/tendering/TenderDocumentCreator";
import IntelligentEvaluation from "@/components/tendering/IntelligentEvaluation";
import RiskDetection from "@/components/tendering/RiskDetection";
import { SidebarProvider } from "@/components/ui/sidebar";
import MainSidebar from "@/components/layout/MainSidebar";
import MainHeader from "@/components/layout/MainHeader";
import { useSearchParams, useNavigate } from "react-router-dom";

const TenderingSystem = () => {
  const [searchParams] = useSearchParams();
  const navigate = useNavigate();
  const tabFromUrl = searchParams.get('tab');
  const [currentTab, setCurrentTab] = useState(tabFromUrl || "dashboard");
  
  useEffect(() => {
    if (tabFromUrl && tabFromUrl !== currentTab) {
      setCurrentTab(tabFromUrl);
    }
  }, [tabFromUrl]);
  
  const handleTabChange = (value: string) => {
    setCurrentTab(value);
    navigate(`/tendering?tab=${value}`);
  };

  return (
    <SidebarProvider>
      <div className="min-h-screen flex w-full bg-slate-50">
        <MainSidebar />
        <div className="flex-1 flex flex-col">
          <MainHeader />
          <main className="flex-1 p-6">
            <div className="container mx-auto">
              <div className="mb-6">
                <h1 className="text-3xl font-bold">招标系统</h1>
                <p className="text-muted-foreground mt-1">供应商管理、专家管理等功能</p>
              </div>
              
              <Tabs
                defaultValue="dashboard"
                value={currentTab}
                onValueChange={handleTabChange}
                className="w-full"
              >
                <TabsList className="grid grid-cols-6 mb-8">
                  <TabsTrigger value="dashboard">仪表盘</TabsTrigger>
                  <TabsTrigger value="suppliers">供应商管理</TabsTrigger>
                  <TabsTrigger value="experts">专家管理</TabsTrigger>
                  <TabsTrigger value="tenderDocs">招标文件智能编制</TabsTrigger>
                  <TabsTrigger value="evaluation">智能评标</TabsTrigger>
                  <TabsTrigger value="risk">风险侦测</TabsTrigger>
                </TabsList>

                <TabsContent value="dashboard">
                  <TenderingDashboard />
                </TabsContent>

                <TabsContent value="suppliers">
                  <SupplierAnalysis />
                </TabsContent>

                <TabsContent value="experts">
                  <ExpertManager />
                </TabsContent>

                <TabsContent value="tenderDocs">
                  <TenderDocumentCreator />
                </TabsContent>

                <TabsContent value="evaluation">
                  <IntelligentEvaluation />
                </TabsContent>

                <TabsContent value="risk">
                  <RiskDetection />
                </TabsContent>
              </Tabs>
            </div>
          </main>
        </div>
      </div>
    </SidebarProvider>
  );
};

export default TenderingSystem;
