"use client"

import { useState } from "react"
import { Search, Plus, TrendingUp, MessageCircle, Users, Clock, Sparkles, Zap } from "lucide-react"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { DiscussionCard } from "@/components/community/discussion-card"
import { CommunitySidebar } from "@/components/community/community-sidebar"
import { CreatePostDialog } from "@/components/community/create-post-dialog"

const discussions = [
  {
    id: "1",
    title: "Best approach for solving JEE Advanced Calculus problems?",
    content:
      "I'm struggling with integration problems in JEE Advanced. Can someone share effective strategies and resources for mastering calculus? Any recommended books or video lectures?",
    author: {
      name: "Rahul Mehta",
      avatar: "/student-avatar-male-indian.jpg",
      reputation: 1250,
    },
    category: "Engineering",
    tags: ["JEE", "Calculus", "Mathematics"],
    replies: 24,
    views: 456,
    likes: 38,
    createdAt: "2 hours ago",
    isHot: true,
    isPinned: false,
  },
  {
    id: "2",
    title: "NEET Biology: Cell Division conceptual doubts",
    content:
      "Can someone explain the difference between mitosis and meiosis in detail? I keep confusing the stages. Looking for a clear explanation with diagrams if possible.",
    author: {
      name: "Priya Sharma",
      avatar: "/female-student-avatar.png",
      reputation: 890,
    },
    category: "Medical",
    tags: ["NEET", "Biology", "Cell Division"],
    replies: 18,
    views: 312,
    likes: 27,
    createdAt: "5 hours ago",
    isHot: true,
    isPinned: false,
  },
  {
    id: "3",
    title: "UPSC Prelims 2024: Important current affairs topics",
    content:
      "Let's compile a comprehensive list of important current affairs topics for UPSC Prelims 2024. I'll start with key areas:\n\n1. G20 Summit 2023 - India's Presidency, key outcomes, and declarations\n2. Chandrayaan-3 Mission - Successful lunar landing, scientific objectives\n3. New Parliament Building - Inauguration, architectural significance\n4. India-Middle East-Europe Economic Corridor (IMEC)\n5. Uniform Civil Code debates and implementations\n6. Climate Change - COP28 outcomes, India's commitments\n7. Digital India initiatives - UPI international expansion\n8. Women's Reservation Bill - 128th Constitutional Amendment\n9. India's semiconductor mission and manufacturing push\n10. Border disputes and diplomatic relations with neighbors\n\nPlease add more topics and share your preparation strategies! Let's help each other cover all important areas.",
    author: {
      name: "Amit Kumar",
      avatar: "/male-student-avatar.png",
      reputation: 2340,
    },
    category: "Government",
    tags: ["UPSC", "Current Affairs", "Prelims"],
    replies: 45,
    views: 1234,
    likes: 89,
    createdAt: "1 day ago",
    isHot: false,
    isPinned: true,
  },
  {
    id: "4",
    title: "Python vs JavaScript for beginners - Which one to learn first?",
    content:
      "I want to start my coding journey but confused between Python and JavaScript. What would you recommend for a complete beginner who wants to eventually get into web development?",
    author: {
      name: "Neha Gupta",
      avatar: "/female-professor-avatar.png",
      reputation: 450,
    },
    category: "Engineering",
    tags: ["Python", "JavaScript", "Coding"],
    replies: 32,
    views: 567,
    likes: 41,
    createdAt: "3 hours ago",
    isHot: true,
    isPinned: false,
  },
  {
    id: "5",
    title: "Class 12 Physics - Electromagnetic Induction derivations",
    content:
      "Can someone help me understand the derivation of Faraday's law? I'm preparing for boards and this chapter is quite challenging. Any tips for memorizing the formulas?",
    author: {
      name: "Vikram Singh",
      avatar: "/student-avatar-male-indian.jpg",
      reputation: 720,
    },
    category: "Boards",
    tags: ["CBSE", "Physics", "Class 12"],
    replies: 15,
    views: 234,
    likes: 19,
    createdAt: "6 hours ago",
    isHot: false,
    isPinned: false,
  },
  {
    id: "6",
    title: "SSC CGL Tier 1 - How to manage time effectively?",
    content:
      "I'm appearing for SSC CGL this year. The time constraint is my biggest challenge. How do you guys manage to attempt all 100 questions in 60 minutes? Any strategies?",
    author: {
      name: "Rajesh Pandey",
      avatar: "/male-student-avatar.png",
      reputation: 1100,
    },
    category: "Government",
    tags: ["SSC", "CGL", "Time Management"],
    replies: 28,
    views: 445,
    likes: 35,
    createdAt: "12 hours ago",
    isHot: false,
    isPinned: false,
  },
  {
    id: "7",
    title: "NEET Chemistry: Organic reaction mechanisms made easy",
    content:
      "I've compiled my notes on organic chemistry mechanisms. Sharing some tips that helped me score well in chemistry. The key is understanding electron movement...",
    author: {
      name: "Ananya Reddy",
      avatar: "/female-student-avatar.png",
      reputation: 1560,
    },
    category: "Medical",
    tags: ["NEET", "Chemistry", "Organic"],
    replies: 22,
    views: 389,
    likes: 52,
    createdAt: "8 hours ago",
    isHot: false,
    isPinned: false,
  },
  {
    id: "8",
    title: "Data Structures: Best resources to learn Trees and Graphs",
    content:
      "Looking for recommendations on learning advanced data structures, especially trees and graphs. I want to prepare for coding interviews. What courses or books do you suggest?",
    author: {
      name: "Arjun Patel",
      avatar: "/student-avatar-male-indian.jpg",
      reputation: 980,
    },
    category: "Engineering",
    tags: ["DSA", "Coding", "Interview"],
    replies: 19,
    views: 298,
    likes: 24,
    createdAt: "4 hours ago",
    isHot: false,
    isPinned: false,
  },
]

