
import { useState } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Slider } from "@/components/ui/slider";
import { Label } from "@/components/ui/label";
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer, AreaChart, Area } from 'recharts';

type SimulationDataPoint = {
  price: number;
  priceRatio: number;
  probability: number;
  profit: number;
  expectedProfit: number;
};

const PricingStrategySimulator = () => {
  const [basePrice, setBasePrice] = useState(1000000);
  const [competitorCount, setCompetitorCount] = useState(5);
  const [technicalScore, setTechnicalScore] = useState(85);
  const [commercialScore, setCommercialScore] = useState(90);
  const [priceWeight, setPriceWeight] = useState(40);
  
  // Generate simulation data based on user inputs
  const generateSimulationData = (): SimulationDataPoint[] => {
    // Price range from -20% to +10% of base price
    const minPrice = basePrice * 0.8;
    const maxPrice = basePrice * 1.1;
    const step = (maxPrice - minPrice) / 20;
    
    return Array.from({ length: 21 }).map((_, index) => {
      const price = minPrice + step * index;
      const priceRatio = price / basePrice;
      
      // Calculate win probability based on price ratio and other factors
      // Complex simulation algorithm simplified for demo
      let probability = 0;
      
      if (priceRatio <= 0.85) {
        // Very low price, high chance of winning but potential for loss
        probability = Math.min(95, 100 - (0.85 - priceRatio) * 200);
      } else if (priceRatio <= 1.0) {
        // Competitive price range
        probability = 95 - (priceRatio - 0.85) * 200;
      } else {
        // Above base price, low chance of winning
        probability = Math.max(0, 55 - (priceRatio - 1) * 400);
      }
      
      // Adjust probability based on technical and commercial scores
      const techFactor = (technicalScore - 70) / 30; // 0-1 scale
      const commFactor = (commercialScore - 70) / 30; // 0-1 scale
      
      // Weight factors based on price weight
      const priceRatioInverse = 1 - (priceWeight / 100);
      probability = probability * (priceWeight / 100) + (techFactor * 20 + commFactor * 20) * priceRatioInverse;
      
      // Adjust for number of competitors
      probability = probability * (1 - (competitorCount - 3) * 0.05);
      
      // Ensure probability is within bounds
      probability = Math.min(Math.max(probability, 0), 100);
      
      // Calculate expected profit
      const cost = basePrice * 0.85; // Assume cost is 85% of base price
      const profit = price - cost;
      const expectedProfit = profit * (probability / 100);
      
      return {
        price: Math.round(price),
        priceRatio: parseFloat(priceRatio.toFixed(2)),
        probability: parseFloat(probability.toFixed(1)),
        profit: Math.round(profit),
        expectedProfit: Math.round(expectedProfit)
      };
    });
  };
  
  const simulationData = generateSimulationData();
  
  // Find the optimal price point (highest expected profit)
  const optimalDataPoint = simulationData.reduce((max, point) => 
    point.expectedProfit > max.expectedProfit ? point : max, 
    simulationData[0] || { price: 0, priceRatio: 0, probability: 0, profit: 0, expectedProfit: 0 }
  );
  
  return (
    <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
      <Card className="lg:col-span-1">
        <CardHeader>
          <CardTitle>参数设置</CardTitle>
          <CardDescription>调整模拟参数以获取最优报价策略</CardDescription>
        </CardHeader>
        <CardContent className="space-y-6">
          <div className="space-y-2">
            <Label htmlFor="base-price">基础价格 (元)</Label>
            <Input
              id="base-price"
              type="number"
              value={basePrice}
              onChange={(e) => setBasePrice(Number(e.target.value))}
            />
          </div>
          
          <div className="space-y-2">
            <div className="flex justify-between">
              <Label htmlFor="competitor-count">竞争对手数量</Label>
              <span className="text-sm text-muted-foreground">{competitorCount}</span>
            </div>
            <Slider
              id="competitor-count"
              min={2}
              max={10}
              step={1}
              value={[competitorCount]}
              onValueChange={(values) => setCompetitorCount(values[0])}
            />
          </div>
          
          <div className="space-y-2">
            <div className="flex justify-between">
              <Label htmlFor="technical-score">技术评分 (0-100)</Label>
              <span className="text-sm text-muted-foreground">{technicalScore}</span>
            </div>
            <Slider
              id="technical-score"
              min={60}
              max={100}
              value={[technicalScore]}
              onValueChange={(values) => setTechnicalScore(values[0])}
            />
          </div>
          
          <div className="space-y-2">
            <div className="flex justify-between">
              <Label htmlFor="commercial-score">商务评分 (0-100)</Label>
              <span className="text-sm text-muted-foreground">{commercialScore}</span>
            </div>
            <Slider
              id="commercial-score"
              min={60}
              max={100}
              value={[commercialScore]}
              onValueChange={(values) => setCommercialScore(values[0])}
            />
          </div>
          
          <div className="space-y-2">
            <div className="flex justify-between">
              <Label htmlFor="price-weight">价格权重 (%)</Label>
              <span className="text-sm text-muted-foreground">{priceWeight}%</span>
            </div>
            <Slider
              id="price-weight"
              min={20}
              max={60}
              value={[priceWeight]}
              onValueChange={(values) => setPriceWeight(values[0])}
            />
          </div>
        </CardContent>
      </Card>
      
      <Card className="lg:col-span-2">
        <CardHeader>
          <CardTitle>报价策略模拟结果</CardTitle>
          <CardDescription>中标概率和利润的平衡点分析</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="h-[300px]">
            <ResponsiveContainer width="100%" height="100%">
              <LineChart
                data={simulationData}
                margin={{ top: 5, right: 30, left: 20, bottom: 5 }}
              >
                <CartesianGrid strokeDasharray="3 3" opacity={0.1} />
                <XAxis 
                  dataKey="price" 
                  tickFormatter={(value) => `${(Number(value) / 10000).toFixed(0)}万`}
                />
                <YAxis yAxisId="left" orientation="left" />
                <YAxis yAxisId="right" orientation="right" domain={[0, 100]} />
                <Tooltip 
                  formatter={(value, name) => {
                    if (name === 'probability') return [`${value}%`, '中标概率'];
                    if (name === 'expectedProfit') return [`${(Number(value) / 10000).toFixed(2)}万元`, '期望利润'];
                    return [value, name];
                  }}
                  labelFormatter={(value) => `报价: ${(Number(value) / 10000).toFixed(2)}万元`}
                />
                <Legend />
                <Line
                  yAxisId="left"
                  type="monotone"
                  dataKey="expectedProfit"
                  name="期望利润"
                  stroke="#8884d8"
                  activeDot={{ r: 8 }}
                  strokeWidth={2}
                />
                <Line
                  yAxisId="right"
                  type="monotone"
                  dataKey="probability"
                  name="中标概率"
                  stroke="#82ca9d"
                  strokeWidth={2}
                />
              </LineChart>
            </ResponsiveContainer>
          </div>
          
          <div className="mt-6 grid grid-cols-2 gap-4">
            <Card className="bg-blue-50 border-blue-200">
              <CardContent className="p-4">
                <h3 className="font-medium text-blue-800 mb-1">最佳报价区间</h3>
                <div className="text-xl font-semibold">
                  {(optimalDataPoint.price / 10000).toFixed(2)}万元
                </div>
                <div className="text-sm text-blue-600 mt-1">
                  相对基准价: {((optimalDataPoint.priceRatio - 1) * 100).toFixed(1)}%
                </div>
              </CardContent>
            </Card>
            
            <Card className="bg-green-50 border-green-200">
              <CardContent className="p-4">
                <h3 className="font-medium text-green-800 mb-1">预期中标概率</h3>
                <div className="text-xl font-semibold">
                  {optimalDataPoint.probability}%
                </div>
                <div className="text-sm text-green-600 mt-1">
                  基于当前参数设置
                </div>
              </CardContent>
            </Card>
            
            <Card className="bg-purple-50 border-purple-200">
              <CardContent className="p-4">
                <h3 className="font-medium text-purple-800 mb-1">预期利润</h3>
                <div className="text-xl font-semibold">
                  {(optimalDataPoint.profit / 10000).toFixed(2)}万元
                </div>
                <div className="text-sm text-purple-600 mt-1">
                  毛利率: {((optimalDataPoint.profit / optimalDataPoint.price) * 100).toFixed(1)}%
                </div>
              </CardContent>
            </Card>
            
            <Card className="bg-amber-50 border-amber-200">
              <CardContent className="p-4">
                <h3 className="font-medium text-amber-800 mb-1">期望收益</h3>
                <div className="text-xl font-semibold">
                  {(optimalDataPoint.expectedProfit / 10000).toFixed(2)}万元
                </div>
                <div className="text-sm text-amber-600 mt-1">
                  利润 × 中标概率
                </div>
              </CardContent>
            </Card>
          </div>
          
          <div className="mt-6 p-4 rounded-md bg-blue-100 border border-blue-200">
            <h3 className="font-medium mb-2">优化建议</h3>
            <ul className="list-disc pl-5 space-y-1 text-sm">
              <li>当前最优报价点为基准价的{((optimalDataPoint.priceRatio - 1) * 100).toFixed(1)}%，预期中标概率{optimalDataPoint.probability}%</li>
              <li>提高技术评分至90+可将最优报价提高约3%</li>
              <li>考虑加强商务方案中的服务承诺，可提升中标概率5-8%</li>
              <li>当竞争对手增加到{competitorCount + 2}家时，建议降低报价至基准价的95%以下</li>
            </ul>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default PricingStrategySimulator;
