
import { useState } from "react";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Label } from "@/components/ui/label";
import { LineChart, Line, AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import { AlertCircle } from "lucide-react";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";

// Mock data for materials price trends
const steelData = [
  { month: '2023-01', price: 5200 },
  { month: '2023-02', price: 5350 },
  { month: '2023-03', price: 5280 },
  { month: '2023-04', price: 5400 },
  { month: '2023-05', price: 5520 },
  { month: '2023-06', price: 5480 },
  { month: '2023-07', price: 5600 },
  { month: '2023-08', price: 5750 },
  { month: '2023-09', price: 5830 },
  { month: '2023-10', price: 5790 },
  { month: '2023-11', price: 5850 },
  { month: '2023-12', price: 5920 },
  { month: '2024-01', price: 6050 },
  { month: '2024-02', price: 6120 },
  { month: '2024-03', price: 6200 },
  // Predicted future prices
  { month: '2024-04', price: 6280, isPrediction: true },
  { month: '2024-05', price: 6350, isPrediction: true },
  { month: '2024-06', price: 6430, isPrediction: true },
  { month: '2024-07', price: 6500, isPrediction: true },
  { month: '2024-08', price: 6580, isPrediction: true },
  { month: '2024-09', price: 6650, isPrediction: true },
];

const cementData = [
  { month: '2023-01', price: 450 },
  { month: '2023-02', price: 460 },
  { month: '2023-03', price: 455 },
  { month: '2023-04', price: 470 },
  { month: '2023-05', price: 480 },
  { month: '2023-06', price: 490 },
  { month: '2023-07', price: 495 },
  { month: '2023-08', price: 500 },
  { month: '2023-09', price: 505 },
  { month: '2023-10', price: 510 },
  { month: '2023-11', price: 515 },
  { month: '2023-12', price: 520 },
  { month: '2024-01', price: 525 },
  { month: '2024-02', price: 530 },
  { month: '2024-03', price: 535 },
  // Predicted future prices
  { month: '2024-04', price: 540, isPrediction: true },
  { month: '2024-05', price: 545, isPrediction: true },
  { month: '2024-06', price: 550, isPrediction: true },
  { month: '2024-07', price: 555, isPrediction: true },
  { month: '2024-08', price: 560, isPrediction: true },
  { month: '2024-09', price: 565, isPrediction: true },
];

const copperData = [
  { month: '2023-01', price: 68000 },
  { month: '2023-02', price: 69500 },
  { month: '2023-03', price: 71000 },
  { month: '2023-04', price: 70500 },
  { month: '2023-05', price: 72000 },
  { month: '2023-06', price: 73500 },
  { month: '2023-07', price: 75000 },
  { month: '2023-08', price: 76500 },
  { month: '2023-09', price: 78000 },
  { month: '2023-10', price: 77000 },
  { month: '2023-11', price: 75500 },
  { month: '2023-12', price: 74000 },
  { month: '2024-01', price: 73000 },
  { month: '2024-02', price: 72500 },
  { month: '2024-03', price: 73500 },
  // Predicted future prices
  { month: '2024-04', price: 74000, isPrediction: true },
  { month: '2024-05', price: 75500, isPrediction: true },
  { month: '2024-06', price: 77000, isPrediction: true },
  { month: '2024-07', price: 78500, isPrediction: true },
  { month: '2024-08', price: 80000, isPrediction: true },
  { month: '2024-09', price: 81500, isPrediction: true },
];

const materialsMap = {
  "steel": { name: "钢材", data: steelData, unit: "元/吨", color: "#1890ff" },
  "cement": { name: "水泥", data: cementData, unit: "元/吨", color: "#52c41a" },
  "copper": { name: "铜", data: copperData, unit: "元/吨", color: "#fa8c16" }
};

const MaterialCostPredictor = () => {
  const [selectedMaterial, setSelectedMaterial] = useState("steel");
  const [quantity, setQuantity] = useState("100");
  const [lockPeriod, setLockPeriod] = useState("3");
  const [showAlert, setShowAlert] = useState(false);
  
  const material = materialsMap[selectedMaterial];
  
  // Calculate cost impact
  const calculateCostImpact = () => {
    const currentPrice = material.data.find(d => !d.isPrediction)?.price || 0;
    const futurePrice = material.data[material.data.length - 1].price;
    const qty = parseFloat(quantity) || 0;
    
    const currentCost = currentPrice * qty;
    const futureCost = futurePrice * qty;
    const difference = futureCost - currentCost;
    const percentChange = ((futureCost - currentCost) / currentCost) * 100;
    
    return {
      currentCost,
      futureCost,
      difference,
      percentChange
    };
  };
  
  const costImpact = calculateCostImpact();
  
  const handleLockPeriod = () => {
    setShowAlert(true);
    setTimeout(() => setShowAlert(false), 3000);
  };
  
  return (
    <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
      <Card className="lg:col-span-1">
        <CardHeader>
          <CardTitle>材料参数设置</CardTitle>
          <CardDescription>选择材料类型和数量进行成本预测</CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="space-y-2">
            <Label htmlFor="material">材料类型</Label>
            <Select value={selectedMaterial} onValueChange={setSelectedMaterial}>
              <SelectTrigger id="material">
                <SelectValue placeholder="选择材料类型" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="steel">钢材</SelectItem>
                <SelectItem value="cement">水泥</SelectItem>
                <SelectItem value="copper">铜</SelectItem>
              </SelectContent>
            </Select>
          </div>
          
          <div className="space-y-2">
            <Label htmlFor="quantity">数量（吨）</Label>
            <Input
              id="quantity"
              type="number"
              value={quantity}
              onChange={(e) => setQuantity(e.target.value)}
            />
          </div>
          
          <div className="space-y-2">
            <Label htmlFor="lockPeriod">价格锁定期（月）</Label>
            <div className="flex space-x-2">
              <Input
                id="lockPeriod"
                type="number"
                value={lockPeriod}
                onChange={(e) => setLockPeriod(e.target.value)}
              />
              <Button onClick={handleLockPeriod}>锁定</Button>
            </div>
          </div>
          
          {showAlert && (
            <Alert variant="success">
              <AlertCircle className="h-4 w-4" />
              <AlertTitle>成功</AlertTitle>
              <AlertDescription>
                已成功锁定{material.name}价格{lockPeriod}个月
              </AlertDescription>
            </Alert>
          )}
        </CardContent>
      </Card>
      
      <Card className="lg:col-span-2">
        <CardHeader>
          <CardTitle>{material.name}价格走势预测</CardTitle>
          <CardDescription>历史价格数据和未来6个月预测</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="h-[300px]">
            <ResponsiveContainer width="100%" height="100%">
              <AreaChart data={material.data}>
                <defs>
                  <linearGradient id="colorPrice" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="5%" stopColor={material.color} stopOpacity={0.8}/>
                    <stop offset="95%" stopColor={material.color} stopOpacity={0}/>
                  </linearGradient>
                  <linearGradient id="colorPrediction" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="5%" stopColor="#ff4d4f" stopOpacity={0.8}/>
                    <stop offset="95%" stopColor="#ff4d4f" stopOpacity={0}/>
                  </linearGradient>
                </defs>
                <XAxis dataKey="month" />
                <YAxis />
                <CartesianGrid strokeDasharray="3 3" opacity={0.1} />
                <Tooltip />
                <Legend />
                <Area 
                  type="monotone" 
                  dataKey="price" 
                  name={`${material.name}价格 (${material.unit})`}
                  stroke={material.color}
                  fillOpacity={1}
                  fill="url(#colorPrice)"
                  activeDot={{ r: 8 }}
                />
              </AreaChart>
            </ResponsiveContainer>
          </div>
          
          <div className="mt-6 grid grid-cols-2 gap-4">
            <div className="p-4 rounded-md bg-blue-50">
              <div className="text-sm text-muted-foreground mb-1">当前总成本</div>
              <div className="text-2xl font-semibold">{costImpact.currentCost.toLocaleString()} 元</div>
            </div>
            
            <div className="p-4 rounded-md bg-amber-50">
              <div className="text-sm text-muted-foreground mb-1">6个月后预计成本</div>
              <div className="text-2xl font-semibold">{costImpact.futureCost.toLocaleString()} 元</div>
            </div>
            
            <div className="p-4 rounded-md bg-red-50">
              <div className="text-sm text-muted-foreground mb-1">成本变化</div>
              <div className="text-2xl font-semibold">+{costImpact.difference.toLocaleString()} 元</div>
            </div>
            
            <div className="p-4 rounded-md bg-green-50">
              <div className="text-sm text-muted-foreground mb-1">锁定价格收益</div>
              <div className="text-2xl font-semibold">{costImpact.difference.toLocaleString()} 元</div>
            </div>
          </div>
        </CardContent>
        <CardFooter className="text-sm text-muted-foreground">
          数据来源: 国家统计局, 期货交易所, 行业价格指数
        </CardFooter>
      </Card>
    </div>
  );
};

export default MaterialCostPredictor;
