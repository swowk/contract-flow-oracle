
import { useState } from "react";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Check, Info, Award, Building2, Users, BarChart, Star, Clock } from "lucide-react";
import { Progress } from "@/components/ui/progress";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Checkbox } from "@/components/ui/checkbox";
import { Label } from "@/components/ui/label";
import { Switch } from "@/components/ui/switch";

const SupplierMatchingSystem = () => {
  const [industryFilter, setIndustryFilter] = useState("it");
  const [regionFilter, setRegionFilter] = useState("all");
  const [showFilterPanel, setShowFilterPanel] = useState(false);
  
  // Mock supplier data
  const suppliers = [
    {
      id: 1,
      name: "北京科技创新有限公司",
      industry: "IT服务",
      region: "华北",
      registeredCapital: "1000万",
      establishedYear: 2010,
      qualifications: ["ISO9001", "CMMI3", "信息系统集成一级"],
      matchScore: 95,
      recentProjects: 5,
      tags: ["大型企业", "国企背景", "上市公司"],
      advantages: ["丰富的政府项目经验", "技术团队规模大", "资金实力雄厚"],
      risks: []
    },
    {
      id: 2,
      name: "上海智慧系统有限公司",
      industry: "系统集成",
      region: "华东",
      registeredCapital: "800万",
      establishedYear: 2012,
      qualifications: ["ISO9001", "CMMI3", "信息系统集成二级"],
      matchScore: 87,
      recentProjects: 3,
      tags: ["民营企业", "技术创新", "专业服务"],
      advantages: ["方案定制化能力强", "响应速度快", "性价比高"],
      risks: ["企业规模较小"]
    },
    {
      id: 3,
      name: "深圳数字技术有限公司",
      industry: "IT服务",
      region: "华南",
      registeredCapital: "1200万",
      establishedYear: 2008,
      qualifications: ["ISO9001", "ISO27001", "CMMI4", "信息系统集成一级"],
      matchScore: 92,
      recentProjects: 8,
      tags: ["高新技术企业", "外资背景", "行业领先"],
      advantages: ["技术研发实力强", "服务网络覆盖广", "成功案例多"],
      risks: []
    },
    {
      id: 4,
      name: "成都云计算科技有限公司",
      industry: "软件开发",
      region: "西南",
      registeredCapital: "500万",
      establishedYear: 2015,
      qualifications: ["ISO9001", "CMMI2", "软件企业认证"],
      matchScore: 78,
      recentProjects: 2,
      tags: ["创新型企业", "专注云服务", "成长型"],
      advantages: ["技术团队专业性强", "解决方案创新", "服务态度好"],
      risks: ["成立时间较短", "项目经验有限"]
    },
    {
      id: 5,
      name: "武汉信息工程有限公司",
      industry: "系统集成",
      region: "华中",
      registeredCapital: "700万",
      establishedYear: 2011,
      qualifications: ["ISO9001", "信息系统集成二级"],
      matchScore: 82,
      recentProjects: 4,
      tags: ["区域龙头", "本地化服务", "政府资源丰富"],
      advantages: ["本地化服务能力强", "政府关系良好", "售后响应及时"],
      risks: ["业务区域集中"]
    }
  ];
  
  return (
    <div className="space-y-6">
      <Card>
        <CardHeader>
          <CardTitle>供应商智能匹配</CardTitle>
          <CardDescription>根据项目需求智能推荐符合条件的供应商</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="mb-6 grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="space-y-2">
              <Label htmlFor="project-type">项目类型</Label>
              <Select value={industryFilter} onValueChange={setIndustryFilter}>
                <SelectTrigger id="project-type">
                  <SelectValue placeholder="选择项目类型" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="it">IT服务</SelectItem>
                  <SelectItem value="system">系统集成</SelectItem>
                  <SelectItem value="software">软件开发</SelectItem>
                </SelectContent>
              </Select>
            </div>
            
            <div className="space-y-2">
              <Label htmlFor="region">区域选择</Label>
              <Select value={regionFilter} onValueChange={setRegionFilter}>
                <SelectTrigger id="region">
                  <SelectValue placeholder="选择区域" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">全国</SelectItem>
                  <SelectItem value="north">华北地区</SelectItem>
                  <SelectItem value="east">华东地区</SelectItem>
                  <SelectItem value="south">华南地区</SelectItem>
                  <SelectItem value="central">华中地区</SelectItem>
                  <SelectItem value="southwest">西南地区</SelectItem>
                </SelectContent>
              </Select>
            </div>
            
            <div className="flex items-end">
              <Button className="w-full" onClick={() => setShowFilterPanel(!showFilterPanel)}>
                {showFilterPanel ? "收起筛选" : "更多筛选条件"}
              </Button>
            </div>
          </div>
          
          {showFilterPanel && (
            <div className="mb-6 grid grid-cols-1 md:grid-cols-4 gap-4 p-4 bg-gray-50 rounded-md">
              <div className="space-y-2">
                <Label>企业规模</Label>
                <div className="space-y-2">
                  <div className="flex items-center space-x-2">
                    <Checkbox id="scale-large" />
                    <Label htmlFor="scale-large" className="font-normal">大型企业</Label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Checkbox id="scale-medium" />
                    <Label htmlFor="scale-medium" className="font-normal">中型企业</Label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Checkbox id="scale-small" />
                    <Label htmlFor="scale-small" className="font-normal">小型企业</Label>
                  </div>
                </div>
              </div>
              
              <div className="space-y-2">
                <Label>企业资质</Label>
                <div className="space-y-2">
                  <div className="flex items-center space-x-2">
                    <Checkbox id="qual-iso9001" />
                    <Label htmlFor="qual-iso9001" className="font-normal">ISO9001</Label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Checkbox id="qual-iso27001" />
                    <Label htmlFor="qual-iso27001" className="font-normal">ISO27001</Label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Checkbox id="qual-cmmi3" />
                    <Label htmlFor="qual-cmmi3" className="font-normal">CMMI3及以上</Label>
                  </div>
                </div>
              </div>
              
              <div className="space-y-2">
                <Label>注册资本</Label>
                <div className="space-y-2">
                  <div className="flex items-center space-x-2">
                    <Checkbox id="capital-500" />
                    <Label htmlFor="capital-500" className="font-normal">500万以上</Label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Checkbox id="capital-1000" />
                    <Label htmlFor="capital-1000" className="font-normal">1000万以上</Label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Checkbox id="capital-5000" />
                    <Label htmlFor="capital-5000" className="font-normal">5000万以上</Label>
                  </div>
                </div>
              </div>
              
              <div className="space-y-2">
                <Label>其他条件</Label>
                <div className="space-y-2">
                  <div className="flex items-center space-x-2">
                    <Checkbox id="other-hightech" />
                    <Label htmlFor="other-hightech" className="font-normal">高新技术企业</Label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Checkbox id="other-public" />
                    <Label htmlFor="other-public" className="font-normal">上市公司</Label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Switch id="exclude-blacklist" />
                    <Label htmlFor="exclude-blacklist" className="font-normal">排除黑名单企业</Label>
                  </div>
                </div>
              </div>
            </div>
          )}
          
          <div className="space-y-6">
            {suppliers.map((supplier) => (
              <Card key={supplier.id} className={supplier.matchScore >= 90 ? "border-green-200" : ""}>
                <CardContent className="p-6">
                  <div className="flex flex-col md:flex-row justify-between">
                    <div className="flex-1">
                      <div className="flex items-start justify-between">
                        <div>
                          <h3 className="text-lg font-semibold">{supplier.name}</h3>
                          <div className="flex items-center mt-1 text-sm text-muted-foreground">
                            <Building2 className="h-4 w-4 mr-1" />
                            <span className="mr-3">{supplier.industry}</span>
                            <Users className="h-4 w-4 mr-1" />
                            <span className="mr-3">{supplier.region}</span>
                            <Clock className="h-4 w-4 mr-1" />
                            <span>成立于 {supplier.establishedYear}年</span>
                          </div>
                        </div>
                        <div className="text-right">
                          <div className="inline-block px-3 py-1 rounded-full bg-green-100 text-green-800 font-medium">
                            匹配度: {supplier.matchScore}%
                          </div>
                          <div className="text-sm text-muted-foreground mt-1">
                            近6月中标: {supplier.recentProjects} 个项目
                          </div>
                        </div>
                      </div>
                      
                      <div className="mt-4 grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-2">
                        <div>
                          <div className="text-sm font-medium mb-1">企业资质</div>
                          <div className="flex flex-wrap gap-2">
                            {supplier.qualifications.map((qual, index) => (
                              <Badge key={index} variant="outline" className="bg-blue-50">
                                {qual}
                              </Badge>
                            ))}
                          </div>
                        </div>
                        
                        <div>
                          <div className="text-sm font-medium mb-1">企业特点</div>
                          <div className="flex flex-wrap gap-2">
                            {supplier.tags.map((tag, index) => (
                              <Badge key={index} variant="outline" className="bg-purple-50">
                                {tag}
                              </Badge>
                            ))}
                          </div>
                        </div>
                        
                        <div className="mt-2">
                          <div className="text-sm font-medium mb-1 flex items-center">
                            <Award className="h-4 w-4 mr-1 text-green-600" />
                            优势
                          </div>
                          <ul className="text-sm list-disc pl-5 space-y-0.5">
                            {supplier.advantages.map((adv, index) => (
                              <li key={index}>{adv}</li>
                            ))}
                          </ul>
                        </div>
                        
                        {supplier.risks.length > 0 && (
                          <div className="mt-2">
                            <div className="text-sm font-medium mb-1 flex items-center">
                              <Info className="h-4 w-4 mr-1 text-amber-600" />
                              风险提示
                            </div>
                            <ul className="text-sm list-disc pl-5 space-y-0.5 text-amber-700">
                              {supplier.risks.map((risk, index) => (
                                <li key={index}>{risk}</li>
                              ))}
                            </ul>
                          </div>
                        )}
                      </div>
                    </div>
                  </div>
                  
                  <div className="flex justify-end mt-4 space-x-2">
                    <Button variant="outline">查看详情</Button>
                    <Button>选择供应商</Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </CardContent>
        <CardFooter className="flex justify-between border-t px-6 py-4">
          <div className="text-sm text-muted-foreground">
            共找到 28 家符合条件的供应商
          </div>
          <div className="flex items-center space-x-2">
            <Button variant="outline" size="sm">上一页</Button>
            <Button variant="outline" size="sm">下一页</Button>
          </div>
        </CardFooter>
      </Card>
    </div>
  );
};

export default SupplierMatchingSystem;
