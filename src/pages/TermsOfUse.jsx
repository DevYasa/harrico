// src/pages/TermsOfUse.jsx
import React from 'react';
import { Link } from 'react-router-dom';
import AnimatedPageHeader from '../components/common/AnimatedPageHeader';
import PolicyHeaderImage from '../assets/images/about/bg12.jpg'; // Use an appropriate image

const TermsOfUse = () => {
  return (
    <div className="bg-white">
      {/* Header */}
      <AnimatedPageHeader 
        title="Terms of Use" 
        subtitle="Legal terms and conditions governing the use of our website and services"
        backgroundImage={PolicyHeaderImage}
      />

      {/* Content */}
      <section className="py-12 md:py-16 lg:py-20 bg-white">
        <div className="container mx-auto px-4 md:px-6 max-w-4xl">
          <div className="prose prose-lg max-w-none">
            {/* Last updated date */}
            <p className="text-gray-500">Last updated: April 07, 2025</p>
            
            <h2 className="text-2xl md:text-3xl font-serif my-6">Agreement to Terms</h2>
            
            <p>These Terms of Use constitute a legally binding agreement made between you, whether personally or on behalf of an entity ("you") and Harrico Ceylon Gems & Jewelry SDN. BHD. ("Company", "we", "us", or "our"), concerning your access to and use of the https://harricogems.com website as well as any other media form, media channel, mobile website or mobile application related, linked, or otherwise connected thereto (collectively, the "Site").</p>
            
            <p>You agree that by accessing the Site, you have read, understood, and agreed to be bound by all of these Terms of Use. If you do not agree with all of these Terms of Use, then you are expressly prohibited from using the Site and you must discontinue use immediately.</p>
            
            <h2 className="text-2xl md:text-3xl font-serif my-6">Intellectual Property Rights</h2>
            
            <p>Unless otherwise indicated, the Site is our proprietary property and all source code, databases, functionality, software, website designs, audio, video, text, photographs, and graphics on the Site (collectively, the "Content") and the trademarks, service marks, and logos contained therein (the "Marks") are owned or controlled by us or licensed to us, and are protected by copyright and trademark laws and various other intellectual property rights and unfair competition laws of the United States, international copyright laws, and international conventions.</p>
            
            <p>The Content and the Marks are provided on the Site "AS IS" for your information and personal use only. Except as expressly provided in these Terms of Use, no part of the Site and no Content or Marks may be copied, reproduced, aggregated, republished, uploaded, posted, publicly displayed, encoded, translated, transmitted, distributed, sold, licensed, or otherwise exploited for any commercial purpose whatsoever, without our express prior written permission.</p>
            
            <h2 className="text-2xl md:text-3xl font-serif my-6">User Representations</h2>
            
            <p>By using the Site, you represent and warrant that: (1) you have the legal capacity and you agree to comply with these Terms of Use; (2) you are not a minor in the jurisdiction in which you reside; (3) you will not access the Site through automated or non-human means, whether through a bot, script or otherwise; (4) you will not use the Site for any illegal or unauthorized purpose; and (5) your use of the Site will not violate any applicable law or regulation.</p>
            
            <h2 className="text-2xl md:text-3xl font-serif my-6">Products</h2>
            
            <p>We make every effort to display as accurately as possible the colors, features, specifications, and details of the products available on the Site. However, we do not guarantee that the colors, features, specifications, and details of the products will be accurate, complete, reliable, current, or free of other errors, and your electronic display may not accurately reflect the actual colors and details of the products.</p>
            
            <p>All products are subject to availability, and we cannot guarantee that items will be in stock. We reserve the right to discontinue any products at any time for any reason. Prices for all products are subject to change.</p>
            
            <h2 className="text-2xl md:text-3xl font-serif my-6">Purchases and Payment</h2>
            
            <p>We accept various payment methods for the purchase of our products. You represent and warrant that: (i) you have the legal right to use any payment method(s) in connection with any purchase; and that (ii) the information you supply to us is true, correct, and complete.</p>
            
            <p>We reserve the right to refuse any order placed through the Site. We may, in our sole discretion, limit or cancel quantities purchased per person, per household, or per order. These restrictions may include orders placed by or under the same customer account, the same payment method, and/or orders that use the same billing or shipping address.</p>
            
            <h2 className="text-2xl md:text-3xl font-serif my-6">Return/Refund Policy</h2>
            
            <p>Please review our Return Policy posted on the Site prior to making any purchases.</p>
            
            <h2 className="text-2xl md:text-3xl font-serif my-6">Prohibited Activities</h2>
            
            <p>You may not access or use the Site for any purpose other than that for which we make the Site available. The Site may not be used in connection with any commercial endeavors except those that are specifically endorsed or approved by us.</p>
            
            <h2 className="text-2xl md:text-3xl font-serif my-6">User Generated Contributions</h2>
            
            <p>The Site may invite you to chat, contribute to, or participate in blogs, message boards, online forums, and other functionality, and may provide you with the opportunity to create, submit, post, display, transmit, perform, publish, distribute, or broadcast content and materials to us or on the Site, including but not limited to text, writings, video, audio, photographs, graphics, comments, suggestions, or personal information or other material (collectively, "Contributions").</p>
            
            <p>Any Contributions you transmit to the Site will be treated as non-confidential and non-proprietary. By providing any Contribution to the Site, you grant us all rights necessary to prohibit the unauthorized use, reproduction, modification, publishing, creation of derivative works, distribution, transmission, downloading, or establishing any kind of commercial exploitation of such Contribution.</p>
            
            <h2 className="text-2xl md:text-3xl font-serif my-6">Submissions</h2>
            
            <p>You acknowledge and agree that any questions, comments, suggestions, ideas, feedback, or other information regarding the Site ("Submissions") provided by you to us are non-confidential and shall become our sole property. We shall own exclusive rights, including all intellectual property rights, and shall be entitled to the unrestricted use and dissemination of these Submissions for any lawful purpose, commercial or otherwise, without acknowledgment or compensation to you.</p>
            
            <h2 className="text-2xl md:text-3xl font-serif my-6">Site Management</h2>
            
            <p>We reserve the right, but not the obligation, to: (1) monitor the Site for violations of these Terms of Use; (2) take appropriate legal action against anyone who, in our sole discretion, violates the law or these Terms of Use, including without limitation, reporting such user to law enforcement authorities; (3) in our sole discretion and without limitation, refuse, restrict access to, limit the availability of, or disable (to the extent technologically feasible) any of your Contributions or any portion thereof; (4) in our sole discretion and without limitation, notice, or liability, to remove from the Site or otherwise disable all files and content that are excessive in size or are in any way burdensome to our systems; and (5) otherwise manage the Site in a manner designed to protect our rights and property and to facilitate the proper functioning of the Site.</p>
            
            <h2 className="text-2xl md:text-3xl font-serif my-6">Term and Termination</h2>
            
            <p>These Terms of Use shall remain in full force and effect while you use the Site. WITHOUT LIMITING ANY OTHER PROVISION OF THESE TERMS OF USE, WE RESERVE THE RIGHT TO, IN OUR SOLE DISCRETION AND WITHOUT NOTICE OR LIABILITY, DENY ACCESS TO AND USE OF THE SITE (INCLUDING BLOCKING CERTAIN IP ADDRESSES), TO ANY PERSON FOR ANY REASON OR FOR NO REASON, INCLUDING WITHOUT LIMITATION FOR BREACH OF ANY REPRESENTATION, WARRANTY, OR COVENANT CONTAINED IN THESE TERMS OF USE OR OF ANY APPLICABLE LAW OR REGULATION.</p>
            
            <h2 className="text-2xl md:text-3xl font-serif my-6">Modifications and Interruptions</h2>
            
            <p>We reserve the right to change, modify, or remove the contents of the Site at any time or for any reason at our sole discretion without notice. However, we have no obligation to update any information on our Site. We also reserve the right to modify or discontinue all or part of the Site without notice at any time.</p>
            
            <p>We will not be liable to you or any third party for any modification, price change, suspension, or discontinuance of the Site.</p>
            
            <h2 className="text-2xl md:text-3xl font-serif my-6">Governing Law</h2>
            
            <p>These Terms shall be governed by and defined following the laws of Malaysia. Harrico Ceylon Gems & Jewelry SDN. BHD. and yourself irrevocably consent that the courts of Malaysia shall have exclusive jurisdiction to resolve any dispute which may arise in connection with these terms.</p>
            
            <h2 className="text-2xl md:text-3xl font-serif my-6">Dispute Resolution</h2>
            
            <p>You agree to irrevocably submit all disputes related to Terms or the relationship established by this Agreement to the jurisdiction of the Malaysia courts. Harrico Ceylon Gems & Jewelry SDN. BHD. shall also maintain the right to bring proceedings as to the substance of the matter in the courts of the country where you reside or, if these Terms are entered into in the course of your trade or profession, the state of your principal place of business.</p>
            
            <h2 className="text-2xl md:text-3xl font-serif my-6">Corrections</h2>
            
            <p>There may be information on the Site that contains typographical errors, inaccuracies, or omissions, including descriptions, pricing, availability, and various other information. We reserve the right to correct any errors, inaccuracies, or omissions and to change or update the information on the Site at any time, without prior notice.</p>
            
            <h2 className="text-2xl md:text-3xl font-serif my-6">Disclaimer</h2>
            
            <p>THE SITE IS PROVIDED ON AN AS-IS AND AS-AVAILABLE BASIS. YOU AGREE THAT YOUR USE OF THE SITE AND OUR SERVICES WILL BE AT YOUR SOLE RISK. TO THE FULLEST EXTENT PERMITTED BY LAW, WE DISCLAIM ALL WARRANTIES, EXPRESS OR IMPLIED, IN CONNECTION WITH THE SITE AND YOUR USE THEREOF, INCLUDING, WITHOUT LIMITATION, THE IMPLIED WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE, AND NON-INFRINGEMENT. WE MAKE NO WARRANTIES OR REPRESENTATIONS ABOUT THE ACCURACY OR COMPLETENESS OF THE SITE'S CONTENT OR THE CONTENT OF ANY WEBSITES LINKED TO THE SITE AND WE WILL ASSUME NO LIABILITY OR RESPONSIBILITY FOR ANY (1) ERRORS, MISTAKES, OR INACCURACIES OF CONTENT AND MATERIALS, (2) PERSONAL INJURY OR PROPERTY DAMAGE, OF ANY NATURE WHATSOEVER, RESULTING FROM YOUR ACCESS TO AND USE OF THE SITE, (3) ANY UNAUTHORIZED ACCESS TO OR USE OF OUR SECURE SERVERS AND/OR ANY AND ALL PERSONAL INFORMATION AND/OR FINANCIAL INFORMATION STORED THEREIN, (4) ANY INTERRUPTION OR CESSATION OF TRANSMISSION TO OR FROM THE SITE, (5) ANY BUGS, VIRUSES, TROJAN HORSES, OR THE LIKE WHICH MAY BE TRANSMITTED TO OR THROUGH THE SITE BY ANY THIRD PARTY, AND/OR (6) ANY ERRORS OR OMISSIONS IN ANY CONTENT AND MATERIALS OR FOR ANY LOSS OR DAMAGE OF ANY KIND INCURRED AS A RESULT OF THE USE OF ANY CONTENT POSTED, TRANSMITTED, OR OTHERWISE MADE AVAILABLE VIA THE SITE. WE DO NOT WARRANT, ENDORSE, GUARANTEE, OR ASSUME RESPONSIBILITY FOR ANY PRODUCT OR SERVICE ADVERTISED OR OFFERED BY A THIRD PARTY THROUGH THE SITE, ANY HYPERLINKED WEBSITE, OR ANY WEBSITE OR MOBILE APPLICATION FEATURED IN ANY BANNER OR OTHER ADVERTISING, AND WE WILL NOT BE A PARTY TO OR IN ANY WAY BE RESPONSIBLE FOR MONITORING ANY TRANSACTION BETWEEN YOU AND ANY THIRD-PARTY PROVIDERS OF PRODUCTS OR SERVICES.</p>
            
            <h2 className="text-2xl md:text-3xl font-serif my-6">Limitations of Liability</h2>
            
            <p>IN NO EVENT WILL WE OR OUR DIRECTORS, EMPLOYEES, OR AGENTS BE LIABLE TO YOU OR ANY THIRD PARTY FOR ANY DIRECT, INDIRECT, CONSEQUENTIAL, EXEMPLARY, INCIDENTAL, SPECIAL, OR PUNITIVE DAMAGES, INCLUDING LOST PROFIT, LOST REVENUE, LOSS OF DATA, OR OTHER DAMAGES ARISING FROM YOUR USE OF THE SITE, EVEN IF WE HAVE BEEN ADVISED OF THE POSSIBILITY OF SUCH DAMAGES.</p>
            
            <h2 className="text-2xl md:text-3xl font-serif my-6">Indemnification</h2>
            
            <p>You agree to defend, indemnify, and hold us harmless, including our subsidiaries, affiliates, and all of our respective officers, agents, partners, and employees, from and against any loss, damage, liability, claim, or demand, including reasonable attorneys' fees and expenses, made by any third party due to or arising out of: (1) your Contributions; (2) use of the Site; (3) breach of these Terms of Use; (4) any breach of your representations and warranties set forth in these Terms of Use; (5) your violation of the rights of a third party, including but not limited to intellectual property rights; or (6) any overt harmful act toward any other user of the Site with whom you connected via the Site.</p>
            
            <h2 className="text-2xl md:text-3xl font-serif my-6">User Data</h2>
            
            <p>We will maintain certain data that you transmit to the Site for the purpose of managing the performance of the Site, as well as data relating to your use of the Site. Although we perform regular routine backups of data, you are solely responsible for all data that you transmit or that relates to any activity you have undertaken using the Site.</p>
            
            <p>You agree that we shall have no liability to you for any loss or corruption of any such data, and you hereby waive any right of action against us arising from any such loss or corruption of such data.</p>
            
            <h2 className="text-2xl md:text-3xl font-serif my-6">Electronic Communications, Transactions, and Signatures</h2>
            
            <p>Visiting the Site, sending us emails, and completing online forms constitute electronic communications. You consent to receive electronic communications, and you agree that all agreements, notices, disclosures, and other communications we provide to you electronically, via email and on the Site, satisfy any legal requirement that such communication be in writing.</p>
            
            <h2 className="text-2xl md:text-3xl font-serif my-6">Contact Us</h2>
            
            <p>In order to resolve a complaint regarding the Site or to receive further information regarding use of the Site, please contact us at:</p>
            
            <p><strong>Harrico Ceylon Gems & Jewelry SDN. BHD.</strong><br />
            No.5.Level 41. Intermark Building<br />
            348.Jalan Tun Razak<br />
            50400 Kuala Lumpur<br />
            W.P. Kuala Lumpur<br />
            Malaysia<br />
            <br />
            Email: harricoceylongems@gmail.com<br />
            Phone: +60 3 2181 8953</p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default TermsOfUse;