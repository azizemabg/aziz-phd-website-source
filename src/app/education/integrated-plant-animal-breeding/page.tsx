'use client';

import { useState, useEffect } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { ArrowLeft, Calendar, BookOpen, Award, Target, Users, Lightbulb } from 'lucide-react';
import Link from 'next/link';

export default function IntegratedPlantAnimalBreeding() {
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
      <section className="relative bg-gradient-to-r from-green-600 to-emerald-600 text-white py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <div className="mb-6">
              <BookOpen className="w-16 h-16 mx-auto mb-4" />
              <h1 className="text-4xl md:text-5xl font-bold mb-4">
                Master of Integrated Plant and Animal Breeding
              </h1>
              <p className="text-xl mb-8 opacity-90">
                Advanced interdisciplinary program combining cutting-edge plant and animal breeding methodologies
              </p>
              <div className="flex flex-wrap justify-center gap-2">
                <Badge variant="secondary" className="px-3 py-1 bg-white/20 text-white border-white/30">2 Years Program</Badge>
                <Badge variant="secondary" className="px-3 py-1 bg-white/20 text-white border-white/30">Research Focus</Badge>
                <Badge variant="secondary" className="px-3 py-1 bg-white/20 text-white border-white/30">Interdisciplinary</Badge>
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
              <Card className="border-l-4 border-l-green-600">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Target className="w-5 h-5 text-green-600" />
                    Program Objectives
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2 text-gray-700">
                    <li>• Integrate plant and animal breeding principles</li>
                    <li>• Develop expertise in quantitative genetics</li>
                    <li>• Master genomic selection techniques</li>
                    <li>• Apply breeding program design strategies</li>
                    <li>• Address sustainable agriculture challenges</li>
                  </ul>
                </CardContent>
              </Card>

              <Card className="border-l-4 border-l-emerald-600">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Lightbulb className="w-5 h-5 text-emerald-600" />
                    Key Learning Outcomes
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2 text-gray-700">
                    <li>• Advanced statistical genetics knowledge</li>
                    <li>• Practical breeding program management</li>
                    <li>• Molecular breeding techniques</li>
                    <li>• Bioinformatics and data analysis</li>
                    <li>• Research methodology and design</li>
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
                      <h4 className="font-semibold text-green-700">Quantitative Genetics</h4>
                      <p className="text-sm text-gray-600">Advanced statistical methods in breeding, heritability estimation, genetic correlation analysis</p>
                      
                      <h4 className="font-semibold text-green-700">Molecular Genetics</h4>
                      <p className="text-sm text-gray-600">DNA markers, gene mapping, molecular techniques in breeding programs</p>
                    </div>
                    <div className="space-y-3">
                      <h4 className="font-semibold text-green-700">Plant Breeding Principles</h4>
                      <p className="text-sm text-gray-600">Selection methods, hybrid development, breeding for stress resistance</p>
                      
                      <h4 className="font-semibold text-green-700">Animal Breeding Strategies</h4>
                      <p className="text-sm text-gray-600">Population genetics, selection indices, breeding value estimation</p>
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
                      <h4 className="font-semibold text-emerald-700">Genomic Selection</h4>
                      <p className="text-sm text-gray-600">Genome-wide association studies, genomic prediction models</p>
                      
                      <h4 className="font-semibold text-emerald-700">Bioinformatics</h4>
                      <p className="text-sm text-gray-600">Sequence analysis, database management, computational tools</p>
                    </div>
                    <div className="space-y-3">
                      <h4 className="font-semibold text-emerald-700">Breeding Program Design</h4>
                      <p className="text-sm text-gray-600">Program optimization, resource allocation, implementation strategies</p>
                      
                      <h4 className="font-semibold text-emerald-700">Research Thesis</h4>
                      <p className="text-sm text-gray-600">Independent research project under faculty supervision</p>
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
                  <div className="w-16 h-16 mx-auto mb-4 bg-green-100 rounded-full flex items-center justify-center">
                    <span className="text-2xl">🧬</span>
                  </div>
                  <CardTitle className="text-lg">Climate Resilience</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-gray-600">
                    Developing breeding strategies for climate-adaptive crops and livestock
                  </p>
                </CardContent>
              </Card>

              <Card className="text-center hover:shadow-lg transition-all duration-300 transform hover:-translate-y-2">
                <CardHeader>
                  <div className="w-16 h-16 mx-auto mb-4 bg-emerald-100 rounded-full flex items-center justify-center">
                    <span className="text-2xl">🌱</span>
                  </div>
                  <CardTitle className="text-lg">Sustainable Agriculture</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-gray-600">
                    Integrated approaches for sustainable food production systems
                  </p>
                </CardContent>
              </Card>

              <Card className="text-center hover:shadow-lg transition-all duration-300 transform hover:-translate-y-2">
                <CardHeader>
                  <div className="w-16 h-16 mx-auto mb-4 bg-teal-100 rounded-full flex items-center justify-center">
                    <span className="text-2xl">📊</span>
                  </div>
                  <CardTitle className="text-lg">Data-Driven Breeding</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-gray-600">
                    Advanced statistical methods and machine learning in breeding
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
              <Card className="border-l-4 border-l-green-600">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Award className="w-5 h-5 text-green-600" />
                    Research Excellence Award
                  </CardTitle>
                  <CardDescription>Outstanding contribution to integrated breeding research</CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-700">
                    Recognized for innovative research on climate-resilient breeding strategies combining plant and animal approaches
                  </p>
                </CardContent>
              </Card>

              <Card className="border-l-4 border-l-emerald-600">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Users className="w-5 h-5 text-emerald-600" />
                    Leadership in Collaborative Projects
                  </CardTitle>
                  <CardDescription>Coordinated multi-disciplinary research initiatives</CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-700">
                    Led collaborative projects involving plant scientists, animal geneticists, and data analysts
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 bg-gradient-to-r from-green-50 to-emerald-50">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Ready to Learn More?</h2>
          <p className="text-lg text-gray-700 mb-8">
            Explore how this integrated approach can advance your research career
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Link href="/">
              <Button className="bg-green-600 hover:bg-green-700 px-8 py-3">
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