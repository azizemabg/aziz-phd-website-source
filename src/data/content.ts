// Dynamic content data for the website
export interface ContentItem {
  id: string;
  title: string;
  description: string;
  category: string;
  tags: string[];
  content?: string;
  image?: string;
  date?: string;
  author?: string;
  featured?: boolean;
}

export const dynamicContent: ContentItem[] = [
  // Research Projects
  {
    id: 'climate-resilience-breeding',
    title: 'Integrated Breeding Strategies for Climate Resilience',
    description: 'Master\'s Thesis Research Project on climate adaptation in agricultural systems',
    category: 'research',
    tags: ['Climate Adaptation', 'Genomic Selection', 'Sustainable Agriculture'],
    content: 'Developed novel approaches for combining plant and animal breeding strategies to enhance climate resilience in agricultural systems. Research focused on genomic selection methodologies and adaptive trait management.',
    image: '/research/climate-resilience.jpg',
    date: '2023',
    author: 'Muhammad Aziz Muslim',
    featured: true
  },
  {
    id: 'quantitative-genetic-analysis',
    title: 'Quantitative Genetic Analysis of Production Traits',
    description: 'Collaborative Research Initiative on genetic correlations and heritability',
    category: 'research',
    tags: ['Quantitative Genetics', 'Statistical Analysis', 'Breeding Values'],
    content: 'Contributed to large-scale genetic analysis projects evaluating heritability and genetic correlations in key production traits. Applied advanced statistical models for breeding value estimation.',
    image: '/research/quantitative-genetics.jpg',
    date: '2022',
    author: 'Muhammad Aziz Muslim'
  },
  {
    id: 'molecular-marker-development',
    title: 'Molecular Marker Development for Disease Resistance',
    description: 'Ongoing PhD Research Preparation for marker-assisted selection',
    category: 'research',
    tags: ['Molecular Markers', 'Disease Resistance', 'MAS'],
    content: 'Currently preparing research proposals for molecular marker development and validation in disease resistance breeding programs. Focus on practical applications of marker-assisted selection.',
    image: '/research/molecular-markers.jpg',
    date: '2024',
    author: 'Azize M. Abg'
  },

  // Education Programs
  {
    id: 'integrated-plant-animal-breeding',
    title: 'Master of Integrated Plant and Animal Breeding',
    description: 'Advanced interdisciplinary program combining plant and animal breeding methodologies',
    category: 'education',
    tags: ['Genomics', 'Statistical Genetics', 'Breeding Theory'],
    content: 'Comprehensive training in quantitative genetics, genomic selection, and breeding program design. Focus on integrated approaches for sustainable agriculture.',
    image: '/education/integrated-breeding.jpg',
    date: '2021-2023'
  },
  {
    id: 'animal-breeding-genetics',
    title: 'Master of Animal Breeding and Genetics',
    description: 'Specialized training in animal genetics, breeding strategies, and genetic improvement',
    category: 'education',
    tags: ['Population Genetics', 'Molecular Markers', 'Selection Theory'],
    content: 'Specialized program focusing on population genetics, molecular genetics, and animal breeding programs. Emphasis on genetic improvement strategies for livestock populations.',
    image: '/education/animal-genetics.jpg',
    date: '2019-2021'
  },

  // Skills Categories
  {
    id: 'research-methodologies',
    title: 'Research Methodologies',
    description: 'Advanced research techniques and methodologies in breeding sciences',
    category: 'skills',
    tags: ['Genomic Selection', 'QTL Mapping', 'Statistical Genetics', 'Population Genetics', 'Breeding Program Design'],
    content: 'Expertise in genomic selection, quantitative trait locus mapping, statistical genetics, population genetics analysis, and breeding program design and management.',
    image: '/skills/research-methods.jpg'
  },
  {
    id: 'technical-tools',
    title: 'Technical Tools',
    description: 'Software and technical tools for genetic analysis and research',
    category: 'skills',
    tags: ['Statistical Software', 'Genetic Analysis', 'Molecular Biology', 'Data Analysis', 'Experimental Design'],
    content: 'Proficient in statistical software (R, SAS, SPSS), genetic analysis software, molecular biology techniques, data analysis and visualization, and experimental design.',
    image: '/skills/technical-tools.jpg'
  },

  // Publications
  {
    id: 'climate-paper-2023',
    title: 'Climate Resilience in Integrated Breeding Systems',
    description: 'Research paper on climate adaptation strategies',
    category: 'publications',
    tags: ['Climate Adaptation', 'Integrated Breeding', 'Sustainability'],
    content: 'Published research on developing climate-resilient breeding strategies that integrate plant and animal breeding approaches for sustainable agricultural systems.',
    image: '/publications/climate-paper.jpg',
    date: '2023',
    author: 'Azize M. Abg et al.'
  },
  {
    id: 'genetic-analysis-2022',
    title: 'Advanced Genetic Analysis Methods',
    description: 'Methodological paper on genetic correlation analysis',
    category: 'publications',
    tags: ['Genetic Analysis', 'Statistical Methods', 'Breeding Values'],
    content: 'Methodological advancements in genetic correlation analysis and breeding value estimation for complex traits in agricultural species.',
    image: '/publications/genetic-analysis.jpg',
    date: '2022',
    author: 'Azize M. Abg et al.'
  }
];

// Helper functions
export const getContentByCategory = (category: string): ContentItem[] => {
  return dynamicContent.filter(item => item.category === category);
};

export const getContentById = (id: string): ContentItem | undefined => {
  return dynamicContent.find(item => item.id === id);
};

export const getFeaturedContent = (): ContentItem[] => {
  return dynamicContent.filter(item => item.featured);
};

export const getContentByTag = (tag: string): ContentItem[] => {
  return dynamicContent.filter(item => item.tags.includes(tag));
};
