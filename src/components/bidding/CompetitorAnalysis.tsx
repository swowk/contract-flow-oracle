
import { useState } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Search, Download, BarChart2, PieChart as PieChartIcon } from "lucide-react";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Badge } from "@/components/ui/badge";
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer, PieChart, Pie, Cell } from 'recharts';

const CompetitorAnalysis = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [industryFilter, setIndustryFilter] = useState("all");
  const [visualizationTab, setVisualizationTab] = useState("price");
  
  // Mock competitor data
  const competitors = [
    { id: 1, name: "华夏科技有限公司", industry: "IT服务", winRate: 65, avgBidPrice: 950000, bidCount: 35, lastBidDate: "2024-03-15" },
    { id: 2, name: "恒宇系统集成有限公司", industry: "系统集成", winRate: 52, avgBidPrice: 920000, bidCount: 48, lastBidDate: "2024-02-28" },
    { id: 3, name: "星辰软件科技公司", industry: "软件开发", winRate: 71, avgBidPrice: 980000, bidCount: 29, lastBidDate: "2024-03-20" },
    { id: 4, name: "京润通信技术有限公司", industry: "通信技术", winRate: 47, avgBidPrice: 895000, bidCount: 42, lastBidDate: "2024-01-15" },
    { id: 5, name: "东方数据服务公司", industry: "IT服务", winRate: 58, avgBidPrice: 935000, bidCount: 31, lastBidDate: "2024-03-10" },
    { id: 6, name: "智联网络科技有限公司", industry: "网络设备", winRate: 63, avgBidPrice: 970000, bidCount: 27, lastBidDate: "2024-02-05" },
    { id: 7, name: "云途信息技术有限公司", industry: "软件开发", winRate: 69, avgBidPrice: 990000, bidCount: 23, lastBidDate: "2024-03-01" },
    { id: 8, name: "泰和系统工程有限公司", industry: "系统集成", winRate: 54, avgBidPrice: 925000, bidCount: 39, lastBidDate: "2024-03-12" },
  ];
  
  // Filter competitors based on search query and industry filter
  const filteredCompetitors = competitors.filter(competitor => {
    const matchesSearch = competitor.name.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesIndustry = industryFilter === "all" || competitor.industry === industryFilter;
    return matchesSearch && matchesIndustry;
  });
  
  // Generate data for price comparison chart
  const priceComparisonData = filteredCompetitors.map(competitor => ({
    name: competitor.name.length > 10 ? competitor.name.substring(0, 10) + '...' : competitor.name,
    avgPrice: competitor.avgBidPrice,
  }));
  
  // Generate data for win rate chart
  const winRateData = filteredCompetitors.map(competitor => ({
    name: competitor.name.length > 10 ? competitor.name.substring(0, 10) + '...' : competitor.name,
    winRate: competitor.winRate,
  }));
  
  // Generate data for industry distribution chart
  const industryDistribution = competitors.reduce((acc, competitor) => {
    const existingIndustry = acc.find(item => item.name === competitor.industry);
    if (existingIndustry) {
      existingIndustry.value++;
    } else {
      acc.push({ name: competitor.industry, value: 1 });
    }
    return acc;
  }, []);
  
  const COLORS = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042', '#8884d8'];
  
  return (
    <div className="space-y-6">
      <Card>
        <CardHeader>
          <div className="flex flex-col sm:flex-row justify-between sm:items-center gap-4">
            <div>
              <CardTitle>竞争对手分析</CardTitle>
              <CardDescription>历史投标数据分析和竞争策略建议</CardDescription>
            </div>
            <div className="flex space-x-2">
              <Select value={industryFilter} onValueChange={setIndustryFilter}>
                <SelectTrigger className="w-[180px]">
                  <SelectValue placeholder="行业筛选" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">全部行业</SelectItem>
                  <SelectItem value="IT服务">IT服务</SelectItem>
                  <SelectItem value="系统集成">系统集成</SelectItem>
                  <SelectItem value="软件开发">软件开发</SelectItem>
                  <SelectItem value="通信技术">通信技术</SelectItem>
                  <SelectItem value="网络设备">网络设备</SelectItem>
                </SelectContent>
              </Select>
              <div className="relative">
                <Search className="absolute left-2 top-2.5 h-4 w-4 text-muted-foreground" />
                <Input
                  placeholder="搜索竞争对手..."
                  className="pl-8 w-[200px]"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                />
              </div>
            </div>
          </div>
        </CardHeader>
        <CardContent>
          <div className="overflow-x-auto">
            <table className="w-full text-sm">
              <thead>
                <tr className="border-b">
                  <th className="text-left py-3 px-4">企业名称</th>
                  <th className="text-left py-3 px-4">行业</th>
                  <th className="text-right py-3 px-4">中标率</th>
                  <th className="text-right py-3 px-4">平均报价</th>
                  <th className="text-right py-3 px-4">投标次数</th>
                  <th className="text-center py-3 px-4">最近投标</th>
                  <th className="text-center py-3 px-4">操作</th>
                </tr>
              </thead>
              <tbody>
                {filteredCompetitors.map((competitor) => (
                  <tr key={competitor.id} className="border-b hover:bg-slate-50">
                    <td className="py-3 px-4">{competitor.name}</td>
                    <td className="py-3 px-4">
                      <Badge variant="outline">{competitor.industry}</Badge>
                    </td>
                    <td className="text-right py-3 px-4">{competitor.winRate}%</td>
                    <td className="text-right py-3 px-4">{(competitor.avgBidPrice / 10000).toFixed(2)}万</td>
                    <td className="text-right py-3 px-4">{competitor.bidCount}</td>
                    <td className="text-center py-3 px-4">{competitor.lastBidDate}</td>
                    <td className="text-center py-3 px-4">
                      <Button variant="ghost" size="sm">详情</Button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          
          <div className="mt-8">
            <Tabs value={visualizationTab} onValueChange={setVisualizationTab}>
              <div className="flex justify-between items-center mb-4">
                <TabsList>
                  <TabsTrigger value="price">
                    <BarChart2 className="h-4 w-4 mr-2" />
                    报价对比
                  </TabsTrigger>
                  <TabsTrigger value="winRate">
                    <BarChart2 className="h-4 w-4 mr-2" />
                    中标率对比
                  </TabsTrigger>
                  <TabsTrigger value="industry">
                    <PieChartIcon className="h-4 w-4 mr-2" />
                    行业分布
                  </TabsTrigger>
                </TabsList>
                
                <Button variant="outline" size="sm">
                  <Download className="h-4 w-4 mr-2" />
                  导出数据
                </Button>
              </div>
              
              <TabsContent value="price">
                <div className="h-[300px]">
                  <ResponsiveContainer width="100%" height="100%">
                    <BarChart
                      data={priceComparisonData}
                      margin={{ top: 5, right: 30, left: 20, bottom: 70 }}
                    >
                      <CartesianGrid strokeDasharray="3 3" opacity={0.1} />
                      <XAxis 
                        dataKey="name" 
                        angle={-45} 
                        textAnchor="end"
                        height={70}
                        tickMargin={20}
                      />
                      <YAxis 
                        tickFormatter={(value) => `${(value / 10000).toFixed(0)}万`}
                      />
                      <Tooltip 
                        formatter={(value) => [`${(value / 10000).toFixed(2)}万`, '平均报价']}
                      />
                      <Legend />
                      <Bar dataKey="avgPrice" name="平均报价" fill="#1890ff" barSize={30} />
                    </BarChart>
                  </ResponsiveContainer>
                </div>
              </TabsContent>
              
              <TabsContent value="winRate">
                <div className="h-[300px]">
                  <ResponsiveContainer width="100%" height="100%">
                    <BarChart
                      data={winRateData}
                      margin={{ top: 5, right: 30, left: 20, bottom: 70 }}
                    >
                      <CartesianGrid strokeDasharray="3 3" opacity={0.1} />
                      <XAxis 
                        dataKey="name" 
                        angle={-45} 
                        textAnchor="end"
                        height={70}
                        tickMargin={20}
                      />
                      <YAxis 
                        tickFormatter={(value) => `${value}%`}
                      />
                      <Tooltip 
                        formatter={(value) => [`${value}%`, '中标率']}
                      />
                      <Legend />
                      <Bar dataKey="winRate" name="中标率" fill="#52c41a" barSize={30} />
                    </BarChart>
                  </ResponsiveContainer>
                </div>
              </TabsContent>
              
              <TabsContent value="industry">
                <div className="h-[300px]">
                  <ResponsiveContainer width="100%" height="100%">
                    <PieChart>
                      <Pie
                        data={industryDistribution}
                        cx="50%"
                        cy="50%"
                        labelLine={false}
                        outerRadius={100}
                        fill="#8884d8"
                        dataKey="value"
                        nameKey="name"
                        label={({ name, percent }) => `${name}: ${(percent * 100).toFixed(0)}%`}
                      >
                        {industryDistribution.map((entry, index) => (
                          <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                        ))}
                      </Pie>
                      <Tooltip formatter={(value, name, props) => [value, props.payload.name]} />
                      <Legend />
                    </PieChart>
                  </ResponsiveContainer>
                </div>
              </TabsContent>
            </Tabs>
          </div>
          
          <div className="mt-6 p-4 rounded-md bg-blue-50 border border-blue-100">
            <h3 className="font-medium mb-2">竞争策略分析</h3>
            <ul className="list-disc pl-5 space-y-1 text-sm">
              <li>华夏科技和星辰软件科技为主要竞争对手，中标率均超过65%</li>
              <li>竞争对手平均报价区间为89.5-99万，建议报价控制在此区间内</li>
              <li>IT服务和软件开发类企业中标率整体高于系统集成类企业</li>
              <li>建议针对华夏科技在技术方案中突出技术创新与实施经验</li>
            </ul>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default CompetitorAnalysis;
