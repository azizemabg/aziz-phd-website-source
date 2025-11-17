import { getContentByCategory } from '@/data/content';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { ArrowLeft, ArrowRight, GraduationCap } from 'lucide-react';
import Link from 'next/link';

export default function EducationPage() {
  const educationContent = getContentByCategory('education');

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
            
            <div className="text-sm text-gray-600">
              Education Background
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-green-600 to-emerald-600 text-white py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <GraduationCap className="w-16 h-16 mx-auto mb-4" />
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              Education Background
            </h1>
            <p className="text-xl mb-8 opacity-90">
              Advanced academic training in plant and animal breeding sciences
            </p>
            <div className="flex flex-wrap justify-center gap-2">
              <Badge variant="secondary" className="px-3 py-1 bg-white/20 text-white border-white/30">Integrated Breeding</Badge>
              <Badge variant="secondary" className="px-3 py-1 bg-white/20 text-white border-white/30">Animal Genetics</Badge>
              <Badge variant="secondary" className="px-3 py-1 bg-white/20 text-white border-white/30">Quantitative Methods</Badge>
              <Badge variant="secondary" className="px-3 py-1 bg-white/20 text-white border-white/30">Research Training</Badge>
            </div>
          </div>
        </div>
      </section>

      {/* Education Programs Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="grid md:grid-cols-2 gap-8">
              {educationContent.map((education) => (
                <Link key={education.id} href={`/content/${education.id}`}>
                  <Card className="border-l-4 border-l-green-600 hover:shadow-lg transition-all duration-300 transform hover:-translate-y-2 cursor-pointer group h-full">
                    <CardHeader>
                      <CardTitle className="text-lg md:text-xl flex items-center justify-between">
                        {education.title}
                        <ArrowRight className="w-5 h-5 text-green-600 opacity-0 group-hover:opacity-100 transition-opacity" />
                      </CardTitle>
                      <CardDescription className="text-base">{education.description}</CardDescription>
                      {education.date && (
                        <div className="text-sm text-gray-500 mt-2">
                          {education.date}
                        </div>
                      )}
                    </CardHeader>
                    <CardContent>
                      <p className="text-gray-700 mb-4 text-sm">
                        {education.content}
                      </p>
                      <div className="flex flex-wrap gap-2">
                        {education.tags.map((tag, index) => (
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

            {/* Additional Information */}
            <div className="mt-16 grid md:grid-cols-3 gap-8">
              <Card className="text-center">
                <CardHeader>
                  <div className="w-12 h-12 mx-auto mb-4 bg-green-100 rounded-full flex items-center justify-center">
                    <span className="text-xl">🎓</span>
                  </div>
                  <CardTitle className="text-lg">Academic Excellence</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-gray-600">
                    Consistently high academic performance with focus on practical applications of breeding theory.
                  </p>
                </CardContent>
              </Card>

              <Card className="text-center">
                <CardHeader>
                  <div className="w-12 h-12 mx-auto mb-4 bg-emerald-100 rounded-full flex items-center justify-center">
                    <span className="text-xl">🔬</span>
                  </div>
                  <CardTitle className="text-lg">Research Focus</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-gray-600">
                    Strong emphasis on research methodology, statistical analysis, and experimental design.
                  </p>
                </CardContent>
              </Card>

              <Card className="text-center">
                <CardHeader>
                  <div className="w-12 h-12 mx-auto mb-4 bg-teal-100 rounded-full flex items-center justify-center">
                    <span className="text-xl">🌍</span>
                  </div>
                  <CardTitle className="text-lg">Global Perspective</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-gray-600">
                    Training focused on global agricultural challenges and sustainable breeding solutions.
                  </p>
                </CardContent>
              </Card>
            </div>

            {/* Call to Action */}
            <div className="text-center mt-16">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Ready for PhD Research</h2>
              <p className="text-gray-600 mb-8 max-w-2xl mx-auto">
                With comprehensive training in both plant and animal breeding, I am prepared to undertake advanced PhD research in integrated breeding systems.
              </p>
              <div className="flex flex-col sm:flex-row justify-center gap-4">
                <Link href="/contact">
                  <Button className="bg-green-600 hover:bg-green-700 px-8 py-3">
                    Discuss Research Opportunities
                  </Button>
                </Link>
                <Link href="/research">
                  <Button variant="outline" className="px-8 py-3">
                    View Research Projects
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export function generateMetadata() {
  return {
    title: 'Education Background - Muhammad Aziz Muslim',
    description: 'Advanced academic training in plant and animal breeding sciences with degrees in integrated breeding and animal genetics',
    keywords: 'education, academic background, plant breeding, animal genetics, integrated breeding, masters degree',
  };
}
