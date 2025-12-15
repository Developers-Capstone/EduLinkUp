"use client"

import Link from "next/link"
import { ChevronLeft, Rocket, Bell, Calendar, Sparkles } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"

export default function ComingSoonPage() {
    return (
        <div className="min-h-screen pt-20 pb-16">
            <div className="container mx-auto px-4">
                {/* Back Button */}
                <Link
                    href="/courses"
                    className="inline-flex items-center gap-2 text-muted-foreground hover:text-foreground mb-6 transition-colors"
                >
                    <ChevronLeft className="w-4 h-4" />
                    Back to Courses
                </Link>

                {/* Empty State */}
                <div className="max-w-2xl mx-auto text-center py-20">
                    {/* Animated Icon */}
                    <div className="relative inline-block mb-8">
                        <div className="absolute inset-0 bg-gradient-to-r from-neon-blue/20 to-neon-purple/20 rounded-full blur-3xl animate-pulse" />
                        <div className="relative w-32 h-32 mx-auto rounded-full bg-gradient-to-br from-neon-blue/20 to-neon-purple/20 border border-neon-blue/30 flex items-center justify-center">
                            <Rocket className="w-16 h-16 text-neon-blue animate-bounce" />
                        </div>
                    </div>

                    {/* Heading */}
                    <h1 className="text-4xl md:text-5xl font-bold mb-4">
                        <span className="gradient-text">Coming Soon!</span>
                    </h1>
                    <p className="text-xl text-muted-foreground mb-8">
                        We're working hard to bring you amazing content for this course.
                    </p>

                    {/* Features Grid */}
                    <div className="grid md:grid-cols-3 gap-4 mb-12">
                        <div className="glass rounded-xl p-6">
                            <Sparkles className="w-8 h-8 text-neon-purple mx-auto mb-3" />
                            <h3 className="font-semibold text-foreground mb-2">Expert Content</h3>
                            <p className="text-sm text-muted-foreground">
                                High-quality videos from industry experts
                            </p>
                        </div>
                        <div className="glass rounded-xl p-6">
                            <Calendar className="w-8 h-8 text-neon-blue mx-auto mb-3" />
                            <h3 className="font-semibold text-foreground mb-2">Launching Soon</h3>
                            <p className="text-sm text-muted-foreground">
                                Course will be available in the coming weeks
                            </p>
                        </div>
                        <div className="glass rounded-xl p-6">
                            <Bell className="w-8 h-8 text-neon-cyan mx-auto mb-3" />
                            <h3 className="font-semibold text-foreground mb-2">Get Notified</h3>
                            <p className="text-sm text-muted-foreground">
                                Be the first to know when it's ready
                            </p>
                        </div>
                    </div>

                    {/* Notify Me Form */}
                    <div className="glass rounded-xl p-8 max-w-md mx-auto">
                        <h3 className="text-lg font-semibold text-foreground mb-4">
                            Notify me when this course launches
                        </h3>
                        <div className="flex gap-2">
                            <Input
                                type="email"
                                placeholder="Enter your email"
                                className="glass border-glass-border"
                            />
                            <Button className="bg-gradient-to-r from-neon-blue to-neon-purple hover:opacity-90 transition-opacity">
                                Notify Me
                            </Button>
                        </div>
                        <p className="text-xs text-muted-foreground mt-3">
                            We'll send you an email as soon as this course is available
                        </p>
                    </div>

                    {/* CTA */}
                    <div className="mt-12">
                        <Link href="/courses">
                            <Button variant="outline" className="glass border-glass-border">
                                Explore Other Courses
                            </Button>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    )
}
