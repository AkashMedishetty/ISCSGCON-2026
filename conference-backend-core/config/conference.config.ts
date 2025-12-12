/**
 * Conference Configuration
 * 
 * This is the ONLY file you need to edit for a new conference.
 * All other components will automatically use these settings.
 */

export interface ConferenceConfig {
  // Basic Information
  name: string
  shortName: string
  registrationPrefix?: string  // Optional: Custom prefix for IDs (e.g., "NV2026")
  organizationName: string
  tagline?: string
  
  // Event Dates
  eventDate: {
    start: string // YYYY-MM-DD
    end: string   // YYYY-MM-DD
  }
  
  // Venue Information
  venue: {
    name: string
    address?: string
    city: string
    state: string
    country: string
    pincode?: string
    description?: string
    facilities?: string[]
    accessibility?: string[]
    mapUrl?: string
    googleMapsLink?: string
    aboutCity?: {
      title?: string
      description?: string
      highlights?: Array<{
        title: string
        description: string
        icon: string
      }>
    }
  }
  
  // Contact Information
  contact: {
    email: string
    phone: string
    website: string
    supportEmail?: string
    abstractsEmail?: string
  }
  
  // Theme Colors - These will be applied throughout the system
  theme: {
    primary: string      // Main brand color (buttons, headers)
    secondary: string    // Accent color (links, highlights)
    accent: string       // Special highlights (warnings, alerts)
    success: string      // Success states
    error: string        // Error states
    warning: string      // Warning states
    dark: string         // Dark text and elements
    light: string        // Light backgrounds
  }
  
  // Registration Configuration
  registration: {
    enabled: boolean
    startDate?: string   // YYYY-MM-DD
    endDate?: string     // YYYY-MM-DD
    
    // Form Fields Configuration
    formFields: {
      titles: string[]              // ['Dr.', 'Prof.', 'Mr.', 'Mrs.', 'Ms.']
      designations: string[]        // ['Consultant', 'PG/Student']
      relationshipTypes: string[]   // ['Spouse', 'Child', 'Parent', 'Other']
      paymentMethods: string[]      // ['bank-transfer', 'online', 'cash']
    }
    
    // Registration Categories
    categories: {
      key: string
      label: string
      description?: string
      requiresMembership?: boolean
      membershipField?: string
    }[]
    
    // Workshop Configuration
    workshopsEnabled: boolean
    maxWorkshopsPerUser?: number
    
    // Accompanying Person
    accompanyingPersonEnabled: boolean
    maxAccompanyingPersons?: number
  }
  
  // Payment Configuration
  payment: {
    enabled: boolean
    currency: string
    currencySymbol: string
    
    // Payment Methods
    methods: {
      razorpay: boolean
      bankTransfer: boolean
      cash: boolean
    }
    
    // Bank Details (for bank transfer)
    bankDetails?: {
      accountName: string
      accountNumber: string
      bankName: string
      ifscCode: string
      branchName?: string
    }
    
    // Pricing Tiers
    tiers: {
      earlyBird?: {
        enabled: boolean
        startDate: string
        endDate: string
        label: string
      }
      regular: {
        enabled: boolean
        startDate: string
        endDate: string
        label: string
      }
      onsite?: {
        enabled: boolean
        startDate: string
        endDate: string
        label: string
      }
    }
  }
  
  // Abstract Submission
  abstracts: {
    enabled: boolean
    submissionWindow?: {
      enabled: boolean
      start: string
      end: string
    }
    maxAbstractsPerUser: number
    
    // Tracks (e.g., Free Paper, Poster, E-Poster)
    tracks: {
      key: string
      label: string
      enabled: boolean
      categories?: string[]
      subcategories?: string[]
    }[]
    
    // File Upload Settings
    allowedInitialFileTypes: string[]
    allowedFinalFileTypes: string[]
    maxFileSizeMB: number
  }
  
  // Email Branding
  email: {
    fromName: string
    replyTo: string
    footerText?: string
    logoUrl?: string
  }
  
  // Social Media
  social?: {
    facebook?: string
    twitter?: string
    instagram?: string
    linkedin?: string
    youtube?: string
  }
  
