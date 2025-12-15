"use client"

import { useState } from "react"
import { use } from "react"
import Link from "next/link"
import { ChevronLeft, ThumbsUp, MessageCircle, Share2, Flag, Eye, Send, Lock } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { RichTextEditor } from "@/components/community/rich-text-editor"
import { AnswerThread } from "@/components/community/answer-thread"
import { useAuth } from "@/components/auth-provider"
import { RelatedDiscussions } from "@/components/community/related-discussions"

// Mock discussion data
const discussionData: Record<string, any> = {
  "1": {
    id: "1",
    title: "Best approach for solving JEE Advanced Calculus problems?",
    content: `I'm struggling with integration problems in JEE Advanced. Can someone share effective strategies and resources for mastering calculus?

Here are my specific challenges:
1. Integration by parts - when to use and how to choose u and dv
2. Trigonometric substitutions - they confuse me a lot
3. Definite integrals with complex limits

Any recommended books or video lectures would be really helpful. I've been using RD Sharma but feel like I need more practice problems.

Thanks in advance!`,
    author: {
      name: "Rahul Mehta",
      avatar: "/student-avatar-male-indian.jpg",
      reputation: 1250,
      joined: "January 2024",
    },
    category: "Engineering",
    tags: ["JEE", "Calculus", "Mathematics"],
    replies: 24,
    views: 456,
    likes: 38,
    createdAt: "2 hours ago",
    answers: [
      {
        id: "a1",
        author: {
          name: "Prof. Raj Kumar",
          avatar: "/male-student-avatar.png",
          reputation: 5420,
          userId: "prof-raj-kumar@example.com",
        },
        content: `Great question! Here's my structured approach for JEE Advanced calculus:

**For Integration by Parts:**
Use LIATE rule - Logarithmic, Inverse trig, Algebraic, Trigonometric, Exponential
The function that comes first becomes 'u'.

**For Trigonometric Substitutions:**
- √(a² - x²) → use x = a sin θ
- √(a² + x²) → use x = a tan θ  
- √(x² - a²) → use x = a sec θ

**Recommended Resources:**
1. "Problems in Calculus of One Variable" by I.A. Maron
2. Mohit Tyagi's YouTube channel for concept clarity
3. Previous year JEE Advanced papers (last 10 years)

Practice at least 20-30 problems daily. Start with easier ones and gradually increase difficulty.`,
        likes: 45,
        createdAt: "1 hour ago",
        lastEditedAt: "30 minutes ago",
        isAccepted: true,
        parentId: null,
        editHistory: [
          {
            timestamp: "1 hour ago",
            editedAt: new Date(Date.now() - 60 * 60 * 1000),
          },
          {
            timestamp: "30 minutes ago",
            editedAt: new Date(Date.now() - 30 * 60 * 1000),
            reason: "Added more resources and clarified LIATE rule",
          },
        ],
        replies: [
          {
            id: "a1-r1",
            author: {
              name: "Rahul Mehta",
              avatar: "/student-avatar-male-indian.jpg",
              reputation: 1250,
              userId: "rahul.mehta@example.com",
            },
            content: "Thank you so much! The LIATE rule explanation is really helpful. Could you recommend any specific chapters from I.A. Maron that I should focus on first?",
            likes: 8,
            createdAt: "50 minutes ago",
            parentId: "a1",
            replies: [
              {
                id: "a1-r1-r1",
                author: {
                  name: "Prof. Raj Kumar",
                  avatar: "/male-student-avatar.png",
                  reputation: 5420,
                },
                content: "Start with Chapter 5 (Indefinite Integrals) and Chapter 6 (Definite Integrals). Focus on problems 1-50 in each chapter first, then move to advanced ones.",
                likes: 12,
                createdAt: "40 minutes ago",
                parentId: "a1-r1",
                replies: [],
              },
            ],
          },
          {
            id: "a1-r2",
            author: {
              name: "Neha Gupta",
              avatar: "/female-professor-avatar.png",
              reputation: 450,
            },
            content: "This is gold! Saving this for my revision. The trigonometric substitution patterns are exactly what I needed.",
            likes: 5,
            createdAt: "35 minutes ago",
            parentId: "a1",
            replies: [],
          },
        ],
      },
      {
        id: "a2",
        author: {
          name: "Priya Sharma",
          avatar: "/female-student-avatar.png",
          reputation: 890,
        },
        content: `I had similar struggles last year! What really helped me was:

1. Making formula sheets for each type of integration
2. Solving previous year questions topic-wise
3. Joining a study group where we discussed problems

Also, don't skip the basics. Sometimes going back to NCERT helps build intuition.`,
        likes: 12,
        createdAt: "45 minutes ago",
        isAccepted: false,
        parentId: null,
        replies: [],
      },
    ],
  },
  "3": {
    id: "3",
    title: "UPSC Prelims 2024: Important current affairs topics",
    content: `Let's compile a comprehensive list of important current affairs topics for UPSC Prelims 2024. I'll start with key areas:

1. G20 Summit 2023 - India's Presidency, key outcomes, and declarations
2. Chandrayaan-3 Mission - Successful lunar landing, scientific objectives
3. New Parliament Building - Inauguration, architectural significance
4. India-Middle East-Europe Economic Corridor (IMEC)
5. Uniform Civil Code debates and implementations
6. Climate Change - COP28 outcomes, India's commitments
7. Digital India initiatives - UPI international expansion
8. Women's Reservation Bill - 128th Constitutional Amendment
9. India's semiconductor mission and manufacturing push
10. Border disputes and diplomatic relations with neighbors

Please add more topics and share your preparation strategies! Let's help each other cover all important areas.`,
    author: {
      name: "Amit Kumar",
      avatar: "/male-student-avatar.png",
      reputation: 2340,
      joined: "October 2023",
    },
    category: "Government",
    tags: ["UPSC", "Current Affairs", "Prelims"],
    replies: 45,
    views: 1234,
    likes: 89,
    createdAt: "1 day ago",
    answers: [
      {
        id: "a1",
        author: {
          name: "Rajesh Pandey",
          avatar: "/male-student-avatar.png",
          reputation: 1100,
        },
        content: `Excellent compilation! I'd like to add a few more critical topics:

**International Relations:**
- India-Canada diplomatic tensions
- India's role in Global South
- Quad Summit developments
- India-US defense cooperation

**Economy:**
- RBI's monetary policy decisions
- GST collections and reforms
- PLI schemes progress
- Inflation management strategies

**Environment:**
- Wetlands conservation initiatives
- National Green Hydrogen Mission
- Wildlife protection acts amendments
- Air quality management

**Social Issues:**
- National Education Policy implementation
- Healthcare infrastructure expansion
- Skill India mission updates

For preparation, I recommend:
1. The Hindu newspaper daily
2. PIB releases (especially press briefings)
3. Rajya Sabha TV discussions
4. Vision IAS monthly current affairs compilation`,
        likes: 67,
        createdAt: "20 hours ago",
        isAccepted: true,
        parentId: null,
        replies: [
          {
            id: "a1-r1",
            author: {
              name: "Amit Kumar",
              avatar: "/male-student-avatar.png",
              reputation: 2340,
            },
            content: "Thanks for adding these! The international relations section is particularly helpful. Do you think the India-Canada issue will be asked in prelims?",
            likes: 15,
            createdAt: "19 hours ago",
            parentId: "a1",
            replies: [
              {
                id: "a1-r1-r1",
                author: {
                  name: "Rajesh Pandey",
                  avatar: "/male-student-avatar.png",
                  reputation: 1100,
                },
                content: "Definitely possible! UPSC loves asking about recent diplomatic developments. Focus on the reasons, India's response, and implications for bilateral relations.",
                likes: 22,
                createdAt: "18 hours ago",
                parentId: "a1-r1",
                replies: [],
              },
            ],
          },
        ],
      },
      {
        id: "a2",
        author: {
          name: "Neha Gupta",
          avatar: "/female-professor-avatar.png",
          reputation: 450,
        },
        content: `Great thread! Adding some more important areas:

**Science & Technology:**
- ISRO's Gaganyaan mission updates
- 5G rollout in India
- AI and data protection laws
- Quantum computing initiatives

**Governance:**
- One Nation One Election debate
- Electoral reforms
- Anti-defection law discussions
- Judicial reforms and pendency

**Culture & Heritage:**
- UNESCO World Heritage sites additions
- G20 cultural events
- Archaeological discoveries

My strategy: Make topic-wise notes and revise weekly. Also, solve previous year questions to understand the pattern!`,
        likes: 34,
        createdAt: "18 hours ago",
        isAccepted: false,
        parentId: null,
        replies: [
          {
            id: "a2-r1",
            author: {
              name: "Priya Sharma",
              avatar: "/female-student-avatar.png",
              reputation: 890,
            },
            content: "Your strategy is spot on! I'd also add making mind maps for interconnected topics. It helps in understanding the bigger picture.",
            likes: 8,
            createdAt: "17 hours ago",
            parentId: "a2",
            replies: [],
          },
        ],
      },
      {
        id: "a3",
        author: {
          name: "Priya Sharma",
          avatar: "/female-student-avatar.png",
          reputation: 890,
        },
        content: `Don't forget about these important topics:

**Agriculture:**
- MSP debates and farmer welfare
- Crop insurance schemes
- Agricultural exports growth
- Organic farming initiatives

**Defense:**
- Atmanirbhar Bharat in defense
- Indigenous weapons development
- Military exercises with other nations
- Border infrastructure development

Pro tip: Create a monthly timeline of events. It helps in remembering chronology which is often asked in prelims!`,
        likes: 28,
        createdAt: "15 hours ago",
        isAccepted: false,
        parentId: null,
        replies: [],
      },
    ],
  },
}

