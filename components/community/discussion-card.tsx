"use client"

import { Heart, MessageCircle, Eye, Pin, Flame, ArrowUpRight } from "lucide-react"
import Image from "next/image"
import Link from "next/link"

interface Discussion {
  id: string
  title: string
  content: string
  author: {
    name: string
    avatar: string
    reputation: number
  }
  category: string
  tags: string[]
  replies: number
  views: number
  likes: number
  createdAt: string
  isHot: boolean
  isPinned: boolean
}

interface DiscussionCardProps {
  discussion: Discussion
}

const categoryColors: Record<string, string> = {
  Engineering: "from-neon-blue to-cyan-500",
  Medical: "from-green-500 to-emerald-500",
  Government: "from-amber-500 to-orange-500",
  Boards: "from-neon-purple to-pink-500",
}

export function DiscussionCard({ discussion }: DiscussionCardProps) {
  const gradientColor = categoryColors[discussion.category] || "from-neon-blue to-neon-purple"

  return (
    <Link href={`/community/${discussion.id}`} className="group relative block">
      {/* Hover glow effect */}
      <div
        className={`absolute inset-0 bg-gradient-to-r ${gradientColor} rounded-2xl blur-xl opacity-0 group-hover:opacity-20 transition-opacity duration-500`}
      />

      <div className="relative glass rounded-2xl p-5 border border-white/10 hover:border-white/20 transition-all duration-300 hover:-translate-y-1">
        {/* Top accent line */}
        <div className={`absolute top-0 left-6 right-6 h-px bg-gradient-to-r ${gradientColor} opacity-50`} />

        <div className="flex gap-4">
          {/* Author avatar */}
          <div className="relative shrink-0">
            <div className="absolute inset-0 bg-gradient-to-r from-neon-blue to-neon-purple rounded-full blur-md opacity-0 group-hover:opacity-50 transition-opacity" />
            <Image
              src={discussion.author.avatar || "/placeholder.svg"}
              alt={discussion.author.name}
              width={48}
              height={48}
              className="relative w-12 h-12 rounded-full object-cover ring-2 ring-white/10 group-hover:ring-neon-blue/50 transition-all"
            />
            {/* Reputation badge */}
            <div className="absolute -bottom-1 -right-1 px-1.5 py-0.5 bg-gradient-to-r from-neon-blue to-neon-purple rounded-full text-[10px] font-bold text-white">
              {discussion.author.reputation > 1000
                ? `${(discussion.author.reputation / 1000).toFixed(1)}k`
                : discussion.author.reputation}
            </div>
          </div>

          {/* Content */}
          <div className="flex-1 min-w-0">
            <div className="flex items-start justify-between gap-3 mb-2">
              <div className="flex items-center gap-2 flex-wrap">
                {discussion.isPinned && (
                  <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded-full bg-amber-500/20 text-amber-500 text-xs font-medium">
                    <Pin className="w-3 h-3" />
                    Pinned
                  </span>
                )}
                {discussion.isHot && (
                  <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded-full bg-red-500/20 text-red-500 text-xs font-medium animate-pulse">
                    <Flame className="w-3 h-3" />
                    Hot
                  </span>
                )}
                <span
                  className={`px-2.5 py-0.5 rounded-full bg-gradient-to-r ${gradientColor} text-white text-xs font-medium`}
                >
                  {discussion.category}
                </span>
              </div>
              <span className="text-xs text-muted-foreground whitespace-nowrap">{discussion.createdAt}</span>
            </div>

            <h3 className="text-lg font-semibold text-foreground mb-2 group-hover:text-neon-blue transition-colors line-clamp-2">
              {discussion.title}
              <ArrowUpRight className="inline-block w-4 h-4 ml-1 opacity-0 group-hover:opacity-100 transition-opacity" />
            </h3>

            <p className="text-sm text-muted-foreground line-clamp-2 mb-3">{discussion.content}</p>

            {/* Tags */}
            <div className="flex items-center gap-2 flex-wrap mb-4">
              {discussion.tags.map((tag) => (
                <span
                  key={tag}
                  className="px-2.5 py-1 rounded-lg bg-white/5 border border-white/10 text-xs text-muted-foreground hover:border-neon-blue/50 hover:text-neon-blue transition-colors cursor-pointer"
                >
                  #{tag}
                </span>
              ))}
            </div>

            {/* Stats */}
            <div className="flex items-center gap-1">
              <div className="flex items-center gap-4 text-sm text-muted-foreground">
                <button
                  onClick={(e) => e.preventDefault()}
                  className="flex items-center gap-1.5 hover:text-red-500 transition-colors group/like"
                >
                  <Heart className="w-4 h-4 group-hover/like:scale-110 transition-transform" />
                  <span>{discussion.likes}</span>
                </button>
                <span className="flex items-center gap-1.5">
                  <MessageCircle className="w-4 h-4" />
                  <span>{discussion.replies}</span>
                </span>
                <span className="flex items-center gap-1.5">
                  <Eye className="w-4 h-4" />
                  <span>{discussion.views}</span>
                </span>
              </div>
              <div className="ml-auto">
                <span className="text-xs text-muted-foreground">by </span>
                <span className="text-xs font-medium text-foreground">{discussion.author.name}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Link>
  )
}