  // Features Toggle
  features: {
    userDashboard: boolean
    adminPanel: boolean
    reviewerPortal: boolean
    abstractSubmission: boolean
    workshopBooking: boolean
    certificateGeneration: boolean
    qrCodeGeneration: boolean
  }
}

/**
 * DEFAULT CONFIGURATION
 * ISCSGCON 2026 - 8th International Conference on Stem Cells
 */
export const conferenceConfig: ConferenceConfig = {
  // Basic Information
  name: "8th International Conference on Stem Cells",
  shortName: "ISCSGCON 2026",
  registrationPrefix: "ISCSG2026",  // Prefix for registration IDs (ISCSG2026-001, ISCSG2026-002, etc.)
  organizationName: "Indian Stem Cell Study Group (ISCSG)",
  tagline: "Regenerative Medicine - Meet The Masters",
  
  // Event Dates
  eventDate: {
    start: "2026-03-14",
    end: "2026-03-15"
  },
  
  // Venue
  venue: {
    name: "Taj Deccan",
    address: "Road No. 1, Banjara Hills",
    city: "Hyderabad",
    state: "Telangana",
    country: "India",
    pincode: "500034",
    description: "Taj Deccan is a luxury 5-star hotel in the heart of Hyderabad, offering world-class conference facilities and hospitality.",
    facilities: [
      "Grand Ballroom (500+ capacity)",
      "Multiple Conference Halls",
      "State-of-the-art AV Equipment",
      "High-Speed Wi-Fi",
      "Live Workshop Facilities",
      "Exhibition Area",
      "Premium Catering",
      "Valet Parking"
    ],
    accessibility: [
      "20 mins from Rajiv Gandhi International Airport",
      "5 mins from Banjara Hills",
      "Central location with easy access",
      "Wheelchair accessible"
    ],
    mapUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3807.0!2d78.4!3d17.4!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMTfCsDI0JzAwLjAiTiA3OMKwMjQnMDAuMCJF!5e0!3m2!1sen!2sin!4v1234567890",
    googleMapsLink: "https://maps.google.com/?q=Taj+Deccan+Hyderabad",
    aboutCity: {
      title: "About Hyderabad",
      description: "Hyderabad, the City of Pearls, is a vibrant metropolis that seamlessly blends rich history with modern innovation. Known for its world-class healthcare facilities, premier medical institutions, and warm hospitality.",
      highlights: [
        {
          title: "Medical Excellence",
          description: "Home to premier medical institutions like NIMS, Yashoda Hospitals, and leading research centers in regenerative medicine.",
          icon: "Hospital"
        },
        {
          title: "Modern Infrastructure",
          description: "World-class convention centers, luxury hotels, and excellent transportation make it ideal for international conferences.",
          icon: "Building"
        },
        {
          title: "Cultural Heritage",
          description: "Rich history with iconic landmarks like Charminar, Golconda Fort, and vibrant local cuisine including the famous Hyderabadi Biryani.",
          icon: "Landmark"
        }
      ]
    }
  },
  
  // Contact
  contact: {
    email: "info@iscsgcon2026hyderabad.com",
    phone: "+91 8179882875",
    website: "https://iscsgcon2026hyderabad.com",
    supportEmail: "support@iscsgcon2026hyderabad.com",
    abstractsEmail: "abstracts@iscsgcon2026hyderabad.com"
  },
  
  // Theme Colors - ISCSGCON Purple/Violet palette
  theme: {
    primary: "#932f6d",      // Berry Blush - main brand color
    secondary: "#e07be0",    // Orchid - accents  
    accent: "#420039",       // Midnight Violet - highlights
    success: "#10b981",      // Green - success states
    error: "#ef4444",        // Red - errors
    warning: "#f59e0b",      // Amber - warnings
    dark: "#420039",         // Midnight Violet - dark text
    light: "#f6f2ff"         // Lavender Mist - light backgrounds
  },
  
  // Registration
  registration: {
    enabled: true,
    startDate: "2025-06-01",
    endDate: "2026-03-13",
    
    // Form field options (used in dropdowns and validation)
    formFields: {
      titles: ['Dr.', 'Prof.', 'Mr.', 'Mrs.', 'Ms.'],
      designations: ['Consultant', 'PG/Student'],
      relationshipTypes: ['Spouse', 'Child', 'Parent', 'Friend', 'Colleague', 'Other'],
      paymentMethods: ['bank-transfer', 'online', 'pay-now', 'cash']
    },
    
    categories: [
      {
        key: "iscsg-member",
        label: "ISCSG Member",
        requiresMembership: true,
        membershipField: "membershipNumber"
      },
      {
        key: "consultant",
        label: "Consultant / Practicing Clinician"
      },
      {
        key: "postgraduate",
        label: "Postgraduate"
      },
      {
        key: "international",
        label: "International Delegate"
      },
      {
        key: "complimentary",
        label: "Complimentary Registration"
      }
    ],
    
    workshopsEnabled: true,
    maxWorkshopsPerUser: 3,
    
    accompanyingPersonEnabled: true,
    maxAccompanyingPersons: 2
  },
  
  // Payment
  payment: {
    enabled: true,
    currency: "INR",
    currencySymbol: "₹",
    
    methods: {
      razorpay: true,
      bankTransfer: true,
      cash: true
    },
    
    bankDetails: {
      accountName: "ISCSGCON 2026",
      accountNumber: "1234567890",
      bankName: "State Bank of India",
      ifscCode: "SBIN0001234",
      branchName: "Hyderabad Main Branch"
    },
    
    tiers: {
      earlyBird: {
        enabled: true,
        startDate: "2025-06-01",
        endDate: "2025-12-31",
        label: "Early Bird"
      },
      regular: {
        enabled: true,
        startDate: "2026-01-01",
        endDate: "2026-03-10",
        label: "Regular"
      },
      onsite: {
        enabled: true,
        startDate: "2026-03-11",
        endDate: "2026-03-15",
        label: "Late / Spot Registration"
      }
    }
  },
  
  // Abstracts - Stem Cell Categories
  abstracts: {
    enabled: true,
    submissionWindow: {
      enabled: true,
      start: "2025-08-01",
      end: "2026-02-28"
    },
    maxAbstractsPerUser: 5,
    
    tracks: [
      {
        key: "orthopedics",
        label: "Orthopedics",
        enabled: true,
        categories: ["Cartilage Regeneration", "Bone Healing", "Tendon Repair", "Avascular Necrosis (AVN)"]
      },
      {
        key: "ophthalmology",
        label: "Ophthalmology",
        enabled: true,
        categories: ["Corneal Repair", "Retinal Therapy", "Ocular Surface Healing"]
      },
      {
        key: "dermatology",
        label: "Dermatology",
        enabled: true,
        categories: ["Wound Healing", "Hair Regeneration", "Scar Modulation"]
      },
      {
        key: "plastic-surgery",
        label: "Plastic Surgery",
        enabled: true,
        categories: ["Soft-tissue Augmentation", "Burn Reconstruction", "Fat-derived Therapies"]
      },
      {
        key: "obstetrics-gynecology",
        label: "Obstetrics & Gynecology",
        enabled: true,
        categories: ["Cord Banking", "Endometrial Regeneration", "Ovarian Restoration"]
      },
      {
        key: "neurology",
        label: "Neurology",
        enabled: true,
        categories: ["Neural Repair", "Stroke Recovery", "Spinal Regeneration"]
      },
      {
        key: "dentistry",
        label: "Dentistry",
        enabled: true,
        categories: ["Pulp Regeneration", "Periodontal Repair", "Bone Graft Enhancement"]
      },
      {
        key: "ent",
        label: "ENT",
        enabled: true,
        categories: ["Airway Reconstruction", "Hearing Restoration", "Cartilage Repair"]
      },
      {
        key: "poster",
        label: "Poster Presentation",
        enabled: true
      },
      {
        key: "e-poster",
        label: "E-Poster",
        enabled: true
      }
    ],
    
    allowedInitialFileTypes: [
      "application/msword",
      "application/vnd.openxmlformats-officedocument.wordprocessingml.document"
    ],
    allowedFinalFileTypes: [
      "application/vnd.ms-powerpoint",
      "application/vnd.openxmlformats-officedocument.presentationml.presentation"
    ],
    maxFileSizeMB: 10
  },
  
  // Email
  email: {
    fromName: "ISCSGCON 2026",
    replyTo: "noreply@iscsgcon2026hyderabad.com",
    footerText: "© 2026 ISCSGCON - Indian Stem Cell Study Group. All rights reserved.",
    logoUrl: "/images/logo.png"
  },
  
  // Social Media
  social: {
    facebook: "https://facebook.com/iscsg",
    twitter: "https://twitter.com/iscsg",
    instagram: "https://instagram.com/iscsg",
    linkedin: "https://linkedin.com/company/iscsg"
  },
  
  // Features
  features: {
    userDashboard: true,
    adminPanel: true,
    reviewerPortal: true,
    abstractSubmission: true,
    workshopBooking: true,
    certificateGeneration: true,
    qrCodeGeneration: true
  }
}

