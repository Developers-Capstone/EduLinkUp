"use client"

import { Play, CheckCircle, Clock, ListVideo } from "lucide-react"
import { ScrollArea } from "@/components/ui/scroll-area"

interface PlaylistItem {
  id: string
  title: string
  duration: string
  completed: boolean
}

interface PlaylistSidebarProps {
  playlist: PlaylistItem[]
  currentVideoId: string
  onSelectVideo: (id: string) => void
  courseName: string
}

export function PlaylistSidebar({ playlist, currentVideoId, onSelectVideo, courseName }: PlaylistSidebarProps) {
  const completedCount = playlist.filter((v) => v.completed).length
  const progress = (completedCount / playlist.length) * 100

  return (
    <div className="glass rounded-xl overflow-hidden">
      {/* Header */}
      <div className="p-4 border-b border-glass-border">
        <div className="flex items-center gap-2 mb-3">
          <ListVideo className="w-5 h-5 text-neon-blue" />
          <h3 className="font-semibold text-foreground">Course Playlist</h3>
        </div>
        <p className="text-sm text-muted-foreground mb-3 line-clamp-1">{courseName}</p>
        {/* Progress Bar */}
        <div className="space-y-2">
          <div className="flex items-center justify-between text-xs text-muted-foreground">
            <span>
              {completedCount}/{playlist.length} completed
            </span>
            <span>{Math.round(progress)}%</span>
          </div>
          <div className="h-1.5 bg-white/10 rounded-full overflow-hidden">
            <div
              className="h-full bg-gradient-to-r from-neon-blue to-neon-purple rounded-full transition-all duration-500"
              style={{ width: `${progress}%` }}
            />
          </div>
        </div>
      </div>

      {/* Playlist */}
      <ScrollArea className="h-[500px]">
        <div className="p-2">
          {playlist.map((video, index) => {
            const isActive = video.id === currentVideoId
            return (
              <button
                key={video.id}
                onClick={() => onSelectVideo(video.id)}
                className={`w-full flex items-start gap-3 p-3 rounded-lg transition-all text-left ${
                  isActive ? "bg-neon-blue/20 border border-neon-blue/30" : "hover:bg-white/5"
                }`}
              >
                {/* Number/Status */}
                <div
                  className={`w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0 ${
                    video.completed
                      ? "bg-green-500/20 text-green-400"
                      : isActive
                        ? "bg-neon-blue/20 text-neon-blue"
                        : "bg-white/10 text-muted-foreground"
                  }`}
                >
                  {video.completed ? (
                    <CheckCircle className="w-4 h-4" />
                  ) : isActive ? (
                    <Play className="w-4 h-4 fill-current" />
                  ) : (
                    <span className="text-xs font-medium">{index + 1}</span>
                  )}
                </div>

                {/* Content */}
                <div className="flex-1 min-w-0">
                  <p className={`text-sm font-medium line-clamp-2 ${isActive ? "text-neon-blue" : "text-foreground"}`}>
                    {video.title}
                  </p>
                  <div className="flex items-center gap-1 mt-1 text-xs text-muted-foreground">
                    <Clock className="w-3 h-3" />
                    <span>{video.duration}</span>
                  </div>
                </div>
              </button>
            )
          })}
        </div>
      </ScrollArea>
    </div>
  )
}
