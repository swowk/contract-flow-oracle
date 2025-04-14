
import { useState } from "react";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Search, FileText, Users, Building, Calendar, ChevronRight, PlusCircle, Download, BarChart2 } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Label } from "@/components/ui/label";
import { Progress } from "@/components/ui/progress";
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

const ExpertManager = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedTab, setSelectedTab] = useState("experts");
  const [industryFilter, setIndustryFilter] = useState("all");
  
  // Mock expert data
  const experts = [
    {
      id: 1,
      name: "张教授",
      title: "高级工程师",
      organization: "中国科学院",
      specialization: ["信息系统", "网络安全"],
      rating: 4.8,
      evaluationCount: 36,
      recentProjects: 8,
      availableDate: "2024-04-01",
      status: "available"
    },
    {
      id: 2,
      name: "李博士",
      title: "技术总监",
      organization: "国家信息中心",
      specialization: ["大数据", "人工智能"],
      rating: 4.9,
      evaluationCount: 42,
      recentProjects: 5,
      availableDate: "2024-04-05",
      status: "busy"
    },
    {
      id: 3,
      name: "王工",
      title: "高级咨询师",
      organization: "某知名咨询公司",
      specialization: ["IT规划", "方案设计"],
      rating: 4.7,
      evaluationCount: 29,
      recentProjects: 6,
      availableDate: "2024-03-28",
      status: "available"
    },
    {
      id: 4,
      name: "赵顾问",
      title: "首席架构师",
      organization: "某大型软件公司",
      specialization: ["系统架构", "技术评估"],
      rating: 4.6,
      evaluationCount: 31,
      recentProjects: 7,
      availableDate: "2024-04-10",
      status: "available"
    },
    {
      id: 5,
      name: "刘研究员",
      title: "研究员",
      organization: "工业和信息化部",
      specialization: ["政策法规", "标准规范"],
      rating: 4.9,
      evaluationCount: 45,
      recentProjects: 4,
      availableDate: "2024-04-15",
      status: "unavailable"
    },
  ];
  
  // Filter experts based on search query
  const filteredExperts = experts.filter(expert =>
    expert.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
    expert.organization.toLowerCase().includes(searchQuery.toLowerCase()) ||
    expert.specialization.some(spec => spec.toLowerCase().includes(searchQuery.toLowerCase()))
  );
  
  // Mock evaluation data for analytics
  const evaluationData = [
    { category: "专业知识", score: 90 },
    { category: "评审效率", score: 85 },
    { category: "公正性", score: 95 },
    { category: "沟通能力", score: 80 },
    { category: "规范遵循", score: 92 },
  ];
  
  // Mock evaluation distribution
  const distributionData = [
    { name: "5分", count: 28 },
    { name: "4分", count: 12 },
    { name: "3分", count: 5 },
    { name: "2分", count: 1 },
    { name: "1分", count: 0 },
  ];
  
  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <div>
          <h2 className="text-3xl font-bold">评标专家管理</h2>
          <p className="text-muted-foreground mt-1">管理评标专家资源库，智能抽选与调度</p>
        </div>
      </div>
      
      <Tabs value={selectedTab} onValueChange={setSelectedTab} className="w-full">
        <TabsList className="grid w-[600px] grid-cols-3">
          <TabsTrigger value="experts">专家库</TabsTrigger>
          <TabsTrigger value="evaluation">评审管理</TabsTrigger>
          <TabsTrigger value="analytics">数据分析</TabsTrigger>
        </TabsList>
        
        <TabsContent value="experts" className="pt-6">
          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <div>
                <CardTitle>评标专家库</CardTitle>
                <CardDescription>专家资源管理与智能匹配</CardDescription>
              </div>
              <Button>
                <PlusCircle className="mr-2 h-4 w-4" />
                添加专家
              </Button>
            </CardHeader>
            <CardContent>
              <div className="flex justify-between items-center mb-6">
                <div className="flex space-x-4">
                  <Select value={industryFilter} onValueChange={setIndustryFilter}>
                    <SelectTrigger className="w-[180px]">
                      <SelectValue placeholder="专业领域筛选" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="all">全部领域</SelectItem>
                      <SelectItem value="it">信息系统</SelectItem>
                      <SelectItem value="security">网络安全</SelectItem>
                      <SelectItem value="ai">人工智能</SelectItem>
                      <SelectItem value="bigdata">大数据</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                
                <div className="relative">
                  <Search className="absolute left-2 top-2.5 h-4 w-4 text-muted-foreground" />
                  <Input
                    placeholder="搜索专家..."
                    className="pl-8 w-[250px]"
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                  />
                </div>
              </div>
              
              <div className="space-y-4">
                {filteredExperts.map((expert) => (
                  <Card key={expert.id} className="overflow-hidden">
                    <CardContent className="p-0">
                      <div className="flex items-center border-l-4 hover:bg-slate-50 transition-colors" 
                        style={{
                          borderColor: 
                            expert.status === 'available' ? '#22c55e' : 
                            expert.status === 'busy' ? '#f59e0b' : '#ef4444'
                        }}
                      >
                        <div className="p-4 flex-1">
                          <div className="flex flex-col md:flex-row md:items-center md:justify-between">
                            <div>
                              <h3 className="font-semibold">{expert.name}</h3>
                              <div className="flex items-center text-sm text-muted-foreground mt-1">
                                <Users className="h-4 w-4 mr-1" />
                                <span>{expert.title}</span>
                                <span className="mx-2">·</span>
                                <Building className="h-4 w-4 mr-1" />
                                <span>{expert.organization}</span>
                              </div>
                            </div>
                            
                            <div className="mt-2 md:mt-0 flex items-center">
                              <div className="flex items-center">
                                <span className="text-amber-500 font-semibold mr-1">★</span>
                                <span>{expert.rating}</span>
                                <span className="text-xs text-muted-foreground ml-1">({expert.evaluationCount}次评价)</span>
                              </div>
                              
                              <Badge 
                                variant="outline"
                                className={
                                  expert.status === 'available' ? 'bg-green-50 text-green-700 border-green-200 ml-4' :
                                  expert.status === 'busy' ? 'bg-amber-50 text-amber-700 border-amber-200 ml-4' :
                                  'bg-red-50 text-red-700 border-red-200 ml-4'
                                }
                              >
                                {expert.status === 'available' ? '可邀约' : 
                                 expert.status === 'busy' ? '评审中' : '暂不可用'}
                              </Badge>
                            </div>
                          </div>
                          
                          <div className="mt-3">
                            <div className="flex flex-wrap gap-2">
                              {expert.specialization.map((spec, index) => (
                                <Badge key={index} variant="outline" className="bg-blue-50">
                                  {spec}
                                </Badge>
                              ))}
                            </div>
                          </div>
                          
                          <div className="mt-3 flex justify-between items-center">
                            <div className="flex items-center text-sm">
                              <Calendar className="h-4 w-4 mr-1 text-muted-foreground" />
                              <span className="text-muted-foreground">可参与评审日期: {expert.availableDate}</span>
                            </div>
                            
                            <Button variant="ghost" size="sm">
                              查看详情
                              <ChevronRight className="ml-2 h-4 w-4" />
                            </Button>
                          </div>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </CardContent>
            <CardFooter className="flex justify-between border-t px-6 py-4">
              <div className="text-sm text-muted-foreground">
                共 {experts.length} 位专家
              </div>
              <div className="flex items-center space-x-2">
                <Button variant="outline" size="sm">上一页</Button>
                <Button variant="outline" size="sm">下一页</Button>
              </div>
            </CardFooter>
          </Card>
        </TabsContent>
        
        <TabsContent value="evaluation" className="pt-6">
          <Card>
            <CardHeader>
              <CardTitle>评审会管理</CardTitle>
              <CardDescription>创建与管理评审会，智能分配专家</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="p-16 flex flex-col items-center justify-center text-center text-muted-foreground">
                <FileText className="h-16 w-16 mb-4 opacity-30" />
                <h3 className="text-lg font-medium mb-2">暂无进行中的评审会</h3>
                <p className="max-w-md mb-6">
                  创建一个新的评审会议，系统将根据项目需求智能推荐并抽选合适的专家。
                </p>
                <Button>
                  <PlusCircle className="mr-2 h-4 w-4" />
                  创建评审会
                </Button>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
        
        <TabsContent value="analytics" className="pt-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <Card>
              <CardHeader>
                <CardTitle>专家评价维度分析</CardTitle>
                <CardDescription>各评价维度平均得分</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="h-[300px]">
                  <ResponsiveContainer width="100%" height="100%">
                    <BarChart
                      data={evaluationData}
                      layout="vertical"
                      margin={{ top: 5, right: 30, left: 100, bottom: 5 }}
                    >
                      <CartesianGrid strokeDasharray="3 3" horizontal={false} opacity={0.1} />
                      <XAxis type="number" domain={[0, 100]} />
                      <YAxis dataKey="category" type="category" width={100} />
                      <Tooltip formatter={(value) => [`${value}分`, '得分']} />
                      <Legend />
                      <Bar dataKey="score" name="平均得分" fill="#8884d8" />
                    </BarChart>
                  </ResponsiveContainer>
                </div>
              </CardContent>
            </Card>
            
            <Card>
              <CardHeader>
                <CardTitle>评价分数分布</CardTitle>
                <CardDescription>专家评价得分分布</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="h-[300px]">
                  <ResponsiveContainer width="100%" height="100%">
                    <BarChart
                      data={distributionData}
                      margin={{ top: 5, right: 30, left: 20, bottom: 5 }}
                    >
                      <CartesianGrid strokeDasharray="3 3" opacity={0.1} />
                      <XAxis dataKey="name" />
                      <YAxis />
                      <Tooltip formatter={(value) => [`${value}次`, '评价次数']} />
                      <Legend />
                      <Bar dataKey="count" name="评价次数" fill="#82ca9d" />
                    </BarChart>
                  </ResponsiveContainer>
                </div>
              </CardContent>
            </Card>
            
            <Card className="md:col-span-2">
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <div>
                  <CardTitle>专家评审报告</CardTitle>
                  <CardDescription>历史评审数据分析</CardDescription>
                </div>
                <Button variant="outline" size="sm">
                  <Download className="mr-2 h-4 w-4" />
                  导出报告
                </Button>
              </CardHeader>
              <CardContent>
                <div className="p-16 flex flex-col items-center justify-center text-center text-muted-foreground">
                  <BarChart2 className="h-16 w-16 mb-4 opacity-30" />
                  <h3 className="text-lg font-medium mb-2">报告生成中</h3>
                  <p className="max-w-md mb-6">
                    系统正在分析历史评审数据，生成详细的专家评审报告。请稍候...
                  </p>
                  <Progress value={65} className="w-64 h-2" />
                </div>
              </CardContent>
            </Card>
          </div>
        </TabsContent>
      </Tabs>
    </div>
  );
};

export default ExpertManager;
