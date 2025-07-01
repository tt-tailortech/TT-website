export const solutionDiagrams = {
  'community-security': {
    title: 'Community Security System Architecture',
    description: 'Explore how our community security solution integrates various components to create a comprehensive protection system.',
    elements: [
      {
        id: 'sensors',
        title: 'Smart Sensors',
        description: 'Strategically placed sensors monitor community areas for unusual activity, including motion detection, sound analysis, and environmental changes.',
        additionalInfo: 'Our sensors use AI to differentiate between normal and suspicious activities, reducing false alarms by up to 85%.',
        position: { top: 25, left: 20 },
        showInSimple: true,
        icon: (
          <svg className="h-5 w-5 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 3v2m6-2v2M9 19v2m6-2v2M5 9H3m2 6H3m18-6h-2m2 6h-2M7 19h10a2 2 0 002-2V7a2 2 0 00-2-2H7a2 2 0 00-2 2v10a2 2 0 002 2zM9 9h6v6H9V9z" />
          </svg>
        )
      },
      {
        id: 'central-system',
        title: 'Central Processing System',
        description: 'The core system that receives, analyzes, and manages data from all connected devices and sensors throughout the community.',
        additionalInfo: 'Utilizes edge computing for real-time processing and cloud integration for advanced analytics and storage.',
        position: { top: 40, left: 50 },
        showInSimple: true,
        icon: (
          <svg className="h-5 w-5 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 3v2m6-2v2M9 19v2m6-2v2M5 9H3m2 6H3m18-6h-2m2 6h-2M7 19h10a2 2 0 002-2V7a2 2 0 00-2-2H7a2 2 0 00-2 2v10a2 2 0 002 2zM9 9h6v6H9V9z" />
          </svg>
        )
      },
      {
        id: 'control-access',
        title: 'Access Control',
        description: 'Manages entry points with customizable permissions for residents, visitors, and service providers.',
        additionalInfo: 'Supports multiple authentication methods including RFID cards, mobile apps, biometrics, and traditional keys.',
        position: { top: 30, left: 80 },
        showInSimple: true,
        icon: (
          <svg className="h-5 w-5 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
          </svg>
        )
      },
      {
        id: 'alert-system',
        title: 'Alert System',
        description: 'Delivers timely notifications to residents, security personnel, and emergency services when security events are detected.',
        additionalInfo: 'Configurable alerts can be sent via multiple channels including mobile notifications, SMS, email, and in-home displays.',
        position: { top: 65, left: 30 },
        showInSimple: true,
        icon: (
          <svg className="h-5 w-5 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9" />
          </svg>
        )
      },
      {
        id: 'monitoring-dashboard',
        title: 'Monitoring Dashboard',
        description: 'Provides security personnel with a comprehensive view of the entire system status, allowing for effective oversight and management.',
        additionalInfo: 'Features customizable views, real-time updates, incident logs, and analytics for security improvement.',
        position: { top: 70, left: 75 },
        showInSimple: true,
        icon: (
          <svg className="h-5 w-5 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
          </svg>
        )
      }
    ]
  },
  'environmental-monitoring': {
    title: 'Environmental Monitoring System',
    description: 'Discover the components that work together to monitor and analyze environmental conditions.',
    elements: [
      {
        id: 'field-sensors',
        title: 'Field Sensors',
        description: 'Distributed sensors that collect data on water levels, air quality, temperature, humidity, and other environmental parameters.',
        additionalInfo: 'Weather-resistant, energy-efficient sensors with multiple power options including solar and battery.',
        position: { top: 25, left: 15 },
        showInSimple: true,
        icon: (
          <svg className="h-5 w-5 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
          </svg>
        )
      },
      {
        id: 'data-transmission',
        title: 'Data Transmission Network',
        description: 'Communication infrastructure that reliably transfers data from field sensors to the central system, even in challenging conditions.',
        additionalInfo: 'Utilizes multiple protocols (LoRaWAN, Cellular, WiFi) for redundancy and coverage optimization.',
        position: { top: 35, left: 40 },
        showInSimple: true,
        icon: (
          <svg className="h-5 w-5 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8.111 16.404a5.5 5.5 0 017.778 0M12 20h.01m-7.08-7.071c3.904-3.905 10.236-3.905 14.141 0M1.394 9.393c5.857-5.857 15.355-5.857 21.213 0" />
          </svg>
        )
      },
      {
        id: 'analysis-engine',
        title: 'Analysis Engine',
        description: 'Sophisticated algorithms that process environmental data to identify patterns, predict changes, and detect potential hazards.',
        additionalInfo: 'Combines historical data with real-time inputs to provide accurate forecasting and trending analysis.',
        position: { top: 30, left: 70 },
        showInSimple: true,
        icon: (
          <svg className="h-5 w-5 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 17v-2m3 2v-4m3 4v-6m2 10H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
          </svg>
        )
      },
      {
        id: 'visualization',
        title: 'Data Visualization',
        description: 'Interactive dashboards that present complex environmental data in easily understandable formats for decision-makers.',
        additionalInfo: 'Customizable views with maps, charts, and graphs that reveal insights at various geographical and temporal scales.',
        position: { top: 60, left: 55 },
        showInSimple: true,
        icon: (
          <svg className="h-5 w-5 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 3.055A9.001 9.001 0 1020.945 13H11V3.055z" />
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20.488 9H15V3.512A9.025 9.025 0 0120.488 9z" />
          </svg>
        )
      },
      {
        id: 'alert-system',
        title: 'Alert System',
        description: 'Automated notification system that alerts relevant parties when environmental parameters exceed defined thresholds.',
        additionalInfo: 'Configurable alerting rules with escalation paths and integration with emergency management systems.',
        position: { top: 70, left: 25 },
        showInSimple: true,
        icon: (
          <svg className="h-5 w-5 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
          </svg>
        )
      },
      {
        id: 'historical-data',
        title: 'Historical Data Repository',
        description: 'Secure storage for all collected environmental data, enabling long-term analysis and trend identification.',
        additionalInfo: 'Utilizes cloud-based storage with redundancy and provides APIs for integration with other systems.',
        position: { top: 75, left: 80 },
        showInSimple: false,
        icon: (
          <svg className="h-5 w-5 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 7v10c0 2.21 3.582 4 8 4s8-1.79 8-4V7M4 7c0 2.21 3.582 4 8 4s8-1.79 8-4M4 7c0-2.21 3.582-4 8-4s8 1.79 8 4m0 5c0 2.21-3.582 4-8 4s-8-1.79-8-4" />
          </svg>
        )
      }
    ]
  },
  'smart-data-systems': {
    title: 'Smart Data System Architecture',
    description: 'Understand the components that transform raw data into actionable insights.',
    elements: [
      {
        id: 'data-sources',
        title: 'Data Sources',
        description: 'Multiple input channels that collect data from various systems, devices, databases, and external APIs.',
        additionalInfo: 'Supports structured, semi-structured, and unstructured data types with flexible connector options.',
        position: { top: 25, left: 20 },
        showInSimple: true,
        icon: (
          <svg className="h-5 w-5 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
          </svg>
        )
      },
      {
        id: 'data-processing',
        title: 'Data Processing Engine',
        description: 'Powerful computational system that cleans, transforms, and normalizes data for analysis.',
        additionalInfo: 'Handles both batch and real-time processing with automatic scaling based on workload.',
        position: { top: 35, left: 45 },
        showInSimple: true,
        icon: (
          <svg className="h-5 w-5 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
          </svg>
        )
      },
      {
        id: 'analytics',
        title: 'Analytics Platform',
        description: 'Advanced analytics tools that apply statistical methods, machine learning, and AI to extract insights from processed data.',
        additionalInfo: 'Includes predictive modeling, pattern recognition, anomaly detection, and scenario analysis capabilities.',
        position: { top: 25, left: 70 },
        showInSimple: true,
        icon: (
          <svg className="h-5 w-5 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
          </svg>
        )
      },
      {
        id: 'dashboards',
        title: 'Custom Dashboards',
        description: 'Personalized visualization interfaces that present relevant data and insights based on user roles and needs.',
        additionalInfo: 'Interactive elements allow users to explore data, adjust parameters, and receive explanations of complex insights.',
        position: { top: 60, left: 30 },
        showInSimple: true,
        icon: (
          <svg className="h-5 w-5 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 3.055A9.001 9.001 0 1020.945 13H11V3.055z" />
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20.488 9H15V3.512A9.025 9.025 0 0120.488 9z" />
          </svg>
        )
      },
      {
        id: 'automation',
        title: 'Decision Automation',
        description: 'Automated systems that can take predefined actions based on data insights without human intervention.',
        additionalInfo: 'Rules-based and ML-powered decision engines with configurable thresholds and approval workflows.',
        position: { top: 70, left: 65 },
        showInSimple: true,
        icon: (
          <svg className="h-5 w-5 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z" />
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
          </svg>
        )
      },
      {
        id: 'security',
        title: 'Security Layer',
        description: 'Comprehensive security measures that protect sensitive data and ensure privacy compliance.',
        additionalInfo: 'Includes encryption, access controls, audit trails, and compliance monitoring for data governance.',
        position: { top: 45, left: 10 },
        showInSimple: false,
        icon: (
          <svg className="h-5 w-5 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
          </svg>
        )
      }
    ]
  },
  'agricultural-solutions': {
    title: 'Agricultural Technology System',
    description: 'Explore the integrated components that optimize agricultural operations and crop management.',
    elements: [
      {
        id: 'soil-sensors',
        title: 'Soil Monitoring System',
        description: 'Advanced sensors that track soil moisture, nutrient levels, pH, and temperature at various depths.',
        additionalInfo: 'Wireless, battery-operated sensors with solar charging capabilities for extended field deployment.',
        position: { top: 25, left: 15 },
        showInSimple: true,
        icon: (
          <svg className="h-5 w-5 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
          </svg>
        )
      },
      {
        id: 'irrigation',
        title: 'Smart Irrigation',
        description: 'Precision water distribution system that adjusts irrigation based on soil conditions, weather forecasts, and crop needs.',
        additionalInfo: 'Features multiple zone control, programmable schedules, and automatic adjustment based on sensor feedback.',
        position: { top: 35, left: 40 },
        showInSimple: true,
        icon: (
          <svg className="h-5 w-5 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7h12m0 0l-4-4m4 4l-4 4m0 6H4m0 0l4 4m-4-4l4-4" />
          </svg>
        )
      },
      {
        id: 'weather',
        title: 'Weather Monitoring',
        description: 'Local weather stations that provide accurate, farm-specific meteorological data for operational planning.',
        additionalInfo: 'Tracks temperature, humidity, rainfall, wind speed/direction, and solar radiation to support decision-making.',
        position: { top: 20, left: 60 },
        showInSimple: true,
        icon: (
          <svg className="h-5 w-5 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 15a4 4 0 004 4h9a5 5 0 10-.1-9.999 5.002 5.002 0 10-9.78 2.096A4.001 4.001 0 003 15z" />
          </svg>
        )
      },
      {
        id: 'crop-analysis',
        title: 'Crop Health Analysis',
        description: 'Visual and spectral monitoring systems that detect early signs of disease, pest infestation, or nutrient deficiencies.',
        additionalInfo: 'Utilizes multispectral imaging, computer vision, and plant stress detection algorithms.',
        position: { top: 50, left: 70 },
        showInSimple: true,
        icon: (
          <svg className="h-5 w-5 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14.828 14.828a4 4 0 01-5.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
          </svg>
        )
      },
      {
        id: 'management',
        title: 'Farm Management Platform',
        description: 'Centralized system that integrates data from all farm sensors and systems to provide actionable insights and automate tasks.',
        additionalInfo: 'Includes planning tools, record keeping, resource management, and yield forecasting capabilities.',
        position: { top: 75, left: 30 },
        showInSimple: true,
        icon: (
          <svg className="h-5 w-5 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 17v-2m3 2v-4m3 4v-6m2 10H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
          </svg>
        )
      },
      {
        id: 'harvesting',
        title: 'Harvest Prediction',
        description: 'Advanced analytics that forecast optimal harvest times and expected yields based on real-time and historical data.',
        additionalInfo: 'Combines growth modeling, weather data, and crop conditions to optimize harvesting operations.',
        position: { top: 65, left: 85 },
        showInSimple: false,
        icon: (
          <svg className="h-5 w-5 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
          </svg>
        )
      }
    ]
  }
};
