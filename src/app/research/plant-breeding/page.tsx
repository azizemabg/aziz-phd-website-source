'use client';

import { useState, useEffect } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { ArrowLeft, Sprout, Droplets, Sun, Shield, Target } from 'lucide-react';
import Link from 'next/link';

export default function PlantBreeding() {
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
                { id: 'crops', label: 'Crop Focus' },
                { id: 'innovations', label: 'Innovations' }
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
      <section className="relative bg-gradient-to-r from-green-600 to-emerald-600 text-white py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <div className="mb-6">
              <Sprout className="w-16 h-16 mx-auto mb-4" />
              <h1 className="text-4xl md:text-5xl font-bold mb-4">
                Plant Breeding
              </h1>
              <p className="text-xl mb-8 opacity-90">
                Crop improvement, disease resistance, yield enhancement, and climate adaptation strategies
              </p>
              <div className="flex flex-wrap justify-center gap-2">
                <Badge variant="secondary" className="px-3 py-1 bg-white/20 text-white border-white/30">Crop Improvement</Badge>
                <Badge variant="secondary" className="px-3 py-1 bg-white/20 text-white border-white/30">Disease Resistance</Badge>
                <Badge variant="secondary" className="px-3 py-1 bg-white/20 text-white border-white/30">Yield Enhancement</Badge>
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
              <Card className="border-l-4 border-l-green-600">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Target className="w-5 h-5 text-green-600" />
                    Breeding Objectives
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2 text-gray-700">
                    <li>• Enhanced yield potential and stability</li>
                    <li>• Disease and pest resistance</li>
                    <li>• Abiotic stress tolerance</li>
                    <li>• Improved nutritional quality</li>
                    <li>• Climate resilience traits</li>
                  </ul>
                </CardContent>
              </Card>

              <Card className="border-l-4 border-l-emerald-600">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Sprout className="w-5 h-5 text-emerald-600" />
                    Breeding Approaches
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2 text-gray-700">
                    <li>• Conventional hybrid breeding</li>
                    <li>• Marker-assisted selection</li>
                    <li>• Genomic selection</li>
                    <li>• Gene editing technologies</li>
                    <li>• Speed breeding techniques</li>
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
            <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Breeding Methodologies</h2>
            
            <div className="grid md:grid-cols-2 gap-6">
              <Card className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2 text-lg">
                    <Droplets className="w-5 h-5 text-green-600" />
                    Stress Tolerance Breeding
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-gray-600 mb-4">
                    Developing varieties with enhanced tolerance to drought, heat, salinity, and other environmental stresses
                  </p>
                  <div className="flex flex-wrap gap-1">
                    <Badge variant="outline" className="text-xs">Drought Tolerance</Badge>
                    <Badge variant="outline" className="text-xs">Heat Stress</Badge>
                    <Badge variant="outline" className="text-xs">Salinity Resistance</Badge>
                  </div>
                </CardContent>
              </Card>

              <Card className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2 text-lg">
                    <Shield className="w-5 h-5 text-emerald-600" />
                    Disease Resistance
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-gray-600 mb-4">
                    Incorporating resistance genes against major pathogens and pests through various breeding strategies
                  </p>
                  <div className="flex flex-wrap gap-1">
                    <Badge variant="outline" className="text-xs">Pathogen Resistance</Badge>
                    <Badge variant="outline" className="text-xs">Pest Resistance</Badge>
                    <Badge variant="outline" className="text-xs">Durable Immunity</Badge>
                  </div>
                </CardContent>
              </Card>

              <Card className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2 text-lg">
                    <Sun className="w-5 h-5 text-yellow-600" />
                    Yield Improvement
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-gray-600 mb-4">
                    Enhancing yield potential through improved photosynthetic efficiency and resource utilization
                  </p>
                  <div className="flex flex-wrap gap-1">
                    <Badge variant="outline" className="text-xs">Yield Potential</Badge>
                    <Badge variant="outline" className="text-xs">Harvest Index</Badge>
                    <Badge variant="outline" className="text-xs">Biomass</Badge>
                  </div>
                </CardContent>
              </Card>

              <Card className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2 text-lg">
                    <Sprout className="w-5 h-5 text-teal-600" />
                    Quality Enhancement
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-gray-600 mb-4">
                    Improving nutritional content, shelf life, and processing qualities of crop varieties
                  </p>
                  <div className="flex flex-wrap gap-1">
                    <Badge variant="outline" className="text-xs">Nutritional Quality</Badge>
                    <Badge variant="outline" className="text-xs">Shelf Life</Badge>
                    <Badge variant="outline" className="text-xs">Processing Traits</Badge>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Crop Focus Section */}
      <section id="crops" className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Crop Research Focus</h2>
            
            <div className="grid md:grid-cols-3 gap-6">
              <Card className="text-center hover:shadow-lg transition-all duration-300 transform hover:-translate-y-2">
                <CardHeader>
                  <div className="w-16 h-16 mx-auto mb-4 bg-yellow-100 rounded-full flex items-center justify-center">
                    <span className="text-2xl">🌾</span>
                  </div>
                  <CardTitle className="text-lg">Cereals</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-gray-600 mb-4">
                    Wheat, rice, maize, barley breeding for yield and stress tolerance
                  </p>
                  <div className="flex flex-wrap gap-1 justify-center">
                    <Badge variant="outline" className="text-xs">Wheat</Badge>
                    <Badge variant="outline" className="text-xs">Rice</Badge>
                    <Badge variant="outline" className="text-xs">Maize</Badge>
                  </div>
                </CardContent>
              </Card>

              <Card className="text-center hover:shadow-lg transition-all duration-300 transform hover:-translate-y-2">
                <CardHeader>
                  <div className="w-16 h-16 mx-auto mb-4 bg-green-100 rounded-full flex items-center justify-center">
                    <span className="text-2xl">🥬</span>
                  </div>
                  <CardTitle className="text-lg">Vegetables</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-gray-600 mb-4">
                    Tomato, pepper, leafy greens for quality and disease resistance
                  </p>
                  <div className="flex flex-wrap gap-1 justify-center">
                    <Badge variant="outline" className="text-xs">Tomato</Badge>
                    <Badge variant="outline" className="text-xs">Pepper</Badge>
                    <Badge variant="outline" className="text-xs">Leafy Greens</Badge>
                  </div>
                </CardContent>
              </Card>

              <Card className="text-center hover:shadow-lg transition-all duration-300 transform hover:-translate-y-2">
                <CardHeader>
                  <div className="w-16 h-16 mx-auto mb-4 bg-orange-100 rounded-full flex items-center justify-center">
                    <span className="text-2xl">🌻</span>
                  </div>
                  <CardTitle className="text-lg">Oilseeds</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-gray-600 mb-4">
                    Soybean, canola, sunflower for oil content and stress adaptation
                  </p>
                  <div className="flex flex-wrap gap-1 justify-center">
                    <Badge variant="outline" className="text-xs">Soybean</Badge>
                    <Badge variant="outline" className="text-xs">Canola</Badge>
                    <Badge variant="outline" className="text-xs">Sunflower</Badge>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Innovations Section */}
      <section id="innovations" className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Breeding Innovations</h2>
            
            <div className="space-y-6">
              <Card className="border-l-4 border-l-green-600 hover:shadow-lg transition-shadow">
                <CardHeader>
                  <CardTitle className="text-lg">Speed Breeding Protocols</CardTitle>
                  <CardDescription>Accelerated generation advancement for faster variety development</CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-700 mb-4">
                    Implementing controlled environment conditions and photoperiod manipulation to achieve 
                    4-6 generations per year in major crops.
                  </p>
                  <div className="flex flex-wrap gap-2">
                    <Badge variant="outline">Rapid Cycling</Badge>
                    <Badge variant="outline">Controlled Environment</Badge>
                    <Badge variant="outline">Generation Time</Badge>
                  </div>
                </CardContent>
              </Card>

              <Card className="border-l-4 border-l-emerald-600 hover:shadow-lg transition-shadow">
                <CardHeader>
                  <CardTitle className="text-lg">Genomic Selection Integration</CardTitle>
                  <CardDescription>DNA-based prediction for complex traits</CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-700 mb-4">
                    Developing and implementing genomic selection models for yield, quality, and stress 
                    tolerance traits across multiple crop species.
                  </p>
                  <div className="flex flex-wrap gap-2">
                    <Badge variant="outline">Genomic Prediction</Badge>
                    <Badge variant="outline">Marker-Assisted Selection</Badge>
                    <Badge variant="outline">Training Populations</Badge>
                  </div>
                </CardContent>
              </Card>

              <Card className="border-l-4 border-l-teal-600 hover:shadow-lg transition-shadow">
                <CardHeader>
                  <CardTitle className="text-lg">High-Throughput Phenotyping</CardTitle>
                  <CardDescription>Automated trait measurement and analysis</CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-700 mb-4">
                    Utilizing drone imaging, sensor networks, and AI for precise phenotyping of large breeding populations.
                  </p>
                  <div className="flex flex-wrap gap-2">
                    <Badge variant="outline">Remote Sensing</Badge>
                    <Badge variant="outline">AI Analysis</Badge>
                    <Badge variant="outline">Precision Phenotyping</Badge>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 bg-gradient-to-r from-green-50 to-emerald-50">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Advance Plant Breeding Research</h2>
          <p className="text-lg text-gray-700 mb-8">
            Collaborate on developing next-generation crop varieties for sustainable agriculture
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Link href="/">
              <Button className="bg-green-600 hover:bg-green-700 px-8 py-3">
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