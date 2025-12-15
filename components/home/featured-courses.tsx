import Link from "next/link"
import { Star, Clock, Users, Play, ArrowRight, Sparkles } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"

const featuredCourses = [
  {
    id: "1",
    title: "Complete Python Programming",
    description: "Master Python from basics to advanced. Build real-world projects and land your dream job.",
    thumbnail: "/python-programming-code-dark.jpg",
    category: "Engineering",
    rating: 4.9,
    students: 12500,
    duration: "45 hours",
    instructor: "Dr. Anjali Gupta",
    price: "Free",
    badge: "Bestseller",
    badgeColor: "from-amber-500 to-orange-500",
  },
  {
    id: "2",
    title: "NEET Biology Complete Course",
    description: "Comprehensive NEET biology preparation with detailed explanations and practice tests.",
    thumbnail: "/biology-medical-science-dark.jpg",
    category: "Medical",
    rating: 4.8,
    students: 8900,
    duration: "60 hours",
    instructor: "Dr. Amit Verma",
    price: "Free",
    badge: "Popular",
    badgeColor: "from-neon-blue to-cyan-400",
  },
  {
    id: "3",
    title: "UPSC Complete Foundation",
    description: "Start your UPSC journey with our comprehensive foundation course covering all subjects.",
    thumbnail: "/india-government-building-dark.jpg",
    category: "Government",
    rating: 4.9,
    students: 15600,
    duration: "100 hours",
    instructor: "IAS Priya Sharma",
    price: "Free",
    badge: "Top Rated",
    badgeColor: "from-neon-purple to-pink-500",
  },
  {
    id: "4",
    title: "JEE Mathematics Masterclass",
    description: "Crack JEE Mains and Advanced with our expert-led mathematics course.",
    thumbnail: "/mathematics-equations-formulas-dark.jpg",
    category: "Engineering",
    rating: 4.7,
    students: 11200,
    duration: "80 hours",
    instructor: "Prof. Raj Kumar",
    price: "Free",
    badge: "New",
    badgeColor: "from-emerald-500 to-teal-400",
  },
]

export function FeaturedCourses() {
  return (
    <section className="py-24 relative overflow-hidden">
      <div className="absolute top-20 left-10 w-72 h-72 bg-neon-purple/10 rounded-full blur-3xl animate-float" />
      <div className="absolute bottom-20 right-10 w-96 h-96 bg-neon-blue/10 rounded-full blur-3xl animate-float-delayed" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gradient-to-r from-neon-purple/5 to-neon-blue/5 rounded-full blur-3xl" />

      <div className="container mx-auto px-4 relative z-10">
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between mb-16 gap-6">
          <div>
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-neon-blue/10 to-neon-purple/10 border border-neon-blue/20 mb-4">
              <Sparkles className="w-4 h-4 text-neon-blue" />
              <span className="text-sm font-medium text-neon-blue">Curated for You</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold mb-3 tracking-tight">
              <span className="gradient-text">Featured Courses</span>
            </h2>
            <p className="text-muted-foreground text-lg max-w-md">
              Hand-picked courses to kickstart your learning journey
            </p>
          </div>
          <Link href="/courses">
            <Button
              variant="outline"
              className="hidden md:flex border-neon-blue/30 hover:bg-neon-blue/10 hover:border-neon-blue/50 bg-transparent transition-all duration-300 group"
            >
              View All Courses
              <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
            </Button>
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {featuredCourses.map((course, index) => (
            <Link href={`/courses/${course.id}`} key={course.id}>
              <div className="relative group h-full" style={{ animationDelay: `${index * 100}ms` }}>
                {/* Glow effect on hover */}
                <div className="absolute -inset-0.5 bg-gradient-to-r from-neon-blue to-neon-purple rounded-3xl opacity-0 group-hover:opacity-30 blur transition-all duration-500" />

                <div className="relative glass rounded-3xl overflow-hidden h-full transition-all duration-500 group-hover:-translate-y-2 group-hover:shadow-2xl group-hover:shadow-neon-purple/10">
                  {/* Gradient accent line at top */}
                  <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-neon-blue via-neon-purple to-neon-blue opacity-60" />

                  {/* Thumbnail */}
                  <div className="relative aspect-video overflow-hidden">
                    <img
                      src={course.thumbnail || "/placeholder.svg"}
                      alt={course.title}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                    />
                    {/* Overlay gradient */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />

                    {/* Play button on hover */}
                    <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300">
                      <div className="w-16 h-16 rounded-full bg-white/10 backdrop-blur-md border border-white/20 flex items-center justify-center transform scale-75 group-hover:scale-100 transition-transform duration-300">
                        <Play className="w-7 h-7 text-white fill-white ml-1" />
                      </div>
                    </div>

                    {/* Badge */}
                    {course.badge && (
                      <Badge
                        className={`absolute top-4 left-4 bg-gradient-to-r ${course.badgeColor} text-white border-none shadow-lg`}
                      >
                        {course.badge}
                      </Badge>
                    )}

                    {/* Price badge */}
                    <div className="absolute bottom-4 right-4 px-3 py-1 rounded-full bg-emerald-500/90 backdrop-blur-sm text-white text-sm font-semibold shadow-lg">
                      {course.price}
                    </div>
                  </div>

                  {/* Content */}
                  <div className="p-6">
                    {/* Category pill */}
                    <div className="inline-flex items-center gap-2 mb-3">
                      <span className="text-xs px-3 py-1.5 rounded-full bg-neon-blue/10 text-neon-blue border border-neon-blue/20 font-medium">
                        {course.category}
                      </span>
                    </div>

                    <h3 className="font-bold text-lg text-foreground mb-2 line-clamp-2 group-hover:text-neon-blue transition-colors duration-300">
                      {course.title}
                    </h3>

                    <p className="text-sm text-muted-foreground mb-5 line-clamp-2 leading-relaxed">
                      {course.description}
                    </p>

                    {/* Instructor */}
                    <p className="text-xs text-muted-foreground mb-4">
                      by <span className="text-foreground font-medium">{course.instructor}</span>
                    </p>

                    {/* Stats row with icons */}
                    <div className="flex items-center justify-between pt-4 border-t border-white/5">
                      <div className="flex items-center gap-1.5">
                        <div className="flex items-center justify-center w-6 h-6 rounded-full bg-yellow-500/10">
                          <Star className="w-3.5 h-3.5 text-yellow-500 fill-yellow-500" />
                        </div>
                        <span className="text-foreground font-semibold text-sm">{course.rating}</span>
                      </div>
                      <div className="flex items-center gap-1.5 text-muted-foreground">
                        <Users className="w-4 h-4" />
                        <span className="text-xs">{course.students.toLocaleString()}</span>
                      </div>
                      <div className="flex items-center gap-1.5 text-muted-foreground">
                        <Clock className="w-4 h-4" />
                        <span className="text-xs">{course.duration}</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>

        <div className="mt-12 text-center md:hidden">
          <Link href="/courses">
            <Button className="bg-gradient-to-r from-neon-blue to-neon-purple hover:opacity-90 text-white border-none shadow-lg shadow-neon-purple/20">
              View All Courses
              <ArrowRight className="w-4 h-4 ml-2" />
            </Button>
          </Link>
        </div>
      </div>
    </section>
  )
}
