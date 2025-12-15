import Link from "next/link"
import { Star, Clock, Users, Play, BookOpen } from "lucide-react"
import { Badge } from "@/components/ui/badge"

interface Course {
  id: string
  title: string
  description: string
  thumbnail: string
  category: string
  rating: number
  students: number
  duration: string
  lessons: number
  instructor: string
  level: string
  comingSoon?: boolean
}

interface CourseCardProps {
  course: Course
  viewMode: "grid" | "list"
}

const categoryColors: Record<string, string> = {
  engineering: "bg-blue-500/10 text-blue-400",
  medical: "bg-green-500/10 text-green-400",
  boards: "bg-purple-500/10 text-purple-400",
  government: "bg-orange-500/10 text-orange-400",
}

const categoryLabels: Record<string, string> = {
  engineering: "Engineering",
  medical: "Medical",
  boards: "Boards",
  government: "Govt Exams",
}

export function CourseCard({ course, viewMode }: CourseCardProps) {
  if (viewMode === "list") {
    return (
      <Link href={`/courses/${course.id}`}>
        <div className="glass rounded-xl overflow-hidden group hover-glow transition-all duration-300 flex flex-col md:flex-row">
          {/* Thumbnail */}
          <div className="relative w-full md:w-72 aspect-video md:aspect-auto flex-shrink-0">
            <img
              src={course.thumbnail || "/placeholder.svg"}
              alt={course.title}
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-transparent to-black/40 opacity-0 group-hover:opacity-100 transition-opacity" />
          </div>

          {/* Content */}
          <div className="p-5 flex-1 flex flex-col">
            <div className="flex items-center gap-2 mb-2">
              <span className={`text-xs px-2 py-1 rounded-full ${categoryColors[course.category]}`}>
                {categoryLabels[course.category]}
              </span>
              <Badge variant="outline" className="text-xs border-glass-border">
                {course.level}
              </Badge>
            </div>

            <h3 className="font-semibold text-lg text-foreground mb-2 group-hover:text-neon-blue transition-colors">
              {course.title}
            </h3>

            <p className="text-sm text-muted-foreground mb-4 line-clamp-2">{course.description}</p>

            <div className="mt-auto flex items-center justify-between">
              <div className="flex items-center gap-4 text-sm text-muted-foreground">
                <div className="flex items-center gap-1">
                  <Star className="w-4 h-4 text-yellow-500 fill-yellow-500" />
                  <span className="text-foreground font-medium">{course.rating}</span>
                </div>
                <div className="flex items-center gap-1">
                  <Users className="w-4 h-4" />
                  <span>{course.students.toLocaleString()}</span>
                </div>
                <div className="flex items-center gap-1">
                  <Clock className="w-4 h-4" />
                  <span>{course.duration}</span>
                </div>
                <div className="flex items-center gap-1">
                  <BookOpen className="w-4 h-4" />
                  <span>{course.lessons} lessons</span>
                </div>
              </div>
              <span className="text-green-400 font-semibold">Free</span>
            </div>
          </div>
        </div>
      </Link>
    )
  }

  return (
    <Link href={`/courses/${course.id}`}>
      <div className="glass rounded-xl overflow-hidden group hover-glow transition-all duration-300 h-full flex flex-col">
        {/* Thumbnail */}
        <div className="relative aspect-video overflow-hidden">
          <img
            src={course.thumbnail || "/placeholder.svg"}
            alt={course.title}
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
            <div className="w-14 h-14 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center">
              <Play className="w-6 h-6 text-white fill-white" />
            </div>
          </div>
          <Badge className={`absolute top-3 left-3 ${categoryColors[course.category]} border-none`}>
            {categoryLabels[course.category]}
          </Badge>
        </div>

        {/* Content */}
        <div className="p-5 flex-1 flex flex-col">
          <div className="flex items-center gap-2 mb-2">
            <Badge variant="outline" className="text-xs border-glass-border">
              {course.level}
            </Badge>
            <span className="text-xs text-green-400 font-medium">Free</span>
          </div>

          <h3 className="font-semibold text-foreground mb-2 line-clamp-2 group-hover:text-neon-blue transition-colors">
            {course.title}
          </h3>

          <p className="text-sm text-muted-foreground mb-4 line-clamp-2 flex-1">{course.description}</p>

          <div className="text-sm text-muted-foreground mb-3">
            by <span className="text-foreground">{course.instructor}</span>
          </div>

          <div className="flex items-center justify-between text-sm text-muted-foreground border-t border-glass-border pt-4">
            <div className="flex items-center gap-1">
              <Star className="w-4 h-4 text-yellow-500 fill-yellow-500" />
              <span className="text-foreground font-medium">{course.rating}</span>
            </div>
            <div className="flex items-center gap-1">
              <Users className="w-4 h-4" />
              <span>{course.students.toLocaleString()}</span>
            </div>
            <div className="flex items-center gap-1">
              <Clock className="w-4 h-4" />
              <span>{course.duration}</span>
            </div>
          </div>
        </div>
      </div>
    </Link>
  )
}
