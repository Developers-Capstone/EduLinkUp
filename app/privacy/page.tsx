import Link from "next/link"
import { ArrowLeft } from "lucide-react"
import { Button } from "@/components/ui/button"

export default function PrivacyPage() {
    return (
        <div className="min-h-screen pt-24 pb-16">
            <div className="container mx-auto px-4 max-w-4xl">
                <Link href="/">
                    <Button variant="ghost" className="mb-8">
                        <ArrowLeft className="w-4 h-4 mr-2" />
                        Back to Home
                    </Button>
                </Link>

                <h1 className="text-4xl md:text-5xl font-bold mb-4 gradient-text">Privacy Policy</h1>
                <p className="text-muted-foreground mb-8">Last updated: November 26, 2024</p>

                <div className="prose prose-invert max-w-none space-y-8">
                    <section>
                        <h2 className="text-2xl font-semibold text-foreground mb-4">1. Introduction</h2>
                        <p className="text-muted-foreground">
                            Welcome to EduLinkUp. We respect your privacy and are committed to protecting your personal data. This
                            privacy policy will inform you about how we look after your personal data when you visit our website and
                            tell you about your privacy rights.
                        </p>
                    </section>

                    <section>
                        <h2 className="text-2xl font-semibold text-foreground mb-4">2. Information We Collect</h2>
                        <p className="text-muted-foreground mb-4">We may collect, use, store and transfer different kinds of personal data about you:</p>
                        <ul className="list-disc list-inside text-muted-foreground space-y-2 ml-4">
                            <li>Identity Data: name, username, or similar identifier</li>
                            <li>Contact Data: email address and telephone numbers</li>
                            <li>Technical Data: IP address, browser type and version, time zone setting and location</li>
                            <li>Usage Data: information about how you use our website and services</li>
                            <li>Marketing Data: your preferences in receiving marketing from us</li>
                        </ul>
                    </section>

                    <section>
                        <h2 className="text-2xl font-semibold text-foreground mb-4">3. How We Use Your Information</h2>
                        <p className="text-muted-foreground mb-4">We use your personal data for the following purposes:</p>
                        <ul className="list-disc list-inside text-muted-foreground space-y-2 ml-4">
                            <li>To provide and maintain our educational services</li>
                            <li>To notify you about changes to our service</li>
                            <li>To provide customer support</li>
                            <li>To gather analysis or valuable information to improve our service</li>
                            <li>To monitor the usage of our service</li>
                            <li>To detect, prevent and address technical issues</li>
                        </ul>
                    </section>

                    <section>
                        <h2 className="text-2xl font-semibold text-foreground mb-4">4. Data Security</h2>
                        <p className="text-muted-foreground">
                            We have implemented appropriate security measures to prevent your personal data from being accidentally
                            lost, used, or accessed in an unauthorized way. We limit access to your personal data to those employees,
                            agents, contractors and other third parties who have a business need to know.
                        </p>
                    </section>

                    <section>
                        <h2 className="text-2xl font-semibold text-foreground mb-4">5. Your Legal Rights</h2>
                        <p className="text-muted-foreground mb-4">Under certain circumstances, you have rights under data protection laws in relation to your personal data:</p>
                        <ul className="list-disc list-inside text-muted-foreground space-y-2 ml-4">
                            <li>Request access to your personal data</li>
                            <li>Request correction of your personal data</li>
                            <li>Request erasure of your personal data</li>
                            <li>Object to processing of your personal data</li>
                            <li>Request restriction of processing your personal data</li>
                            <li>Request transfer of your personal data</li>
                            <li>Right to withdraw consent</li>
                        </ul>
                    </section>

                    <section>
                        <h2 className="text-2xl font-semibold text-foreground mb-4">6. Cookies</h2>
                        <p className="text-muted-foreground">
                            We use cookies and similar tracking technologies to track activity on our service and hold certain
                            information. You can instruct your browser to refuse all cookies or to indicate when a cookie is being
                            sent.
                        </p>
                    </section>

                    <section>
                        <h2 className="text-2xl font-semibold text-foreground mb-4">7. Third-Party Services</h2>
                        <p className="text-muted-foreground">
                            We may employ third-party companies and individuals to facilitate our service, provide the service on our
                            behalf, or assist us in analyzing how our service is used. These third parties have access to your
                            personal data only to perform these tasks on our behalf.
                        </p>
                    </section>

                    <section>
                        <h2 className="text-2xl font-semibold text-foreground mb-4">8. Contact Us</h2>
                        <p className="text-muted-foreground">
                            If you have any questions about this Privacy Policy, please contact us at:{" "}
                            <a href="mailto:privacy@edulinkup.com" className="text-neon-blue hover:underline">
                                privacy@edulinkup.com
                            </a>
                        </p>
                    </section>
                </div>
            </div>
        </div>
    )
}