/**
 * Helper function to get conference config
 * Can be extended to support database-driven config
 */
export function getConferenceConfig(): ConferenceConfig {
  return conferenceConfig
}

/**
 * Get current pricing tier based on date
 */
export function getCurrentPricingTier(): string {
  const today = new Date()
  const config = conferenceConfig.payment.tiers
  
  if (config.earlyBird?.enabled) {
    const start = new Date(config.earlyBird.startDate)
    const end = new Date(config.earlyBird.endDate)
    if (today >= start && today <= end) return 'earlyBird'
  }
  
  if (config.regular?.enabled) {
    const start = new Date(config.regular.startDate)
    const end = new Date(config.regular.endDate)
    if (today >= start && today <= end) return 'regular'
  }
  
  if (config.onsite?.enabled) {
    const start = new Date(config.onsite.startDate)
    const end = new Date(config.onsite.endDate)
    if (today >= start && today <= end) return 'onsite'
  }
  
  return 'regular'
}

/**
 * Check if registration is currently open
 */
export function isRegistrationOpen(): boolean {
  const config = conferenceConfig.registration
  if (!config.enabled) return false
  
  if (!config.startDate || !config.endDate) return true
  
  const today = new Date()
  const start = new Date(config.startDate)
  const end = new Date(config.endDate)
  
  return today >= start && today <= end
}

