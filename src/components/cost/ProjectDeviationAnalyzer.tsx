
import { useState } from "react";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer, Cell } from 'recharts';
import { FileUp, Download, AlertTriangle, CheckCircle2 } from "lucide-react";
import { Progress } from "@/components/ui/progress";
import { Switch } from "@/components/ui/switch";
import { Label } from "@/components/ui/label";

const mockDeviationData = [
  {
    category: "土建工程",
    items: [
      { name: "基础开挖", actual: 1200, reference: 1150, unit: "m³" },
      { name: "混凝土浇筑", actual: 850, reference: 780, unit: "m³" },
      { name: "钢筋绑扎", actual: 75, reference: 72, unit: "t" },
    ]
  },
  {
    category: "装饰工程",
    items: [
      { name: "墙面涂料", actual: 3500, reference: 3200, unit: "m²" },
      { name: "地砖铺设", actual: 1800, reference: 2000, unit: "m²" },
      { name: "吊顶安装", actual: 1500, reference: 1450, unit: "m²" },
    ]
  },
  {
    category: "电气工程",
    items: [
      { name: "线缆敷设", actual: 4500, reference: 5200, unit: "m" },
      { name: "配电柜安装", actual: 12, reference: 15, unit: "台" },
      { name: "灯具安装", actual: 320, reference: 300, unit: "套" },
    ]
  },
  {
    category: "水暖工程",
    items: [
      { name: "给水管道", actual: 2200, reference: 2500, unit: "m" },
      { name: "排水管道", actual: 1800, reference: 1700, unit: "m" },
      { name: "卫生洁具", actual: 45, reference: 50, unit: "套" },
    ]
  },
];

// Process the data for the bar chart
const processChartData = (data) => {
  return data.flatMap(category => {
    return category.items.map(item => {
      const deviation = ((item.actual - item.reference) / item.reference) * 100;
      return {
        name: item.name,
        deviation: parseFloat(deviation.toFixed(2)),
        category: category.category,
        actual: item.actual,
        reference: item.reference,
        unit: item.unit
      };
    });
  });
};

const chartData = processChartData(mockDeviationData);

