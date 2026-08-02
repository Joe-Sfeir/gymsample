export type Locale = "en" | "ar" | "fr";
export type Intensity = "Low" | "Moderate" | "High";
export type ExperienceLevel = "Beginner" | "Intermediate" | "Advanced" | "All levels";
export type SessionStatus = "Available" | "Nearly full" | "Full" | "Waitlist" | "Cancelled";

export interface GymClass { id: string; slug: string; name: string; shortDescription: string; fullDescription: string; duration: number; intensity: Intensity; experienceLevel: ExperienceLevel; maximumCapacity: number; trainerIds: string[]; equipment: string[]; image: string; accentLabel: string; active: boolean }
export interface Trainer { id: string; slug: string; name: string; role: string; shortBiography: string; fullBiography: string; specialties: string[]; credentials: string[]; classIds: string[]; photo: string; socialLinks: Record<string, string>; active: boolean; placeholder: true }
export interface ScheduledSession { id: string; classId: string; trainerId: string; date: string; startTime: string; endTime: string; timeZone: string; capacity: number; bookedCount: number; status: SessionStatus; cancellationNote?: string; replacementTrainer?: string; recurring: boolean; mock: true }
export interface Membership { id: string; name: string; description: string; monthlyPrice: number; quarterlyPrice: number; annualPrice: number; currency: string; includedClasses: string; coachingSessions: string; accessTimes: string; trialEligibility: string; freezePolicySummary: string; cancellationSummary: string; featured: boolean; active: boolean; placeholder: true }
export interface Facility { id: string; name: string; description: string; zone: string; equipment: string[]; accessibilityNotes: string; image: string; svgRegionId: string; placeholder: true }
export interface TrainingDay { fullDayName: string; shortLabel: string; featuredClasses: string[]; trainer: string; intensity: Intensity; capacityState: SessionStatus; startTimes: string[]; backgroundImage: string; shortDescription: string; mock: true }
export interface Faq { question: string; answer: string }
