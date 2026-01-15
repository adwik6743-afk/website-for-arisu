
import React from 'react';
import { Testimonial } from './types';

export const HERO_TITLE = "Elevate Your Child's Learning with Arisu Tutors";
export const HERO_SUBTITLE = "Personalized home tuition from verified experts. We match the right teacher with the right student for guaranteed results.";

export const FEATURES = [
  {
    title: "Verified Tutors",
    description: "Every tutor undergoes a rigorous background check and academic verification process.",
    icon: (
      <svg className="w-6 h-6 text-indigo-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
      </svg>
    )
  },
  {
    title: "Customized Matching",
    description: "Our academic consultants match tutors based on student learning styles and personality.",
    icon: (
      <svg className="w-6 h-6 text-indigo-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" />
      </svg>
    )
  },
  {
    title: "Performance Tracking",
    description: "Receive weekly reports on your child's progress, strengths, and areas for improvement.",
    icon: (
      <svg className="w-6 h-6 text-indigo-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
      </svg>
    )
  }
];

export const ADVANTAGES = [
  {
    title: "100% Focused Attention",
    desc: "Unlike classrooms, our tutors focus solely on your child, addressing specific gaps in knowledge immediately.",
    icon: "🎯"
  },
  {
    title: "Safe & Familiar Environment",
    desc: "Students feel more comfortable asking 'silly' questions in the safety of their own home.",
    icon: "🏠"
  },
  {
    title: "Time-Saving Convenience",
    desc: "Eliminate travel time for both students and parents. Use that extra hour for rest or extracurriculars.",
    icon: "⏰"
  },
  {
    title: "Flexible Scheduling",
    desc: "Sessions are planned around your family's busy schedule, not the school's bell.",
    icon: "📅"
  },
  {
    title: "Boosted Confidence",
    desc: "One-on-one encouragement helps introverted students find their voice and build academic self-esteem.",
    icon: "🚀"
  },
  {
    title: "Custom Learning Speed",
    desc: "Move fast through easy topics and take all the time needed for the tough ones.",
    icon: "⚡"
  }
];

export const MOCK_TUTORS = [
  {
    id: "1",
    name: "Dr. Sarah Johnson",
    subjects: ["Mathematics", "Physics"],
    experience: 12,
    rating: 4.9,
    hourlyRate: 65,
    bio: "Ph.D. in Applied Mathematics with over a decade of experience in making complex concepts simple for students.",
    imageUrl: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&q=80&w=400",
    availability: ["Mon", "Wed", "Fri"]
  },
  {
    id: "2",
    name: "Mark Thompson",
    subjects: ["English Literature", "History"],
    experience: 8,
    rating: 4.8,
    hourlyRate: 50,
    bio: "Passionate educator focusing on critical thinking and creative writing for middle and high school students.",
    imageUrl: "https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?auto=format&fit=crop&q=80&w=400",
    availability: ["Tue", "Thu", "Sat"]
  },
  {
    id: "3",
    name: "Emily Chen",
    subjects: ["Chemistry", "Biology"],
    experience: 5,
    rating: 4.7,
    hourlyRate: 45,
    bio: "Medical professional with a knack for biological sciences. Specializes in intensive exam preparation and college entrance tests.",
    imageUrl: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&q=80&w=400",
    availability: ["Weekends"]
  }
];

export const TESTIMONIALS: Testimonial[] = [
  {
    id: "t1",
    name: "Priya Sharma",
    role: "Parent of Grade 10 Student",
    content: "Arisu connected us with a Math tutor who completely changed my son's perspective. He went from a C to an A- in just three months!",
    avatar: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&q=80&w=200"
  },
  {
    id: "t2",
    name: "David Miller",
    role: "Parent of Grade 12 Student",
    content: "The convenience of having a high-quality Physics teacher come to our home is unmatched. The vetting process Arisu uses is truly rigorous.",
    avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=200"
  },
  {
    id: "t3",
    name: "Anjali Gupta",
    role: "Medical Aspirant",
    content: "My Biology tutor from Arisu didn't just teach the syllabus; she taught me how to handle exam pressure. Highly recommended!",
    avatar: "https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=crop&q=80&w=200"
  }
];
