"use client"

import { useState } from "react"
import { ThumbsUp, MessageCircle, ChevronDown, ChevronUp, Lock, Edit3, Clock } from "lucide-react"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { RichTextEditor } from "./rich-text-editor"
import { useAuth } from "@/components/auth-provider"
import { EditHistoryModal } from "./edit-history-modal"
import Link from "next/link"

interface EditHistoryEntry {
  timestamp: string
  editedAt: Date
  reason?: string
}

interface Reply {
  id: string
  author: {
    name: string
    avatar: string
    reputation: number
    userId?: string
  }
  content: string
  likes: number
  createdAt: string
  parentId: string | null
  replies: Reply[]
  editHistory?: EditHistoryEntry[]
  lastEditedAt?: string
}

interface AnswerThreadProps {
  answer: Reply & { isAccepted?: boolean }
  depth?: number
  maxDepth?: number
}

export function AnswerThread({ answer, depth = 0, maxDepth = 2 }: AnswerThreadProps) {
  const { user } = useAuth()
  const [showReplyForm, setShowReplyForm] = useState(false)
  const [showEditForm, setShowEditForm] = useState(false)
  const [showEditHistory, setShowEditHistory] = useState(false)
  const [replyContent, setReplyContent] = useState("")
  const [editContent, setEditContent] = useState(answer.content)
  const [liked, setLiked] = useState(false)
  const [showReplies, setShowReplies] = useState(true)

  const hasReplies = answer.replies && answer.replies.length > 0
  const canReply = depth < maxDepth
  const isAuthenticated = !!user
  const isAuthor = user?.email === answer.author.userId // In production, compare user IDs
  const hasBeenEdited = answer.editHistory && answer.editHistory.length > 1

  return (
    <div className={`${depth > 0 ? "ml-8 mt-4" : ""}`}>
      <div
        className={`relative glass rounded-xl p-6 ${
          answer.isAccepted ? "border border-green-500/30" : "border border-white/5"
        }`}
      >
        {/* Connecting line for nested replies */}
        {depth > 0 && (
          <div className="absolute -left-8 top-0 bottom-0 w-8">
            <div className="absolute left-4 top-6 bottom-0 w-px bg-gradient-to-b from-neon-purple/50 to-transparent" />
            <div className="absolute left-4 top-6 w-4 h-px bg-neon-purple/50" />
          </div>
        )}

        {answer.isAccepted && (
          <Badge className="bg-green-500/10 text-green-400 border-none mb-4">✓ Accepted Answer</Badge>
        )}

        {/* Author Info */}
        <div className="flex items-center gap-3 mb-4">
          <Avatar className="w-10 h-10 ring-2 ring-white/10">
            <AvatarImage src={answer.author.avatar || "/placeholder.svg"} />
            <AvatarFallback>{answer.author.name[0]}</AvatarFallback>
          </Avatar>
          <div className="flex-1">
            <div className="flex items-center gap-2">
              <span className="font-medium text-foreground">{answer.author.name}</span>
              <span className="text-xs px-1.5 py-0.5 rounded bg-neon-purple/10 text-neon-purple">
                {answer.author.reputation} pts
              </span>
            </div>
            <div className="flex items-center flex-wrap gap-2 text-xs text-muted-foreground">
              <span>{answer.createdAt}</span>
              {hasBeenEdited && (
                <>
                  <span>•</span>
                  <button
                    onClick={(e) => {
                      e.stopPropagation()
                      setShowEditHistory(true)
                    }}
                    className="flex items-center gap-1 hover:text-neon-purple transition-colors"
                    type="button"
                  >
                    <Clock className="w-3 h-3" />
                    <span>edited {answer.lastEditedAt}</span>
                  </button>
                </>
              )}
            </div>
          </div>
        </div>

        {/* Content */}
        {showEditForm ? (
          <div className="mb-4">
            <RichTextEditor content={editContent} onChange={setEditContent} placeholder="Edit your answer..." />
            <div className="flex justify-end gap-2 mt-3">
              <Button
                variant="ghost"
                size="sm"
                onClick={() => {
                  setShowEditForm(false)
                  setEditContent(answer.content)
                }}
                className="text-muted-foreground"
              >
                Cancel
              </Button>
              <Button
                size="sm"
                className="bg-gradient-to-r from-neon-blue to-neon-purple hover:opacity-90"
                onClick={() => {
                  // Handle edit submission
                  console.log("Edit:", editContent)
                  setShowEditForm(false)
                }}
              >
                Save Changes
              </Button>
            </div>
          </div>
        ) : (
          <div className="text-muted-foreground whitespace-pre-wrap mb-4 leading-relaxed">{answer.content}</div>
        )}

        {/* Actions */}
        {!showEditForm && (
          <div className="flex items-center gap-4 pt-3 border-t border-white/5">
            <Button
              variant="ghost"
              size="sm"
              onClick={() => setLiked(!liked)}
              className={`gap-2 ${liked ? "text-neon-blue" : "text-muted-foreground"}`}
            >
              <ThumbsUp className={`w-4 h-4 ${liked ? "fill-current" : ""}`} />
              <span>{answer.likes + (liked ? 1 : 0)}</span>
            </Button>

            {canReply && (
              <>
                {isAuthenticated ? (
                  <Button
                    variant="ghost"
                    size="sm"
                    onClick={() => setShowReplyForm(!showReplyForm)}
                    className="gap-2 text-muted-foreground hover:text-neon-purple"
                  >
                    <MessageCircle className="w-4 h-4" />
                    Reply
                  </Button>
                ) : (
                  <Link href="/login">
                    <Button variant="ghost" size="sm" className="gap-2 text-muted-foreground hover:text-neon-purple">
                      <Lock className="w-4 h-4" />
                      Sign in to Reply
                    </Button>
                  </Link>
                )}
              </>
            )}

            {isAuthor && (
              <Button
                variant="ghost"
                size="sm"
                onClick={() => setShowEditForm(true)}
                className="gap-2 text-muted-foreground hover:text-neon-blue"
              >
                <Edit3 className="w-4 h-4" />
                Edit
              </Button>
            )}

            {hasReplies && (
              <Button
                variant="ghost"
                size="sm"
                onClick={() => setShowReplies(!showReplies)}
                className="gap-2 text-muted-foreground hover:text-neon-blue ml-auto"
              >
                {showReplies ? <ChevronUp className="w-4 h-4" /> : <ChevronDown className="w-4 h-4" />}
                {answer.replies.length} {answer.replies.length === 1 ? "reply" : "replies"}
              </Button>
            )}
          </div>
        )}

        {/* Reply Form */}
        {showReplyForm && (
          <div className="mt-4 pt-4 border-t border-white/5">
            <div className="space-y-3">
              <RichTextEditor
                content={replyContent}
                onChange={setReplyContent}
                placeholder="Write your reply..."
              />
              <div className="flex justify-end gap-2">
                <Button
                  variant="ghost"
                  size="sm"
                  onClick={() => {
                    setShowReplyForm(false)
                    setReplyContent("")
                  }}
                  className="text-muted-foreground"
                >
                  Cancel
                </Button>
                <Button
                  size="sm"
                  className="bg-gradient-to-r from-neon-blue to-neon-purple hover:opacity-90"
                  onClick={() => {
                    // Handle reply submission
                    console.log("Reply:", replyContent)
                    setShowReplyForm(false)
                    setReplyContent("")
                  }}
                >
                  Post Reply
                </Button>
              </div>
            </div>
          </div>
        )}
      </div>

      {/* Nested Replies */}
      {hasReplies && showReplies && (
        <div className="space-y-0">
          {answer.replies.map((reply) => (
            <AnswerThread key={reply.id} answer={reply} depth={depth + 1} maxDepth={maxDepth} />
          ))}
        </div>
      )}

      {/* Edit History Modal */}
      {answer.editHistory && (
        <EditHistoryModal
          open={showEditHistory}
          onOpenChange={setShowEditHistory}
          editHistory={answer.editHistory}
          authorName={answer.author.name}
        />
      )}
    </div>
  )
}
