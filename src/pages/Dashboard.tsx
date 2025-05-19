import React, { useState } from 'react';
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from '../components/ui/Card';
import { Button } from '../components/ui/Button';
import { Input } from '../components/ui/Input';
import { Brain, BookOpen, Star, Clock, ChevronRight, MessageSquare } from 'lucide-react';
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer
} from 'recharts';

const Dashboard: React.FC = () => {
  const [feedback, setFeedback] = useState('');

  // Mock data for quiz history
  const quizHistory = [
    { date: '2024-01', score: 75 },
    { date: '2024-02', score: 82 },
    { date: '2024-03', score: 78 },
    { date: '2024-04', score: 85 },
    { date: '2024-05', score: 90 }
  ];

  // Mock data for learning paths
  const currentPaths = [
    {
      id: 1,
      title: "Introduction to Programming",
      progress: 60,
      totalWeeks: 12,
      currentWeek: 7,
      nextLesson: "Functions and Methods",
      completed: false
    },
    {
      id: 2,
      title: "Data Structures & Algorithms",
      progress: 30,
      totalWeeks: 8,
      currentWeek: 2,
      nextLesson: "Arrays and Lists",
      completed: false
    }
  ];

  const recommendedPaths = [
    {
      id: 3,
      title: "Web Development Fundamentals",
      description: "Based on your interest in programming",
      duration: "8 weeks",
      difficulty: "Beginner"
    },
    {
      id: 4,
      title: "Machine Learning Basics",
      description: "Recommended for your math skills",
      duration: "10 weeks",
      difficulty: "Intermediate"
    }
  ];

  const handleFeedbackSubmit = () => {
    // In a real app, this would send feedback to the backend
    console.log("Feedback submitted:", feedback);
    setFeedback('');
  };

  return (
    <div className="container mx-auto max-w-7xl py-8">
      <div className="mb-8 flex flex-col justify-between md:flex-row md:items-center">
        <div>
          <h1 className="text-3xl font-bold text-gray-900 dark:text-white">
            Your Learning Dashboard
          </h1>
          <p className="mt-1 text-gray-600 dark:text-gray-400">
            Track your progress and continue your learning journey
          </p>
        </div>
      </div>

      {/* Current Learning Paths */}
      <div className="mb-8">
        <h2 className="mb-4 text-xl font-bold text-gray-900 dark:text-white">
          Your Learning Paths
        </h2>
        <div className="grid gap-6 md:grid-cols-2">
          {currentPaths.map((path) => (
            <Card key={path.id} hover>
              <CardContent className="p-6">
                <h3 className="mb-2 text-lg font-semibold text-gray-900 dark:text-white">
                  {path.title}
                </h3>
                <div className="mb-4">
                  <div className="mb-2 flex justify-between text-sm">
                    <span className="text-gray-600 dark:text-gray-400">
                      Week {path.currentWeek} of {path.totalWeeks}
                    </span>
                    <span className="font-medium text-blue-600">{path.progress}%</span>
                  </div>
                  <div className="h-2 w-full rounded-full bg-gray-200 dark:bg-gray-700">
                    <div
                      className="h-2 rounded-full bg-blue-600"
                      style={{ width: `${path.progress}%` }}
                    ></div>
                  </div>
                </div>
                <p className="mb-4 text-sm text-gray-600 dark:text-gray-400">
                  Next: {path.nextLesson}
                </p>
                <Button
                  variant="default"
                  fullWidth
                  leftIcon={<BookOpen size={16} />}
                >
                  Continue Learning
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>

      {/* Recommended Paths */}
      <div className="mb-8">
        <h2 className="mb-4 text-xl font-bold text-gray-900 dark:text-white">
          Recommended for You
        </h2>
        <div className="grid gap-6 md:grid-cols-2">
          {recommendedPaths.map((path) => (
            <Card key={path.id} hover>
              <CardContent className="p-6">
                <h3 className="mb-2 text-lg font-semibold text-gray-900 dark:text-white">
                  {path.title}
                </h3>
                <p className="mb-4 text-gray-600 dark:text-gray-400">
                  {path.description}
                </p>
                <div className="mb-4 flex items-center space-x-4 text-sm text-gray-600 dark:text-gray-400">
                  <div className="flex items-center">
                    <Clock size={16} className="mr-1" />
                    <span>{path.duration}</span>
                  </div>
                  <div className="flex items-center">
                    <Star size={16} className="mr-1" />
                    <span>{path.difficulty}</span>
                  </div>
                </div>
                <Button
                  variant="outline"
                  fullWidth
                  leftIcon={<Brain size={16} />}
                >
                  Start Learning
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>

      {/* Quiz Performance */}
      <Card className="mb-8">
        <CardHeader>
          <CardTitle>Quiz Performance</CardTitle>
          <CardDescription>Track your progress over time</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="h-64">
            <ResponsiveContainer width="100%" height="100%">
              <LineChart data={quizHistory}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="date" />
                <YAxis domain={[0, 100]} />
                <Tooltip />
                <Legend />
                <Line
                  type="monotone"
                  dataKey="score"
                  stroke="#6366f1"
                  strokeWidth={2}
                  dot={{ r: 4 }}
                />
              </LineChart>
            </ResponsiveContainer>
          </div>
        </CardContent>
      </Card>

      {/* AI Feedback Section */}
      <Card>
        <CardHeader>
          <CardTitle>AI Learning Assistant</CardTitle>
          <CardDescription>Get personalized help and share your feedback</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="mb-6 space-y-4 rounded-lg bg-blue-50 p-4 dark:bg-blue-900/30">
            <div className="rounded-lg bg-white p-4 shadow-sm dark:bg-gray-800">
              <h4 className="mb-2 font-semibold text-blue-700 dark:text-blue-300">
                Strength: Conceptual Understanding
              </h4>
              <p className="text-gray-600 dark:text-gray-400">
                You demonstrate excellent grasp of fundamental concepts and theory.
              </p>
            </div>
            <div className="rounded-lg bg-white p-4 shadow-sm dark:bg-gray-800">
              <h4 className="mb-2 font-semibold text-yellow-700 dark:text-yellow-300">
                Area for Improvement: Application Problems
              </h4>
              <p className="text-gray-600 dark:text-gray-400">
                Consider practicing more applied exercises to strengthen problem-solving skills.
              </p>
            </div>
            <div className="rounded-lg bg-white p-4 shadow-sm dark:bg-gray-800">
              <h4 className="mb-2 font-semibold text-green-700 dark:text-green-300">
                Recommendation
              </h4>
              <p className="text-gray-600 dark:text-gray-400">
                Based on your performance, try the "Advanced Problem Solving" module to further develop your skills.
              </p>
            </div>
          </div>

          <div className="space-y-4">
            <h4 className="font-medium text-gray-900 dark:text-white">
              How can we support you better?
            </h4>
            <Input
              as="textarea"
              placeholder="Share your thoughts on how we can improve your learning experience..."
              value={feedback}
              onChange={(e) => setFeedback(e.target.value)}
              className="min-h-[100px]"
              fullWidth
            />
            <Button
              onClick={handleFeedbackSubmit}
              leftIcon={<MessageSquare size={16} />}
            >
              Submit Feedback
            </Button>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default Dashboard;