import React, { useState } from 'react';
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from '../components/ui/Card';
import { Button } from '../components/ui/Button';
import { Input } from '../components/ui/Input';
import { Brain, BookOpen, Star, Clock, ChevronRight } from 'lucide-react';

const Roadmap: React.FC = () => {
  const [targetDate, setTargetDate] = useState('');
  const [studyHours, setStudyHours] = useState(10);
  const [selectedSkills, setSelectedSkills] = useState<string[]>([]);

  const skills = [
    'Programming',
    'Data Science',
    'Web Development',
    'AI',
    'Math',
    'Physics',
    'Design'
  ];

  const toggleSkill = (skill: string) => {
    setSelectedSkills(prev =>
      prev.includes(skill)
        ? prev.filter(s => s !== skill)
        : [...prev, skill]
    );
  };

  const handleGeneratePath = () => {
    // In a real app, this would call an API to generate a personalized path
    console.log({
      targetDate,
      studyHours,
      selectedSkills
    });
  };

  return (
    <div className="container mx-auto max-w-7xl py-8">
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-gray-900 dark:text-white">Learning Paths</h1>
        <p className="mt-2 text-gray-600 dark:text-gray-400">
          Answer a few questions to create your personalized learning journey
        </p>
      </div>

      {/* Personalization Form */}
      <Card className="mb-12">
        <CardHeader>
          <CardTitle>Personalize Your Path</CardTitle>
          <CardDescription>
            Tell us about your goals and preferences to create a customized learning journey
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-6">
            <div>
              <label className="mb-2 block text-sm font-medium text-gray-700 dark:text-gray-300">
                What's your target completion date?
              </label>
              <Input
                type="date"
                value={targetDate}
                onChange={(e) => setTargetDate(e.target.value)}
                fullWidth
              />
            </div>

            <div>
              <label className="mb-2 block text-sm font-medium text-gray-700 dark:text-gray-300">
                How many hours can you study per week? ({studyHours} hours)
              </label>
              <input
                type="range"
                min="1"
                max="40"
                value={studyHours}
                onChange={(e) => setStudyHours(parseInt(e.target.value))}
                className="h-2 w-full cursor-pointer appearance-none rounded-lg bg-gray-200 dark:bg-gray-700"
              />
            </div>

            <div>
              <label className="mb-2 block text-sm font-medium text-gray-700 dark:text-gray-300">
                Which skills are you most interested in?
              </label>
              <div className="flex flex-wrap gap-2">
                {skills.map((skill) => (
                  <button
                    key={skill}
                    onClick={() => toggleSkill(skill)}
                    className={`rounded-full px-4 py-2 text-sm font-medium transition-colors ${
                      selectedSkills.includes(skill)
                        ? 'bg-blue-600 text-white'
                        : 'bg-gray-100 text-gray-700 hover:bg-gray-200 dark:bg-gray-800 dark:text-gray-300 dark:hover:bg-gray-700'
                    }`}
                  >
                    {skill}
                  </button>
                ))}
              </div>
            </div>

            <Button
              onClick={handleGeneratePath}
              fullWidth
              size="lg"
              className="mt-6"
            >
              Generate My Learning Path
            </Button>
          </div>
        </CardContent>
      </Card>

      {/* Generated Paths will be shown here */}
      {/* This section would be populated after the form is submitted */}
    </div>
  );
};

export default Roadmap;