import { useState } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Progress } from "@/components/ui/progress";
import { ScrollText, Upload, Search, Download, Settings, BookOpen, ImagePlus } from "lucide-react";

const DocumentCreator = () => {
  const [currentStep, setCurrentStep] = useState(1);
  const [progress, setProgress] = useState(0);
  const [activeTab, setActiveTab] = useState("materials");
  
  const handleNextStep = () => {
    const nextStep = currentStep + 1;
    setCurrentStep(nextStep);
    setProgress((nextStep - 1) * 20);
  };

  const handlePrevStep = () => {
    const prevStep = currentStep - 1;
    setCurrentStep(prevStep);
    setProgress((prevStep - 1) * 20);
  };

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <div>
          <h2 className="text-3xl font-bold">投标文件智能编制</h2>
          <p className="text-muted-foreground mt-1">快速创建高质量的投标文件</p>
        </div>
      </div>

      <div className="mb-8">
        <Progress value={progress} className="h-2" />
        <div className="flex justify-between mt-2 text-sm text-muted-foreground">
          <span>步骤 {currentStep}/5</span>
          <span>{progress}% 完成</span>
        </div>
      </div>

      {currentStep === 1 && (
        <Card>
          <CardHeader>
            <CardTitle>第一步：资料管理</CardTitle>
            <CardDescription>上传和管理企业资质、案例等资料</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center">
                    <ScrollText className="mr-2 h-5 w-5" />
                    资质证书
                  </CardTitle>
                  <CardDescription>上传和管理企业资质证书</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="flex flex-col space-y-2">
                    <div className="border rounded-md p-4 flex flex-col items-center justify-center h-40">
                      <Upload className="h-10 w-10 text-muted-foreground mb-2" />
                      <p className="text-sm text-muted-foreground">点击上传资质证书</p>
                      <p className="text-xs text-muted-foreground">支持PDF、JPG格式</p>
                    </div>
                    <div className="flex justify-end">
                      <Button size="sm">管理资质证书</Button>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center">
                    <BookOpen className="mr-2 h-5 w-5" />
                    案例库
                  </CardTitle>
                  <CardDescription>上传和管理企业案例材料</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="flex flex-col space-y-2">
                    <div className="border rounded-md p-4 flex flex-col items-center justify-center h-40">
                      <Upload className="h-10 w-10 text-muted-foreground mb-2" />
                      <p className="text-sm text-muted-foreground">点击上传案例材料</p>
                      <p className="text-xs text-muted-foreground">支持DOC、PDF格式</p>
                    </div>
                    <div className="flex justify-end">
                      <Button size="sm">管理案例库</Button>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center">
                    <ImagePlus className="mr-2 h-5 w-5" />
                    产品资料
                  </CardTitle>
                  <CardDescription>上传和管理产品相关资料</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="flex flex-col space-y-2">
                    <div className="border rounded-md p-4 flex flex-col items-center justify-center h-40">
                      <Upload className="h-10 w-10 text-muted-foreground mb-2" />
                      <p className="text-sm text-muted-foreground">点击上传产品资料</p>
                      <p className="text-xs text-muted-foreground">支持各种常见格式</p>
                    </div>
                    <div className="flex justify-end">
                      <Button size="sm">管理产品资料</Button>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
            <div className="flex justify-end mt-4">
              <Button onClick={handleNextStep}>下一步</Button>
            </div>
          </CardContent>
        </Card>
      )}

      {currentStep === 2 && (
        <Card>
          <CardHeader>
            <CardTitle>第二步：知识库检索</CardTitle>
            <CardDescription>快速检索相关标准和模板</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="flex flex-col space-y-4">
              <div className="flex w-full max-w-full items-center space-x-2">
                <Input placeholder="输入关键词搜索标准、资料和模板..." />
                <Button type="submit">搜索</Button>
              </div>
              <div className="border rounded-lg p-6 min-h-[300px] flex items-center justify-center">
                <p className="text-muted-foreground">输入关键词开始搜索...</p>
              </div>
            </div>
            <div className="flex justify-between mt-4">
              <Button variant="outline" onClick={handlePrevStep}>上一步</Button>
              <Button onClick={handleNextStep}>下一步</Button>
            </div>
          </CardContent>
        </Card>
      )}

      {currentStep === 3 && (
        <Card>
          <CardHeader>
            <CardTitle>第三步：投标文档生成</CardTitle>
            <CardDescription>设置生成参数并一键生成文档</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="flex flex-col space-y-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="text-sm font-medium">招标项目名称</label>
                  <Input placeholder="输入招标项目名称..." />
                </div>
                <div>
                  <label className="text-sm font-medium">内容生成角度</label>
                  <select className="w-full h-10 px-3 py-2 rounded-md border border-input bg-background text-sm">
                    <option>技术实力优先</option>
                    <option>成本效益优先</option>
                    <option>服务质量优先</option>
                    <option>创新能力优先</option>
                  </select>
                </div>
                <div>
                  <label className="text-sm font-medium">标书字数控制</label>
                  <Input type="number" placeholder="输入总字数限制..." />
                </div>
                <div>
                  <label className="text-sm font-medium">参考内容来源</label>
                  <select className="w-full h-10 px-3 py-2 rounded-md border border-input bg-background text-sm">
                    <option>所有内部资料</option>
                    <option>仅使用案例库</option>
                    <option>仅使用行业标准</option>
                  </select>
                </div>
              </div>
              
              <div>
                <label className="text-sm font-medium">投标要点摘要</label>
                <Textarea placeholder="输入投标重点要点，以便AI更精准生成内容..." />
              </div>
              
              <div className="flex justify-end">
                <Button>一键生成标书</Button>
              </div>
            </div>
            <div className="flex justify-between mt-4">
              <Button variant="outline" onClick={handlePrevStep}>上一步</Button>
              <Button onClick={handleNextStep}>下一步</Button>
            </div>
          </CardContent>
        </Card>
      )}

      {currentStep === 4 && (
        <Card>
          <CardHeader>
            <CardTitle>第四步：模板调整</CardTitle>
            <CardDescription>选择和自定义文档模板</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="flex flex-col space-y-4">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div className="border rounded-md p-4 hover:border-primary cursor-pointer">
                  <h3 className="font-medium mb-1">IT项目标准模板</h3>
                  <p className="text-sm text-muted-foreground">适用于信息技术类投标项目</p>
                </div>
                <div className="border rounded-md p-4 hover:border-primary cursor-pointer">
                  <h3 className="font-medium mb-1">工程服务模板</h3>
                  <p className="text-sm text-muted-foreground">适用于工程类投标项目</p>
                </div>
                <div className="border rounded-md p-4 hover:border-primary cursor-pointer">
                  <h3 className="font-medium mb-1">货物供应模板</h3>
                  <p className="text-sm text-muted-foreground">适用于货物供应类投标项目</p>
                </div>
              </div>
              <div className="flex justify-end">
                <Button variant="outline" className="mr-2">导入模板</Button>
                <Button>创建自定义模板</Button>
              </div>
            </div>
            <div className="flex justify-between mt-4">
              <Button variant="outline" onClick={handlePrevStep}>上一步</Button>
              <Button onClick={handleNextStep}>下一步</Button>
            </div>
          </CardContent>
        </Card>
      )}

      {currentStep === 5 && (
        <Card>
          <CardHeader>
            <CardTitle>第五步：图表生成</CardTitle>
            <CardDescription>生成和添加图表到文档中</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="flex flex-col space-y-4">
              <Textarea placeholder="描述您需要的图表，例如：'生成一个显示近5年项目完成率的折线图，数据分别为85%, 87%, 90%, 92%, 94%'..." />
              <div className="flex justify-end">
                <Button>生成图表</Button>
              </div>
              <div className="border rounded-lg p-6 min-h-[300px] flex items-center justify-center">
                <p className="text-muted-foreground">输入描述生成图表...</p>
              </div>
            </div>
            <div className="flex justify-between mt-4">
              <Button variant="outline" onClick={handlePrevStep}>上一步</Button>
              <Button>
                <Download className="mr-2 h-4 w-4" />
                导出文档
              </Button>
            </div>
          </CardContent>
        </Card>
      )}
    </div>
  );
};

export default DocumentCreator;
