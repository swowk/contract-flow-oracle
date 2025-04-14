
import { useState } from "react";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";
import { FileUp, FileText, FileDiff, FileCheck, Upload } from "lucide-react";
import { Progress } from "@/components/ui/progress";
import { cn } from "@/lib/utils";
import DocumentComparison from "./DocumentComparison";
import TextSummary from "./TextSummary";
import DocumentOutline from "./DocumentOutline";

const DocumentAnalyzer = () => {
  const [activeTab, setActiveTab] = useState("upload");
  const [uploadProgress, setUploadProgress] = useState(0);
  const [analyzing, setAnalyzing] = useState(false);
  const [isAnalyzed, setIsAnalyzed] = useState(false);

  const handleFileUpload = () => {
    // Simulate upload progress
    setUploadProgress(0);
    const timer = setInterval(() => {
      setUploadProgress((prev) => {
        if (prev >= 100) {
          clearInterval(timer);
          setAnalyzing(true);
          setTimeout(() => {
            setAnalyzing(false);
            setIsAnalyzed(true);
            setActiveTab("analysis");
          }, 2000);
          return 100;
        }
        return prev + 10;
      });
    }, 300);
  };

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <div>
          <h2 className="text-3xl font-bold">投标文件分析</h2>
          <p className="text-muted-foreground mt-1">智能解析、拆分和比对投标文件</p>
        </div>
      </div>

      <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
        <TabsList className="grid grid-cols-4 w-[600px]">
          <TabsTrigger value="upload">
            <FileUp className="mr-2 h-4 w-4" /> 文件上传
          </TabsTrigger>
          <TabsTrigger value="analysis" disabled={!isAnalyzed}>
            <FileText className="mr-2 h-4 w-4" /> 文件分析
          </TabsTrigger>
          <TabsTrigger value="comparison" disabled={!isAnalyzed}>
            <FileDiff className="mr-2 h-4 w-4" /> 版本对比
          </TabsTrigger>
          <TabsTrigger value="summary" disabled={!isAnalyzed}>
            <FileCheck className="mr-2 h-4 w-4" /> 摘要生成
          </TabsTrigger>
        </TabsList>

        <TabsContent value="upload" className="pt-6">
          <Card>
            <CardHeader>
              <CardTitle>上传投标文件</CardTitle>
              <CardDescription>支持上传Word、PDF、Excel等格式的投标文件</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="border-2 border-dashed rounded-lg p-12 text-center border-gray-300 bg-gray-50 hover:bg-gray-100 transition-colors cursor-pointer">
                <div className="flex flex-col items-center">
                  <Upload className="h-10 w-10 text-gray-400 mb-4" />
                  <p className="mb-2 text-lg font-semibold">点击或拖拽文件到此区域</p>
                  <p className="text-sm text-gray-500">支持 PDF、DOCX、XLS 等格式文件</p>
                </div>
              </div>

              {uploadProgress > 0 && !analyzing && (
                <div className="mt-4">
                  <div className="flex justify-between text-sm mb-1">
                    <span>上传进度</span>
                    <span>{uploadProgress}%</span>
                  </div>
                  <Progress value={uploadProgress} className="h-2" />
                </div>
              )}

              {analyzing && (
                <div className="mt-4">
                  <div className="flex justify-between text-sm mb-1">
                    <span>正在分析文件内容...</span>
                    <span>请稍候</span>
                  </div>
                  <Progress value={100} className="h-2" />
                </div>
              )}
            </CardContent>
            <CardFooter className="flex justify-between">
              <Button variant="outline">取消</Button>
              <Button onClick={handleFileUpload}>上传文件</Button>
            </CardFooter>
          </Card>
        </TabsContent>

        <TabsContent value="analysis" className="pt-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <Card className="md:col-span-1">
              <CardHeader>
                <CardTitle>文件结构</CardTitle>
              </CardHeader>
              <CardContent>
                <DocumentOutline />
              </CardContent>
            </Card>

            <Card className="md:col-span-2">
              <CardHeader>
                <CardTitle>文件内容分析</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div>
                    <h3 className="font-medium mb-2">商务部分评分要点</h3>
                    <div className="text-sm bg-blue-50 p-4 rounded-md">
                      <ul className="list-disc pl-5 space-y-1">
                        <li>投标人具备ISO9001质量体系认证 (5分)</li>
                        <li>投标人至少3年以上同类项目经验 (10分)</li>
                        <li>项目团队成员资质符合要求 (8分)</li>
                      </ul>
                    </div>
                  </div>
                  
                  <div>
                    <h3 className="font-medium mb-2">技术部分评分要点</h3>
                    <div className="text-sm bg-green-50 p-4 rounded-md">
                      <ul className="list-disc pl-5 space-y-1">
                        <li>系统响应时间&lt;200ms (12分)</li>
                        <li>系统可用性&gt;99.9% (15分)</li>
                        <li>支持至少1000用户同时在线 (8分)</li>
                        <li>完整的数据备份和灾难恢复方案 (10分)</li>
                      </ul>
                    </div>
                  </div>
                  
                  <div>
                    <h3 className="font-medium mb-2">报价部分评分规则</h3>
                    <div className="text-sm bg-amber-50 p-4 rounded-md">
                      <p>价格分计算公式：</p>
                      <p className="font-medium mt-1">价格分 = (最低报价 / 投标报价) × 价格权重</p>
                      <p className="mt-2">价格权重：40分</p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </TabsContent>

        <TabsContent value="comparison" className="pt-6">
          <DocumentComparison />
        </TabsContent>

        <TabsContent value="summary" className="pt-6">
          <TextSummary />
        </TabsContent>
      </Tabs>
    </div>
  );
};

export default DocumentAnalyzer;
