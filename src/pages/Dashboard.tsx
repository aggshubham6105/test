import React, { useState } from 'react';
import { useAuth } from '../contexts/AuthContext';
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from '../components/ui/Card';
import { Button } from '../components/ui/Button';
import { Input } from '../components/ui/Input';
import { 
  BarChart, BookOpen, CheckCircle, Clock, 
  Calendar, Award, ArrowUpRight, Brain,
  MessageSquare, Lightbulb, Target
} from 'lucide-react';
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
  const { user } = useAuth();
  const [feedback, setFeedback] = useState('');
  const [question, setQuestion] = useState('');

  // Mock data for the dashboard
  const stats = {
    coursesCompleted: 3,
    quizzesTaken: 12,
    progress: 68,
    streak: 7
  };

  const quizHistory = [
    { date: '2024-01', score: 75 },
    { date: '2024-02', score: 82 },
    { date: '2024-03', score: 78 },
    { date: '2024-04', score: 85 },
    { date: '2024-05', score: 90 }
  ];

  const strengths = [
    'Strong understanding of basic programming concepts',
    'Excellent problem-solving skills',
    'Quick grasp of algorithmic thinking'
  ];

  const improvements = [
    'Need more practice with advanced data structures',
    'Can improve code optimization techniques',
    'Review time complexity analysis'
  ];

  return (
    <div className="container mx-auto max-w-7xl py-8">
      {/* Header section remains the same */}
      <div className="mb-8 flex flex-col justify-between md:flex-row md:items-center">
        <div>
          <h1 className="text-3xl font-bold text-gray-900 dark:text-white">
            Welcome back, {user?.name || 'Student'}!
          </h1>
          <p className="mt-1 text-gray-600 dark:text-gray-400">
            Here's an overview of your learning journey
          </p>
        </div>
        <div className="mt-4 flex space-x-3 md:mt-0">
          <Button 
            variant="default" 
            leftIcon={<Brain size={18} />}
          >
            Continue Learning
          </Button>
          <Button 
            variant="outline"
          >
            View All Courses
          </Button>
        </div>
      </div>

      {/* Stats Cards section remains the same */}
      <div className="mb-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
        {/* ... existing stats cards ... */}
      </div>

      {/* Quiz Performance and Feedback */}
      <div className="mb-8 grid gap-6 lg:grid-cols-2">
        {/* Quiz Performance Graph */}
        <Card>
          <CardHeader>
            <CardTitle>Quiz Performance</CardTitle>
            <CardDescription>Your score history and progress</CardDescription>
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
                    stroke="#8b5cf6"
                    strokeWidth={2}
                    dot={{ r: 4 }}
                  />
                </LineChart>
              </ResponsiveContainer>
            </div>
          </CardContent>
        </Card>

        {/* AI Feedback */}
        <Card>
          <CardHeader>
            <CardTitle>AI Learning Analysis</CardTitle>
            <CardDescription>Personalized insights and recommendations</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-6">
              <div>
                <h3 className="mb-3 flex items-center text-lg font-semibold text-gray-900 dark:text-white">
                  <Target size={20} className="mr-2 text-green-500" />
                  Strengths
                </h3>
                <ul className="space-y-2">
                  {strengths.map((strength, index) => (
                    <li key={index} className="flex items-center text-gray-700 dark:text-gray-300">
                      <CheckCircle size={16} className="mr-2 text-green-500" />
                      {strength}
                    </li>
                  ))}
                </ul>
              </div>

              <div>
                <h3 className="mb-3 flex items-center text-lg font-semibold text-gray-900 dark:text-white">
                  <Lightbulb size={20} className="mr-2 text-yellow-500" />
                  Areas for Improvement
                </h3>
                <ul className="space-y-2">
                  {improvements.map((improvement, index) => (
                    <li key={index} className="flex items-center text-gray-700 dark:text-gray-300">
                      <ArrowUpRight size={16} className="mr-2 text-yellow-500" />
                      {improvement}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* AI Interaction */}
      <div className="grid gap-6 lg:grid-cols-2">
        {/* Ask AI */}
        <Card>
          <CardHeader>
            <CardTitle>Ask AI Tutor</CardTitle>
            <CardDescription>Get instant help with your questions</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <Input
                placeholder="Type your question here..."
                value={question}
                onChange={(e) => setQuestion(e.target.value)}
                fullWidth
              />
              <Button
                variant="default"
                fullWidth
                leftIcon={<MessageSquare size={18} />}
              >
                Ask Question
              </Button>
            </div>
          </CardContent>
        </Card>

        {/* Feedback */}
        <Card>
          <CardHeader>
            <CardTitle>Provide Feedback</CardTitle>
            <CardDescription>Help us improve your learning experience</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <textarea
                className="w-full rounded-md border border-gray-300 p-3 focus:border-primary-500 focus:outline-none focus:ring-1 focus:ring-primary-500 dark:border-gray-700 dark:bg-gray-900"
                rows={4}
                placeholder="Share your thoughts and suggestions..."
                value={feedback}
                onChange={(e) => setFeedback(e.target.value)}
              />
              <Button
                variant="outline"
                fullWidth
              >
                Submit Feedback
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default Dashboard;