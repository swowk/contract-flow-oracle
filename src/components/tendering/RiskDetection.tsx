
import { useState } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";
import { Upload, Search, AlertTriangle, CheckCircle, XCircle } from "lucide-react";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";

const RiskDetection = () => {
  const [activeTab, setActiveTab] = useState("document");
  
  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <div>
          <h2 className="text-3xl font-bold">风险侦测</h2>
          <p className="text-muted-foreground mt-1">检测招标文件中的风险点，确保合规性</p>
        </div>
      </div>
      
      <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
        <TabsList className="grid w-full grid-cols-2">
          <TabsTrigger value="document">文件分析</TabsTrigger>
          <TabsTrigger value="compliance">合规检查</TabsTrigger>
        </TabsList>
        
        <TabsContent value="document" className="pt-6">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center">
                <Search className="mr-2 h-5 w-5" />
                招标文件语义分析
              </CardTitle>
              <CardDescription>分析招标文件的技术方案、错别字和排版特征</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="flex flex-col space-y-4">
                <div className="border rounded-md p-8 flex flex-col items-center justify-center">
                  <Upload className="h-10 w-10 text-muted-foreground mb-2" />
                  <p className="text-sm text-muted-foreground">上传招标文件进行分析</p>
                  <p className="text-xs text-muted-foreground">支持DOC、DOCX、PDF格式</p>
                </div>
                
                <Button>开始分析</Button>
                
                <div className="border-t pt-4 mt-4 space-y-6">
                  <div>
                    <div className="flex justify-between mb-1">
                      <h3 className="font-medium">文档完整性</h3>
                      <span className="text-green-600">92%</span>
                    </div>
                    <Progress value={92} className="h-2" />
                    <div className="mt-2 text-sm space-y-1">
                      <div className="flex items-center">
                        <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                        <span>包含完整的商务、技术和资格条款</span>
                      </div>
                      <div className="flex items-center">
                        <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                        <span>评分标准符合要求</span>
                      </div>
                      <div className="flex items-center">
                        <XCircle className="h-4 w-4 text-red-500 mr-2" />
                        <span>缺少详细的履约验收标准</span>
                      </div>
                    </div>
                  </div>
                  
                  <div>
                    <div className="flex justify-between mb-1">
                      <h3 className="font-medium">文字错误</h3>
                      <span className="text-amber-600">发现8处问题</span>
                    </div>
                    <div className="border rounded-md p-4 bg-slate-50 mt-2 text-sm">
                      <ul className="space-y-2">
                        <li>• 第12页："供应商资质要球" 应为 "供应商资质要求"</li>
                        <li>• 第18页："技术指标需符号国家标准" 应为 "技术指标需符合国家标准"</li>
                        <li>• 第25页："保证金金拱为" 应为 "保证金金额为"</li>
                        <li>• 其他5处错别字或标点符号错误...</li>
                      </ul>
                    </div>
                  </div>
                  
                  <div>
                    <div className="flex justify-between mb-1">
                      <h3 className="font-medium">排版一致性</h3>
                      <span className="text-green-600">87%</span>
                    </div>
                    <Progress value={87} className="h-2" />
                    <div className="mt-2 text-sm">
                      <p>总体排版规范，但存在字体大小不一致（第8、15页）和表格格式不统一（第22页）的问题。</p>
                    </div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
        
        <TabsContent value="compliance" className="pt-6">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center">
                <AlertTriangle className="mr-2 h-5 w-5" />
                风险点预警
              </CardTitle>
              <CardDescription>检测违反法律法规、行业规范的要求</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="flex flex-col space-y-4">
                <div className="border rounded-md p-8 flex flex-col items-center justify-center">
                  <Upload className="h-10 w-10 text-muted-foreground mb-2" />
                  <p className="text-sm text-muted-foreground">上传招标文件进行风险检测</p>
                  <p className="text-xs text-muted-foreground">支持DOC、DOCX、PDF格式</p>
                </div>
                
                <Button>开始检测</Button>
                
                <div className="border-t pt-4 mt-4">
                  <h3 className="font-medium mb-4">风险检测结果</h3>
                  
                  <div className="space-y-4">
                    <Alert variant="destructive">
                      <AlertTriangle className="h-4 w-4" />
                      <AlertTitle>高风险：歧视性条款</AlertTitle>
                      <AlertDescription>
                        第15页："投标人须为某地区注册企业"存在地域歧视，违反《政府采购法》第22条。
                      </AlertDescription>
                    </Alert>
                    
                    <Alert variant="destructive">
                      <AlertTriangle className="h-4 w-4" />
                      <AlertTitle>高风险：指定品牌</AlertTitle>
                      <AlertDescription>
                        第28页技术参数中"采用XX品牌主板"存在指定特定品牌嫌疑，违反公平竞争原则。
                      </AlertDescription>
                    </Alert>
                    
                    <Alert variant="warning">
                      <AlertTriangle className="h-4 w-4" />
                      <AlertTitle>中风险：资质要求过高</AlertTitle>
                      <AlertDescription>
                        要求投标人同时具备5项及以上资质证书，可能限制竞争。
                      </AlertDescription>
                    </Alert>
                    
                    <Alert variant="warning">
                      <AlertTriangle className="h-4 w-4" />
                      <AlertTitle>中风险：业绩要求不合理</AlertTitle>
                      <AlertDescription>
                        要求近3年内完成3个以上同类项目，且单个项目金额不低于本项目预算金额的80%，设置门槛过高。
                      </AlertDescription>
                    </Alert>
                    
                    <Alert>
                      <AlertTriangle className="h-4 w-4" />
                      <AlertTitle>低风险：时间节点模糊</AlertTitle>
                      <AlertDescription>
                        项目实施时间节点描述不够清晰，建议明确具体的时间要求。
                      </AlertDescription>
                    </Alert>
                  </div>
                  
                  <div className="mt-6 p-4 border rounded-md bg-blue-50">
                    <h4 className="font-medium mb-2">合规性修改建议</h4>
                    <ul className="space-y-2 pl-5 list-disc text-sm">
                      <li>删除对投标人注册地区的限制性要求</li>
                      <li>用技术参数描述替代特定品牌要求</li>
                      <li>降低资质证书数量要求，只保留与项目直接相关的资质要求</li>
                      <li>调整业绩要求为"近3年内完成1个以上同类项目"</li>
                      <li>明确项目各阶段的具体时间节点和要求</li>
                    </ul>
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

export default RiskDetection;
