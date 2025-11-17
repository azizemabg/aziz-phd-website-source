import { getContentByCategory } from '@/data/content';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { ArrowLeft, ArrowRight } from 'lucide-react';
import Link from 'next/link';

export default function ResearchPage() {
  const researchContent = getContentByCategory('research');

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
              Research Projects
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-green-600 to-emerald-600 text-white py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              Research Projects
            </h1>
            <p className="text-xl mb-8 opacity-90">
              Advanced research in plant and animal breeding, quantitative genetics, and sustainable agriculture
            </p>
            <div className="flex flex-wrap justify-center gap-2">
              <Badge variant="secondary" className="px-3 py-1 bg-white/20 text-white border-white/30">Quantitative Genetics</Badge>
              <Badge variant="secondary" className="px-3 py-1 bg-white/20 text-white border-white/30">Genomic Selection</Badge>
              <Badge variant="secondary" className="px-3 py-1 bg-white/20 text-white border-white/30">Climate Resilience</Badge>
              <Badge variant="secondary" className="px-3 py-1 bg-white/20 text-white border-white/30">Molecular Breeding</Badge>
            </div>
          </div>
        </div>
      </section>

      {/* Research Projects Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="grid gap-8">
              {researchContent.map((research) => (
                <Link key={research.id} href={`/content/${research.id}`}>
                  <Card className="border-l-4 border-l-green-600 hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1 cursor-pointer group">
                    <CardHeader>
                      <CardTitle className="text-xl md:text-2xl flex items-center justify-between">
                        {research.title}
                        <ArrowRight className="w-5 h-5 text-green-600 opacity-0 group-hover:opacity-100 transition-opacity" />
                      </CardTitle>
                      <CardDescription className="text-base">{research.description}</CardDescription>
                      {research.date && (
                        <div className="text-sm text-gray-500 mt-2">
                          {research.date} • {research.author}
                        </div>
                      )}
                    </CardHeader>
                    <CardContent>
                      <p className="text-gray-700 mb-4 text-base">
                        {research.content}
                      </p>
                      <div className="flex flex-wrap gap-2">
                        {research.tags.map((tag, index) => (
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

            {/* Call to Action */}
            <div className="text-center mt-16">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Interested in Research Collaboration?</h2>
              <p className="text-gray-600 mb-8 max-w-2xl mx-auto">
                Let's discuss potential research collaborations, joint projects, or academic partnerships in plant and animal breeding sciences.
              </p>
              <div className="flex flex-col sm:flex-row justify-center gap-4">
                <Link href="/contact">
                  <Button className="bg-green-600 hover:bg-green-700 px-8 py-3">
                    Get in Touch
                  </Button>
                </Link>
                <Link href="/">
                  <Button variant="outline" className="px-8 py-3">
                    Back to Home
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
    title: 'Research Projects - Azize M. Abg',
    description: 'Advanced research in plant and animal breeding, quantitative genetics, and sustainable agriculture',
    keywords: 'research, plant breeding, animal genetics, quantitative genetics, genomic selection, climate resilience',
  };
}