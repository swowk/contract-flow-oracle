
import { useState } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import SupplierMatchingSystem from "./SupplierMatchingSystem";
import SupplierRiskMonitor from "./SupplierRiskMonitor";

const SupplierAnalysis = () => {
  const [activeTab, setActiveTab] = useState("matching");
  
  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <div>
          <h2 className="text-3xl font-bold">供应商管理</h2>
          <p className="text-muted-foreground mt-1">匹配合适的供应商，监控风险与履约情况</p>
        </div>
      </div>
      
      <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
        <TabsList className="grid w-[500px] grid-cols-2">
          <TabsTrigger value="matching">供应商智能匹配</TabsTrigger>
          <TabsTrigger value="risk">风险监控</TabsTrigger>
        </TabsList>
        
        <TabsContent value="matching" className="pt-6">
          <SupplierMatchingSystem />
        </TabsContent>
        
        <TabsContent value="risk" className="pt-6">
          <SupplierRiskMonitor />
        </TabsContent>
      </Tabs>
    </div>
  );
};

export default SupplierAnalysis;
