import React from 'react';
import { Shield, BarChart3, Clock, Globe } from 'lucide-react';
import { Section, Card, Heading3, TextBody } from '../ui';

const benefits = [
  {
    icon: Shield,
    title: "Mitigate Regulatory Risk & Move with Confidence",
    description: "Stop letting the fear of SEC violations paralyze your growth. Our lawyer-verified compliance system ensures every marketing message adheres to Rule 506(c) guidelines. You can finally advertise with the confidence that you are operating 100% within the law."
  },
  {
    icon: BarChart3,
    title: "Gain Control Over Your Growth Trajectory",
    description: "Replace the unpredictability of referrals with a scalable pipeline. Control the volume of investor inquiries based on your deal flow. Go from raising $5M to $50M by implementing a system, not by 10x-ing your networking hours."
  },
  {
    icon: Clock,
    title: "Reclaim 40-60% of Your Time to Focus on Deals",
    description: "Imagine getting 10-20 hours back each week. Our turnkey system handles the entire investor acquisition process—from outreach to booking. Focus on your highest-value activities: deal sourcing and delivering returns."
  },
  {
    icon: Globe,
    title: "Access an Untapped Pool of Nationwide Investors",
    description: "Break free from local limitations. Access a nationwide pool of 13 million+ accredited investors who are actively seeking deals but would never cross your path at a local conference."
  }
];

export const BenefitsSection: React.FC = () => {
  return (
    <Section className="bg-[#f8fafc]">
      <div className="grid md:grid-cols-2 gap-10 lg:gap-16">
        {benefits.map((benefit, index) => {
          const Icon = benefit.icon;
          return (
            <Card key={index}>
              <Icon className="w-12 h-12 text-[#11523c] mb-6" />
              <Heading3 className="mb-4">{benefit.title}</Heading3>
              <TextBody className="text-base">{benefit.description}</TextBody>
            </Card>
          );
        })}
      </div>
    </Section>
  );
};
