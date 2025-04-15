
import { useState } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import { Gavel, Search, MapPin, ExternalLink, Bell } from "lucide-react";

const RegulatoryEngine = () => {
  const [activeTab, setActiveTab] = useState("regulations");
  
  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <div>
          <h2 className="text-3xl font-bold">法规动态引擎</h2>
          <p className="text-muted-foreground mt-1">招投标法规解读与区域政策差异提醒</p>
        </div>
        <Button variant="outline">
          <Bell className="mr-2 h-4 w-4" />
          订阅政策更新
        </Button>
      </div>
      
      <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
        <TabsList className="grid w-full grid-cols-2">
          <TabsTrigger value="regulations">新规解读</TabsTrigger>
          <TabsTrigger value="regional">区域政策差异</TabsTrigger>
        </TabsList>
        
        <TabsContent value="regulations" className="pt-6">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center">
                <Gavel className="mr-2 h-5 w-5" />
                招投标新规智能解读
              </CardTitle>
              <CardDescription>法律修订影响分析</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="flex flex-col space-y-6">
                <div className="flex w-full items-center space-x-2">
                  <Input placeholder="输入关键词搜索相关法规..." />
                  <Button type="submit">
                    <Search className="mr-2 h-4 w-4" />
                    搜索
                  </Button>
                </div>
                
                <div className="space-y-6">
                  <div className="border rounded-md p-4">
                    <div className="flex items-start justify-between">
                      <div>
                        <h3 className="font-medium">《政府采购法实施条例》修订</h3>
                        <p className="text-sm text-muted-foreground mt-1">发布日期：2023-09-15 | 实施日期：2024-01-01</p>
                      </div>
                      <Button variant="outline" size="sm">解读全文</Button>
                    </div>
                    
                    <div className="mt-4 space-y-4">
                      <div>
                        <h4 className="text-sm font-medium mb-1">主要变更内容</h4>
                        <ul className="list-disc pl-5 text-sm space-y-1">
                          <li>强化采购人主体责任，明确采购人对采购活动全过程的责任</li>
                          <li>简化小额采购程序，提高小额采购限额标准</li>
                          <li>完善供应商信用评价机制，建立全国统一的不良行为记录制度</li>
                        </ul>
                      </div>
                      
                      <div>
                        <h4 className="text-sm font-medium mb-1">影响分析</h4>
                        <div className="bg-blue-50 p-3 rounded-md">
                          <p className="text-sm">
                            该修订将对采购流程产生以下影响：
                            1. 采购人需加强内部控制，确保合规性；
                            2. 小额采购（低于50万元）可采用更为灵活的方式；
                            3. 投标时需更加关注企业信用记录维护。
                          </p>
                        </div>
                      </div>
                      
                      <Alert>
                        <AlertTitle>应对建议</AlertTitle>
                        <AlertDescription>
                          <ol className="space-y-1 pl-5 list-decimal">
                            <li>修订内部采购流程文件，强化合规审核</li>
                            <li>利用小额采购简易程序提高采购效率</li>
                            <li>建立供应商评价档案，定期跟踪信用状况</li>
                          </ol>
                        </AlertDescription>
                      </Alert>
                    </div>
                  </div>
                  
                  <div className="border rounded-md p-4">
                    <div className="flex items-start justify-between">
                      <div>
                        <h3 className="font-medium">《招标投标法》第四次修正案</h3>
                        <p className="text-sm text-muted-foreground mt-1">发布日期：2023-07-22 | 实施日期：2023-10-01</p>
                      </div>
                      <Button variant="outline" size="sm">解读全文</Button>
                    </div>
                    
                    <div className="mt-4 space-y-4">
                      <div>
                        <h4 className="text-sm font-medium mb-1">主要变更内容</h4>
                        <ul className="list-disc pl-5 text-sm space-y-1">
                          <li>强化电子招投标应用，推动全流程电子化</li>
                          <li>明确招标人不得以不合理条件限制、排斥潜在投标人</li>
                          <li>加强对串通投标行为的处罚力度</li>
                        </ul>
                      </div>
                      
                      <div>
                        <h4 className="text-sm font-medium mb-1">影响分析</h4>
                        <div className="bg-blue-50 p-3 rounded-md">
                          <p className="text-sm">
                            该修正案将对招投标活动产生以下影响：
                            1. 企业需加强电子投标能力建设；
                            2. 招标文件编制需更加注意公平性和非限制性；
                            3. 投标人间协作需严格遵循法律规范，避免串通投标行为。
                          </p>
                        </div>
                      </div>
                      
                      <Alert>
                        <AlertTitle>应对建议</AlertTitle>
                        <AlertDescription>
                          <ol className="space-y-1 pl-5 list-decimal">
                            <li>加强电子招投标系统使用培训</li>
                            <li>建立招标文件合规性审查机制</li>
                            <li>开展反串通投标法律培训，强化风险防范</li>
                          </ol>
                        </AlertDescription>
                      </Alert>
                    </div>
                  </div>
                </div>
                
                <div className="flex justify-center">
                  <Button variant="outline">加载更多法规更新</Button>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
        
        <TabsContent value="regional" className="pt-6">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center">
                <MapPin className="mr-2 h-5 w-5" />
                区域政策差异提醒
              </CardTitle>
              <CardDescription>跨省投标需注意的特殊要求</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="flex flex-col space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="text-sm font-medium">所在地区</label>
                    <select className="w-full h-10 px-3 py-2 rounded-md border border-input bg-background text-sm mt-1">
                      <option value="">请选择省份</option>
                      <option value="beijing">北京市</option>
                      <option value="shanghai">上海市</option>
                      <option value="guangdong">广东省</option>
                      <option value="jiangsu">江苏省</option>
                      <option value="zhejiang">浙江省</option>
                    </select>
                  </div>
                  
                  <div>
                    <label className="text-sm font-medium">目标投标地区</label>
                    <select className="w-full h-10 px-3 py-2 rounded-md border border-input bg-background text-sm mt-1">
                      <option value="">请选择省份</option>
                      <option value="beijing">北京市</option>
                      <option value="shanghai">上海市</option>
                      <option value="guangdong">广东省</option>
                      <option value="jiangsu">江苏省</option>
                      <option value="zhejiang">浙江省</option>
                    </select>
                  </div>
                </div>
                
                <Button>检索政策差异</Button>
                
                <div className="border-t pt-6">
                  <h3 className="font-medium mb-4">广东省与北京市招投标政策差异</h3>
                  
                  <div className="space-y-6">
                    <div className="border rounded-md p-4">
                      <h4 className="font-medium">1. 资质要求差异</h4>
                      <div className="mt-2 space-y-3">
                        <div>
                          <h5 className="text-sm font-medium">广东省特殊要求：</h5>
                          <ul className="list-disc pl-5 text-sm space-y-1 mt-1">
                            <li>外省企业参与广东省内建设工程招投标需在"广东省建筑市场监管公共服务平台"办理企业基本信息登记</li>
                            <li>IT类项目需提供"广东省网络与信息安全测评中心"出具的安全测评报告</li>
                          </ul>
                        </div>
                        
                        <Alert>
                          <AlertTitle>注意事项</AlertTitle>
                          <AlertDescription className="text-sm">
                            北京企业首次参与广东省投标建议提前20个工作日办理信息登记，信息安全测评报告办理周期约为15-20个工作日
                          </AlertDescription>
                        </Alert>
                      </div>
                    </div>
                    
                    <div className="border rounded-md p-4">
                      <h4 className="font-medium">2. 投标保证金规定差异</h4>
                      <div className="mt-2 space-y-3">
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                          <div>
                            <h5 className="text-sm font-medium">北京市：</h5>
                            <p className="text-sm mt-1">
                              保证金缴纳上限为采购项目预算的2%，可使用电子保函
                            </p>
                          </div>
                          
                          <div>
                            <h5 className="text-sm font-medium">广东省：</h5>
                            <p className="text-sm mt-1">
                              保证金缴纳上限为采购项目预算的1.5%，鼓励使用银行电子保函或保证保险
                            </p>
                          </div>
                        </div>
                        
                        <Alert>
                          <AlertTitle>注意事项</AlertTitle>
                          <AlertDescription className="text-sm">
                            在广东省投标时需注意保证金比例较低，且优先选择当地认可的金融机构开具的电子保函
                          </AlertDescription>
                        </Alert>
                      </div>
                    </div>
                    
                    <div className="border rounded-md p-4">
                      <h4 className="font-medium">3. 评标方法差异</h4>
                      <div className="mt-2 space-y-3">
                        <div>
                          <h5 className="text-sm font-medium">地区差异：</h5>
                          <ul className="list-disc pl-5 text-sm space-y-1 mt-1">
                            <li>广东省对信用评价结果在评标中的应用更为广泛，"信用评价得分"作为技术评分重要组成部分</li>
                            <li>广东省对企业服务本地化要求较高，常设"本地化服务能力"评分项</li>
                          </ul>
                        </div>
                        
                        <Alert>
                          <AlertTitle>应对建议</AlertTitle>
                          <AlertDescription className="text-sm">
                            <ol className="space-y-1 pl-5 list-decimal">
                              <li>提前在"广东省企业信用信息公示系统"中完善企业信用信息</li>
                              <li>考虑与当地企业合作或设立分支机构以增强本地化服务能力</li>
                              <li>投标文件中重点突出响应本地化服务的具体方案</li>
                            </ol>
                          </AlertDescription>
                        </Alert>
                      </div>
                    </div>
                  </div>
                  
                  <div className="flex justify-between items-center mt-6">
                    <Button variant="outline">
                      <ExternalLink className="mr-2 h-4 w-4" />
                      下载完整政策差异报告
                    </Button>
                    
                    <Button>
                      <MapPin className="mr-2 h-4 w-4" />
                      生成区域合规清单
                    </Button>
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

export default RegulatoryEngine;
