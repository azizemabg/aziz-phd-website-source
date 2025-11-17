'use client';

import { useState, useEffect } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { ArrowLeft, Calculator, TrendingUp, BarChart3, Brain, Target, Lightbulb } from 'lucide-react';
import Link from 'next/link';

export default function QuantitativeGenetics() {
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
                { id: 'methods', label: 'Methods' },
                { id: 'applications', label: 'Applications' },
                { id: 'projects', label: 'Projects' }
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
      <section className="relative bg-gradient-to-r from-blue-600 to-indigo-600 text-white py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <div className="mb-6">
              <Calculator className="w-16 h-16 mx-auto mb-4" />
              <h1 className="text-4xl md:text-5xl font-bold mb-4">
                Quantitative Genetics
              </h1>
              <p className="text-xl mb-8 opacity-90">
                Statistical analysis of genetic traits, heritability estimation, and breeding value prediction
              </p>
              <div className="flex flex-wrap justify-center gap-2">
                <Badge variant="secondary" className="px-3 py-1 bg-white/20 text-white border-white/30">Statistical Genetics</Badge>
                <Badge variant="secondary" className="px-3 py-1 bg-white/20 text-white border-white/30">Heritability</Badge>
                <Badge variant="secondary" className="px-3 py-1 bg-white/20 text-white border-white/30">Breeding Values</Badge>
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
              <Card className="border-l-4 border-l-blue-600">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Target className="w-5 h-5 text-blue-600" />
                    Research Focus
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2 text-gray-700">
                    <li>• Heritability estimation for complex traits</li>
                    <li>• Genetic correlation analysis</li>
                    <li>• Breeding value prediction models</li>
                    <li>• Genotype-environment interactions</li>
                    <li>• Selection index optimization</li>
                  </ul>
                </CardContent>
              </Card>

              <Card className="border-l-4 border-l-indigo-600">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Lightbulb className="w-5 h-5 text-indigo-600" />
                    Key Innovations
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2 text-gray-700">
                    <li>• Advanced mixed model applications</li>
                    <li>• Bayesian statistical methods</li>
                    <li>• Machine learning integration</li>
                    <li>• Multi-trait analysis frameworks</li>
                    <li>• Real-time breeding value updates</li>
                  </ul>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Methods Section */}
      <section id="methods" className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Methodological Approaches</h2>
            
            <div className="space-y-6">
              <Card className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2 text-lg">
                    <BarChart3 className="w-5 h-5 text-blue-600" />
                    Statistical Models
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="grid md:grid-cols-2 gap-4">
                    <div className="space-y-3">
                      <h4 className="font-semibold text-blue-700">Linear Mixed Models</h4>
                      <p className="text-sm text-gray-600">REML estimation, variance component analysis, random effects modeling</p>
                      
                      <h4 className="font-semibold text-blue-700">Bayesian Methods</h4>
                      <p className="text-sm text-gray-600">MCMC sampling, prior specification, posterior inference</p>
                    </div>
                    <div className="space-y-3">
                      <h4 className="font-semibold text-blue-700">Genomic Prediction</h4>
                      <p className="text-sm text-gray-600">GBLUP, BayesB, Bayesian LASSO, machine learning approaches</p>
                      
                      <h4 className="font-semibold text-blue-700">Multi-trait Analysis</h4>
                      <p className="text-sm text-gray-600">Correlated trait modeling, selection indices, economic weights</p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2 text-lg">
                    <TrendingUp className="w-5 h-5 text-indigo-600" />
                    Data Analysis Pipeline
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div className="flex items-center gap-3">
                      <div className="w-8 h-8 bg-indigo-100 rounded-full flex items-center justify-center text-sm font-semibold text-indigo-600">1</div>
                      <div>
                        <h4 className="font-semibold">Data Collection & Quality Control</h4>
                        <p className="text-sm text-gray-600">Phenotypic data cleaning, outlier detection, pedigree validation</p>
                      </div>
                    </div>
                    <div className="flex items-center gap-3">
                      <div className="w-8 h-8 bg-indigo-100 rounded-full flex items-center justify-center text-sm font-semibold text-indigo-600">2</div>
                      <div>
                        <h4 className="font-semibold">Model Fitting & Validation</h4>
                        <p className="text-sm text-gray-600">Cross-validation, model comparison, predictive ability assessment</p>
                      </div>
                    </div>
                    <div className="flex items-center gap-3">
                      <div className="w-8 h-8 bg-indigo-100 rounded-full flex items-center justify-center text-sm font-semibold text-indigo-600">3</div>
                      <div>
                        <h4 className="font-semibold">Implementation & Monitoring</h4>
                        <p className="text-sm text-gray-600">Breeding program integration, performance tracking, continuous improvement</p>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Applications Section */}
      <section id="applications" className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Research Applications</h2>
            
            <div className="grid md:grid-cols-2 gap-6">
              <Card className="text-center hover:shadow-lg transition-all duration-300 transform hover:-translate-y-2">
                <CardHeader>
                  <div className="w-16 h-16 mx-auto mb-4 bg-blue-100 rounded-full flex items-center justify-center">
                    <span className="text-2xl">🌱</span>
                  </div>
                  <CardTitle className="text-lg">Plant Breeding</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-gray-600 mb-4">
                    Yield improvement, disease resistance, stress tolerance breeding
                  </p>
                  <div className="flex flex-wrap gap-1 justify-center">
                    <Badge variant="outline" className="text-xs">Crop Yield</Badge>
                    <Badge variant="outline" className="text-xs">Drought Tolerance</Badge>
                    <Badge variant="outline" className="text-xs">Disease Resistance</Badge>
                  </div>
                </CardContent>
              </Card>

              <Card className="text-center hover:shadow-lg transition-all duration-300 transform hover:-translate-y-2">
                <CardHeader>
                  <div className="w-16 h-16 mx-auto mb-4 bg-indigo-100 rounded-full flex items-center justify-center">
                    <span className="text-2xl">🐄</span>
                  </div>
                  <CardTitle className="text-lg">Animal Breeding</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-gray-600 mb-4">
                    Production traits, health characteristics, reproductive efficiency
                  </p>
                  <div className="flex flex-wrap gap-1 justify-center">
                    <Badge variant="outline" className="text-xs">Milk Production</Badge>
                    <Badge variant="outline" className="text-xs">Growth Rate</Badge>
                    <Badge variant="outline" className="text-xs">Disease Resistance</Badge>
                  </div>
                </CardContent>
              </Card>

              <Card className="text-center hover:shadow-lg transition-all duration-300 transform hover:-translate-y-2">
                <CardHeader>
                  <div className="w-16 h-16 mx-auto mb-4 bg-cyan-100 rounded-full flex items-center justify-center">
                    <span className="text-2xl">🧬</span>
                  </div>
                  <CardTitle className="text-lg">Genomic Selection</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-gray-600 mb-4">
                    DNA-based prediction, marker-assisted selection, genomic breeding values
                  </p>
                  <div className="flex flex-wrap gap-1 justify-center">
                    <Badge variant="outline" className="text-xs">SNP Arrays</Badge>
                    <Badge variant="outline" className="text-xs">GBLUP</Badge>
                    <Badge variant="outline" className="text-xs">Prediction Accuracy</Badge>
                  </div>
                </CardContent>
              </Card>

              <Card className="text-center hover:shadow-lg transition-all duration-300 transform hover:-translate-y-2">
                <CardHeader>
                  <div className="w-16 h-16 mx-auto mb-4 bg-purple-100 rounded-full flex items-center justify-center">
                    <span className="text-2xl">🌍</span>
                  </div>
                  <CardTitle className="text-lg">Climate Adaptation</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-gray-600 mb-4">
                    Heat tolerance, disease resilience, environmental stress breeding
                  </p>
                  <div className="flex flex-wrap gap-1 justify-center">
                    <Badge variant="outline" className="text-xs">Heat Stress</Badge>
                    <Badge variant="outline" className="text-xs">G×E Interactions</Badge>
                    <Badge variant="outline" className="text-xs">Resilience</Badge>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Current Research Projects</h2>
            
            <div className="space-y-6">
              <Card className="border-l-4 border-l-blue-600 hover:shadow-lg transition-shadow">
                <CardHeader>
                  <CardTitle className="text-lg">Multi-Trait Genomic Selection in Dairy Cattle</CardTitle>
                  <CardDescription>Improving production and health traits simultaneously</CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-700 mb-4">
                    Developing advanced genomic selection models that simultaneously improve milk production, fertility, 
                    and health traits while managing genetic correlations effectively.
                  </p>
                  <div className="flex flex-wrap gap-2">
                    <Badge variant="outline">Genomic Selection</Badge>
                    <Badge variant="outline">Multi-Trait Analysis</Badge>
                    <Badge variant="outline">Dairy Cattle</Badge>
                  </div>
                </CardContent>
              </Card>

              <Card className="border-l-4 border-l-indigo-600 hover:shadow-lg transition-shadow">
                <CardHeader>
                  <CardTitle className="text-lg">Climate-Resilient Crop Varieties</CardTitle>
                  <CardDescription>Quantitative genetics for drought and heat tolerance</CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-700 mb-4">
                    Applying quantitative genetic principles to develop crop varieties with enhanced tolerance 
                    to climate stress through advanced breeding value estimation.
                  </p>
                  <div className="flex flex-wrap gap-2">
                    <Badge variant="outline">Climate Adaptation</Badge>
                    <Badge variant="outline">Crop Breeding</Badge>
                    <Badge variant="outline">Stress Tolerance</Badge>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 bg-gradient-to-r from-blue-50 to-indigo-50">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Collaborate on Quantitative Genetics Research</h2>
          <p className="text-lg text-gray-700 mb-8">
            Join our efforts to advance statistical genetics and breeding methodologies
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Link href="/">
              <Button className="bg-blue-600 hover:bg-blue-700 px-8 py-3">
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