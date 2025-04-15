
import { useState } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { BarChart, LineChart, TrendingUp, Clock } from "lucide-react";
import { BarChart as ReBarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer, LineChart as ReLineChart, Line } from 'recharts';
import { Slider } from "@/components/ui/slider";

const costData = [
  { name: 'IT设备', 集中采购: 85, 分散采购: 100 },
  { name: '办公用品', 集中采购: 75, 分散采购: 95 },
  { name: '专业服务', 集中采购: 90, 分散采购: 105 },
  { name: '原材料', 集中采购: 80, 分散采购: 100 },
  { name: '物流', 集中采购: 70, 分散采购: 90 }
];

const priceData = [
  { name: '1月', 钢材价格: 155, 铜价: 182, 铝价: 136 },
  { name: '2月', 钢材价格: 160, 铜价: 175, 铝价: 130 },
  { name: '3月', 钢材价格: 165, 铜价: 168, 铝价: 138 },
  { name: '4月', 钢材价格: 172, 铜价: 160, 铝价: 145 },
  { name: '5月', 钢材价格: 178, 铜价: 155, 铝价: 148 },
  { name: '6月', 钢材价格: 185, 铜价: 162, 铝价: 135 },
  { name: '7月', 钢材价格: 180, 铜价: 170, 铝价: 140 },
  { name: '8月', 钢材价格: 175, 铜价: 175, 铝价: 145 },
  { name: '9月', 钢材价格: 170, 铜价: 180, 铝价: 150 },
  { name: '10月', 钢材价格: 168, 铜价: 185, 铝价: 155 },
  { name: '11月', 钢材价格: 165, 铜价: 190, 铝价: 158 },
  { name: '12月', 钢材价格: 160, 铜价: 195, 铝价: 160 }
];

