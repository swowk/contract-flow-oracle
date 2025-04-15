
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { Users, Building, AlertTriangle, BarChart, TrendingUp } from "lucide-react";
import { Button } from "@/components/ui/button";
import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, BarChart as ReBarChart, Bar, PieChart, Pie, Cell, Legend } from 'recharts';
import { cn } from "@/lib/utils";

const tendersData = [
  { name: '1月', 完成率: 75, 项目数: 8 },
  { name: '2月', 完成率: 68, 项目数: 12 },
  { name: '3月', 完成率: 90, 项目数: 6 },
  { name: '4月', 完成率: 85, 项目数: 9 },
  { name: '5月', 完成率: 72, 项目数: 15 },
  { name: '6月', 完成率: 80, 项目数: 10 }
];

const supplierDistribution = [
  { name: '制造业', value: 35 },
  { name: 'IT服务', value: 30 },
  { name: '建筑业', value: 20 },
  { name: '其他', value: 15 }
];

const COLORS = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042'];

const TenderingDashboard = () => {
  const activeTenders = [
    { id: 1, name: "政府办公设备采购项目", status: "招标中", progress: 60 },
    { id: 2, name: "城市智能交通系统", status: "评标中", progress: 80 },
    { id: 3, name: "医院信息系统升级", status: "已完成", progress: 100 },
    { id: 4, name: "公共安全监控设备", status: "准备中", progress: 30 },
  ];
  
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      <Card>
        <CardHeader className="pb-2">
          <CardTitle className="text-lg flex items-center">
            <Building className="mr-2 h-5 w-5 text-blue-500" />
            进行中的招标项目
          </CardTitle>
          <CardDescription>当前进行的招标活动</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {activeTenders.map((tender) => (
              <div key={tender.id}>
                <div className="flex justify-between mb-1 text-sm">
                  <span>{tender.name}</span>
                  <span className={cn(
                    tender.status === "招标中" ? "text-blue-500" :
                    tender.status === "已完成" ? "text-green-500" :
                    tender.status === "评标中" ? "text-amber-500" : "text-gray-500"
                  )}>{tender.status}</span>
                </div>
                <Progress value={tender.progress} className="h-2" />
              </div>
            ))}
          </div>
        </CardContent>
        <CardFooter>
          <Button variant="outline" size="sm" className="w-full">查看全部项目</Button>
        </CardFooter>
      </Card>
      
      <Card>
        <CardHeader className="pb-2">
          <CardTitle className="text-lg flex items-center">
            <TrendingUp className="mr-2 h-5 w-5 text-blue-500" />
            招标项目完成率
          </CardTitle>
          <CardDescription>近6个月项目数据</CardDescription>
        </CardHeader>
        <CardContent className="pt-4">
          <div className="h-[200px]">
            <ResponsiveContainer width="100%" height="100%">
              <AreaChart data={tendersData}>
                <defs>
                  <linearGradient id="colorCompletion" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="5%" stopColor="#82ca9d" stopOpacity={0.8}/>
                    <stop offset="95%" stopColor="#82ca9d" stopOpacity={0}/>
                  </linearGradient>
                </defs>
                <XAxis dataKey="name" fontSize={12} />
                <YAxis fontSize={12} />
                <CartesianGrid strokeDasharray="3 3" opacity={0.1} />
                <Tooltip />
                <Area type="monotone" dataKey="完成率" stroke="#82ca9d" fillOpacity={1} fill="url(#colorCompletion)" />
              </AreaChart>
            </ResponsiveContainer>
          </div>
        </CardContent>
      </Card>
      
      <Card>
        <CardHeader className="pb-2">
          <CardTitle className="text-lg flex items-center">
            <Users className="mr-2 h-5 w-5 text-blue-500" />
            供应商行业分布
          </CardTitle>
          <CardDescription>按行业类型划分</CardDescription>
        </CardHeader>
        <CardContent className="pt-4">
          <div className="h-[200px]">
            <ResponsiveContainer width="100%" height="100%">
              <PieChart>
                <Pie
                  data={supplierDistribution}
                  cx="50%"
                  cy="50%"
                  labelLine={false}
                  outerRadius={80}
                  fill="#8884d8"
                  dataKey="value"
                  label={({ name, percent }) => `${name}: ${(percent * 100).toFixed(0)}%`}
                >
                  {supplierDistribution.map((entry, index) => (
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
            <BarChart className="mr-2 h-5 w-5 text-blue-500" />
            招标数据分析
          </CardTitle>
          <CardDescription>每月招标项目数和完成率对比</CardDescription>
        </CardHeader>
        <CardContent className="pt-4">
          <div className="h-[250px]">
            <ResponsiveContainer width="100%" height="100%">
              <ReBarChart data={tendersData}>
                <CartesianGrid strokeDasharray="3 3" opacity={0.1} />
                <XAxis dataKey="name" />
                <YAxis yAxisId="left" orientation="left" />
                <YAxis yAxisId="right" orientation="right" />
                <Tooltip />
                <Legend />
                <Bar yAxisId="left" dataKey="项目数" fill="#1890ff" />
                <Bar yAxisId="right" dataKey="完成率" fill="#82ca9d" />
              </ReBarChart>
            </ResponsiveContainer>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default TenderingDashboard;
