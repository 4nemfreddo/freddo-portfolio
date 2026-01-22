"use client"

import { useState, useEffect } from "react"
import TerminalPrompt from "./components/terminal-prompt"
import TerminalOutput from "./components/terminal-output"
import TerminalInput from "./components/terminal-input"

const resumeData = {
  name: "FREDRICK MWANGI",
  contact: {
    email: "fredrickmwangi@gmail.com",
    website: "g.dev/fredrickmwangi",
    linkedin: "linkedin.com/in/fredrickmwangi",
    github: "github.com/4nemfreddo",
  },
  title: "SOFTWARE DEVELOPER",
  summary:
    "Software and Cloud Developer | Graphic Designer \nResults-driven professional with expertise in Software and Web development, cloud computing, and automation. Proven track record of optimizing CRM workflows, and driving engagement growth through data-driven marketing strategies",
  skills: [
    "Frontend Development: React.js, Wordpress, Webflow, Framer, Git",
    "Graphic Design: Canva, Figma, Adobe Suite",
    "Customer Relationship Management: Zoho CRM, Excel/Google Sheets, Automation Tools (Zapier, Zoho CRM API)",
    "Digital Marketing: Meta Business Suite,Search Engine Optimization (SEO), Landing Page Optimization, Social Media Marketing, Email Campaigns & Newsletters (Mailchimp, Zoho Campaigns)",
    "Amazon Web Services: VPC, EC2, S3, RDS, Lambda, IAM, CloudWatch",
    "Paid Advertising (PPC) & Lead Generation: Google Ads (Search, Display, Shopping), Pay-Per-Click (PPC) & Retargeting Ads, Landing Page Optimization (Lead Magnets, CTAs), Zoho CRM Lead Nurturing",
  ],
  experience: [
    {
      company: "Travelicious Tours and Travels Limited",
      position: "WordPress Developer & IT Specialist",
      period: "March 2024 – December 2024",
      achievements: [
        "Designed and launched 2 SEO-optimized websites using PHP, HTML/CSS, Elementor, and MySQL, increasing brand visibility and generating new revenue streams within 3 months.",
        "Boosted social media engagement by 20% through Meta Ads Manager and Zoho CRM, leveraging high-converting ad creatives and A/B testing for optimization.",
        "Automated lead generation workflows, reducing lead capture time by 50% by integrating Zoho CRM API, processing 500+ monthly leads.",
        "Improved CRM efficiency, driving a 35% increase in lead conversion through optimized workflows for ad generation, lead scoring, segmentation, and automated follow-ups.",
        "Enhanced website security by 50% through penetration testing, SSL encryption, and proactive WordPress vulnerability patches, maintaining 99.9% uptime.",
        "Reduced data processing time by 50% by developing Excel/Google Sheets macros, streamlining travel agent profile organization for accurate cross-functional reporting.",
        "Resolved 50+ IT issues, achieving 95% user satisfaction by ensuring seamless operations across website management, CRM functionality, and general IT support."
      ],
    },

    {
      company: "Mansa Media",
      position: "Digital Media and Design Specialist",
      period: "April 2025 – Present",

      /*achievements: [
        "Created visually compelling graphics and marketing materials using Canva and Adobe Suite, enhancing brand identity and engagement across digital platforms.",
        "Managed and optimized social media campaigns, resulting in a 25% increase in follower engagement and a 15% growth in audience reach.",
      ],*/  
    }
    /*{
      company: "Juicyway Inc.",
      position: "Senior Product Engineer",
      period: "Jan 2021 – Present",
      achievements: [
        "Sole engineer responsible for developing and maintaining the company's fintech applications using Flutter/Dart, ensuring regulatory compliance.",
        "Single handedly designed and implemented responsive UI/UX for multiple financial applications with a super performant and optimized user experience.",
        "Implemented security protocols to ensure strict compliance with SOC, Government and Regulated Compliace Bodies",
        "Collaborated with QA teams to uphold high software quality standards, resulting in a robust and reliable product.",
        "Was a key contributor to Juicyway's growth, supporting over 3,000 customers across Nigeria, the US, Nigeria, Canada, and a dozen other countries, providing seamless cross-border payment solutions.",
        "Instrumental in Juicyway's successful $3 million pre-seed funding round, aimed at expanding marketing, business development, and technological improvements.",
      ],
    },
    {
      company: "Eden Life Inc.",
      position: "Lead Mobile Developer",
      period: "Dec 2021 – Sep 2023",
      achievements: [
        "Revamped the core Flutter/Dart mobile application, leading to a 96% improvement in onboarding completion.",
        "Spearheaded a Product-Led Growth initiative, increasing user signups by 300%.",
        "Reduced onboarding time from 24 minutes to just 4 minutes, achieving a 95.05% conversion rate.",
        "Integrated GetStream SDK-based chat system to support over 300 daily customer conversations.",
        "Played a key role in Eden Life's expansion, contributing to its growth to 99 employees and services across Nigeria and Kenya.",
      ],
    },
    {
      company: "Tendermint Inc.",
      position: "Senior Mobile Engineer, DevX",
      period: "Feb 2022 – Aug 2022",
      achievements: [
        "Developed Flutter/Dart SDKs for seamless integration with the Cosmos blockchain, enhancing the developer experience.",
        "Built secure transaction signing modules and gRPC API implementations for blockchain networks, ensuring robust and efficient communication.",
        "Led technical discovery and solution design in an Agile development environment, fostering innovation and rapid iteration.",
        "Contributed to the development of Starport, an all-in-one platform for developers to build and launch any crypto app on a sovereign blockchain.",
        "Supported the rollout of Emeris, a platform enabling users to benefit from cross-chain DeFi, including features like staking, an airdrop tracker, and a cross-chain DEX aggregator.",
      ],
    },
    {
      company: "Bottlepay Inc. (Acquired)",
      position: "Senior Mobile Developer",
      period: "January 2021 - March 2022",
      achievements: [
        "Designed and implemented cryptocurrency and blockchain payment features using Flutter/Dart, enhancing the app's functionality and user experience.",
        "Developed an in-app referral system adopted by over 6,000 users across the EU/UK, contributing to user acquisition and engagement.",
        "Created an in-house Flutter package repository for blockchain integrations, streamlining development processes and promoting code reuse.",
        "Applied Test-Driven Development (TDD) methodology, ensuring robust code quality and security.",
        "Contributed to Bottlepay's growth, leading to its acquisition by NYDIG in November 2021 for approximately $300 million.",
      ],
    },*/
  ],
  /*education: [
    {
      institution: "Egerton University",
      degree: "Economics and History (2 year completed)",
      period: "2016 – 2019",
      details:
        "Studied Economics and History at Egerton University for 2 years before dropping out",
    },
  ],*/
  certifications: [
    {
      title: "Amazon Web Services (AWS) - Certified Cloud Practitioner",
      period: "2024",
    },
    {
      title: "Amazon Web Services (AWS) - Solutions Architect",
      period: "2025",
    },
  ],
}

