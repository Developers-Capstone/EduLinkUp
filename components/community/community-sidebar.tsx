"use client"

import { TrendingUp, Hash, ChevronRight, Award, Star } from "lucide-react"

interface Category {
  id: string
  label: string
  count: number
}

interface TrendingTag {
  name: string
  count: number
}

interface CommunitySidebarProps {
  categories: Category[]
  selectedCategory: string
  onSelectCategory: (category: string) => void
  trendingTags: TrendingTag[]
}

const topContributors = [
  { name: "Amit Kumar", avatar: "/male-student-avatar.png", reputation: 2340, badge: "gold" },
  { name: "Priya Sharma", avatar: "/female-professor-avatar.png", reputation: 1890, badge: "gold" },
  { name: "Rahul Mehta", avatar: "/student-avatar-male-indian.jpg", reputation: 1250, badge: "silver" },
]

export function CommunitySidebar({
  categories,
  selectedCategory,
  onSelectCategory,
  trendingTags,
}: CommunitySidebarProps) {
  return (
    <div className="space-y-6">
      {/* Categories */}
      <div className="relative">
        <div className="absolute inset-0 bg-gradient-to-r from-neon-blue/10 to-neon-purple/10 rounded-2xl blur-xl" />
        <div className="relative glass rounded-2xl p-5 border border-white/10">
          <div className="absolute top-0 left-6 right-6 h-px bg-gradient-to-r from-neon-blue to-neon-purple opacity-50" />

          <h3 className="text-sm font-semibold text-foreground mb-4 flex items-center gap-2">
            <div className="w-8 h-8 rounded-lg bg-neon-blue/20 flex items-center justify-center">
              <Hash className="w-4 h-4 text-neon-blue" />
            </div>
            Categories
          </h3>
          <div className="space-y-1">
            {categories.map((category) => (
              <button
                key={category.id}
                onClick={() => onSelectCategory(category.id)}
                className={`w-full flex items-center justify-between px-3 py-2.5 rounded-xl text-sm transition-all ${
                  selectedCategory === category.id
                    ? "bg-gradient-to-r from-neon-blue/20 to-neon-purple/20 text-neon-blue border border-neon-blue/30"
                    : "text-muted-foreground hover:bg-white/5 hover:text-foreground"
                }`}
              >
                <span>{category.label}</span>
                <div className="flex items-center gap-2">
                  <span
                    className={`text-xs px-2 py-0.5 rounded-full ${
                      selectedCategory === category.id ? "bg-neon-blue/20" : "bg-white/10"
                    }`}
                  >
                    {category.count}
                  </span>
                  <ChevronRight
                    className={`w-4 h-4 transition-transform ${selectedCategory === category.id ? "translate-x-0.5" : ""}`}
                  />
                </div>
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Trending Tags */}
      <div className="relative">
        <div className="absolute inset-0 bg-gradient-to-r from-neon-purple/10 to-neon-blue/10 rounded-2xl blur-xl" />
        <div className="relative glass rounded-2xl p-5 border border-white/10">
          <div className="absolute top-0 left-6 right-6 h-px bg-gradient-to-r from-neon-purple to-neon-blue opacity-50" />

          <h3 className="text-sm font-semibold text-foreground mb-4 flex items-center gap-2">
            <div className="w-8 h-8 rounded-lg bg-neon-purple/20 flex items-center justify-center">
              <TrendingUp className="w-4 h-4 text-neon-purple" />
            </div>
            Trending Tags
          </h3>
          <div className="flex flex-wrap gap-2">
            {trendingTags.map((tag, index) => (
              <button
                key={tag.name}
                className={`group px-3 py-1.5 rounded-lg border transition-all hover:scale-105 ${
                  index < 2
                    ? "bg-gradient-to-r from-neon-blue/20 to-neon-purple/20 border-neon-blue/30 text-neon-blue"
                    : "bg-white/5 border-white/10 text-muted-foreground hover:border-neon-blue/50 hover:text-neon-blue"
                }`}
              >
                <span className="text-xs font-medium">#{tag.name}</span>
                <span className="ml-1.5 text-[10px] opacity-70">{tag.count}</span>
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Top Contributors */}
      <div className="relative">
        <div className="absolute inset-0 bg-gradient-to-r from-amber-500/10 to-neon-blue/10 rounded-2xl blur-xl" />
        <div className="relative glass rounded-2xl p-5 border border-white/10">
          <div className="absolute top-0 left-6 right-6 h-px bg-gradient-to-r from-amber-500 to-neon-blue opacity-50" />

          <h3 className="text-sm font-semibold text-foreground mb-4 flex items-center gap-2">
            <div className="w-8 h-8 rounded-lg bg-amber-500/20 flex items-center justify-center">
              <Award className="w-4 h-4 text-amber-500" />
            </div>
            Top Contributors
          </h3>
          <div className="space-y-3">
            {topContributors.map((contributor, index) => (
              <div
                key={contributor.name}
                className="group flex items-center gap-3 p-2 rounded-xl hover:bg-white/5 transition-all cursor-pointer"
              >
                <div className="relative">
                  <span className="absolute -top-1 -left-1 w-5 h-5 rounded-full bg-gradient-to-r from-neon-blue to-neon-purple flex items-center justify-center text-[10px] font-bold text-white">
                    {index + 1}
                  </span>
                  <img
                    src={contributor.avatar || "/placeholder.svg"}
                    alt={contributor.name}
                    className="w-10 h-10 rounded-full object-cover ring-2 ring-white/10 group-hover:ring-neon-blue/50 transition-all"
                  />
                </div>
                <div className="flex-1 min-w-0">
                  <div className="text-sm font-medium text-foreground truncate group-hover:text-neon-blue transition-colors">
                    {contributor.name}
                  </div>
                  <div className="flex items-center gap-1 text-xs text-muted-foreground">
                    <Star className={`w-3 h-3 ${contributor.badge === "gold" ? "text-amber-500" : "text-gray-400"}`} />
                    <span>{contributor.reputation.toLocaleString()} rep</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}
