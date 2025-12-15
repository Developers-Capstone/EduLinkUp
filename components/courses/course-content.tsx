"use client"

import { useState } from "react"
import { ChevronDown, BookOpen } from "lucide-react"

interface Topic {
  title: string
  items: string[]
}

interface CourseContentProps {
  topics: Topic[]
}

export function CourseContent({ topics }: CourseContentProps) {
  const [expandedTopics, setExpandedTopics] = useState<number[]>([0])

  const toggleTopic = (index: number) => {
    setExpandedTopics((prev) => (prev.includes(index) ? prev.filter((i) => i !== index) : [...prev, index]))
  }

  if (!topics || topics.length === 0) {
    return (
      <div className="glass rounded-xl p-6 text-center">
        <BookOpen className="w-12 h-12 mx-auto mb-4 text-muted-foreground" />
        <p className="text-muted-foreground">No content available yet.</p>
      </div>
    )
  }

  return (
    <div className="space-y-3">
      {topics.map((topic, index) => {
        const isExpanded = expandedTopics.includes(index)
        return (
          <div key={index} className="glass rounded-xl overflow-hidden">
            <button
              onClick={() => toggleTopic(index)}
              className="w-full flex items-center justify-between p-4 text-left hover:bg-white/5 transition-colors"
            >
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 rounded-lg bg-neon-blue/20 flex items-center justify-center text-neon-blue font-semibold text-sm">
                  {index + 1}
                </div>
                <div>
                  <h4 className="font-semibold text-foreground">{topic.title}</h4>
                  <p className="text-xs text-muted-foreground">{topic.items.length} lessons</p>
                </div>
              </div>
              <ChevronDown
                className={`w-5 h-5 text-muted-foreground transition-transform ${isExpanded ? "rotate-180" : ""}`}
              />
            </button>

            {isExpanded && (
              <div className="px-4 pb-4">
                <ul className="space-y-2 ml-11">
                  {topic.items.map((item, itemIndex) => (
                    <li
                      key={itemIndex}
                      className="flex items-center gap-3 py-2 px-3 rounded-lg hover:bg-white/5 transition-colors cursor-pointer"
                    >
                      <div className="w-2 h-2 rounded-full bg-neon-purple" />
                      <span className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                        {item}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </div>
        )
      })}
    </div>
  )
}
