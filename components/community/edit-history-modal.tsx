"use client"

import { X, Clock, Edit3 } from "lucide-react"
import { Button } from "@/components/ui/button"

interface EditHistoryEntry {
  timestamp: string
  editedAt: Date
  reason?: string
}

interface EditHistoryModalProps {
  open: boolean
  onOpenChange: (open: boolean) => void
  editHistory: EditHistoryEntry[]
  authorName: string
}

export function EditHistoryModal({ open, onOpenChange, editHistory, authorName }: EditHistoryModalProps) {
  if (!open) return null

  const formatDate = (date: Date) => {
    return new Intl.DateTimeFormat("en-US", {
      month: "short",
      day: "numeric",
      year: "numeric",
      hour: "2-digit",
      minute: "2-digit",
    }).format(date)
  }

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
      {/* Backdrop */}
      <div className="absolute inset-0 bg-black/60 backdrop-blur-sm" onClick={() => onOpenChange(false)} />

      {/* Modal */}
      <div className="relative w-full max-w-lg animate-in fade-in zoom-in-95">
        {/* Glow effect */}
        <div className="absolute inset-0 bg-gradient-to-r from-neon-purple/20 to-neon-blue/20 rounded-3xl blur-2xl" />

        <div className="relative glass rounded-2xl border border-white/10 overflow-hidden">
          {/* Top accent */}
          <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-neon-purple to-transparent" />

          {/* Header */}
          <div className="flex items-center justify-between p-6 border-b border-white/10">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-gradient-to-r from-neon-purple to-neon-blue flex items-center justify-center">
                <Clock className="w-5 h-5 text-white" />
              </div>
              <div>
                <h2 className="text-xl font-semibold text-foreground">Edit History</h2>
                <p className="text-sm text-muted-foreground">Changes made by {authorName}</p>
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
          <div className="p-6 max-h-[400px] overflow-y-auto">
            {editHistory.length === 0 ? (
              <div className="text-center py-8">
                <div className="w-16 h-16 mx-auto mb-4 rounded-2xl bg-neon-purple/20 flex items-center justify-center">
                  <Edit3 className="w-8 h-8 text-neon-purple" />
                </div>
                <p className="text-muted-foreground">No edit history available</p>
              </div>
            ) : (
              <div className="space-y-3">
                {editHistory.map((entry, index) => (
                  <div
                    key={index}
                    className="relative p-4 rounded-xl bg-white/5 border border-white/10 hover:bg-white/10 transition-colors"
                  >
                    {/* Timeline connector */}
                    {index < editHistory.length - 1 && (
                      <div className="absolute left-6 top-12 bottom-0 w-px bg-gradient-to-b from-neon-purple/50 to-transparent" />
                    )}

                    <div className="flex items-start gap-3">
                      <div className="relative">
                        <div className="absolute inset-0 bg-neon-purple/30 rounded-full blur-md" />
                        <div className="relative w-8 h-8 rounded-full bg-gradient-to-r from-neon-purple to-neon-blue flex items-center justify-center text-xs font-bold text-white">
                          {editHistory.length - index}
                        </div>
                      </div>

                      <div className="flex-1">
                        <div className="flex items-center justify-between mb-1">
                          <span className="text-sm font-medium text-foreground">
                            {index === editHistory.length - 1 ? "Original Post" : `Edit ${editHistory.length - index}`}
                          </span>
                          <span className="text-xs text-muted-foreground">{entry.timestamp}</span>
                        </div>
                        <p className="text-xs text-muted-foreground">{formatDate(entry.editedAt)}</p>
                        {entry.reason && (
                          <p className="text-sm text-muted-foreground mt-2 italic">"{entry.reason}"</p>
                        )}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>

          {/* Footer */}
          <div className="p-6 border-t border-white/10 bg-white/5">
            <div className="flex items-center justify-between">
              <p className="text-xs text-muted-foreground">
                Total edits: <span className="text-neon-purple font-medium">{editHistory.length - 1}</span>
              </p>
              <Button onClick={() => onOpenChange(false)} className="bg-gradient-to-r from-neon-purple to-neon-blue">
                Close
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
