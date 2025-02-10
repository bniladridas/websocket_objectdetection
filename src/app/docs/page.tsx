"use client";

import React, { useState, useEffect } from 'react';
import { Inter, Roboto_Mono } from 'next/font/google';
import { useRouter } from 'next/navigation';
import { 
  ChevronLeftIcon, 
  Bars3Icon, 
  XMarkIcon,
  LinkedinIcon,
  GithubIcon,
  TwitterIcon 
} from '@heroicons/react/24/solid';
import Image from 'next/image';

// Font configurations
const inter = Inter({ 
  subsets: ['latin'], 
  weight: ['300', '400', '600', '700'],
  display: 'swap'
});

const robotoMono = Roboto_Mono({ 
  subsets: ['latin'], 
  weight: ['400', '700'],
  display: 'swap'
});

const projectSections = [
  {
    title: "Project Structure",
    content: [
      { 
        name: "Backend Architecture", 
        description: "Flask-based WebSocket server with advanced object detection",
        codeSnippets: [
          {
            title: "Main Backend Script (app.py)",
            code: `
import os
import cv2
import torch
import numpy as np
import firebase_admin
from flask import Flask, request, jsonify, Response
from flask_cors import CORS
from flask_socketio import SocketIO, emit
from ultralytics import YOLO
import google.generativeai as genai

# Initialize Flask Application
app = Flask(__name__)
CORS(app)
socketio = SocketIO(app, cors_allowed_origins="*")

# CUDA Device Configuration
device = torch.device('cuda' if torch.cuda.is_available() else 'cpu')

# YOLO Object Detection Handler
@socketio.on('webcam_frame')
def handle_webcam_frame(data):
    # Load YOLO model
    model = YOLO('yolov8n.pt', task='detect')
    
    # Decode and process frame
    frame = cv2.imdecode(np.frombuffer(data, np.uint8), cv2.IMREAD_COLOR)
    results = model(frame)
    
    # Emit detection results
    for result in results:
        boxes = result.boxes
        for box in boxes:
            emit('object_detected', {
                'class': model.names[box.cls[0].item()],
                'confidence': box.conf[0].item(),
                'coordinates': box.xyxy[0].tolist()
            })

# Zero-Shot Explanation with Gemini
def generate_explanation(detected_object):
    genai.configure(api_key=os.getenv('GEMINI_API_KEY'))
    model = genai.GenerativeModel('gemini-pro')
    
    prompt = f"Provide a detailed explanation about {detected_object}"
    response = model.generate_content(prompt)
    return response.text

if __name__ == '__main__':
    socketio.run(app, host='0.0.0.0', port=5002, debug=True)
`
          }
        ]
      },
      { 
        name: "Deployment Scripts", 
        description: "Comprehensive project initialization and launch scripts",
        codeSnippets: [
          {
            title: "Launch Script (launch.sh)",
            code: `#!/bin/bash

# Project Initialization Script

# Color Codes
GREEN='\\033[0;32m'
RED='\\033[0;31m'
NC='\\033[0m'

# Project Setup Function
setup_project() {
    # Create Virtual Environment
    python3 -m venv backend/venv
    source backend/venv/bin/activate

    # Install Dependencies
    pip install --upgrade pip
    pip install -r backend/requirements.txt

    # Install PyTorch with CUDA Support
    pip install torch torchvision
}

# Frontend Setup
setup_frontend() {
    cd frontend/Agentic\\ Object\\ Detection
    npm install
    npm run dev
}

# Main Execution
main() {
    echo "🚀 Initializing Zero-Shot Object Detection Project"
    
    setup_project
    setup_frontend
}

main
`
          }
        ]
      },
      { 
        name: "Dependency Management", 
        description: "Detailed Python and system dependencies",
        codeSnippets: [
          {
            title: "Requirements File (requirements.txt)",
            code: `# Backend Dependencies
flask==2.3.2
flask-cors==4.0.0
flask-socketio==5.3.4
ultralytics==8.0.196
torch
torchvision
opencv-python-headless
llama-index==0.9.15
firebase-admin==6.2.0
python-socketio==5.9.0
simple-websocket==0.10.1
numpy
requests==2.31.0
python-dotenv==1.0.0
gunicorn==20.1.0
gevent-websocket==0.10.1
google-generativeai
sentence-transformers
eventlet==0.33.3
`
          },
          {
            title: "Dockerfile for Containerization",
            code: `# Multi-stage build for Zero-Shot Object Detection

# Base Python Image
FROM python:3.10-slim-buster AS base

# Set working directory
WORKDIR /app

# Install system dependencies
RUN apt-get update && apt-get install -y \\
    build-essential \\
    curl \\
    software-properties-common \\
    git \\
    && rm -rf /var/lib/apt/lists/*

# Backend Stage
FROM base AS backend
COPY backend/requirements.txt .
RUN pip install --no-cache-dir -r requirements.txt

# Copy backend code
COPY backend/ .

# Frontend Stage
FROM node:18-alpine AS frontend
WORKDIR /app
COPY frontend/Agentic\\ Object\\ Detection/package*.json ./
RUN npm install
COPY frontend/Agentic\\ Object\\ Detection/ .

# Final Stage
FROM base
COPY --from=backend /app /app/backend
COPY --from=frontend /app /app/frontend

# Expose ports
EXPOSE 5002 5173

# Run application
CMD ["python", "backend/app.py"]
`
          }
        ]
      }
    ]
  },
  {
    title: "Technologies",
    content: [
      { 
        name: "Object Detection", 
        technologies: [
          "Ultralytics YOLO",
          "Real-time inference",
          "Multi-class detection"
        ]
      },
      { 
        name: "Backend", 
        technologies: [
          "Flask",
          "WebSocket",
          "Python 3.10+",
          "LlamaIndex"
        ]
      },
      { 
        name: "Frontend", 
        technologies: [
          "Next.js",
          "React",
          "TypeScript",
          "Tailwind CSS"
        ]
      },
      { 
        name: "Performance", 
        technologies: [
          "CUDA Acceleration",
          "GPU Optimization",
          "Parallel Processing"
        ]
      }
    ]
  },
  {
    title: "Deployment Configuration",
    content: [
      { 
        name: "Backend Deployment", 
        platforms: [
          "Render",
          "Heroku",
          "AWS Elastic Beanstalk"
        ]
      },
      { 
        name: "Frontend Deployment", 
        platforms: [
          "Vercel",
          "Netlify",
          "GitHub Pages"
        ]
      },
      { 
        name: "Containerization", 
        technologies: [
          "Docker Support",
          "Kubernetes Ready"
        ]
      }
    ]
  }
];

