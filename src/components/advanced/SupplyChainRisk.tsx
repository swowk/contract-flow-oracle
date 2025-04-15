
import { useState } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import { ShieldAlert, AlertTriangle, Search, Bell, BarChart } from "lucide-react";
import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';

const riskData = [
  { name: '1月', 司法风险: 15, 税务风险: 20, 经营风险: 25 },
  { name: '2月', 司法风险: 20, 税务风险: 15, 经营风险: 22 },
  { name: '3月', 司法风险: 18, 税务风险: 25, 经营风险: 20 },
  { name: '4月', 司法风险: 25, 税务风险: 18, 经营风险: 15 },
  { name: '5月', 司法风险: 22, 税务风险: 20, 经营风险: 18 },
  { name: '6月', 司法风险: 30, 税务风险: 15, 经营风险: 20 }
];

const SupplyChainRisk = () => {
  const [activeTab, setActiveTab] = useState("monitor");
  
  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <div>
          <h2 className="text-3xl font-bold">供应链风险预警</h2>
          <p className="text-muted-foreground mt-1">监控供应商经营异常与舆情应急</p>
        </div>
        <Button variant="outline">
          <Bell className="mr-2 h-4 w-4" />
          风险推送设置
        </Button>
      </div>
      
      <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
        <TabsList className="grid w-full grid-cols-2">
          <TabsTrigger value="monitor">经营异常监控</TabsTrigger>
          <TabsTrigger value="emergency">舆情应急响应</TabsTrigger>
        </TabsList>
        
        <TabsContent value="monitor" className="pt-6">
          <Card className="mb-6">
            <CardHeader className="pb-2">
              <CardTitle className="flex items-center">
                <BarChart className="mr-2 h-5 w-5" />
                供应商风险趋势
              </CardTitle>
              <CardDescription>近6个月供应商风险监测数据</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="h-[300px]">
                <ResponsiveContainer width="100%" height="100%">
                  <AreaChart data={riskData}>
                    <defs>
                      <linearGradient id="司法风险" x1="0" y1="0" x2="0" y2="1">
                        <stop offset="5%" stopColor="#8884d8" stopOpacity={0.8}/>
                        <stop offset="95%" stopColor="#8884d8" stopOpacity={0}/>
                      </linearGradient>
                      <linearGradient id="税务风险" x1="0" y1="0" x2="0" y2="1">
                        <stop offset="5%" stopColor="#82ca9d" stopOpacity={0.8}/>
                        <stop offset="95%" stopColor="#82ca9d" stopOpacity={0}/>
                      </linearGradient>
                      <linearGradient id="经营风险" x1="0" y1="0" x2="0" y2="1">
                        <stop offset="5%" stopColor="#ffc658" stopOpacity={0.8}/>
                        <stop offset="95%" stopColor="#ffc658" stopOpacity={0}/>
                      </linearGradient>
                    </defs>
                    <XAxis dataKey="name" />
                    <YAxis />
                    <CartesianGrid strokeDasharray="3 3" />
                    <Tooltip />
                    <Area type="monotone" dataKey="司法风险" stroke="#8884d8" fillOpacity={1} fill="url(#司法风险)" />
                    <Area type="monotone" dataKey="税务风险" stroke="#82ca9d" fillOpacity={1} fill="url(#税务风险)" />
                    <Area type="monotone" dataKey="经营风险" stroke="#ffc658" fillOpacity={1} fill="url(#经营风险)" />
                  </AreaChart>
                </ResponsiveContainer>
              </div>
            </CardContent>
          </Card>
          
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center">
                <ShieldAlert className="mr-2 h-5 w-5" />
                供应商经营风险监控
              </CardTitle>
              <CardDescription>实时监控供应商司法/税务/用工数据</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="flex flex-col space-y-6">
                <div className="flex w-full items-center space-x-2">
                  <Input placeholder="输入供应商名称查询..." />
                  <Button type="submit">
                    <Search className="mr-2 h-4 w-4" />
                    查询
                  </Button>
                </div>
                
                <div className="space-y-4">
                  <Alert variant="destructive">
                    <AlertTriangle className="h-4 w-4" />
                    <AlertTitle>高风险预警：某科技有限公司</AlertTitle>
                    <AlertDescription>
                      近期新增3起合同履约纠纷案件，可能影响供货能力
                    </AlertDescription>
                  </Alert>
                  
                  <Alert variant="warning">
                    <AlertTriangle className="h-4 w-4" />
                    <AlertTitle>中风险预警：某电子设备公司</AlertTitle>
                    <AlertDescription>
                      检测到税务异常，近期有未缴税款记录
                    </AlertDescription>
                  </Alert>
                  
                  <Alert variant="warning">
                    <AlertTriangle className="h-4 w-4" />
                    <AlertTitle>中风险预警：某系统集成公司</AlertTitle>
                    <AlertDescription>
                      近6个月用工人数下降35%，可能存在人员流失风险
                    </AlertDescription>
                  </Alert>
                </div>
                
                <div className="border-t pt-4 mt-2">
                  <h3 className="font-medium mb-4">供应商详细风险报告</h3>
                  
                  <div className="border rounded-md p-4">
                    <h4 className="font-medium mb-3">某科技有限公司</h4>
                    
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                      <div className="border rounded-md p-3">
                        <div className="text-sm font-medium mb-2">司法风险</div>
                        <div className="space-y-1 text-sm">
                          <p>• 近期新增诉讼：3起</p>
                          <p>• 被执行总金额：58万元</p>
                          <p>• 风险等级：<span className="text-red-600">高</span></p>
                        </div>
                      </div>
                      
                      <div className="border rounded-md p-3">
                        <div className="text-sm font-medium mb-2">税务风险</div>
                        <div className="space-y-1 text-sm">
                          <p>• 税务评级：B级</p>
                          <p>• 欠税情况：无</p>
                          <p>• 风险等级：<span className="text-green-600">低</span></p>
                        </div>
                      </div>
                      
                      <div className="border rounded-md p-3">
                        <div className="text-sm font-medium mb-2">经营风险</div>
                        <div className="space-y-1 text-sm">
                          <p>• 经营状态：正常</p>
                          <p>• 人员变动：-5%</p>
                          <p>• 风险等级：<span className="text-amber-600">中</span></p>
                        </div>
                      </div>
                    </div>
                    
                    <div className="mt-4 flex justify-end">
                      <Button size="sm">查看完整报告</Button>
                    </div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
        
        <TabsContent value="emergency" className="pt-6">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center">
                <Bell className="mr-2 h-5 w-5" />
                突发舆情应急响应
              </CardTitle>
              <CardDescription>监控重大事故对供货能力的影响评估</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="flex flex-col space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                  <Card className="bg-red-50">
                    <CardHeader className="pb-2">
                      <CardTitle className="text-base flex items-center">
                        <AlertTriangle className="mr-2 h-5 w-5 text-red-500" />
                        高危舆情事件
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="font-medium">某电子厂区发生火灾事故</p>
                      <p className="text-sm text-muted-foreground mt-1">事件时间：2023-06-15</p>
                      <div className="mt-3">
                        <Button size="sm" variant="outline" className="w-full">查看详情</Button>
                      </div>
                    </CardContent>
                  </Card>
                  
                  <Card className="bg-amber-50">
                    <CardHeader className="pb-2">
                      <CardTitle className="text-base flex items-center">
                        <AlertTriangle className="mr-2 h-5 w-5 text-amber-500" />
                        中度舆情事件
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="font-medium">某科技公司高管层变动</p>
                      <p className="text-sm text-muted-foreground mt-1">事件时间：2023-05-28</p>
                      <div className="mt-3">
                        <Button size="sm" variant="outline" className="w-full">查看详情</Button>
                      </div>
                    </CardContent>
                  </Card>
                  
                  <Card className="bg-blue-50">
                    <CardHeader className="pb-2">
                      <CardTitle className="text-base flex items-center">
                        <Bell className="mr-2 h-5 w-5 text-blue-500" />
                        低度舆情事件
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="font-medium">某供应商被曝产品质量问题</p>
                      <p className="text-sm text-muted-foreground mt-1">事件时间：2023-05-10</p>
                      <div className="mt-3">
                        <Button size="sm" variant="outline" className="w-full">查看详情</Button>
                      </div>
                    </CardContent>
                  </Card>
                </div>
                
                <div className="border-t pt-6">
                  <h3 className="font-medium mb-4">某电子厂区火灾事故分析</h3>
                  
                  <div className="space-y-4">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div className="border rounded-md p-4">
                        <h4 className="text-sm font-medium mb-2">事件描述</h4>
                        <p className="text-sm">
                          2023年6月15日，某电子厂区发生火灾事故，主要生产区受损，预计停产1-2个月进行修复。该供应商是我司核心电子元件供应方之一。
                        </p>
                      </div>
                      
                      <div className="border rounded-md p-4">
                        <h4 className="text-sm font-medium mb-2">影响评估</h4>
                        <div className="space-y-1 text-sm">
                          <p>• 供货能力影响：<span className="text-red-600">严重</span></p>
                          <p>• 影响时长：预计1-2个月</p>
                          <p>• 涉及产品：高端电子元件A系列</p>
                          <p>• 涉及项目：3个在建项目</p>
                        </div>
                      </div>
                    </div>
                    
                    <Alert>
                      <AlertTitle>应急方案建议</AlertTitle>
                      <AlertDescription>
                        <ol className="space-y-1 pl-5 list-decimal">
                          <li>立即联系备选供应商B和C，评估供货能力</li>
                          <li>调整3个在建项目的时间计划，推迟相关节点</li>
                          <li>评估使用替代型号产品的可行性</li>
                          <li>持续跟进事故厂商的恢复进度</li>
                        </ol>
                      </AlertDescription>
                    </Alert>
                    
                    <div className="flex justify-end">
                      <Button variant="outline" className="mr-2">导出报告</Button>
                      <Button>启动应急预案</Button>
                    </div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  );
};

export default SupplyChainRisk;
