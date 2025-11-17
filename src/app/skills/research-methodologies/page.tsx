'use client';

import { useState, useEffect } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { ArrowLeft, Microscope, Dna, BarChart3, Calculator, Database, Lightbulb } from 'lucide-react';
import Link from 'next/link';

export default function ResearchMethodologies() {
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
                { id: 'genomic', label: 'Genomic Methods' },
                { id: 'statistical', label: 'Statistical Methods' },
                { id: 'experimental', label: 'Experimental Design' }
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
      <section className="relative bg-gradient-to-r from-blue-600 to-purple-600 text-white py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <div className="mb-6">
              <Microscope className="w-16 h-16 mx-auto mb-4" />
              <h1 className="text-4xl md:text-5xl font-bold mb-4">
                Research Methodologies
              </h1>
              <p className="text-xl mb-8 opacity-90">
                Advanced research techniques and methodologies for plant and animal breeding
              </p>
              <div className="flex flex-wrap justify-center gap-2">
                <Badge variant="secondary" className="px-3 py-1 bg-white/20 text-white border-white/30">Genomic Selection</Badge>
                <Badge variant="secondary" className="px-3 py-1 bg-white/20 text-white border-white/30">Statistical Genetics</Badge>
                <Badge variant="secondary" className="px-3 py-1 bg-white/20 text-white border-white/30">Experimental Design</Badge>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Overview Section */}
      <section id="overview" className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Methodology Overview</h2>
            
            <div className="grid md:grid-cols-2 gap-8 mb-12">
              <Card className="border-l-4 border-l-blue-600">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Lightbulb className="w-5 h-5 text-blue-600" />
                    Core Competencies
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2 text-gray-700">
                    <li>• Genomic Selection & Marker-Assisted Breeding</li>
                    <li>• Quantitative Trait Locus (QTL) Mapping</li>
                    <li>• Statistical Genetics & Bioinformatics</li>
                    <li>• Population Genetics Analysis</li>
                    <li>• Breeding Program Design & Management</li>
                  </ul>
                </CardContent>
              </Card>

              <Card className="border-l-4 border-l-purple-600">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Database className="w-5 h-5 text-purple-600" />
                    Technical Applications
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2 text-gray-700">
                    <li>• High-throughput phenotyping</li>
                    <li>• Multi-omics data integration</li>
                    <li>• Machine learning applications</li>
                    <li>• Precision breeding strategies</li>
                    <li>• Systems biology approaches</li>
                  </ul>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Genomic Methods Section */}
      <section id="genomic" className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Genomic Methods</h2>
            
            <div className="space-y-6">
              <Card className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2 text-lg">
                    <Dna className="w-5 h-5 text-blue-600" />
                    Genomic Selection & Marker-Assisted Breeding
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-700 mb-4">
                    Advanced genomic selection methodologies for predicting breeding values and accelerating genetic progress.
                  </p>
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <h4 className="font-semibold text-blue-700 mb-3">Genomic Selection Models</h4>
                      <ul className="text-sm text-gray-600 space-y-2">
                        <li>• GBLUP (Genomic Best Linear Unbiased Prediction)</li>
                        <li>• Bayesian methods (BayesA, BayesB, BayesCπ)</li>
                        <li>• Reproducing Kernel Hilbert Space (RKHS)</li>
                        <li>• Machine Learning approaches (Random Forest, SVM)</li>
                        <li>• Deep Learning for genomic prediction</li>
                      </ul>
                    </div>
                    <div>
                      <h4 className="font-semibold text-blue-700 mb-3">Marker-Assisted Selection</h4>
                      <ul className="text-sm text-gray-600 space-y-2">
                        <li>• SNP marker discovery and validation</li>
                        <li>• QTL mapping and fine mapping</li>
                        <li>• Marker-trait association analysis</li>
                        <li>• Haplotype-based selection</li>
                        <li>• Pyramiding resistance genes</li>
                      </ul>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2 text-lg">
                    <BarChart3 className="w-5 h-5 text-purple-600" />
                    Quantitative Trait Locus (QTL) Mapping
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-700 mb-4">
                    Statistical methods for identifying genomic regions associated with quantitative traits.
                  </p>
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <h4 className="font-semibold text-purple-700 mb-3">Mapping Populations</h4>
                      <ul className="text-sm text-gray-600 space-y-2">
                        <li>• Bi-parental populations (F2, RILs, backcross)</li>
                        <li>• Multi-parent advanced generation inter-cross (MAGIC)</li>
                        <li>• Nested association mapping (NAM)</li>
                        <li>• Genome-wide association studies (GWAS)</li>
                        <li>• Recombinant inbred line development</li>
                      </ul>
                    </div>
                    <div>
                      <h4 className="font-semibold text-purple-700 mb-3">Statistical Methods</h4>
                      <ul className="text-sm text-gray-600 space-y-2">
                        <li>• Interval mapping and composite interval mapping</li>
                        <li>• Multiple QTL mapping (MQM)</li>
                        <li>• Mixed linear models for GWAS</li>
                        <li>• Bayesian QTL mapping</li>
                        <li>• Epistasis interaction analysis</li>
                      </ul>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Statistical Methods Section */}
      <section id="statistical" className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Statistical Genetics & Bioinformatics</h2>
            
            <div className="space-y-6">
              <Card className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2 text-lg">
                    <Calculator className="w-5 h-5 text-blue-600" />
                    Statistical Genetics
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-700 mb-4">
                    Advanced statistical methods for analyzing genetic data and estimating genetic parameters.
                  </p>
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <h4 className="font-semibold text-blue-700 mb-3">Variance Component Estimation</h4>
                      <ul className="text-sm text-gray-600 space-y-2">
                        <li>• REML (Restricted Maximum Likelihood)</li>
                        <li>• Bayesian variance component estimation</li>
                        <li>• Animal model and plant model</li>
                        <li>• Multi-trait and multi-environment models</li>
                        <li>• Genomic relationship matrices</li>
                      </ul>
                    </div>
                    <div>
                      <h4 className="font-semibold text-blue-700 mb-3">Genetic Parameter Estimation</h4>
                      <ul className="text-sm text-gray-600 space-y-2">
                        <li>• Heritability estimation</li>
                        <li>• Genetic correlation analysis</li>
                        <li>• Breeding value prediction</li>
                        <li>• Selection index construction</li>
                        <li>• Genetic trend analysis</li>
                      </ul>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2 text-lg">
                    <Database className="w-5 h-5 text-purple-600" />
                    Bioinformatics & Data Analysis
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-700 mb-4">
                    Computational tools and pipelines for analyzing large-scale biological data.
                  </p>
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <h4 className="font-semibold text-purple-700 mb-3">Sequence Analysis</h4>
                      <ul className="text-sm text-gray-600 space-y-2">
                        <li>• Next-generation sequencing (NGS) analysis</li>
                        <li>• Variant calling and SNP discovery</li>
                        <li>• Genome assembly and annotation</li>
                        <li>• Transcriptome analysis (RNA-seq)</li>
                        <li>• Metagenomics and microbiome analysis</li>
                      </ul>
                    </div>
                    <div>
                      <h4 className="font-semibold text-purple-700 mb-3">Data Integration</h4>
                      <ul className="text-sm text-gray-600 space-y-2">
                        <li>• Multi-omics data integration</li>
                        <li>• Network analysis and pathway mapping</li>
                        <li>• Machine learning for pattern recognition</li>
                        <li>• Big data management and visualization</li>
                        <li>• Cloud computing for genomics</li>
                      </ul>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Experimental Design Section */}
      <section id="experimental" className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Population Genetics & Experimental Design</h2>
            
            <div className="space-y-6">
              <Card className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2 text-lg">
                    <BarChart3 className="w-5 h-5 text-blue-600" />
                    Population Genetics Analysis
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-700 mb-4">
                    Analysis of genetic variation and evolutionary processes in populations.
                  </p>
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <h4 className="font-semibold text-blue-700 mb-3">Genetic Diversity</h4>
                      <ul className="text-sm text-gray-600 space-y-2">
                        <li>• Allele frequency estimation</li>
                        <li>• Heterozygosity and inbreeding coefficients</li>
                        <li>• Population structure analysis</li>
                        <li>• Phylogenetic analysis</li>
                        <li>• Effective population size estimation</li>
                      </ul>
                    </div>
                    <div>
                      <h4 className="font-semibold text-blue-700 mb-3">Evolutionary Forces</h4>
                      <ul className="text-sm text-gray-600 space-y-2">
                        <li>• Genetic drift and gene flow</li>
                        <li>• Selection pressure analysis</li>
                        <li>• Mutation rate estimation</li>
                        <li>• Linkage disequilibrium analysis</li>
                        <li>• Coalescent theory applications</li>
                      </ul>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2 text-lg">
                    <Lightbulb className="w-5 h-5 text-purple-600" />
                    Breeding Program Design & Management
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-700 mb-4">
                    Strategic design and implementation of breeding programs for genetic improvement.
                  </p>
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <h4 className="font-semibold text-purple-700 mb-3">Program Design</h4>
                      <ul className="text-sm text-gray-600 space-y-2">
                        <li>• Breeding objective definition</li>
                        <li>• Selection scheme optimization</li>
                        <li>• Mating system design</li>
                        <li>• Resource allocation planning</li>
                        <li>• Genetic gain prediction</li>
                      </ul>
                    </div>
                    <div>
                      <h4 className="font-semibold text-purple-700 mb-3">Program Management</h4>
                      <ul className="text-sm text-gray-600 space-y-2">
                        <li>• Performance monitoring</li>
                        <li>• Genetic evaluation systems</li>
                        <li>• Decision support tools</li>
                        <li>• Risk management strategies</li>
                        <li>• Stakeholder engagement</li>
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
      <section className="py-16 bg-gradient-to-r from-blue-50 to-purple-50">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Research Methodology Collaboration</h2>
          <p className="text-lg text-gray-700 mb-8">
            Partner in developing cutting-edge research methodologies for agricultural improvement
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