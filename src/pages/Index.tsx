
import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import DashboardOverview from "@/components/dashboard/DashboardOverview";
import DocumentAnalyzer from "@/components/documents/DocumentAnalyzer";
import CostSimulator from "@/components/cost/CostSimulator";
import BiddingSimulator from "@/components/bidding/BiddingSimulator";
import ExpertManager from "@/components/experts/ExpertManager";
import SupplierAnalysis from "@/components/suppliers/SupplierAnalysis";
import MainHeader from "@/components/layout/MainHeader";
import { SidebarProvider } from "@/components/ui/sidebar";
import MainSidebar from "@/components/layout/MainSidebar";

const Index = () => {
  const [currentTab, setCurrentTab] = useState("dashboard");

  return (
    <SidebarProvider>
      <div className="min-h-screen flex w-full bg-slate-50">
        <MainSidebar />
        <div className="flex-1 flex flex-col">
          <MainHeader />
          <main className="flex-1 p-6">
            <div className="container mx-auto">
              <Tabs
                defaultValue="dashboard"
                value={currentTab}
                onValueChange={setCurrentTab}
                className="w-full"
              >
                <TabsList className="grid grid-cols-6 mb-8">
                  <TabsTrigger value="dashboard">仪表盘</TabsTrigger>
                  <TabsTrigger value="documents">投标文件分析</TabsTrigger>
                  <TabsTrigger value="costs">成本测算</TabsTrigger>
                  <TabsTrigger value="bidding">投标博弈</TabsTrigger>
                  <TabsTrigger value="suppliers">供应商管理</TabsTrigger>
                  <TabsTrigger value="experts">专家管理</TabsTrigger>
                </TabsList>

                <TabsContent value="dashboard">
                  <DashboardOverview />
                </TabsContent>

                <TabsContent value="documents">
                  <DocumentAnalyzer />
                </TabsContent>

                <TabsContent value="costs">
                  <CostSimulator />
                </TabsContent>

                <TabsContent value="bidding">
                  <BiddingSimulator />
                </TabsContent>

                <TabsContent value="suppliers">
                  <SupplierAnalysis />
                </TabsContent>

                <TabsContent value="experts">
                  <ExpertManager />
                </TabsContent>
              </Tabs>
            </div>
          </main>
        </div>
      </div>
    </SidebarProvider>
  );
};

export default Index;
