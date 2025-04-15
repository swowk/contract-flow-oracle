
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { AlertTriangle, LineChart, TrendingUp, Gavel, ScrollText } from "lucide-react";
import { Button } from "@/components/ui/button";
import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, BarChart, Bar, PieChart, Pie, Cell, Legend } from 'recharts';
import { cn } from "@/lib/utils";

const riskTrendData = [
  { name: '1月', 高风险: 12, 中风险: 18, 低风险: 25 },
  { name: '2月', 高风险: 15, 中风险: 20, 低风险: 22 },
  { name: '3月', 高风险: 8, 中风险: 15, 低风险: 30 },
  { name: '4月', 高风险: 10, 中风险: 17, 低风险: 28 },
  { name: '5月', 高风险: 14, 中风险: 19, 低风险: 25 },
  { name: '6月', 高风险: 9, 中风险: 16, 低风险: 32 }
];

const contractComplianceData = [
  { name: '准时', value: 75 },
  { name: '延迟', value: 15 },
  { name: '风险', value: 10 }
];

const COLORS = ['#4CAF50', '#FFC107', '#F44336'];

const AdvancedDashboard = () => {
  const regulatoryUpdates = [
    { id: 1, name: "《政府采购法实施条例》修订", status: "重要", date: "2023-12-15" },
    { id: 2, name: "《招标投标法》实施细则更新", status: "重要", date: "2023-11-20" },
    { id: 3, name: "地方采购监管新规", status: "一般", date: "2023-10-05" },
    { id: 4, name: "数字化招投标管理办法", status: "一般", date: "2023-09-18" },
  ];
  
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      <Card>
        <CardHeader className="pb-2">
          <CardTitle className="text-lg flex items-center">
            <Gavel className="mr-2 h-5 w-5 text-blue-500" />
            法规政策更新
          </CardTitle>
          <CardDescription>近期相关法规动态</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {regulatoryUpdates.map((update) => (
              <div key={update.id} className="border-b pb-2">
                <div className="flex justify-between mb-1">
                  <span className="font-medium">{update.name}</span>
                  <span className={cn(
                    update.status === "重要" ? "text-red-500" : "text-amber-500"
                  )}>{update.status}</span>
                </div>
                <div className="text-xs text-muted-foreground">
                  更新日期: {update.date}
                </div>
              </div>
            ))}
          </div>
        </CardContent>
        <CardFooter>
          <Button variant="outline" size="sm" className="w-full">查看全部更新</Button>
        </CardFooter>
      </Card>
      
      <Card>
        <CardHeader className="pb-2">
          <CardTitle className="text-lg flex items-center">
            <AlertTriangle className="mr-2 h-5 w-5 text-blue-500" />
            供应链风险趋势
          </CardTitle>
          <CardDescription>近6个月风险分布趋势</CardDescription>
        </CardHeader>
        <CardContent className="pt-4">
          <div className="h-[200px]">
            <ResponsiveContainer width="100%" height="100%">
              <AreaChart data={riskTrendData} stackOffset="expand">
                <XAxis dataKey="name" fontSize={12} />
                <YAxis fontSize={12} />
                <CartesianGrid strokeDasharray="3 3" opacity={0.1} />
                <Tooltip />
                <Area type="monotone" dataKey="高风险" stackId="1" stroke="#F44336" fill="#F44336" />
                <Area type="monotone" dataKey="中风险" stackId="1" stroke="#FFC107" fill="#FFC107" />
                <Area type="monotone" dataKey="低风险" stackId="1" stroke="#4CAF50" fill="#4CAF50" />
              </AreaChart>
            </ResponsiveContainer>
          </div>
        </CardContent>
      </Card>
      
      <Card>
        <CardHeader className="pb-2">
          <CardTitle className="text-lg flex items-center">
            <ScrollText className="mr-2 h-5 w-5 text-blue-500" />
            合同履约情况
          </CardTitle>
          <CardDescription>按合同履约状态划分</CardDescription>
        </CardHeader>
        <CardContent className="pt-4">
          <div className="h-[200px]">
            <ResponsiveContainer width="100%" height="100%">
              <PieChart>
                <Pie
                  data={contractComplianceData}
                  cx="50%"
                  cy="50%"
                  labelLine={false}
                  outerRadius={80}
                  fill="#8884d8"
                  dataKey="value"
                  label={({ name, percent }) => `${name}: ${(percent * 100).toFixed(0)}%`}
                >
                  {contractComplianceData.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                  ))}
                </Pie>
                <Tooltip />
                <Legend />
              </PieChart>
            </ResponsiveContainer>
          </div>
        </CardContent>
      </Card>
      
      <Card className="lg:col-span-3">
        <CardHeader className="pb-2">
          <CardTitle className="text-lg flex items-center">
            <TrendingUp className="mr-2 h-5 w-5 text-blue-500" />
            采购成本优化对比
          </CardTitle>
          <CardDescription>集中采购vs分散采购成本差异</CardDescription>
        </CardHeader>
        <CardContent className="pt-4">
          <div className="h-[250px]">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart data={[
                {name: 'IT设备', 集中采购: 85, 分散采购: 100},
                {name: '办公用品', 集中采购: 75, 分散采购: 95},
                {name: '专业服务', 集中采购: 90, 分散采购: 105},
                {name: '原材料', 集中采购: 80, 分散采购: 100},
                {name: '物流', 集中采购: 70, 分散采购: 90}
              ]}>
                <CartesianGrid strokeDasharray="3 3" opacity={0.1} />
                <XAxis dataKey="name" />
                <YAxis />
                <Tooltip />
                <Legend />
                <Bar dataKey="集中采购" fill="#1890ff" />
                <Bar dataKey="分散采购" fill="#FF8042" />
              </BarChart>
            </ResponsiveContainer>
          </div>
          <div className="text-xs text-center mt-2 text-muted-foreground">
            *基准值100表示标准市场价格
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default AdvancedDashboard;