const ProjectDeviationAnalyzer = () => {
  const [uploadProgress, setUploadProgress] = useState(0);
  const [analyzing, setAnalyzing] = useState(false);
  const [analysisComplete, setAnalysisComplete] = useState(false);
  const [showHighDeviationOnly, setShowHighDeviationOnly] = useState(false);
  
  // Filter data based on the toggle state
  const filteredData = showHighDeviationOnly
    ? chartData.filter(item => Math.abs(item.deviation) > 10)
    : chartData;
  
  const handleFileUpload = () => {
    // Simulate upload and analysis process
    setUploadProgress(0);
    setAnalysisComplete(false);
    
    const uploadTimer = setInterval(() => {
      setUploadProgress(prev => {
        if (prev >= 100) {
          clearInterval(uploadTimer);
          setAnalyzing(true);
          setTimeout(() => {
            setAnalyzing(false);
            setAnalysisComplete(true);
          }, 2000);
          return 100;
        }
        return prev + 10;
      });
    }, 300);
  };
  
  return (
    <div className="space-y-6">
      <Card>
        <CardHeader>
          <CardTitle>工程量清单偏差分析</CardTitle>
          <CardDescription>上传工程量清单，分析与历史项目的偏差</CardDescription>
        </CardHeader>
        <CardContent>
          {!analysisComplete ? (
            <>
              <div className="border-2 border-dashed rounded-lg p-8 text-center border-gray-300 bg-gray-50 hover:bg-gray-100 transition-colors cursor-pointer mb-6">
                <div className="flex flex-col items-center">
                  <FileUp className="h-8 w-8 text-gray-400 mb-4" />
                  <p className="mb-2 font-semibold">点击或拖拽工程量清单文件到此处</p>
                  <p className="text-sm text-gray-500">支持 Excel、PDF 格式</p>
                </div>
              </div>
              
              {uploadProgress > 0 && !analyzing && (
                <div className="mb-6">
                  <div className="flex justify-between text-sm mb-1">
                    <span>上传进度</span>
                    <span>{uploadProgress}%</span>
                  </div>
                  <Progress value={uploadProgress} className="h-2" />
                </div>
              )}
              
              {analyzing && (
                <div className="mb-6">
                  <div className="flex justify-between text-sm mb-1">
                    <span>正在分析工程量清单...</span>
                    <span>请稍候</span>
                  </div>
                  <Progress value={100} className="h-2" />
                </div>
              )}
              
              <div className="flex justify-center">
                <Button onClick={handleFileUpload}>上传并分析</Button>
              </div>
            </>
          ) : (
            <>
              <div className="flex justify-between items-center mb-6">
                <div className="flex items-center space-x-2">
                  <Switch
                    id="high-deviation"
                    checked={showHighDeviationOnly}
                    onCheckedChange={setShowHighDeviationOnly}
                  />
                  <Label htmlFor="high-deviation">仅显示高偏差项目 ({">"} 10%)</Label>
                </div>
                
                <Button variant="outline" size="sm">
                  <Download className="h-4 w-4 mr-2" />
                  导出分析报告
                </Button>
              </div>
              
              <div className="h-[400px]">
                <ResponsiveContainer width="100%" height="100%">
                  <BarChart
                    data={filteredData}
                    layout="vertical"
                    margin={{ top: 5, right: 30, left: 120, bottom: 5 }}
                  >
                    <CartesianGrid strokeDasharray="3 3" horizontal={false} />
                    <XAxis type="number" domain={[-30, 30]} />
                    <YAxis dataKey="name" type="category" width={120} />
                    <Tooltip
                      formatter={(value, name, props) => {
                        if (name === 'deviation') {
                          return [`${value}% (${props.payload.actual} vs ${props.payload.reference} ${props.payload.unit})`, '偏差率'];
                        }
                        return [value, name];
                      }}
                    />
                    <Legend />
                    <Bar dataKey="deviation" name="偏差率 (%)" fill="#8884d8">
                      {filteredData.map((entry, index) => (
                        <Cell 
                          key={`cell-${index}`} 
                          fill={entry.deviation > 10 ? '#ff4d4f' : 
                                entry.deviation < -10 ? '#faad14' : 
                                '#52c41a'} 
                        />
                      ))}
                    </Bar>
                  </BarChart>
                </ResponsiveContainer>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-6">
                <Card className="bg-red-50 border-red-200">
                  <CardContent className="pt-6">
                    <div className="flex items-center">
                      <AlertTriangle className="h-8 w-8 text-red-500 mr-3" />
                      <div>
                        <h3 className="font-medium">高风险项目</h3>
                        <p className="text-sm text-gray-600">
                          {chartData.filter(item => item.deviation > 10).length} 项工程量超出参考值10%以上
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
                
                <Card className="bg-amber-50 border-amber-200">
                  <CardContent className="pt-6">
                    <div className="flex items-center">
                      <AlertTriangle className="h-8 w-8 text-amber-500 mr-3" />
                      <div>
                        <h3 className="font-medium">低估项目</h3>
                        <p className="text-sm text-gray-600">
                          {chartData.filter(item => item.deviation < -10).length} 项工程量低于参考值10%以上
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
                
                <Card className="bg-green-50 border-green-200">
                  <CardContent className="pt-6">
                    <div className="flex items-center">
                      <CheckCircle2 className="h-8 w-8 text-green-500 mr-3" />
                      <div>
                        <h3 className="font-medium">正常偏差范围</h3>
                        <p className="text-sm text-gray-600">
                          {chartData.filter(item => Math.abs(item.deviation) <= 10).length} 项工程量在正常偏差范围内
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </>
          )}
        </CardContent>
      </Card>
    </div>
  );
};

export default ProjectDeviationAnalyzer;
