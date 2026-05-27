'use client';

import React from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Separator } from '@/components/ui/separator';
import { Mail, Shield, Info, BookOpen, Users } from 'lucide-react';

// ============================================================
// ABOUT PAGE
// ============================================================
export function AboutPage() {
  return (
    <div className="fade-in max-w-3xl mx-auto px-4 py-8">
      <div className="mb-6">
        <Badge variant="secondary" className="mb-2">About Us</Badge>
        <h1 className="text-3xl font-bold mb-2">About Astro Insight Tools</h1>
        <p className="text-muted-foreground">Learn about our mission, values, and commitment to responsible astrology tools.</p>
      </div>
      <div className="prose prose-stone dark:prose-invert max-w-none space-y-6">
        <h2>What Is Astro Insight Tools?</h2>
        <p>Astro Insight Tools is a free, browser-based platform that provides astrology, zodiac, numerology, compatibility, and personality tools for entertainment and self-reflection. Our platform is designed to be accessible, easy to use, and thoughtful in its approach — offering meaningful symbolic interpretations without making unsubstantiated claims.</p>
        <p>We offer over thirty free tools that cover a wide range of astrological and numerological topics, from Big Three and planet sign interpretations to Chinese zodiac profiles, life path number calculators, daily reflections, and more. All tools work directly in your browser, require no account or sign-up, and are completely free to use.</p>

        <h2>Our Mission</h2>
        <p>We believe that symbolic frameworks like astrology and numerology can be valuable tools for self-reflection, journaling, and creative thinking — when used responsibly. Our mission is to provide calm, well-designed tools that help people ask better questions about themselves and their lives, notice patterns in their behavior and relationships, and enjoy the rich symbolic traditions that have fascinated humanity for thousands of years.</p>
        <p>We are committed to being transparent about the limitations of these tools. Astrology and numerology are not scientifically validated systems, and we do not present them as such. Our tools are for entertainment and personal exploration, and we include clear disclaimers to ensure users understand this distinction.</p>

        <h2>What We Offer</h2>
        <ul className="list-disc pl-6 space-y-2">
          <li><strong>Advanced Astrology Tools:</strong> Big Three interpretation, planet sign meanings, Moon sign explorer, Venus and Mars sign tools, Mercury communication style, aspect meanings, and planet-in-house interpretations.</li>
          <li><strong>Astrology Calculators:</strong> Zodiac sign calculator, daily horoscope generator, yearly horoscope themes, and moon phase birthday tool.</li>
          <li><strong>Compatibility Tools:</strong> General zodiac compatibility, love compatibility, and friendship compatibility checkers.</li>
          <li><strong>Numerology Tools:</strong> Life path number calculator, name numerology, personal year calculator, and angel number meanings.</li>
          <li><strong>Chinese Zodiac Tools:</strong> Chinese zodiac animal calculator and five elements personality tool.</li>
          <li><strong>Lucky and Personality Tools:</strong> Lucky color and number calculators, birthday personality profiles, career personality tool, zodiac money style, and more.</li>
          <li><strong>Educational Guides:</strong> In-depth articles on astrology basics, Big Three meanings, aspects, houses, planet placements, zodiac signs, and more.</li>
        </ul>

        <h2>Editorial Policy</h2>
        <p>All content on Astro Insight Tools is created with care and reviewed for accuracy within the context of traditional astrological and numerological frameworks. Our guides and interpretations draw from established symbolic traditions while avoiding claims of scientific validity. We include disclaimers on every tool and article page to ensure users understand the entertainment and self-reflection nature of the content.</p>

        <h2>Our Values</h2>
        <ul className="list-disc pl-6 space-y-2">
          <li><strong>Transparency:</strong> We are clear about what our tools can and cannot do.</li>
          <li><strong>Accessibility:</strong> All tools are free, require no sign-up, and work in any modern browser.</li>
          <li><strong>Responsibility:</strong> We never present astrology or numerology as a substitute for professional advice.</li>
          <li><strong>Privacy:</strong> User data entered into tools is processed in the browser and not sent to our servers.</li>
          <li><strong>Quality:</strong> We strive to create tools and content that are genuinely useful and thoughtfully designed.</li>
        </ul>

        <h2>Our Team</h2>
        <p>Astro Insight Tools is an independent digital tools project created by a small team with interests in web development, symbolic systems, journaling and self-reflection. Our goal is to create responsible, calm and easy-to-use tools for people who enjoy astrology and numerology as entertainment and personal exploration.</p>

        <Separator className="my-8" />

        <h2>Contact and Corrections</h2>
        <p>We welcome feedback, corrections, and suggestions. If you notice an error in our content or have a question about our tools, please do not hesitate to reach out.</p>
        <div className="not-prose mt-4 p-4 bg-muted/50 rounded-lg">
          <p className="font-medium flex items-center gap-2"><Mail className="h-4 w-4" /> Email: AstroInsightTools@proton.me</p>
        </div>
      </div>
    </div>
  );
}

