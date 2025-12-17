import {
  Building2,
  Users,
  BarChart3,
  Megaphone,
  Vote,
  MapPin,
  Globe2,
  FileText,
  Target,
  Palette,
  LucideIcon,
} from "lucide-react";

export interface CaseStudy {
  title: string;
  client: string;
  challenge: string;
  solution: string;
  outcome: string;
}

export interface ServiceData {
  icon: LucideIcon;
  title: string;
  slug: string;
  tagline: string;
  description: string;
  overview: string;
  features: string[];
  methodology: {
    title: string;
    steps: { name: string; description: string }[];
  };
  tools: string[];
  targetAudience: string[];
  caseStudies: CaseStudy[];
  keyInsights: { title: string; description: string }[];
  deliverables: string[];
}

export const servicesData: ServiceData[] = [
  {
    icon: Building2,
    title: "Political Consulting",
    slug: "political-consulting",
    tagline: "Strategic Advisory for Political Excellence",
    description: "Strategic advisory services for political leaders, parties, and institutions navigating complex political landscapes.",
    overview: "Our Political Consulting service provides comprehensive strategic advisory to political leaders, parties, and institutions. We combine deep political analysis with practical implementation strategies to help our clients navigate complex political landscapes, build coalitions, manage crises, and achieve their political objectives. Our team brings decades of experience in Nepal's political ecosystem, offering insights that are both locally relevant and globally informed.",
    features: [
      "Strategic positioning and messaging",
      "Coalition building strategies",
      "Policy development support",
      "Political risk assessment",
      "Stakeholder mapping and engagement",
      "Opposition research and analysis",
      "Political communication advisory",
      "Government relations support",
    ],
    methodology: {
      title: "Our Consulting Approach",
      steps: [
        {
          name: "Political Landscape Assessment",
          description: "Comprehensive analysis of the current political environment, key players, power dynamics, and emerging trends that may impact your objectives.",
        },
        {
          name: "Stakeholder Mapping",
          description: "Identification and analysis of all relevant stakeholders, their interests, influence levels, and potential for collaboration or opposition.",
        },
        {
          name: "Strategic Framework Development",
          description: "Creation of a customized strategic roadmap aligned with your political goals, including timeline, milestones, and success metrics.",
        },
        {
          name: "Implementation Support",
          description: "Hands-on guidance during strategy execution, including real-time adjustments based on evolving political conditions.",
        },
        {
          name: "Continuous Monitoring & Adaptation",
          description: "Ongoing political intelligence and strategic refinement to ensure sustained success in dynamic environments.",
        },
      ],
    },
    tools: [
      "Political Intelligence Database",
      "Stakeholder Analysis Matrix",
      "Risk Assessment Framework",
      "Coalition Mapping Tools",
      "Strategic Planning Software",
      "Real-time Political Monitoring Systems",
    ],
    targetAudience: [
      "Political party leaders and executives",
      "Elected officials and candidates",
      "Government ministers and bureaucrats",
      "Political organizations and movements",
      "International organizations working in governance",
    ],
    caseStudies: [
      {
        title: "Provincial Coalition Strategy",
        client: "Regional Political Alliance",
        challenge: "A coalition of three parties in a province needed to coordinate their approach for upcoming elections while managing internal disagreements on key policy issues.",
        solution: "We facilitated a series of strategic sessions to identify common ground, developed a shared policy platform, and created a coalition management framework with clear communication protocols.",
        outcome: "The coalition successfully contested elections with a unified message, winning 45 of 60 contested seats and forming the provincial government.",
      },
      {
        title: "Political Brand Repositioning",
        client: "Established Political Party",
        challenge: "A legacy party was losing youth support and perceived as outdated despite strong policy positions.",
        solution: "We conducted extensive research on voter perceptions, developed a modernization strategy that honored the party's heritage while embracing contemporary communication, and trained leadership on new engagement methods.",
        outcome: "Youth membership increased by 35% within 18 months, and the party's favorability among under-35 voters improved by 22 percentage points.",
      },
    ],
    keyInsights: [
      {
        title: "Coalition Dynamics",
        description: "Successful political coalitions require more than shared opposition—they need clearly articulated common objectives, fair resource allocation, and transparent communication channels.",
      },
      {
        title: "Political Timing",
        description: "The effectiveness of political initiatives often depends more on timing than content. Our analysis helps identify optimal windows for policy launches, announcements, and strategic moves.",
      },
      {
        title: "Stakeholder Complexity",
        description: "In Nepal's multi-party democracy, understanding the complex web of stakeholder relationships is crucial. Our mapping methodologies reveal hidden connections and potential alliance opportunities.",
      },
    ],
    deliverables: [
      "Comprehensive Political Landscape Report",
      "Strategic Advisory Roadmap",
      "Stakeholder Analysis Documentation",
      "Monthly Political Intelligence Briefings",
      "Crisis Response Protocols",
      "Coalition Management Framework",
    ],
  },
  {
    icon: Users,
    title: "Leadership Training",
    slug: "leadership-training",
    tagline: "Developing Tomorrow's Political Leaders",
    description: "Comprehensive programs designed to develop competent, ethical, and visionary political leaders.",
    overview: "Our Leadership Training programs are designed to cultivate the next generation of political leaders in Nepal. We believe that effective governance requires leaders who combine vision with practical skills, ethical grounding with strategic thinking. Our training modules draw from global best practices adapted to Nepal's unique political and cultural context, ensuring that participants gain both theoretical knowledge and practical capabilities.",
    features: [
      "Executive leadership programs",
      "Public speaking and communication",
      "Decision-making frameworks",
      "Ethical governance training",
      "Conflict resolution and negotiation",
      "Media handling and public relations",
      "Policy analysis and development",
      "Team building and management",
    ],
    methodology: {
      title: "Training Methodology",
      steps: [
        {
          name: "Needs Assessment",
          description: "Individual and organizational assessment to identify skill gaps, learning objectives, and optimal training approaches.",
        },
        {
          name: "Curriculum Design",
          description: "Development of customized training modules that address identified needs while incorporating best practices in adult learning.",
        },
        {
          name: "Interactive Delivery",
          description: "Training sessions combining lectures, case studies, role-playing, simulations, and peer learning for maximum engagement.",
        },
        {
          name: "Practical Application",
          description: "Real-world assignments and projects that allow participants to apply learned concepts in their actual political contexts.",
        },
        {
          name: "Mentorship & Follow-up",
          description: "Post-training support including mentorship sessions, refresher workshops, and alumni networking opportunities.",
        },
      ],
    },
    tools: [
      "Leadership Assessment Instruments",
      "360-Degree Feedback Tools",
      "Case Study Databases",
      "Simulation Software",
      "E-Learning Platforms",
      "Progress Tracking Systems",
    ],
    targetAudience: [
      "Emerging political leaders",
      "Party youth wing members",
      "Local government representatives",
      "Civil society leaders",
      "Government officials seeking leadership development",
    ],
    caseStudies: [
      {
        title: "Youth Leadership Cohort Program",
        client: "Multi-party Youth Alliance",
        challenge: "Young political leaders from different parties lacked platforms for cross-party dialogue and skill development.",
        solution: "We designed and delivered a 6-month leadership program bringing together 40 young leaders from 8 political parties, focusing on democratic values, governance skills, and collaborative leadership.",
        outcome: "Participants reported 78% improvement in leadership confidence. The cohort has continued to collaborate on governance initiatives, establishing a model for cross-party youth engagement.",
      },
      {
        title: "Women in Politics Initiative",
        client: "Women's Political Caucus",
        challenge: "Women candidates faced unique barriers in political campaigns and needed targeted skill development.",
        solution: "We created a comprehensive training program covering campaign management, public speaking, fundraising, and managing gender-based challenges in politics.",
        outcome: "Of the 60 participants, 23 successfully contested local elections, with 15 winning their races—a 65% success rate compared to the national average of 28%.",
      },
    ],
    keyInsights: [
      {
        title: "Experiential Learning",
        description: "Adult political leaders learn best through experience. Our programs emphasize practical exercises, real-world case studies, and immediate application of concepts.",
      },
      {
        title: "Cross-Party Dialogue",
        description: "Training programs that bring together leaders from different political backgrounds create lasting networks and promote democratic values.",
      },
      {
        title: "Continuous Development",
        description: "Leadership development is not a one-time event. Our follow-up systems ensure that learning continues long after formal training concludes.",
      },
    ],
    deliverables: [
      "Customized Training Curriculum",
      "Participant Assessment Reports",
      "Training Materials and Handbooks",
      "Certificate of Completion",
      "Post-Training Action Plans",
      "Alumni Network Access",
    ],
  },
  {
    icon: BarChart3,
    title: "Market Research & Surveys",
    slug: "market-research",
    tagline: "Data-Driven Insights for Strategic Decisions",
    description: "Rigorous data collection and analysis to inform strategic decision-making.",
    overview: "Our Market Research & Surveys service provides rigorous, scientifically-designed research to inform political and policy decisions. We combine quantitative and qualitative methodologies to deliver comprehensive insights into public opinion, voter behavior, policy preferences, and social trends. Our research adheres to international standards while being tailored to Nepal's unique demographic and geographic complexities.",
    features: [
      "Opinion polls and surveys",
      "Focus group discussions",
      "Quantitative research methods",
      "Data visualization and reporting",
      "Baseline and endline studies",
      "Tracking polls and trend analysis",
      "Policy impact research",
      "Social attitude studies",
    ],
    methodology: {
      title: "Research Methodology",
      steps: [
        {
          name: "Research Design",
          description: "Development of research framework including objectives, methodology selection, sampling strategy, and timeline.",
        },
        {
          name: "Instrument Development",
          description: "Creation and testing of research instruments (questionnaires, discussion guides) with cultural and linguistic adaptation.",
        },
        {
          name: "Data Collection",
          description: "Field implementation using trained enumerators, quality control measures, and real-time monitoring systems.",
        },
        {
          name: "Data Analysis",
          description: "Statistical analysis using advanced techniques, cross-tabulation, regression analysis, and trend identification.",
        },
        {
          name: "Reporting & Presentation",
          description: "Comprehensive reporting with clear visualizations, actionable insights, and strategic recommendations.",
        },
      ],
    },
    tools: [
      "Statistical Analysis Software (SPSS, R, Stata)",
      "Survey Design Platforms",
      "Mobile Data Collection Apps",
      "Data Visualization Tools (Tableau, Power BI)",
      "Qualitative Analysis Software (NVivo)",
      "GIS Integration Tools",
    ],
    targetAudience: [
      "Political parties planning campaigns",
      "Government agencies assessing public opinion",
      "NGOs evaluating program impact",
      "Media organizations seeking accurate polling",
      "Academic institutions conducting research",
    ],
    caseStudies: [
      {
        title: "National Governance Perception Survey",
        client: "International Development Organization",
        challenge: "Understanding citizen perceptions of governance quality across all 7 provinces with representative sampling.",
        solution: "We designed and implemented a nationally representative survey of 12,000 respondents using multi-stage cluster sampling, covering urban and rural areas across all provinces.",
        outcome: "The research provided the most comprehensive governance perception baseline in Nepal, informing a $50 million governance program design and becoming a reference for policy makers.",
      },
      {
        title: "Pre-Election Opinion Tracking",
        client: "Political Research Institute",
        challenge: "Tracking voter sentiment changes in the final 8 weeks before a national election with sufficient granularity.",
        solution: "We implemented weekly tracking polls with 2,500 respondents each wave, using consistent methodology to enable accurate trend analysis.",
        outcome: "Our final prediction was within 2.3% of actual results for major parties. The tracking data helped identify key swing demographics and issue priorities.",
      },
    ],
    keyInsights: [
      {
        title: "Sampling Quality",
        description: "In Nepal's diverse geography, achieving truly representative samples requires careful attention to urban-rural balance, ethnic representation, and geographic accessibility.",
      },
      {
        title: "Question Design",
        description: "Effective surveys in Nepal require careful translation, cultural adaptation, and pre-testing to ensure questions are understood consistently across diverse populations.",
      },
      {
        title: "Data Integration",
        description: "Combining quantitative surveys with qualitative research provides both statistical robustness and nuanced understanding of underlying attitudes and motivations.",
      },
    ],
    deliverables: [
      "Research Design Document",
      "Questionnaire/Discussion Guides",
      "Raw Data Files (cleaned and coded)",
      "Statistical Analysis Report",
      "Executive Summary with Key Findings",
      "Presentation Materials",
    ],
  },
  {
    icon: Megaphone,
    title: "Press Media & Management",
    slug: "press-media",
    tagline: "Strategic Communication for Political Impact",
    description: "Strategic media relations and communication management for political entities.",
    overview: "Our Press Media & Management service helps political leaders and organizations effectively communicate their messages through traditional and digital media channels. We understand that in today's media landscape, effective communication requires both strategic planning and rapid response capabilities. Our team combines media expertise with political acumen to ensure your message reaches the right audiences at the right time.",
    features: [
      "Media strategy development",
      "Press release and content creation",
      "Crisis communication management",
      "Media training for leaders",
      "Press conference organization",
      "Journalist relationship management",
      "Media monitoring and analysis",
      "Editorial placement and op-eds",
    ],
    methodology: {
      title: "Media Management Approach",
      steps: [
        {
          name: "Media Landscape Analysis",
          description: "Assessment of relevant media outlets, journalists, opinion leaders, and information flow patterns in your area of operation.",
        },
        {
          name: "Communication Strategy Development",
          description: "Creation of comprehensive communication strategy aligned with political objectives, including key messages, target audiences, and channel selection.",
        },
        {
          name: "Content Creation",
          description: "Development of high-quality content including press releases, speeches, op-eds, and multimedia materials.",
        },
        {
          name: "Media Engagement",
          description: "Proactive outreach to journalists, media briefings, press conferences, and relationship building with key media contacts.",
        },
        {
          name: "Monitoring & Response",
          description: "Continuous media monitoring, rapid response to emerging stories, and crisis management when needed.",
        },
      ],
    },
    tools: [
      "Media Monitoring Platforms",
      "Press Release Distribution Systems",
      "Content Management Systems",
      "Social Listening Tools",
      "Media Contact Databases",
      "Crisis Communication Templates",
    ],
    targetAudience: [
      "Political leaders and candidates",
      "Political parties and organizations",
      "Government ministries and departments",
      "Advocacy organizations",
      "Public figures requiring media support",
    ],
    caseStudies: [
      {
        title: "Crisis Communication Response",
        client: "Provincial Government Minister",
        challenge: "A senior minister faced a media crisis due to misinterpreted comments that went viral on social media.",
        solution: "We implemented a rapid response strategy including clarification statements, targeted media briefings, and a strategic interview with a respected journalist to provide context.",
        outcome: "The narrative shifted within 72 hours. Public perception surveys showed only 8% negative sentiment shift compared to projected 35% without intervention.",
      },
      {
        title: "Policy Launch Media Campaign",
        client: "Government Ministry",
        challenge: "A major policy reform needed public understanding and support but faced initial skepticism from media.",
        solution: "We developed a phased communication strategy including pre-launch briefings, launch event management, explanatory content for different audiences, and ongoing media engagement.",
        outcome: "Policy coverage was 73% positive/neutral. Public awareness of the policy reached 68% within one month, well above the 40% target.",
      },
    ],
    keyInsights: [
      {
        title: "Proactive vs. Reactive",
        description: "Organizations that proactively shape narratives spend less time managing crises. Our approach emphasizes building media relationships and controlling the story before others define it.",
      },
      {
        title: "Multi-Platform Strategy",
        description: "Effective political communication today requires coordinated messaging across traditional media, social platforms, and direct communication channels.",
      },
      {
        title: "Spokesperson Preparation",
        description: "Even experienced politicians benefit from media training. Our programs prepare leaders for interviews, debates, and hostile questioning.",
      },
    ],
    deliverables: [
      "Media Strategy Document",
      "Key Messages Framework",
      "Press Releases and Media Kits",
      "Media Training Sessions",
      "Media Monitoring Reports",
      "Crisis Communication Protocol",
    ],
  },
  {
    icon: Vote,
    title: "Voter Analysis & Data Collection",
    slug: "voter-analysis",
    tagline: "Understanding Voters, Winning Elections",
    description: "In-depth voter behavior analysis and segmentation for targeted campaign strategies.",
    overview: "Our Voter Analysis & Data Collection service provides deep insights into voter demographics, preferences, behaviors, and decision-making patterns. We combine large-scale data collection with sophisticated analytical techniques to help political campaigns understand their electorate and develop targeted strategies. Our approach goes beyond simple demographics to understand the psychographic and behavioral factors that drive voting decisions.",
    features: [
      "Voter demographic analysis",
      "Swing voter identification",
      "Voting pattern research",
      "Electoral forecasting models",
      "Voter registration analysis",
      "Turnout prediction modeling",
      "Issue salience research",
      "Voter segmentation and targeting",
    ],
    methodology: {
      title: "Voter Analysis Methodology",
      steps: [
        {
          name: "Data Architecture Design",
          description: "Development of comprehensive data collection framework capturing demographic, behavioral, and attitudinal variables.",
        },
        {
          name: "Multi-Source Data Collection",
          description: "Integration of survey data, historical voting records, demographic data, and observational research.",
        },
        {
          name: "Voter Segmentation",
          description: "Statistical clustering and segmentation to identify distinct voter groups with unique characteristics and preferences.",
        },
        {
          name: "Predictive Modeling",
          description: "Development of models to predict voter behavior, turnout likelihood, and persuasion susceptibility.",
        },
        {
          name: "Strategic Recommendations",
          description: "Translation of analytical findings into actionable campaign strategies and targeting recommendations.",
        },
      ],
    },
    tools: [
      "Voter Database Management Systems",
      "Statistical Modeling Software",
      "Machine Learning Algorithms",
      "Geographic Analysis Tools",
      "Survey Research Platforms",
      "Data Visualization Dashboards",
    ],
    targetAudience: [
      "Political campaigns at all levels",
      "Political parties planning electoral strategies",
      "Candidates seeking voter insights",
      "Election commissions (for turnout analysis)",
      "Academic researchers studying electoral behavior",
    ],
    caseStudies: [
      {
        title: "Constituency-Level Voter Modeling",
        client: "Parliamentary Candidate",
        challenge: "A first-time candidate needed to understand the diverse voter base in a competitive constituency with multiple strong competitors.",
        solution: "We conducted comprehensive voter analysis including door-to-door surveys, historical voting pattern analysis, and demographic mapping to identify persuadable voter segments.",
        outcome: "The candidate exceeded expectations by 12 percentage points, winning with a margin of 8,000 votes in a constituency predicted to be a three-way split.",
      },
      {
        title: "Provincial Electoral Strategy",
        client: "Political Party Provincial Committee",
        challenge: "A party needed to allocate limited resources across 50 constituencies with varying competitiveness levels.",
        solution: "We developed a comprehensive electoral map with competitiveness scores, resource allocation recommendations, and constituency-specific voter insights.",
        outcome: "The party won 28 of 50 seats, outperforming pre-campaign projections of 18-22 seats through efficient resource allocation.",
      },
    ],
    keyInsights: [
      {
        title: "Beyond Demographics",
        description: "While demographics provide a foundation, understanding voter values, concerns, and information sources is crucial for effective targeting and messaging.",
      },
      {
        title: "Swing Voter Complexity",
        description: "Swing voters are not a monolithic group. Our analysis identifies different types of persuadable voters and the specific messages that resonate with each.",
      },
      {
        title: "Turnout as Strategy",
        description: "Elections are often won through turnout rather than persuasion. Our modeling identifies high-potential supporters who need mobilization efforts.",
      },
    ],
    deliverables: [
      "Voter Segmentation Analysis",
      "Constituency Profiles",
      "Predictive Models and Forecasts",
      "Targeting Recommendations",
      "Interactive Data Dashboard",
      "Strategic Briefing Presentations",
    ],
  },
  {
    icon: MapPin,
    title: "GIS Mapping & Spatial Analysis",
    slug: "gis-mapping",
    tagline: "Geographic Intelligence for Strategic Advantage",
    description: "Geographic information systems for electoral mapping and spatial strategy.",
    overview: "Our GIS Mapping & Spatial Analysis service leverages geographic information systems to provide visual, spatial insights for political and policy decision-making. We combine electoral data, demographic information, infrastructure mapping, and campaign logistics into integrated geographic visualizations that reveal patterns invisible in tabular data. Our spatial analysis capabilities help campaigns optimize resource allocation, plan events, and understand regional dynamics.",
    features: [
      "Electoral boundary mapping",
      "Demographic overlay analysis",
      "Resource allocation optimization",
      "Campaign territory planning",
      "Polling station analysis",
      "Infrastructure accessibility mapping",
      "Development project visualization",
      "Custom thematic mapping",
    ],
    methodology: {
      title: "Spatial Analysis Methodology",
      steps: [
        {
          name: "Geographic Data Collection",
          description: "Compilation of relevant geographic data including administrative boundaries, demographic distributions, infrastructure, and electoral data.",
        },
        {
          name: "Data Integration & Georeferencing",
          description: "Integration of multiple data sources into unified geographic database with proper coordinate systems and projections.",
        },
        {
          name: "Spatial Analysis",
          description: "Application of spatial analysis techniques including overlay analysis, proximity analysis, and pattern identification.",
        },
        {
          name: "Visualization Design",
          description: "Creation of clear, informative maps and visualizations that communicate findings effectively to non-technical audiences.",
        },
        {
          name: "Interactive Platform Development",
          description: "Development of interactive mapping tools allowing users to explore data and generate custom views.",
        },
      ],
    },
    tools: [
      "ArcGIS Professional Suite",
      "QGIS Open Source Platform",
      "Google Earth Pro",
      "Mapbox Visualization Tools",
      "Custom Web Mapping Applications",
      "GPS Data Collection Devices",
    ],
    targetAudience: [
      "Political campaigns planning ground operations",
      "Government agencies planning service delivery",
      "Development organizations targeting interventions",
      "Election commissions managing electoral logistics",
      "Researchers studying spatial patterns",
    ],
    caseStudies: [
      {
        title: "Electoral Logistics Optimization",
        client: "Election Commission",
        challenge: "Planning polling station locations and staffing across a mountainous province with varying accessibility.",
        solution: "We developed comprehensive accessibility maps, voter density analysis, and optimized polling station placement recommendations considering terrain, roads, and population distribution.",
        outcome: "Average voter travel time reduced by 23%. Polling station staffing was optimized, reducing costs by 15% while improving coverage.",
      },
      {
        title: "Campaign Event Planning",
        client: "National Political Party",
        challenge: "Planning 200 campaign events across the country to maximize voter reach with limited resources.",
        solution: "We created a spatial optimization model considering population density, supporter concentration, venue availability, and logistical factors.",
        outcome: "Campaign events reached an estimated 2.3 million voters directly, 40% more than previous campaigns with similar budgets.",
      },
    ],
    keyInsights: [
      {
        title: "Visual Communication",
        description: "Maps communicate spatial patterns more effectively than tables or text. Our visualizations make complex data accessible to decision-makers.",
      },
      {
        title: "Hidden Patterns",
        description: "Spatial analysis often reveals patterns invisible in non-geographic data, such as regional clusters, accessibility gaps, and distance-based relationships.",
      },
      {
        title: "Dynamic Mapping",
        description: "Interactive maps allow users to explore scenarios, adjust parameters, and develop spatial intuition about their areas of operation.",
      },
    ],
    deliverables: [
      "Custom Thematic Maps",
      "Interactive Web Mapping Application",
      "Spatial Analysis Reports",
      "Geographic Database",
      "Training on Map Interpretation",
      "Printed Map Products",
    ],
  },
  {
    icon: Globe2,
    title: "Social Strategy & Management",
    slug: "social-strategy",
    tagline: "Digital Engagement for Political Success",
    description: "Digital and social media strategies for political engagement and outreach.",
    overview: "Our Social Strategy & Management service helps political leaders and organizations build effective digital presences and engage with citizens through social media platforms. In an era where political discourse increasingly happens online, we provide comprehensive strategies for building communities, managing reputation, and driving political engagement through digital channels. Our approach combines creative content with data-driven optimization.",
    features: [
      "Social media campaign design",
      "Digital content strategy",
      "Online community management",
      "Digital advertising campaigns",
      "Influencer engagement strategy",
      "Social listening and monitoring",
      "Platform-specific optimization",
      "Digital crisis management",
    ],
    methodology: {
      title: "Digital Strategy Approach",
      steps: [
        {
          name: "Digital Audit",
          description: "Assessment of current digital presence, audience demographics, content performance, and competitor landscape.",
        },
        {
          name: "Strategy Development",
          description: "Creation of comprehensive digital strategy including platform selection, content pillars, posting cadence, and engagement tactics.",
        },
        {
          name: "Content Production",
          description: "Development of high-quality content including graphics, videos, written posts, and interactive content tailored to each platform.",
        },
        {
          name: "Community Management",
          description: "Active engagement with followers, response management, and community building activities.",
        },
        {
          name: "Performance Optimization",
          description: "Continuous monitoring, A/B testing, and strategy refinement based on performance data.",
        },
      ],
    },
    tools: [
      "Social Media Management Platforms",
      "Content Creation Tools",
      "Analytics and Reporting Dashboards",
      "Social Listening Software",
      "Ad Management Platforms",
      "Influencer Identification Tools",
    ],
    targetAudience: [
      "Political leaders building personal brands",
      "Political parties managing institutional presence",
      "Campaigns running digital operations",
      "Government entities seeking citizen engagement",
      "Advocacy organizations mobilizing supporters",
    ],
    caseStudies: [
      {
        title: "Political Leader Digital Transformation",
        client: "Senior Political Leader",
        challenge: "A respected political leader had minimal digital presence and was losing relevance among younger voters.",
        solution: "We developed a comprehensive digital strategy including content creation, platform optimization, and engagement tactics that maintained authenticity while increasing reach.",
        outcome: "Social media following grew from 15,000 to 450,000 in 18 months. Engagement rates exceeded industry benchmarks by 3x. Youth favorability increased by 28 points.",
      },
      {
        title: "Issue-Based Digital Campaign",
        client: "Policy Advocacy Coalition",
        challenge: "Building public support for constitutional reform through digital mobilization.",
        solution: "We designed a multi-platform campaign including educational content, supporter mobilization tools, and coordinated messaging across coalition members.",
        outcome: "Campaign hashtag reached 15 million impressions. Online petition gathered 200,000 signatures. The issue moved from 12th to 3rd in public priority surveys.",
      },
    ],
    keyInsights: [
      {
        title: "Authenticity Matters",
        description: "Voters can detect inauthentic communication. Our strategies help leaders maintain their authentic voice while optimizing for digital platforms.",
      },
      {
        title: "Platform-Specific Approach",
        description: "Each social platform has unique characteristics, audiences, and best practices. Effective strategies are tailored to platform-specific dynamics.",
      },
      {
        title: "Engagement Over Broadcast",
        description: "Social media success comes from genuine engagement, not just broadcasting messages. Our community management builds real relationships with followers.",
      },
    ],
    deliverables: [
      "Digital Strategy Document",
      "Content Calendar",
      "Brand Guidelines for Digital",
      "Monthly Performance Reports",
      "Crisis Response Protocols",
      "Community Management Playbook",
    ],
  },
  {
    icon: FileText,
    title: "Policy Review & Management",
    slug: "policy-review",
    tagline: "Evidence-Based Policy for Effective Governance",
    description: "Expert analysis and development of policy frameworks and governance structures.",
    overview: "Our Policy Review & Management service provides expert analysis of existing policies and supports the development of new policy frameworks. We combine rigorous analytical methods with practical understanding of political realities to help governments, parties, and organizations develop effective, implementable policies. Our team includes policy experts across multiple sectors who bring both technical knowledge and political awareness to policy development.",
    features: [
      "Policy impact assessment",
      "Legislative analysis",
      "Policy recommendation reports",
      "Stakeholder consultation",
      "Regulatory review",
      "Comparative policy analysis",
      "Policy implementation planning",
      "Policy communication support",
    ],
    methodology: {
      title: "Policy Analysis Framework",
      steps: [
        {
          name: "Problem Definition",
          description: "Clear articulation of the policy problem, including scope, affected populations, and underlying causes.",
        },
        {
          name: "Evidence Review",
          description: "Comprehensive review of existing research, data, and international best practices relevant to the policy area.",
        },
        {
          name: "Options Development",
          description: "Generation of policy alternatives with analysis of costs, benefits, feasibility, and political considerations.",
        },
        {
          name: "Stakeholder Consultation",
          description: "Structured engagement with affected stakeholders to gather input and build support for preferred options.",
        },
        {
          name: "Implementation Design",
          description: "Development of detailed implementation plan including timelines, responsibilities, resources, and monitoring frameworks.",
        },
      ],
    },
    tools: [
      "Policy Analysis Frameworks",
      "Cost-Benefit Analysis Models",
      "Stakeholder Mapping Tools",
      "Legislative Tracking Systems",
      "Impact Assessment Methodologies",
      "Policy Simulation Models",
    ],
    targetAudience: [
      "Government ministries developing policies",
      "Political parties creating policy platforms",
      "Legislative committees reviewing laws",
      "Think tanks conducting policy research",
      "International organizations supporting governance",
    ],
    caseStudies: [
      {
        title: "Education Policy Reform",
        client: "Ministry of Education",
        challenge: "Developing a comprehensive early childhood education policy addressing access, quality, and equity concerns.",
        solution: "We conducted extensive research including international comparisons, stakeholder consultations, and cost analysis to develop a phased implementation plan.",
        outcome: "The policy was adopted with cross-party support. Implementation has increased early childhood education enrollment by 40% in priority districts.",
      },
      {
        title: "Party Policy Platform Development",
        client: "National Political Party",
        challenge: "Creating a coherent, evidence-based policy platform for national elections covering 12 key sectors.",
        solution: "We facilitated policy development workshops, conducted research on each sector, and synthesized party values with evidence-based recommendations.",
        outcome: "The platform was praised for its coherence and practicality. Post-election analysis showed policy positions were the third most cited reason for voter support.",
      },
    ],
    keyInsights: [
      {
        title: "Political Feasibility",
        description: "Technically optimal policies fail without political support. Our analysis balances evidence with political reality to identify achievable reforms.",
      },
      {
        title: "Implementation Focus",
        description: "Many policies fail not in design but in implementation. Our frameworks emphasize practical implementation considerations from the start.",
      },
      {
        title: "Stakeholder Buy-In",
        description: "Early and genuine stakeholder engagement improves policy quality and builds the coalition needed for successful adoption and implementation.",
      },
    ],
    deliverables: [
      "Policy Analysis Report",
      "Options Comparison Matrix",
      "Stakeholder Consultation Report",
      "Draft Policy Documents",
      "Implementation Roadmap",
      "Monitoring & Evaluation Framework",
    ],
  },
  {
    icon: Target,
    title: "Election Campaign Design & Management",
    slug: "election-campaign",
    tagline: "Comprehensive Campaign Solutions for Victory",
    description: "End-to-end campaign management from strategy to execution.",
    overview: "Our Election Campaign Design & Management service provides comprehensive support for political campaigns from initial strategy through election day. We bring together expertise in voter analysis, communication, digital strategy, ground operations, and campaign management to help candidates and parties run effective campaigns. Our approach combines proven campaign methodologies with innovations adapted to Nepal's unique electoral environment.",
    features: [
      "Campaign strategy development",
      "Ground game operations",
      "Volunteer management systems",
      "Election day operations",
      "Fundraising strategy and execution",
      "Event planning and rallies",
      "Opposition research",
      "Get-out-the-vote programs",
    ],
    methodology: {
      title: "Campaign Management Framework",
      steps: [
        {
          name: "Strategic Planning",
          description: "Development of comprehensive campaign strategy including win number calculation, voter targeting, message development, and resource allocation.",
        },
        {
          name: "Organization Building",
          description: "Establishment of campaign organization including staffing, volunteer recruitment, and operational systems.",
        },
        {
          name: "Voter Contact Program",
          description: "Implementation of multi-channel voter contact including door-to-door canvassing, phone banking, and digital outreach.",
        },
        {
          name: "Communication Execution",
          description: "Rollout of integrated communication strategy across earned media, paid media, and direct voter communication.",
        },
        {
          name: "GOTV & Election Day",
          description: "Execution of get-out-the-vote program and election day operations including poll monitoring and voter mobilization.",
        },
      ],
    },
    tools: [
      "Campaign Management Software",
      "Voter Contact Database Systems",
      "Volunteer Management Platforms",
      "Fundraising and Donor Management",
      "Event Planning Tools",
      "Poll Monitoring Systems",
    ],
    targetAudience: [
      "Candidates at all levels",
      "Political parties running electoral campaigns",
      "Campaign managers seeking expertise",
      "PACs and political action groups",
      "International election observers",
    ],
    caseStudies: [
      {
        title: "Mayoral Campaign Victory",
        client: "Metropolitan Mayoral Candidate",
        challenge: "A challenger candidate faced an incumbent with higher name recognition and established political machinery.",
        solution: "We developed an insurgent campaign strategy focusing on issue-based messaging, grassroots mobilization, and targeted digital outreach to young and first-time voters.",
        outcome: "The candidate won with 54% of the vote against an incumbent who had won the previous election with 62%. Youth turnout in target areas increased by 18%.",
      },
      {
        title: "National Party Campaign Coordination",
        client: "Political Party Central Committee",
        challenge: "Coordinating campaign activities across 165 constituencies with limited central resources and varying local capacities.",
        solution: "We developed a tiered campaign support model, provided training for local campaign managers, and created systems for resource allocation and performance monitoring.",
        outcome: "The party exceeded projections by 15 seats, with 80% of targeted competitive seats won. Campaign efficiency metrics improved by 35% compared to previous elections.",
      },
    ],
    keyInsights: [
      {
        title: "Discipline Wins",
        description: "Successful campaigns maintain strategic discipline despite the chaos of campaign environments. Our systems help campaigns stay focused on winning priorities.",
      },
      {
        title: "Local Adaptation",
        description: "While overall strategy should be consistent, tactics must adapt to local conditions. Our frameworks allow for local customization within strategic parameters.",
      },
      {
        title: "Volunteer Power",
        description: "Campaigns with strong volunteer programs outperform those relying solely on paid operations. Our training and management systems maximize volunteer effectiveness.",
      },
    ],
    deliverables: [
      "Campaign Strategy Document",
      "Operational Plan and Timeline",
      "Voter Contact Program Design",
      "Communication Plan",
      "Budget and Resource Allocation",
      "Election Day Operations Manual",
    ],
  },
  {
    icon: Palette,
    title: "Political Branding",
    slug: "political-branding",
    tagline: "Building Authentic Political Identities",
    description: "Building strong, authentic political brands that resonate with voters.",
    overview: "Our Political Branding service helps political leaders, parties, and campaigns develop strong, authentic brands that resonate with voters. We understand that political branding goes beyond logos and colors—it's about articulating values, building emotional connections, and creating consistent experiences across all voter touchpoints. Our approach combines brand strategy expertise with deep understanding of political communication.",
    features: [
      "Brand identity development",
      "Visual identity design",
      "Messaging framework creation",
      "Brand consistency management",
      "Campaign theming and design",
      "Logo and symbol development",
      "Brand guidelines documentation",
      "Rebranding and brand refresh",
    ],
    methodology: {
      title: "Brand Development Process",
      steps: [
        {
          name: "Brand Discovery",
          description: "Deep exploration of core values, differentiators, target audiences, and competitive landscape through stakeholder interviews and research.",
        },
        {
          name: "Strategic Positioning",
          description: "Development of brand positioning that differentiates from competitors and resonates with target voter segments.",
        },
        {
          name: "Identity Design",
          description: "Creation of visual identity including logo, color palette, typography, and graphic elements that express the brand strategy.",
        },
        {
          name: "Messaging Framework",
          description: "Development of key messages, taglines, and narrative frameworks that communicate brand values consistently.",
        },
        {
          name: "Implementation & Management",
          description: "Rollout of brand across all touchpoints with guidelines and systems to ensure consistency.",
        },
      ],
    },
    tools: [
      "Brand Strategy Frameworks",
      "Design Software Suite",
      "Brand Asset Management Systems",
      "Style Guide Templates",
      "Perception Research Tools",
      "Competitive Analysis Frameworks",
    ],
    targetAudience: [
      "Political leaders developing personal brands",
      "Political parties updating institutional identity",
      "Campaigns creating campaign brands",
      "New political movements establishing identity",
      "Government programs needing public-facing brands",
    ],
    caseStudies: [
      {
        title: "Party Rebranding Initiative",
        client: "Established Political Party",
        challenge: "A party with 50+ year history needed to modernize its brand without losing connection to its heritage.",
        solution: "We developed an evolution strategy that honored the party's history while introducing contemporary design elements and refreshed messaging that appealed to younger voters.",
        outcome: "Brand perception among 18-35 year olds improved by 31 points. The rebrand was covered positively in national media. Party merchandise sales increased 400%.",
      },
      {
        title: "Candidate Brand Development",
        client: "First-Time National Candidate",
        challenge: "Creating a distinctive brand for a candidate entering a crowded field of established politicians.",
        solution: "We developed a brand strategy emphasizing the candidate's unique background and fresh approach, with bold visual identity and authentic messaging.",
        outcome: "The candidate achieved 89% name recognition in target demographics. The brand effectively communicated differentiation, contributing to a primary victory.",
      },
    ],
    keyInsights: [
      {
        title: "Authenticity is Essential",
        description: "Political brands must be rooted in genuine values and character. Voters quickly detect and punish inauthentic branding.",
      },
      {
        title: "Consistency Builds Trust",
        description: "Consistent brand presentation across all touchpoints builds recognition and trust. Our systems ensure brand discipline.",
      },
      {
        title: "Evolution Not Revolution",
        description: "For established entities, dramatic rebranding can alienate existing supporters. We balance freshness with familiarity.",
      },
    ],
    deliverables: [
      "Brand Strategy Document",
      "Visual Identity Package",
      "Brand Guidelines Manual",
      "Key Messages Document",
      "Template Library",
      "Brand Training Materials",
    ],
  },
];

export const getServiceBySlug = (slug: string): ServiceData | undefined => {
  return servicesData.find((service) => service.slug === slug);
};
