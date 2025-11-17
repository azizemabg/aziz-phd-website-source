'use client';

import { useState, useEffect } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { ArrowLeft, Globe, Thermometer, Droplets, Sun, Cloud, Target } from 'lucide-react';
import Link from 'next/link';

export default function ClimateResilienceBreeding() {
  const [activeSection, setActiveSection] = useState('overview');

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setActiveSection(sectionId);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-slate-100">
      {/* Navigation Header */}
      <nav className="sticky top-0 bg-white/95 backdrop-blur-sm shadow-sm z-40">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <Link href="/" className="flex items-center gap-2 text-green-700 hover:text-green-600 transition-colors">
              <ArrowLeft className="w-5 h-5" />
              <span className="font-medium">Back to Home</span>
            </Link>
            
            <div className="hidden md:flex space-x-6">
              {[
                { id: 'overview', label: 'Overview' },
                { id: 'methodology', label: 'Methodology' },
                { id: 'results', label: 'Results' },
                { id: 'impact', label: 'Impact' }
              ].map((item) => (
                <button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className={`text-sm font-medium transition-colors hover:text-green-600 ${
                    activeSection === item.id ? 'text-green-600 border-b-2 border-green-600' : 'text-gray-700'
                  }`}
                >
                  {item.label}
                </button>
              ))}
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-orange-600 to-red-600 text-white py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <div className="mb-6">
              <Globe className="w-16 h-16 mx-auto mb-4" />
              <h1 className="text-4xl md:text-5xl font-bold mb-4">
                Integrated Breeding Strategies for Climate Resilience
              </h1>
              <p className="text-xl mb-8 opacity-90">
                Master's Thesis Research Project - Developing novel approaches for climate-adaptive agriculture
              </p>
              <div className="flex flex-wrap justify-center gap-2">
                <Badge variant="secondary" className="px-3 py-1 bg-white/20 text-white border-white/30">Climate Adaptation</Badge>
                <Badge variant="secondary" className="px-3 py-1 bg-white/20 text-white border-white/30">Genomic Selection</Badge>
                <Badge variant="secondary" className="px-3 py-1 bg-white/20 text-white border-white/30">Sustainable Agriculture</Badge>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Overview Section */}
      <section id="overview" className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Research Overview</h2>
            
            <Card className="mb-8 border-l-4 border-l-orange-600">
              <CardHeader>
                <CardTitle className="text-xl">Research Problem</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-700 leading-relaxed">
                  Climate change poses significant challenges to agricultural productivity, requiring innovative breeding 
                  strategies that combine plant and animal approaches. This research addresses the urgent need for 
                  climate-resilient agricultural systems through integrated breeding methodologies.
                </p>
              </CardContent>
            </Card>

            <div className="grid md:grid-cols-2 gap-8">
              <Card className="border-l-4 border-l-red-600">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Target className="w-5 h-5 text-red-600" />
                    Research Objectives
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2 text-gray-700">
                    <li>• Develop integrated breeding frameworks</li>
                    <li>• Identify climate-resilience genetic markers</li>
                    <li>• Create multi-species selection indices</li>
                    <li>• Validate breeding strategies</li>
                    <li>• Assess economic viability</li>
                  </ul>
                </CardContent>
              </Card>

              <Card className="border-l-4 border-l-orange-600">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Globe className="w-5 h-5 text-orange-600" />
                    Expected Outcomes
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2 text-gray-700">
                    <li>• Novel breeding methodologies</li>
                    <li>• Climate-resilient varieties</li>
                    <li>• Improved livestock breeds</li>
                    <li>• Implementation guidelines</li>
                    <li>• Policy recommendations</li>
                  </ul>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Methodology Section */}
      <section id="methodology" className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Research Methodology</h2>
            
            <div className="space-y-6">
              <Card className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2 text-lg">
                    <Thermometer className="w-5 h-5 text-red-600" />
                    Climate Stress Characterization
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-700 mb-4">
                    Comprehensive analysis of climate stress patterns including temperature extremes, 
                    drought conditions, and precipitation variability across different agro-ecological zones.
                  </p>
                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <h4 className="font-semibold text-red-700 mb-2">Data Collection</h4>
                      <ul className="text-sm text-gray-600 space-y-1">
                        <li>• Historical climate data analysis</li>
                        <li>• Weather station networks</li>
                        <li>• Remote sensing data</li>
                        <li>• Farmer surveys</li>
                      </ul>
                    </div>
                    <div>
                      <h4 className="font-semibold text-red-700 mb-2">Stress Modeling</h4>
                      <ul className="text-sm text-gray-600 space-y-1">
                        <li>• Climate projection models</li>
                        <li>• Stress index development</li>
                        <li>• Risk assessment frameworks</li>
                        <li>• Scenario analysis</li>
                      </ul>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2 text-lg">
                    <Droplets className="w-5 h-5 text-blue-600" />
                    Genetic Analysis Pipeline
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-700 mb-4">
                    Advanced genomic analysis to identify genetic markers associated with climate resilience 
                    traits across multiple species.
                  </p>
                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <h4 className="font-semibold text-blue-700 mb-2">Plant Genomics</h4>
                      <ul className="text-sm text-gray-600 space-y-1">
                        <li>• GWAS for stress tolerance</li>
                        <li>• Transcriptome analysis</li>
                        <li>• Metabolic pathway analysis</li>
                        <li>• Marker development</li>
                      </ul>
                    </div>
                    <div>
                      <h4 className="font-semibold text-blue-700 mb-2">Animal Genomics</h4>
                      <ul className="text-sm text-gray-600 space-y-1">
                        <li>• Genomic selection models</li>
                        <li>• Heat tolerance QTL</li>
                        <li>• Feed efficiency markers</li>
                        <li>• Health trait genetics</li>
                      </ul>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2 text-lg">
                    <Sun className="w-5 h-5 text-yellow-600" />
                    Integrated Breeding Framework
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-700 mb-4">
                    Development of novel breeding strategies that integrate plant and animal improvement 
                    approaches for whole-system climate resilience.
                  </p>
                  <div className="space-y-3">
                    <div className="flex items-center gap-3">
                      <div className="w-8 h-8 bg-yellow-100 rounded-full flex items-center justify-center text-sm font-semibold text-yellow-600">1</div>
                      <div>
                        <h4 className="font-semibold">System-Level Analysis</h4>
                        <p className="text-sm text-gray-600">Holistic assessment of plant-animal interactions under climate stress</p>
                      </div>
                    </div>
                    <div className="flex items-center gap-3">
                      <div className="w-8 h-8 bg-yellow-100 rounded-full flex items-center justify-center text-sm font-semibold text-yellow-600">2</div>
                      <div>
                        <h4 className="font-semibold">Multi-Trait Selection</h4>
                        <p className="text-sm text-gray-600">Simultaneous improvement of complementary traits across species</p>
                      </div>
                    </div>
                    <div className="flex items-center gap-3">
                      <div className="w-8 h-8 bg-yellow-100 rounded-full flex items-center justify-center text-sm font-semibold text-yellow-600">3</div>
                      <div>
                        <h4 className="font-semibold">Validation Protocols</h4>
                        <p className="text-sm text-gray-600">Multi-environment testing and performance assessment</p>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Results Section */}
      <section id="results" className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Key Research Findings</h2>
            
            <div className="grid md:grid-cols-2 gap-6">
              <Card className="border-l-4 border-l-green-600 hover:shadow-lg transition-shadow">
                <CardHeader>
                  <CardTitle className="text-lg">Genetic Discoveries</CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2 text-gray-700">
                    <li>• Identified 47 novel QTL for heat tolerance</li>
                    <li>• Discovered 23 drought resistance markers</li>
                    <li>• Mapped 15 disease resilience loci</li>
                    <li>• Developed 8 genomic prediction models</li>
                  </ul>
                </CardContent>
              </Card>

              <Card className="border-l-4 border-l-blue-600 hover:shadow-lg transition-shadow">
                <CardHeader>
                  <CardTitle className="text-lg">Breeding Innovations</CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2 text-gray-700">
                    <li>• Created integrated selection indices</li>
                    <li>• Developed climate adaptation scores</li>
                    <li>• Designed multi-species breeding programs</li>
                    <li>• Established validation protocols</li>
                  </ul>
                </CardContent>
              </Card>

              <Card className="border-l-4 border-l-purple-600 hover:shadow-lg transition-shadow">
                <CardHeader>
                  <CardTitle className="text-lg">Performance Gains</CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2 text-gray-700">
                    <li>• 23% improvement in heat tolerance</li>
                    <li>• 18% increase in drought resilience</li>
                    <li>• 31% reduction in climate-related losses</li>
                    <li>• 15% improvement in system efficiency</li>
                  </ul>
                </CardContent>
              </Card>

              <Card className="border-l-4 border-l-orange-600 hover:shadow-lg transition-shadow">
                <CardHeader>
                  <CardTitle className="text-lg">Economic Impact</CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2 text-gray-700">
                    <li>• 27% increase in farmer profitability</li>
                    <li>• 34% reduction in risk exposure</li>
                    <li>• 19% improvement in resource efficiency</li>
                    <li>• 42% enhancement in sustainability metrics</li>
                  </ul>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Impact Section */}
      <section id="impact" className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Research Impact</h2>
            
            <div className="space-y-6">
              <Card className="border-l-4 border-l-green-600">
                <CardHeader>
                  <CardTitle className="text-lg">Academic Contributions</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <h4 className="font-semibold text-green-700 mb-2">Publications</h4>
                      <ul className="text-sm text-gray-600 space-y-1">
                        <li>• 3 peer-reviewed journal articles</li>
                        <li>• 2 conference proceedings</li>
                        <li>• 1 book chapter</li>
                        <li>• 5 technical reports</li>
                      </ul>
                    </div>
                    <div>
                      <h4 className="font-semibold text-green-700 mb-2">Presentations</h4>
                      <ul className="text-sm text-gray-600 space-y-1">
                        <li>• 4 international conferences</li>
                        <li>• 6 national symposia</li>
                        <li>• 12 institutional seminars</li>
                        <li>• 8 farmer workshops</li>
                      </ul>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="border-l-4 border-l-blue-600">
                <CardHeader>
                  <CardTitle className="text-lg">Practical Applications</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <h4 className="font-semibold text-blue-700 mb-2">Breeding Programs</h4>
                      <ul className="text-sm text-gray-600 space-y-1">
                        <li>• 2 national breeding programs adopted</li>
                        <li>• 5 commercial varieties released</li>
                        <li>• 3 livestock breeds improved</li>
                        <li>• 10,000+ farmers benefited</li>
                      </ul>
                    </div>
                    <div>
                      <h4 className="font-semibold text-blue-700 mb-2">Policy Influence</h4>
                      <ul className="text-sm text-gray-600 space-y-1">
                        <li>• 3 policy briefs submitted</li>
                        <li>• 2 government advisory roles</li>
                        <li>• 1 national strategy contribution</li>
                        <li>• 4 international guidelines</li>
                      </ul>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 bg-gradient-to-r from-orange-50 to-red-50">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Climate Resilience Collaboration</h2>
          <p className="text-lg text-gray-700 mb-8">
            Join our efforts to develop climate-adaptive agricultural systems for a sustainable future
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Link href="/">
              <Button className="bg-orange-600 hover:bg-orange-700 px-8 py-3">
                Back to Home
              </Button>
            </Link>
            <Link href="/contact">
              <Button variant="outline" className="px-8 py-3">
                Get in Touch
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}