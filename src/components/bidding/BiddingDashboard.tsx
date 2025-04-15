
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { FileText, TrendingUp, AlertTriangle, BarChart, LineChart } from "lucide-react";
import { Button } from "@/components/ui/button";
import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, BarChart as ReBarChart, Bar, PieChart, Pie, Cell, Legend } from 'recharts';
import { cn } from "@/lib/utils";

const biddingData = [
  { name: '1月', 成功率: 65, 投标数: 10 },
  { name: '2月', 成功率: 59, 投标数: 15 },
  { name: '3月', 成功率: 80, 投标数: 12 },
  { name: '4月', 成功率: 81, 投标数: 8 },
  { name: '5月', 成功率: 56, 投标数: 14 },
  { name: '6月', 成功率: 70, 投标数: 16 }
];

const documentTypes = [
  { name: '技术标', value: 45 },
  { name: '商务标', value: 35 },
  { name: '资质标', value: 20 }
];

const COLORS = ['#0088FE', '#00C49F', '#FFBB28'];

const BiddingDashboard = () => {
  const recentTenders = [
    { id: 1, name: "智慧园区建设项目", status: "进行中", progress: 75 },
    { id: 2, name: "企业数据中心升级", status: "准备中", progress: 30 },
    { id: 3, name: "智能制造系统实施", status: "已完成", progress: 100 },
    { id: 4, name: "网络安全设备采购", status: "评审中", progress: 50 },
  ];
  
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      <Card>
        <CardHeader className="pb-2">
          <CardTitle className="text-lg flex items-center">
            <FileText className="mr-2 h-5 w-5 text-blue-500" />
            近期投标项目
          </CardTitle>
          <CardDescription>当前进行中的项目</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {recentTenders.map((tender) => (
              <div key={tender.id}>
                <div className="flex justify-between mb-1 text-sm">
                  <span>{tender.name}</span>
                  <span className={cn(
                    tender.status === "进行中" ? "text-blue-500" :
                    tender.status === "已完成" ? "text-green-500" :
                    tender.status === "评审中" ? "text-amber-500" : "text-gray-500"
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
            投标成功率
          </CardTitle>
          <CardDescription>近6个月投标数据</CardDescription>
        </CardHeader>
        <CardContent className="pt-4">
          <div className="h-[200px]">
            <ResponsiveContainer width="100%" height="100%">
              <AreaChart data={biddingData}>
                <defs>
                  <linearGradient id="colorRate" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="5%" stopColor="#8884d8" stopOpacity={0.8}/>
                    <stop offset="95%" stopColor="#8884d8" stopOpacity={0}/>
                  </linearGradient>
                </defs>
                <XAxis dataKey="name" fontSize={12} />
                <YAxis fontSize={12} />
                <CartesianGrid strokeDasharray="3 3" opacity={0.1} />
                <Tooltip />
                <Area type="monotone" dataKey="成功率" stroke="#8884d8" fillOpacity={1} fill="url(#colorRate)" />
              </AreaChart>
            </ResponsiveContainer>
          </div>
        </CardContent>
      </Card>
      
      <Card>
        <CardHeader className="pb-2">
          <CardTitle className="text-lg flex items-center">
            <AlertTriangle className="mr-2 h-5 w-5 text-blue-500" />
            投标文件类型分布
          </CardTitle>
          <CardDescription>按文件类型划分</CardDescription>
        </CardHeader>
        <CardContent className="pt-4">
          <div className="h-[200px]">
            <ResponsiveContainer width="100%" height="100%">
              <PieChart>
                <Pie
                  data={documentTypes}
                  cx="50%"
                  cy="50%"
                  labelLine={false}
                  outerRadius={80}
                  fill="#8884d8"
                  dataKey="value"
                  label={({ name, percent }) => `${name}: ${(percent * 100).toFixed(0)}%`}
                >
                  {documentTypes.map((entry, index) => (
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
            投标数据分析
          </CardTitle>
          <CardDescription>每月投标数和成功率对比</CardDescription>
        </CardHeader>
        <CardContent className="pt-4">
          <div className="h-[250px]">
            <ResponsiveContainer width="100%" height="100%">
              <ReBarChart data={biddingData}>
                <CartesianGrid strokeDasharray="3 3" opacity={0.1} />
                <XAxis dataKey="name" />
                <YAxis yAxisId="left" orientation="left" />
                <YAxis yAxisId="right" orientation="right" />
                <Tooltip />
                <Legend />
                <Bar yAxisId="left" dataKey="投标数" fill="#1890ff" />
                <Bar yAxisId="right" dataKey="成功率" fill="#82ca9d" />
              </ReBarChart>
            </ResponsiveContainer>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default BiddingDashboard;
