"use client"

import { useState } from "react"
import { use } from "react"
import Link from "next/link"
import { Star, Clock, Users, BookOpen, CheckCircle, ChevronLeft, Share2, Heart, Download, Lock } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { VideoPlayer } from "@/components/courses/video-player"
import { PlaylistSidebar } from "@/components/courses/playlist-sidebar"
import { CourseContent } from "@/components/courses/course-content"
import { lessonNotes } from "./data/lesson-notes"
import { marked } from "marked"
import { useAuth } from "@/components/auth-provider"

// Configure marked for better rendering
marked.setOptions({
  breaks: true,
  gfm: true,
})

// Mock course data with REAL YouTube videos
const courseData: Record<string, any> = {
  "1": {
    id: "1",
    title: "Complete Python Programming",
    description:
      "Master Python from basics to advanced concepts. This comprehensive course covers everything from variables and data types to advanced topics like decorators, generators, and web scraping. Build real-world projects and prepare for technical interviews.",
    thumbnail: "/python-programming-code-dark.jpg",
    category: "Engineering",
    rating: 4.9,
    students: 12500,
    duration: "45 hours",
    lessons: 120,
    instructor: {
      name: "Dr. Anjali Gupta",
      avatar: "/female-professor-avatar.png",
      title: "Senior Software Engineer at Google",
      students: 45000,
      courses: 12,
    },
    level: "Beginner to Advanced",
    language: "English",
    lastUpdated: "November 2024",
    currentVideo: {
      id: "v1",
      title: "Introduction to Python Programming",
      youtubeId: "rfscVS0vtbw", // freeCodeCamp - Python for Beginners
      duration: "4:26:52",
    },
    playlist: [
      {
        id: "v1",
        title: "Introduction to Python Programming",
        youtubeId: "rfscVS0vtbw", // freeCodeCamp - Full Python Course
        duration: "4:26:52",
        completed: true,
        notes: lessonNotes.v1,
      },
      {
        id: "v2",
        title: "Variables and Data Types",
        youtubeId: "Z1Yd7upQsXY", // Corey Schafer - Variables
        duration: "18:45",
        completed: true,
        notes: lessonNotes.v2,
      },
      {
        id: "v3",
        title: "Strings - Working with Textual Data",
        youtubeId: "k9TUPpGqYTo", // Corey Schafer - Strings
        duration: "22:15",
        completed: false,
        notes: lessonNotes.v3,
      },
      {
        id: "v4",
        title: "Lists, Tuples, and Sets",
        youtubeId: "W8KRzm-HUcc", // Corey Schafer - Lists, Tuples, Sets
        duration: "37:05",
        completed: false,
        notes: lessonNotes.v4,
      },
      {
        id: "v5",
        title: "Dictionaries - Working with Key-Value Pairs",
        youtubeId: "daefaLgNkw0", // Corey Schafer - Dictionaries
        duration: "23:53",
        completed: false,
        notes: lessonNotes.v5,
      },
      {
        id: "v6",
        title: "Conditionals and Booleans - If, Elif, Else",
        youtubeId: "DZwmZ8Usvnk", // Corey Schafer - Conditionals
        duration: "20:15",
        completed: false,
        notes: lessonNotes.v6,
      },
      {
        id: "v7",
        title: "Loops and Iterations - For/While Loops",
        youtubeId: "6iF8Xb7Z3wQ", // Corey Schafer - Loops
        duration: "25:30",
        completed: false,
      },
      {
        id: "v8",
        title: "Functions",
        youtubeId: "9Os0o3wzS_I", // Corey Schafer - Functions
        duration: "23:00",
        completed: false,
      },
      {
        id: "v9",
        title: "Import Modules and Exploring The Standard Library",
        youtubeId: "CqvZ3vGoGs0", // Corey Schafer - Modules
        duration: "24:34",
        completed: false,
      },
      {
        id: "v10",
        title: "Classes and Instances",
        youtubeId: "ZDa-Z5JzLYM", // Corey Schafer - OOP Part 1
        duration: "30:00",
        completed: false,
      },
      {
        id: "v11",
        title: "Class Variables",
        youtubeId: "BJ-VvGyQxho", // Corey Schafer - OOP Part 2
        duration: "16:25",
        completed: false,
      },
      {
        id: "v12",
        title: "Classmethods and Staticmethods",
        youtubeId: "rq8cL2XMM5M", // Corey Schafer - OOP Part 3
        duration: "18:50",
        completed: false,
      },
      {
        id: "v13",
        title: "Inheritance - Creating Subclasses",
        youtubeId: "RSl87lqOXDE", // Corey Schafer - OOP Part 4
        duration: "26:00",
        completed: false,
      },
      {
        id: "v14",
        title: "Special (Magic/Dunder) Methods",
        youtubeId: "3ohzBxoFHAY", // Corey Schafer - OOP Part 5
        duration: "17:50",
        completed: false,
      },
      {
        id: "v15",
        title: "Property Decorators - Getters, Setters, and Deleters",
        youtubeId: "jCzT9XFZ5bw", // Corey Schafer - OOP Part 6
        duration: "15:30",
        completed: false,
      },
      {
        id: "v16",
        title: "Try/Except Blocks - Exception Handling",
        youtubeId: "NIWwJbo-9_8", // Corey Schafer - Exception Handling
        duration: "18:30",
        completed: false,
      },
      {
        id: "v17",
        title: "File Objects - Reading and Writing to Files",
        youtubeId: "Uh2ebFW8OYM", // Corey Schafer - File Handling
        duration: "20:00",
        completed: false,
      },
      {
        id: "v18",
        title: "Decorators - Dynamically Alter The Functionality Of Your Functions",
        youtubeId: "FsAPt_9Bf3U", // Corey Schafer - Decorators
        duration: "30:15",
        completed: false,
      },
      {
        id: "v19",
        title: "Generators - How to use them and the benefits you receive",
        youtubeId: "bD05uGo_sVI", // Corey Schafer - Generators
        duration: "16:20",
        completed: false,
      },
      {
        id: "v20",
        title: "Working with JSON Data",
        youtubeId: "9N6a-VLBa2I", // Corey Schafer - JSON
        duration: "20:45",
        completed: false,
      },
    ],
    content: {
      overview: [
        "Learn Python 3 from scratch - no prior programming experience needed",
        "Understand core programming concepts: variables, loops, functions, OOP",
        "Build 10+ real-world projects including web scrapers and automation scripts",
        "Master popular libraries: NumPy, Pandas, Requests, BeautifulSoup",
        "Prepare for Python coding interviews with 100+ practice problems",
      ],
      topics: [
        {
          title: "Python Fundamentals",
          items: [
            "Introduction to Python Programming",
            "Variables and Data Types",
            "Strings - Working with Textual Data",
            "Lists, Tuples, and Sets",
            "Dictionaries - Working with Key-Value Pairs",
          ],
        },
        {
          title: "Control Flow",
          items: [
            "Conditionals and Booleans - If, Elif, Else",
            "Loops and Iterations - For/While Loops",
          ],
        },
        {
          title: "Functions & Modules",
          items: [
            "Functions",
            "Import Modules and Exploring The Standard Library",
          ],
        },
        {
          title: "Object-Oriented Programming",
          items: [
            "Classes and Instances",
            "Class Variables",
            "Classmethods and Staticmethods",
            "Inheritance - Creating Subclasses",
            "Special (Magic/Dunder) Methods",
            "Property Decorators - Getters, Setters, and Deleters",
          ],
        },
        {
          title: "Advanced Topics",
          items: [
            "Try/Except Blocks - Exception Handling",
            "File Objects - Reading and Writing to Files",
            "Decorators - Dynamically Alter The Functionality Of Your Functions",
            "Generators - How to use them and the benefits you receive",
            "Working with JSON Data",
          ],
        },
      ],
      notes: `## Introduction to Python

Python is a high-level, interpreted programming language known for its simplicity and readability. Created by Guido van Rossum in 1991, Python has become one of the most popular programming languages in the world.

### Why Learn Python?

1. **Easy to Learn**: Python's syntax is clean and intuitive, making it perfect for beginners.
2. **Versatile**: Used in web development, data science, AI/ML, automation, and more.
3. **Large Community**: Extensive libraries and frameworks available.
4. **High Demand**: Python developers are highly sought after in the job market.

### Key Features

- **Readable Syntax**: Code reads like English
- **Dynamic Typing**: No need to declare variable types
- **Extensive Libraries**: NumPy, Pandas, Django, Flask, and thousands more
- **Cross-Platform**: Runs on Windows, Mac, Linux, and more

### Getting Started

\`\`\`python
# Your first Python program
print("Hello, World!")

# Variables
name = "EduLinkUp"
students = 50000

# Simple calculation
result = 10 + 20
print(f"Result: {result}")
\`\`\`

### Practice Exercise

Try creating a program that:
1. Asks for user's name
2. Calculates their birth year from age
3. Prints a personalized greeting`,
    },
  },
}

