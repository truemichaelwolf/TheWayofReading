import React, { useState } from 'react';
import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Alert, AlertDescription } from '@/components/ui/alert';
import { LineChart, Line, BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

const prePostData = [
  { metric: "知识水平 Knowledge", pre: 2.39, post: 3.90, change: "+1.51" },
  { metric: "熟悉程度 Familiarity", pre: 2.54, post: 3.85, change: "+1.31" },
  { metric: "感知程度 Perception", pre: 3.65, post: 3.80, change: "+0.15" }
];

const toolFamiliarityData = [
  { tool: "在线词典 Online Dictionaries", preFamiliarity: 3.82, postFamiliarity: 4.42 },
  { tool: "写作社交媒体 Social Network (Written)", preFamiliarity: 3.73, postFamiliarity: 4.25 },
  { tool: "拼写检查 Spell Checkers", preFamiliarity: 3.39, postFamiliarity: 4.21 },
  { tool: "词形还原 Lemmatizers", preFamiliarity: 1.54, postFamiliarity: 3.59 },
  { tool: "语料库 Corpora", preFamiliarity: 1.62, postFamiliarity: 4.25 }
];

const institutionalData = [
  { factor: "机构鼓励 Institution Encouragement", value: 4.195, type: "Positive", en: "Institution Encouragement", cn: "机构鼓励" },
  { factor: "移动设备培训 Mobile Device Training", value: 3.424, type: "Positive", en: "Mobile Device Training", cn: "移动设备培训" },
  { factor: "P-NLPR培训 P-NLPR Training", value: 0.896, type: "Neutral", en: "P-NLPR Training", cn: "P-NLPR培训" }
];

const teacherProfileData = {
  demographics: [
    { category: "性别 Gender", value: "92.2% Female" },
    { category: "年龄 Age", value: "44.2% over 30" },
    { category: "教学经验 Experience", value: "48.5% <5 years, 34.9% 10-15 years, 16.7% >15 years" }
  ],
  countries: [
    { name: "Germany", percentage: 37.7 },
    { name: "Belgium", percentage: 31.2 },
    { name: "Spain", percentage: 14.3 },
    { name: "Others", percentage: 16.8 }
  ]
};

const DetailedPNLPRDashboard = () => {
  const [activeTab, setActiveTab] = useState('overview');

  return (
    <div className="w-full space-y-4">
      <Card className="w-full">
        <CardHeader>
          <CardTitle className="text-2xl font-bold text-center">
            Comprehensive P-NLPR Research Analysis Dashboard
            <div className="text-lg font-normal mt-2">教学自然语言处理资源研究分析综合仪表板</div>
          </CardTitle>
        </CardHeader>
        <CardContent>
          <Tabs defaultValue="overview" className="w-full" onValueChange={setActiveTab}>
            <TabsList className="w-full justify-center mb-4">
              <TabsTrigger value="overview">Overview 概述</TabsTrigger>
              <TabsTrigger value="impact">Impact Analysis 影响分析</TabsTrigger>
              <TabsTrigger value="demographics">Demographics 人口统计</TabsTrigger>
              <TabsTrigger value="recommendations">Recommendations 建议</TabsTrigger>
            </TabsList>

            <TabsContent value="overview">
              <div className="space-y-6">
                <Alert>
                  <AlertDescription>
                    Study Period: 研究期间: January-February 2017
                    <br />
                    Sample Size: 样本量: n=77
                  </AlertDescription>
                </Alert>

                <div className="h-80">
                  <h3 className="font-semibold mb-2">Pre/Post Comparison 前后对比</h3>
                  <ResponsiveContainer width="100%" height="100%">
                    <BarChart data={prePostData}>
                      <CartesianGrid strokeDasharray="3 3" />
                      <XAxis dataKey="metric" />
                      <YAxis domain={[0, 5]} />
                      <Tooltip />
                      <Legend />
                      <Bar name="Pre-Module 课程前" dataKey="pre" fill="#94A3B8" />
                      <Bar name="Post-Module 课程后" dataKey="post" fill="#4F46E5" />
                    </BarChart>
                  </ResponsiveContainer>
                </div>

                <div className="h-80">
                  <h3 className="font-semibold mb-2">Tool Familiarity Change 工具熟悉度变化</h3>
                  <ResponsiveContainer width="100%" height="100%">
                    <LineChart data={toolFamiliarityData}>
                      <CartesianGrid strokeDasharray="3 3" />
                      <XAxis dataKey="tool" />
                      <YAxis domain={[0, 5]} />
                      <Tooltip />
                      <Legend />
                      <Line name="Pre-Module 课程前" type="monotone" dataKey="preFamiliarity" stroke="#94A3B8" />
                      <Line name="Post-Module 课程后" type="monotone" dataKey="postFamiliarity" stroke="#4F46E5" />
                    </LineChart>
                  </ResponsiveContainer>
                </div>
              </div>
            </TabsContent>

            <TabsContent value="impact">
              <div className="space-y-6">
                <div className="h-80">
                  <h3 className="font-semibold mb-2">Institutional Factors 机构因素</h3>
                  <ResponsiveContainer width="100%" height="100%">
                    <BarChart data={institutionalData} layout="vertical">
                      <CartesianGrid strokeDasharray="3 3" />
                      <XAxis type="number" domain={[0, 5]} />
                      <YAxis dataKey="factor" type="category" width={200} />
                      <Tooltip />
                      <Bar dataKey="value" fill="#10B981" />
                    </BarChart>
                  </ResponsiveContainer>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <Card>
                    <CardHeader>
                      <CardTitle>Key Findings 主要发现</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <ul className="list-disc pl-5 space-y-2">
                        <li>Significant increase in knowledge (+1.51) and familiarity (+1.31)</li>
                        <li>知识水平显著提升 (+1.51) 和熟悉度提高 (+1.31)</li>
                        <li>Institution support plays crucial role in adoption</li>
                        <li>机构支持在采用过程中起关键作用</li>
                      </ul>
                    </CardContent>
                  </Card>

                  <Card>
                    <CardHeader>
                      <CardTitle>Implementation Challenges 实施挑战</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <ul className="list-disc pl-5 space-y-2">
                        <li>Integration complexity (3.39/5.0 score)</li>
                        <li>整合复杂性 (3.39/5.0 分)</li>
                        <li>Limited training opportunities</li>
                        <li>培训机会有限</li>
                      </ul>
                    </CardContent>
                  </Card>
                </div>
              </div>
            </TabsContent>

            <TabsContent value="demographics">
              <div className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <Card>
                    <CardHeader>
                      <CardTitle>Participant Profile 参与者概况</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <ul className="space-y-2">
                        {teacherProfileData.demographics.map((item, index) => (
                          <li key={index} className="flex justify-between">
                            <span>{item.category}:</span>
                            <span className="font-semibold">{item.value}</span>
                          </li>
                        ))}
                      </ul>
                    </CardContent>
                  </Card>

                  <Card>
                    <CardHeader>
                      <CardTitle>Geographic Distribution 地理分布</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <div className="h-48">
                        <ResponsiveContainer width="100%" height="100%">
                          <BarChart data={teacherProfileData.countries}>
                            <CartesianGrid strokeDasharray="3 3" />
                            <XAxis dataKey="name" />
                            <YAxis domain={[0, 100]} />
                            <Tooltip />
                            <Bar dataKey="percentage" fill="#6366F1" />
                          </BarChart>
                        </ResponsiveContainer>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              </div>
            </TabsContent>

            <TabsContent value="recommendations">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <Card>
                  <CardHeader>
                    <CardTitle>Short-term Recommendations 短期建议</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <ul className="list-disc pl-5 space-y-2">
                      <li>Increase institutional support for P-NLPR adoption</li>
                      <li>增加机构对P-NLPR采用的支持</li>
                      <li>Develop comprehensive training programs</li>
                      <li>开发全面的培训计划</li>
                      <li>Focus on integration simplification</li>
                      <li>注重简化整合过程</li>
                    </ul>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle>Long-term Strategies 长期策略</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <ul className="list-disc pl-5 space-y-2">
                      <li>Establish sustainable P-NLPR training infrastructure</li>
                      <li>建立可持续的P-NLPR培训基础设施</li>
                      <li>Develop evaluation frameworks for tool effectiveness</li>
                      <li>开发工具效果评估框架</li>
                      <li>Create collaborative teacher support networks</li>
                      <li>创建协作式教师支持网络</li>
                    </ul>
                  </CardContent>
                </Card>
              </div>
            </TabsContent>
          </Tabs>
        </CardContent>
      </Card>
    </div>
  );
};

export default DetailedPNLPRDashboard;
