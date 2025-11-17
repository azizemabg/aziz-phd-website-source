'use client';

import { useState, useEffect, useRef } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Mail, Phone, MapPin, GraduationCap, BookOpen, Award, ChevronDown, Upload, Menu, X, ExternalLink, ArrowRight } from 'lucide-react';
import Link from 'next/link';
import { getContentByCategory, getFeaturedContent } from '@/data/content';

export default function Home() {
  const [activeSection, setActiveSection] = useState('hero');
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [profileImage, setProfileImage] = useState('/PUTIHCROP.jpg');
  const [headerBackground, setHeaderBackground] = useState('/background.jpg');
  const fileInputRef = useRef<HTMLInputElement>(null);
  const bgInputRef = useRef<HTMLInputElement>(null);

  // Get dynamic content
  const researchContent = getContentByCategory('research');
  const educationContent = getContentByCategory('education');
  const publicationsContent = getContentByCategory('publications');
  const skillsContent = getContentByCategory('skills');
  const featuredContent = getFeaturedContent();

  // Smooth scroll to section
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
      setActiveSection(sectionId);
      setIsMenuOpen(false);
    }
  };

  // Handle profile image upload
  const handleProfileImageUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (e) => {
        setProfileImage(e.target?.result as string);
      };
      reader.readAsDataURL(file);
    }
  };

  // Handle background image upload
  const handleBackgroundUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (e) => {
        setHeaderBackground(e.target?.result as string);
      };
      reader.readAsDataURL(file);
    }
  };

  // Handle email contact
  const handleContactClick = () => {
    window.location.href = 'mailto:azize@example.com?subject=PhD Opportunity Inquiry';
  };

  // Handle phone call
  const handlePhoneClick = () => {
    window.location.href = 'tel:+15551234567';
  };

  // Scroll spy for active section
  useEffect(() => {
    const handleScroll = () => {
      const sections = ['hero', 'education', 'research', 'publications', 'skills', 'contact'];
      const scrollPosition = window.scrollY + 100;

      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const { offsetTop, offsetHeight } = element;
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-slate-100">
      {/* Navigation Menu */}
      <nav className="fixed top-0 left-0 right-0 bg-white/95 backdrop-blur-sm shadow-sm z-50">
        <div className="container mx-auto px-4">
          <div className="flex justify-between items-center h-16">
            <div className="text-xl font-bold text-green-700">Azize M. Abg</div>
            
            {/* Desktop Navigation */}
            <div className="hidden md:flex space-x-8">
              {[
                { id: 'hero', label: 'Home' },
                { id: 'education', label: 'Education' },
                { id: 'research', label: 'Research' },
                { id: 'publications', label: 'Publications' },
                { id: 'skills', label: 'Skills' },
                { id: 'contact', label: 'Contact' }
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

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="md:hidden p-2 rounded-lg hover:bg-gray-100"
            >
              {isMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>

          {/* Mobile Navigation */}
          {isMenuOpen && (
            <div className="md:hidden py-4 border-t">
              {[
                { id: 'hero', label: 'Home' },
                { id: 'education', label: 'Education' },
                { id: 'research', label: 'Research' },
                { id: 'publications', label: 'Publications' },
                { id: 'skills', label: 'Skills' },
                { id: 'contact', label: 'Contact' }
              ].map((item) => (
                <button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className={`block w-full text-left px-4 py-2 text-sm font-medium transition-colors hover:text-green-600 hover:bg-gray-50 ${
                    activeSection === item.id ? 'text-green-600 bg-green-50' : 'text-gray-700'
                  }`}
                >
                  {item.label}
                </button>
              ))}
            </div>
          )}
        </div>
      </nav>

      {/* Hero Section */}
      <section id="hero" className="relative min-h-screen flex items-center justify-center overflow-hidden">
        {/* Background Image */}
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: `url(${headerBackground})` }}
        >
          <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-black/30 to-black/50"></div>
        </div>
        
        <div className="relative z-10 container mx-auto px-4 py-20">
          <div className="max-w-4xl mx-auto text-center text-white">
            <div className="mb-8">
              {/* Profile Picture */}
              <div className="relative w-40 h-40 md:w-48 md:h-48 mx-auto mb-8 group">
                <img
                  src={profileImage}
                  alt="Azize M. Abg"
                  className="w-full h-full rounded-full object-cover border-4 border-white/20 shadow-2xl"
                />
                <button
                  onClick={() => fileInputRef.current?.click()}
                  className="absolute inset-0 flex items-center justify-center bg-black/50 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                >
                  <Upload className="w-8 h-8 text-white" />
                </button>
                <input
                  ref={fileInputRef}
                  type="file"
                  accept="image/*"
                  onChange={handleProfileImageUpload}
                  className="hidden"
                />
              </div>
              
              <h1 className="text-4xl md:text-6xl font-bold mb-4 drop-shadow-lg">
                Muhammad Aziz Muslim 
              </h1>
              <p className="text-xl md:text-2xl mb-2 drop-shadow-md">
                MSc in Integrated Plant and Animal Breeding (Uni Goettingen)
              </p>
              <p className="text-lg md:text-xl mb-6 drop-shadow-md">
                MSc in Animal Breeding and Genetics (BOKU)
              </p>
              <div className="flex flex-wrap justify-center gap-2 mb-8">
                <Badge variant="secondary" className="px-3 py-1 bg-white/20 text-white border-white/30">Plant Breeding</Badge>
                <Badge variant="secondary" className="px-3 py-1 bg-white/20 text-white border-white/30">Animal Genetics</Badge>
                <Badge variant="secondary" className="px-3 py-1 bg-white/20 text-white border-white/30">Quantitative Genetics</Badge>
                <Badge variant="secondary" className="px-3 py-1 bg-white/20 text-white border-white/30">Molecular Breeding</Badge>
              </div>
            </div>
            
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <Button 
                onClick={() => scrollToSection('education')}
                className="bg-green-600 hover:bg-green-700 text-white px-8 py-3 text-lg shadow-lg transform hover:scale-105 transition-all duration-300"
              >
                View My Profile
              </Button>
              <Button 
                variant="outline"
                onClick={() => scrollToSection('contact')}
                className="bg-white/20 border-white/30 text-white hover:bg-white/30 px-8 py-3 text-lg backdrop-blur-sm transform hover:scale-105 transition-all duration-300"
              >
                Get in Touch
              </Button>
            </div>

            {/* Background Upload Button */}
            <button
              onClick={() => bgInputRef.current?.click()}
              className="absolute top-4 right-4 p-2 bg-white/20 backdrop-blur-sm rounded-lg hover:bg-white/30 transition-colors"
            >
              <Upload className="w-4 h-4 text-white" />
            </button>
            <input
              ref={bgInputRef}
              type="file"
              accept="image/*"
              onChange={handleBackgroundUpload}
              className="hidden"
            />
          </div>
        </div>
        
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-white animate-bounce">
          <ChevronDown className="w-8 h-8" />
        </div>
      </section>

      {/* Education Section */}
      <section id="education" className="py-16 md:py-24 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12 md:mb-16">
              <GraduationCap className="w-12 h-12 md:w-16 md:h-16 mx-auto mb-4 text-green-600" />
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Education Background</h2>
              <p className="text-gray-600 text-lg">Advanced academic training in plant and animal breeding sciences</p>
            </div>

            <div className="grid md:grid-cols-2 gap-6 md:gap-8">
              <Link href="/education/integrated-plant-animal-breeding">
                <Card className="border-l-4 border-l-green-600 hover:shadow-lg transition-shadow duration-300 transform hover:-translate-y-1 cursor-pointer">
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2 text-lg md:text-xl">
                      <BookOpen className="w-5 h-5 md:w-6 md:h-6 text-green-600" />
                      Master of Integrated Plant and Animal Breeding
                    </CardTitle>
                    <CardDescription className="text-base">
                      Advanced interdisciplinary program combining plant and animal breeding methodologies
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-3">
                      <p className="text-sm md:text-base text-gray-600">
                        <strong>Focus Areas:</strong> Quantitative Genetics, Genomic Selection, Breeding Program Design
                      </p>
                      <p className="text-sm md:text-base text-gray-600">
                        <strong>Research:</strong> Integrated breeding approaches for sustainable agriculture
                      </p>
                      <div className="flex flex-wrap gap-1 mt-4">
                        <Badge variant="outline" className="text-xs">Genomics</Badge>
                        <Badge variant="outline" className="text-xs">Statistical Genetics</Badge>
                        <Badge variant="outline" className="text-xs">Breeding Theory</Badge>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </Link>

              <Link href="/education/animal-breeding-genetics">
                <Card className="border-l-4 border-l-emerald-600 hover:shadow-lg transition-shadow duration-300 transform hover:-translate-y-1 cursor-pointer">
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2 text-lg md:text-xl">
                      <Award className="w-5 h-5 md:w-6 md:h-6 text-emerald-600" />
                      Master of Animal Breeding and Genetics
                    </CardTitle>
                    <CardDescription className="text-base">
                      Specialized training in animal genetics, breeding strategies, and genetic improvement
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-3">
                      <p className="text-sm md:text-base text-gray-600">
                        <strong>Focus Areas:</strong> Population Genetics, Molecular Genetics, Animal Breeding Programs
                      </p>
                      <p className="text-sm md:text-base text-gray-600">
                        <strong>Research:</strong> Genetic improvement strategies for livestock populations
                      </p>
                      <div className="flex flex-wrap gap-1 mt-4">
                        <Badge variant="outline" className="text-xs">Population Genetics</Badge>
                        <Badge variant="outline" className="text-xs">Molecular Markers</Badge>
                        <Badge variant="outline" className="text-xs">Selection Theory</Badge>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Research Interests Section */}
      <section id="research" className="py-16 md:py-24 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12 md:mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Research Interests</h2>
              <p className="text-gray-600 text-lg">Focus areas for PhD research and academic contributions</p>
            </div>

            <div className="grid md:grid-cols-3 gap-6 md:gap-8">
              <Link href="/research/quantitative-genetics">
                <Card className="text-center hover:shadow-lg transition-all duration-300 transform hover:-translate-y-2 group cursor-pointer">
                  <CardHeader>
                    <div className="w-16 h-16 md:w-20 md:h-20 mx-auto mb-4 bg-green-100 rounded-full flex items-center justify-center group-hover:bg-green-200 transition-colors">
                      <span className="text-2xl md:text-3xl">🧬</span>
                    </div>
                    <CardTitle className="text-lg md:text-xl">Quantitative Genetics</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm md:text-base text-gray-600">
                      Statistical analysis of genetic traits, heritability estimation, and breeding value prediction
                    </p>
                  </CardContent>
                </Card>
              </Link>

              <Link href="/research/plant-breeding">
                <Card className="text-center hover:shadow-lg transition-all duration-300 transform hover:-translate-y-2 group cursor-pointer">
                  <CardHeader>
                    <div className="w-16 h-16 md:w-20 md:h-20 mx-auto mb-4 bg-emerald-100 rounded-full flex items-center justify-center group-hover:bg-emerald-200 transition-colors">
                      <span className="text-2xl md:text-3xl">🌱</span>
                    </div>
                    <CardTitle className="text-lg md:text-xl">Plant Breeding</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm md:text-base text-gray-600">
                      Crop improvement, disease resistance, yield enhancement, and climate adaptation strategies
                    </p>
                  </CardContent>
                </Card>
              </Link>

              <Link href="/research/animal-genetics">
                <Card className="text-center hover:shadow-lg transition-all duration-300 transform hover:-translate-y-2 group cursor-pointer">
                  <CardHeader>
                    <div className="w-16 h-16 md:w-20 md:h-20 mx-auto mb-4 bg-teal-100 rounded-full flex items-center justify-center group-hover:bg-teal-200 transition-colors">
                      <span className="text-2xl md:text-3xl">🐄</span>
                    </div>
                    <CardTitle className="text-lg md:text-xl">Animal Genetics</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm md:text-base text-gray-600">
                      Livestock improvement, genetic disease management, and sustainable breeding programs
                    </p>
                  </CardContent>
                </Card>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Research & Publications Section */}
      <section id="publications" className="py-16 md:py-24 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12 md:mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Featured Research & Publications</h2>
              <p className="text-gray-600 text-lg">Academic contributions and ongoing research initiatives</p>
            </div>

            <div className="space-y-6 md:space-y-8">
              {featuredContent.map((content) => (
                <Link key={content.id} href={`/content/${content.id}`}>
                  <Card className="border-l-4 border-l-green-600 hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1 cursor-pointer group">
                    <CardHeader>
                      <CardTitle className="text-lg md:text-xl flex items-center justify-between">
                        {content.title}
                        <ArrowRight className="w-5 h-5 text-green-600 opacity-0 group-hover:opacity-100 transition-opacity" />
                      </CardTitle>
                      <CardDescription className="text-base">{content.description}</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <p className="text-gray-700 mb-4 text-sm md:text-base">
                        {content.content}
                      </p>
                      <div className="flex flex-wrap gap-2">
                        {content.tags.map((tag, index) => (
                          <Badge key={index} variant="outline" className="text-xs">
                            {tag}
                          </Badge>
                        ))}
                      </div>
                    </CardContent>
                  </Card>
                </Link>
              ))}
            </div>

            {/* View All Button */}
            <div className="text-center mt-12">
              <Link href="/research">
                <Button variant="outline" className="px-8 py-3">
                  View All Research Projects
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-16 md:py-24 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12 md:mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Technical Skills & Expertise</h2>
              <p className="text-gray-600 text-lg">Core competencies for advanced research in breeding and genetics</p>
            </div>

            <div className="grid md:grid-cols-2 gap-8 md:gap-12">
              {skillsContent.map((skill) => (
                <Link key={skill.id} href={`/content/${skill.id}`}>
                  <div className="bg-white p-6 md:p-8 rounded-lg shadow-sm hover:shadow-md transition-shadow cursor-pointer group">
                    <h3 className="text-xl md:text-2xl font-semibold mb-6 text-green-700 group-hover:text-green-600 transition-colors flex items-center justify-between">
                      {skill.title}
                      <ArrowRight className="w-5 h-5 opacity-0 group-hover:opacity-100 transition-opacity" />
                    </h3>
                    <div className="space-y-4">
                      {skill.tags.map((tag, index) => (
                        <div key={index} className="flex items-center gap-3 group">
                          <div className="w-2 h-2 bg-green-600 rounded-full group-hover:scale-150 transition-transform"></div>
                          <span className="text-gray-700 text-sm md:text-base group-hover:text-green-700 transition-colors">{tag}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-16 md:py-24 bg-gradient-to-r from-green-50 to-emerald-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-8">Get in Touch</h2>
            <p className="text-lg md:text-xl text-gray-700 mb-8">
              Interested in collaboration or have opportunities for PhD research?
            </p>
            
            <Card className="max-w-md mx-auto hover:shadow-lg transition-shadow duration-300">
              <CardContent className="p-6 md:p-8">
                <div className="space-y-6">
                  <button
                    onClick={handleContactClick}
                    className="flex items-center gap-4 w-full text-left hover:bg-gray-50 p-3 rounded-lg transition-colors group"
                  >
                    <Mail className="w-5 h-5 md:w-6 md:h-6 text-green-600 group-hover:scale-110 transition-transform" />
                    <div>
                      <span className="text-gray-700 text-sm md:text-base">azize@example.com</span>
                      <p className="text-xs text-gray-500">Click to send email</p>
                    </div>
                    <ExternalLink className="w-4 h-4 text-gray-400 ml-auto" />
                  </button>
                  
                  <button
                    onClick={handlePhoneClick}
                    className="flex items-center gap-4 w-full text-left hover:bg-gray-50 p-3 rounded-lg transition-colors group"
                  >
                    <Phone className="w-5 h-5 md:w-6 md:h-6 text-green-600 group-hover:scale-110 transition-transform" />
                    <div>
                      <span className="text-gray-700 text-sm md:text-base">+1 (555) 123-4567</span>
                      <p className="text-xs text-gray-500">Click to call</p>
                    </div>
                    <ExternalLink className="w-4 h-4 text-gray-400 ml-auto" />
                  </button>
                  
                  <div className="flex items-center gap-4 p-3">
                    <MapPin className="w-5 h-5 md:w-6 md:h-6 text-green-600" />
                    <div>
                      <span className="text-gray-700 text-sm md:text-base">Available for research opportunities worldwide</span>
                      <p className="text-xs text-gray-500">Remote and on-site options</p>
                    </div>
                  </div>
                </div>
                
                <div className="mt-8">
                  <Button 
                    onClick={handleContactClick}
                    className="w-full bg-green-600 hover:bg-green-700 text-white py-3 text-base md:text-lg shadow-lg transform hover:scale-105 transition-all duration-300"
                  >
                    Contact for PhD Opportunities
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12 md:py-16">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-8 mb-8">
            {/* About Section */}
            <div>
              <h3 className="text-lg font-semibold mb-4 text-green-400">About Azize</h3>
              <p className="text-gray-400 text-sm mb-4">
                Dedicated researcher specializing in integrated plant and animal breeding, 
                committed to advancing sustainable agriculture through innovative genetic approaches.
              </p>
              <div className="flex space-x-3">
                <div className="w-8 h-8 bg-green-600 rounded-full flex items-center justify-center">
                  <span className="text-xs">🧬</span>
                </div>
                <div className="w-8 h-8 bg-emerald-600 rounded-full flex items-center justify-center">
                  <span className="text-xs">🌱</span>
                </div>
                <div className="w-8 h-8 bg-teal-600 rounded-full flex items-center justify-center">
                  <span className="text-xs">🐄</span>
                </div>
              </div>
            </div>

            {/* Quick Links */}
            <div>
              <h3 className="text-lg font-semibold mb-4 text-green-400">Quick Links</h3>
              <ul className="space-y-2">
                <li>
                  <Link href="/education/integrated-plant-animal-breeding" className="text-gray-400 hover:text-green-400 transition-colors text-sm">
                    Integrated Plant & Animal Breeding
                  </Link>
                </li>
                <li>
                  <Link href="/education/animal-breeding-genetics" className="text-gray-400 hover:text-green-400 transition-colors text-sm">
                    Animal Breeding & Genetics
                  </Link>
                </li>
                <li>
                  <Link href="/research/quantitative-genetics" className="text-gray-400 hover:text-green-400 transition-colors text-sm">
                    Research Interests
                  </Link>
                </li>
                <li>
                  <Link href="/publications/climate-resilience-breeding" className="text-gray-400 hover:text-green-400 transition-colors text-sm">
                    Publications
                  </Link>
                </li>
              </ul>
            </div>

            {/* Research Areas */}
            <div>
              <h3 className="text-lg font-semibold mb-4 text-green-400">Research Areas</h3>
              <div className="flex flex-wrap gap-2">
                <Badge variant="secondary" className="text-xs bg-gray-800 text-gray-300 border-gray-700">Quantitative Genetics</Badge>
                <Badge variant="secondary" className="text-xs bg-gray-800 text-gray-300 border-gray-700">Genomic Selection</Badge>
                <Badge variant="secondary" className="text-xs bg-gray-800 text-gray-300 border-gray-700">Plant Breeding</Badge>
                <Badge variant="secondary" className="text-xs bg-gray-800 text-gray-300 border-gray-700">Animal Genetics</Badge>
                <Badge variant="secondary" className="text-xs bg-gray-800 text-gray-300 border-gray-700">Climate Resilience</Badge>
                <Badge variant="secondary" className="text-xs bg-gray-800 text-gray-300 border-gray-700">Molecular Breeding</Badge>
              </div>
            </div>

            {/* Contact & Professional */}
            <div>
              <h3 className="text-lg font-semibold mb-4 text-green-400">Connect</h3>
              <div className="space-y-3">
                <div className="flex items-center gap-3">
                  <Mail className="w-4 h-4 text-green-400" />
                  <span className="text-gray-400 text-sm">azize@example.com</span>
                </div>
                <div className="flex items-center gap-3">
                  <Phone className="w-4 h-4 text-green-400" />
                  <span className="text-gray-400 text-sm">+1 (555) 123-4567</span>
                </div>
                <div className="flex items-center gap-3">
                  <MapPin className="w-4 h-4 text-green-400" />
                  <span className="text-gray-400 text-sm">Available for collaborations worldwide</span>
                </div>
              </div>
              
              {/* Professional Networks */}
              <div className="mt-4 pt-4 border-t border-gray-800">
                <p className="text-xs text-gray-500 mb-2">Professional Networks</p>
                <div className="flex space-x-2">
                  <div className="w-6 h-6 bg-gray-700 rounded flex items-center justify-center">
                    <span className="text-xs">in</span>
                  </div>
                  <div className="w-6 h-6 bg-gray-700 rounded flex items-center justify-center">
                    <span className="text-xs">gs</span>
                  </div>
                  <div className="w-6 h-6 bg-gray-700 rounded flex items-center justify-center">
                    <span className="text-xs">rs</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Bottom Footer */}
          <div className="border-t border-gray-800 pt-8">
            <div className="flex flex-col md:flex-row justify-between items-center">
              <p className="text-gray-400 text-sm mb-4 md:mb-0">
                © 2024 Azize M. Abg. Dedicated to advancing plant and animal breeding sciences.
              </p>
              <div className="flex space-x-6">
                <button
                  onClick={() => scrollToSection('hero')}
                  className="text-gray-400 hover:text-green-400 transition-colors text-sm"
                >
                  Back to Top
                </button>
                <Link href="/contact" className="text-gray-400 hover:text-green-400 transition-colors text-sm">
                  Contact
                </Link>
                <Link href="/skills/research-methodologies" className="text-gray-400 hover:text-green-400 transition-colors text-sm">
                  Skills
                </Link>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