// Default course for other IDs
const defaultCourse = {
  id: "default",
  title: "Course Not Found",
  description: "This course is not available.",
  thumbnail: "/online-learning-platform.png",
  category: "General",
  rating: 0,
  students: 0,
  duration: "0 hours",
  lessons: 0,
  instructor: {
    name: "Unknown",
    avatar: "/diverse-avatars.png",
    title: "Instructor",
    students: 0,
    courses: 0,
  },
  level: "Unknown",
  language: "English",
  lastUpdated: "Unknown",
  currentVideo: {
    id: "v1",
    title: "No video available",
    youtubeId: "dQw4w9WgXcQ",
    duration: "0:00",
  },
  playlist: [],
  content: {
    overview: [],
    topics: [],
    notes: "No content available",
  },
}

export default function CourseDetailPage({
  params,
}: {
  params: Promise<{ id: string }>
}) {
  const resolvedParams = use(params)
  const { user } = useAuth()
  const course = courseData[resolvedParams.id] || defaultCourse
  const [currentVideoId, setCurrentVideoId] = useState(course.currentVideo?.id)
  const [isLiked, setIsLiked] = useState(false)

  // Filter playlist for unauthenticated users (hide progress)
  const displayPlaylist = user
    ? course.playlist
    : course.playlist?.map((item: any) => ({ ...item, completed: false }))

  // Get the current video from playlist based on selected ID
  const currentVideo = course.playlist?.find((v: any) => v.id === currentVideoId) || course.playlist?.[0]
  const currentYouTubeId = currentVideo?.youtubeId || course.currentVideo?.youtubeId

  return (
    <div className="min-h-screen pt-20 pb-16">
      <div className="container mx-auto px-4">
        {/* Back Button */}
        <Link
          href="/courses"
          className="inline-flex items-center gap-2 text-muted-foreground hover:text-foreground mb-6 transition-colors"
        >
          <ChevronLeft className="w-4 h-4" />
          Back to Courses
        </Link>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-2 space-y-6">
            {/* Video Player */}
            <VideoPlayer videoId={currentYouTubeId} title={currentVideo?.title || ""} />

            {/* Course Info Bar */}
            <div className="glass rounded-xl p-4 flex flex-wrap items-center justify-between gap-4">
              <div className="flex items-center gap-4">
                <Badge className="bg-neon-blue/20 text-neon-blue border-none">{course.category}</Badge>
                <div className="flex items-center gap-1 text-sm">
                  <Star className="w-4 h-4 text-yellow-500 fill-yellow-500" />
                  <span className="text-foreground font-medium">{course.rating}</span>
                  <span className="text-muted-foreground">({course.students?.toLocaleString()} students)</span>
                </div>
              </div>
              <div className="flex items-center gap-2">
                <Button
                  variant="ghost"
                  size="icon"
                  onClick={() => setIsLiked(!isLiked)}
                  className={isLiked ? "text-red-500" : "text-muted-foreground"}
                >
                  <Heart className={`w-5 h-5 ${isLiked ? "fill-current" : ""}`} />
                </Button>
                <Button variant="ghost" size="icon" className="text-muted-foreground">
                  <Share2 className="w-5 h-5" />
                </Button>
                <Button variant="ghost" size="icon" className="text-muted-foreground">
                  <Download className="w-5 h-5" />
                </Button>
              </div>
            </div>

            {/* Course Title and Description */}
            <div>
              <h1 className="text-2xl md:text-3xl font-bold text-foreground mb-3">{course.title}</h1>
              <p className="text-muted-foreground">{course.description}</p>
            </div>

            {/* Course Meta */}
            <div className="flex flex-wrap items-center gap-6 text-sm text-muted-foreground">
              <div className="flex items-center gap-2">
                <Clock className="w-4 h-4" />
                <span>{course.duration}</span>
              </div>
              <div className="flex items-center gap-2">
                <BookOpen className="w-4 h-4" />
                <span>{course.lessons} lessons</span>
              </div>
              <div className="flex items-center gap-2">
                <Users className="w-4 h-4" />
                <span>{course.level}</span>
              </div>
              <span>Last updated: {course.lastUpdated}</span>
            </div>

            {/* Instructor Info */}
            <div className="glass rounded-xl p-4 flex items-center gap-4">
              <img
                src={course.instructor?.avatar || "/placeholder.svg"}
                alt={course.instructor?.name}
                className="w-16 h-16 rounded-full object-cover"
              />
              <div>
                <h3 className="font-semibold text-foreground">{course.instructor?.name}</h3>
                <p className="text-sm text-muted-foreground">{course.instructor?.title}</p>
                <p className="text-xs text-muted-foreground mt-1">
                  {course.instructor?.students?.toLocaleString()} students • {course.instructor?.courses} courses
                </p>
              </div>
            </div>

            {/* Tabs for Content */}
            <Tabs defaultValue="content" className="w-full">
              <TabsList className="glass w-full justify-start gap-2 p-1 h-auto flex-wrap">
                <TabsTrigger
                  value="content"
                  className="data-[state=active]:bg-neon-blue/20 data-[state=active]:text-neon-blue"
                >
                  Course Content
                </TabsTrigger>
                <TabsTrigger
                  value="overview"
                  className="data-[state=active]:bg-neon-blue/20 data-[state=active]:text-neon-blue"
                >
                  Overview
                </TabsTrigger>
                <TabsTrigger
                  value="notes"
                  className="data-[state=active]:bg-neon-blue/20 data-[state=active]:text-neon-blue"
                >
                  Notes
                </TabsTrigger>
              </TabsList>

              <TabsContent value="content" className="mt-6">
                <CourseContent topics={course.content?.topics} />
              </TabsContent>

              <TabsContent value="overview" className="mt-6">
                <div className="glass rounded-xl p-6">
                  <h3 className="text-lg font-semibold text-foreground mb-4">What you'll learn</h3>
                  <ul className="space-y-3">
                    {course.content?.overview?.map((item: string, index: number) => (
                      <li key={index} className="flex items-start gap-3">
                        <CheckCircle className="w-5 h-5 text-green-400 flex-shrink-0 mt-0.5" />
                        <span className="text-muted-foreground">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </TabsContent>

              <TabsContent value="notes" className="mt-6">
                <div className="glass rounded-xl p-6">
                  {user ? (
                    <div
                      className="markdown-content"
                      dangerouslySetInnerHTML={{
                        __html: marked.parse(
                          currentVideo?.notes ||
                          (currentVideo
                            ? `## ${currentVideo.title}\n\nNotes for this lesson are coming soon. Check back later!`
                            : course.content?.notes || "No notes available for this lesson."),
                        ),
                      }}
                    />
                  ) : (
                    <div className="flex flex-col items-center justify-center py-12 text-center">
                      <div className="w-16 h-16 rounded-full bg-white/5 flex items-center justify-center mb-4">
                        <Lock className="w-8 h-8 text-muted-foreground" />
                      </div>
                      <h3 className="text-xl font-semibold text-foreground mb-2">Sign in to access course notes</h3>
                      <p className="text-muted-foreground max-w-md mb-6">
                        Unlock comprehensive lesson notes, copy-paste code examples, and track your learning progress —
                        completely free!
                      </p>
                      <Link href="/login">
                        <Button size="lg" className="bg-neon-blue hover:bg-neon-blue/90 text-white cursor-pointer">
                          Sign In to Continue
                        </Button>
                      </Link>
                    </div>
                  )}
                </div>
              </TabsContent>
            </Tabs>
          </div>

          {/* Playlist Sidebar */}
          <aside className="lg:col-span-1">
            <div className="sticky top-24">
              <PlaylistSidebar
                playlist={displayPlaylist || []}
                currentVideoId={currentVideoId}
                onSelectVideo={setCurrentVideoId}
                courseName={course.title}
              />
            </div>
          </aside>
        </div>
      </div>
    </div>
  )
}