// ============================================================
// PRIVACY PAGE
// ============================================================
export function PrivacyPage() {
  return (
    <div className="fade-in max-w-3xl mx-auto px-4 py-8">
      <div className="mb-6">
        <Badge variant="secondary" className="mb-2">Legal</Badge>
        <h1 className="text-3xl font-bold mb-2">Privacy Policy</h1>
        <p className="text-sm text-muted-foreground">Last updated: May 2025</p>
      </div>
      <div className="prose prose-stone dark:prose-invert max-w-none space-y-6">
        <div className="bg-blue-50 border border-blue-200 rounded-lg p-4 text-blue-800 dark:bg-blue-900/10 dark:text-blue-400 not-prose">
          <Shield className="h-5 w-5 mb-2" />
          <strong>Summary:</strong> Your tool inputs are processed locally in your browser and are not transmitted to our servers. We use Google AdSense and Google Analytics, which may collect anonymized usage data through cookies. See below for full details.
        </div>

        <h2>1. Information We Collect</h2>
        <h3>Data Entered Into Our Tools</h3>
        <p>All information you enter into our astrology and numerology tools — including birth dates, names, and any other personal details — is processed entirely within your web browser using client-side JavaScript. This data is not transmitted to, stored on, or processed by our servers. When you close the browser tab or navigate away from a tool, the data you entered is gone.</p>

        <h3>Automatically Collected Information</h3>
        <p>Like most websites, we may collect certain technical information automatically when you visit our site. This may include your IP address, browser type, operating system, referring URLs, pages visited, and the date and time of your visit. This information is collected through standard web analytics tools and is used to understand how our site is being used and to improve our services.</p>

        <h2>2. Cookies and Tracking Technologies</h2>
        <p>We use cookies and similar tracking technologies for the following purposes:</p>
        <ul className="list-disc pl-6 space-y-2">
          <li><strong>Essential Cookies:</strong> We use a single cookie to remember your cookie consent preference (accepted or declined). This cookie is stored in your browser and is necessary for the cookie consent banner to function properly.</li>
          <li><strong>Google Analytics:</strong> We use Google Analytics to understand how visitors interact with our website. Google Analytics uses cookies to collect anonymized data about your browsing behavior, including pages visited, time spent on pages, and navigation patterns. This data helps us improve our content and user experience. You can opt out of Google Analytics by installing the Google Analytics Opt-out Browser Add-on.</li>
          <li><strong>Google AdSense:</strong> We use Google AdSense to display advertisements on our website. Google AdSense may use cookies to serve personalized ads based on your browsing history. Google&rsquo;s advertising cookies enable it and its partners to serve ads based on visits to our site and/or other sites on the Internet. You may opt out of personalized advertising by visiting Google&rsquo;s Ads Settings page.</li>
        </ul>
        <p>You can control cookie preferences through your browser settings. Most browsers allow you to refuse cookies, delete existing cookies, or alert you when a cookie is being set. Please note that disabling cookies may affect the functionality of some website features.</p>

        <h2>3. Third-Party Services</h2>
        <p>We use the following third-party services:</p>
        <ul className="list-disc pl-6 space-y-2">
          <li><strong>Google AdSense:</strong> For displaying advertisements. Google&rsquo;s privacy policy governs how data collected through AdSense is used. We do not have access to personally identifiable information collected by Google through its advertising services.</li>
          <li><strong>Google Analytics:</strong> For website traffic analysis. All Google Analytics data is anonymized and aggregated. We use this data solely to understand and improve our website performance.</li>
        </ul>
        <p>These third-party services have their own privacy policies, which we encourage you to review. We are not responsible for the privacy practices of third-party services.</p>

        <h2>4. Data Retention</h2>
        <p>As stated above, personal data entered into our tools is not collected, stored, or transmitted by our servers. Technical data collected through Google Analytics is retained according to Google&rsquo;s data retention policies. We do not maintain a database of user information.</p>

        <h2>5. Data Security</h2>
        <p>Since we do not collect or store personal data on our servers, the risk of data breach related to tool inputs is minimal. We use HTTPS encryption for all connections to our website to ensure that your browsing activity is secure. Our website is hosted on reputable infrastructure providers who maintain industry-standard security practices.</p>

        <h2>6. Your Rights</h2>
        <p>Depending on your jurisdiction, you may have certain rights regarding your personal data, including:</p>
        <ul className="list-disc pl-6 space-y-2">
          <li>The right to access any personal data we hold about you.</li>
          <li>The right to request correction of inaccurate data.</li>
          <li>The right to request deletion of your data.</li>
          <li>The right to object to or restrict the processing of your data.</li>
          <li>The right to data portability.</li>
        </ul>
        <p>Since we do not maintain a database of personal data, most of these rights are not directly applicable. However, if you have questions or concerns about data privacy, please contact us at the email address below.</p>

        <h2>7. Children&rsquo;s Privacy</h2>
        <p>Our website is not directed at children under the age of 13, and we do not knowingly collect personal information from children. Our tools do not require users to create accounts or provide personal information. If you are a parent or guardian and believe your child has provided personal information through our site, please contact us and we will take appropriate action.</p>

        <h2>8. Changes to This Privacy Policy</h2>
        <p>We may update this Privacy Policy from time to time to reflect changes in our practices, technology, or legal requirements. When we make changes, we will update the &ldquo;Last updated&rdquo; date at the top of this page. We encourage you to review this policy periodically to stay informed about how we protect your privacy.</p>

        <h2>9. Contact Us</h2>
        <p>If you have any questions or concerns about this Privacy Policy, please contact us:</p>
        <div className="not-prose mt-4 p-4 bg-muted/50 rounded-lg">
          <p className="font-medium">Email: AstroInsightTools@proton.me</p>
        </div>
      </div>
    </div>
  );
}

