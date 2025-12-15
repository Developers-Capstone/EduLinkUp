"use client"

import Link from "next/link"
import { MessageCircle, Eye, TrendingUp, Sparkles } from "lucide-react"

interface Discussion {
  id: string
  title: string
  category: string
  replies: number
  views: number
  tags: string[]
}

interface RelatedDiscussionsProps {
  currentDiscussionId: string
  currentCategory: string
  currentTags: string[]
}

// Mock related discussions - in production, this would come from your API
const allDiscussions = [
  {
    id: "1",
    title: "Best approach for solving JEE Advanced Calculus problems?",
    category: "Engineering",
    replies: 24,
    views: 456,
    tags: ["JEE", "Calculus", "Mathematics"],
  },
  {
    id: "2",
    title: "NEET Biology: Cell Division conceptual doubts",
    category: "Medical",
    replies: 18,
    views: 312,
    tags: ["NEET", "Biology", "Cell Division"],
  },
  {
    id: "3",
    title: "UPSC Prelims 2024: Important current affairs topics",
    category: "Government",
    replies: 45,
    views: 1234,
    tags: ["UPSC", "Current Affairs", "Prelims"],
  },
  {
    id: "4",
    title: "Python vs JavaScript for beginners - Which one to learn first?",
    category: "Engineering",
    replies: 32,
    views: 567,
    tags: ["Python", "JavaScript", "Coding"],
  },
  {
    id: "5",
    title: "Class 12 Physics - Electromagnetic Induction derivations",
    category: "Boards",
    replies: 15,
    views: 234,
    tags: ["CBSE", "Physics", "Class 12"],
  },
  {
    id: "6",
    title: "SSC CGL Tier 1 - How to manage time effectively?",
    category: "Government",
    replies: 28,
    views: 445,
    tags: ["SSC", "CGL", "Time Management"],
  },
  {
    id: "7",
    title: "NEET Chemistry: Organic reaction mechanisms made easy",
    category: "Medical",
    replies: 22,
    views: 389,
    tags: ["NEET", "Chemistry", "Organic"],
  },
  {
    id: "8",
    title: "Data Structures: Best resources to learn Trees and Graphs",
    category: "Engineering",
    replies: 19,
    views: 298,
    tags: ["DSA", "Coding", "Interview"],
  },
  {
    id: "9",
    title: "JEE Main Physics: Rotational Motion tips and tricks",
    category: "Engineering",
    replies: 31,
    views: 523,
    tags: ["JEE", "Physics", "Mechanics"],
  },
  {
    id: "10",
    title: "UPSC Mains: Essay writing strategy and structure",
    category: "Government",
    replies: 38,
    views: 892,
    tags: ["UPSC", "Essay", "Mains"],
  },
]

const categoryColors: Record<string, string> = {
  Engineering: "from-neon-blue to-cyan-500",
  Medical: "from-green-500 to-emerald-500",
  Government: "from-amber-500 to-orange-500",
  Boards: "from-neon-purple to-pink-500",
}

export function RelatedDiscussions({
  currentDiscussionId,
  currentCategory,
  currentTags,
}: RelatedDiscussionsProps) {
  // Filter and score related discussions
  const relatedDiscussions = allDiscussions
    .filter((d) => d.id !== currentDiscussionId)
    .map((discussion) => {
      let score = 0

      // Same category gets high score
      if (discussion.category === currentCategory) {
        score += 10
      }

      // Matching tags get points
      const matchingTags = discussion.tags.filter((tag) => currentTags.includes(tag))
      score += matchingTags.length * 5

      // Boost popular discussions slightly
      score += Math.log(discussion.views + 1) * 0.5

      return { ...discussion, score }
    })
    .sort((a, b) => b.score - a.score)
    .slice(0, 5)

  if (relatedDiscussions.length === 0) {
    return null
  }

  return (
    <div className="hidden lg:block sticky top-24">
      <div className="relative">
        <div className="absolute inset-0 bg-gradient-to-r from-neon-purple/10 to-neon-blue/10 rounded-2xl blur-xl" />

        <div className="relative glass rounded-2xl p-5 border border-white/10">
          <div className="absolute top-0 left-6 right-6 h-px bg-gradient-to-r from-neon-purple to-neon-blue opacity-50" />

          <div className="flex items-center gap-2 mb-4">
            <div className="w-8 h-8 rounded-lg bg-neon-purple/20 flex items-center justify-center">
              <TrendingUp className="w-4 h-4 text-neon-purple" />
            </div>
            <h3 className="text-sm font-semibold text-foreground">Related Discussions</h3>
          </div>

          <div className="space-y-3">
            {relatedDiscussions.map((discussion, index) => {
              const gradientColor = categoryColors[discussion.category] || "from-neon-blue to-neon-purple"

              return (
                <Link key={discussion.id} href={`/community/${discussion.id}`} className="block">
                  <div
                    className="group relative p-3 rounded-xl bg-white/5 hover:bg-white/10 border border-transparent hover:border-white/10 transition-all duration-300 cursor-pointer hover:-translate-y-0.5"
                    style={{ animationDelay: `${index * 50}ms` }}
                  >
                    {/* Top indicator for highly related */}
                    {index === 0 && (
                      <div className="absolute -top-1 -right-1">
                        <div className="relative">
                          <div className="absolute inset-0 bg-neon-purple/50 rounded-full blur-md" />
                          <div className="relative w-6 h-6 rounded-full bg-gradient-to-r from-neon-purple to-pink-500 flex items-center justify-center">
                            <Sparkles className="w-3 h-3 text-white" />
                          </div>
                        </div>
                      </div>
                    )}

                    {/* Category Badge */}
                    <div className="flex items-center gap-2 mb-2">
                      <span
                        className={`text-[10px] px-2 py-0.5 rounded-full bg-gradient-to-r ${gradientColor} text-white font-medium`}
                      >
                        {discussion.category}
                      </span>
                    </div>

                    {/* Title */}
                    <h4 className="text-sm font-medium text-foreground group-hover:text-neon-blue transition-colors line-clamp-2 mb-2">
                      {discussion.title}
                    </h4>

                    {/* Stats */}
                    <div className="flex items-center gap-3 text-xs text-muted-foreground">
                      <span className="flex items-center gap-1">
                        <MessageCircle className="w-3 h-3" />
                        {discussion.replies}
                      </span>
                      <span className="flex items-center gap-1">
                        <Eye className="w-3 h-3" />
                        {discussion.views}
                      </span>
                    </div>

                    {/* Hover indicator */}
                    <div className="absolute bottom-0 left-3 right-3 h-px bg-gradient-to-r from-transparent via-neon-blue to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                  </div>
                </Link>
              )
            })}
          </div>

          {/* View All Link */}
          <Link href="/community">
            <div className="mt-4 pt-4 border-t border-white/5">
              <button className="w-full text-sm text-muted-foreground hover:text-neon-blue transition-colors text-center">
                View all discussions →
              </button>
            </div>
          </Link>
        </div>
      </div>
    </div>
  )
}
