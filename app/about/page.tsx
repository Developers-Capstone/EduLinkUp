import { Target, Users, Heart, Lightbulb, Globe, Zap, Linkedin, Sparkles, TrendingUp, ArrowRight } from "lucide-react"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"

const values = [
  {
    icon: Heart,
    title: "Passion for Learning",
    description: "We believe everyone deserves access to quality education, regardless of their background.",
    color: "from-pink-500 to-rose-500",
    shadowColor: "shadow-pink-500/20",
  },
  {
    icon: Users,
    title: "Community First",
    description: "Learning is better together. We foster a supportive community of learners and educators.",
    color: "from-neon-blue to-cyan-400",
    shadowColor: "shadow-neon-blue/20",
  },
  {
    icon: Lightbulb,
    title: "Innovation",
    description: "We constantly evolve our platform to deliver the best learning experience possible.",
    color: "from-amber-400 to-orange-500",
    shadowColor: "shadow-amber-500/20",
  },
  {
    icon: Globe,
    title: "Accessibility",
    description: "Education should be accessible to all. We strive to remove barriers to learning.",
    color: "from-neon-purple to-violet-500",
    shadowColor: "shadow-neon-purple/20",
  },
]

const stats = [
  { value: "50,000+", label: "Active Learners", icon: Users },
  { value: "500+", label: "Expert Instructors", icon: Sparkles },
  { value: "1,000+", label: "Courses", icon: Target },
  { value: "95%", label: "Success Rate", icon: TrendingUp },
]

const team = [
  {
    name: "Sagnik Chakraborty",
    role: "Founder & CEO",
    avatar: "/professional-man-founder-ceo.jpg",
    bio: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam nec metus nec ante feugiat placerat.",
    linkedin: "https://www.linkedin.com/in/sagnik-chakraborty-2004/",
  },
  {
    name: "Kavlin Kaur",
    role: "Head of Content",
    avatar: "/professional-woman-content-head.jpg",
    bio: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam nec metus nec ante feugiat placerat.",
    linkedin: "https://www.linkedin.com/in/kavlinkaur/",
  },
  {
    name: "Rupam",
    role: "Community Lead",
    avatar: "/professional-man-community-lead.jpg",
    bio: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam nec metus nec ante feugiat placerat.",
    linkedin: "https://www.linkedin.com/in/rupam-bera-8ab533213/",
  },
  {
    name: "Akshay Kumar",
    role: "Developer",
    avatar: "/professional-man-developer.png",
    bio: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam nec metus nec ante feugiat placerat.",
    linkedin: "https://www.linkedin.com/in/akshay-kumar-309421269/",
  },
]

const milestones = [
  { year: "2024", title: "EduLinkUp Founded", description: "Introducing personalized learning paths" },
  { year: "2025", title: "EduLinkUp Website", description: "Website of EduLinkUp" },
]

