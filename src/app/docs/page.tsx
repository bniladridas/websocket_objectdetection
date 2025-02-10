"use client";

import React, { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { ChevronLeftIcon, Bars3Icon } from '@heroicons/react/24/solid';
import { Inter, Roboto_Mono } from 'next/font/google';

const inter = Inter({ subsets: ['latin'], display: 'swap', variable: '--font-inter' });
const robotoMono = Roboto_Mono({ subsets: ['latin'], display: 'swap', variable: '--font-roboto-mono' });

const projectSections = [
  {
    title: "Project Structure",
    content: [
      { 
        name: "Backend Architecture", 
        description: "Flask-based WebSocket server with advanced object detection",
        codeSnippets: [{ title: "Main Backend Script (app.py)", code: `...` }]
      },
      { 
        name: "Deployment Scripts", 
        description: "Comprehensive project initialization and launch scripts",
        codeSnippets: [{ title: "Launch Script (launch.sh)", code: `...` }]
      },
      { 
        name: "Dependency Management", 
        description: "Detailed Python and system dependencies",
        codeSnippets: [{ title: "Requirements File (requirements.txt)", code: `...` }]
      }
    ]
  },
  {
    title: "Technologies",
    content: [
      { name: "Object Detection", technologies: ["Ultralytics YOLO", "Real-time inference", "Multi-class detection"] },
      { name: "Backend", technologies: ["Flask", "WebSocket", "Python 3.10+", "LlamaIndex"] },
      { name: "Frontend", technologies: ["Next.js", "React", "TypeScript", "Tailwind CSS"] },
      { name: "Performance", technologies: ["CUDA Acceleration", "GPU Optimization", "Parallel Processing"] }
    ]
  },
  {
    title: "Deployment Configuration",
    content: [
      { name: "Backend Deployment", platforms: ["Render", "Heroku", "AWS Elastic Beanstalk"] },
      { name: "Frontend Deployment", platforms: ["Vercel", "Netlify", "GitHub Pages"] },
      { name: "Containerization", technologies: ["Docker Support", "Kubernetes Ready"] }
    ]
  }
];

const SocialLinks = () => null;

const ProjectOptions = () => {
  const [selectedOption, setSelectedOption] = useState<string | null>(null);

  const options = [
    {
      id: 'architecture',
      title: 'System Architecture',
      description: 'Comprehensive overview of the WebSocket Object Detection system',
      details: ['Real-time object detection using YOLO', 'WebSocket communication protocol', 'Zero-shot learning capabilities', 'AI-powered explanations with Gemini']
    },
    {
      id: 'technologies',
      title: 'Key Technologies',
      description: 'Advanced tech stack powering the solution',
      details: ['Python Flask Backend', 'Next.js Frontend', 'YOLO Object Detection', 'Google Gemini AI', 'WebSocket Real-time Communication']
    },
    {
      id: 'deployment',
      title: 'Deployment Strategy',
      description: 'Scalable and efficient deployment approach',
      details: ['Docker containerization', 'Microservices architecture', 'Cloud-ready configuration', 'Kubernetes compatibility']
    }
  ];

  const handleOptionClick = (optionId: string) => {
    setSelectedOption(selectedOption === optionId ? null : optionId);
  };

  return (
    <div className="w-full max-w-4xl mx-auto px-4 py-8">
      <div className="space-y-4">
        {options.map((option) => (
          <div 
            key={option.id}
            className={`border rounded-lg transition-all duration-300 ease-in-out ${selectedOption === option.id ? 'border-blue-500 bg-blue-50/10 shadow-lg' : 'border-gray-200 hover:border-blue-300'} overflow-hidden`}
          >
            <div onClick={() => handleOptionClick(option.id)} className="flex justify-between items-center p-4 cursor-pointer hover:bg-blue-50/20 group">
              <div>
                <h3 className="text-lg font-semibold text-gray-800 dark:text-gray-200">{option.title}</h3>
                <p className="text-sm text-gray-500 dark:text-gray-400">{option.description}</p>
              </div>
              <ChevronLeftIcon className={`w-6 h-6 text-gray-400 transform transition-transform duration-300 ${selectedOption === option.id ? 'rotate-90' : '-rotate-90'}`} />
            </div>
            {selectedOption === option.id && (
              <div className="p-4 bg-gray-50/50 dark:bg-gray-800/50 border-t border-gray-200 dark:border-gray-700 animate-apple-fade-in">
                <ul className="space-y-2 pl-4 list-disc text-gray-700 dark:text-gray-300">
                  {option.details.map((detail, index) => (<li key={index} className="text-sm">{detail}</li>))}
                </ul>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

const DevelopmentEnvironment = () => {
  return (
    <div className="bg-gray-50 dark:bg-gray-900 p-6 rounded-xl border dark:border-gray-700 shadow-lg">
      <h2 className="text-2xl font-bold mb-4 text-gray-800 dark:text-gray-200 flex items-center">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" className="w-8 h-8 mr-3 text-blue-500" fill="currentColor">
          <path d="M4.13,10.58A3.45,3.45,0,0,1,4,9.5,3.5,3.5,0,0,1,7.5,6h9a3.5,3.5,0,0,1,3.5,3.5,3.45,3.45,0,0,1-.13,1.08A5,5,0,0,1,16.5,19h-9a5,5,0,0,1-3.37-8.42Z"/>
        </svg>
        Development Environment
      </h2>
      <div className="space-y-4 text-gray-600 dark:text-gray-300">
        <div className="bg-white dark:bg-gray-800 p-4 rounded-lg shadow-sm">
          <h3 className="font-semibold text-lg mb-2 text-gray-800 dark:text-gray-200">Hardware & Platform</h3>
          <ul className="list-disc list-inside space-y-2">
            <li><strong>Machine:</strong> Apple MacBook Air with ARM-based Apple Silicon (M-series chip)</li>
            <li><strong>Architecture:</strong> ARM64 / Apple Silicon</li>
            <li><strong>Operating System:</strong> macOS (latest version)</li>
          </ul>
        </div>
        <div className="bg-white dark:bg-gray-800 p-4 rounded-lg shadow-sm">
          <h3 className="font-semibold text-lg mb-2 text-gray-800 dark:text-gray-200">Apple Design Principles in Practice</h3>
          <ul className="list-disc list-inside space-y-2">
            <li><strong>Typography:</strong> Using SF Pro-inspired font stack</li>
            <li><strong>Color Palette:</strong> Semantic color tokens with accessibility</li>
            <li><strong>Animations:</strong> Subtle, natural motion design</li>
            <li><strong>Interaction:</strong> Responsive and intuitive UI components</li>
            <li><strong>Performance:</strong> Optimized for ARM architecture</li>
          </ul>
        </div>
        <div className="bg-blue-50 dark:bg-blue-900/30 p-4 rounded-lg border border-blue-200 dark:border-blue-800">
          <p className="text-blue-800 dark:text-blue-200 italic">
            &quot;Leveraging the power of ARM and Apple&apos;s design language to create a seamless, performant, and visually elegant user experience.&quot; - Niladri Das
          </p>
        </div>
      </div>
    </div>
  );
};

const CodeShowcase = () => {
  const [activeLanguage, setActiveLanguage] = useState('python');
  
  const codeSnippets = {
    python: {
      title: 'WebSocket Object Detection (Python)',
      code: `...`,
      language: 'python'
    },
    typescript: {
      title: 'WebSocket Client (TypeScript)',
      code: `...`,
      language: 'typescript'
    },
    docker: {
      title: 'Containerization (Dockerfile)',
      code: `...`,
      language: 'dockerfile'
    }
  };

  const languageButtons = [
    { name: 'Python', icon: '🐍', language: 'python' },
    { name: 'TypeScript', icon: '🟦', language: 'typescript' },
    { name: 'Docker', icon: '🐳', language: 'docker' }
  ];

  return (
    <div className="bg-gray-50 dark:bg-gray-900 p-6 rounded-xl border dark:border-gray-700 shadow-lg">
      <h2 className="text-3xl font-bold mb-6 text-center text-gray-800 dark:text-gray-200">Code Showcase</h2>
      <div className="flex justify-center mb-6 space-x-4">
        {languageButtons.map((btn) => (
          <button
            key={btn.language}
            onClick={() => setActiveLanguage(btn.language)}
            className={`px-4 py-2 rounded-lg transition-all duration-300 flex items-center space-x-2 ${activeLanguage === btn.language ? 'bg-blue-500 text-white shadow-lg' : 'bg-gray-200 dark:bg-gray-700 text-gray-700 dark:text-gray-300 hover:bg-gray-300 dark:hover:bg-gray-600'}`}
          >
            <span className="text-2xl">{btn.icon}</span><span>{btn.name}</span>
          </button>
        ))}
      </div>
      <div className="code-showcase-container">
        <div key={activeLanguage} className="bg-black/90 rounded-xl overflow-hidden shadow-2xl border border-gray-700 animate-apple-fade-in">
          <div className="bg-gray-800/50 px-4 py-3 border-b border-gray-700/30 flex justify-between items-center">
            <h3 className="text-lg font-semibold text-purple-300">{codeSnippets[activeLanguage].title}</h3>
            <div className="flex space-x-2">
              <button className="bg-green-500/20 hover:bg-green-500/40 text-green-300 px-3 py-1 rounded text-xs hover:bg-gray-800 transition-colors dark:bg-gray-700 dark:hover:bg-gray-600" onClick={() => navigator.clipboard.writeText(codeSnippets[activeLanguage].code)}>Copy</button>
            </div>
          </div>
          <pre className={`language-${activeLanguage} p-4 text-xs leading-relaxed text-gray-200 overflow-x-auto max-h-[500px] scrollbar-thin scrollbar-thumb-purple-800 scrollbar-track-gray-900`}>
            <code>{codeSnippets[activeLanguage].code}</code>
          </pre>
        </div>
      </div>
    </div>
  );
};

export default function DocsPage() {
  const router = useRouter();
  const [isDarkMode, setIsDarkMode] = useState(true);
  const [showCodeNotice, setShowCodeNotice] = useState(true);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth <= 768);
    const savedTheme = localStorage.getItem('theme');
    const prefersDarkMode = savedTheme ? savedTheme === 'dark' : window.matchMedia('(prefers-color-scheme: dark)').matches;
    
    setIsDarkMode(prefersDarkMode);
    document.body.classList.toggle('light-mode', !prefersDarkMode);
    
    checkMobile();
    window.addEventListener('resize', checkMobile);
    
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  return (
    <main className={`min-h-screen relative dark:bg-gray-900 dark:text-gray-100 ${inter.variable} ${robotoMono.variable}`}>
      {showCodeNotice && (
        <div className="fixed top-0 left-0 right-0 bg-yellow-500 text-black text-center p-2 z-[100] flex items-center justify-center dark:bg-yellow-700 dark:text-white">
          <span className="mr-4 font-bold">🚧 Notice:</span>
          <p>Full source code is not publicly shared yet. Detailed documentation available.</p>
          <button onClick={() => setShowCodeNotice(false)} className="ml-4 bg-black text-white px-2 py-1 rounded text-xs hover:bg-gray-800 transition-colors dark:bg-gray-700 dark:hover:bg-gray-600">Dismiss</button>
        </div>
      )}
      <button onClick={() => setIsDarkMode(!isDarkMode)} aria-label={`Switch to ${isDarkMode ? 'light' : 'dark'} mode`} aria-pressed={isDarkMode} title={`Toggle ${isDarkMode ? 'Light' : 'Dark'} Mode`} className="theme-toggle fixed bottom-4 right-4 z-50">
        {isDarkMode ? '🌞' : '🌙'}
      </button>
      {isMobile && (
        <div className="md:hidden fixed top-0 left-0 right-0 bg-gray-100 dark:bg-gray-800 z-50 p-4 flex justify-between items-center border-b border-gray-200 dark:border-gray-700">
          <button onClick={() => router.push('/')} className="text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white transition-colors">
            <ChevronLeftIcon className="h-6 w-6" />
          </button>
          <h1 className="text-lg font-semibold text-gray-800 dark:text-gray-200">Project Documentation</h1>
          <button className="text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white transition-colors">
            <Bars3Icon className="h-6 w-6" />
          </button>
        </div>
      )}
      <div className="bg-blue-50 dark:bg-blue-900/30 p-4 rounded-lg border border-blue-200 dark:border-blue-800 mt-16">
        <p className="text-blue-800 dark:text-blue-200 italic">
          &quot;Leveraging the power of ARM and Apple&apos;s design language to create a seamless, performant, and visually elegant user experience.&quot; - Niladri Das
        </p>
      </div>
      <section className="container mx-auto px-4 py-16 dark:bg-gray-900">
        <h1 className="text-4xl font-bold mb-8 text-center text-gray-900 dark:text-gray-100">WebSocket Object Detection Documentation</h1>
        <ProjectOptions />
        <DevelopmentEnvironment />
        <CodeShowcase />
      </section>
      <SocialLinks />
    </main>
  );
}