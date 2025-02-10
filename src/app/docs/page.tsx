"use client";

import React from 'react';
import { Inter } from 'next/font/google';

const inter = Inter({ 
  subsets: ['latin'], 
  display: 'swap', 
  variable: '--font-inter' 
});

const projectSections = [
  {
    title: "Project Overview",
    technologies: [
      "WebSocket Object Detection",
      "Real-time Image Analysis",
      "Machine Learning Integration"
    ]
  },
  {
    title: "Core Technologies",
    technologies: [
      "Next.js 15",
      "Flask Backend",
      "YOLO Object Detection",
      "WebSocket Communication"
    ]
  },
  {
    title: "Performance Features",
    technologies: [
      "GPU Acceleration",
      "Low-Latency Processing",
      "Multi-Class Detection"
    ]
  }
];

export default function DocsPage() {
  return (
    <main 
      className={`
        min-h-screen 
        p-6 
        bg-white 
        dark:bg-gray-900 
        text-gray-900 
        dark:text-gray-100 
        ${inter.variable}
      `}
    >
      <div className="container mx-auto max-w-4xl">
        <h1 className="text-4xl font-bold mb-6 text-center">
          WebSocket Object Detection
        </h1>
        
        {projectSections.map((section, index) => (
          <section 
            key={index} 
            className="bg-gray-100 dark:bg-gray-800 p-6 rounded-lg shadow-md mb-4"
          >
            <h2 className="text-2xl font-semibold mb-4">{section.title}</h2>
            
            <ul className="space-y-2 text-gray-700 dark:text-gray-300">
              {section.technologies.map((tech, techIndex) => (
                <li key={techIndex} className="flex items-center">
                  <span className="mr-2 text-blue-500">▶</span>
                  {tech}
                </li>
              ))}
            </ul>
          </section>
        ))}
        
        <div className="mt-6 text-center">
          <blockquote className="italic text-gray-600 dark:text-gray-400">
            &quot;Innovative technology meets elegant design&quot;
            - Project Team
          </blockquote>
        </div>
      </div>
    </main>
  );
}