/**
 * Check if abstract submission is currently open
 */
export function isAbstractSubmissionOpen(): boolean {
  const config = conferenceConfig.abstracts
  if (!config.enabled) return false
  
  if (!config.submissionWindow?.enabled) return true
  
  const today = new Date()
  const start = new Date(config.submissionWindow.start)
  const end = new Date(config.submissionWindow.end)
  
  return today >= start && today <= end
}

/**
 * Get admin email derived from contact email domain
 * Example: info@iscsgcon2026hyderabad.com -> admin@iscsgcon2026hyderabad.com
 */
export function getAdminEmail(): string {
  const domain = conferenceConfig.contact.email.split('@')[1]
  return `admin@${domain}`
}

/**
 * Get registration ID prefix
 * Uses registrationPrefix if defined, otherwise derives from shortName
 * Example: "ISCSG2026" or "ISCSGCON2026" (from shortName with spaces removed)
 */
export function getRegistrationPrefix(): string {
  return conferenceConfig.registrationPrefix || conferenceConfig.shortName.replace(/\s+/g, '')
}

/**
 * Get email subject with conference name
 * Example: getEmailSubject("Registration Confirmation") -> "Registration Confirmation - ISCSGCON 2026"
 */
export function getEmailSubject(type: string): string {
  return `${type} - ${conferenceConfig.shortName}`
}

/**
 * Get category label from key
 * Returns the label for a registration category, or the key itself if not found
 * Example: getCategoryLabel("iscsg-member") -> "ISCSG Member"
 */
export function getCategoryLabel(key: string): string {
  const category = conferenceConfig.registration.categories.find(c => c.key === key)
  return category?.label || key
}

/**
 * Get all valid category keys
 * Returns an array of all registration category keys defined in config
 * Example: ["iscsg-member", "consultant", "postgraduate", "international", "complimentary"]
 */
export function getCategoryKeys(): string[] {
  return conferenceConfig.registration.categories.map(c => c.key)
}

/**
 * Check if a category key is valid
 * Returns true if the key exists in the registration categories
 */
export function isValidCategoryKey(key: string): boolean {
  return getCategoryKeys().includes(key)
}
