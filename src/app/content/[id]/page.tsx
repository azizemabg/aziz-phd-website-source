import { notFound } from 'next/navigation';
import { getContentById } from '@/data/content';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { ArrowLeft, Calendar, User, Tag } from 'lucide-react';
import Link from 'next/link';

interface ContentPageProps {
  params: {
    id: string;
  };
}

export default function ContentPage({ params }: ContentPageProps) {
  const content = getContentById(params.id);

  if (!content) {
    notFound();
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-slate-100">
      {/* Navigation Header */}
      <nav className="sticky top-0 bg-white/95 backdrop-blur-sm shadow-sm z-40">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <Link 
              href={`/${content.category}`} 
              className="flex items-center gap-2 text-green-700 hover:text-green-600 transition-colors"
            >
              <ArrowLeft className="w-5 h-5" />
              <span className="font-medium">Back to {content.category.charAt(0).toUpperCase() + content.category.slice(1)}</span>
            </Link>
            
            <div className="text-sm text-gray-600 capitalize">
              {content.category}
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-green-600 to-emerald-600 text-white py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="mb-6">
              <h1 className="text-4xl md:text-5xl font-bold mb-4">
                {content.title}
              </h1>
              <p className="text-xl mb-8 opacity-90">
                {content.description}
              </p>
              
              <div className="flex flex-wrap gap-2 mb-6">
                {content.tags.map((tag, index) => (
                  <Badge key={index} variant="secondary" className="px-3 py-1 bg-white/20 text-white border-white/30">
                    {tag}
                  </Badge>
                ))}
              </div>

              {/* Metadata */}
              <div className="flex flex-wrap gap-6 text-sm opacity-90">
                {content.date && (
                  <div className="flex items-center gap-2">
                    <Calendar className="w-4 h-4" />
                    <span>{content.date}</span>
                  </div>
                )}
                {content.author && (
                  <div className="flex items-center gap-2">
                    <User className="w-4 h-4" />
                    <span>{content.author}</span>
                  </div>
                )}
                <div className="flex items-center gap-2">
                  <Tag className="w-4 h-4" />
                  <span className="capitalize">{content.category}</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Content Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <Card className="border-l-4 border-l-green-600">
              <CardHeader>
                <CardTitle className="text-2xl">Details</CardTitle>
                <CardDescription>Comprehensive information about this {content.category} item</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="prose prose-lg max-w-none">
                  <p className="text-gray-700 text-lg leading-relaxed">
                    {content.content}
                  </p>
                  
                  {/* Additional content based on category */}
                  {content.category === 'research' && (
                    <div className="mt-8 p-6 bg-green-50 rounded-lg">
                      <h3 className="text-xl font-semibold mb-4 text-green-800">Research Impact</h3>
                      <p className="text-green-700">
                        This research contributes to advancing breeding methodologies and sustainable agricultural practices. 
                        The findings have practical applications in developing climate-resilient crop varieties and improving 
                        livestock genetic potential.
                      </p>
                    </div>
                  )}

                  {content.category === 'education' && (
                    <div className="mt-8 p-6 bg-blue-50 rounded-lg">
                      <h3 className="text-xl font-semibold mb-4 text-blue-800">Program Highlights</h3>
                      <ul className="text-blue-700 space-y-2">
                        <li>• Comprehensive theoretical and practical training</li>
                        <li>• Hands-on research experience</li>
                        <li>• Industry and academic collaborations</li>
                        <li>• Advanced statistical and genetic analysis skills</li>
                      </ul>
                    </div>
                  )}

                  {content.category === 'skills' && (
                    <div className="mt-8 p-6 bg-purple-50 rounded-lg">
                      <h3 className="text-xl font-semibold mb-4 text-purple-800">Skill Applications</h3>
                      <p className="text-purple-700">
                        These skills are applied in research design, data analysis, breeding program management, 
                        and scientific communication. They enable effective problem-solving and innovation in 
                        agricultural genetics and breeding.
                      </p>
                    </div>
                  )}

                  {content.category === 'publications' && (
                    <div className="mt-8 p-6 bg-orange-50 rounded-lg">
                      <h3 className="text-xl font-semibold mb-4 text-orange-800">Publication Details</h3>
                      <p className="text-orange-700">
                        This publication represents significant contributions to the field of breeding sciences. 
                        It has undergone peer review and contributes to the scientific knowledge base in 
                        agricultural genetics and sustainable food production.
                      </p>
                    </div>
                  )}
                </div>
              </CardContent>
            </Card>

            {/* Related Content */}
            <div className="mt-12">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">Related Content</h2>
              <div className="grid md:grid-cols-2 gap-6">
                {content.tags.slice(0, 2).map((tag, index) => (
                  <Card key={index} className="hover:shadow-lg transition-shadow">
                    <CardHeader>
                      <CardTitle className="text-lg">More about {tag}</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-gray-600 mb-4">
                        Explore additional content related to {tag.toLowerCase()}
                      </p>
                      <Link href={`/category/${tag.toLowerCase().replace(/\s+/g, '-')}`}>
                        <Button variant="outline" className="w-full">
                          View Related Content
                        </Button>
                      </Link>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 bg-gradient-to-r from-green-50 to-emerald-50">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Interested in Collaboration?</h2>
          <p className="text-lg text-gray-700 mb-8">
            Let's discuss opportunities for research collaboration or academic projects
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

// Generate static params for all content items
export async function generateStaticParams() {
  const { dynamicContent } = await import('@/data/content');
  
  return dynamicContent.map((content) => ({
    id: content.id,
  }));
}

// Generate metadata for SEO
export async function generateMetadata({ params }: ContentPageProps) {
  const content = getContentById(params.id);

  if (!content) {
    return {
      title: 'Content Not Found',
    };
  }

  return {
    title: `${content.title} - Azize M. Abg`,
    description: content.description,
    keywords: content.tags.join(', '),
  };
}