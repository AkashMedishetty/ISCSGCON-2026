const path = require('path');
const fs = require('fs');

// Load environment variables from .env.local
const envPath = path.join(__dirname, '..', '.env.local');
if (fs.existsSync(envPath)) {
  const envContent = fs.readFileSync(envPath, 'utf8');
  envContent.split('\n').forEach(line => {
    const [key, ...valueParts] = line.split('=');
    if (key && valueParts.length > 0) {
      const value = valueParts.join('=').trim();
      const cleanValue = value.replace(/^["']|["']$/g, '');
      process.env[key.trim()] = cleanValue;
    }
  });
  console.log('Environment variables loaded from .env.local');
}

const mongoose = require('mongoose');

// Configuration Schema
const configurationSchema = new mongoose.Schema({
  type: { type: String, required: true },
  key: { type: String, required: true },
  value: { type: mongoose.Schema.Types.Mixed, required: true },
  isActive: { type: Boolean, default: true },
  createdBy: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
  createdAt: { type: Date, default: Date.now },
  updatedAt: { type: Date, default: Date.now }
});

const Configuration = mongoose.models.Configuration || mongoose.model('Configuration', configurationSchema);

async function seedAllConfigurations() {
  try {
    // Connect to MongoDB
    const mongoUri = process.env.MONGODB_URI;
    if (!mongoUri) {
      console.error('❌ MONGODB_URI not found in environment variables');
      process.exit(1);
    }

    console.log('🔗 Connecting to MongoDB...');
    await mongoose.connect(mongoUri);
    console.log('✅ Connected to MongoDB');

    // 1. Pricing Configuration for ISCSGCON 2026
    console.log('💰 Seeding Pricing Configuration...');
    await Configuration.findOneAndUpdate(
      { type: 'pricing', key: 'pricing_tiers' },
      {
        type: 'pricing',
        key: 'pricing_tiers',
        value: {
          specialOffers: [],
          earlyBird: {
            name: 'Early Bird Registration',
            description: 'Early Bird Registration',
            startDate: '2025-12-01',
            endDate: '2026-02-28',
            isActive: true,
            categories: {
              'postgraduate': { amount: 2500, currency: 'INR', label: 'Postgraduate' },
              'consultant': { amount: 5000, currency: 'INR', label: 'Consultants & Practicing Clinicians' }
            }
          },
          regular: {
            name: 'Regular Registration',
            description: 'Standard registration pricing',
            startDate: '2026-03-01',
            endDate: '2026-03-13',
            isActive: true,
            categories: {
              'postgraduate': { amount: 2500, currency: 'INR', label: 'Postgraduate' },
              'consultant': { amount: 5000, currency: 'INR', label: 'Consultants & Practicing Clinicians' }
            }
          },
          onsite: {
            name: 'Spot Registration',
            description: 'Registration at the venue',
            startDate: '2026-03-14',
            endDate: '2026-03-15',
            isActive: true,
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
        },
        isActive: true,
        updatedAt: new Date()
      },
      { upsert: true, new: true }
    );

    // 2. Discount Configuration
    console.log('🎯 Seeding Discount Configuration...');
    await Configuration.findOneAndUpdate(
      { type: 'discounts', key: 'active_discounts' },
      {
        type: 'discounts',
        key: 'active_discounts',
        value: [],
        isActive: true,
        updatedAt: new Date()
      },
      { upsert: true, new: true }
    );

    // 3. Email Configuration
    console.log('📧 Updating Email Configuration...');
    await Configuration.findOneAndUpdate(
      { type: 'settings', key: 'email_settings' },
      {
        $set: {
          'value.templates.registration.enabled': true,
          'value.templates.registration.subject': 'Application Received - ISCSGCON 2026',
          'value.templates.payment.enabled': true,
          'value.templates.payment.subject': 'Payment Confirmation - ISCSGCON 2026',
          'value.templates.reminder.enabled': true,
          'value.templates.reminder.subject': 'Conference Reminder - ISCSGCON 2026',
          'value.templates.bulkEmail.enabled': true,
          'value.templates.bulkEmail.subject': 'Important Update - ISCSGCON 2026',
          updatedAt: new Date()
        }
      }
    );

    // 4. Content Configuration
    console.log('📝 Seeding Content Configuration...');
    await Configuration.findOneAndUpdate(
      { type: 'content', key: 'website_content' },
      {
        type: 'content',
        key: 'website_content',
        value: {
          heroSection: {
            title: 'ISCSGCON 2026',
            subtitle: 'Regenerative Medicine - Meet The Masters',
            description: 'Join the 8th International Conference on Stem Cells at Taj Deccan, Hyderabad on March 14-15, 2026.',
            ctaText: 'Register Now',
            backgroundImage: '/hero-bg.jpg'
          },
          aboutSection: {
            title: 'About ISCSGCON 2026',
            description: 'The Indian Stem Cell Study Group (ISCSG) proudly presents ISCSGCON 2026, bringing together leading stem cell and regenerative medicine professionals to share knowledge, innovations, and best practices.',
            highlights: [
              'Expert speakers from around the world',
              'Live Orthobiologics Workshop at NIMS',
              'Latest research presentations',
              'Networking opportunities'
            ]
          },
          venueInfo: {
            name: 'Taj Deccan',
            address: 'Hyderabad, Telangana, India',
            mapUrl: 'https://maps.google.com/...',
            facilities: ['Modern auditorium', 'Workshop labs', 'Exhibition space', 'Parking']
          },
          keyDates: {
            conferenceStart: '2026-03-14',
            conferenceEnd: '2026-03-15',
            workshopDate: '2026-03-14',
            registrationDeadline: '2026-03-13'
          }
        },
        isActive: true,
        updatedAt: new Date()
      },
      { upsert: true, new: true }
    );

    // 5. Report Configuration
    console.log('📊 Seeding Report Configuration...');
    await Configuration.findOneAndUpdate(
      { type: 'reports', key: 'report_settings' },
      {
        type: 'reports',
        key: 'report_settings',
        value: {
          exportFormats: ['csv', 'excel', 'pdf'],
          defaultFormat: 'csv',
          includeFields: {
            registrations: [
              'registrationId',
              'name',
              'email',
              'phone',
              'institution',
              'registrationType',
              'registrationDate',
              'paymentStatus',
              'amount',
              'utrNumber'
            ],
            payments: [
              'registrationId',
              'amount',
              'currency',
              'method',
              'status',
              'transactionDate',
              'utrNumber',
              'verifiedBy'
            ],
            workshops: [
              'workshopName',
              'participantName',
              'email',
              'registrationDate',
              'paymentStatus'
            ]
          },
          filters: {
            dateRange: true,
            registrationType: true,
            paymentStatus: true,
            verificationStatus: true
          }
        },
        isActive: true,
        updatedAt: new Date()
      },
      { upsert: true, new: true }
    );

    // 6. Bulk Email Configuration
    console.log('📮 Seeding Bulk Email Configuration...');
    await Configuration.findOneAndUpdate(
      { type: 'bulk_email', key: 'bulk_email_settings' },
      {
        type: 'bulk_email',
        key: 'bulk_email_settings',
        value: {
          enabled: true,
          maxRecipientsPerBatch: 50,
          delayBetweenBatches: 2000,
          maxEmailsPerDay: 1000,
          allowedSenders: ['admin', 'moderator'],
          templates: {
            welcome: {
              subject: 'Welcome to ISCSGCON 2026',
              enabled: true
            },
            reminder: {
              subject: 'Conference Reminder - ISCSGCON 2026',
              enabled: true
            },
            update: {
              subject: 'Important Update - ISCSGCON 2026',
              enabled: true
            },
            cancellation: {
              subject: 'Conference Update - ISCSGCON 2026',
              enabled: true
            }
          },
          recipientFilters: [
            'all_registered',
            'paid_only',
            'pending_payment',
            'postgraduates',
            'consultants',
            'workshop_participants'
          ]
        },
        isActive: true,
        updatedAt: new Date()
      },
      { upsert: true, new: true }
    );

    console.log('✅ All configurations seeded successfully!');

    // Display summary
    const configs = await Configuration.find({}, 'type key isActive').lean();
    console.log('\n📋 Configuration Summary:');
    configs.forEach(config => {
      console.log(`  ${config.isActive ? '✅' : '❌'} ${config.type}:${config.key}`);
    });

  } catch (error) {
    console.error('❌ Error seeding configurations:', error);
    process.exit(1);
  } finally {
    await mongoose.disconnect();
    console.log('🔌 Disconnected from MongoDB');
  }
}

// Run the seeding
seedAllConfigurations().then(() => {
  console.log('🎉 All configurations seeding completed');
  process.exit(0);
});
