
import { useState } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Slider } from "@/components/ui/slider";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import { Scale, AlertTriangle } from "lucide-react";

const IntelligentEvaluation = () => {
  const [activeTab, setActiveTab] = useState("weights");
  const [priceWeight, setPriceWeight] = useState([50]);
  
  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <div>
          <h2 className="text-3xl font-bold">智能评标</h2>
          <p className="text-muted-foreground mt-1">智能设置评分标准，避免废标风险</p>
        </div>
      </div>
      
      <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
        <TabsList className="grid w-full grid-cols-2">
          <TabsTrigger value="weights">权重推荐</TabsTrigger>
          <TabsTrigger value="risks">废标风险分析</TabsTrigger>
        </TabsList>
        
        <TabsContent value="weights" className="pt-6">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center">
                <Scale className="mr-2 h-5 w-5" />
                评标权重推荐
              </CardTitle>
              <CardDescription>根据采购品类智能推荐价格分权重区间</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="flex flex-col space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-4">
                    <div>
                      <label className="text-sm font-medium">采购品类</label>
                      <select className="w-full h-10 px-3 py-2 rounded-md border border-input bg-background text-sm">
                        <option value="goods">货物类</option>
                        <option value="engineering">工程类</option>
                        <option value="service">服务类</option>
                        <option value="consulting">咨询类</option>
                      </select>
                    </div>
                    
                    <div>
                      <label className="text-sm font-medium">采购金额</label>
                      <Input type="number" placeholder="输入预算金额（万元）..." />
                    </div>
                    
                    <div>
                      <label className="text-sm font-medium">采购复杂度</label>
                      <select className="w-full h-10 px-3 py-2 rounded-md border border-input bg-background text-sm">
                        <option value="low">简单标准品</option>
                        <option value="medium">中等复杂度</option>
                        <option value="high">高度专业化</option>
                      </select>
                    </div>
                    
                    <Button>智能推荐</Button>
                  </div>
                  
                  <div className="border rounded-md p-6">
                    <h3 className="font-medium mb-4">权重推荐结果</h3>
                    
                    <div className="space-y-6">
                      <div className="space-y-2">
                        <div className="flex justify-between">
                          <label className="text-sm font-medium">价格分</label>
                          <span className="text-sm">{priceWeight}%</span>
                        </div>
                        <Slider
                          value={priceWeight}
                          onValueChange={setPriceWeight}
                          max={100}
                          step={1}
                        />
                        <p className="text-xs text-muted-foreground">
                          货物类项目建议价格分权重：50-60%
                        </p>
                      </div>
                      
                      <div className="space-y-2">
                        <div className="flex justify-between">
                          <label className="text-sm font-medium">技术分</label>
                          <span className="text-sm">{100 - priceWeight[0]}%</span>
                        </div>
                        <Slider
                          value={[100 - priceWeight[0]]}
                          onValueChange={(value) => setPriceWeight([100 - value[0]])}
                          max={100}
                          step={1}
                        />
                      </div>
                      
                      <Alert className="bg-blue-50">
                        <AlertTitle>系统建议</AlertTitle>
                        <AlertDescription>
                          该类型采购项目建议将价格分控制在50-60%之间，技术分控制在40-50%之间，以保证采购质量和经济效益的平衡。
                        </AlertDescription>
                      </Alert>
                    </div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
        
        <TabsContent value="risks" className="pt-6">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center">
                <AlertTriangle className="mr-2 h-5 w-5" />
                废标风险分析
              </CardTitle>
              <CardDescription>分析历史废标原因，生成评标注意事项</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="flex flex-col space-y-6">
                <div>
                  <label className="text-sm font-medium">采购品类</label>
                  <select className="w-full h-10 px-3 py-2 rounded-md border border-input bg-background text-sm">
                    <option value="it">IT设备及服务</option>
                    <option value="office">办公设备</option>
                    <option value="construction">工程建设</option>
                    <option value="consulting">咨询服务</option>
                    <option value="medical">医疗设备</option>
                  </select>
                </div>
                
                <Button>生成风险报告</Button>
                
                <div className="border-t pt-6 mt-2">
                  <h3 className="font-medium mb-4">废标风险分析结果</h3>
                  
                  <div className="space-y-4">
                    <Alert variant="destructive" className="bg-red-50 border-red-200">
                      <AlertTriangle className="h-4 w-4" />
                      <AlertTitle>高风险项</AlertTitle>
                      <AlertDescription>
                        技术参数过于详细或指向特定品牌型号，可能导致质疑或投诉
                      </AlertDescription>
                    </Alert>
                    
                    <Alert variant="destructive" className="bg-red-50 border-red-200">
                      <AlertTriangle className="h-4 w-4" />
                      <AlertTitle>高风险项</AlertTitle>
                      <AlertDescription>
                        资格条件设置不合理，限制或排斥潜在投标人
                      </AlertDescription>
                    </Alert>
                    
                    <Alert variant="warning" className="bg-amber-50 border-amber-200">
                      <AlertTriangle className="h-4 w-4" />
                      <AlertTitle>中风险项</AlertTitle>
                      <AlertDescription>
                        评分标准不够明确，存在主观评判因素过多的问题
                      </AlertDescription>
                    </Alert>
                    
                    <Alert variant="warning" className="bg-amber-50 border-amber-200">
                      <AlertTriangle className="h-4 w-4" />
                      <AlertTitle>中风险项</AlertTitle>
                      <AlertDescription>
                        招标文件存在前后矛盾或歧义内容
                      </AlertDescription>
                    </Alert>
                    
                    <div className="border rounded-md p-4 mt-4">
                      <h4 className="font-medium mb-2">废标风险预防建议</h4>
                      <ul className="space-y-2 pl-5 list-disc text-sm">
                        <li>避免使用特定品牌型号，采用性能参数描述</li>
                        <li>资格条件应与项目需求相匹配，不设置歧视性条款</li>
                        <li>评分标准应明确、量化，减少主观评判因素</li>
                        <li>招标文件发布前应进行多轮内部审核，确保一致性</li>
                        <li>合理设置投标人澄清机制，避免因小失大</li>
                      </ul>
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

export default IntelligentEvaluation;
