"use client"

import { useState, useMemo } from "react"
import { Search, Grid3X3, List, SlidersHorizontal, X } from "lucide-react"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { CourseCard } from "@/components/courses/course-card"
import { CategoryFilter } from "@/components/courses/category-filter"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"

const allCourses = [
  {
    id: "1",
    title: "Complete Python Programming",
    description: "Master Python from basics to advanced. Build real-world projects and land your dream job.",
    thumbnail: "/python-programming-code-dark.jpg",
    category: "engineering",
    rating: 4.9,
    students: 12500,
    duration: "45 hours",
    lessons: 120,
    instructor: "Dr. Anjali Gupta",
    level: "Beginner",
  },
  {
    id: "3",
    title: "UPSC Complete Foundation",
    description: "Start your UPSC journey with our comprehensive foundation course covering all subjects.",
    thumbnail: "/india-government-building-dark.jpg",
    category: "government",
    rating: 4.9,
    students: 15600,
    duration: "100 hours",
    lessons: 200,
    instructor: "IAS Priya Sharma",
    level: "Beginner",
  },
  {
    id: "5",
    title: "Data Structures & Algorithms",
    description: "Master DSA concepts with hands-on coding problems and interview preparation.",
    thumbnail: "/data-structures-algorithms-code.png",
    category: "engineering",
    rating: 4.9,
    students: 9800,
    duration: "50 hours",
    lessons: 100,
    instructor: "Tech Lead Arun",
    level: "Intermediate",
  },
  {
    id: "8",
    title: "SSC CGL Complete Course",
    description: "Comprehensive SSC CGL preparation covering Quantitative, Reasoning, English, and GK.",
    thumbnail: "/government-exam-study-dark.jpg",
    category: "government",
    rating: 4.7,
    students: 8300,
    duration: "70 hours",
    lessons: 160,
    instructor: "Rajesh Pandey",
    level: "Beginner",
  },
  {
    id: "12",
    title: "Banking Exams Preparation",
    description: "Complete preparation for IBPS PO, SBI PO, and RBI Grade B exams.",
    thumbnail: "/banking-finance-exam-dark.jpg",
    category: "government",
    rating: 4.6,
    students: 5900,
    duration: "45 hours",
    lessons: 100,
    instructor: "CA Mohan Das",
    level: "Intermediate",
  },
]

const categories = [
  { id: "all", label: "All Courses", count: allCourses.length },
  {
    id: "engineering",
    label: "Engineering",
    count: allCourses.filter((c) => c.category === "engineering").length,
  },
  {
    id: "medical",
    label: "Medical",
    count: 0,
    comingSoon: true,
  },
  {
    id: "boards",
    label: "Board Exams",
    count: 0,
    comingSoon: true,
  },
  {
    id: "government",
    label: "Govt Exams",
    count: 0,
    comingSoon: true,
  },
]

