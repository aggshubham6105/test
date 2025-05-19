import React from 'react';
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from '../components/ui/Card';
import { Button } from '../components/ui/Button';
import { Brain, BookOpen, Star, Clock, ChevronRight } from 'lucide-react';

const Roadmap: React.FC = () => {
  const roadmaps = [
    {
      id: 1,
      title: 'Introduction to Machine Learning',
      description: 'Learn the fundamentals of machine learning algorithms and their applications',
      duration: '8 weeks',
      difficulty: 'Intermediate',
      rating: 4.8,
      enrolled: 1234,
      topics: [
        'Linear Regression',
        'Decision Trees',
        'Neural Networks',
        'Support Vector Machines'
      ]
    },
    {
      id: 2,
      title: 'Data Science Fundamentals',
      description: 'Master the essential concepts and tools for data analysis and visualization',
      duration: '10 weeks',
      difficulty: 'Beginner',
      rating: 4.9,
      enrolled: 2345,
      topics: [
        'Python Programming',
        'Data Cleaning',
        'Statistical Analysis',
        'Data Visualization'
      ]
    },
    {
      id: 3,
      title: 'Advanced Mathematics',
      description: 'Deep dive into advanced mathematical concepts for machine learning',
      duration: '12 weeks',
      difficulty: 'Advanced',
      rating: 4.7,
      enrolled: 987,
      topics: [
        'Linear Algebra',
        'Calculus',
        'Probability Theory',
        'Optimization'
      ]
    }
  ];

  return (
    <div className="container mx-auto max-w-7xl py-8">
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-gray-900 dark:text-white">Learning Paths</h1>
        <p className="mt-2 text-gray-600 dark:text-gray-400">
          Discover AI-curated learning paths tailored to your goals and skill level
        </p>
      </div>

      <div className="mb-12 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
        {roadmaps.map((roadmap) => (
          <Card key={roadmap.id} hover>
            <CardHeader>
              <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-lg bg-blue-100 text-blue-600 dark:bg-blue-900/30 dark:text-blue-400">
                <Brain size={24} />
              </div>
              <CardTitle>{roadmap.title}</CardTitle>
              <CardDescription>{roadmap.description}</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="mb-6 space-y-4">
                <div className="flex items-center justify-between text-sm">
                  <div className="flex items-center text-gray-600 dark:text-gray-400">
                    <Clock size={16} className="mr-2" />
                    {roadmap.duration}
                  </div>
                  <div className="flex items-center text-gray-600 dark:text-gray-400">
                    <Star size={16} className="mr-2 text-yellow-500" />
                    {roadmap.rating}
                  </div>
                </div>
                <div className="flex items-center text-sm text-gray-600 dark:text-gray-400">
                  <BookOpen size={16} className="mr-2" />
                  {roadmap.enrolled.toLocaleString()} students enrolled
                </div>
              </div>

              <div className="mb-6">
                <h4 className="mb-2 font-medium text-gray-900 dark:text-white">Topics Covered:</h4>
                <ul className="space-y-2">
                  {roadmap.topics.map((topic, index) => (
                    <li key={index} className="flex items-center text-sm text-gray-600 dark:text-gray-400">
                      <ChevronRight size={16} className="mr-2 text-blue-600" />
                      {topic}
                    </li>
                  ))}
                </ul>
              </div>

              <div className="flex space-x-3">
                <Button variant="default" fullWidth>
                  Start Learning
                </Button>
                <Button variant="outline" fullWidth>
                  Preview
                </Button>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      {/* AI Recommendations */}
      <div className="rounded-lg bg-gradient-to-r from-blue-600 to-purple-700 p-8 text-white">
        <div className="mb-6">
          <h2 className="text-2xl font-bold">Personalized Recommendations</h2>
          <p className="mt-2 text-blue-100">
            Based on your interests and learning history, our AI suggests these paths for you
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          <div className="rounded-lg bg-white/10 p-6 backdrop-blur-sm">
            <h3 className="mb-2 font-semibold">Deep Learning Specialization</h3>
            <p className="mb-4 text-sm text-blue-100">
              Perfect next step based on your completion of ML fundamentals
            </p>
            <Button variant="outline" className="border-white text-white hover:bg-white/20">
              Explore Path
            </Button>
          </div>

          <div className="rounded-lg bg-white/10 p-6 backdrop-blur-sm">
            <h3 className="mb-2 font-semibold">Computer Vision</h3>
            <p className="mb-4 text-sm text-blue-100">
              Aligns with your interest in image processing
            </p>
            <Button variant="outline" className="border-white text-white hover:bg-white/20">
              Explore Path
            </Button>
          </div>

          <div className="rounded-lg bg-white/10 p-6 backdrop-blur-sm">
            <h3 className="mb-2 font-semibold">Natural Language Processing</h3>
            <p className="mb-4 text-sm text-blue-100">
              Recommended based on your strong Python skills
            </p>
            <Button variant="outline" className="border-white text-white hover:bg-white/20">
              Explore Path
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Roadmap;