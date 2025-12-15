"use client"

import { useState, useEffect } from "react"
import { X, Send, Sparkles, Lock } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { RichTextEditor } from "@/components/community/rich-text-editor"
import { useAuth } from "@/components/auth-provider"
import Link from "next/link"

interface CreatePostDialogProps {
  open: boolean
  onOpenChange: (open: boolean) => void
}

const categories = ["Engineering", "Medical", "Government", "Boards"]

export function CreatePostDialog({ open, onOpenChange }: CreatePostDialogProps) {
  const { user } = useAuth()
  const [title, setTitle] = useState("")
  const [content, setContent] = useState("")
  const [selectedCategory, setSelectedCategory] = useState("")
  const [tags, setTags] = useState("")

  const isAuthenticated = !!user

  // Redirect to login if not authenticated
  useEffect(() => {
    if (open && !isAuthenticated) {
      // Close dialog and redirect will happen via the UI
    }
  }, [open, isAuthenticated])

  if (!open) return null

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
      {/* Backdrop */}
      <div className="absolute inset-0 bg-black/60 backdrop-blur-sm" onClick={() => onOpenChange(false)} />

      {/* Dialog */}
      <div className="relative w-full max-w-2xl animate-in fade-in zoom-in-95">
        {/* Glow effect */}
        <div className="absolute inset-0 bg-gradient-to-r from-neon-blue/20 to-neon-purple/20 rounded-3xl blur-2xl" />

        <div className="relative glass rounded-2xl border border-white/10 overflow-hidden">
          {/* Top accent */}
          <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-neon-blue to-transparent" />

          {/* Header */}
          <div className="flex items-center justify-between p-6 border-b border-white/10">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-gradient-to-r from-neon-blue to-neon-purple flex items-center justify-center">
                {isAuthenticated ? <Sparkles className="w-5 h-5 text-white" /> : <Lock className="w-5 h-5 text-white" />}
              </div>
              <div>
                <h2 className="text-xl font-semibold text-foreground">
                  {isAuthenticated ? "Start a Discussion" : "Sign In Required"}
                </h2>
                <p className="text-sm text-muted-foreground">
                  {isAuthenticated ? "Share your question with the community" : "Join to start discussions"}
                </p>
              </div>
            </div>
            <button
              onClick={() => onOpenChange(false)}
              className="w-10 h-10 rounded-xl bg-white/5 hover:bg-white/10 flex items-center justify-center transition-colors"
            >
              <X className="w-5 h-5 text-muted-foreground" />
            </button>
          </div>

          {/* Content */}
          {isAuthenticated ? (
            <>
              <div className="p-6 space-y-5">
                {/* Title */}
                <div>
                  <label className="text-sm font-medium text-foreground mb-2 block">Title</label>
                  <Input
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                    placeholder="What's your question?"
                    className="h-12 bg-white/5 border-white/10 rounded-xl focus:border-neon-blue/50 focus:ring-2 focus:ring-neon-blue/20"
                  />
                </div>

                {/* Category */}
                <div>
                  <label className="text-sm font-medium text-foreground mb-2 block">Category</label>
                  <div className="flex flex-wrap gap-2">
                    {categories.map((category) => (
                      <button
                        key={category}
                        onClick={() => setSelectedCategory(category)}
                        className={`px-4 py-2 rounded-xl text-sm font-medium transition-all ${
                          selectedCategory === category
                            ? "bg-gradient-to-r from-neon-blue to-neon-purple text-white"
                            : "bg-white/5 border border-white/10 text-muted-foreground hover:border-neon-blue/50 hover:text-foreground"
                        }`}
                      >
                        {category}
                      </button>
                    ))}
                  </div>
                </div>

                {/* Content */}
                <div>
                  <label className="text-sm font-medium text-foreground mb-2 block">Description</label>
                  <RichTextEditor
                    content={content}
                    onChange={setContent}
                    placeholder="Describe your question in detail..."
                  />
                </div>

                {/* Tags */}
                <div>
                  <label className="text-sm font-medium text-foreground mb-2 block">Tags</label>
                  <Input
                    value={tags}
                    onChange={(e) => setTags(e.target.value)}
                    placeholder="Add tags separated by commas (e.g., JEE, Physics, Mechanics)"
                    className="h-12 bg-white/5 border-white/10 rounded-xl focus:border-neon-blue/50 focus:ring-2 focus:ring-neon-blue/20"
                  />
                </div>
              </div>

              {/* Footer */}
              <div className="flex items-center justify-between p-6 border-t border-white/10 bg-white/5">
                <p className="text-xs text-muted-foreground">Be respectful and follow community guidelines</p>
                <div className="flex items-center gap-3">
                  <Button
                    variant="outline"
                    onClick={() => onOpenChange(false)}
                    className="border-white/10 hover:bg-white/5"
                  >
                    Cancel
                  </Button>
                  <Button className="bg-gradient-to-r from-neon-blue to-neon-purple hover:opacity-90 shadow-lg shadow-neon-blue/25">
                    <Send className="w-4 h-4 mr-2" />
                    Post Discussion
                  </Button>
                </div>
              </div>
            </>
          ) : (
            <div className="p-12 text-center">
              <div className="relative inline-block mb-6">
                <div className="absolute inset-0 bg-gradient-to-br from-neon-blue to-neon-purple rounded-full blur-xl opacity-50" />
                <div className="relative w-20 h-20 rounded-full bg-gradient-to-br from-neon-blue/20 to-neon-purple/20 flex items-center justify-center mx-auto">
                  <Lock className="w-10 h-10 text-neon-blue" />
                </div>
              </div>
              <h3 className="text-2xl font-bold text-foreground mb-3">Join Our Community</h3>
              <p className="text-muted-foreground mb-8 max-w-md mx-auto leading-relaxed">
                Create an account to start discussions, ask questions, and connect with thousands of learners. It's
                completely free!
              </p>
              <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
                <Link href="/login" onClick={() => onOpenChange(false)}>
                  <Button className="bg-gradient-to-r from-neon-blue to-neon-purple hover:opacity-90 w-full sm:w-auto">
                    Sign In
                  </Button>
                </Link>
                <Link href="/signup" onClick={() => onOpenChange(false)}>
                  <Button variant="outline" className="border-white/10 hover:bg-white/5 w-full sm:w-auto">
                    Create Account
                  </Button>
                </Link>
              </div>
              <p className="text-xs text-muted-foreground mt-6">
                Already have an account?{" "}
                <Link href="/login" className="text-neon-blue hover:underline" onClick={() => onOpenChange(false)}>
                  Sign in here
                </Link>
              </p>
            </div>
          )}
        </div>
      </div>
    </div>
  )
}