export default function AboutPage() {
  return (
    <div className="min-h-screen pt-24 pb-16 relative">
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 -left-32 w-96 h-96 bg-neon-blue/8 rounded-full blur-[150px] animate-float-1" />
        <div className="absolute top-1/2 -right-32 w-[500px] h-[500px] bg-neon-purple/8 rounded-full blur-[150px] animate-float-2" />
        <div className="absolute bottom-1/4 left-1/3 w-80 h-80 bg-neon-blue/5 rounded-full blur-[120px] animate-float-3" />
      </div>

      {/* Hero Section */}
      <section className="relative py-20 overflow-hidden">
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-neon-blue/10 rounded-full blur-[120px]" />
          <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-neon-purple/10 rounded-full blur-[120px]" />
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-3xl mx-auto text-center">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass border border-white/10 mb-6">
              <Sparkles className="w-4 h-4 text-neon-purple" />
              <span className="text-sm text-muted-foreground">Transforming Education Since 2024</span>
            </div>
            <h1 className="text-4xl md:text-6xl font-bold mb-6 tracking-tight">
              About <span className="gradient-text">EduLinkUp</span>
            </h1>
            <p className="text-xl text-muted-foreground mb-8 leading-relaxed">
              We're on a mission to make quality education accessible to everyone. Our platform connects learners with
              expert educators and a supportive community.
            </p>
            <div className="flex items-center justify-center gap-2">
              <div className="h-px w-16 bg-gradient-to-r from-transparent to-neon-blue/50" />
              <div className="w-2 h-2 rounded-full bg-neon-purple" />
              <div className="h-px w-16 bg-gradient-to-l from-transparent to-neon-purple/50" />
            </div>
          </div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-16 relative z-10">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass border border-white/10 mb-6">
                <Target className="w-4 h-4 text-neon-blue" />
                <span className="text-sm text-muted-foreground">Our Mission</span>
              </div>
              <h2 className="text-3xl md:text-4xl font-bold mb-6 tracking-tight">
                Empowering the Next Generation of <span className="gradient-text">Learners</span>
              </h2>
              <p className="text-muted-foreground mb-6 leading-relaxed">
                At EduLinkUp, we believe that education is the key to unlocking human potential. We've built a platform
                that combines high-quality content, expert instruction, and community support to help students achieve
                their dreams.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                Whether you're preparing for competitive exams, learning to code, or exploring new subjects, EduLinkUp
                provides the resources and support you need to succeed.
              </p>
            </div>
            <div className="relative group">
              <div className="absolute -inset-1 bg-gradient-to-r from-neon-blue/20 to-neon-purple/20 rounded-3xl blur-xl opacity-50 group-hover:opacity-75 transition-opacity duration-500" />
              <div className="relative glass rounded-2xl p-8 border border-white/10">
                <div className="grid grid-cols-2 gap-6">
                  {stats.map((stat) => {
                    const Icon = stat.icon
                    return (
                      <div key={stat.label} className="text-center group/stat">
                        <div className="relative inline-block mb-3">
                          <div className="absolute inset-0 bg-gradient-to-br from-neon-blue/30 to-neon-purple/30 rounded-xl blur-lg opacity-0 group-hover/stat:opacity-100 transition-opacity" />
                          <div className="relative w-10 h-10 rounded-xl bg-gradient-to-br from-neon-blue/20 to-neon-purple/20 flex items-center justify-center">
                            <Icon className="w-5 h-5 text-neon-blue" />
                          </div>
                        </div>
                        <div className="text-3xl md:text-4xl font-bold gradient-text mb-2">{stat.value}</div>
                        <div className="text-sm text-muted-foreground">{stat.label}</div>
                      </div>
                    )
                  })}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-16 relative z-10">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass border border-white/10 mb-4">
              <Heart className="w-4 h-4 text-pink-500" />
              <span className="text-sm text-muted-foreground">What We Stand For</span>
            </div>
            <h2 className="text-3xl md:text-4xl font-bold mb-4 tracking-tight">
              Our <span className="gradient-text">Values</span>
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              These core principles guide everything we do at EduLinkUp
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((value, index) => {
              const Icon = value.icon
              return (
                <div
                  key={value.title}
                  className={`group relative glass rounded-2xl p-6 border border-white/5 hover:border-white/10 transition-all duration-300 hover:-translate-y-1 hover:${value.shadowColor} hover:shadow-xl`}
                >
                  <div className={`absolute top-0 left-6 right-6 h-px bg-gradient-to-r ${value.color} opacity-50`} />

                  <div className="relative mb-4">
                    <div
                      className={`absolute inset-0 bg-gradient-to-br ${value.color} rounded-xl blur-lg opacity-0 group-hover:opacity-40 transition-opacity duration-300`}
                    />
                    <div
                      className={`relative w-12 h-12 rounded-xl bg-gradient-to-br ${value.color} bg-opacity-20 flex items-center justify-center`}
                    >
                      <Icon className="w-6 h-6 text-white" />
                    </div>
                  </div>
                  <h3 className="text-lg font-semibold text-foreground mb-2">{value.title}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">{value.description}</p>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* Timeline Section */}
      <section className="py-16 relative z-10">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass border border-white/10 mb-4">
              <TrendingUp className="w-4 h-4 text-neon-blue" />
              <span className="text-sm text-muted-foreground">Our Story</span>
            </div>
            <h2 className="text-3xl md:text-4xl font-bold mb-4 tracking-tight">
              Our <span className="gradient-text">Journey</span>
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              From a small idea to a thriving learning community
            </p>
          </div>

          <div className="max-w-3xl mx-auto">
            {milestones.map((milestone, index) => (
              <div key={milestone.year} className="flex gap-6 mb-8 last:mb-0 group">
                <div className="flex flex-col items-center">
                  <div className="relative">
                    <div className="absolute inset-0 bg-gradient-to-br from-neon-blue to-neon-purple rounded-full blur-md opacity-50 group-hover:opacity-75 transition-opacity" />
                    <div className="relative w-14 h-14 rounded-full bg-gradient-to-br from-neon-blue to-neon-purple flex items-center justify-center text-white font-bold text-sm shadow-lg">
                      {milestone.year}
                    </div>
                  </div>
                  {index < milestones.length - 1 && (
                    <div className="w-0.5 h-full bg-gradient-to-b from-neon-purple to-transparent mt-2" />
                  )}
                </div>
                <div className="glass rounded-xl p-5 flex-1 border border-white/5 hover:border-white/10 transition-all duration-300 group-hover:-translate-x-1">
                  <h3 className="font-semibold text-foreground mb-1">{milestone.title}</h3>
                  <p className="text-sm text-muted-foreground">{milestone.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Leadership Section */}
      <section className="py-16 relative z-10">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass border border-white/10 mb-4">
              <Users className="w-4 h-4 text-neon-purple" />
              <span className="text-sm text-muted-foreground">Meet The Team</span>
            </div>
            <h2 className="text-3xl md:text-4xl font-bold mb-4 tracking-tight">
              Our <span className="gradient-text">Leadership</span>
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              The driving force behind EduLinkUp's mission to revolutionize education.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {team.map((member, index) => (
              <div
                key={member.name}
                className="group relative glass rounded-2xl p-6 text-center border border-white/5 hover:border-white/10 transition-all duration-300 hover:-translate-y-2 hover:shadow-xl hover:shadow-neon-purple/10"
              >
                <div className="absolute top-0 left-6 right-6 h-px bg-gradient-to-r from-neon-blue to-neon-purple opacity-50" />

                <div className="relative inline-block mb-4">
                  <div className="absolute -inset-1 bg-gradient-to-br from-neon-blue to-neon-purple rounded-full opacity-0 group-hover:opacity-50 blur-md transition-opacity duration-300" />
                  <Avatar className="relative w-20 h-20 ring-2 ring-white/10 group-hover:ring-neon-purple/50 transition-all duration-300">
                    <AvatarImage src={member.avatar || "/placeholder.svg"} />
                    <AvatarFallback className="bg-gradient-to-br from-neon-blue to-neon-purple text-white">
                      {member.name[0]}
                    </AvatarFallback>
                  </Avatar>
                </div>
                <h3 className="font-semibold text-foreground mb-1">{member.name}</h3>
                <p className="text-sm gradient-text font-medium mb-3">{member.role}</p>
                <p className="text-sm text-muted-foreground leading-relaxed">{member.bio}</p>
                {member.linkedin && (
                  <a
                    href={member.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center w-10 h-10 mt-4 rounded-full glass border border-white/10 hover:border-[#0077B5]/50 hover:bg-[#0077B5]/10 transition-all duration-300 group/link"
                  >
                    <Linkedin className="w-4 h-4 text-[#0077B5] group-hover/link:scale-110 transition-transform" />
                  </a>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 relative z-10">
        <div className="container mx-auto px-4">
          <div className="relative group">
            <div className="absolute -inset-1 bg-gradient-to-r from-neon-blue/30 to-neon-purple/30 rounded-3xl blur-xl opacity-50 group-hover:opacity-75 transition-opacity duration-500" />
            <div className="relative glass rounded-2xl p-12 text-center overflow-hidden border border-white/10">
              <div className="absolute inset-0 bg-gradient-to-r from-neon-blue/5 to-neon-purple/5" />
              <div className="absolute top-0 left-1/4 w-64 h-64 bg-neon-blue/10 rounded-full blur-[100px] animate-float-1" />
              <div className="absolute bottom-0 right-1/4 w-64 h-64 bg-neon-purple/10 rounded-full blur-[100px] animate-float-2" />

              <div className="relative z-10">
                <div className="relative inline-block mb-4">
                  <div className="absolute inset-0 bg-gradient-to-br from-neon-blue to-neon-purple rounded-full blur-lg opacity-50" />
                  <div className="relative w-16 h-16 rounded-full bg-gradient-to-br from-neon-blue/20 to-neon-purple/20 flex items-center justify-center mx-auto">
                    <Zap className="w-8 h-8 text-neon-blue" />
                  </div>
                </div>
                <h2 className="text-3xl md:text-4xl font-bold mb-4 tracking-tight">
                  Ready to Start Your <span className="gradient-text">Learning Journey</span>?
                </h2>
                <p className="text-muted-foreground max-w-2xl mx-auto mb-8 leading-relaxed">
                  Join thousands of learners who are already transforming their lives through education.
                </p>
                <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                  <a
                    href="/courses"
                    className="group/btn inline-flex items-center gap-2 px-8 py-3 rounded-xl bg-gradient-to-r from-neon-blue to-neon-purple text-white font-medium hover:opacity-90 transition-all duration-300 hover:shadow-lg hover:shadow-neon-purple/25"
                  >
                    Explore Courses
                    <ArrowRight className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
                  </a>
                  <a
                    href="/community"
                    className="px-8 py-3 rounded-xl glass border border-white/10 text-foreground font-medium hover:bg-white/5 hover:border-white/20 transition-all duration-300"
                  >
                    Join Community
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