export default function CoursesPage() {
  const [selectedCategory, setSelectedCategory] = useState("all")
  const [searchQuery, setSearchQuery] = useState("")
  const [sortBy, setSortBy] = useState("popular")
  const [viewMode, setViewMode] = useState<"grid" | "list">("grid")

  const filteredCourses = useMemo(() => {
    let courses = [...allCourses]

    // Filter by category
    if (selectedCategory !== "all") {
      courses = courses.filter((c) => c.category === selectedCategory)
    }

    // Filter by search query
    if (searchQuery) {
      const query = searchQuery.toLowerCase()
      courses = courses.filter(
        (c) =>
          c.title.toLowerCase().includes(query) ||
          c.description.toLowerCase().includes(query) ||
          c.instructor.toLowerCase().includes(query),
      )
    }

    // Sort
    switch (sortBy) {
      case "popular":
        courses.sort((a, b) => b.students - a.students)
        break
      case "rating":
        courses.sort((a, b) => b.rating - a.rating)
        break
      case "newest":
        courses.sort((a, b) => Number.parseInt(b.id) - Number.parseInt(a.id))
        break
      case "duration":
        courses.sort((a, b) => Number.parseInt(a.duration) - Number.parseInt(b.duration))
        break
    }

    return courses
  }, [selectedCategory, searchQuery, sortBy])

  const FilterSidebar = () => (
    <CategoryFilter
      categories={categories}
      selectedCategory={selectedCategory}
      onSelectCategory={setSelectedCategory}
    />
  )

  return (
    <div className="min-h-screen pt-24 pb-16">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-3xl md:text-4xl font-bold mb-2">
            <span className="gradient-text">Explore Courses</span>
          </h1>
          <p className="text-muted-foreground">Discover courses tailored to your learning goals</p>
        </div>

        <div className="flex flex-col lg:flex-row gap-8">
          {/* Sidebar - Desktop */}
          <aside className="hidden lg:block w-64 flex-shrink-0">
            <div className="sticky top-24">
              <FilterSidebar />
            </div>
          </aside>

          {/* Main Content */}
          <div className="flex-1">
            {/* Search and Controls - Hide for coming soon categories */}
            {!["medical", "boards", "government"].includes(selectedCategory) && (
              <div className="glass rounded-xl p-4 mb-6">
                <div className="flex flex-col md:flex-row gap-4">
                  {/* Search */}
                  <div className="flex-1 relative">
                    <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
                    <Input
                      type="text"
                      placeholder="Search courses..."
                      value={searchQuery}
                      onChange={(e) => setSearchQuery(e.target.value)}
                      className="pl-10 bg-white/5 border-glass-border"
                    />
                  </div>

                  {/* Mobile Filter Button */}
                  <Sheet>
                    <SheetTrigger asChild className="lg:hidden">
                      <Button variant="outline" className="border-glass-border bg-transparent">
                        <SlidersHorizontal className="w-4 h-4 mr-2" />
                        Filters
                      </Button>
                    </SheetTrigger>
                    <SheetContent side="left" className="w-[280px] bg-background/95 backdrop-blur-xl border-glass-border">
                      <div className="mt-6">
                        <FilterSidebar />
                      </div>
                    </SheetContent>
                  </Sheet>

                  {/* Sort */}
                  <Select value={sortBy} onValueChange={setSortBy}>
                    <SelectTrigger className="w-[180px] bg-white/5 border-glass-border">
                      <SelectValue placeholder="Sort by" />
                    </SelectTrigger>
                    <SelectContent className="bg-background border-glass-border">
                      <SelectItem value="popular">Most Popular</SelectItem>
                      <SelectItem value="rating">Highest Rated</SelectItem>
                      <SelectItem value="newest">Newest</SelectItem>
                      <SelectItem value="duration">Duration</SelectItem>
                    </SelectContent>
                  </Select>

                  {/* View Toggle */}
                  <div className="flex items-center gap-1 p-1 bg-white/5 rounded-lg">
                    <Button
                      variant="ghost"
                      size="icon"
                      onClick={() => setViewMode("grid")}
                      className={viewMode === "grid" ? "bg-neon-blue/20 text-neon-blue" : "text-muted-foreground"}
                    >
                      <Grid3X3 className="w-4 h-4" />
                    </Button>
                    <Button
                      variant="ghost"
                      size="icon"
                      onClick={() => setViewMode("list")}
                      className={viewMode === "list" ? "bg-neon-blue/20 text-neon-blue" : "text-muted-foreground"}
                    >
                      <List className="w-4 h-4" />
                    </Button>
                  </div>
                </div>
              </div>
            )}

            {/* Results Count */}
            {!["medical", "boards", "government"].includes(selectedCategory) && (
              <div className="mb-4 text-sm text-muted-foreground">
                Showing <span className="text-foreground font-medium">{filteredCourses.length}</span> courses
              </div>
            )}

            {/* Coming Soon State for Medical, Boards, and Govt Exams */}
            {["medical", "boards", "government"].includes(selectedCategory) ? (
              <div className="max-w-2xl mx-auto text-center py-0 -mt-12">
                {/* Animated Icon */}
                <div className="relative inline-block mb-6">
                  <div className="absolute inset-0 bg-gradient-to-r from-neon-blue/20 to-neon-purple/20 rounded-full blur-3xl animate-pulse" />
                  <div className="relative w-32 h-32 mx-auto rounded-full bg-gradient-to-br from-neon-blue/20 to-neon-purple/20 border border-neon-blue/30 flex items-center justify-center">
                    <svg className="w-16 h-16 text-neon-blue" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                    </svg>
                  </div>
                </div>

                {/* Heading */}
                <h1 className="text-4xl md:text-5xl font-bold mb-4">
                  <span className="gradient-text">Coming Soon!</span>
                </h1>
                <p className="text-xl text-muted-foreground mb-8">
                  We're working hard to bring you amazing{" "}
                  {selectedCategory === "medical"
                    ? "Medical"
                    : selectedCategory === "boards"
                      ? "Board Exams"
                      : "Government Exams"}{" "}
                  content.
                </p>

                {/* Features Grid */}
                <div className="grid md:grid-cols-3 gap-4 mb-8">
                  <div className="glass rounded-xl p-6">
                    <svg className="w-8 h-8 text-neon-purple mx-auto mb-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
                    </svg>
                    <h3 className="font-semibold text-foreground mb-2">Expert Content</h3>
                    <p className="text-sm text-muted-foreground">
                      High-quality videos from industry experts
                    </p>
                  </div>
                  <div className="glass rounded-xl p-6">
                    <svg className="w-8 h-8 text-neon-blue mx-auto mb-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                    </svg>
                    <h3 className="font-semibold text-foreground mb-2">Launching Soon</h3>
                    <p className="text-sm text-muted-foreground">
                      Course will be available in the coming weeks
                    </p>
                  </div>
                  <div className="glass rounded-xl p-6">
                    <svg className="w-8 h-8 text-neon-cyan mx-auto mb-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9" />
                    </svg>
                    <h3 className="font-semibold text-foreground mb-2">Get Notified</h3>
                    <p className="text-sm text-muted-foreground">
                      Be the first to know when it's ready
                    </p>
                  </div>
                </div>

                {/* CTA Buttons */}
                <div className="flex flex-col sm:flex-row items-center justify-center gap-3 mb-4">
                  <Button
                    className="bg-gradient-to-r from-neon-blue to-neon-purple hover:opacity-90 transition-opacity px-8 py-6 text-base"
                    onClick={() => {
                      // Open notify modal - we'll add this state
                      const dialog = document.getElementById('notify-dialog') as HTMLDialogElement
                      dialog?.showModal()
                    }}
                  >
                    <svg className="w-5 h-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9" />
                    </svg>
                    Notify Me When Ready
                    <svg className="w-5 h-5 ml-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </Button>
                  <Button
                    variant="outline"
                    className="glass border-glass-border px-8 py-6 text-base"
                    onClick={() => setSelectedCategory("all")}
                  >
                    Explore Available Courses
                  </Button>
                </div>

                {/* Interest Counter */}
                <div className="flex items-center justify-center gap-2 text-sm text-muted-foreground">
                  <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                  </svg>
                  <span className="font-medium text-foreground">284</span> people interested in{" "}
                  {selectedCategory === "medical"
                    ? "Medical"
                    : selectedCategory === "boards"
                      ? "Board Exams"
                      : "Government Exams"}{" "}
                  courses
                </div>

                {/* Notify Dialog */}
                <dialog id="notify-dialog" className="glass rounded-2xl p-8 max-w-md backdrop:bg-black/50 m-auto backdrop:backdrop-blur-sm relative">
                  <button
                    onClick={() => {
                      const dialog = document.getElementById('notify-dialog') as HTMLDialogElement
                      dialog?.close()
                    }}
                    className="absolute top-4 right-4 text-muted-foreground hover:text-foreground transition-colors p-1 hover:bg-white/10 rounded-full cursor-pointer"
                  >
                    <X className="w-5 h-5" />
                  </button>
                  <div className="text-center">
                    <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-neon-blue/20 flex items-center justify-center">
                      <svg className="w-8 h-8 text-neon-blue" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9" />
                      </svg>
                    </div>
                    <h3 className="text-2xl font-bold text-foreground mb-2">Get Notified</h3>
                    <p className="text-muted-foreground mb-6">
                      We'll send you an email as soon as{" "}
                      <span className="text-foreground font-semibold">
                        {selectedCategory === "medical"
                          ? "Medical"
                          : selectedCategory === "boards"
                            ? "Board Exams"
                            : "Government Exams"}
                      </span>{" "}
                      courses are available.
                    </p>
                    <div className="mb-6">
                      <label className="block text-left text-sm font-medium text-foreground mb-2">Email Address</label>
                      <Input
                        type="email"
                        placeholder="your.email@example.com"
                        className="glass border-glass-border"
                      />
                    </div>
                    <div className="flex gap-3">
                      <Button
                        variant="outline"
                        className="flex-1 border-white/10 hover:bg-white/10 text-white hover:text-white cursor-pointer"
                        onClick={() => {
                          const dialog = document.getElementById('notify-dialog') as HTMLDialogElement
                          dialog?.close()
                        }}
                      >
                        Cancel
                      </Button>
                      <Button
                        className="flex-1 bg-gradient-to-r from-neon-blue to-neon-purple hover:opacity-90 cursor-pointer"
                        onClick={() => {
                          // Handle notification signup
                          const dialog = document.getElementById('notify-dialog') as HTMLDialogElement
                          dialog?.close()
                        }}
                      >
                        Notify Me
                      </Button>
                    </div>
                  </div>
                </dialog>
              </div>
            ) : filteredCourses.length > 0 ? (
              <div
                className={
                  viewMode === "grid" ? "grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6" : "flex flex-col gap-4"
                }
              >
                {filteredCourses.map((course) => (
                  <CourseCard key={course.id} course={course} viewMode={viewMode} />
                ))}
              </div>
            ) : (
              <div className="glass rounded-xl p-12 text-center">
                <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-muted flex items-center justify-center">
                  <Search className="w-8 h-8 text-muted-foreground" />
                </div>
                <h3 className="text-lg font-semibold text-foreground mb-2">No courses found</h3>
                <p className="text-muted-foreground">Try adjusting your filters or search query</p>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  )
}
