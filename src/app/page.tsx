"use client";

import React from "react";
import { useRouter } from "next/navigation";
import Link from 'next/link';
import Image from 'next/image';
import { ArrowRightCircleIcon } from '@heroicons/react/24/solid';

export default function Home() {
  const router = useRouter();

  return (
    <div 
      className="min-h-screen bg-[var(--background)] text-[var(--foreground)] 
                 flex flex-col justify-center items-center p-6 
                 animate-fade-in"
    >
      <div className="max-w-5xl mx-auto text-center">
        <h1 
          className="text-5xl font-bold mb-6 
                     animate-slide-in-left 
                     text-gradient"
        >
          Agentic Zero-Shot Object Detection
        </h1>
        <p 
          className="text-lg mb-8 
                     animate-slide-in-right 
                     opacity-80"
        >
          An advanced AI system combining YOLO, LlamaIndex, and WebSocket technologies for intelligent, real-time object recognition.
        </p>
        <div className="relative w-full max-w-4xl mx-auto mb-8 group">
          <Image 
            src="/websocket_objectdetection.png" 
            alt="WebSocket Object Detection System" 
            width={1200} 
            height={800} 
            priority
            className="
              rounded-xl 
              shadow-2xl 
              transition-all 
              duration-300 
              group-hover:scale-[1.02] 
              group-hover:shadow-3xl 
              transform 
              hover:rotate-1
            "
          />
          <div className="
            absolute 
            inset-0 
            bg-black/20 
            rounded-xl 
            opacity-0 
            group-hover:opacity-100 
            transition-opacity 
            duration-300 
            flex 
            items-center 
            justify-center
          ">
            <span className="
              text-white 
              text-lg 
              font-semibold 
              bg-black/50 
              px-4 
              py-2 
              rounded-md
            ">
              Real-time AI Object Detection
            </span>
          </div>
        </div>
        <div className="flex justify-center items-center space-x-4">
          <Link 
            href="/docs" 
            className="group relative inline-block"
            aria-label="Get Started"
          >
            <ArrowRightCircleIcon 
              className="
                h-16 w-16 
                text-[var(--foreground)] 
                hover:text-[var(--accent)] 
                transition-all duration-300 
                transform hover:scale-110 
                active:scale-95
                drop-shadow-lg hover:drop-shadow-2xl
                interactive-element
              "
            />
            <span 
              className="
                absolute 
                -bottom-8 
                left-1/2 
                transform -translate-x-1/2 
                text-sm 
                text-[var(--foreground)] 
                opacity-0 
                group-hover:opacity-100 
                transition-opacity 
                duration-300
              "
            >
              Get Started
            </span>
          </Link>
        </div>
        
        <div className="mt-10 max-w-4xl mx-auto grid md:grid-cols-2 gap-4">
          {[
            {
              title: "🤖 AI-Powered Detection",
              description: "Ultralytics YOLO provides state-of-the-art real-time object detection with high accuracy and speed.",
              delay: "animate-delay-100"
            },
            {
              title: "💬 Zero-Shot Learning",
              description: "LlamaIndex enables natural language understanding and zero-shot explanations for detected objects.",
              delay: "animate-delay-200"
            },
            {
              title: "🌐 WebSocket Communication",
              description: "Real-time, bidirectional communication between Flask backend and Next.js frontend for seamless interaction.",
              delay: "animate-delay-300"
            },
            {
              title: "⚡ Performance Optimized",
              description: "CUDA support for GPU acceleration, ensuring lightning-fast object detection and processing.",
              delay: "animate-delay-400"
            }
          ].map((component, index) => (
            <div 
              key={index} 
              className={`
                backdrop-blur-light 
                p-4 
                rounded-lg 
                shadow-lg 
                animate-fade-in 
                ${component.delay}
              `}
            >
              <h3 className="text-xl font-bold mb-2">{component.title}</h3>
              <p className="opacity-80">{component.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
