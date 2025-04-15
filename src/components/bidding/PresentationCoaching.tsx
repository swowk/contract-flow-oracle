
import { useState } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { Upload, MessageSquare, BookOpen, ShieldAlert } from "lucide-react";

const PresentationCoaching = () => {
  const [activeTab, setActiveTab] = useState("analysis");
  
  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <div>
          <h2 className="text-3xl font-bold">智能述标辅导</h2>
          <p className="text-muted-foreground mt-1">优化述标策略，提升答辩效果</p>
        </div>
      </div>
      
      <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
        <TabsList className="grid w-full grid-cols-3">
          <TabsTrigger value="analysis">招标方分析</TabsTrigger>
          <TabsTrigger value="strategies">话术策略</TabsTrigger>
          <TabsTrigger value="qa">答辩训练</TabsTrigger>
        </TabsList>
        
        <TabsContent value="analysis" className="pt-6">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center">
                <Upload className="mr-2 h-5 w-5" />
                招标文件分析
              </CardTitle>
              <CardDescription>上传招标文件进行招标方画像分析</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="flex flex-col space-y-4">
                <div className="border rounded-md p-8 flex flex-col items-center justify-center">
                  <Upload className="h-10 w-10 text-muted-foreground mb-2" />
                  <p className="text-sm text-muted-foreground">点击上传招标文件</p>
                  <p className="text-xs text-muted-foreground">支持PDF、DOC格式</p>
                </div>
                <Button>开始分析</Button>
                
                <div className="border-t pt-4 mt-4">
                  <h3 className="font-medium mb-2">招标方画像分析结果</h3>
                  <div className="bg-slate-50 rounded-md p-4 min-h-[200px] flex items-center justify-center">
                    <p className="text-muted-foreground">上传招标文件开始分析...</p>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
        
        <TabsContent value="strategies" className="pt-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center">
                  <BookOpen className="mr-2 h-5 w-5" />
                  话术策略库
                </CardTitle>
                <CardDescription>按项目类型选择适合的话术策略</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="grid grid-cols-1 gap-2">
                    <Button variant="outline" className="justify-start">IT服务类项目话术策略</Button>
                    <Button variant="outline" className="justify-start">工程建设类项目话术策略</Button>
                    <Button variant="outline" className="justify-start">货物采购类项目话术策略</Button>
                    <Button variant="outline" className="justify-start">咨询服务类项目话术策略</Button>
                    <Button variant="outline" className="justify-start">创新技术类项目话术策略</Button>
                  </div>
                </div>
              </CardContent>
            </Card>
            
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center">
                  <MessageSquare className="mr-2 h-5 w-5" />
                  话术生成
                </CardTitle>
                <CardDescription>根据项目特点生成个性化话术</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex flex-col space-y-4">
                  <Textarea placeholder="请描述项目特点及招标方关注点..." className="min-h-[120px]" />
                  <Button>生成话术建议</Button>
                  
                  <div className="border rounded-md p-4 min-h-[150px] bg-slate-50 flex items-center justify-center">
                    <p className="text-muted-foreground">输入项目信息生成话术建议...</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </TabsContent>
        
        <TabsContent value="qa" className="pt-6">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center">
                <ShieldAlert className="mr-2 h-5 w-5" />
                模拟答辩训练
              </CardTitle>
              <CardDescription>基于招标文件风险条款的答辩模拟训练</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="flex flex-col space-y-6">
                <div className="border rounded-md p-4">
                  <h3 className="font-medium mb-2">风险条款预测</h3>
                  <div className="bg-slate-50 rounded-md p-4 min-h-[80px] flex items-center justify-center">
                    <p className="text-muted-foreground">上传招标文件后将显示潜在风险条款...</p>
                  </div>
                  <Button className="mt-4 w-full">生成风险问题</Button>
                </div>
                
                <div className="border-t pt-4">
                  <h3 className="font-medium mb-2">模拟问答训练</h3>
                  <div className="space-y-4 mt-4">
                    <div className="bg-blue-50 p-4 rounded-md">
                      <p className="font-medium text-blue-700">模拟问题:</p>
                      <p className="mt-1">您如何确保在项目实施过程中不会超出招标文件规定的时间范围？</p>
                    </div>
                    
                    <Textarea placeholder="输入你的回答..." className="min-h-[100px]" />
                    
                    <Button>提交回答</Button>
                    
                    <div className="bg-slate-50 rounded-md p-4 min-h-[80px] flex items-center justify-center">
                      <p className="text-muted-foreground">提交回答后显示评估结果...</p>
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

export default PresentationCoaching;
