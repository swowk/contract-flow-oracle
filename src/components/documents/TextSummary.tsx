
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";
import { Download, FileText, Copy } from "lucide-react";

const TextSummary = () => {
  return (
    <div className="space-y-6">
      <Card>
        <CardHeader>
          <CardTitle>投标文件摘要</CardTitle>
          <CardDescription>自动生成关键信息摘要和优势点提炼</CardDescription>
        </CardHeader>
        <CardContent>
          <Tabs defaultValue="summary" className="w-full">
            <TabsList className="grid w-full grid-cols-3 mb-6">
              <TabsTrigger value="summary">关键信息摘要</TabsTrigger>
              <TabsTrigger value="advantages">差异化优势</TabsTrigger>
              <TabsTrigger value="risks">潜在风险点</TabsTrigger>
            </TabsList>
            
            <TabsContent value="summary">
              <div className="rounded-lg border overflow-hidden">
                <div className="bg-gray-100 p-2 border-b flex justify-between items-center">
                  <div className="text-sm font-medium">商务与技术摘要</div>
                  <div className="flex items-center space-x-2">
                    <Button variant="ghost" size="sm">
                      <Copy className="h-4 w-4 mr-2" />
                      复制
                    </Button>
                    <Button variant="ghost" size="sm">
                      <Download className="h-4 w-4 mr-2" />
                      下载
                    </Button>
                  </div>
                </div>
                
                <div className="p-4 space-y-4">
                  <h3 className="font-medium text-lg">项目概述</h3>
                  <p>本投标文件针对智慧园区建设项目，提供完整的软硬件解决方案。方案整体预算为400万元，项目周期为8个月。</p>
                  
                  <h3 className="font-medium text-lg">商务要点</h3>
                  <ul className="list-disc pl-5 space-y-1">
                    <li>投标人具备10年行业经验，已完成30+同类项目实施</li>
                    <li>拥有ISO9001、ISO27001等多项国际认证</li>
                    <li>核心团队成员平均8年以上行业经验，覆盖架构设计、开发、测试等关键岗位</li>
                    <li>提供3年质保期和7×24小时技术支持</li>
                  </ul>
                  
                  <h3 className="font-medium text-lg">技术要点</h3>
                  <ul className="list-disc pl-5 space-y-1">
                    <li>采用微服务架构，支持横向扩展，系统并发用户可达1500+</li>
                    <li>系统平均响应时间≤150ms，优于招标需求的200ms</li>
                    <li>采用多级容灾备份策略，系统可用性达99.95%</li>
                    <li>全面符合国家安全等级保护三级要求</li>
                    <li>支持多终端访问，包括PC、移动设备、大屏等</li>
                  </ul>
                </div>
              </div>
            </TabsContent>
            
            <TabsContent value="advantages">
              <div className="rounded-lg border overflow-hidden">
                <div className="bg-gray-100 p-2 border-b flex justify-between items-center">
                  <div className="text-sm font-medium">差异化优势分析</div>
                  <div className="flex items-center space-x-2">
                    <Button variant="ghost" size="sm">
                      <Copy className="h-4 w-4 mr-2" />
                      复制
                    </Button>
                  </div>
                </div>
                
                <div className="p-4 space-y-4">
                  <p className="mb-4">基于招标文件评分标准和竞争对手分析，以下是本方案的核心差异化优势：</p>
                  
                  <div className="space-y-4">
                    <div className="p-3 bg-green-50 rounded-md">
                      <h4 className="font-medium">技术优势</h4>
                      <ul className="list-disc pl-5 mt-2 space-y-1">
                        <li>自研AI引擎，准确率高于行业平均水平20%</li>
                        <li>系统响应时间（150ms）优于招标要求（200ms）</li>
                        <li>数据处理能力超出需求规格50%，具备更强的扩展性</li>
                      </ul>
                    </div>
                    
                    <div className="p-3 bg-blue-50 rounded-md">
                      <h4 className="font-medium">商务优势</h4>
                      <ul className="list-disc pl-5 mt-2 space-y-1">
                        <li>行业经验（10年）超过评分要求（5年）的2倍</li>
                        <li>本地化服务团队，响应时间较竞争对手缩短50%</li>
                        <li>质保期（3年）优于招标最低要求（2年）</li>
                      </ul>
                    </div>
                    
                    <div className="p-3 bg-purple-50 rounded-md">
                      <h4 className="font-medium">成本效益优势</h4>
                      <ul className="list-disc pl-5 mt-2 space-y-1">
                        <li>采用云原生架构，运维成本较传统方案降低30%</li>
                        <li>模块化设计，未来扩展投入可降低25%</li>
                        <li>能源效率优化设计，运行成本较行业平均水平节省15%</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </TabsContent>
            
            <TabsContent value="risks">
              <div className="rounded-lg border overflow-hidden">
                <div className="bg-gray-100 p-2 border-b flex justify-between items-center">
                  <div className="text-sm font-medium">潜在风险点分析</div>
                  <div className="flex items-center space-x-2">
                    <Button variant="ghost" size="sm">
                      <Copy className="h-4 w-4 mr-2" />
                      复制
                    </Button>
                  </div>
                </div>
                
                <div className="p-4 space-y-4">
                  <p className="mb-4">系统自动识别的投标文件中存在的潜在风险点：</p>
                  
                  <div className="space-y-4">
                    <div className="p-3 bg-red-50 rounded-md">
                      <h4 className="font-medium">高风险项</h4>
                      <ul className="list-disc pl-5 mt-2 space-y-1">
                        <li>缺少特定行业应用案例，可能导致技术方案得分降低</li>
                        <li>部分技术指标与招标文件描述不符，需调整</li>
                      </ul>
                    </div>
                    
                    <div className="p-3 bg-amber-50 rounded-md">
                      <h4 className="font-medium">中风险项</h4>
                      <ul className="list-disc pl-5 mt-2 space-y-1">
                        <li>项目实施周期（8个月）接近招标要求上限（9个月），评分可能不占优势</li>
                        <li>团队配置略低于同类项目平均水平，可能影响服务质量评分</li>
                        <li>报价在预算区间上限，价格分可能不占优势</li>
                      </ul>
                    </div>
                    
                    <div className="p-3 bg-gray-100 rounded-md">
                      <h4 className="font-medium">改进建议</h4>
                      <ul className="list-disc pl-5 mt-2 space-y-1">
                        <li>补充特定行业应用案例，强化技术方案的针对性</li>
                        <li>调整不符合招标要求的技术指标，确保满足基本要求</li>
                        <li>优化项目实施计划，尝试缩短关键路径周期</li>
                        <li>重新评估预算分配，考虑调整总报价以提高价格竞争力</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </TabsContent>
          </Tabs>
        </CardContent>
      </Card>
    </div>
  );
};

export default TextSummary;
