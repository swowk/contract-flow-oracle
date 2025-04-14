
import { useState } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import PricingStrategySimulator from "./PricingStrategySimulator";
import CompetitorAnalysis from "./CompetitorAnalysis";

const BiddingSimulator = () => {
  const [activeTab, setActiveTab] = useState("pricing");
  
  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <div>
          <h2 className="text-3xl font-bold">投标博弈模拟系统</h2>
          <p className="text-muted-foreground mt-1">模拟不同报价策略，分析竞争对手数据</p>
        </div>
      </div>
      
      <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
        <TabsList className="grid w-[500px] grid-cols-2">
          <TabsTrigger value="pricing">报价策略模拟</TabsTrigger>
          <TabsTrigger value="competitors">竞争对手分析</TabsTrigger>
        </TabsList>
        
        <TabsContent value="pricing" className="pt-6">
          <PricingStrategySimulator />
        </TabsContent>
        
        <TabsContent value="competitors" className="pt-6">
          <CompetitorAnalysis />
        </TabsContent>
      </Tabs>
    </div>
  );
};

export default BiddingSimulator;
