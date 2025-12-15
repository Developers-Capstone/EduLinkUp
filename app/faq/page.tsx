"use client"

import { useState } from "react"
import { Search as SearchIcon } from "lucide-react"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from "@/components/ui/accordion"
import { cn } from "@/lib/utils"

const faqCategories = [
    { id: "all", label: "All Questions" },
    { id: "general", label: "General" },
    { id: "courses", label: "Courses & Learning" },
    { id: "account", label: "Account & Billing" },
    { id: "support", label: "Support" },
]

const faqs = [
    {
        category: "general",
        question: "What is EduLinkUp?",
        answer:
            "EduLinkUp is a comprehensive education platform designed to help students prepare for competitive exams like JEE, NEET, UPSC, and learn coding skills. We connect learners with high-quality resources, courses, and a community of peers.",
    },
    {
        category: "courses",
        question: "How do I enroll in a course?",
        answer:
            "To enroll in a course, simply browse our 'Courses' section, select the course you're interested in, and click the 'Enroll Now' button. You'll need to be signed in to your account to complete the enrollment process.",
    },
    {
        category: "courses",
        question: "Are the courses free?",
        answer:
            "We offer a mix of free and premium courses. Many of our introductory courses and community resources are completely free. Premium courses with advanced content, mentorship, and certification are available for purchase.",
    },
    {
        category: "general",
        question: "Can I access the courses on mobile?",
        answer:
            "Yes! EduLinkUp is fully responsive and works seamlessly on all devices, including smartphones and tablets. You can learn on the go, anytime, anywhere.",
    },
    {
        category: "support",
        question: "How can I contact support?",
        answer:
            "If you need assistance, you can reach out to our support team via the 'Contact' page. We also have a dedicated community forum where you can ask questions and get help from fellow learners and instructors.",
    },
    {
        category: "account",
        question: "Do you offer refunds?",
        answer:
            "Yes, we offer a 7-day money-back guarantee for all our premium courses. If you're not satisfied with the content, you can request a full refund within the first 7 days of purchase.",
    },
    {
        category: "account",
        question: "How do I reset my password?",
        answer:
            "You can reset your password by clicking on the 'Forgot Password' link on the login page. Enter your email address, and we'll send you instructions to create a new password.",
    },
]

export default function FAQPage() {
    const [searchQuery, setSearchQuery] = useState("")
    const [selectedCategory, setSelectedCategory] = useState("all")

    const filteredFaqs = faqs.filter((faq) => {
        const matchesSearch =
            faq.question.toLowerCase().includes(searchQuery.toLowerCase()) ||
            faq.answer.toLowerCase().includes(searchQuery.toLowerCase())
        const matchesCategory = selectedCategory === "all" || faq.category === selectedCategory

        return matchesSearch && matchesCategory
    })

    return (
        <div className="min-h-screen pt-24 pb-16">
            <div className="container mx-auto px-4 max-w-3xl">
                <div className="text-center mb-12">
                    <h1 className="text-4xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-neon-blue to-neon-purple">
                        Frequently Asked Questions
                    </h1>
                    <p className="text-muted-foreground text-lg mb-8">
                        Everything you need to know about EduLinkUp and how it works.
                    </p>

                    {/* Search Bar */}
                    <div className="max-w-xl mx-auto relative mb-8">
                        <SearchIcon className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
                        <Input
                            type="text"
                            placeholder="Search for answers..."
                            value={searchQuery}
                            onChange={(e) => setSearchQuery(e.target.value)}
                            className="pl-12 h-12 bg-background/50 border-glass-border focus-visible:ring-neon-blue rounded-xl text-lg"
                        />
                    </div>

                    {/* Categories */}
                    <div className="flex flex-wrap justify-center gap-2 mb-8">
                        {faqCategories.map((category) => (
                            <button
                                key={category.id}
                                onClick={() => setSelectedCategory(category.id)}
                                className={cn(
                                    "px-4 py-2 rounded-full text-sm font-medium transition-all",
                                    selectedCategory === category.id
                                        ? "bg-gradient-to-r from-neon-blue to-neon-purple text-white shadow-lg shadow-neon-blue/20"
                                        : "bg-white/5 text-muted-foreground hover:bg-white/10 hover:text-foreground"
                                )}
                            >
                                {category.label}
                            </button>
                        ))}
                    </div>
                </div>

                <div className="glass rounded-2xl p-8 min-h-[400px]">
                    {filteredFaqs.length > 0 ? (
                        <Accordion type="single" collapsible className="w-full">
                            {filteredFaqs.map((faq, index) => (
                                <AccordionItem key={index} value={`item-${index}`}>
                                    <AccordionTrigger className="text-left text-lg font-medium hover:text-neon-blue transition-colors">
                                        {faq.question}
                                    </AccordionTrigger>
                                    <AccordionContent className="text-muted-foreground text-base leading-relaxed">
                                        {faq.answer}
                                    </AccordionContent>
                                </AccordionItem>
                            ))}
                        </Accordion>
                    ) : (
                        <div className="text-center py-12">
                            <p className="text-muted-foreground text-lg">No questions found matching your search.</p>
                            <Button
                                variant="link"
                                onClick={() => {
                                    setSearchQuery("")
                                    setSelectedCategory("all")
                                }}
                                className="text-neon-blue mt-2"
                            >
                                Clear filters
                            </Button>
                        </div>
                    )}
                </div>

                <div className="text-center mt-12">
                    <p className="text-muted-foreground mb-4">Still have questions?</p>
                    <a
                        href="/contact"
                        className="inline-flex items-center justify-center px-6 py-3 rounded-xl bg-gradient-to-r from-neon-blue to-neon-purple text-white font-medium hover:opacity-90 transition-opacity"
                    >
                        Contact Support
                    </a>
                </div>
            </div>
        </div>
    )
}
