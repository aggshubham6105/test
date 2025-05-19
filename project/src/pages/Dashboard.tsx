import React from 'react';
import { useAuth } from '../contexts/AuthContext';
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from '../components/ui/Card';
import { Button } from '../components/ui/Button';
import { 
  BarChart, BookOpen, CheckCircle, Clock, 
  Calendar, Award, ArrowUpRight, Brain 
} from 'lucide-react';

const Dashboard: React.FC = () => {
  const { user } = useAuth();

  // Mock data for the dashboard
  const stats = {
    coursesCompleted: 3,
    quizzesTaken: 12,
    progress: 68,
    streak: 7
  };

  const roadmaps = [
    {
      id: 1,
      title: "Introduction to Machine Learning",
      progress: 65,
      nextLesson: "Neural Networks Basics",
      totalLessons: 15,
      completedLessons: 9,
    },
    {
      id: 2,
      title: "Advanced Mathematics",
      progress: 30,
      nextLesson: "Linear Algebra Fundamentals",
      totalLessons: 20,
      completedLessons: 6,
    },
    {
      id: 3,
      title: "Data Science Fundamentals",
      progress: 10,
      nextLesson: "Data Cleaning",
      totalLessons: 18,
      completedLessons: 2,
    }
  ];

  const upcomingQuizzes = [
    {
      id: 1,
      title: "Machine Learning Algorithms",
      date: "Today",
      difficulty: "Intermediate",
      questions: 15,
      estimatedTime: "25 min"
    },
    {
      id: 2,
      title: "Statistics Fundamentals",
      date: "Tomorrow",
      difficulty: "Beginner",
      questions: 10,
      estimatedTime: "15 min"
    }
  ];

  return (
    <div className="container mx-auto max-w-7xl py-8">
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

      {/* Stats Cards */}
      <div className="mb-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
        <Card>
          <CardContent className="p-6">
            <div className="flex justify-between">
              <div>
                <p className="text-sm font-medium text-gray-500 dark:text-gray-400">Courses Completed</p>
                <h3 className="mt-1 text-3xl font-bold text-gray-900 dark:text-white">{stats.coursesCompleted}</h3>
              </div>
              <div className="rounded-full bg-blue-100 p-3 text-blue-600 dark:bg-blue-900/30 dark:text-blue-400">
                <BookOpen size={24} />
              </div>
            </div>
            <div className="mt-4 flex items-center text-sm text-green-600 dark:text-green-400">
              <ArrowUpRight size={18} className="mr-1" />
              <span>+2 this month</span>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="p-6">
            <div className="flex justify-between">
              <div>
                <p className="text-sm font-medium text-gray-500 dark:text-gray-400">Quizzes Taken</p>
                <h3 className="mt-1 text-3xl font-bold text-gray-900 dark:text-white">{stats.quizzesTaken}</h3>
              </div>
              <div className="rounded-full bg-purple-100 p-3 text-purple-600 dark:bg-purple-900/30 dark:text-purple-400">
                <CheckCircle size={24} />
              </div>
            </div>
            <div className="mt-4 flex items-center text-sm text-green-600 dark:text-green-400">
              <ArrowUpRight size={18} className="mr-1" />
              <span>+5 this week</span>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="p-6">
            <div className="flex justify-between">
              <div>
                <p className="text-sm font-medium text-gray-500 dark:text-gray-400">Overall Progress</p>
                <h3 className="mt-1 text-3xl font-bold text-gray-900 dark:text-white">{stats.progress}%</h3>
              </div>
              <div className="rounded-full bg-teal-100 p-3 text-teal-600 dark:bg-teal-900/30 dark:text-teal-400">
                <BarChart size={24} />
              </div>
            </div>
            <div className="mt-3 h-2.5 w-full rounded-full bg-gray-200 dark:bg-gray-700">
              <div 
                className="h-2.5 rounded-full bg-teal-600" 
                style={{ width: `${stats.progress}%` }}
              ></div>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="p-6">
            <div className="flex justify-between">
              <div>
                <p className="text-sm font-medium text-gray-500 dark:text-gray-400">Learning Streak</p>
                <h3 className="mt-1 text-3xl font-bold text-gray-900 dark:text-white">{stats.streak} days</h3>
              </div>
              <div className="rounded-full bg-yellow-100 p-3 text-yellow-600 dark:bg-yellow-900/30 dark:text-yellow-400">
                <Award size={24} />
              </div>
            </div>
            <div className="mt-4 flex items-center text-sm text-gray-600 dark:text-gray-400">
              <Calendar size={18} className="mr-1" />
              <span>Keep it up!</span>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Active Learning Paths */}
      <div className="mb-8">
        <div className="mb-4 flex items-center justify-between">
          <h2 className="text-xl font-bold text-gray-900 dark:text-white">Your Learning Paths</h2>
          <Button 
            variant="ghost" 
            size="sm"
            rightIcon={<ArrowUpRight size={16} />}
          >
            View All
          </Button>
        </div>
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {roadmaps.map((roadmap) => (
            <Card key={roadmap.id} hover>
              <CardContent className="p-6">
                <h3 className="mb-2 text-lg font-semibold text-gray-900 dark:text-white">
                  {roadmap.title}
                </h3>
                <div className="mb-4 flex items-center justify-between text-sm text-gray-600 dark:text-gray-400">
                  <span>{roadmap.completedLessons} of {roadmap.totalLessons} lessons</span>
                  <span className="font-medium text-blue-600 dark:text-blue-400">{roadmap.progress}%</span>
                </div>
                <div className="mb-4 h-2 w-full rounded-full bg-gray-200 dark:bg-gray-700">
                  <div 
                    className="h-2 rounded-full bg-blue-600" 
                    style={{ width: `${roadmap.progress}%` }}
                  ></div>
                </div>
                <div className="mb-4">
                  <p className="text-sm font-medium text-gray-700 dark:text-gray-300">Next lesson:</p>
                  <p className="text-gray-600 dark:text-gray-400">{roadmap.nextLesson}</p>
                </div>
                <Button 
                  variant="outline" 
                  fullWidth 
                  leftIcon={<BookOpen size={16} />}
                >
                  Continue
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>

      {/* Upcoming Quizzes & Recommendations */}
      <div className="grid gap-6 lg:grid-cols-3">
        {/* Upcoming Quizzes */}
        <div className="lg:col-span-2">
          <Card>
            <CardHeader>
              <CardTitle>Upcoming Quizzes</CardTitle>
              <CardDescription>Prepare for these quizzes to test your knowledge</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {upcomingQuizzes.map((quiz) => (
                  <div key={quiz.id} className="flex items-center justify-between rounded-lg border border-gray-200 p-4 dark:border-gray-800">
                    <div className="flex items-start space-x-4">
                      <div className="rounded-md bg-blue-100 p-2 text-blue-600 dark:bg-blue-900/30 dark:text-blue-400">
                        <Brain size={24} />
                      </div>
                      <div>
                        <h4 className="font-medium text-gray-900 dark:text-white">{quiz.title}</h4>
                        <div className="mt-1 flex items-center space-x-4 text-sm text-gray-500 dark:text-gray-400">
                          <div className="flex items-center">
                            <Calendar size={14} className="mr-1" />
                            <span>{quiz.date}</span>
                          </div>
                          <div className="flex items-center">
                            <Clock size={14} className="mr-1" />
                            <span>{quiz.estimatedTime}</span>
                          </div>
                        </div>
                      </div>
                    </div>
                    <Button 
                      variant="ghost" 
                      size="sm"
                    >
                      Start
                    </Button>
                  </div>
                ))}
              </div>
              <Button 
                variant="outline" 
                fullWidth 
                className="mt-4"
              >
                View All Quizzes
              </Button>
            </CardContent>
          </Card>
        </div>

        {/* AI Recommendations */}
        <div>
          <Card className="bg-gradient-to-br from-blue-600 to-purple-700 text-white">
            <CardHeader>
              <CardTitle className="text-white">AI Recommendations</CardTitle>
              <CardDescription className="text-blue-100">
                Based on your learning patterns
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="rounded-lg bg-white/10 p-4 backdrop-blur-sm">
                  <h4 className="font-medium">Review Neural Networks</h4>
                  <p className="mt-1 text-sm text-blue-100">
                    Based on your quiz performance, reviewing this topic could improve your understanding.
                  </p>
                </div>
                <div className="rounded-lg bg-white/10 p-4 backdrop-blur-sm">
                  <h4 className="font-medium">Try a New Learning Style</h4>
                  <p className="mt-1 text-sm text-blue-100">
                    Visual learning methods might help you grasp complex topics more effectively.
                  </p>
                </div>
                <div className="rounded-lg bg-white/10 p-4 backdrop-blur-sm">
                  <h4 className="font-medium">Increase Study Frequency</h4>
                  <p className="mt-1 text-sm text-blue-100">
                    Shorter, more frequent study sessions may improve your retention rate.
                  </p>
                </div>
              </div>
              <Button 
                variant="outline" 
                fullWidth 
                className="mt-4 border-white text-white hover:bg-white/20"
              >
                Get Personalized Plan
              </Button>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;