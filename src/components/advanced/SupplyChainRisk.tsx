
import { useState } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import { AlertTriangle, ArrowUpDown, BarChart3, Building, ChevronDown, FileText, Search, TrendingDown } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Progress } from "@/components/ui/progress";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

const SupplyChainRisk = () => {
  const [activeTab, setActiveTab] = useState("realtime");

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <div>
          <h2 className="text-3xl font-bold">供应链风险预警</h2>
          <p className="text-muted-foreground mt-1">实时监控供应商经营异常，预警潜在风险</p>
        </div>
      </div>
      
      <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
        <TabsList className="grid w-full max-w-md grid-cols-2">
          <TabsTrigger value="realtime">实时监控</TabsTrigger>
          <TabsTrigger value="emergency">舆情应急</TabsTrigger>
        </TabsList>
        
        <TabsContent value="realtime" className="pt-6">
          <Card>
            <CardHeader>
              <CardTitle>实时风险监控</CardTitle>
              <CardDescription>监控供应商经营异常情况，及时发现风险</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="flex justify-between items-center mb-6">
                <div className="flex space-x-2">
                  <Badge variant="outline" className="bg-red-50 text-red-700 border-red-200 px-2.5 py-0.5">
                    高风险: 8
                  </Badge>
                  <Badge variant="outline" className="bg-amber-50 text-amber-700 border-amber-200 px-2.5 py-0.5">
                    中风险: 12
                  </Badge>
                  <Badge variant="outline" className="bg-green-50 text-green-700 border-green-200 px-2.5 py-0.5">
                    低风险: 45
                  </Badge>
                </div>
                
                <div className="relative">
                  <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
                  <Input
                    placeholder="搜索供应商..."
                    className="pl-8 w-[250px]"
                  />
                </div>
              </div>
              
              <Alert variant="destructive" className="mb-4">
                <AlertTriangle className="h-4 w-4" />
                <AlertTitle>紧急预警</AlertTitle>
                <AlertDescription>
                  北方数据系统有限公司出现信息安全资质过期风险，请立即处理
                </AlertDescription>
              </Alert>
              
              <div className="space-y-4">
                <Card className="border-red-300">
                  <CardContent className="p-4">
                    <div className="flex justify-between items-start">
                      <div>
                        <h3 className="font-medium">恒方电子技术有限公司</h3>
                        <p className="text-sm text-muted-foreground mt-1">电子设备制造商</p>
                      </div>
                      <Badge variant="outline" className="bg-red-50 text-red-700 border-red-200">高风险</Badge>
                    </div>
                    
                    <div className="mt-4">
                      <div className="flex justify-between text-sm mb-1">
                        <span>风险指数</span>
                        <span className="font-medium">85%</span>
                      </div>
                      <Progress value={85} className="h-2" />
                    </div>
                    
                    <div className="mt-4 space-y-2">
                      <Alert>
                        <FileText className="h-4 w-4" />
                        <AlertTitle>司法风险</AlertTitle>
                        <AlertDescription>
                          近期涉及3起知识产权纠纷诉讼，可能影响供货能力
                        </AlertDescription>
                      </Alert>
                      
                      <Alert>
                        <TrendingDown className="h-4 w-4" />
                        <AlertTitle>财务风险</AlertTitle>
                        <AlertDescription>
                          企业账户出现异常大额资金转出，流动性风险上升
                        </AlertDescription>
                      </Alert>
                    </div>
                    
                    <div className="flex justify-end mt-4">
                      <Button variant="outline" className="mr-2">查看详情</Button>
                      <Button variant="destructive">风险处置</Button>
                    </div>
                  </CardContent>
                </Card>
                
                <Card>
                  <CardContent className="p-4">
                    <div className="flex justify-between items-start">
                      <div>
                        <h3 className="font-medium">中科信息技术有限公司</h3>
                        <p className="text-sm text-muted-foreground mt-1">软件开发服务商</p>
                      </div>
                      <Badge variant="outline" className="bg-amber-50 text-amber-700 border-amber-200">中风险</Badge>
                    </div>
                    
                    <div className="mt-4">
                      <div className="flex justify-between text-sm mb-1">
                        <span>风险指数</span>
                        <span className="font-medium">45%</span>
                      </div>
                      <Progress value={45} className="h-2" />
                    </div>
                    
                    <div className="mt-4 space-y-2">
                      <Alert>
                        <Building className="h-4 w-4" />
                        <AlertTitle>经营风险</AlertTitle>
                        <AlertDescription>
                          公司核心技术人员离职率超过15%，技术交付能力可能受影响
                        </AlertDescription>
                      </Alert>
                    </div>
                    
                    <div className="flex justify-end mt-4">
                      <Button variant="outline" className="mr-2">查看详情</Button>
                      <Button variant="default">风险处置</Button>
                    </div>
                  </CardContent>
                </Card>
                
                <div className="flex justify-center mt-2">
                  <Button variant="outline">查看更多</Button>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
        
        <TabsContent value="emergency" className="pt-6">
          <Card>
            <CardHeader>
              <CardTitle>舆情应急响应</CardTitle>
              <CardDescription>监控突发舆情事件，评估对供应链的影响</CardDescription>
            </CardHeader>
            <CardContent>
              <Alert variant="destructive" className="mb-6">
                <AlertTriangle className="h-4 w-4" />
                <AlertTitle>重大舆情预警</AlertTitle>
                <AlertDescription>
                  检测到3起与核心供应商相关的负面舆情事件，可能影响供应链稳定
                </AlertDescription>
              </Alert>
              
              <div className="space-y-4">
                <Card className="border-red-300">
                  <CardContent className="p-4">
                    <div className="flex justify-between items-start">
                      <div>
                        <h3 className="font-medium">世纪通讯设备有限公司</h3>
                        <p className="text-sm text-muted-foreground mt-1">发生时间: 2024-03-15</p>
                      </div>
                      <Badge variant="destructive">高影响</Badge>
                    </div>
                    
                    <div className="mt-4 p-3 bg-slate-50 rounded-md">
                      <h4 className="font-medium mb-1">舆情事件</h4>
                      <p className="text-sm">
                        公司主要生产基地发生火灾事故，可能导致连续性供货中断。
                        事故原因仍在调查中，预计恢复生产需要3-6个月时间。
                      </p>
                    </div>
                    
                    <div className="mt-4">
                      <h4 className="font-medium mb-2">影响评估</h4>
                      <div className="space-y-2">
                        <div>
                          <div className="flex justify-between text-sm mb-1">
                            <span>供货能力影响</span>
                            <span className="font-medium">严重</span>
                          </div>
                          <Progress value={85} className="h-2" />
                        </div>
                        
                        <div>
                          <div className="flex justify-between text-sm mb-1">
                            <span>替代方案可行性</span>
                            <span className="font-medium">中等</span>
                          </div>
                          <Progress value={55} className="h-2" />
                        </div>
                        
                        <div>
                          <div className="flex justify-between text-sm mb-1">
                            <span>财务风险</span>
                            <span className="font-medium">高</span>
                          </div>
                          <Progress value={75} className="h-2" />
                        </div>
                      </div>
                    </div>
                    
                    <div className="mt-6 p-3 bg-blue-50 rounded-md">
                      <h4 className="font-medium mb-1">应急建议</h4>
                      <ul className="text-sm space-y-1 pl-5 list-disc">
                        <li>立即联系备选供应商启动应急供货方案</li>
                        <li>评估库存水平，制定短期应对策略</li>
                        <li>与受影响的客户沟通可能的交付延迟</li>
                        <li>持续跟踪事故调查进展和恢复计划</li>
                      </ul>
                    </div>
                    
                    <div className="flex justify-end mt-4">
                      <Button variant="outline" className="mr-2">查看详细报告</Button>
                      <Button variant="destructive">启动应急预案</Button>
                    </div>
                  </CardContent>
                </Card>
                
                <Card>
                  <CardContent className="p-4">
                    <div className="flex justify-between items-start">
                      <div>
                        <h3 className="font-medium">京润通信技术有限公司</h3>
                        <p className="text-sm text-muted-foreground mt-1">发生时间: 2024-03-10</p>
                      </div>
                      <Badge>中影响</Badge>
                    </div>
                    
                    <div className="mt-4 p-3 bg-slate-50 rounded-md">
                      <h4 className="font-medium mb-1">舆情事件</h4>
                      <p className="text-sm">
                        公司因财务违规被监管部门调查，可能面临罚款和业务限制。
                        尚未影响正常业务运营，但存在不确定性风险。
                      </p>
                    </div>
                    
                    <div className="flex justify-end mt-4">
                      <Button variant="outline">查看详细报告</Button>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  );
};

export default SupplyChainRisk;
