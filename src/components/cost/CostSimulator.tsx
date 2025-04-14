
import { useState } from "react";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Label } from "@/components/ui/label";
import { LineChart, Line, AreaChart, Area, BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import MaterialCostPredictor from "./MaterialCostPredictor";
import ProjectDeviationAnalyzer from "./ProjectDeviationAnalyzer";

const CostSimulator = () => {
  const [activeTab, setActiveTab] = useState("materialCost");
  
  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <div>
          <h2 className="text-3xl font-bold">成本测算引擎</h2>
          <p className="text-muted-foreground mt-1">动态预测成本变化，计算工程量清单偏差</p>
        </div>
      </div>
      
      <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
        <TabsList className="grid w-[600px] grid-cols-2">
          <TabsTrigger value="materialCost">材料成本预测</TabsTrigger>
          <TabsTrigger value="projectDeviation">工程量偏差分析</TabsTrigger>
        </TabsList>
        
        <TabsContent value="materialCost" className="pt-6">
          <MaterialCostPredictor />
        </TabsContent>
        
        <TabsContent value="projectDeviation" className="pt-6">
          <ProjectDeviationAnalyzer />
        </TabsContent>
      </Tabs>
    </div>
  );
};

export default CostSimulator;
