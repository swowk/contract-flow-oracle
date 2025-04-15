
import { useState, useEffect } from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import DocumentAnalyzer from "@/components/documents/DocumentAnalyzer";
import CostSimulator from "@/components/cost/CostSimulator";
import BiddingSimulator from "@/components/bidding/BiddingSimulator";
import BiddingDashboard from "@/components/bidding/BiddingDashboard";
import DocumentCreator from "@/components/bidding/DocumentCreator";
import PresentationCoaching from "@/components/bidding/PresentationCoaching";
import { SidebarProvider } from "@/components/ui/sidebar";
import MainSidebar from "@/components/layout/MainSidebar";
import MainHeader from "@/components/layout/MainHeader";
import { useSearchParams, useNavigate } from "react-router-dom";

const BiddingSystem = () => {
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
    navigate(`/bidding?tab=${value}`);
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
                <h1 className="text-3xl font-bold">投标系统</h1>
                <p className="text-muted-foreground mt-1">投标文件分析、成本测算、投标博弈等功能</p>
              </div>
              
              <Tabs
                defaultValue="dashboard"
                value={currentTab}
                onValueChange={handleTabChange}
                className="w-full"
              >
                <TabsList className="grid grid-cols-6 mb-8">
                  <TabsTrigger value="dashboard">仪表盘</TabsTrigger>
                  <TabsTrigger value="documents">投标文件分析</TabsTrigger>
                  <TabsTrigger value="costs">成本测算</TabsTrigger>
                  <TabsTrigger value="bidding">投标博弈</TabsTrigger>
                  <TabsTrigger value="creator">投标文件智能编制</TabsTrigger>
                  <TabsTrigger value="coaching">智能述标辅导</TabsTrigger>
                </TabsList>

                <TabsContent value="dashboard">
                  <BiddingDashboard />
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

                <TabsContent value="creator">
                  <DocumentCreator />
                </TabsContent>

                <TabsContent value="coaching">
                  <PresentationCoaching />
                </TabsContent>
              </Tabs>
            </div>
          </main>
        </div>
      </div>
    </SidebarProvider>
  );
};

export default BiddingSystem;
