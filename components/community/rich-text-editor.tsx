"use client"

import { useEditor, EditorContent } from "@tiptap/react"
import StarterKit from "@tiptap/starter-kit"
import Link from "@tiptap/extension-link"
import Image from "@tiptap/extension-image"
import Placeholder from "@tiptap/extension-placeholder"
import CodeBlockLowlight from "@tiptap/extension-code-block-lowlight"
import { createLowlight, common } from "lowlight"

const lowlight = createLowlight(common)
import {
  Bold,
  Italic,
  List,
  ListOrdered,
  Code,
  Link2,
  Image as ImageIcon,
  Heading2,
  Quote,
  Undo,
  Redo,
} from "lucide-react"
import { Button } from "@/components/ui/button"
import { useState, useCallback } from "react"

interface RichTextEditorProps {
  content: string
  onChange: (content: string) => void
  placeholder?: string
}

export function RichTextEditor({ content, onChange, placeholder = "Share your knowledge..." }: RichTextEditorProps) {
  const [characterCount, setCharacterCount] = useState(0)

  const editor = useEditor({
    immediatelyRender: false,
    extensions: [
      StarterKit.configure({
        codeBlock: false,
      }),
      Link.configure({
        openOnClick: false,
        HTMLAttributes: {
          class: "text-neon-blue hover:underline",
        },
      }),
      Image.configure({
        HTMLAttributes: {
          class: "rounded-lg max-w-full h-auto",
        },
      }),
      CodeBlockLowlight.configure({
        lowlight,
        HTMLAttributes: {
          class: "bg-black/30 rounded-lg p-4 font-mono text-sm",
        },
      }),
      Placeholder.configure({
        placeholder,
      }),
    ],
    content,
    editorProps: {
      attributes: {
        class:
          "prose prose-invert max-w-none min-h-[200px] px-4 py-3 focus:outline-none bg-white/5 rounded-lg border border-white/10 focus:border-neon-blue/50 transition-colors",
      },
    },
    onUpdate: ({ editor }) => {
      const html = editor.getHTML()
      const text = editor.getText()
      onChange(html)
      setCharacterCount(text.length)
    },
  })

  const addLink = useCallback(() => {
    if (!editor) return

    const url = window.prompt("Enter URL:")
    if (url) {
      editor.chain().focus().setLink({ href: url }).run()
    }
  }, [editor])

  const addImage = useCallback(() => {
    if (!editor) return

    const url = window.prompt("Enter image URL:")
    if (url) {
      editor.chain().focus().setImage({ src: url }).run()
    }
  }, [editor])

  if (!editor) {
    return null
  }

  return (
    <div className="space-y-3">
      {/* Toolbar */}
      <div className="flex flex-wrap items-center gap-1 p-2 glass rounded-lg border border-white/10">
        <div className="flex items-center gap-1 pr-2 border-r border-white/10">
          <Button
            type="button"
            variant="ghost"
            size="sm"
            onClick={() => editor.chain().focus().toggleBold().run()}
            className={`h-8 w-8 p-0 ${editor.isActive("bold") ? "bg-neon-blue/20 text-neon-blue" : "text-muted-foreground"}`}
            title="Bold (Ctrl+B)"
          >
            <Bold className="w-4 h-4" />
          </Button>
          <Button
            type="button"
            variant="ghost"
            size="sm"
            onClick={() => editor.chain().focus().toggleItalic().run()}
            className={`h-8 w-8 p-0 ${editor.isActive("italic") ? "bg-neon-blue/20 text-neon-blue" : "text-muted-foreground"}`}
            title="Italic (Ctrl+I)"
          >
            <Italic className="w-4 h-4" />
          </Button>
          <Button
            type="button"
            variant="ghost"
            size="sm"
            onClick={() => editor.chain().focus().toggleCode().run()}
            className={`h-8 w-8 p-0 ${editor.isActive("code") ? "bg-neon-blue/20 text-neon-blue" : "text-muted-foreground"}`}
            title="Inline Code"
          >
            <Code className="w-4 h-4" />
          </Button>
        </div>

        <div className="flex items-center gap-1 pr-2 border-r border-white/10">
          <Button
            type="button"
            variant="ghost"
            size="sm"
            onClick={() => editor.chain().focus().toggleHeading({ level: 2 }).run()}
            className={`h-8 w-8 p-0 ${editor.isActive("heading", { level: 2 }) ? "bg-neon-blue/20 text-neon-blue" : "text-muted-foreground"}`}
            title="Heading"
          >
            <Heading2 className="w-4 h-4" />
          </Button>
          <Button
            type="button"
            variant="ghost"
            size="sm"
            onClick={() => editor.chain().focus().toggleBulletList().run()}
            className={`h-8 w-8 p-0 ${editor.isActive("bulletList") ? "bg-neon-blue/20 text-neon-blue" : "text-muted-foreground"}`}
            title="Bullet List"
          >
            <List className="w-4 h-4" />
          </Button>
          <Button
            type="button"
            variant="ghost"
            size="sm"
            onClick={() => editor.chain().focus().toggleOrderedList().run()}
            className={`h-8 w-8 p-0 ${editor.isActive("orderedList") ? "bg-neon-blue/20 text-neon-blue" : "text-muted-foreground"}`}
            title="Numbered List"
          >
            <ListOrdered className="w-4 h-4" />
          </Button>
          <Button
            type="button"
            variant="ghost"
            size="sm"
            onClick={() => editor.chain().focus().toggleBlockquote().run()}
            className={`h-8 w-8 p-0 ${editor.isActive("blockquote") ? "bg-neon-blue/20 text-neon-blue" : "text-muted-foreground"}`}
            title="Quote"
          >
            <Quote className="w-4 h-4" />
          </Button>
        </div>

        <div className="flex items-center gap-1 pr-2 border-r border-white/10">
          <Button
            type="button"
            variant="ghost"
            size="sm"
            onClick={addLink}
            className={`h-8 w-8 p-0 ${editor.isActive("link") ? "bg-neon-blue/20 text-neon-blue" : "text-muted-foreground"}`}
            title="Add Link"
          >
            <Link2 className="w-4 h-4" />
          </Button>
          <Button
            type="button"
            variant="ghost"
            size="sm"
            onClick={addImage}
            className="h-8 w-8 p-0 text-muted-foreground"
            title="Add Image"
          >
            <ImageIcon className="w-4 h-4" />
          </Button>
        </div>

        <div className="flex items-center gap-1">
          <Button
            type="button"
            variant="ghost"
            size="sm"
            onClick={() => editor.chain().focus().undo().run()}
            disabled={!editor.can().undo()}
            className="h-8 w-8 p-0 text-muted-foreground disabled:opacity-30"
            title="Undo"
          >
            <Undo className="w-4 h-4" />
          </Button>
          <Button
            type="button"
            variant="ghost"
            size="sm"
            onClick={() => editor.chain().focus().redo().run()}
            disabled={!editor.can().redo()}
            className="h-8 w-8 p-0 text-muted-foreground disabled:opacity-30"
            title="Redo"
          >
            <Redo className="w-4 h-4" />
          </Button>
        </div>

        <div className="ml-auto text-xs text-muted-foreground">
          {characterCount} {characterCount === 1 ? "character" : "characters"}
        </div>
      </div>

      {/* Editor */}
      <EditorContent editor={editor} />

      {/* Helper Text */}
      <div className="text-xs text-muted-foreground">
        <span className="font-medium">Tip:</span> Use Markdown shortcuts like ** for bold, * for italic, # for
        headings
      </div>
    </div>
  )
}
