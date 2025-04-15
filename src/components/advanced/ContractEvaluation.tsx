
import { useState } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";
import { ScrollText, Upload, Calendar, Clock, CheckCircle, AlertTriangle, XCircle } from "lucide-react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

const ContractEvaluation = () => {
  const [activeTab, setActiveTab] = useState("analysis");
  
  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <div>
          <h2 className="text-3xl font-bold">智能履约评价</h2>
          <p className="text-muted-foreground mt-1">自动解析合同关键节点生成履约跟踪情况</p>
        </div>
      </div>
      
      <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
        <TabsList className="grid w-full grid-cols-2">
          <TabsTrigger value="analysis">合同解析</TabsTrigger>
          <TabsTrigger value="tracking">履约跟踪</TabsTrigger>
        </TabsList>
        
        <TabsContent value="analysis" className="pt-6">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center">
                <ScrollText className="mr-2 h-5 w-5" />
                合同关键节点解析
              </CardTitle>
              <CardDescription>上传合同文件，自动提取关键履约节点</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="flex flex-col space-y-4">
                <div className="border rounded-md p-8 flex flex-col items-center justify-center">
                  <Upload className="h-10 w-10 text-muted-foreground mb-2" />
                  <p className="text-sm text-muted-foreground">上传合同文件进行解析</p>
                  <p className="text-xs text-muted-foreground">支持DOC、DOCX、PDF格式</p>
                </div>
                
                <Button>开始解析</Button>
                
                <div className="border-t pt-4 mt-4">
                  <h3 className="font-medium mb-4">解析结果</h3>
                  
                  <div className="space-y-6">
                    <div>
                      <h4 className="text-sm font-medium mb-2">基本信息</h4>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div className="border rounded-md p-3">
                          <div className="text-xs text-muted-foreground mb-1">合同名称</div>
                          <div className="font-medium">某智慧园区设备采购合同</div>
                        </div>
                        
                        <div className="border rounded-md p-3">
                          <div className="text-xs text-muted-foreground mb-1">合同编号</div>
                          <div className="font-medium">HT-2023-0258</div>
                        </div>
                        
                        <div className="border rounded-md p-3">
                          <div className="text-xs text-muted-foreground mb-1">签订日期</div>
                          <div className="font-medium">2023-03-15</div>
                        </div>
                        
                        <div className="border rounded-md p-3">
                          <div className="text-xs text-muted-foreground mb-1">合同金额</div>
                          <div className="font-medium">￥2,580,000.00</div>
                        </div>
                      </div>
                    </div>
                    
                    <div>
                      <h4 className="text-sm font-medium mb-2">关键履约节点</h4>
                      <div className="space-y-3">
                        <div className="border rounded-md p-3">
                          <div className="flex items-center mb-1">
                            <Calendar className="h-4 w-4 mr-2 text-blue-500" />
                            <div className="font-medium">设备交付期限</div>
                          </div>
                          <div className="ml-6">
                            <div className="text-sm">合同签订后30日内完成首批设备交付</div>
                            <div className="text-xs text-muted-foreground mt-1">截止日期：2023-04-14</div>
                          </div>
                        </div>
                        
                        <div className="border rounded-md p-3">
                          <div className="flex items-center mb-1">
                            <Calendar className="h-4 w-4 mr-2 text-blue-500" />
                            <div className="font-medium">安装调试完成期限</div>
                          </div>
                          <div className="ml-6">
                            <div className="text-sm">设备交付后15个工作日内完成安装调试</div>
                            <div className="text-xs text-muted-foreground mt-1">截止日期：2023-05-05</div>
                          </div>
                        </div>
                        
                        <div className="border rounded-md p-3">
                          <div className="flex items-center mb-1">
                            <Calendar className="h-4 w-4 mr-2 text-blue-500" />
                            <div className="font-medium">验收期限</div>
                          </div>
                          <div className="ml-6">
                            <div className="text-sm">安装调试完成后10个工作日内完成验收</div>
                            <div className="text-xs text-muted-foreground mt-1">截止日期：2023-05-19</div>
                          </div>
                        </div>
                        
                        <div className="border rounded-md p-3">
                          <div className="flex items-center mb-1">
                            <Calendar className="h-4 w-4 mr-2 text-blue-500" />
                            <div className="font-medium">付款节点</div>
                          </div>
                          <div className="ml-6">
                            <div className="text-sm space-y-1">
                              <p>• 预付款：合同签订后7日内支付30%</p>
                              <p>• 到货款：设备到货验收后支付40%</p>
                              <p>• 终验款：系统终验合格后支付25%</p>
                              <p>• 质保金：验收后1年支付5%</p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
        
        <TabsContent value="tracking" className="pt-6">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center">
                <Clock className="mr-2 h-5 w-5" />
                履约跟踪状态
              </CardTitle>
              <CardDescription>监控合同履约进度与风险</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="flex flex-col space-y-6">
                <div>
                  <div className="flex justify-between mb-1">
                    <h3 className="font-medium">总体履约进度</h3>
                    <span className="font-medium">65%</span>
                  </div>
                  <Progress value={65} className="h-2" />
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-4">
                    <h4 className="text-sm font-medium">履约节点状态</h4>
                    
                    <div className="border rounded-md p-3 bg-green-50 border-green-200">
                      <div className="flex items-center">
                        <CheckCircle className="h-5 w-5 text-green-500 mr-2" />
                        <div>
                          <div className="font-medium">设备交付</div>
                          <div className="text-xs text-muted-foreground">已完成 (2023-04-12)</div>
                        </div>
                      </div>
                      <div className="ml-7 mt-1 text-sm">
                        <p>首批设备已按期交付，提前2天完成</p>
                      </div>
                    </div>
                    
                    <div className="border rounded-md p-3 bg-green-50 border-green-200">
                      <div className="flex items-center">
                        <CheckCircle className="h-5 w-5 text-green-500 mr-2" />
                        <div>
                          <div className="font-medium">安装调试</div>
                          <div className="text-xs text-muted-foreground">已完成 (2023-05-03)</div>
                        </div>
                      </div>
                      <div className="ml-7 mt-1 text-sm">
                        <p>设备安装调试已完成，提前2天完成</p>
                      </div>
                    </div>
                    
                    <div className="border rounded-md p-3 bg-amber-50 border-amber-200">
                      <div className="flex items-center">
                        <AlertTriangle className="h-5 w-5 text-amber-500 mr-2" />
                        <div>
                          <div className="font-medium">验收</div>
                          <div className="text-xs text-muted-foreground">进行中 (预计 2023-05-25)</div>
                        </div>
                      </div>
                      <div className="ml-7 mt-1 text-sm">
                        <p>验收过程中发现部分功能问题，预计延期6天完成</p>
                      </div>
                    </div>
                    
                    <div className="border rounded-md p-3">
                      <div className="flex items-center">
                        <Clock className="h-5 w-5 text-gray-400 mr-2" />
                        <div>
                          <div className="font-medium">终验</div>
                          <div className="text-xs text-muted-foreground">未开始 (计划 2023-06-15)</div>
                        </div>
                      </div>
                    </div>
                  </div>
                  
                  <div className="space-y-4">
                    <h4 className="text-sm font-medium">付款节点状态</h4>
                    
                    <div className="border rounded-md p-3 bg-green-50 border-green-200">
                      <div className="flex items-center">
                        <CheckCircle className="h-5 w-5 text-green-500 mr-2" />
                        <div>
                          <div className="font-medium">预付款 (30%)</div>
                          <div className="text-xs text-muted-foreground">已支付 (2023-03-22)</div>
                        </div>
                      </div>
                      <div className="ml-7 mt-1 text-sm">
                        <p>金额: ￥774,000.00</p>
                      </div>
                    </div>
                    
                    <div className="border rounded-md p-3 bg-green-50 border-green-200">
                      <div className="flex items-center">
                        <CheckCircle className="h-5 w-5 text-green-500 mr-2" />
                        <div>
                          <div className="font-medium">到货款 (40%)</div>
                          <div className="text-xs text-muted-foreground">已支付 (2023-04-25)</div>
                        </div>
                      </div>
                      <div className="ml-7 mt-1 text-sm">
                        <p>金额: ￥1,032,000.00</p>
                      </div>
                    </div>
                    
                    <div className="border rounded-md p-3">
                      <div className="flex items-center">
                        <Clock className="h-5 w-5 text-gray-400 mr-2" />
                        <div>
                          <div className="font-medium">终验款 (25%)</div>
                          <div className="text-xs text-muted-foreground">未支付 (预计 2023-06-25)</div>
                        </div>
                      </div>
                      <div className="ml-7 mt-1 text-sm">
                        <p>金额: ￥645,000.00</p>
                      </div>
                    </div>
                    
                    <div className="border rounded-md p-3">
                      <div className="flex items-center">
                        <Clock className="h-5 w-5 text-gray-400 mr-2" />
                        <div>
                          <div className="font-medium">质保金 (5%)</div>
                          <div className="text-xs text-muted-foreground">未支付 (预计 2024-05-19)</div>
                        </div>
                      </div>
                      <div className="ml-7 mt-1 text-sm">
                        <p>金额: ￥129,000.00</p>
                      </div>
                    </div>
                  </div>
                </div>
                
                <div className="border-t pt-4 mt-2">
                  <h4 className="font-medium mb-3">履约风险提示</h4>
                  
                  <div className="space-y-3">
                    <div className="flex items-start border rounded-md p-3 bg-amber-50 border-amber-200">
                      <AlertTriangle className="h-5 w-5 text-amber-500 mr-2 mt-0.5" />
                      <div>
                        <div className="font-medium">验收延期风险</div>
                        <div className="text-sm mt-1">
                          当前验收阶段发现部分功能问题，可能导致验收延期，建议提前协调相关技术人员解决问题。
                        </div>
                      </div>
                    </div>
                    
                    <div className="flex items-start border rounded-md p-3">
                      <Clock className="h-5 w-5 text-gray-400 mr-2 mt-0.5" />
                      <div>
                        <div className="font-medium">付款节点提醒</div>
                        <div className="text-sm mt-1">
                          验收完成后需在10个工作日内安排终验款支付，请提前做好资金准备。
                        </div>
                      </div>
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

export default ContractEvaluation;
