'use client';

import { useState, useEffect } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { ArrowLeft, Dna, Heart, Brain, Shield, Target, Zap } from 'lucide-react';
import Link from 'next/link';

export default function AnimalGenetics() {
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
                { id: 'species', label: 'Species Focus' },
                { id: 'traits', label: 'Trait Research' },
                { id: 'technologies', label: 'Technologies' }
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
      <section className="relative bg-gradient-to-r from-purple-600 to-pink-600 text-white py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <div className="mb-6">
              <Dna className="w-16 h-16 mx-auto mb-4" />
              <h1 className="text-4xl md:text-5xl font-bold mb-4">
                Animal Genetics
              </h1>
              <p className="text-xl mb-8 opacity-90">
                Livestock improvement, genetic disease management, and sustainable breeding programs
              </p>
              <div className="flex flex-wrap justify-center gap-2">
                <Badge variant="secondary" className="px-3 py-1 bg-white/20 text-white border-white/30">Livestock Improvement</Badge>
                <Badge variant="secondary" className="px-3 py-1 bg-white/20 text-white border-white/30">Genetic Health</Badge>
                <Badge variant="secondary" className="px-3 py-1 bg-white/20 text-white border-white/30">Breeding Programs</Badge>
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
            
            <div className="grid md:grid-cols-2 gap-8 mb-12">
              <Card className="border-l-4 border-l-purple-600">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Target className="w-5 h-5 text-purple-600" />
                    Research Goals
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2 text-gray-700">
                    <li>• Enhance production efficiency</li>
                    <li>• Improve disease resistance</li>
                    <li>• Optimize reproductive performance</li>
                    <li>• Maintain genetic diversity</li>
                    <li>• Ensure animal welfare</li>
                  </ul>
                </CardContent>
              </Card>

              <Card className="border-l-4 border-l-pink-600">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Zap className="w-5 h-5 text-pink-600" />
                    Innovation Areas
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2 text-gray-700">
                    <li>• Genomic selection implementation</li>
                    <li>• Gene editing applications</li>
                    <li>• Precision breeding strategies</li>
                    <li>• Multi-omics integration</li>
                    <li>• AI-driven genetic analysis</li>
                  </ul>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Species Focus Section */}
      <section id="species" className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Species Research Focus</h2>
            
            <div className="grid md:grid-cols-2 gap-6">
              <Card className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2 text-lg">
                    <span className="text-2xl">🐄</span>
                    Dairy Cattle
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-gray-600 mb-4">
                    Milk production, fertility, health traits, and conformation improvement
                  </p>
                  <div className="flex flex-wrap gap-1">
                    <Badge variant="outline" className="text-xs">Milk Yield</Badge>
                    <Badge variant="outline" className="text-xs">Fertility</Badge>
                    <Badge variant="outline" className="text-xs">Somatic Cell Count</Badge>
                  </div>
                </CardContent>
              </Card>

              <Card className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2 text-lg">
                    <span className="text-2xl">🥩</span>
                    Beef Cattle
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-gray-600 mb-4">
                    Growth rate, feed efficiency, carcass quality, and reproductive traits
                  </p>
                  <div className="flex flex-wrap gap-1">
                    <Badge variant="outline" className="text-xs">Growth Rate</Badge>
                    <Badge variant="outline" className="text-xs">Feed Efficiency</Badge>
                    <Badge variant="outline" className="text-xs">Marbling</Badge>
                  </div>
                </CardContent>
              </Card>

              <Card className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2 text-lg">
                    <span className="text-2xl">🐷</span>
                    Swine
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-gray-600 mb-4">
                    Litter size, growth performance, meat quality, and disease resistance
                  </p>
                  <div className="flex flex-wrap gap-1">
                    <Badge variant="outline" className="text-xs">Litter Size</Badge>
                    <Badge variant="outline" className="text-xs">Feed Conversion</Badge>
                    <Badge variant="outline" className="text-xs">Lean Growth</Badge>
                  </div>
                </CardContent>
              </Card>

              <Card className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2 text-lg">
                    <span className="text-2xl">🐑</span>
                    Sheep & Goats
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-gray-600 mb-4">
                    Wool/milk production, reproduction, parasite resistance, and adaptation
                  </p>
                  <div className="flex flex-wrap gap-1">
                    <Badge variant="outline" className="text-xs">Wool Quality</Badge>
                    <Badge variant="outline" className="text-xs">Milk Production</Badge>
                    <Badge variant="outline" className="text-xs">Parasite Resistance</Badge>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Trait Research Section */}
      <section id="traits" className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Trait Research Areas</h2>
            
            <div className="grid md:grid-cols-3 gap-6">
              <Card className="text-center hover:shadow-lg transition-all duration-300 transform hover:-translate-y-2">
                <CardHeader>
                  <div className="w-16 h-16 mx-auto mb-4 bg-purple-100 rounded-full flex items-center justify-center">
                    <Heart className="w-8 h-8 text-purple-600" />
                  </div>
                  <CardTitle className="text-lg">Health Traits</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-gray-600 mb-4">
                    Disease resistance, immune response, longevity, and robustness
                  </p>
                  <div className="flex flex-wrap gap-1 justify-center">
                    <Badge variant="outline" className="text-xs">Disease Resistance</Badge>
                    <Badge variant="outline" className="text-xs">Immunity</Badge>
                    <Badge variant="outline" className="text-xs">Longevity</Badge>
                  </div>
                </CardContent>
              </Card>

              <Card className="text-center hover:shadow-lg transition-all duration-300 transform hover:-translate-y-2">
                <CardHeader>
                  <div className="w-16 h-16 mx-auto mb-4 bg-pink-100 rounded-full flex items-center justify-center">
                    <Brain className="w-8 h-8 text-pink-600" />
                  </div>
                  <CardTitle className="text-lg">Production Traits</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-gray-600 mb-4">
                    Yield, growth rate, efficiency, and product quality characteristics
                  </p>
                  <div className="flex flex-wrap gap-1 justify-center">
                    <Badge variant="outline" className="text-xs">Yield</Badge>
                    <Badge variant="outline" className="text-xs">Growth Rate</Badge>
                    <Badge variant="outline" className="text-xs">Efficiency</Badge>
                  </div>
                </CardContent>
              </Card>

              <Card className="text-center hover:shadow-lg transition-all duration-300 transform hover:-translate-y-2">
                <CardHeader>
                  <div className="w-16 h-16 mx-auto mb-4 bg-indigo-100 rounded-full flex items-center justify-center">
                    <Shield className="w-8 h-8 text-indigo-600" />
                  </div>
                  <CardTitle className="text-lg">Reproductive Traits</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-gray-600 mb-4">
                    Fertility, litter size, conception rate, and reproductive efficiency
                  </p>
                  <div className="flex flex-wrap gap-1 justify-center">
                    <Badge variant="outline" className="text-xs">Fertility</Badge>
                    <Badge variant="outline" className="text-xs">Litter Size</Badge>
                    <Badge variant="outline" className="text-xs">Conception Rate</Badge>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Technologies Section */}
      <section id="technologies" className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Advanced Technologies</h2>
            
            <div className="space-y-6">
              <Card className="border-l-4 border-l-purple-600 hover:shadow-lg transition-shadow">
                <CardHeader>
                  <CardTitle className="text-lg">Genomic Selection Programs</CardTitle>
                  <CardDescription>Implementation across multiple livestock species</CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-700 mb-4">
                    Developing and implementing genomic selection programs for dairy cattle, beef cattle, 
                    swine, and small ruminants with focus on accuracy and cost-effectiveness.
                  </p>
                  <div className="flex flex-wrap gap-2">
                    <Badge variant="outline">SNP Arrays</Badge>
                    <Badge variant="outline">Genomic Prediction</Badge>
                    <Badge variant="outline">Selection Indices</Badge>
                  </div>
                </CardContent>
              </Card>

              <Card className="border-l-4 border-l-pink-600 hover:shadow-lg transition-shadow">
                <CardHeader>
                  <CardTitle className="text-lg">Gene Editing Applications</CardTitle>
                  <CardDescription>Precision breeding for disease resistance and production traits</CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-700 mb-4">
                    Exploring CRISPR and other gene editing technologies for introducing beneficial 
                    traits and improving animal health and productivity.
                  </p>
                  <div className="flex flex-wrap gap-2">
                    <Badge variant="outline">CRISPR</Badge>
                    <Badge variant="outline">Gene Editing</Badge>
                    <Badge variant="outline">Precision Breeding</Badge>
                  </div>
                </CardContent>
              </Card>

              <Card className="border-l-4 border-l-indigo-600 hover:shadow-lg transition-shadow">
                <CardHeader>
                  <CardTitle className="text-lg">Multi-Omics Integration</CardTitle>
                  <CardDescription>Combining genomics, transcriptomics, and phenomics</CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-700 mb-4">
                    Integrating multiple omics data types to understand complex biological processes 
                    and improve genetic predictions.
                  </p>
                  <div className="flex flex-wrap gap-2">
                    <Badge variant="outline">Genomics</Badge>
                    <Badge variant="outline">Transcriptomics</Badge>
                    <Badge variant="outline">Systems Biology</Badge>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 bg-gradient-to-r from-purple-50 to-pink-50">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Advance Animal Genetics Research</h2>
          <p className="text-lg text-gray-700 mb-8">
            Partner in developing next-generation breeding strategies for sustainable livestock production
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Link href="/">
              <Button className="bg-purple-600 hover:bg-purple-700 px-8 py-3">
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