// ============================================================
// TERMS PAGE
// ============================================================
export function TermsPage() {
  return (
    <div className="fade-in max-w-3xl mx-auto px-4 py-8">
      <div className="mb-6">
        <Badge variant="secondary" className="mb-2">Legal</Badge>
        <h1 className="text-3xl font-bold mb-2">Terms of Service</h1>
        <p className="text-sm text-muted-foreground">Last updated: May 2025</p>
      </div>
      <div className="prose prose-stone dark:prose-invert max-w-none space-y-6">
        <h2>1. Acceptance of Terms</h2>
        <p>By accessing and using Astro Insight Tools (the &ldquo;Website&rdquo;), you agree to be bound by these Terms of Service (&ldquo;Terms&rdquo;). If you do not agree with any part of these Terms, you should not use the Website. We reserve the right to modify these Terms at any time, and your continued use of the Website after modifications are posted constitutes your acceptance of the revised Terms.</p>

        <h2>2. Description of Service</h2>
        <p>Astro Insight Tools provides free, browser-based astrology, zodiac, numerology, compatibility, and personality tools for entertainment and self-reflection purposes. Our tools process user inputs entirely within the browser and do not transmit personal data to our servers. The Website also includes educational articles, guides, and reference materials related to astrology and numerology.</p>
        <p><strong>ALL TOOLS, CONTENT, AND INTERPRETATIONS PROVIDED ON THIS WEBSITE ARE FOR ENTERTAINMENT AND SELF-REFLECTION ONLY.</strong> They do not constitute and should not be interpreted as medical, legal, financial, psychological, or any other form of professional advice.</p>

        <h2>3. User Responsibilities</h2>
        <p>By using this Website, you agree to:</p>
        <ul className="list-disc pl-6 space-y-2">
          <li>Use the Website and its tools only for lawful purposes and in accordance with these Terms.</li>
          <li>Understand that astrology and numerology are not scientifically validated systems and that the interpretations provided are symbolic and subjective in nature.</li>
          <li>Not use the tools or content as a substitute for professional medical, legal, financial, or psychological advice.</li>
          <li>Not attempt to interfere with, hack, or disrupt the Website, its servers, or its functionality.</li>
          <li>Not reproduce, distribute, or commercially exploit the Website&rsquo;s content without prior written permission.</li>
          <li>Be at least 13 years of age or have parental or guardian consent to use the Website.</li>
        </ul>

        <h2>4. Intellectual Property</h2>
        <p>All content on Astro Insight Tools, including but not limited to text, graphics, logos, tool designs, code, interpretations, articles, and images, is the property of Astro Insight Tools or its content creators and is protected by applicable copyright and intellectual property laws. You may not copy, modify, distribute, or create derivative works from any content on this Website without our prior written permission.</p>
        <p>You may share links to our Website and reference our content for personal, non-commercial purposes with appropriate attribution.</p>

        <h2>5. Disclaimer of Warranties</h2>
        <p>THE WEBSITE AND ALL CONTENT, TOOLS, AND INTERPRETATIONS ARE PROVIDED ON AN &ldquo;AS IS&rdquo; AND &ldquo;AS AVAILABLE&rdquo; BASIS WITHOUT WARRANTIES OF ANY KIND, WHETHER EXPRESS OR IMPLIED. WE DO NOT WARRANT THAT:</p>
        <ul className="list-disc pl-6 space-y-2">
          <li>The Website will be uninterrupted, error-free, or secure.</li>
          <li>The results or interpretations provided by our tools will be accurate, reliable, or meaningful.</li>
          <li>The information on the Website is complete, current, or free from errors.</li>
          <li>Any defects or errors in the Website will be corrected.</li>
        </ul>

        <h2>6. Limitation of Liability</h2>
        <p>TO THE FULLEST EXTENT PERMITTED BY APPLICABLE LAW, ASTRO INSIGHT TOOLS AND ITS OPERATORS SHALL NOT BE LIABLE FOR ANY INDIRECT, INCIDENTAL, SPECIAL, CONSEQUENTIAL, OR PUNITIVE DAMAGES ARISING FROM OR RELATED TO YOUR USE OF OR INABILITY TO USE THE WEBSITE, INCLUDING BUT NOT LIMITED TO DAMAGES FOR LOSS OF PROFITS, GOODWILL, DATA, OR OTHER INTANGIBLE LOSSES, EVEN IF WE HAVE BEEN ADVISED OF THE POSSIBILITY OF SUCH DAMAGES.</p>
        <p>This limitation of liability applies whether the alleged liability is based on contract, tort, negligence, strict liability, or any other basis, even if we have been advised of the possibility of such damage.</p>

        <h2>7. Indemnification</h2>
        <p>You agree to indemnify and hold harmless Astro Insight Tools and its operators from any claims, damages, losses, liabilities, or expenses (including reasonable attorneys&rsquo; fees) arising from your use of the Website or your violation of these Terms.</p>

        <h2>8. Third-Party Links and Services</h2>
        <p>The Website may contain links to third-party websites or services, including advertisements served through Google AdSense. We are not responsible for the content, privacy practices, or policies of any third-party websites or services. Your interactions with third-party content are governed solely by the terms and policies of those third parties.</p>

        <h2>9. Governing Law</h2>
        <p>These Terms shall be governed by and construed in accordance with applicable laws, without regard to conflict of law principles. Any disputes arising from or related to these Terms or your use of the Website shall be resolved through good-faith negotiation or, if necessary, through binding arbitration in accordance with applicable rules.</p>

        <h2>10. Changes to These Terms</h2>
        <p>We reserve the right to update or modify these Terms at any time without prior notice. Changes become effective immediately upon posting on the Website. Your continued use of the Website after any changes constitutes your acceptance of the revised Terms. We encourage you to review these Terms periodically.</p>

        <h2>11. Contact</h2>
        <p>If you have questions about these Terms, please contact us at:</p>
        <div className="not-prose mt-4 p-4 bg-muted/50 rounded-lg">
          <p className="font-medium">Email: AstroInsightTools@proton.me</p>
        </div>
      </div>
    </div>
  );
}

