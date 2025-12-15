import Link from "next/link"
import { ArrowLeft } from "lucide-react"
import { Button } from "@/components/ui/button"

export default function TermsPage() {
    return (
        <div className="min-h-screen pt-24 pb-16">
            <div className="container mx-auto px-4 max-w-4xl">
                <Link href="/">
                    <Button variant="ghost" className="mb-8">
                        <ArrowLeft className="w-4 h-4 mr-2" />
                        Back to Home
                    </Button>
                </Link>

                <h1 className="text-4xl md:text-5xl font-bold mb-4 gradient-text">Terms of Service</h1>
                <p className="text-muted-foreground mb-8">Last updated: November 26, 2024</p>

                <div className="prose prose-invert max-w-none space-y-8">
                    <section>
                        <h2 className="text-2xl font-semibold text-foreground mb-4">1. Agreement to Terms</h2>
                        <p className="text-muted-foreground">
                            By accessing or using EduLinkUp, you agree to be bound by these Terms of Service and all applicable laws
                            and regulations. If you do not agree with any of these terms, you are prohibited from using or accessing
                            this site.
                        </p>
                    </section>

                    <section>
                        <h2 className="text-2xl font-semibold text-foreground mb-4">2. Use License</h2>
                        <p className="text-muted-foreground mb-4">
                            Permission is granted to temporarily access the materials on EduLinkUp for personal, non-commercial use
                            only. This is the grant of a license, not a transfer of title, and under this license you may not:
                        </p>
                        <ul className="list-disc list-inside text-muted-foreground space-y-2 ml-4">
                            <li>Modify or copy the materials</li>
                            <li>Use the materials for any commercial purpose or public display</li>
                            <li>Attempt to decompile or reverse engineer any software contained on EduLinkUp</li>
                            <li>Remove any copyright or other proprietary notations from the materials</li>
                            <li>Transfer the materials to another person or "mirror" the materials on any other server</li>
                        </ul>
                    </section>

                    <section>
                        <h2 className="text-2xl font-semibold text-foreground mb-4">3. User Accounts</h2>
                        <p className="text-muted-foreground mb-4">When you create an account with us, you must provide accurate, complete, and current information. You are responsible for:</p>
                        <ul className="list-disc list-inside text-muted-foreground space-y-2 ml-4">
                            <li>Maintaining the confidentiality of your account and password</li>
                            <li>Restricting access to your computer and account</li>
                            <li>All activities that occur under your account</li>
                            <li>Notifying us immediately of any unauthorized use</li>
                        </ul>
                    </section>

                    <section>
                        <h2 className="text-2xl font-semibold text-foreground mb-4">4. Educational Content</h2>
                        <p className="text-muted-foreground">
                            All educational content provided on EduLinkUp is for informational and educational purposes only. We do
                            not guarantee any specific results from using our courses or materials. Your success depends on your own
                            effort, motivation, and circumstances.
                        </p>
                    </section>

                    <section>
                        <h2 className="text-2xl font-semibold text-foreground mb-4">5. User Conduct</h2>
                        <p className="text-muted-foreground mb-4">You agree not to:</p>
                        <ul className="list-disc list-inside text-muted-foreground space-y-2 ml-4">
                            <li>Use the service for any illegal purpose or to violate any laws</li>
                            <li>Harass, abuse, or harm another person or group</li>
                            <li>Post false, inaccurate, or misleading information</li>
                            <li>Upload viruses or malicious code</li>
                            <li>Spam, phish, or engage in similar activities</li>
                            <li>Interfere with the security or proper functioning of the service</li>
                        </ul>
                    </section>

                    <section>
                        <h2 className="text-2xl font-semibold text-foreground mb-4">6. Intellectual Property</h2>
                        <p className="text-muted-foreground">
                            The service and its original content, features, and functionality are owned by EduLinkUp and are protected
                            by international copyright, trademark, patent, trade secret, and other intellectual property laws.
                        </p>
                    </section>

                    <section>
                        <h2 className="text-2xl font-semibold text-foreground mb-4">7. Termination</h2>
                        <p className="text-muted-foreground">
                            We may terminate or suspend your account and access to the service immediately, without prior notice or
                            liability, for any reason, including breach of these Terms. Upon termination, your right to use the
                            service will immediately cease.
                        </p>
                    </section>

                    <section>
                        <h2 className="text-2xl font-semibold text-foreground mb-4">8. Limitation of Liability</h2>
                        <p className="text-muted-foreground">
                            In no event shall EduLinkUp, nor its directors, employees, partners, agents, suppliers, or affiliates, be
                            liable for any indirect, incidental, special, consequential or punitive damages, including without
                            limitation, loss of profits, data, use, goodwill, or other intangible losses.
                        </p>
                    </section>

                    <section>
                        <h2 className="text-2xl font-semibold text-foreground mb-4">9. Changes to Terms</h2>
                        <p className="text-muted-foreground">
                            We reserve the right to modify or replace these Terms at any time. We will provide notice of any
                            significant changes. Your continued use of the service after such modifications constitutes acceptance of
                            the updated Terms.
                        </p>
                    </section>

                    <section>
                        <h2 className="text-2xl font-semibold text-foreground mb-4">10. Contact Information</h2>
                        <p className="text-muted-foreground">
                            If you have any questions about these Terms, please contact us at:{" "}
                            <a href="mailto:legal@edulinkup.com" className="text-neon-blue hover:underline">
                                legal@edulinkup.com
                            </a>
                        </p>
                    </section>
                </div>
            </div>
        </div>
    )
}
