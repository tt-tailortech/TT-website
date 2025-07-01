export const solutions = [
  {
    id: 'community-security',
    title: 'Community Security',
    shortDescription: 'Advanced security systems designed to protect and monitor community spaces effectively.',
    i18nKey: 'community-security',
    description: 'Our community security solutions leverage cutting-edge technology to provide comprehensive protection for neighborhoods, business districts, and residential communities.',
    image: '/images/solutions/community-security/community-security-hero.png',
    icon: 'shield',
    features: [
      {
        title: 'Smart Surveillance',
        description: 'AI-powered cameras that detect unusual activities and alert security personnel.'
      },
      {
        title: 'Community Alert System',
        description: 'Instant notifications to community members during emergencies or security events.'
      },
      {
        title: 'Access Control',
        description: 'Secure entry points with customizable permissions for residents and visitors.'
      },
      {
        title: 'Central Monitoring',
        description: 'Comprehensive dashboard for security personnel to oversee all security systems.'
      }
    ],
    benefits: [
      'Enhanced community safety and peace of mind',
      'Reduced response time to security incidents',
      'Customizable to specific community needs',
      'Integration with existing security infrastructure',
      'Data-driven insights for security improvement'
    ],
    applications: [
      'Residential communities',
      'Business districts',
      'School campuses',
      'Public spaces',
      'Mixed-use developments'
    ],
    technicalDetails: {
      platforms: ['Web', 'Mobile (iOS & Android)'],
      connectivity: ['WiFi', '4G/5G', 'Ethernet'],
      integrations: ['Existing camera systems', 'Door access systems', 'Emergency services'],
      dataSecurity: 'End-to-end encryption with secure cloud storage'
    }
  },
  {
    id: 'environmental-monitoring',
    title: 'Environmental Monitoring',
    shortDescription: 'Sophisticated systems for tracking and analyzing environmental conditions in real-time.',
    i18nKey: 'environmental-monitoring',
    description: 'Our environmental monitoring solutions provide accurate, reliable data on environmental conditions, enabling timely responses to changing circumstances and comprehensive analysis for long-term planning.',
    image: '/images/solutions/environmental-monitoring/environmental-hero.png',
    icon: 'chart-bar',
    features: [
      {
        title: 'Multi-parameter Sensors',
        description: 'Track air quality, water levels, temperature, humidity, and more in real-time.'
      },
      {
        title: 'Flood Prediction',
        description: 'Advanced algorithms to predict potential flooding based on rainfall and water level data.'
      },
      {
        title: 'Data Visualization',
        description: 'Intuitive dashboards presenting complex environmental data in easily understandable formats.'
      },
      {
        title: 'Automated Alerts',
        description: 'Configurable notification system for when parameters exceed safe thresholds.'
      }
    ],
    benefits: [
      'Early warning for environmental hazards',
      'Data-driven environmental management',
      'Reduced response time to changing conditions',
      'Historical data for trend analysis',
      'Compliance with environmental regulations'
    ],
    applications: [
      'Municipal flood management',
      'Agricultural operations',
      'Industrial facilities',
      'Research institutions',
      'Conservation areas'
    ],
    technicalDetails: {
      sensors: ['Water level', 'Air quality', 'Temperature', 'Humidity', 'Soil moisture'],
      connectivity: ['LoRaWAN', 'Cellular', 'WiFi'],
      powerOptions: ['Solar', 'Battery', 'Direct'],
      dataSecurity: 'Secure cloud storage with redundant backups'
    }
  },
  {
    id: 'smart-data-systems',
    title: 'Smart Data Systems',
    shortDescription: 'Intelligent data collection and analysis platforms for informed decision-making.',
    i18nKey: 'smart-data',
    description: 'Our smart data systems transform raw data into actionable insights, helping organizations make informed decisions, optimize operations, and identify new opportunities.',
    image: '/images/solutions/smart-data-systems/smart-data-hero.png',
    icon: 'chip',
    features: [
      {
        title: 'Automated Data Collection',
        description: 'Streamlined gathering of data from multiple sources without manual intervention.'
      },
      {
        title: 'Advanced Analytics',
        description: 'AI and machine learning algorithms that uncover patterns and insights in complex datasets.'
      },
      {
        title: 'Predictive Modeling',
        description: 'Forecast future trends and outcomes based on historical and real-time data.'
      },
      {
        title: 'Custom Dashboards',
        description: 'Personalized visualization interfaces tailored to specific organizational roles and needs.'
      }
    ],
    benefits: [
      'Data-driven decision making',
      'Operational efficiency improvements',
      'Identifying new business opportunities',
      'Reduced manual data processing',
      'Scalable to growing data needs'
    ],
    applications: [
      'Business intelligence',
      'Public service optimization',
      'Healthcare analytics',
      'Supply chain management',
      'Customer behavior analysis'
    ],
    technicalDetails: {
      dataProcessing: 'Cloud-based with edge computing capabilities',
      algorithms: 'Proprietary AI and machine learning models',
      integration: 'API-based connections to existing systems',
      security: 'Role-based access control with encryption'
    }
  },
  {
    id: 'agricultural-solutions',
    title: 'Agricultural Solutions',
    shortDescription: 'Technology-driven systems to enhance farming efficiency and crop yield.',
    description: 'Our agricultural solutions combine IoT sensors, data analytics, and automation to help farmers optimize resource usage, monitor crop health, and maximize yields while minimizing environmental impact.',
    image: '/images/agriculture.jpg',
    icon: 'plant',
    features: [
      {
        title: 'Soil Monitoring',
        description: 'Real-time tracking of soil moisture, nutrients, and pH levels for optimal growing conditions.'
      },
      {
        title: 'Irrigation Management',
        description: 'Smart water distribution systems that respond to actual plant needs and weather conditions.'
      },
      {
        title: 'Crop Health Analysis',
        description: 'Early detection of pest infestations, diseases, and nutrient deficiencies using imaging technology.'
      },
      {
        title: 'Harvest Prediction',
        description: 'Data-driven forecasting of optimal harvest times and expected yields.'
      }
    ],
    benefits: [
      'Reduced water and resource usage',
      'Increased crop yields and quality',
      'Early detection of crop issues',
      'Lower labor costs through automation',
      'Sustainable farming practices'
    ],
    applications: [
      'Large-scale farming operations',
      'Specialty crop producers',
      'Indoor growing facilities',
      'Research farms',
      'Community agricultural projects'
    ],
    technicalDetails: {
      sensors: ['Soil moisture', 'Temperature', 'Light levels', 'Nutrient levels'],
      connectivity: ['LoRaWAN', 'WiFi', 'Cellular'],
      integration: 'Compatible with common farm management software',
      powerOptions: 'Solar-powered sensors for remote deployment'
    }
  }
];
