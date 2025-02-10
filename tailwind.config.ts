import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}'
  ],
  darkMode: ['class', '[data-mode="dark"]'],
  theme: {
    extend: {
      colors: {
        background: {
          light: '#ffffff',
          dark: '#111827',
          secondary: {
            light: '#f4f4f5',
            dark: '#1f2937'
          }
        },
        foreground: {
          light: '#111827',
          dark: '#f9fafb',
          secondary: {
            light: '#4b5563',
            dark: '#9ca3af'
          }
        },
        accent: {
          primary: {
            light: '#3b82f6',
            dark: '#60a5fa'
          },
          secondary: {
            light: '#10b981',
            dark: '#34d399'
          }
        }
      },
      
      // Apple-inspired Animations
      animation: {
        'apple-fade-in': 'fadeIn 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
        'apple-scale-subtle': 'scaleSubtle 0.2s cubic-bezier(0.4, 0, 0.2, 1)',
        'apple-hover-lift': 'hoverLift 0.2s cubic-bezier(0.4, 0, 0.2, 1)'
      },
      
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' }
        },
        scaleSubtle: {
          '0%': { transform: 'scale(0.98)' },
          '100%': { transform: 'scale(1)' }
        },
        hoverLift: {
          '0%': { transform: 'translateY(0)' },
          '100%': { transform: 'translateY(-4px)' }
        }
      },
      
      // Transition Configurations
      transitionProperty: {
        'theme': 'background-color, color, border-color, text-decoration-color, fill, stroke'
      },
      transitionTimingFunction: {
        'apple-ease': 'cubic-bezier(0.4, 0, 0.2, 1)'
      },
      transitionDuration: {
        'theme-fast': '150ms',
        'theme-normal': '300ms',
        'theme-slow': '500ms'
      }
    }
  },
  plugins: []
}

export default config