// ============================================================
// DISCLAIMER PAGE
// ============================================================
export function DisclaimerPage() {
  return (
    <div className="fade-in max-w-3xl mx-auto px-4 py-8">
      <div className="mb-6">
        <Badge variant="secondary" className="mb-2">Legal</Badge>
        <h1 className="text-3xl font-bold mb-2">Disclaimer</h1>
        <p className="text-muted-foreground">Important information about the nature and limitations of our tools and content.</p>
      </div>
      <div className="prose prose-stone dark:prose-invert max-w-none space-y-6">
        <div className="bg-amber-50 border border-amber-200 rounded-lg p-4 text-amber-800 dark:bg-amber-900/10 dark:text-amber-400 not-prose">
          <Info className="h-5 w-5 mb-2" />
          <strong>Important:</strong> Please read this disclaimer carefully before using any tools or content on Astro Insight Tools.
        </div>

        <h2>Entertainment and Self-Reflection Only</h2>
        <p>All tools, content, interpretations, articles, guides, and other materials provided on Astro Insight Tools (the &ldquo;Website&rdquo;) are intended for <strong>entertainment and self-reflection purposes only</strong>. They are not intended to be and should not be interpreted as factual, scientific, or professional advice of any kind.</p>
        <p>Astrology and numerology are symbolic belief systems that have been used across cultures for thousands of years. While many people find them meaningful and useful as frameworks for personal reflection, they are not recognized as scientifically validated methods for understanding personality, predicting events, or making life decisions.</p>

        <h2>Not Professional Advice</h2>
        <p>The tools and content on this Website do not constitute and should never be used as a substitute for:</p>
        <ul className="list-disc pl-6 space-y-2">
          <li><strong>Medical or health advice:</strong> Always consult a qualified healthcare professional for medical concerns, diagnosis, or treatment.</li>
          <li><strong>Mental health advice:</strong> Always consult a licensed mental health professional for psychological or emotional concerns.</li>
          <li><strong>Legal advice:</strong> Always consult a qualified attorney for legal matters.</li>
          <li><strong>Financial advice:</strong> Always consult a certified financial advisor for financial decisions.</li>
          <li><strong>Relationship advice:</strong> While our compatibility tools can be fun to explore, real relationship decisions should be based on communication, mutual respect, and professional counseling when needed.</li>
          <li><strong>Career advice:</strong> Our personality and career tools are for reflection only. Career decisions should be made with the guidance of career counselors, mentors, and thorough research.</li>
        </ul>

        <h2>No Guarantee of Accuracy</h2>
        <p>We make no representations or warranties of any kind regarding the accuracy, reliability, completeness, or usefulness of the interpretations, calculations, or content provided on this Website. Astrological and numerological interpretations are inherently subjective and symbolic. Different practitioners and traditions may interpret the same data differently, and there is no universally accepted standard for astrological or numerological accuracy.</p>
        <p>Any similarities between our tool outputs and your actual life experiences are coincidental and should be interpreted as reflections rather than predictions.</p>

        <h2>Third-Party Content</h2>
        <p>The Website may display advertisements through third-party advertising networks (such as Google AdSense). These advertisements are clearly distinguishable from our editorial content and are subject to the terms and privacy policies of the respective advertising networks. We do not endorse, guarantee, or assume responsibility for the accuracy of any third-party advertisements or content displayed on our Website.</p>

        <h2>Affiliate Links</h2>
        <p>At this time, Astro Insight Tools does not use affiliate links. If this changes in the future, any affiliate relationships will be clearly disclosed on this page. We will always be transparent about any commercial relationships that may influence our content or recommendations.</p>

        <h2>Personal Responsibility</h2>
        <p>By using this Website, you acknowledge and agree that you are solely responsible for your own decisions, actions, and interpretations of the content provided. You agree to use the tools and content responsibly and to seek appropriate professional guidance for any important life decisions.</p>

        <h2>Children</h2>
        <p>The tools and content on this Website are intended for general audiences. Parents and guardians should supervise minors&rsquo; use of the Website and help them understand the distinction between symbolic entertainment and professional advice.</p>

        <Separator className="my-8" />

        <p className="text-sm text-muted-foreground">If you have questions about this disclaimer, please contact us at AstroInsightTools@proton.me.</p>
      </div>
    </div>
  );
}

