import Link from "next/link"
import { Cpu, Stethoscope, GraduationCap, Landmark, ArrowRight, BookOpen, Users } from "lucide-react"

const categories = [
  {
    id: "engineering",
    title: "Engineering",
    description:
      "JEE, GATE, and coding courses for aspiring engineers. Master programming, algorithms, and core subjects.",
    icon: Cpu,
    color: "from-blue-500 to-cyan-500",
    shadowColor: "shadow-blue-500/20",
    courses: 120,
    students: "25K+",
  },
  {
    id: "medical",
    title: "Medical",
    description: "NEET, AIIMS preparation with comprehensive study materials. Biology, Chemistry, and Physics mastery.",
    icon: Stethoscope,
    color: "from-green-500 to-emerald-500",
    shadowColor: "shadow-green-500/20",
    courses: 85,
    students: "18K+",
  },
  {
    id: "boards",
    title: "Board Exams",
    description: "CBSE, ICSE, and State board preparation. Excel in your 10th and 12th board examinations.",
    icon: GraduationCap,
    color: "from-purple-500 to-pink-500",
    shadowColor: "shadow-purple-500/20",
    courses: 95,
    students: "30K+",
  },
  {
    id: "government",
    title: "Government Exams",
    description: "UPSC, SSC, Banking, and Railway exam preparation. Comprehensive courses for competitive exams.",
    icon: Landmark,
    color: "from-orange-500 to-red-500",
    shadowColor: "shadow-orange-500/20",
    courses: 110,
    students: "22K+",
  },
]

export function CategorySection() {
  return (
    <section className="py-24 relative overflow-hidden">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-20 left-10 w-72 h-72 bg-neon-purple/10 rounded-full blur-3xl" />
        <div className="absolute bottom-20 right-10 w-80 h-80 bg-neon-blue/10 rounded-full blur-3xl" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-neon-blue/5 rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-neon-blue/10 border border-neon-blue/20 mb-6">
            <BookOpen className="w-4 h-4 text-neon-blue" />
            <span className="text-sm font-medium text-neon-blue">Popular Learning Paths</span>
          </div>

          <h2 className="text-4xl md:text-5xl font-bold mb-5 tracking-tight">
            <span className="gradient-text">Explore Categories</span>
          </h2>

          <p className="text-muted-foreground max-w-2xl mx-auto text-lg leading-relaxed">
            Choose your path and start learning with our curated courses designed for every aspiration.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {categories.map((category, index) => {
            const Icon = category.icon
            return (
              <Link href={`/courses?category=${category.id}`} key={category.id} className="group">
                <div
                  className={`relative glass rounded-3xl p-7 h-full transition-all duration-500 hover:border-neon-blue/40 hover:-translate-y-2 hover:shadow-2xl ${category.shadowColor}`}
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  <div
                    className={`absolute top-0 left-6 right-6 h-1 rounded-full bg-gradient-to-r ${category.color} opacity-60 group-hover:opacity-100 transition-opacity`}
                  />

                  <div className="relative mb-6">
                    <div
                      className={`absolute inset-0 w-16 h-16 rounded-2xl bg-gradient-to-br ${category.color} blur-xl opacity-40 group-hover:opacity-60 transition-opacity`}
                    />
                    <div
                      className={`relative w-16 h-16 rounded-2xl bg-gradient-to-br ${category.color} flex items-center justify-center group-hover:scale-110 group-hover:rotate-3 transition-all duration-300 shadow-lg`}
                    >
                      <Icon className="w-8 h-8 text-white" />
                    </div>
                  </div>

                  <h3 className="text-xl font-bold text-foreground mb-3 group-hover:text-neon-blue transition-colors">
                    {category.title}
                  </h3>

                  <p className="text-muted-foreground text-sm mb-6 line-clamp-3 leading-relaxed">
                    {category.description}
                  </p>

                  <div className="flex items-center gap-4 mb-4 text-sm">
                    <div className="flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-foreground/5">
                      <BookOpen className="w-3.5 h-3.5 text-neon-blue" />
                      <span className="text-foreground font-semibold">{category.courses}</span>
                      <span className="text-muted-foreground">courses</span>
                    </div>
                    <div className="flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-foreground/5">
                      <Users className="w-3.5 h-3.5 text-neon-purple" />
                      <span className="text-foreground font-semibold">{category.students}</span>
                    </div>
                  </div>

                  <div className="flex items-center gap-2 text-sm font-medium text-muted-foreground group-hover:text-neon-blue transition-colors">
                    <span>Explore courses</span>
                    <ArrowRight className="w-4 h-4 group-hover:translate-x-2 transition-transform duration-300" />
                  </div>
                </div>
              </Link>
            )
          })}
        </div>

        <div className="mt-16 text-center">
          <Link
            href="/courses"
            className="inline-flex items-center gap-2 px-8 py-4 rounded-full bg-gradient-to-r from-neon-blue to-neon-purple text-white font-semibold hover:shadow-lg hover:shadow-neon-blue/25 transition-all duration-300 hover:scale-105"
          >
            <span>Browse All Categories</span>
            <ArrowRight className="w-5 h-5" />
          </Link>
        </div>
      </div>
    </section>
  )
}
