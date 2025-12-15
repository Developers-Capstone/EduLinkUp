import { HeroSection } from "@/components/home/hero-section"
import { CategorySection } from "@/components/home/category-section"
import { FeaturedCourses } from "@/components/home/featured-courses"
import { CommunitySection } from "@/components/home/community-section"
import { StatsSection } from "@/components/home/stats-section"

export default function HomePage() {
  return (
    <div className="min-h-screen">
      <HeroSection />
      <CategorySection />
      <FeaturedCourses />
      <StatsSection />
      <CommunitySection />
    </div>
  )
}
