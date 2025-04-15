
import { useState, useEffect } from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import AdvancedDashboard from "@/components/advanced/AdvancedDashboard";
import SupplyChainRisk from "@/components/advanced/SupplyChainRisk";
import ContractEvaluation from "@/components/advanced/ContractEvaluation";
import ProcurementStrategy from "@/components/advanced/ProcurementStrategy";
import RegulatoryEngine from "@/components/advanced/RegulatoryEngine";
import { SidebarProvider } from "@/components/ui/sidebar";
import MainSidebar from "@/components/layout/MainSidebar";
import MainHeader from "@/components/layout/MainHeader";
import { useSearchParams, useNavigate } from "react-router-dom";

const AdvancedSystem = () => {
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
    navigate(`/advanced?tab=${value}`);
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
                <h1 className="text-3xl font-bold">高级功能</h1>
                <p className="text-muted-foreground mt-1">供应链风险预警、智能履约评价等功能</p>
              </div>
              
              <Tabs
                defaultValue="dashboard"
                value={currentTab}
                onValueChange={handleTabChange}
                className="w-full"
              >
                <TabsList className="grid grid-cols-5 mb-8">
                  <TabsTrigger value="dashboard">仪表盘</TabsTrigger>
                  <TabsTrigger value="supplyChain">供应链风险预警</TabsTrigger>
                  <TabsTrigger value="contract">智能履约评价</TabsTrigger>
                  <TabsTrigger value="procurement">采购策略沙盘推演</TabsTrigger>
                  <TabsTrigger value="regulatory">法规动态引擎</TabsTrigger>
                </TabsList>

                <TabsContent value="dashboard">
                  <AdvancedDashboard />
                </TabsContent>

                <TabsContent value="supplyChain">
                  <SupplyChainRisk />
                </TabsContent>

                <TabsContent value="contract">
                  <ContractEvaluation />
                </TabsContent>

                <TabsContent value="procurement">
                  <ProcurementStrategy />
                </TabsContent>

                <TabsContent value="regulatory">
                  <RegulatoryEngine />
                </TabsContent>
              </Tabs>
            </div>
          </main>
        </div>
      </div>
    </SidebarProvider>
  );
};

export default AdvancedSystem;
