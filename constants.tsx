
import { NavItem, Service, Industry, CaseStudy, JobListing, Platform } from './types';

export const NAVIGATION: NavItem[] = [
  { label: 'Home', path: '/' },
  { label: 'Services', path: '/services' },
  { label: 'Industries', path: '/industries' },
  { label: 'Platforms', path: '/platforms' },
  { label: 'Case Studies', path: '/case-studies' },
  { label: 'Careers', path: '/careers' },
  { label: 'About', path: '/about' },
  { label: 'Contact', path: '/contact' }
];

export const SERVICES: Service[] = [
  {
    id: 'cloud-modernization',
    title: 'Cloud Modernization',
    description: 'Accelerate your cloud journey with our "Modernization Engineering" approach, optimizing workloads for agility and scale.',
    icon: '☁️',
    benefits: ['40% reduction in infra costs', 'Enhanced developer productivity', 'Built-in security compliance'],
    approach: 'We assess, migrate, and modernize applications using cloud-native patterns like microservices and serverless.',
    outcome: 'A resilient, high-performance digital backbone ready for global scale.'
  },
  {
    id: 'gen-ai',
    title: 'Generative AI & Data',
    description: 'Transform raw enterprise data into competitive intelligence with proprietary AI frameworks and LLM integrations.',
    icon: '🧠',
    benefits: ['Automated knowledge discovery', 'Personalized customer at scale', 'Data-driven forecasting'],
    approach: 'Integrating modern data stacks (Snowflake/Databricks) with custom-tuned AI models and robust MLOps.',
    outcome: 'Intelligent systems that think, learn, and act on real-time business insights.'
  },
  {
    id: 'digital-engineering',
    title: 'Digital Engineering',
    description: 'Building next-generation digital products through human-centric design and agile engineering excellence.',
    icon: '💻',
    benefits: ['Faster time-to-market', 'Superior user engagement', 'Scalable product lifecycle'],
    approach: 'Utilizing DevSecOps, TDD, and modular architectures to build products that users love.',
    outcome: 'High-quality digital products that define new market categories.'
  },
  {
    id: 'enterprise-apps',
    title: 'Enterprise Applications',
    description: 'Modernizing core business processes through SAP, Microsoft Dynamics, and Salesforce implementations.',
    icon: '🏢',
    benefits: ['Seamless process integration', 'Unified customer view', 'Operational transparency'],
    approach: 'Expert-led implementation focusing on business outcomes rather than just technical deployment.',
    outcome: 'A connected enterprise with optimized workflows and zero-friction operations.'
  }
];

export const INDUSTRIES: Industry[] = [
  {
    id: 'retail',
    name: 'Retail & CPG',
    icon: '🛒',
    description: 'Driving omnichannel excellence through unified commerce platforms.',
    details: 'MIRAi helps retailers integrate physical and digital touchpoints, optimize supply chains with AI, and deliver hyper-personalized loyalty programs.'
  },
  {
    id: 'bfsi',
    name: 'Banking & Finance',
    icon: '🏦',
    description: 'Modernizing legacy cores and enabling secure fintech innovation.',
    details: 'From core banking migration to high-frequency trading platforms, we ensure security, compliance, and 24/7 reliability.'
  },
  {
    id: 'healthcare',
    name: 'Healthcare',
    icon: '🏥',
    description: 'Advancing patient care through interoperable data and digital health.',
    details: 'We build HIPAA-compliant platforms that connect providers, patients, and insurers for better outcomes and reduced costs.'
  },
  {
    id: 'mfg',
    name: 'Manufacturing',
    icon: '⚙️',
    description: 'Enabling Industry 4.0 with IoT, digital twins, and automation.',
    details: 'Optimize production cycles, predictive maintenance, and global logistics through connected intelligence.'
  },
  {
    id: 'tech',
    name: 'Technology',
    icon: '🚀',
    description: 'Helping software companies build, scale, and modernize their IP.',
    details: 'We act as an extended engineering arm for the world\'s leading ISVs and tech startups.'
  }
];

export const PLATFORMS: Platform[] = [
  {
    id: 'mirai-lightning',
    name: 'MIRAi Lightning',
    tagline: 'Modernization Accelerator',
    description: 'Our proprietary framework that automates 60% of legacy application modernization to cloud-native architectures.',
    icon: '⚡',
    features: ['Auto-discovery of code dependencies', 'Containerization blueprints', 'Automated CI/CD injection']
  },
  {
    id: 'mirai-spark',
    name: 'MIRAi Spark',
    tagline: 'Data Intelligence Hub',
    description: 'A pre-built data fabric that connects disparate enterprise sources into a unified AI-ready data lake in weeks, not months.',
    icon: '✨',
    features: ['Pre-configured ETL connectors', 'Governance by design', 'Built-in ML workbench']
  }
];

export const CASE_STUDIES: CaseStudy[] = [
  {
    id: '1',
    client: 'Global Retail Giant',
    industry: 'Retail',
    challenge: 'Legacy e-commerce platform unable to handle Black Friday traffic spikes.',
    solution: 'Migration to a headless microservices architecture on Azure using MIRAi Lightning.',
    results: ['0% Downtime during peak', '45% Faster page loads', '30% Increase in conversion'],
    image: 'https://images.unsplash.com/photo-1441986300917-64674bd600d8?auto=format&fit=crop&q=80&w=800'
  },
  {
    id: '2',
    client: 'EcoHealth Network',
    industry: 'Healthcare',
    challenge: 'Patient records siloed across 12 different regional databases.',
    solution: 'Implementation of MIRAi Spark to create a unified Patient 360 view.',
    results: ['20% Faster diagnosis', '90% Data accuracy improvement', 'Full HIPAA compliance'],
    image: 'https://images.unsplash.com/photo-1505751172876-fa1923c5c528?auto=format&fit=crop&q=80&w=800'
  }
];

export const JOBS: JobListing[] = [
  { id: '1', title: 'Senior Cloud Engineer', location: 'London, UK / Remote', type: 'Full-time', category: 'Engineering' },
  { id: '2', title: 'AI Solutions Architect', location: 'Singapore', type: 'Full-time', category: 'AI & Data' },
  { id: '3', title: 'SAP Commerce Lead', location: 'Chennai, India', type: 'Full-time', category: 'Enterprise Apps' }
];
