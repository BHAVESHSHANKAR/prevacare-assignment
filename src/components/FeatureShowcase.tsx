import { useState, useEffect, useRef } from 'react'
import { ChevronLeft, ChevronRight, Heart, Video, Pill, BarChart3, Phone } from 'lucide-react'
import { cn } from '../lib/utils'

interface Feature {
  id: number
  title: string
  heading: string
  description: string
  icon: React.ReactNode
  gradient: string
  color: string
}

const features: Feature[] = [
  {
    id: 1,
    title: "Patient Monitoring",
    heading: "Real-time Health Tracking",
    description: "Monitor vital signs, medication schedules, and health metrics in real-time. Get instant alerts for critical changes and maintain comprehensive patient records with our advanced monitoring system.",
    icon: <Heart className="w-8 h-8" />,
    gradient: "from-red-400 to-pink-500",
    color: "text-red-500"
  },
  {
    id: 2,
    title: "Telemedicine",
    heading: "Virtual Consultations",
    description: "Connect with healthcare providers remotely through secure video calls. Schedule appointments, share medical records, and receive professional medical advice from the comfort of your home.",
    icon: <Video className="w-8 h-8" />,
    gradient: "from-blue-400 to-indigo-500",
    color: "text-blue-500"
  },
  {
    id: 3,
    title: "Medication Management",
    heading: "Smart Pill Reminders",
    description: "Never miss a dose with intelligent medication reminders. Track pill inventory, set custom schedules, and receive notifications for refills and potential drug interactions.",
    icon: <Pill className="w-8 h-8" />,
    gradient: "from-green-400 to-emerald-500",
    color: "text-green-500"
  },
  {
    id: 4,
    title: "Health Analytics",
    heading: "Comprehensive Reports",
    description: "Visualize your health data with detailed analytics and trends. Generate comprehensive reports for doctor visits and track your progress over time with interactive charts.",
    icon: <BarChart3 className="w-8 h-8" />,
    gradient: "from-purple-400 to-violet-500",
    color: "text-purple-500"
  },
  {
    id: 5,
    title: "Emergency Response",
    heading: "24/7 Emergency Support",
    description: "Access emergency services instantly with one-touch SOS features. Share your location and medical information with first responders for faster, more effective emergency care.",
    icon: <Phone className="w-8 h-8" />,
    gradient: "from-orange-400 to-red-500",
    color: "text-orange-500"
  }
]

