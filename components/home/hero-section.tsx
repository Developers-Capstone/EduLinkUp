"use client"

import { useState } from "react"
import { Search, Sparkles, Play, ArrowRight, Users, BookOpen, Award } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import Link from "next/link"
import Lottie from "lottie-react"
import animationData from "@/public/hero-animation.json"

export function HeroSection() {
  const [searchQuery, setSearchQuery] = useState("")

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
      {/* Animated Floating Orbs */}
      <div className="absolute top-20 left-10 w-72 h-72 bg-neon-purple/20 rounded-full blur-[120px] animate-pulse" />
      <div className="absolute bottom-20 right-10 w-96 h-96 bg-neon-blue/20 rounded-full blur-[120px] animate-pulse delay-1000" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-neon-purple/10 rounded-full blur-[150px]" />

      {/* Grid Pattern Overlay */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:64px_64px] [mask-image:radial-gradient(ellipse_at_center,black_20%,transparent_70%)]" />

      {/* Lottie Background */}
      <div className="absolute inset-0 z-0 opacity-100 [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black_100%)]">
        <Lottie
          animationData={animationData}
          loop={true}
          className="w-full h-full scale-125"
          rendererSettings={{
            preserveAspectRatio: "xMidYMid slice",
          }}
        />
      </div>

      {/* Overlay Gradient for readability */}
      <div className="absolute inset-0 z-0 bg-background/20" />

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-5xl mx-auto text-center">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full glass mb-8 animate-fade-in border border-neon-purple/30 backdrop-blur-xl shadow-[0_0_20px_rgba(168,85,247,0.15)]">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-neon-purple opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-neon-purple"></span>
            </span>
            <Sparkles className="w-4 h-4 text-neon-purple" />
            <span className="text-sm font-medium text-foreground/90">Join 50,000+ learners worldwide</span>
          </div>

          {/* Main Heading */}
          <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold mb-8 animate-slide-up tracking-tight">
            <span className="text-foreground text-balance">Learn. Connect.</span>
            <br />
            <span className="gradient-text relative">
              Grow Together.
              <svg
                className="absolute -bottom-2 left-0 w-full"
                viewBox="0 0 300 12"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M2 8C50 2 100 2 150 6C200 10 250 4 298 8"
                  stroke="url(#underline-gradient)"
                  strokeWidth="3"
                  strokeLinecap="round"
                />
                <defs>
                  <linearGradient id="underline-gradient" x1="0" y1="0" x2="300" y2="0">
                    <stop stopColor="#3B82F6" />
                    <stop offset="1" stopColor="#A855F7" />
                  </linearGradient>
                </defs>
              </svg>
            </span>
          </h1>

          {/* Subtitle */}
          <p className="text-lg md:text-xl lg:text-2xl text-muted-foreground max-w-3xl mx-auto mb-12 animate-slide-up text-balance leading-relaxed">
            Your gateway to quality education in Engineering, Medical, Board Exams, and Government Exam preparation.
            Join our thriving ecosystem of learners.
          </p>

          {/* Floating Search Bar */}
          <div className="max-w-2xl mx-auto mb-12 animate-slide-up">
            <div className="relative glass rounded-2xl p-2 glow-blue hover-glow border border-white/10 backdrop-blur-xl shadow-2xl shadow-neon-blue/10">
              <div className="flex items-center gap-2">
                <div className="flex-1 flex items-center gap-3 px-4">
                  <Search className="w-5 h-5 text-neon-blue" />
                  <Input
                    type="text"
                    placeholder="Search courses, topics, or resources..."
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    className="flex-1 bg-transparent border-none text-foreground placeholder:text-muted-foreground focus-visible:ring-0 focus-visible:ring-offset-0 text-base"
                  />
                </div>
                <Button className="bg-gradient-to-r from-neon-blue to-neon-purple hover:opacity-90 px-8 py-6 rounded-xl font-semibold shadow-lg shadow-neon-purple/25 transition-all hover:shadow-neon-purple/40 hover:scale-[1.02]">
                  Search
                </Button>
              </div>
            </div>
            <div className="flex flex-wrap items-center justify-center gap-2 mt-5 text-sm text-muted-foreground">
              <span className="text-foreground/60">Popular:</span>
              {["Python", "JEE", "NEET", "UPSC", "DSA"].map((tag) => (
                <button
                  key={tag}
                  className="px-4 py-1.5 rounded-full bg-white/5 border border-white/10 hover:bg-white/10 hover:text-neon-blue hover:border-neon-blue/30 transition-all duration-300"
                >
                  {tag}
                </button>
              ))}
            </div>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16 animate-slide-up">
            <Link href="/courses">
              <Button
                size="lg"
                className="bg-gradient-to-r from-neon-blue to-neon-purple hover:opacity-90 px-10 py-7 text-lg glow-blue hover-glow rounded-xl font-semibold shadow-xl shadow-neon-blue/20 transition-all hover:scale-[1.02] hover:shadow-neon-blue/30"
              >
                Explore Courses
                <ArrowRight className="w-5 h-5 ml-2" />
              </Button>
            </Link>
            <Button
              size="lg"
              variant="outline"
              className="border-white/20 hover:bg-white/5 hover:border-white/30 px-10 py-7 text-lg bg-transparent rounded-xl font-semibold transition-all hover:scale-[1.02]"
            >
              <Play className="w-5 h-5 mr-2 text-neon-purple" />
              Watch Demo
            </Button>
          </div>

          {/* Stats Row */}
          <div className="flex flex-wrap items-center justify-center gap-8 md:gap-12 animate-slide-up">
            {[
              { icon: Users, label: "Active Learners", value: "50K+" },
              { icon: BookOpen, label: "Courses", value: "500+" },
              { icon: Award, label: "Success Rate", value: "94%" },
            ].map((stat, index) => (
              <div key={index} className="flex items-center gap-3 group">
                <div className="p-3 rounded-xl glass border border-white/10 group-hover:border-neon-blue/30 transition-colors">
                  <stat.icon className="w-5 h-5 text-neon-blue" />
                </div>
                <div className="text-left">
                  <div className="text-2xl font-bold text-foreground">{stat.value}</div>
                  <div className="text-sm text-muted-foreground">{stat.label}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Bottom Gradient */}
      <div className="absolute bottom-0 left-0 right-0 h-40 bg-gradient-to-t from-background via-background/80 to-transparent" />
    </section>
  )
}
