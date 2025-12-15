"use client"

import type React from "react"

import { Cpu, Stethoscope, GraduationCap, Landmark, LayoutGrid } from "lucide-react"

interface Category {
  id: string
  label: string
  count: number
  comingSoon?: boolean
}

interface CategoryFilterProps {
  categories: Category[]
  selectedCategory: string
  onSelectCategory: (category: string) => void
}

const categoryIcons: Record<string, React.ElementType> = {
  all: LayoutGrid,
  engineering: Cpu,
  medical: Stethoscope,
  boards: GraduationCap,
  government: Landmark,
}

export function CategoryFilter({ categories, selectedCategory, onSelectCategory }: CategoryFilterProps) {
  return (
    <div className="glass rounded-xl p-4">
      <h3 className="font-semibold text-foreground mb-4">Categories</h3>
      <div className="space-y-1">
        {categories.map((category) => {
          const Icon = categoryIcons[category.id] || LayoutGrid
          const isSelected = selectedCategory === category.id
          return (
            <button
              key={category.id}
              onClick={() => onSelectCategory(category.id)}
              className={`w-full flex items-center justify-between px-3 py-2.5 rounded-lg transition-all ${isSelected
                ? "bg-neon-blue/20 text-neon-blue"
                : "text-muted-foreground hover:bg-white/5 hover:text-foreground"
                }`}
            >
              <div className="flex items-center gap-3">
                <Icon className="w-4 h-4" />
                <span className="text-sm font-medium">{category.label}</span>
              </div>
              {category.comingSoon ? (
                <span className="text-[10px] px-2 py-0.5 rounded-full bg-yellow-500/20 text-yellow-400 border border-yellow-500/30">
                  Soon
                </span>
              ) : (
                <span className={`text-xs px-2 py-0.5 rounded-full ${isSelected ? "bg-neon-blue/30" : "bg-white/10"}`}>
                  {category.count}
                </span>
              )}
            </button>
          )
        })}
      </div>
    </div>
  )
}