export default function FeatureShowcase() {
  const [activeFeature, setActiveFeature] = useState(0)
  const [isSticky, setIsSticky] = useState(false)
  const sectionRef = useRef<HTMLDivElement>(null)
  const containerRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const handleScroll = () => {
      if (!sectionRef.current || !containerRef.current) return

      const sectionRect = sectionRef.current.getBoundingClientRect()
      
      // Check if section should be sticky
      const shouldBeSticky = sectionRect.top <= 0 && sectionRect.bottom > window.innerHeight
      setIsSticky(shouldBeSticky)

      // Auto-switch features based on scroll position when sticky
      if (shouldBeSticky) {
        const scrollProgress = Math.abs(sectionRect.top) / (sectionRect.height - window.innerHeight)
        const featureIndex = Math.min(Math.floor(scrollProgress * features.length), features.length - 1)
        setActiveFeature(featureIndex)
      }
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const nextFeature = () => {
    setActiveFeature((prev) => (prev + 1) % features.length)
  }

  const prevFeature = () => {
    setActiveFeature((prev) => (prev - 1 + features.length) % features.length)
  }

  const currentFeature = features[activeFeature]

  return (
    <div 
      ref={sectionRef}
      className="min-h-[300vh] bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-100 dark:from-gray-900 dark:via-slate-900 dark:to-gray-800"
    >
      <div 
        ref={containerRef}
        className={cn(
          "transition-all duration-500 ease-out",
          isSticky ? "fixed top-0 left-0 right-0 z-50 bg-white/95 dark:bg-gray-900/95 backdrop-blur-lg border-b border-gray-200/50 dark:border-gray-700/50" : "relative"
        )}
      >
        <div className="container mx-auto px-4 py-4 sm:py-6 lg:py-8">
          {/* Mobile Layout */}
          <div className="lg:hidden space-y-4">
            {/* Phone Mockup - Mobile First */}
            <div className="flex justify-center mb-6">
              <div className="relative">
                <div className="w-56 h-[400px] bg-gradient-to-b from-gray-800 to-black rounded-[2rem] p-2 shadow-xl">
                  <div className={cn(
                    "w-full h-full rounded-[1.5rem] relative overflow-hidden transition-all duration-700 bg-gradient-to-br",
                    currentFeature.gradient
                  )}>
                    {/* Status Bar */}
                    <div className="absolute top-0 left-0 right-0 h-8 flex items-center justify-between px-4 text-white/90 text-xs font-medium">
                      <span>9:41</span>
                      <div className="w-16 h-3 bg-black/30 rounded-full"></div>
                      <span>100%</span>
                    </div>
                    
                    {/* Dynamic Notch */}
                    <div className="absolute top-1 left-1/2 transform -translate-x-1/2 w-20 h-4 bg-black rounded-full"></div>
                    
                    {/* Feature Content */}
                    <div className="absolute inset-0 flex flex-col items-center justify-center text-white p-6 pt-12">
                      <div className="text-center space-y-4">
                        <div className="w-14 h-14 bg-white/20 backdrop-blur-sm rounded-xl mx-auto flex items-center justify-center shadow-lg">
                          <div className="text-white scale-75">
                            {currentFeature.icon}
                          </div>
                        </div>
                        <div className="space-y-1">
                          <h3 className="text-lg font-bold">{currentFeature.title}</h3>
                          <p className="text-white/80 text-xs leading-relaxed max-w-40">
                            {currentFeature.description.split('.')[0]}.
                          </p>
                        </div>
                        <div className="flex space-x-1">
                          {features.map((_, index) => (
                            <div
                              key={index}
                              className={cn(
                                "w-1.5 h-1.5 rounded-full transition-all duration-300",
                                activeFeature === index ? "bg-white" : "bg-white/40"
                              )}
                            />
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Content Card - Mobile */}
            <div className="bg-white/90 dark:bg-gray-800/90 backdrop-blur-xl rounded-2xl p-4 shadow-xl border border-white/20 dark:border-gray-700/30">
              <div className="space-y-3">
                <div className="flex items-center gap-2">
                  <div className={cn("p-1.5 rounded-lg", currentFeature.color.replace('text-', 'bg-').replace('-500', '-100'), "dark:bg-opacity-20")}>
                    <div className={cn(currentFeature.color, "scale-75")}>
                      {currentFeature.icon}
                    </div>
                  </div>
                  <div>
                    <p className="text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wide">
                      Feature {activeFeature + 1}
                    </p>
                    <h2 className="text-lg font-bold text-gray-900 dark:text-white">
                      {currentFeature.heading}
                    </h2>
                  </div>
                </div>

                <p className="text-gray-600 dark:text-gray-300 leading-relaxed text-sm">
                  {currentFeature.description}
                </p>

                {/* Navigation */}
                <div className="flex items-center justify-between pt-3">
                  <button
                    onClick={prevFeature}
                    className="p-2 rounded-lg bg-gray-100 hover:bg-gray-200 dark:bg-gray-700 dark:hover:bg-gray-600 transition-all duration-200 shadow-sm"
                    aria-label="Previous feature"
                  >
                    <ChevronLeft className="w-4 h-4 text-gray-600 dark:text-gray-300" />
                  </button>
                  
                  <div className="flex space-x-1.5">
                    {features.map((_, index) => (
                      <button
                        key={index}
                        onClick={() => setActiveFeature(index)}
                        className={cn(
                          "w-2 h-2 rounded-full transition-all duration-300",
                          activeFeature === index 
                            ? "bg-blue-500 scale-110" 
                            : "bg-gray-300 dark:bg-gray-600 hover:bg-gray-400"
                        )}
                      />
                    ))}
                  </div>

                  <button
                    onClick={nextFeature}
                    className="p-2 rounded-lg bg-gray-100 hover:bg-gray-200 dark:bg-gray-700 dark:hover:bg-gray-600 transition-all duration-200 shadow-sm"
                    aria-label="Next feature"
                  >
                    <ChevronRight className="w-4 h-4 text-gray-600 dark:text-gray-300" />
                  </button>
                </div>
              </div>
            </div>

            {/* Feature List - Mobile */}
            <div className="bg-white/90 dark:bg-gray-800/90 backdrop-blur-xl rounded-2xl p-4 shadow-xl border border-white/20 dark:border-gray-700/30">
              <h3 className="text-base font-bold text-gray-900 dark:text-white mb-3 text-center">
                All Features
              </h3>
              <div className="space-y-1.5">
                {features.map((feature, index) => (
                  <button
                    key={feature.id}
                    onClick={() => setActiveFeature(index)}
                    className={cn(
                      "flex items-center gap-2.5 p-2.5 rounded-lg text-left transition-all duration-300 w-full group",
                      activeFeature === index
                        ? "bg-blue-50 dark:bg-blue-900/30 border border-blue-200 dark:border-blue-700"
                        : "hover:bg-gray-50 dark:hover:bg-gray-700/50 border border-transparent"
                    )}
                  >
                    <div className={cn(
                      "p-1.5 rounded-md transition-all duration-300 scale-75",
                      activeFeature === index 
                        ? currentFeature.color.replace('text-', 'bg-').replace('-500', '-100') + " " + currentFeature.color
                        : "bg-gray-100 dark:bg-gray-700 text-gray-500 dark:text-gray-400"
                    )}>
                      {feature.icon}
                    </div>
                    <div className="flex-1">
                      <p className={cn(
                        "font-medium transition-colors duration-300 text-xs",
                        activeFeature === index 
                          ? "text-blue-700 dark:text-blue-300" 
                          : "text-gray-700 dark:text-gray-300"
                      )}>
                        {feature.title}
                      </p>
                    </div>
                    {activeFeature === index && (
                      <div className="w-1.5 h-1.5 bg-blue-500 rounded-full animate-pulse" />
                    )}
                  </button>
                ))}
              </div>
            </div>
          </div>

          {/* Desktop Layout */}
          <div className="hidden lg:grid lg:grid-cols-12 gap-6 xl:gap-8 items-center min-h-[80vh]">
            {/* Left Side - Content */}
            <div className="lg:col-span-5 xl:col-span-4 space-y-6">
              <div className="space-y-3">
                <div className="flex items-center gap-2">
                  <div className={cn("p-2 rounded-lg", currentFeature.color.replace('text-', 'bg-').replace('-500', '-100'), "dark:bg-opacity-20")}>
                    <div className={cn(currentFeature.color, "scale-75")}>
                      {currentFeature.icon}
                    </div>
                  </div>
                  <p className="text-blue-600 dark:text-blue-400 font-semibold text-xs uppercase tracking-wider">
                    Feature No.{activeFeature + 1}
                  </p>
                </div>
                <h2 className="text-3xl xl:text-4xl font-bold text-gray-900 dark:text-white leading-tight">
                  {currentFeature.heading}
                </h2>
              </div>

              <p className="text-gray-600 dark:text-gray-300 text-base xl:text-lg leading-relaxed">
                {currentFeature.description}
              </p>

              {/* Navigation Arrows */}
              <div className="flex gap-3">
                <button
                  onClick={prevFeature}
                  className="p-3 rounded-lg bg-white dark:bg-gray-800 hover:bg-gray-50 dark:hover:bg-gray-700 border border-gray-200 dark:border-gray-700 transition-all duration-200 shadow-sm hover:shadow-md"
                  aria-label="Previous feature"
                >
                  <ChevronLeft className="w-5 h-5 text-gray-600 dark:text-gray-300" />
                </button>
                <button
                  onClick={nextFeature}
                  className="p-3 rounded-lg bg-white dark:bg-gray-800 hover:bg-gray-50 dark:hover:bg-gray-700 border border-gray-200 dark:border-gray-700 transition-all duration-200 shadow-sm hover:shadow-md"
                  aria-label="Next feature"
                >
                  <ChevronRight className="w-5 h-5 text-gray-600 dark:text-gray-300" />
                </button>
              </div>
            </div>

            {/* Center - Phone Mockup */}
            <div className="lg:col-span-3 xl:col-span-4 flex justify-center">
              <div className="relative">
                <div className="w-64 xl:w-72 h-[480px] xl:h-[540px] bg-gradient-to-b from-gray-800 to-black rounded-[2.5rem] p-2 shadow-xl">
                  <div className={cn(
                    "w-full h-full rounded-[2rem] relative overflow-hidden transition-all duration-700 bg-gradient-to-br",
                    currentFeature.gradient
                  )}>
                    {/* Status Bar */}
                    <div className="absolute top-0 left-0 right-0 h-10 flex items-center justify-between px-6 text-white/90 text-xs font-medium">
                      <span>9:41</span>
                      <div className="w-20 h-4 bg-black/30 rounded-full"></div>
                      <span>100%</span>
                    </div>
                    
                    {/* Dynamic Notch */}
                    <div className="absolute top-2 left-1/2 transform -translate-x-1/2 w-24 h-5 bg-black rounded-full"></div>
                    
                    {/* Feature Content */}
                    <div className="absolute inset-0 flex flex-col items-center justify-center text-white p-8 pt-16">
                      <div className="text-center space-y-6">
                        <div className="w-18 xl:w-20 h-18 xl:h-20 bg-white/20 backdrop-blur-sm rounded-2xl mx-auto flex items-center justify-center shadow-xl">
                          <div className="text-white">
                            {currentFeature.icon}
                          </div>
                        </div>
                        <div className="space-y-3">
                          <h3 className="text-lg xl:text-xl font-bold">{currentFeature.title}</h3>
                          <p className="text-white/80 text-sm xl:text-base leading-relaxed max-w-48">
                            {currentFeature.description.split('.')[0]}.
                          </p>
                        </div>
                        <div className="flex space-x-2">
                          {features.map((_, index) => (
                            <div
                              key={index}
                              className={cn(
                                "w-2 h-2 rounded-full transition-all duration-300",
                                activeFeature === index ? "bg-white scale-110" : "bg-white/40"
                              )}
                            />
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Side - Feature List */}
            <div className="lg:col-span-4 space-y-4">
              <div className="bg-white/90 dark:bg-gray-800/90 backdrop-blur-xl rounded-2xl p-4 xl:p-6 shadow-xl border border-white/20 dark:border-gray-700/30">
                <h3 className="text-xl xl:text-2xl font-bold text-gray-900 dark:text-white mb-6">
                  Feature Showcase
                </h3>
                <div className="space-y-2">
                  {features.map((feature, index) => (
                    <button
                      key={feature.id}
                      onClick={() => setActiveFeature(index)}
                      className={cn(
                        "flex items-center gap-3 p-3 xl:p-4 rounded-lg text-left transition-all duration-300 w-full group",
                        activeFeature === index
                          ? "bg-blue-50 dark:bg-blue-900/30 border border-blue-200 dark:border-blue-700 shadow-md"
                          : "hover:bg-gray-50 dark:hover:bg-gray-700/50 border border-transparent hover:shadow-sm"
                      )}
                    >
                      <div className={cn(
                        "p-2 rounded-lg transition-all duration-300 scale-75",
                        activeFeature === index 
                          ? feature.color.replace('text-', 'bg-').replace('-500', '-100') + " " + feature.color
                          : "bg-gray-100 dark:bg-gray-700 text-gray-500 dark:text-gray-400 group-hover:bg-gray-200 dark:group-hover:bg-gray-600"
                      )}>
                        {feature.icon}
                      </div>
                      <div className="flex-1">
                        <p className={cn(
                          "font-semibold transition-colors duration-300 text-sm",
                          activeFeature === index 
                            ? "text-blue-700 dark:text-blue-300" 
                            : "text-gray-700 dark:text-gray-300 group-hover:text-gray-900 dark:group-hover:text-white"
                        )}>
                          Feature {feature.id}
                        </p>
                        <p className={cn(
                          "text-xs transition-colors duration-300",
                          activeFeature === index 
                            ? "text-blue-600 dark:text-blue-400" 
                            : "text-gray-500 dark:text-gray-400"
                        )}>
                          {feature.title}
                        </p>
                      </div>
                      {activeFeature === index && (
                        <div className="w-2 h-2 bg-blue-500 rounded-full animate-pulse" />
                      )}
                    </button>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}