const categories = [
  { id: "all", label: "All Discussions", count: discussions.length },
  { id: "engineering", label: "Engineering", count: 3 },
  { id: "medical", label: "Medical", count: 2 },
  { id: "boards", label: "Board Exams", count: 1 },
  { id: "government", label: "Govt Exams", count: 2 },
]

const trendingTags = [
  { name: "JEE", count: 156 },
  { name: "NEET", count: 134 },
  { name: "UPSC", count: 98 },
  { name: "Python", count: 87 },
  { name: "DSA", count: 76 },
  { name: "Physics", count: 65 },
]

export default function CommunityPage() {
  const [selectedCategory, setSelectedCategory] = useState("all")
  const [searchQuery, setSearchQuery] = useState("")
  const [showCreatePost, setShowCreatePost] = useState(false)

  const filteredDiscussions = discussions.filter((d) => {
    const matchesCategory = selectedCategory === "all" || d.category.toLowerCase() === selectedCategory
    const matchesSearch =
      !searchQuery ||
      d.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      d.content.toLowerCase().includes(searchQuery.toLowerCase()) ||
      d.tags.some((t) => t.toLowerCase().includes(searchQuery.toLowerCase()))
    return matchesCategory && matchesSearch
  })

  const sortedDiscussions = [...filteredDiscussions].sort((a, b) => {
    if (a.isPinned && !b.isPinned) return -1
    if (!a.isPinned && b.isPinned) return 1
    if (a.isHot && !b.isHot) return -1
    if (!a.isHot && b.isHot) return 1
    return 0
  })

  return (
    <div className="min-h-screen pt-24 pb-16 relative overflow-hidden">
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 -left-32 w-96 h-96 bg-neon-purple/20 rounded-full blur-3xl animate-float-slow" />
        <div className="absolute top-1/2 -right-32 w-80 h-80 bg-neon-blue/20 rounded-full blur-3xl animate-float-medium" />
        <div className="absolute bottom-1/4 left-1/3 w-64 h-64 bg-neon-purple/10 rounded-full blur-3xl animate-float-fast" />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 mb-10">
          <div>
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-neon-blue/10 border border-neon-blue/20 text-neon-blue text-sm font-medium mb-4">
              <Users className="w-4 h-4" />
              <span>12,890+ Active Learners</span>
              <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
            </div>
            <h1 className="text-4xl md:text-5xl font-bold mb-3 tracking-tight">
              <span className="bg-gradient-to-r from-neon-blue via-neon-purple to-neon-blue bg-clip-text text-transparent">
                Community Forum
              </span>
            </h1>
            <p className="text-lg text-muted-foreground max-w-xl">
              Ask questions, share knowledge, and connect with fellow learners on their journey to success
            </p>
          </div>
          <Button
            onClick={() => setShowCreatePost(true)}
            className="bg-gradient-to-r from-neon-blue to-neon-purple hover:opacity-90 shadow-lg shadow-neon-blue/25 transition-all duration-300 hover:shadow-neon-blue/40 hover:scale-105 group"
          >
            <Plus className="w-4 h-4 mr-2 transition-transform group-hover:rotate-90" />
            New Discussion
          </Button>
        </div>

        <div className="relative mb-10">
          <div className="absolute inset-0 bg-gradient-to-r from-neon-blue/20 via-neon-purple/20 to-neon-blue/20 rounded-2xl blur-xl" />
          <div className="relative grid grid-cols-2 md:grid-cols-4 gap-4 p-2 glass rounded-2xl border border-white/10">
            {[
              { icon: MessageCircle, label: "Discussions", value: "2,456", color: "neon-blue" },
              { icon: Users, label: "Active Members", value: "12,890", color: "neon-purple" },
              { icon: TrendingUp, label: "Topics Today", value: "156", color: "green-500" },
              { icon: Clock, label: "Avg Response", value: "< 30 min", color: "amber-500" },
            ].map((stat, index) => {
              const Icon = stat.icon
              return (
                <div
                  key={stat.label}
                  className="group relative rounded-xl p-4 flex items-center gap-4 hover:bg-white/5 transition-all duration-300"
                >
                  <div className="relative">
                    <div
                      className={`absolute inset-0 bg-${stat.color}/30 rounded-xl blur-lg opacity-0 group-hover:opacity-100 transition-opacity`}
                    />
                    <div
                      className={`relative w-12 h-12 rounded-xl bg-${stat.color}/20 flex items-center justify-center transition-transform group-hover:scale-110`}
                    >
                      <Icon className={`w-6 h-6 text-${stat.color}`} />
                    </div>
                  </div>
                  <div>
                    <div className="text-2xl font-bold text-foreground">{stat.value}</div>
                    <div className="text-sm text-muted-foreground">{stat.label}</div>
                  </div>
                  {index < 3 && (
                    <div className="hidden md:block absolute right-0 top-1/2 -translate-y-1/2 w-px h-8 bg-white/10" />
                  )}
                </div>
              )
            })}
          </div>
        </div>

        <div className="flex flex-col lg:flex-row gap-8">
          {/* Main Content */}
          <div className="flex-1">
            <div className="relative mb-6">
              <div className="absolute inset-0 bg-gradient-to-r from-neon-blue/10 to-neon-purple/10 rounded-2xl blur-lg" />
              <div className="relative glass rounded-2xl p-5 border border-white/10">
                <div className="flex flex-col sm:flex-row gap-4">
                  <div className="flex-1 relative group">
                    <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground transition-colors group-focus-within:text-neon-blue" />
                    <Input
                      type="text"
                      placeholder="Search discussions, topics, or tags..."
                      value={searchQuery}
                      onChange={(e) => setSearchQuery(e.target.value)}
                      className="pl-12 h-12 bg-white/5 border-white/10 rounded-xl focus:border-neon-blue/50 focus:ring-2 focus:ring-neon-blue/20 transition-all"
                    />
                  </div>
                  <Button
                    variant="outline"
                    className="h-12 px-6 border-white/10 hover:bg-white/5 hover:border-neon-blue/50 rounded-xl bg-transparent"
                  >
                    <Sparkles className="w-4 h-4 mr-2" />
                    AI Search
                  </Button>
                </div>
              </div>
            </div>

            <Tabs defaultValue="latest" className="mb-6">
              <TabsList className="glass p-1.5 h-auto rounded-xl border border-white/10">
                {["latest", "hot", "unanswered"].map((tab) => (
                  <TabsTrigger
                    key={tab}
                    value={tab}
                    className="rounded-lg px-6 py-2.5 data-[state=active]:bg-gradient-to-r data-[state=active]:from-neon-blue/20 data-[state=active]:to-neon-purple/20 data-[state=active]:text-neon-blue transition-all capitalize"
                  >
                    {tab === "hot" && <Zap className="w-4 h-4 mr-1.5" />}
                    {tab}
                  </TabsTrigger>
                ))}
              </TabsList>
            </Tabs>

            {/* Discussions List */}
            <div className="space-y-4">
              {sortedDiscussions.length > 0 ? (
                sortedDiscussions.map((discussion, index) => (
                  <div
                    key={discussion.id}
                    className="animate-in fade-in slide-in-from-bottom-4"
                    style={{ animationDelay: `${index * 50}ms`, animationFillMode: "backwards" }}
                  >
                    <DiscussionCard discussion={discussion} />
                  </div>
                ))
              ) : (
                <div className="relative">
                  <div className="absolute inset-0 bg-gradient-to-r from-neon-blue/10 to-neon-purple/10 rounded-2xl blur-xl" />
                  <div className="relative glass rounded-2xl p-12 text-center border border-white/10">
                    <div className="w-16 h-16 mx-auto mb-4 rounded-2xl bg-neon-blue/20 flex items-center justify-center">
                      <MessageCircle className="w-8 h-8 text-neon-blue" />
                    </div>
                    <h3 className="text-xl font-semibold text-foreground mb-2">No discussions found</h3>
                    <p className="text-muted-foreground mb-6">Be the first to start a discussion!</p>
                    <Button
                      onClick={() => setShowCreatePost(true)}
                      className="bg-gradient-to-r from-neon-blue to-neon-purple"
                    >
                      <Plus className="w-4 h-4 mr-2" />
                      Start Discussion
                    </Button>
                  </div>
                </div>
              )}
            </div>
          </div>

          {/* Sidebar */}
          <aside className="w-full lg:w-80">
            <div className="sticky top-24 space-y-6">
              <CommunitySidebar
                categories={categories}
                selectedCategory={selectedCategory}
                onSelectCategory={setSelectedCategory}
                trendingTags={trendingTags}
              />
            </div>
          </aside>
        </div>
      </div>

      <CreatePostDialog open={showCreatePost} onOpenChange={setShowCreatePost} />
    </div>
  )
}