export default function DiscussionDetailPage({
  params,
}: {
  params: Promise<{ id: string }>
}) {
  const { user } = useAuth()
  const resolvedParams = use(params)
  const discussion = discussionData[resolvedParams.id] || discussionData["1"]
  const [newAnswer, setNewAnswer] = useState("")
  const [liked, setLiked] = useState(false)
  const isAuthenticated = !!user

  return (
    <div className="min-h-screen pt-24 pb-16">
      <div className="container mx-auto px-4">
        {/* Back Button */}
        <Link
          href="/community"
          className="inline-flex items-center gap-2 text-muted-foreground hover:text-foreground mb-6 transition-colors"
        >
          <ChevronLeft className="w-4 h-4" />
          Back to Community
        </Link>

        <div className="flex gap-8">
          {/* Main Content */}
          <div className="flex-1 max-w-4xl">

        {/* Main Discussion */}
        <div className="glass rounded-xl p-6 mb-6">
          {/* Tags */}
          <div className="flex flex-wrap items-center gap-2 mb-4">
            <Badge className="bg-blue-500/10 text-blue-400 border-none">{discussion.category}</Badge>
            {discussion.tags.map((tag: string) => (
              <span key={tag} className="text-xs px-2 py-1 rounded-full bg-white/5 text-muted-foreground">
                #{tag}
              </span>
            ))}
          </div>

          {/* Title */}
          <h1 className="text-2xl md:text-3xl font-bold text-foreground mb-6">{discussion.title}</h1>

          {/* Author Info */}
          <div className="flex items-center gap-4 mb-6">
            <Avatar className="w-12 h-12">
              <AvatarImage src={discussion.author.avatar || "/placeholder.svg"} />
              <AvatarFallback>{discussion.author.name[0]}</AvatarFallback>
            </Avatar>
            <div>
              <div className="flex items-center gap-2">
                <span className="font-medium text-foreground">{discussion.author.name}</span>
                <span className="text-xs px-1.5 py-0.5 rounded bg-neon-purple/10 text-neon-purple">
                  {discussion.author.reputation} pts
                </span>
              </div>
              <div className="text-sm text-muted-foreground">
                Posted {discussion.createdAt} • Joined {discussion.author.joined}
              </div>
            </div>
          </div>

          {/* Content */}
          <div className="prose prose-invert max-w-none mb-6">
            <div className="text-muted-foreground whitespace-pre-wrap">{discussion.content}</div>
          </div>

          {/* Actions */}
          <div className="flex flex-wrap items-center justify-between gap-4 pt-4 border-t border-glass-border">
            <div className="flex items-center gap-4">
              <Button
                variant="ghost"
                size="sm"
                onClick={() => setLiked(!liked)}
                className={`gap-2 ${liked ? "text-neon-blue" : "text-muted-foreground"}`}
              >
                <ThumbsUp className={`w-4 h-4 ${liked ? "fill-current" : ""}`} />
                <span>{discussion.likes + (liked ? 1 : 0)}</span>
              </Button>
              <span className="flex items-center gap-2 text-sm text-muted-foreground">
                <Eye className="w-4 h-4" />
                {discussion.views} views
              </span>
              <span className="flex items-center gap-2 text-sm text-muted-foreground">
                <MessageCircle className="w-4 h-4" />
                {discussion.answers.length} answers
              </span>
            </div>
            <div className="flex items-center gap-2">
              <Button variant="ghost" size="sm" className="text-muted-foreground">
                <Share2 className="w-4 h-4" />
              </Button>
              <Button variant="ghost" size="sm" className="text-muted-foreground">
                <Flag className="w-4 h-4" />
              </Button>
            </div>
          </div>
        </div>

        {/* Answers Section */}
        <div className="mb-6">
          <h2 className="text-xl font-semibold text-foreground mb-4">{discussion.answers.length} Answers</h2>

          <div className="space-y-6">
            {discussion.answers.map((answer: any) => (
              <AnswerThread key={answer.id} answer={answer} />
            ))}
          </div>
        </div>

        {/* Add Answer */}
        <div className="glass rounded-xl p-6">
          <h3 className="text-lg font-semibold text-foreground mb-4">Your Answer</h3>

          {isAuthenticated ? (
            <>
              <RichTextEditor
                content={newAnswer}
                onChange={setNewAnswer}
                placeholder="Share your knowledge and help others..."
              />
              <div className="flex justify-end mt-4">
                <Button className="bg-gradient-to-r from-neon-blue to-neon-purple hover:opacity-90">
                  <Send className="w-4 h-4 mr-2" />
                  Post Answer
                </Button>
              </div>
            </>
          ) : (
            <div className="text-center py-12">
              <div className="relative inline-block mb-4">
                <div className="absolute inset-0 bg-gradient-to-br from-neon-blue to-neon-purple rounded-full blur-lg opacity-50" />
                <div className="relative w-16 h-16 rounded-full bg-gradient-to-br from-neon-blue/20 to-neon-purple/20 flex items-center justify-center mx-auto">
                  <Lock className="w-8 h-8 text-neon-blue" />
                </div>
              </div>
              <h4 className="text-xl font-semibold text-foreground mb-2">Sign in to Post an Answer</h4>
              <p className="text-muted-foreground mb-6 max-w-md mx-auto">
                Join our community to share your knowledge and help fellow learners. It's free and takes just a minute!
              </p>
              <div className="flex items-center justify-center gap-3">
                <Link href="/login">
                  <Button className="bg-gradient-to-r from-neon-blue to-neon-purple hover:opacity-90">
                    Sign In
                  </Button>
                </Link>
                <Link href="/signup">
                  <Button variant="outline" className="border-white/10 hover:bg-white/5">
                    Create Account
                  </Button>
                </Link>
              </div>
            </div>
          )}
        </div>
          </div>

          {/* Sidebar */}
          <aside className="w-80">
            <RelatedDiscussions
              currentDiscussionId={discussion.id}
              currentCategory={discussion.category}
              currentTags={discussion.tags}
            />
          </aside>
        </div>
      </div>
    </div>
  )
}
