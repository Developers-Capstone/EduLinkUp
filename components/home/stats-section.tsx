"use client"

import { Users, BookOpen, Video, Award, TrendingUp } from "lucide-react"

const stats = [
  {
    icon: Users,
    value: "50,000+",
    label: "Active Learners",
    color: "text-neon-blue",
    bgColor: "bg-neon-blue/10",
    glowColor: "shadow-neon-blue/20",
    borderColor: "group-hover:border-neon-blue/50",
    trend: "+12% this month",
  },
  {
    icon: BookOpen,
    value: "500+",
    label: "Courses Available",
    color: "text-neon-purple",
    bgColor: "bg-neon-purple/10",
    glowColor: "shadow-neon-purple/20",
    borderColor: "group-hover:border-neon-purple/50",
    trend: "+24 new courses",
  },
  {
    icon: Video,
    value: "10,000+",
    label: "Video Lessons",
    color: "text-neon-cyan",
    bgColor: "bg-neon-cyan/10",
    glowColor: "shadow-neon-cyan/20",
    borderColor: "group-hover:border-neon-cyan/50",
    trend: "HD Quality",
  },
  {
    icon: Award,
    value: "95%",
    label: "Success Rate",
    color: "text-green-400",
    bgColor: "bg-green-400/10",
    glowColor: "shadow-green-400/20",
    borderColor: "group-hover:border-green-400/50",
    trend: "Industry leading",
  },
]

export function StatsSection() {
  return (
    <section className="py-20 relative overflow-hidden">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/2 left-1/4 w-96 h-96 bg-neon-purple/10 rounded-full blur-3xl animate-float-slow" />
        <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-neon-blue/10 rounded-full blur-3xl animate-float-medium" />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 mb-6">
            <TrendingUp className="w-4 h-4 text-neon-cyan" />
            <span className="text-sm text-muted-foreground">Our Impact</span>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Trusted by Thousands of{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-neon-blue to-neon-purple">
              Learners
            </span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Join our growing network of students achieving their learning goals every day
          </p>
        </div>

        <div className="relative">
          <div className="absolute -inset-0.5 bg-gradient-to-r from-neon-blue/20 via-neon-purple/20 to-neon-cyan/20 rounded-3xl blur opacity-50" />
          <div className="relative glass rounded-2xl md:rounded-3xl p-4 sm:p-6 md:p-12 border border-white/10">
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4 md:gap-6 lg:gap-8">
              {stats.map((stat, index) => {
                const Icon = stat.icon
                return (
                  <div
                    key={stat.label}
                    className={`group relative text-center p-3 sm:p-4 md:p-6 rounded-xl md:rounded-2xl bg-white/[0.02] border border-white/5 ${stat.borderColor} transition-all duration-300 hover:bg-white/[0.05] hover:-translate-y-1`}
                  >
                    <div
                      className={`absolute top-0 left-1/2 -translate-x-1/2 w-8 sm:w-12 h-1 rounded-b-full ${stat.bgColor} opacity-0 group-hover:opacity-100 transition-opacity`}
                    />

                    <div className="relative inline-flex items-center justify-center mb-2 sm:mb-3 md:mb-4">
                      <div
                        className={`absolute inset-0 ${stat.bgColor} rounded-xl md:rounded-2xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity scale-150`}
                      />
                      <div
                        className={`relative w-10 h-10 sm:w-12 sm:h-12 md:w-16 md:h-16 rounded-xl md:rounded-2xl ${stat.bgColor} border border-white/10 flex items-center justify-center ${stat.color} transition-transform duration-300 group-hover:scale-110`}
                      >
                        <Icon className="w-5 h-5 sm:w-6 sm:h-6 md:w-8 md:h-8" />
                      </div>
                    </div>

                    <div className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold text-foreground mb-1 sm:mb-2 tracking-tight group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-white group-hover:to-white/80 transition-all">
                      {stat.value}
                    </div>

                    <div className="text-xs sm:text-sm font-medium text-muted-foreground mb-2 sm:mb-3">{stat.label}</div>

                    <div
                      className={`inline-flex items-center gap-1 px-1.5 sm:px-2 py-0.5 sm:py-1 rounded-full ${stat.bgColor} text-[10px] sm:text-xs ${stat.color}`}
                    >
                      <span className="truncate">{stat.trend}</span>
                    </div>
                  </div>
                )
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
