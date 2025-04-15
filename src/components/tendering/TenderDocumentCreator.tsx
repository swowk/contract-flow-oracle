
import { useState } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { Input } from "@/components/ui/input";
import { FileText, History, ListChecks, BookOpen } from "lucide-react";

const TenderDocumentCreator = () => {
  const [activeTab, setActiveTab] = useState("requirements");
  
  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <div>
          <h2 className="text-3xl font-bold">招标文件智能编制</h2>
          <p className="text-muted-foreground mt-1">快速创建规范的招标文件</p>
        </div>
        <Button>
          <FileText className="mr-2 h-4 w-4" />
          导出招标文件
        </Button>
      </div>
      
      <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
        <TabsList className="grid w-full grid-cols-4">
          <TabsTrigger value="requirements">需求解析</TabsTrigger>
          <TabsTrigger value="history">历史项目推荐</TabsTrigger>
          <TabsTrigger value="templates">模板库</TabsTrigger>
          <TabsTrigger value="standards">规范库</TabsTrigger>
        </TabsList>
        
        <TabsContent value="requirements" className="pt-6">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center">
                <ListChecks className="mr-2 h-5 w-5" />
                需求智能解析
              </CardTitle>
              <CardDescription>输入需求描述，自动解析为技术参数/服务标准/资质要求清单</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="flex flex-col space-y-4">
                <div>
                  <label className="text-sm font-medium">项目名称</label>
                  <Input placeholder="输入项目名称..." />
                </div>
                
                <div>
                  <label className="text-sm font-medium">需求描述</label>
                  <Textarea 
                    placeholder="请描述您的采购需求，例如：'建设智慧园区，包含门禁系统、监控系统、访客管理等'..." 
                    className="min-h-[150px]"
                  />
                </div>
                
                <div>
                  <label className="text-sm font-medium">项目类型</label>
                  <select className="w-full h-10 px-3 py-2 rounded-md border border-input bg-background text-sm">
                    <option value="">选择项目类型</option>
                    <option value="goods">货物类</option>
                    <option value="engineering">工程类</option>
                    <option value="service">服务类</option>
                  </select>
                </div>
                
                <Button>开始解析</Button>
                
                <div className="border-t pt-4 mt-4">
                  <h3 className="font-medium mb-2">解析结果</h3>
                  <div className="space-y-4">
                    <div className="border rounded-md p-4">
                      <h4 className="text-sm font-medium mb-2">技术参数要求</h4>
                      <div className="bg-slate-50 rounded-md p-4 min-h-[100px] flex items-center justify-center">
                        <p className="text-muted-foreground">输入需求描述开始解析...</p>
                      </div>
                    </div>
                    
                    <div className="border rounded-md p-4">
                      <h4 className="text-sm font-medium mb-2">服务标准要求</h4>
                      <div className="bg-slate-50 rounded-md p-4 min-h-[100px] flex items-center justify-center">
                        <p className="text-muted-foreground">输入需求描述开始解析...</p>
                      </div>
                    </div>
                    
                    <div className="border rounded-md p-4">
                      <h4 className="text-sm font-medium mb-2">资质要求清单</h4>
                      <div className="bg-slate-50 rounded-md p-4 min-h-[100px] flex items-center justify-center">
                        <p className="text-muted-foreground">输入需求描述开始解析...</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
        
        <TabsContent value="history" className="pt-6">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center">
                <History className="mr-2 h-5 w-5" />
                历史项目推荐
              </CardTitle>
              <CardDescription>基于历史项目数据推荐同类项目配置方案</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="flex flex-col space-y-4">
                <div>
                  <label className="text-sm font-medium">项目关键词</label>
                  <Input placeholder="输入关键词查找相似历史项目..." />
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="text-sm font-medium">行业分类</label>
                    <select className="w-full h-10 px-3 py-2 rounded-md border border-input bg-background text-sm">
                      <option value="">全部行业</option>
                      <option value="it">信息技术</option>
                      <option value="construction">建筑工程</option>
                      <option value="medical">医疗卫生</option>
                      <option value="education">教育科研</option>
                    </select>
                  </div>
                  
                  <div>
                    <label className="text-sm font-medium">项目预算范围</label>
                    <select className="w-full h-10 px-3 py-2 rounded-md border border-input bg-background text-sm">
                      <option value="">全部预算范围</option>
                      <option value="less100">100万以下</option>
                      <option value="100to500">100-500万</option>
                      <option value="500to1000">500-1000万</option>
                      <option value="more1000">1000万以上</option>
                    </select>
                  </div>
                </div>
                
                <Button>查找相似项目</Button>
                
                <div className="border-t pt-4 mt-4">
                  <h3 className="font-medium mb-2">推荐项目配置方案</h3>
                  <div className="space-y-4">
                    <div className="border rounded-md p-4 hover:border-primary cursor-pointer">
                      <div className="flex justify-between items-start">
                        <div>
                          <h4 className="font-medium">某市智慧社区建设项目</h4>
                          <p className="text-sm text-muted-foreground mt-1">预算规模：350万元</p>
                        </div>
                        <Button variant="outline" size="sm">查看详情</Button>
                      </div>
                      <div className="mt-2">
                        <p className="text-sm">中标单位：某科技有限公司</p>
                        <p className="text-sm">评标方式：综合评分法（价格40%、技术50%、商务10%）</p>
                      </div>
                    </div>
                    
                    <div className="border rounded-md p-4 hover:border-primary cursor-pointer">
                      <div className="flex justify-between items-start">
                        <div>
                          <h4 className="font-medium">某区智能化监控系统建设项目</h4>
                          <p className="text-sm text-muted-foreground mt-1">预算规模：280万元</p>
                        </div>
                        <Button variant="outline" size="sm">查看详情</Button>
                      </div>
                      <div className="mt-2">
                        <p className="text-sm">中标单位：某信息技术有限公司</p>
                        <p className="text-sm">评标方式：综合评分法（价格30%、技术60%、商务10%）</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
        
        <TabsContent value="templates" className="pt-6">
          <Card>
            <CardHeader>
              <CardTitle>结构化模板库</CardTitle>
              <CardDescription>按工程/货物/服务分类的标准招标文件模板</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="flex flex-col space-y-4">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  <Button variant="outline" className="h-auto py-6 flex flex-col">
                    <FileText className="h-8 w-8 mb-2" />
                    <span className="font-medium">工程类模板</span>
                    <span className="text-xs text-muted-foreground mt-1">共18个模板</span>
                  </Button>
                  
                  <Button variant="outline" className="h-auto py-6 flex flex-col">
                    <FileText className="h-8 w-8 mb-2" />
                    <span className="font-medium">货物类模板</span>
                    <span className="text-xs text-muted-foreground mt-1">共22个模板</span>
                  </Button>
                  
                  <Button variant="outline" className="h-auto py-6 flex flex-col">
                    <FileText className="h-8 w-8 mb-2" />
                    <span className="font-medium">服务类模板</span>
                    <span className="text-xs text-muted-foreground mt-1">共15个模板</span>
                  </Button>
                </div>
                
                <div className="border-t pt-4 mt-4">
                  <h3 className="font-medium mb-2">热门模板</h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                    <div className="border rounded-md p-4 hover:border-primary cursor-pointer">
                      <h4 className="font-medium">信息化项目招标文件</h4>
                      <p className="text-sm text-muted-foreground mt-1">适用于各类信息化建设项目</p>
                      <div className="flex justify-end mt-2">
                        <Button size="sm">使用</Button>
                      </div>
                    </div>
                    
                    <div className="border rounded-md p-4 hover:border-primary cursor-pointer">
                      <h4 className="font-medium">办公设备采购招标文件</h4>
                      <p className="text-sm text-muted-foreground mt-1">适用于办公设备批量采购</p>
                      <div className="flex justify-end mt-2">
                        <Button size="sm">使用</Button>
                      </div>
                    </div>
                    
                    <div className="border rounded-md p-4 hover:border-primary cursor-pointer">
                      <h4 className="font-medium">咨询服务招标文件</h4>
                      <p className="text-sm text-muted-foreground mt-1">适用于各类咨询服务采购</p>
                      <div className="flex justify-end mt-2">
                        <Button size="sm">使用</Button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
        
        <TabsContent value="standards" className="pt-6">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center">
                <BookOpen className="mr-2 h-5 w-5" />
                技术规范库
              </CardTitle>
              <CardDescription>关联最新技术标准规范</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="flex flex-col space-y-4">
                <div className="flex w-full items-center space-x-2">
                  <Input placeholder="输入标准号或关键词查询..." />
                  <Button type="submit">搜索</Button>
                </div>
                
                <div className="space-y-4 mt-4">
                  <div className="border rounded-md p-4">
                    <div className="flex justify-between">
                      <div>
                        <h4 className="font-medium">GB/T 22239-2019</h4>
                        <p className="text-sm text-muted-foreground mt-1">信息安全技术 网络安全等级保护基本要求</p>
                      </div>
                      <Button variant="outline" size="sm">引用</Button>
                    </div>
                  </div>
                  
                  <div className="border rounded-md p-4">
                    <div className="flex justify-between">
                      <div>
                        <h4 className="font-medium">GB/T 35273-2020</h4>
                        <p className="text-sm text-muted-foreground mt-1">信息安全技术 个人信息安全规范</p>
                      </div>
                      <Button variant="outline" size="sm">引用</Button>
                    </div>
                  </div>
                  
                  <div className="border rounded-md p-4">
                    <div className="flex justify-between">
                      <div>
                        <h4 className="font-medium">GB/T 25058-2019</h4>
                        <p className="text-sm text-muted-foreground mt-1">信息安全技术 网络安全等级保护实施指南</p>
                      </div>
                      <Button variant="outline" size="sm">引用</Button>
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

export default TenderDocumentCreator;
