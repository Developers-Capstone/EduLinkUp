import Link from "next/link"
import { MessageCircle, Users, Lightbulb, ArrowRight, Sparkles, TrendingUp } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"

const communityFeatures = [
  {
    icon: MessageCircle,
    title: "Discussion Forums",
    description: "Ask questions, share knowledge, and learn from peers.",
    color: "neon-blue",
  },
  {
    icon: Users,
    title: "Study Groups",
    description: "Join or create study groups for collaborative learning.",
    color: "neon-purple",
  },
  {
    icon: Lightbulb,
    title: "Expert Guidance",
    description: "Get your doubts cleared by experienced mentors.",
    color: "neon-blue",
  },
]

const recentDiscussions = [
  {
    id: "1",
    title: "Best approach for solving JEE Advanced Calculus problems?",
    author: "Rahul M.",
    avatar: "/male-student-avatar.png",
    replies: 24,
    category: "Engineering",
    hot: true,
  },
  {
    id: "2",
    title: "NEET Biology: Cell Division conceptual doubts",
    author: "Priya S.",
    avatar: "/female-student-avatar.png",
    replies: 18,
    category: "Medical",
    hot: false,
  },
  {
    id: "3",
    title: "UPSC Prelims 2024: Important current affairs topics",
    author: "Amit K.",
    avatar: "/student-avatar-male-indian.jpg",
    replies: 45,
    category: "Government",
    hot: true,
  },
]

export function CommunitySection() {
  return (
    <section className="py-20 relative overflow-hidden">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-20 left-10 w-72 h-72 bg-neon-purple/10 rounded-full blur-3xl animate-float" />
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-neon-blue/10 rounded-full blur-3xl animate-float-delayed" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gradient-to-br from-neon-blue/5 to-neon-purple/5 rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="flex justify-center mb-4">
          <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-neon-blue/10 to-neon-purple/10 border border-neon-blue/20 text-sm text-neon-blue">
            <Users className="w-4 h-4" />
            50,000+ Active Members
          </span>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4 tracking-tight">
              Join Our <span className="gradient-text">Student Network</span>
            </h2>
            <p className="text-muted-foreground mb-8 text-lg leading-relaxed">
              Connect with fellow learners, share resources, and grow together. Collaboration is at the heart of EduLinkUp.
            </p>

            <div className="space-y-4 mb-8">
              {communityFeatures.map((feature, index) => {
                const Icon = feature.icon
                return (
                  <div
                    key={feature.title}
                    className="group flex items-start gap-4 p-4 rounded-2xl bg-white/5 border border-white/5 hover:border-neon-blue/30 hover:bg-white/10 transition-all duration-300 hover:translate-x-2"
                  >
                    <div className="relative flex-shrink-0">
                      {/* Icon glow */}
                      <div
                        className={`absolute inset-0 bg-${feature.color}/30 rounded-xl blur-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300`}
                      />
                      <div
                        className={`relative w-14 h-14 rounded-xl bg-gradient-to-br from-${feature.color}/20 to-${feature.color === "neon-blue" ? "neon-purple" : "neon-blue"}/20 border border-${feature.color}/20 flex items-center justify-center group-hover:scale-110 transition-transform duration-300`}
                      >
                        <Icon className={`w-7 h-7 text-${feature.color}`} />
                      </div>
                    </div>
                    <div className="pt-1">
                      <h3 className="font-semibold text-foreground mb-1 group-hover:text-neon-blue transition-colors">
                        {feature.title}
                      </h3>
                      <p className="text-sm text-muted-foreground leading-relaxed">{feature.description}</p>
                    </div>
                    <ArrowRight className="w-5 h-5 text-muted-foreground ml-auto self-center opacity-0 group-hover:opacity-100 group-hover:translate-x-1 transition-all duration-300" />
                  </div>
                )
              })}
            </div>

            <Link href="/community">
              <Button className="bg-gradient-to-r from-neon-blue to-neon-purple hover:opacity-90 glow-blue hover-glow text-base px-6 py-6 group">
                Join Discussions
                <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
              </Button>
            </Link>
          </div>

          {/* Right Content - Recent Discussions */}
          <div className="relative">
            <div className="absolute -inset-1 bg-gradient-to-br from-neon-blue/20 via-transparent to-neon-purple/20 rounded-3xl blur-sm" />
            <div className="relative glass rounded-2xl p-6 border border-white/10">
              {/* Accent line */}
              <div className="absolute top-0 left-6 right-6 h-px bg-gradient-to-r from-transparent via-neon-blue/50 to-transparent" />

              <div className="flex items-center justify-between mb-6">
                <div className="flex items-center gap-2">
                  <Sparkles className="w-5 h-5 text-neon-purple" />
                  <h3 className="text-lg font-semibold text-foreground">Recent Discussions</h3>
                </div>
                <Link
                  href="/community"
                  className="text-sm text-neon-blue hover:underline flex items-center gap-1 group"
                >
                  View All
                  <ArrowRight className="w-3 h-3 group-hover:translate-x-1 transition-transform" />
                </Link>
              </div>

              <div className="space-y-3">
                {recentDiscussions.map((discussion) => (
                  <Link
                    href={`/community/${discussion.id}`}
                    key={discussion.id}
                    className="block p-4 rounded-xl bg-white/5 border border-white/5 hover:bg-white/10 hover:border-neon-blue/20 transition-all duration-300 group"
                  >
                    <div className="flex items-start gap-3">
                      <div className="relative">
                        <div className="absolute -inset-0.5 bg-gradient-to-br from-neon-blue to-neon-purple rounded-full opacity-0 group-hover:opacity-100 transition-opacity" />
                        <Avatar className="relative w-10 h-10 border-2 border-transparent">
                          <AvatarImage src={discussion.avatar || "/placeholder.svg"} />
                          <AvatarFallback className="bg-gradient-to-br from-neon-blue/20 to-neon-purple/20 text-foreground">
                            {discussion.author[0]}
                          </AvatarFallback>
                        </Avatar>
                      </div>
                      <div className="flex-1 min-w-0">
                        <div className="flex items-center gap-2 mb-1">
                          <h4 className="font-medium text-foreground line-clamp-1 group-hover:text-neon-blue transition-colors">
                            {discussion.title}
                          </h4>
                          {discussion.hot && (
                            <span className="flex-shrink-0 flex items-center gap-1 px-2 py-0.5 rounded-full bg-orange-500/10 text-orange-400 text-xs">
                              <TrendingUp className="w-3 h-3" />
                              Hot
                            </span>
                          )}
                        </div>
                        <div className="flex items-center gap-3 text-sm text-muted-foreground">
                          <span>{discussion.author}</span>
                          <span className="w-1 h-1 rounded-full bg-muted-foreground" />
                          <span className="flex items-center gap-1">
                            <MessageCircle className="w-3 h-3" />
                            {discussion.replies}
                          </span>
                          <span className="px-2 py-0.5 rounded-full bg-neon-purple/10 text-neon-purple text-xs border border-neon-purple/20">
                            {discussion.category}
                          </span>
                        </div>
                      </div>
                    </div>
                  </Link>
                ))}
              </div>

              <div className="mt-6 pt-4 border-t border-white/10 flex items-center justify-between text-sm text-muted-foreground">
                <span className="flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
                  1,234 online now
                </span>
                <span>2,500+ discussions this week</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
