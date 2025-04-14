
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Select, SelectContent, SelectGroup, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

const DocumentComparison = () => {
  const diffHighlightStyles = {
    addition: "bg-green-100 text-green-800",
    deletion: "bg-red-100 text-red-800 line-through",
    modification: "bg-amber-100 text-amber-800"
  };
  
  return (
    <div className="space-y-6">
      <Card>
        <CardHeader>
          <CardTitle>文件版本对比</CardTitle>
          <CardDescription>选择两个文件版本进行差异比对</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="flex items-center space-x-4 mb-6">
            <div className="grid grid-cols-2 gap-4 flex-1">
              <div>
                <label className="text-sm font-medium mb-1 block">版本 A</label>
                <Select defaultValue="v1">
                  <SelectTrigger>
                    <SelectValue placeholder="选择文件版本" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectGroup>
                      <SelectItem value="v1">投标文件 V1.0 (2023-03-10)</SelectItem>
                      <SelectItem value="v2">投标文件 V1.1 (2023-03-15)</SelectItem>
                      <SelectItem value="v3">投标文件 V1.2 (2023-03-20)</SelectItem>
                    </SelectGroup>
                  </SelectContent>
                </Select>
              </div>
              
              <div>
                <label className="text-sm font-medium mb-1 block">版本 B</label>
                <Select defaultValue="v3">
                  <SelectTrigger>
                    <SelectValue placeholder="选择文件版本" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectGroup>
                      <SelectItem value="v1">投标文件 V1.0 (2023-03-10)</SelectItem>
                      <SelectItem value="v2">投标文件 V1.1 (2023-03-15)</SelectItem>
                      <SelectItem value="v3">投标文件 V1.2 (2023-03-20)</SelectItem>
                    </SelectGroup>
                  </SelectContent>
                </Select>
              </div>
            </div>
            
            <Button>对比文件</Button>
          </div>
          
          <div className="rounded-lg border overflow-hidden">
            <div className="bg-gray-100 p-2 border-b flex justify-between items-center">
              <div className="text-sm font-medium">差异对比结果</div>
              <div className="flex items-center space-x-2 text-xs">
                <span className={cn("px-2 py-0.5 rounded", diffHighlightStyles.addition)}>添加</span>
                <span className={cn("px-2 py-0.5 rounded", diffHighlightStyles.deletion)}>删除</span>
                <span className={cn("px-2 py-0.5 rounded", diffHighlightStyles.modification)}>修改</span>
              </div>
            </div>
            
            <div className="p-4 space-y-6 text-sm">
              <div>
                <h4 className="font-medium mb-2">3.1 技术方案</h4>
                <p className="mb-2">
                  本项目将采用<span className={diffHighlightStyles.deletion}>模块化</span>
                  <span className={diffHighlightStyles.addition}>微服务</span>架构，
                  <span className={diffHighlightStyles.deletion}>确保系统稳定性和扩展性</span>
                  <span className={diffHighlightStyles.addition}>提高系统的灵活性和可扩展性</span>。
                </p>
                <p className="mb-2">
                  系统核心功能包括：
                </p>
                <ul className="list-disc pl-5 space-y-1">
                  <li>用户管理与权限控制</li>
                  <li>数据采集与存储</li>
                  <li><span className={diffHighlightStyles.addition}>实时数据分析</span></li>
                  <li>报表生成与导出</li>
                  <li><span className={diffHighlightStyles.deletion}>移动端访问支持</span></li>
                </ul>
              </div>
              
              <div>
                <h4 className="font-medium mb-2">5.2 项目团队</h4>
                <p className="mb-2">
                  项目经理：张工（<span className={diffHighlightStyles.deletion}>5年项目管理经验</span>
                  <span className={diffHighlightStyles.addition}>8年项目管理经验，PMP认证</span>）
                </p>
                <p className="mb-2">
                  核心技术人员：
                </p>
                <ul className="list-disc pl-5 space-y-1">
                  <li>系统架构师：李工（10年经验）</li>
                  <li>开发工程师：王工、赵工<span className={diffHighlightStyles.addition}>、刘工</span></li>
                  <li><span className={diffHighlightStyles.modification}>测试工程师：陈工（ISTQB认证）</span></li>
                </ul>
              </div>
              
              <div>
                <h4 className="font-medium mb-2">7.3 报价明细</h4>
                <table className="min-w-full border-collapse">
                  <thead>
                    <tr className="border-b">
                      <th className="text-left p-2">项目</th>
                      <th className="text-right p-2">金额 (万元)</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr className="border-b">
                      <td className="p-2">硬件设备</td>
                      <td className={cn("text-right p-2", diffHighlightStyles.deletion)}>120</td>
                      <td className={cn("text-right p-2", diffHighlightStyles.addition)}>105</td>
                    </tr>
                    <tr className="border-b">
                      <td className="p-2">软件开发</td>
                      <td className="text-right p-2">150</td>
                    </tr>
                    <tr className="border-b">
                      <td className="p-2">系统集成</td>
                      <td className="text-right p-2">80</td>
                    </tr>
                    <tr className="border-b">
                      <td className="p-2">实施部署</td>
                      <td className={cn("text-right p-2", diffHighlightStyles.deletion)}>50</td>
                      <td className={cn("text-right p-2", diffHighlightStyles.addition)}>65</td>
                    </tr>
                    <tr>
                      <td className="p-2 font-medium">总计</td>
                      <td className={cn("text-right p-2 font-medium", diffHighlightStyles.deletion)}>400</td>
                      <td className={cn("text-right p-2 font-medium", diffHighlightStyles.addition)}>400</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default DocumentComparison;