const SocialLinks = () => (
  <div className="flex justify-center space-x-6 mt-6">
    <a 
      href="https://www.linkedin.com/posts/bniladridas_ai-objectdetection-websockets-activity-7294298861332815873-aox3?utm_source=share&utm_medium=member_desktop" 
      target="_blank" 
      rel="noopener noreferrer"
      className="text-[var(--foreground)] hover:text-blue-500 transition-colors"
    >
      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
        <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.784 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
      </svg>
    </a>
    <a 
      href="https://github.com/bniladridas/websocket_objectdetection" 
      target="_blank" 
      rel="noopener noreferrer"
      className="text-[var(--foreground)] hover:text-gray-500 transition-colors"
    >
      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
        <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
      </svg>
    </a>
    <a 
      href="https://twitter.com/bniladridas" 
      target="_blank" 
      rel="noopener noreferrer"
      className="text-[var(--foreground)] hover:text-black transition-colors"
    >
      <Image 
        src="/x-logo.svg" 
        alt="X Logo" 
        width={24} 
        height={24} 
        className="hover:opacity-70 transition-opacity"
      />
    </a>
  </div>
);

const ProjectOptions = () => {
  const [selectedOption, setSelectedOption] = useState<string | null>(null);
  const [isExpanded, setIsExpanded] = useState(false);

  const options = [
    {
      id: 'architecture',
      title: 'System Architecture',
      description: 'Comprehensive overview of the WebSocket Object Detection system',
      details: [
        'Real-time object detection using YOLO',
        'WebSocket communication protocol',
        'Zero-shot learning capabilities',
        'AI-powered explanations with Gemini'
      ]
    },
    {
      id: 'technologies',
      title: 'Key Technologies',
      description: 'Advanced tech stack powering the solution',
      details: [
        'Python Flask Backend',
        'Next.js Frontend',
        'YOLO Object Detection',
        'Google Gemini AI',
        'WebSocket Real-time Communication'
      ]
    },
    {
      id: 'deployment',
      title: 'Deployment Strategy',
      description: 'Scalable and efficient deployment approach',
      details: [
        'Docker containerization',
        'Microservices architecture',
        'Cloud-ready configuration',
        'Kubernetes compatibility'
      ]
    }
  ];

  const handleOptionClick = (optionId: string) => {
    setSelectedOption(selectedOption === optionId ? null : optionId);
    setIsExpanded(true);
  };

  return (
    <div className="w-full max-w-4xl mx-auto px-4 py-8">
      <div className="space-y-4">
        {options.map((option) => (
          <div 
            key={option.id}
            className={`
              border rounded-lg transition-all duration-300 ease-in-out
              ${selectedOption === option.id 
                ? 'border-blue-500 bg-blue-50/10 shadow-lg' 
                : 'border-gray-200 hover:border-blue-300'}
              overflow-hidden
            `}
          >
            <div 
              onClick={() => handleOptionClick(option.id)}
              className="
                flex justify-between items-center 
                p-4 cursor-pointer 
                hover:bg-blue-50/20 
                group
              "
            >
              <div>
                <h3 className="text-lg font-semibold text-gray-800 dark:text-gray-200">
                  {option.title}
                </h3>
                <p className="text-sm text-gray-500 dark:text-gray-400">
                  {option.description}
                </p>
              </div>
              <ChevronLeftIcon 
                className={`
                  w-6 h-6 text-gray-400 
                  transform transition-transform duration-300
                  ${selectedOption === option.id ? 'rotate-90' : '-rotate-90'}
                `} 
              />
            </div>

            {selectedOption === option.id && (
              <div 
                className="
                  p-4 bg-gray-50/50 dark:bg-gray-800/50 
                  border-t border-gray-200 dark:border-gray-700
                  animate-apple-fade-in
                "
              >
                <ul className="space-y-2 pl-4 list-disc text-gray-700 dark:text-gray-300">
                  {option.details.map((detail, index) => (
                    <li key={index} className="text-sm">
                      {detail}
                    </li>
                  ))}
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
        <svg 
          xmlns="http://www.w3.org/2000/svg" 
          viewBox="0 0 24 24" 
          className="w-8 h-8 mr-3 text-blue-500"
          fill="currentColor"
        >
          <path d="M4.13,10.58A3.45,3.45,0,0,1,4,9.5,3.5,3.5,0,0,1,7.5,6h9a3.5,3.5,0,0,1,3.5,3.5,3.45,3.45,0,0,1-.13,1.08A5,5,0,0,1,16.5,19h-9a5,5,0,0,1-3.37-8.42Z"/>
        </svg>
        Development Environment
      </h2>
      
      <div className="space-y-4 text-gray-600 dark:text-gray-300">
        <div className="bg-white dark:bg-gray-800 p-4 rounded-lg shadow-sm">
          <h3 className="font-semibold text-lg mb-2 text-gray-800 dark:text-gray-200">
            Hardware & Platform
          </h3>
          <ul className="list-disc list-inside space-y-2">
            <li>
              <strong>Machine:</strong> Apple MacBook Air with ARM-based Apple Silicon (M-series chip)
            </li>
            <li>
              <strong>Architecture:</strong> ARM64 / Apple Silicon
            </li>
            <li>
              <strong>Operating System:</strong> macOS (latest version)
            </li>
          </ul>
        </div>
        
        <div className="bg-white dark:bg-gray-800 p-4 rounded-lg shadow-sm">
          <h3 className="font-semibold text-lg mb-2 text-gray-800 dark:text-gray-200">
            Apple Design Principles in Practice
          </h3>
          <ul className="list-disc list-inside space-y-2">
            <li>
              <strong>Typography:</strong> Using SF Pro-inspired font stack
            </li>
            <li>
              <strong>Color Palette:</strong> Semantic color tokens with accessibility
            </li>
            <li>
              <strong>Animations:</strong> Subtle, natural motion design
            </li>
            <li>
              <strong>Interaction:</strong> Responsive and intuitive UI components
            </li>
            <li>
              <strong>Performance:</strong> Optimized for ARM architecture
            </li>
          </ul>
        </div>
        
        <div className="bg-blue-50 dark:bg-blue-900/30 p-4 rounded-lg border border-blue-200 dark:border-blue-800">
          <p className="text-blue-800 dark:text-blue-200 italic">
            "Leveraging the power of ARM and Apple's design language to create 
            a seamless, performant, and visually elegant user experience."
            - Niladri Das
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
      code: `import cv2
import torch
import numpy as np
from ultralytics import YOLO
from flask_socketio import SocketIO, emit

class ObjectDetector:
    def __init__(self, model_path='yolov8n.pt'):
        self.model = YOLO(model_path, task='detect')
        self.device = torch.device('cuda' if torch.cuda.is_available() else 'cpu')
    
    def detect_objects(self, frame):
        """
        Perform real-time object detection on input frame
        
        Args:
            frame (np.ndarray): Input image frame
        
        Returns:
            list: Detected object information
        """
        results = self.model(frame)
        detections = []
        
        for result in results:
            boxes = result.boxes
            for box in boxes:
                detections.append({
                    'class': self.model.names[box.cls[0].item()],
                    'confidence': box.conf[0].item(),
                    'coordinates': box.xyxy[0].tolist()
                })
        
        return detections

@socketio.on('webcam_frame')
def handle_webcam_frame(data):
    """
    WebSocket event handler for processing webcam frames
    """
    frame = cv2.imdecode(np.frombuffer(data, np.uint8), cv2.IMREAD_COLOR)
    detector = ObjectDetector()
    results = detector.detect_objects(frame)
    
    for detection in results:
        emit('object_detected', detection)
`,
      language: 'python'
    },
    typescript: {
      title: 'WebSocket Client (TypeScript)',
      code: `import { io } from 'socket.io-client';
import { useState, useEffect } from 'react';

interface ObjectDetection {
  class: string;
  confidence: number;
  coordinates: number[];
}

export const useObjectDetection = (socketUrl: string) => {
  const [detections, setDetections] = useState<ObjectDetection[]>([]);
  const [socket, setSocket] = useState<any>(null);

  useEffect(() => {
    // Initialize WebSocket connection
    const newSocket = io(socketUrl, {
      transports: ['websocket'],
      reconnection: true,
      reconnectionAttempts: 5
    });

    setSocket(newSocket);

    // Listen for object detection events
    newSocket.on('object_detected', (detection: ObjectDetection) => {
      setDetections(prev => [...prev, detection]);
    });

    // Cleanup on component unmount
    return () => {
      newSocket.disconnect();
    };
  }, [socketUrl]);

  const sendFrame = (frame: ArrayBuffer) => {
    socket?.emit('webcam_frame', frame);
  };

  return { detections, sendFrame };
};

// Usage in React Component
const ObjectDetectionView = () => {
  const { detections, sendFrame } = useObjectDetection('http://localhost:5002');

  return (
    <div className="object-detection-container">
      {detections.map((detection, index) => (
        <div 
          key={index} 
          className="detection-item"
        >
          {detection.class} (Confidence: {detection.confidence})
        </div>
      ))}
    </div>
  );
};
`,
      language: 'typescript'
    },
    docker: {
      title: 'Containerization (Dockerfile)',
      code: `# Multi-stage build for Zero-Shot Object Detection

# Base Python Image
FROM python:3.10-slim-buster AS base
WORKDIR /app

# Install system dependencies
RUN apt-get update && apt-get install -y \\
    build-essential \\
    curl \\
    software-properties-common \\
    git \\
    && rm -rf /var/lib/apt/lists/*

# Backend Stage
FROM base AS backend
COPY backend/requirements.txt .
RUN pip install --no-cache-dir -r requirements.txt

# Copy backend code
COPY backend/ .

# Frontend Stage
FROM node:18-alpine AS frontend
WORKDIR /app
COPY frontend/package*.json ./
RUN npm install
COPY frontend/ .

# Final Stage
FROM base
COPY --from=backend /app /app/backend
COPY --from=frontend /app /app/frontend

# Expose ports
EXPOSE 5002 3000

# Run application
CMD ["python", "backend/app.py"]
`,
      language: 'dockerfile'
    }
  };

  const languageButtons = [
    { 
      name: 'Python', 
      icon: '🐍', 
      language: 'python' 
    },
    { 
      name: 'TypeScript', 
      icon: '🟦', 
      language: 'typescript' 
    },
    { 
      name: 'Docker', 
      icon: '🐳', 
      language: 'docker' 
    }
  ];

  return (
    <div className="bg-gray-50 dark:bg-gray-900 p-6 rounded-xl border dark:border-gray-700 shadow-lg">
      <h2 className="text-3xl font-bold mb-6 text-center text-gray-800 dark:text-gray-200">
        Code Showcase
      </h2>
      
      <div className="flex justify-center mb-6 space-x-4">
        {languageButtons.map((btn) => (
          <button
            key={btn.language}
            onClick={() => setActiveLanguage(btn.language)}
            className={`
              px-4 py-2 rounded-lg transition-all duration-300
              flex items-center space-x-2
              ${activeLanguage === btn.language 
                ? 'bg-blue-500 text-white shadow-lg' 
                : 'bg-gray-200 dark:bg-gray-700 text-gray-700 dark:text-gray-300 hover:bg-gray-300 dark:hover:bg-gray-600'}
            `}
          >
            <span className="text-2xl">{btn.icon}</span>
            <span>{btn.name}</span>
          </button>
        ))}
      </div>

      <div className="code-showcase-container">
        <div 
          key={activeLanguage}
          className="
            bg-black/90 
            rounded-xl 
            overflow-hidden 
            shadow-2xl 
            border 
            border-gray-700
            animate-apple-fade-in
          "
        >
          <div className="
            bg-gray-800/50 
            px-4 
            py-3 
            border-b 
            border-gray-700/30 
            flex 
            justify-between 
            items-center
          ">
            <h3 className="text-lg font-semibold text-purple-300">
              {codeSnippets[activeLanguage].title}
            </h3>
            <div className="flex space-x-2">
              <button 
                className="
                  bg-green-500/20 
                  hover:bg-green-500/40 
                  text-green-300 
                  px-3 
                  py-1 
                  rounded 
                  transition-colors
                "
                onClick={() => {
                  navigator.clipboard.writeText(codeSnippets[activeLanguage].code);
                }}
              >
                Copy
              </button>
            </div>
          </div>
          <pre className={`
            language-${activeLanguage}
            p-4 
            text-xs 
            leading-relaxed 
            text-gray-200 
            overflow-x-auto 
            max-h-[500px] 
            scrollbar-thin 
            scrollbar-thumb-purple-800 
            scrollbar-track-gray-900
          `}>
            <code>{codeSnippets[activeLanguage].code}</code>
          </pre>
        </div>
      </div>
    </div>
  );
};

export default function DocsPage() {
  const router = useRouter();
  const [activeSection, setActiveSection] = useState(0);
  const [isMobile, setIsMobile] = useState(false);
  const [isDarkMode, setIsDarkMode] = useState(true);
  const [showCodeNotice, setShowCodeNotice] = useState(true);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth <= 768);
    };
    
    // Persistent Theme Preference
    const savedTheme = localStorage.getItem('theme');
    const prefersDarkMode = savedTheme 
      ? savedTheme === 'dark' 
      : window.matchMedia('(prefers-color-scheme: dark)').matches;
    
    setIsDarkMode(prefersDarkMode);
    document.body.classList.toggle('light-mode', !prefersDarkMode);
    
    checkMobile();
    window.addEventListener('resize', checkMobile);
    
    return () => {
      window.removeEventListener('resize', checkMobile);
    };
  }, []);

  const toggleDarkMode = () => {
    const newMode = !isDarkMode;
    setIsDarkMode(newMode);
    document.body.classList.toggle('light-mode', !newMode);
    
    // Persist theme preference
    localStorage.setItem('theme', newMode ? 'dark' : 'light');
    
    // Subtle theme transition sound (optional)
    try {
      const audio = new Audio('/theme-toggle.mp3');
      audio.volume = 0.2;
      audio.play().catch(() => {});
    } catch {}
  };

  return (
    <main 
      className="min-h-screen relative dark:bg-gray-900 dark:text-gray-100 transition-colors duration-300"
      style={{
        // Reduce color transition repaint
        willChange: 'background-color, color'
      }}
    >
      {/* Code Availability Notice */}
      {showCodeNotice && (
        <div className="
          fixed 
          top-0 
          left-0 
          right-0 
          bg-yellow-500 
          text-black 
          text-center 
          p-2 
          z-[100] 
          flex 
          items-center 
          justify-center
          dark:bg-yellow-700 
          dark:text-white
        ">
          <span className="mr-4 font-bold">🚧 Notice:</span>
          <p>Full source code is not publicly shared yet. Detailed documentation available.</p>
          <button 
            onClick={() => setShowCodeNotice(false)}
            className="
              ml-4 
              bg-black 
              text-white 
              px-2 
              py-1 
              rounded 
              text-xs 
              hover:bg-gray-800 
              transition-colors
              dark:bg-gray-700
              dark:hover:bg-gray-600
            "
          >
            Dismiss
          </button>
        </div>
      )}

      {/* Theme Toggle Button with Enhanced Accessibility */}
      <button 
        onClick={toggleDarkMode} 
        aria-label={`Switch to ${isDarkMode ? 'light' : 'dark'} mode`}
        aria-pressed={isDarkMode}
        title={`Toggle ${isDarkMode ? 'Light' : 'Dark'} Mode`}
        className="
          theme-toggle 
          fixed 
          bottom-4 
          right-4 
          z-50 
          focus:outline-none 
          focus:ring-2 
          focus:ring-blue-500 
          rounded-full 
          transition-transform 
          hover:scale-110 
          active:scale-95
        "
      >
        <span className="sr-only">
          {isDarkMode ? 'Enable Light Mode' : 'Enable Dark Mode'}
        </span>
        {isDarkMode ? '🌞' : '🌙'}
      </button>

      {/* Back to Home Button */}
      <div className="absolute top-6 left-6 z-50">
        <button 
          onClick={() => router.push('/')}
          className="
            group 
            flex 
            items-center 
            justify-center 
            w-12 
            h-12 
            rounded-full 
            bg-gray-100 
            dark:bg-gray-800 
            hover:bg-gray-200 
            dark:hover:bg-gray-700 
            transition-all 
            duration-300 
            shadow-md 
            hover:shadow-lg
          "
        >
          <ChevronLeftIcon 
            className="
              w-6 
              h-6 
              text-gray-700 
              dark:text-gray-300 
              group-hover:translate-x-[-2px] 
              transition-transform
            " 
          />
          <span className="
            absolute 
            opacity-0 
            group-hover:opacity-100 
            group-hover:translate-x-2 
            transition-all 
            duration-300 
            text-xs 
            text-gray-500 
            dark:text-gray-400 
            ml-2
          ">
            Home
          </span>
        </button>
      </div>

      {/* Mobile Header */}
      {isMobile && (
        <div className="md:hidden fixed top-0 left-0 right-0 bg-gray-100 dark:bg-gray-800 z-50 p-4 flex justify-between items-center border-b border-gray-200 dark:border-gray-700">
          <button 
            onClick={() => router.push('/')}
            className="text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white transition-colors"
          >
            <ChevronLeftIcon className="h-6 w-6" />
          </button>
          
          <h1 className="text-lg font-semibold text-gray-800 dark:text-gray-200">
            Project Documentation
          </h1>
          
          <button 
            className="text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white transition-colors"
          >
            <Bars3Icon className="h-6 w-6" />
          </button>
        </div>
      )}
      
      <section className="container mx-auto px-4 py-16 dark:bg-gray-900">
        <h1 className="text-4xl font-bold mb-8 text-center text-gray-900 dark:text-gray-100">
          WebSocket Object Detection Documentation
        </h1>
        
        <ProjectOptions />
        <DevelopmentEnvironment />
        <CodeShowcase />
      </section>
      
      {/* Social Links */}
      <SocialLinks />
    </main>
  );
}