const themes = {
  default: {
    bg: "bg-black",
    text: "text-green-400",
    promptColor: "text-white",
    highlightColor: "text-yellow-400",
    name: "Default (Green on Black)",
  },
  solarized: {
    bg: "bg-[#002b36]",
    text: "text-[#839496]",
    promptColor: "text-[#b58900]",
    highlightColor: "text-[#cb4b16]",
    name: "Solarized Dark",
  },
  monokai: {
    bg: "bg-[#272822]",
    text: "text-[#f8f8f2]",
    promptColor: "text-[#a6e22e]",
    highlightColor: "text-[#f92672]",
    name: "Monokai",
  },
  dracula: {
    bg: "bg-[#282a36]",
    text: "text-[#f8f8f2]",
    promptColor: "text-[#ff79c6]",
    highlightColor: "text-[#50fa7b]",
    name: "Dracula",
  },
}

export default function Page() {
  const [output, setOutput] = useState<JSX.Element[]>([])
  const [currentPath, setCurrentPath] = useState("~")
  const [currentTheme, setCurrentTheme] = useState<keyof typeof themes>("default")

  useEffect(() => {
    if (output.length === 0) {
      addOutput(
        <TerminalOutput theme={themes[currentTheme]}>
          Welcome to Freddie's interactive resume! Type 'help' for available commands.
        </TerminalOutput>,
      )
    }
  }, [currentTheme, output.length])

  useEffect(() => {
    window.scrollTo({
      top: document.documentElement.scrollHeight,
      behavior: 'smooth'
    });
  }, [output]);

  const addOutput = (newOutput: JSX.Element) => {
    setOutput((prev) => [...prev, newOutput])
  }

  const handleCommand = (command: string) => {
    addOutput(
      <TerminalPrompt theme={themes[currentTheme]}>
        {currentPath}$ {command}
      </TerminalPrompt>,
    )

    const commandParts = command.split(" ")
    const mainCommand = commandParts[0].toLowerCase()

    switch (mainCommand) {
      case "help":
        addOutput(
          <TerminalOutput theme={themes[currentTheme]}>
            Available commands:
            <ul className="list-disc list-inside">
              <li>
                <strong>summary</strong>: <span className="text-gray-400">Display a brief summary</span>
              </li>
              <li>
                <strong>skills</strong>: <span className="text-gray-400">List core competencies</span>
              </li>
              <li>
                <strong>experience</strong>: <span className="text-gray-400">Show work experience</span>
              </li>
              <li>
                <strong>education</strong>: <span className="text-gray-400">Show education details</span>
              </li>
              <li>
                <strong>certifications</strong>: <span className="text-gray-400">List certifications</span>
              </li>
              <li>
                <strong>contact</strong>: <span className="text-gray-400">Display contact information</span>
              </li>
              <li>
                <strong>theme</strong>: <span className="text-gray-400">Change the color scheme</span>
              </li>
              <li>
                <strong>clear</strong>: <span className="text-gray-400">Clear the terminal</span>
              </li>
            </ul>
          </TerminalOutput>,
        )
        break
      case "summary":
        addOutput(<TerminalOutput theme={themes[currentTheme]}>{resumeData.summary}</TerminalOutput>)
        break
      case "skills":
        addOutput(
          <TerminalOutput theme={themes[currentTheme]}>
            <ul className="list-disc list-inside">
              {resumeData.skills.map((skill, index) => (
                <li key={index}>{skill}</li>
              ))}
            </ul>
          </TerminalOutput>,
        )
        break
      case "experience":
        resumeData.experience.forEach((job) => {
          addOutput(
            <TerminalOutput theme={themes[currentTheme]}>
              <div className="font-bold">
                {job.company} | {job.position}
              </div>
              <div>{job.period}</div>
              <ul className="list-disc list-inside">
                {job.achievements.map((achievement, index) => (
                  <li key={index}>{achievement}</li>
                ))}
              </ul>
            </TerminalOutput>,
          )
        })
        break
      case "education":
        resumeData.education.forEach((edu) => {
          addOutput(
            <TerminalOutput theme={themes[currentTheme]}>
              <div className="font-bold">{edu.institution}</div>
              <div>
                {edu.degree} | {edu.period}
              </div>
              <div>{edu.details}</div>
            </TerminalOutput>,
          )
        })
        break
      case "certifications":
        addOutput(
          <TerminalOutput theme={themes[currentTheme]}>
            <ul className="list-disc list-inside">
              {resumeData.certifications.map((cert, index) => (
                <li key={index}>
                  {cert.title} | {cert.period}
                </li>
              ))}
            </ul>
          </TerminalOutput>,
        )
        break
      case "contact":
        addOutput(
          <TerminalOutput theme={themes[currentTheme]}>
            <ul className="list-none">
              <li>Email: {resumeData.contact.email}</li>
              <li>Website: {resumeData.contact.website}</li>
              <li>LinkedIn: {resumeData.contact.linkedin}</li>
              <li>GitHub: {resumeData.contact.github}</li>
            </ul>
          </TerminalOutput>,
        )
        break
      case "theme":
        const themeNames = Object.keys(themes)
        if (commandParts[1] && themeNames.includes(commandParts[1])) {
          setCurrentTheme(commandParts[1] as keyof typeof themes)
          addOutput(
            <TerminalOutput theme={themes[currentTheme]}>
              Theme changed to {themes[commandParts[1] as keyof typeof themes].name}
            </TerminalOutput>,
          )
        } else {
          addOutput(
            <TerminalOutput theme={themes[currentTheme]}>
              Available themes:
              <ul className="list-disc list-inside">
                {themeNames.map((theme) => (
                  <li key={theme}>
                    <strong>{theme}</strong>: {themes[theme as keyof typeof themes].name}
                  </li>
                ))}
              </ul>
              Usage: theme [theme-name]
            </TerminalOutput>,
          )
        }
        break
      case "clear":
        setOutput([])
        break
      default:
        addOutput(
          <TerminalOutput theme={themes[currentTheme]}>
            Command not recognized. Type <strong>help</strong> for available commands.
          </TerminalOutput>,
        )
    }
  }

  return (
    <div
      className={`min-h-screen ${themes[currentTheme].bg} ${themes[currentTheme].text} font-mono p-4 pt-16 overflow-auto cascadia-code`}
    >
      <div className="max-w-2xl mx-auto">
        <header className="mb-8">
          <h1 className="text-2xl font-bold">{resumeData.name}</h1>
          <h2 className="text-xl">{resumeData.title}</h2>
        </header>

        <main>
          {output.map((out, index) => (
            <div key={index}>{out}</div>
          ))}
        </main>

        <TerminalInput onCommand={handleCommand} currentPath={currentPath} theme={themes[currentTheme]} />
      </div>
    </div>
  )
}
;<style jsx global>{`
  .cascadia-code {
    font-family: 'Cascadia Code', monospace;
  }
`}</style>

