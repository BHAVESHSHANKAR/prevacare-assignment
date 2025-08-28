import { Brain, Database, Zap, Shield } from 'lucide-react'

const stats = [
  {
    icon: <Brain className="w-8 h-8" />,
    number: "95%",
    label: "Diagnostic Accuracy",
    description: "AI-powered medical diagnosis precision rate"
  },
  {
    icon: <Database className="w-8 h-8" />,
    number: "10M+",
    label: "Medical Records Analyzed",
    description: "Patient data processed by our AI systems"
  },
  {
    icon: <Zap className="w-8 h-8" />,
    number: "3x",
    label: "Faster Diagnosis",
    description: "Speed improvement with AI assistance"
  },
  {
    icon: <Shield className="w-8 h-8" />,
    number: "100%",
    label: "HIPAA Compliance",
    description: "Secure, encrypted medical data protection"
  }
]

export default function MedicalStats() {
  return (
    <section className="py-20 bg-white dark:bg-gray-900">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
            AI-Driven Medical Excellence
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            Our artificial intelligence platform delivers unprecedented accuracy and efficiency 
            in medical diagnosis, treatment planning, and patient care management.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <div 
              key={index}
              className="text-center p-6 rounded-2xl bg-gradient-to-br from-blue-50 to-indigo-100 dark:from-gray-800 dark:to-gray-700 hover:shadow-lg transition-all duration-300"
            >
              <div className="inline-flex items-center justify-center w-16 h-16 bg-blue-500 text-white rounded-xl mb-4">
                {stat.icon}
              </div>
              <h3 className="text-3xl font-bold text-gray-900 dark:text-white mb-2">
                {stat.number}
              </h3>
              <h4 className="text-lg font-semibold text-blue-600 dark:text-blue-400 mb-2">
                {stat.label}
              </h4>
              <p className="text-gray-600 dark:text-gray-300 text-sm">
                {stat.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}