// ============================================================
// CONTACT PAGE
// ============================================================
export function ContactPage() {
  return (
    <div className="fade-in max-w-3xl mx-auto px-4 py-8">
      <div className="mb-6">
        <Badge variant="secondary" className="mb-2">Contact</Badge>
        <h1 className="text-3xl font-bold mb-2">Contact Us</h1>
        <p className="text-muted-foreground">We welcome feedback, corrections, suggestions, and general inquiries.</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <Card>
          <CardContent className="pt-6">
            <div className="flex items-center gap-3 mb-4">
              <div className="p-2 rounded-lg bg-primary/10 text-primary">
                <Mail className="h-5 w-5" />
              </div>
              <div>
                <h2 className="text-lg font-semibold">Email Us Directly</h2>
                <p className="text-sm text-primary break-all">AstroInsightTools@proton.me</p>
              </div>
            </div>
            <p className="text-sm text-muted-foreground mb-4">
              For website feedback, tool suggestions, content corrections, or general enquiries, please contact us by email.
            </p>
            <a
              href="mailto:AstroInsightTools@proton.me?subject=Astro%20Insight%20Tools%20Feedback"
              className="inline-flex w-full items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground hover:bg-primary/90 transition-colors"
            >
              <Mail className="mr-2 h-4 w-4" /> Open Email App
            </a>
            <p className="text-xs text-muted-foreground mt-4">
              Please do not send sensitive personal information, identity documents, medical information, financial details, or confidential data.
            </p>
          </CardContent>
        </Card>

        <div className="space-y-4">
          <Card>
            <CardContent className="pt-6">
              <div className="flex items-center gap-3 mb-3">
                <div className="p-2 rounded-lg bg-primary/10 text-primary">
                  <BookOpen className="h-5 w-5" />
                </div>
                <div>
                  <h3 className="font-semibold">Content Corrections</h3>
                  <p className="text-sm text-muted-foreground">Found an error in our articles or tools?</p>
                </div>
              </div>
              <p className="text-sm text-muted-foreground">Please include the specific page or tool name and describe the issue so we can review it clearly.</p>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="pt-6">
              <div className="flex items-center gap-3 mb-3">
                <div className="p-2 rounded-lg bg-primary/10 text-primary">
                  <Users className="h-5 w-5" />
                </div>
                <div>
                  <h3 className="font-semibold">General Inquiries</h3>
                  <p className="text-sm text-muted-foreground">Questions about our tools or content?</p>
                </div>
              </div>
              <p className="text-sm text-muted-foreground">We are happy to receive feedback about usability, accessibility, astrology guides, numerology tools, and future content ideas.</p>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="pt-6">
              <div className="flex items-center gap-3 mb-3">
                <div className="p-2 rounded-lg bg-primary/10 text-primary">
                  <Info className="h-5 w-5" />
                </div>
                <div>
                  <h3 className="font-semibold">Important Note</h3>
                  <p className="text-sm text-muted-foreground">Entertainment and self-reflection only.</p>
                </div>
              </div>
              <p className="text-sm text-muted-foreground">Astro Insight Tools does not provide medical, legal, financial, psychological, or professional advice.</p>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}
