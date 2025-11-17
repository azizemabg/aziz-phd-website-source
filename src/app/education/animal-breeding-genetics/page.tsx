'use client';

import { useState, useEffect } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { ArrowLeft, Calendar, BookOpen, Award, Target, Users, Lightbulb, Dna } from 'lucide-react';
import Link from 'next/link';

export default function AnimalBreedingGenetics() {
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
                { id: 'curriculum', label: 'Curriculum' },
                { id: 'research', label: 'Research' },
                { id: 'achievements', label: 'Achievements' }
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
      <section className="relative bg-gradient-to-r from-emerald-600 to-teal-600 text-white py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <div className="mb-6">
              <Dna className="w-16 h-16 mx-auto mb-4" />
              <h1 className="text-4xl md:text-5xl font-bold mb-4">
                Master of Animal Breeding and Genetics
              </h1>
              <p className="text-xl mb-8 opacity-90">
                Specialized training in animal genetics, breeding strategies, and genetic improvement programs
              </p>
              <div className="flex flex-wrap justify-center gap-2">
                <Badge variant="secondary" className="px-3 py-1 bg-white/20 text-white border-white/30">2 Years Program</Badge>
                <Badge variant="secondary" className="px-3 py-1 bg-white/20 text-white border-white/30">Research Intensive</Badge>
                <Badge variant="secondary" className="px-3 py-1 bg-white/20 text-white border-white/30">Specialized Focus</Badge>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Overview Section */}
      <section id="overview" className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Program Overview</h2>
            
            <div className="grid md:grid-cols-2 gap-8 mb-12">
              <Card className="border-l-4 border-l-emerald-600">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Target className="w-5 h-5 text-emerald-600" />
                    Program Objectives
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2 text-gray-700">
                    <li>• Master advanced animal genetics principles</li>
                    <li>• Develop expertise in population genetics</li>
                    <li>• Apply molecular breeding techniques</li>
                    <li>• Design effective breeding programs</li>
                    <li>• Enhance livestock genetic improvement</li>
                  </ul>
                </CardContent>
              </Card>

              <Card className="border-l-4 border-l-teal-600">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Lightbulb className="w-5 h-5 text-teal-600" />
                    Key Learning Outcomes
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2 text-gray-700">
                    <li>• Advanced population genetics knowledge</li>
                    <li>• Molecular marker applications</li>
                    <li>• Statistical analysis expertise</li>
                    <li>• Breeding program management</li>
                    <li>• Genetic disease management</li>
                  </ul>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Curriculum Section */}
      <section id="curriculum" className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Core Curriculum</h2>
            
            <div className="space-y-6">
              <Card className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <CardTitle className="text-lg">Year 1: Foundation Courses</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="grid md:grid-cols-2 gap-4">
                    <div className="space-y-3">
                      <h4 className="font-semibold text-emerald-700">Population Genetics</h4>
                      <p className="text-sm text-gray-600">Genetic drift, gene flow, selection, mutation, and population structure</p>
                      
                      <h4 className="font-semibold text-emerald-700">Quantitative Genetics</h4>
                      <p className="text-sm text-gray-600">Heritability, genetic correlations, breeding values, selection indices</p>
                    </div>
                    <div className="space-y-3">
                      <h4 className="font-semibold text-emerald-700">Molecular Genetics</h4>
                      <p className="text-sm text-gray-600">DNA markers, gene mapping, genomic selection, marker-assisted selection</p>
                      
                      <h4 className="font-semibold text-emerald-700">Animal Breeding Methods</h4>
                      <p className="text-sm text-gray-600">Selection methods, crossbreeding, inbreeding management, breed development</p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <CardTitle className="text-lg">Year 2: Advanced Applications</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="grid md:grid-cols-2 gap-4">
                    <div className="space-y-3">
                      <h4 className="font-semibold text-teal-700">Genomic Selection</h4>
                      <p className="text-sm text-gray-600">Genome-wide prediction, SNP arrays, genomic relationship matrices</p>
                      
                      <h4 className="font-semibold text-teal-700">Statistical Genomics</h4>
                      <p className="text-sm text-gray-600">Mixed models, Bayesian methods, machine learning applications</p>
                    </div>
                    <div className="space-y-3">
                      <h4 className="font-semibold text-teal-700">Breeding Program Design</h4>
                      <p className="text-sm text-gray-600">Program optimization, economic evaluation, implementation strategies</p>
                      
                      <h4 className="font-semibold text-teal-700">Research Thesis</h4>
                      <p className="text-sm text-gray-600">Original research in animal genetics and breeding</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Research Section */}
      <section id="research" className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Research Focus Areas</h2>
            
            <div className="grid md:grid-cols-3 gap-6">
              <Card className="text-center hover:shadow-lg transition-all duration-300 transform hover:-translate-y-2">
                <CardHeader>
                  <div className="w-16 h-16 mx-auto mb-4 bg-emerald-100 rounded-full flex items-center justify-center">
                    <span className="text-2xl">🧬</span>
                  </div>
                  <CardTitle className="text-lg">Genomic Selection</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-gray-600">
                    Advanced genomic prediction models for livestock improvement
                  </p>
                </CardContent>
              </Card>

              <Card className="text-center hover:shadow-lg transition-all duration-300 transform hover:-translate-y-2">
                <CardHeader>
                  <div className="w-16 h-16 mx-auto mb-4 bg-teal-100 rounded-full flex items-center justify-center">
                    <span className="text-2xl">🐄</span>
                  </div>
                  <CardTitle className="text-lg">Livestock Improvement</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-gray-600">
                    Genetic enhancement of production and health traits
                  </p>
                </CardContent>
              </Card>

              <Card className="text-center hover:shadow-lg transition-all duration-300 transform hover:-translate-y-2">
                <CardHeader>
                  <div className="w-16 h-16 mx-auto mb-4 bg-cyan-100 rounded-full flex items-center justify-center">
                    <span className="text-2xl">🔬</span>
                  </div>
                  <CardTitle className="text-lg">Molecular Markers</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-gray-600">
                    Development and application of genetic markers
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Achievements Section */}
      <section id="achievements" className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Academic Achievements</h2>
            
            <div className="space-y-6">
              <Card className="border-l-4 border-l-emerald-600">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Award className="w-5 h-5 text-emerald-600" />
                    Excellence in Genetic Research
                  </CardTitle>
                  <CardDescription>Outstanding contribution to animal genetics research</CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-700">
                    Recognized for innovative research on genomic selection in dairy cattle breeding programs
                  </p>
                </CardContent>
              </Card>

              <Card className="border-l-4 border-l-teal-600">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Users className="w-5 h-5 text-teal-600" />
                    Industry Collaboration Leadership
                  </CardTitle>
                  <CardDescription>Successful partnerships with livestock industry</CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-700">
                    Led collaborative research projects with major breeding organizations and livestock producers
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 bg-gradient-to-r from-emerald-50 to-teal-50">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Explore Animal Genetics Further</h2>
          <p className="text-lg text-gray-700 mb-8">
            Discover how specialized training can advance your livestock research career
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Link href="/">
              <Button className="bg-emerald-600 hover:bg-emerald-700 px-8 py-3">
                Back to Home
              </Button>
            </Link>
            <Link href="/research">
              <Button variant="outline" className="px-8 py-3">
                View Research Interests
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}