const ProcurementStrategy = () => {
  const [activeTab, setActiveTab] = useState("costSimulation");
  const [volumeDiscount, setVolumeDiscount] = useState([15]);
  const [adminCost, setAdminCost] = useState([8]);
  const [logisticsCost, setLogisticsCost] = useState([12]);
  
  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <div>
          <h2 className="text-3xl font-bold">采购策略沙盘推演</h2>
          <p className="text-muted-foreground mt-1">模拟不同采购策略的成本效益</p>
        </div>
      </div>
      
      <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
        <TabsList className="grid w-full grid-cols-2">
          <TabsTrigger value="costSimulation">集中vs分散采购</TabsTrigger>
          <TabsTrigger value="priceLock">长协价格锁定</TabsTrigger>
        </TabsList>
        
        <TabsContent value="costSimulation" className="pt-6">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            <Card className="lg:col-span-2">
              <CardHeader className="pb-2">
                <CardTitle className="flex items-center">
                  <BarChart className="mr-2 h-5 w-5" />
                  采购成本对比
                </CardTitle>
                <CardDescription>集中采购vs分散采购成本模拟</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="h-[350px]">
                  <ResponsiveContainer width="100%" height="100%">
                    <ReBarChart data={costData}>
                      <CartesianGrid strokeDasharray="3 3" opacity={0.1} />
                      <XAxis dataKey="name" />
                      <YAxis />
                      <Tooltip />
                      <Legend />
                      <Bar dataKey="集中采购" fill="#1890ff" />
                      <Bar dataKey="分散采购" fill="#FF8042" />
                    </ReBarChart>
                  </ResponsiveContainer>
                </div>
                <div className="text-xs text-center mt-2 text-muted-foreground">
                  *基准值100表示标准市场价格
                </div>
              </CardContent>
            </Card>
            
            <Card>
              <CardHeader>
                <CardTitle>采购策略模拟参数</CardTitle>
                <CardDescription>调整参数查看不同策略效果</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-6">
                  <div className="space-y-2">
                    <div className="flex justify-between">
                      <label className="text-sm font-medium">批量折扣率</label>
                      <span className="text-sm">{volumeDiscount}%</span>
                    </div>
                    <Slider
                      value={volumeDiscount}
                      onValueChange={setVolumeDiscount}
                      max={30}
                      step={1}
                    />
                    <p className="text-xs text-muted-foreground">
                      批量采购可获得的平均价格折扣
                    </p>
                  </div>
                  
                  <div className="space-y-2">
                    <div className="flex justify-between">
                      <label className="text-sm font-medium">管理成本</label>
                      <span className="text-sm">{adminCost}%</span>
                    </div>
                    <Slider
                      value={adminCost}
                      onValueChange={setAdminCost}
                      max={20}
                      step={1}
                    />
                    <p className="text-xs text-muted-foreground">
                      采购管理所需的人力和系统成本占比
                    </p>
                  </div>
                  
                  <div className="space-y-2">
                    <div className="flex justify-between">
                      <label className="text-sm font-medium">物流成本</label>
                      <span className="text-sm">{logisticsCost}%</span>
                    </div>
                    <Slider
                      value={logisticsCost}
                      onValueChange={setLogisticsCost}
                      max={25}
                      step={1}
                    />
                    <p className="text-xs text-muted-foreground">
                      运输、仓储等物流环节成本占比
                    </p>
                  </div>
                  
                  <Button className="w-full">重新计算</Button>
                  
                  <div className="border-t pt-4">
                    <h4 className="font-medium mb-2">分析结果</h4>
                    <p className="text-sm">
                      根据当前参数，集中采购可节约总成本约<span className="font-medium text-green-600">18%</span>，
                      主要节约来自批量折扣和物流成本优化。
                    </p>
                    <Button variant="outline" size="sm" className="mt-2 w-full">
                      查看详细报告
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
          
          <Card className="mt-6">
            <CardHeader>
              <CardTitle>集中vs分散采购对比详情</CardTitle>
              <CardDescription>各项指标详细对比分析</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="overflow-x-auto">
                <table className="w-full border-collapse">
                  <thead>
                    <tr className="border-b">
                      <th className="text-left font-medium py-2 px-4">指标</th>
                      <th className="text-center font-medium py-2 px-4">集中采购</th>
                      <th className="text-center font-medium py-2 px-4">分散采购</th>
                      <th className="text-center font-medium py-2 px-4">优势方</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr className="border-b">
                      <td className="py-2 px-4">采购价格</td>
                      <td className="text-center py-2 px-4">平均低15%</td>
                      <td className="text-center py-2 px-4">标准市场价</td>
                      <td className="text-center py-2 px-4 text-blue-600">集中采购</td>
                    </tr>
                    <tr className="border-b">
                      <td className="py-2 px-4">管理成本</td>
                      <td className="text-center py-2 px-4">8%</td>
                      <td className="text-center py-2 px-4">5%</td>
                      <td className="text-center py-2 px-4 text-amber-600">分散采购</td>
                    </tr>
                    <tr className="border-b">
                      <td className="py-2 px-4">物流成本</td>
                      <td className="text-center py-2 px-4">7%</td>
                      <td className="text-center py-2 px-4">12%</td>
                      <td className="text-center py-2 px-4 text-blue-600">集中采购</td>
                    </tr>
                    <tr className="border-b">
                      <td className="py-2 px-4">响应速度</td>
                      <td className="text-center py-2 px-4">5-10个工作日</td>
                      <td className="text-center py-2 px-4">1-3个工作日</td>
                      <td className="text-center py-2 px-4 text-amber-600">分散采购</td>
                    </tr>
                    <tr className="border-b">
                      <td className="py-2 px-4">供应商管理</td>
                      <td className="text-center py-2 px-4">集中管理</td>
                      <td className="text-center py-2 px-4">分散管理</td>
                      <td className="text-center py-2 px-4 text-blue-600">集中采购</td>
                    </tr>
                    <tr>
                      <td className="py-2 px-4">质量控制</td>
                      <td className="text-center py-2 px-4">统一标准</td>
                      <td className="text-center py-2 px-4">标准不一</td>
                      <td className="text-center py-2 px-4 text-blue-600">集中采购</td>
                    </tr>
                  </tbody>
                </table>
              </div>
              
              <div className="border rounded-md p-4 mt-6 bg-blue-50">
                <h4 className="font-medium mb-2">建议策略</h4>
                <p className="text-sm">
                  建议对标准化程度高、需求量大的物料（如办公用品、IT设备）采用集中采购策略；
                  对于紧急需求和定制化程度高的物料可保留分散采购机制，实现采购策略的最优组合。
                </p>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
        
        <TabsContent value="priceLock" className="pt-6">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            <Card className="lg:col-span-2">
              <CardHeader className="pb-2">
                <CardTitle className="flex items-center">
                  <TrendingUp className="mr-2 h-5 w-5" />
                  大宗商品价格走势
                </CardTitle>
                <CardDescription>主要原材料近12个月价格走势</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="h-[350px]">
                  <ResponsiveContainer width="100%" height="100%">
                    <ReLineChart data={priceData}>
                      <CartesianGrid strokeDasharray="3 3" opacity={0.1} />
                      <XAxis dataKey="name" />
                      <YAxis />
                      <Tooltip />
                      <Legend />
                      <Line type="monotone" dataKey="钢材价格" stroke="#1890ff" />
                      <Line type="monotone" dataKey="铜价" stroke="#FF8042" />
                      <Line type="monotone" dataKey="铝价" stroke="#82ca9d" />
                    </ReLineChart>
                  </ResponsiveContainer>
                </div>
                <div className="text-xs text-center mt-2 text-muted-foreground">
                  *价格指数（100为基期价格）
                </div>
              </CardContent>
            </Card>
            
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center">
                  <Clock className="mr-2 h-5 w-5" />
                  价格锁定建议
                </CardTitle>
                <CardDescription>基于价格走势的长协建议</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-6">
                  <div>
                    <label className="text-sm font-medium">原材料类型</label>
                    <select className="w-full h-10 px-3 py-2 rounded-md border border-input bg-background text-sm mt-1">
                      <option value="steel">钢材</option>
                      <option value="copper">铜</option>
                      <option value="aluminum">铝</option>
                    </select>
                  </div>
                  
                  <div>
                    <label className="text-sm font-medium">预计年采购量</label>
                    <div className="flex items-center mt-1">
                      <Input type="number" placeholder="输入数量..." />
                      <span className="ml-2">吨</span>
                    </div>
                  </div>
                  
                  <div>
                    <label className="text-sm font-medium">价格波动敏感度</label>
                    <select className="w-full h-10 px-3 py-2 rounded-md border border-input bg-background text-sm mt-1">
                      <option value="high">高（对价格变动极敏感）</option>
                      <option value="medium">中（一定程度敏感）</option>
                      <option value="low">低（价格变动影响较小）</option>
                    </select>
                  </div>
                  
                  <Button className="w-full">生成建议</Button>
                  
                  <div className="border-t pt-4">
                    <h4 className="font-medium mb-2">钢材价格锁定建议</h4>
                    
                    <div className="border rounded-md p-3 bg-blue-50 mb-3">
                      <div className="font-medium">建议锁定期限：6个月</div>
                      <div className="text-sm mt-1">
                        分析结果预测未来6个月钢材价格呈上升趋势，建议现阶段锁价
                      </div>
                    </div>
                    
                    <div className="space-y-2 text-sm">
                      <div className="flex justify-between">
                        <span>当前市场价格：</span>
                        <span className="font-medium">￥5,650/吨</span>
                      </div>
                      <div className="flex justify-between">
                        <span>建议锁定价格：</span>
                        <span className="font-medium">￥5,750/吨</span>
                      </div>
                      <div className="flex justify-between">
                        <span>6个月后预估价格：</span>
                        <span className="font-medium">￥6,200/吨</span>
                      </div>
                      <div className="flex justify-between">
                        <span>潜在节约：</span>
                        <span className="font-medium text-green-600">￥450/吨</span>
                      </div>
                    </div>
                    
                    <Button variant="outline" size="sm" className="mt-4 w-full">
                      查看详细分析
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
          
          <Card className="mt-6">
            <CardHeader>
              <CardTitle>长协价格锁定风险评估</CardTitle>
              <CardDescription>长期协议价格锁定的多角度分析</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  <div className="border rounded-md p-4">
                    <h3 className="font-medium mb-2">市场风险</h3>
                    <div className="space-y-1 text-sm">
                      <p>• 价格下跌风险：<span className="text-amber-600">中等</span></p>
                      <p>• 价格上涨可能性：<span className="text-green-600">高</span></p>
                      <p>• 市场波动性：<span className="text-amber-600">中等</span></p>
                    </div>
                  </div>
                  
                  <div className="border rounded-md p-4">
                    <h3 className="font-medium mb-2">供应风险</h3>
                    <div className="space-y-1 text-sm">
                      <p>• 供应商履约风险：<span className="text-green-600">低</span></p>
                      <p>• 供应链中断风险：<span className="text-amber-600">中等</span></p>
                      <p>• 质量波动风险：<span className="text-green-600">低</span></p>
                    </div>
                  </div>
                  
                  <div className="border rounded-md p-4">
                    <h3 className="font-medium mb-2">财务风险</h3>
                    <div className="space-y-1 text-sm">
                      <p>• 现金流压力：<span className="text-amber-600">中等</span></p>
                      <p>• 预付款风险：<span className="text-green-600">低</span></p>
                      <p>• 预算超支风险：<span className="text-green-600">低</span></p>
                    </div>
                  </div>
                </div>
                
                <div className="border-t pt-4">
                  <h4 className="font-medium mb-2">替代方案比较</h4>
                  
                  <div className="overflow-x-auto">
                    <table className="w-full border-collapse">
                      <thead>
                        <tr className="border-b">
                          <th className="text-left font-medium py-2 px-4">采购策略</th>
                          <th className="text-center font-medium py-2 px-4">优势</th>
                          <th className="text-center font-medium py-2 px-4">劣势</th>
                          <th className="text-center font-medium py-2 px-4">适用场景</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr className="border-b">
                          <td className="py-2 px-4">长期锁价</td>
                          <td className="py-2 px-4 text-sm">价格稳定，降低波动风险</td>
                          <td className="py-2 px-4 text-sm">错失价格下跌机会</td>
                          <td className="py-2 px-4 text-sm">大宗商品价格上涨趋势明显</td>
                        </tr>
                        <tr className="border-b">
                          <td className="py-2 px-4">分批采购</td>
                          <td className="py-2 px-4 text-sm">灵活应对市场变化</td>
                          <td className="py-2 px-4 text-sm">价格波动风险高</td>
                          <td className="py-2 px-4 text-sm">市场波动大，趋势不明</td>
                        </tr>
                        <tr>
                          <td className="py-2 px-4">套期保值</td>
                          <td className="py-2 px-4 text-sm">双向保护，降低风险</td>
                          <td className="py-2 px-4 text-sm">操作复杂，成本较高</td>
                          <td className="py-2 px-4 text-sm">价格敏感度极高的大额采购</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                  
                  <div className="border rounded-md p-4 mt-6 bg-blue-50">
                    <h4 className="font-medium mb-2">综合建议</h4>
                    <p className="text-sm">
                      建议对钢材采用"6+6"策略：先锁定6个月需求量的70%，余下30%采用分批采购策略；
                      6个月后根据市场情况重新评估。这种组合策略可以在获得价格稳定性的同时保留一定灵活性。
                    </p>
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

export default ProcurementStrategy;
