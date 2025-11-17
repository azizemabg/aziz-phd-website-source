'use client';

import { useState, useEffect } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { ArrowLeft, Terminal, Database, BarChart3, Code, Cpu, Beaker } from 'lucide-react';
import Link from 'next/link';

export default function TechnicalTools() {
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
                { id: 'statistical', label: 'Statistical Software' },
                { id: 'genetic', label: 'Genetic Analysis' },
                { id: 'programming', label: 'Programming' }
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
              <Terminal className="w-16 h-16 mx-auto mb-4" />
              <h1 className="text-4xl md:text-5xl font-bold mb-4">
                Technical Tools & Software
              </h1>
              <p className="text-xl mb-8 opacity-90">
                Comprehensive expertise in statistical software, genetic analysis tools, and programming languages
              </p>
              <div className="flex flex-wrap justify-center gap-2">
                <Badge variant="secondary" className="px-3 py-1 bg-white/20 text-white border-white/30">Statistical Software</Badge>
                <Badge variant="secondary" className="px-3 py-1 bg-white/20 text-white border-white/30">Genetic Analysis</Badge>
                <Badge variant="secondary" className="px-3 py-1 bg-white/20 text-white border-white/30">Programming</Badge>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Overview Section */}
      <section id="overview" className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Technical Expertise Overview</h2>
            
            <div className="grid md:grid-cols-2 gap-8 mb-12">
              <Card className="border-l-4 border-l-emerald-600">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Cpu className="w-5 h-5 text-emerald-600" />
                    Core Technical Areas
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2 text-gray-700">
                    <li>• Statistical Software (R, SAS, SPSS)</li>
                    <li>• Genetic Analysis Software</li>
                    <li>• Molecular Biology Techniques</li>
                    <li>• Data Analysis & Visualization</li>
                    <li>• Experimental Design</li>
                  </ul>
                </CardContent>
              </Card>

              <Card className="border-l-4 border-l-teal-600">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Database className="w-5 h-5 text-teal-600" />
                    Advanced Applications
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2 text-gray-700">
                    <li>• Linux/Unix System Administration</li>
                    <li>• High-Performance Computing</li>
                    <li>• Cloud Computing Platforms</li>
                    <li>• Database Management</li>
                    <li>• Bioinformatics Pipelines</li>
                  </ul>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Statistical Software Section */}
      <section id="statistical" className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Statistical Software Expertise</h2>
            
            <div className="space-y-6">
              <Card className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2 text-lg">
                    <BarChart3 className="w-5 h-5 text-emerald-600" />
                    R Programming Language
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-700 mb-4">
                    Advanced proficiency in R for statistical analysis, data visualization, and genetic analysis.
                  </p>
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <h4 className="font-semibold text-emerald-700 mb-3">Statistical Analysis</h4>
                      <ul className="text-sm text-gray-600 space-y-2">
                        <li>• Linear and mixed-effects models (lme4, nlme)</li>
                        <li>• Generalized linear models (glm, glmmTMB)</li>
                        <li>• Survival analysis (survival, coxme)</li>
                        <li>• Time series analysis (forecast, tseries)</li>
                        <li>• Multivariate analysis (vegan, FactoMineR)</li>
                      </ul>
                    </div>
                    <div>
                      <h4 className="font-semibold text-emerald-700 mb-3">Genetic Analysis Packages</h4>
                      <ul className="text-sm text-gray-600 space-y-2">
                        <li>• Quantitative genetics (rrBLUP, BGLR)</li>
                        <li>• QTL mapping (qtl, R/qtl2)</li>
                        <li>• Population genetics (adegenet, hierfstat)</li>
                        <li>• Phylogenetics (ape, phangorn)</li>
                        <li>• Genomic selection (BGLR, rrBLUP)</li>
                      </ul>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2 text-lg">
                    <Database className="w-5 h-5 text-teal-600" />
                    SAS & SPSS
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-700 mb-4">
                    Enterprise-level statistical analysis for large-scale breeding programs and research.
                  </p>
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <h4 className="font-semibold text-teal-700 mb-3">SAS Applications</h4>
                      <ul className="text-sm text-gray-600 space-y-2">
                        <li>• PROC MIXED for mixed models</li>
                        <li>• PROC GLM for general linear models</li>
                        <li>• PROC GENMOD for generalized models</li>
                        <li>• PROC PHREG for survival analysis</li>
                        <li>• PROC IML for matrix operations</li>
                      </ul>
                    </div>
                    <div>
                      <h4 className="font-semibold text-teal-700 mb-3">SPSS Applications</h4>
                      <ul className="text-sm text-gray-600 space-y-2">
                        <li>• Complex survey data analysis</li>
                        <li>• Multivariate analysis procedures</li>
                        <li>• Custom tables and reporting</li>
                        <li>• Syntax programming</li>
                        <li>• Integration with other systems</li>
                      </ul>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Genetic Analysis Section */}
      <section id="genetic" className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Genetic Analysis Software</h2>
            
            <div className="space-y-6">
              <Card className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2 text-lg">
                    <Code className="w-5 h-5 text-emerald-600" />
                    BLUPF90 Family
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-700 mb-4">
                    Comprehensive suite for genetic evaluation and genomic prediction in livestock breeding.
                  </p>
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <h4 className="font-semibold text-emerald-700 mb-3">Core Programs</h4>
                      <ul className="text-sm text-gray-600 space-y-2">
                        <li>• BLUPF90 for basic genetic evaluation</li>
                        <li>• AIREMLF90 for variance component estimation</li>
                        <li>• GIBBSF90 for Bayesian analysis</li>
                        <li>• GBLUPF90 for genomic prediction</li>
                        <li>• POSTGSF90 for post-analysis</li>
                      </ul>
                    </div>
                    <div>
                      <h4 className="font-semibold text-emerald-700 mb-3">Advanced Applications</h4>
                      <ul className="text-sm text-gray-600 space-y-2">
                        <li>• Single-step genomic evaluation</li>
                        <li>• Multi-trait analysis</li>
                        <li>• Random regression models</li>
                        <li>• Reaction norm models</li>
                        <li>• Custom likelihood functions</li>
                      </ul>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2 text-lg">
                    <Beaker className="w-5 h-5 text-teal-600" />
                    PLINK & Genomic Tools
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-700 mb-4">
                    Comprehensive toolkit for genome-wide association studies and genomic data management.
                  </p>
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <h4 className="font-semibold text-teal-700 mb-3">PLINK Applications</h4>
                      <ul className="text-sm text-gray-600 space-y-2">
                        <li>• Quality control and filtering</li>
                        <li>• Population structure analysis</li>
                        <li>• Association testing</li>
                        <li>• Haplotype analysis</li>
                        <li>• LD calculation and visualization</li>
                      </ul>
                    </div>
                    <div>
                      <h4 className="font-semibold text-teal-700 mb-3">Other Genomic Tools</h4>
                      <ul className="text-sm text-gray-600 space-y-2">
                        <li>• GCTA for genetic relationship analysis</li>
                        <li>• EIGENSOFT for population stratification</li>
                        <li>• VCFtools for variant analysis</li>
                        <li>• BEDTools for genomic intervals</li>
                        <li>• SAMtools for sequence analysis</li>
                      </ul>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Programming Section */}
      <section id="programming" className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Programming & System Skills</h2>
            
            <div className="space-y-6">
              <Card className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2 text-lg">
                    <Terminal className="w-5 h-5 text-emerald-600" />
                    Linux/Unix & Shell Scripting
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-700 mb-4">
                    Advanced Linux system administration and shell scripting for bioinformatics workflows.
                  </p>
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <h4 className="font-semibold text-emerald-700 mb-3">System Administration</h4>
                      <ul className="text-sm text-gray-600 space-y-2">
                        <li>• User and permission management</li>
                        <li>• Process monitoring and control</li>
                        <li>• System performance optimization</li>
                        <li>• Backup and recovery procedures</li>
                        <li>• Security hardening</li>
                      </ul>
                    </div>
                    <div>
                      <h4 className="font-semibold text-emerald-700 mb-3">Shell Scripting</h4>
                      <ul className="text-sm text-gray-600 space-y-2">
                        <li>• Bash scripting for automation</li>
                        <li>• Pipeline development</li>
                        <li>• File system operations</li>
                        <li>• Text processing with awk/sed</li>
                        <li>• Job scheduling with cron</li>
                      </ul>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2 text-lg">
                    <Code className="w-5 h-5 text-teal-600" />
                    Python Programming
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-700 mb-4">
                    Python programming for data analysis, machine learning, and bioinformatics applications.
                  </p>
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <h4 className="font-semibold text-teal-700 mb-3">Data Science Libraries</h4>
                      <ul className="text-sm text-gray-600 space-y-2">
                        <li>• NumPy for numerical computing</li>
                        <li>• Pandas for data manipulation</li>
                        <li>• Matplotlib/Seaborn for visualization</li>
                        <li>• Scikit-learn for machine learning</li>
                        <li>• SciPy for scientific computing</li>
                      </ul>
                    </div>
                    <div>
                      <h4 className="font-semibold text-teal-700 mb-3">Bioinformatics Tools</h4>
                      <ul className="text-sm text-gray-600 space-y-2">
                        <li>• Biopython for sequence analysis</li>
                        <li>• PyVCF for variant analysis</li>
                        <li>• DendroPy for phylogenetics</li>
                        <li>• NetworkX for network analysis</li>
                        <li>• TensorFlow/PyTorch for deep learning</li>
                      </ul>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2 text-lg">
                    <Database className="w-5 h-5 text-purple-600" />
                    Database & Big Data Technologies
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-700 mb-4">
                    Database management and big data technologies for handling large-scale genomic datasets.
                  </p>
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <h4 className="font-semibold text-purple-700 mb-3">Database Systems</h4>
                      <ul className="text-sm text-gray-600 space-y-2">
                        <li>• MySQL/MariaDB for relational data</li>
                        <li>• PostgreSQL for advanced analytics</li>
                        <li>• MongoDB for document storage</li>
                        <li>• SQLite for lightweight applications</li>
                        <li>• Redis for caching</li>
                      </ul>
                    </div>
                    <div>
                      <h4 className="font-semibold text-purple-700 mb-3">Big Data Technologies</h4>
                      <ul className="text-sm text-gray-600 space-y-2">
                        <li>• Apache Hadoop ecosystem</li>
                        <li>• Apache Spark for distributed computing</li>
                        <li>• Docker for containerization</li>
                        <li>• Kubernetes for orchestration</li>
                        <li>• Cloud platforms (AWS, GCP, Azure)</li>
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
      <section className="py-16 bg-gradient-to-r from-emerald-50 to-teal-50">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Technical Collaboration</h2>
          <p className="text-lg text-gray-700 mb-8">
            Partner in implementing advanced technical solutions for agricultural research
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Link href="/">
              <Button className="bg-emerald-600 hover:bg-emerald-700 px-8 py-3">
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