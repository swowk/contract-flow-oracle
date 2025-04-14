
import { useState } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import { AlertCircle, ArrowRight, BarChart2, Building, ChevronDown, FileText, Flag, Shield, Search } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Progress } from "@/components/ui/progress";
import { cn } from "@/lib/utils";

const SupplierRiskMonitor = () => {
  const [searchQuery, setSearchQuery] = useState("");
  
  // Mock supplier risk data
  const supplierRisks = [
    {
      id: 1,
      name: "恒方电子技术有限公司",
      riskLevel: "high",
      riskScore: 85,
      riskFactors: [
        { type: "legal", description: "近期涉及3起知识产权纠纷诉讼", severity: "high", date: "2024-03-10" },
        { type: "financial", description: "企业账户出现异常大额资金转出", severity: "high", date: "2024-03-05" },
        { type: "operation", description: "核心技术人员离职率超过25%", severity: "medium", date: "2024-02-20" }
      ],
      lastUpdated: "2024-03-15"
    },
    {
      id: 2,
      name: "中科信息技术有限公司",
      riskLevel: "medium",
      riskScore: 65,
      riskFactors: [
        { type: "legal", description: "1起合同履约纠纷案件", severity: "medium", date: "2024-02-28" },
        { type: "financial", description: "财务报表显示负债率上升", severity: "medium", date: "2024-01-15" },
      ],
      lastUpdated: "2024-03-12"
    },
    {
      id: 3,
      name: "世纪通讯设备有限公司",
      riskLevel: "low",
      riskScore: 35,
      riskFactors: [
        { type: "operation", description: "部分产品交付延期", severity: "low", date: "2024-02-10" },
      ],
      lastUpdated: "2024-03-08"
    },
    {
      id: 4,
      name: "北方数据系统有限公司",
      riskLevel: "high",
      riskScore: 78,
      riskFactors: [
        { type: "compliance", description: "未按时更新信息安全资质", severity: "high", date: "2024-03-01" },
        { type: "reputation", description: "媒体报道服务质量问题", severity: "medium", date: "2024-02-25" },
      ],
      lastUpdated: "2024-03-10"
    },
  ];
  
  // Filter suppliers based on search
  const filteredSuppliers = supplierRisks.filter(supplier =>
    supplier.name.toLowerCase().includes(searchQuery.toLowerCase())
  );
  
  // Helper function to get risk level color
  const getRiskLevelColor = (level) => {
    switch(level) {
      case "high": return "bg-red-100 text-red-800 border-red-200";
      case "medium": return "bg-amber-100 text-amber-800 border-amber-200";
      case "low": return "bg-green-100 text-green-800 border-green-200";
      default: return "bg-gray-100 text-gray-800 border-gray-200";
    }
  };
  
  // Helper function to get risk level text
  const getRiskLevelText = (level) => {
    switch(level) {
      case "high": return "高风险";
      case "medium": return "中风险";
      case "low": return "低风险";
      default: return "未知";
    }
  };
  
  return (
    <div className="space-y-6">
      <Card>
        <CardHeader>
          <CardTitle>供应商风险监控</CardTitle>
          <CardDescription>实时监控供应商潜在风险，及时预警</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="flex justify-between items-center mb-6">
            <div className="flex space-x-4">
              <Badge variant="outline" className={cn("px-3 py-1", getRiskLevelColor("high"))}>
                高风险: 2
              </Badge>
              <Badge variant="outline" className={cn("px-3 py-1", getRiskLevelColor("medium"))}>
                中风险: 1
              </Badge>
              <Badge variant="outline" className={cn("px-3 py-1", getRiskLevelColor("low"))}>
                低风险: 1
              </Badge>
            </div>
            
            <div className="relative">
              <Search className="absolute left-2 top-2.5 h-4 w-4 text-muted-foreground" />
              <Input
                placeholder="搜索供应商..."
                className="pl-8 w-[250px]"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
            </div>
          </div>
          
          <Alert variant="destructive" className="mb-6">
            <AlertCircle className="h-4 w-4" />
            <AlertTitle>高风险预警</AlertTitle>
            <AlertDescription>
              恒方电子技术有限公司存在严重风险，建议暂停合作并进行风险评估。
            </AlertDescription>
          </Alert>
          
          <div className="space-y-6">
            {filteredSuppliers.map((supplier) => (
              <Card key={supplier.id} className={`border ${supplier.riskLevel === 'high' ? 'border-red-300' : ''}`}>
                <CardContent className="p-6">
                  <div className="flex flex-col md:flex-row justify-between">
                    <div className="flex-1">
                      <div className="flex items-start justify-between">
                        <div>
                          <h3 className="text-lg font-semibold flex items-center">
                            {supplier.name}
                            {supplier.riskLevel === 'high' && (
                              <AlertCircle className="h-4 w-4 ml-2 text-red-500" />
                            )}
                          </h3>
                          <div className="flex items-center mt-1 text-sm text-muted-foreground">
                            <Shield className="h-4 w-4 mr-1" />
                            <span>最近更新: {supplier.lastUpdated}</span>
                          </div>
                        </div>
                        
                        <div className="text-right">
                          <Badge 
                            variant="outline" 
                            className={cn("px-3 py-1", getRiskLevelColor(supplier.riskLevel))}
                          >
                            {getRiskLevelText(supplier.riskLevel)}
                          </Badge>
                          <div className="text-sm mt-2">
                            风险指数: <span className="font-semibold">{supplier.riskScore}</span>
                          </div>
                        </div>
                      </div>
                      
                      <div className="mt-4">
                        <div className="text-sm font-medium mb-2">风险指数趋势</div>
                        <Progress 
                          value={supplier.riskScore} 
                          className={cn(
                            "h-2",
                            supplier.riskScore > 70 ? "bg-red-100" : 
                            supplier.riskScore > 40 ? "bg-amber-100" : "bg-green-100",
                          )}
                          indicatorClassName={
                            supplier.riskScore > 70 ? "bg-red-500" : 
                            supplier.riskScore > 40 ? "bg-amber-500" : "bg-green-500"
                          }
                        />
                      </div>
                      
                      <div className="mt-4">
                        <div className="text-sm font-medium mb-2">风险因素</div>
                        <div className="space-y-2">
                          {supplier.riskFactors.map((factor, index) => (
                            <div
                              key={index}
                              className={cn(
                                "p-3 rounded-md text-sm",
                                factor.severity === 'high' ? "bg-red-50 border border-red-100" :
                                factor.severity === 'medium' ? "bg-amber-50 border border-amber-100" :
                                "bg-green-50 border border-green-100"
                              )}
                            >
                              <div className="flex items-center justify-between">
                                <div className="flex items-center">
                                  {factor.type === 'legal' && <FileText className="h-4 w-4 mr-2" />}
                                  {factor.type === 'financial' && <BarChart2 className="h-4 w-4 mr-2" />}
                                  {factor.type === 'operation' && <Building className="h-4 w-4 mr-2" />}
                                  {factor.type === 'compliance' && <Flag className="h-4 w-4 mr-2" />}
                                  {factor.type === 'reputation' && <Flag className="h-4 w-4 mr-2" />}
                                  <span>{factor.description}</span>
                                </div>
                                <span className="text-muted-foreground text-xs">
                                  发现于: {factor.date}
                                </span>
                              </div>
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                  
                  <div className="flex justify-end mt-4 space-x-2">
                    <Button variant="outline">查看历史记录</Button>
                    <Button variant="destructive">处置风险</Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default SupplierRiskMonitor;
