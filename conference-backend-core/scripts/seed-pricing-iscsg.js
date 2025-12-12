const path = require('path')
const fs = require('fs')
const mongoose = require('mongoose')

// Load env from .env.local if present
const envPath = path.join(__dirname, '..', '.env.local')
if (fs.existsSync(envPath)) {
  const lines = fs.readFileSync(envPath, 'utf8').split('\n')
  for (const line of lines) {
    const [k, ...v] = line.split('=')
    if (k && v.length) process.env[k] = v.join('=').trim().replace(/^["']|["']$/g, '')
  }
}

const configurationSchema = new mongoose.Schema({
  type: String,
  key: String,
  value: mongoose.Schema.Types.Mixed,
  isActive: { type: Boolean, default: true },
  createdBy: { type: String, default: 'system' },
}, { timestamps: true })

const Configuration = mongoose.models.Configuration || mongoose.model('Configuration', configurationSchema)

async function main() {
  const uri = process.env.MONGODB_URI
  if (!uri) {
    console.error('MONGODB_URI not set')
    process.exit(1)
  }
  await mongoose.connect(uri)

  // Pricing tiers for ISCSGCON 2026
  const pricing_tiers = {
    earlyBird: {
      name: 'Early Bird Registration', isActive: true,
      startDate: '2025-12-01',
      endDate: '2026-02-28',
      categories: {
        'postgraduate': { amount: 2500, currency: 'INR', label: 'Postgraduate' },
        'consultant': { amount: 5000, currency: 'INR', label: 'Consultants & Practicing Clinicians' }
      }
    },
    regular: {
      name: 'Regular Registration', isActive: true,
      startDate: '2026-03-01',
      endDate: '2026-03-13',
      categories: {
        'postgraduate': { amount: 2500, currency: 'INR', label: 'Postgraduate' },
        'consultant': { amount: 5000, currency: 'INR', label: 'Consultants & Practicing Clinicians' }
      }
    },
    onsite: {
      name: 'Spot Registration', isActive: true,
      startDate: '2026-03-14',
      endDate: '2026-03-15',
      categories: {
        'postgraduate': { amount: 2500, currency: 'INR', label: 'Postgraduate' },
        'consultant': { amount: 5000, currency: 'INR', label: 'Consultants & Practicing Clinicians' }
      }
    },
    workshops: [
      {
        id: 'orthobiologics-workshop',
        name: 'Live Orthobiologics Workshop',
        description: 'Hands-on workshop on orthobiologics and regenerative medicine',
        instructor: 'Dr. Lalith Mohan C',
        duration: 'Full Day',
        price: 3500,
        currency: 'INR',
        maxSeats: 50,
        venue: 'NIMS Hyderabad',
        date: '2026-03-14',
        isActive: true
      }
    ]
  }

  // Upsert pricing tiers
  await Configuration.findOneAndUpdate(
    { type: 'pricing', key: 'pricing_tiers' },
    { type: 'pricing', key: 'pricing_tiers', value: pricing_tiers, isActive: true, createdBy: 'system' },
    { upsert: true, new: true }
  )
  console.log('✅ Seeded pricing_tiers for ISCSGCON 2026')

  // Legacy registration_categories for compatibility
  await Configuration.findOneAndUpdate(
    { type: 'pricing', key: 'registration_categories' },
    { type: 'pricing', key: 'registration_categories', value: pricing_tiers.regular.categories, isActive: true, createdBy: 'system' },
    { upsert: true, new: true }
  )
  console.log('✅ Seeded registration_categories')

  // Disable all discounts by default
  await Configuration.findOneAndUpdate(
    { type: 'discounts', key: 'active_discounts' },
    { type: 'discounts', key: 'active_discounts', value: [], isActive: true, createdBy: 'system' },
    { upsert: true, new: true }
  )
  console.log('✅ Cleared active_discounts')

  await mongoose.connection.close()
}

main().catch(err => { console.error(err); process.exit(1) })
