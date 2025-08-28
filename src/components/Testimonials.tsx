import { Brain, Cpu, Zap, Shield } from 'lucide-react'

const aiFeatures = [
  {
    icon: <Brain className="w-12 h-12" />,
    title: "AI-Powered Diagnostics",
    description: "Advanced machine learning algorithms analyze medical data to assist healthcare professionals in making accurate diagnoses faster than ever before."
  },
  {
    icon: <Cpu className="w-12 h-12" />,
    title: "Predictive Analytics",
    description: "Our AI engine processes patient data to predict potential health risks, enabling proactive care and early intervention strategies."
  },
  {
    icon: <Zap className="w-12 h-12" />,
    title: "Intelligent Automation",
    description: "Streamline administrative tasks with AI-driven automation, allowing medical staff to focus more time on direct patient care."
  },
  {
    icon: <Shield className="w-12 h-12" />,
    title: "Smart Security",
    description: "AI-enhanced security protocols protect sensitive medical data while ensuring seamless access for authorized healthcare professionals."
  }
]

export default function AIFeatures() {
  return (
    <section className="py-20 bg-gradient-to-br from-blue-50 to-indigo-100 dark:from-gray-800 dark:to-gray-900">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
            AI-Powered Healthcare Innovation
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            Harness the power of artificial intelligence to revolutionize patient care, streamline operations, 
            and enhance medical decision-making with cutting-edge technology.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {aiFeatures.map((feature, index) => (
            <div 
              key={index}
              className="bg-white dark:bg-gray-800 rounded-2xl p-8 shadow-xl hover:shadow-2xl transition-all duration-300 group"
            >
              <div className="flex items-start gap-6">
                <div className="flex-shrink-0 p-4 bg-gradient-to-br from-blue-500 to-indigo-600 rounded-xl text-white group-hover:scale-110 transition-transform duration-300">
                  {feature.icon}
                </div>
                <div className="flex-1">
                  <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
                    {feature.title}
                  </h3>
                  <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                    {feature.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 text-center">
          <div className="bg-white dark:bg-gray-800 rounded-2xl p-8 shadow-xl max-w-4xl mx-auto">
            <h3 className="text-3xl font-bold text-gray-900 dark:text-white mb-6">
              The Future of Healthcare is Here
            </h3>
            <p className="text-lg text-gray-600 dark:text-gray-300 leading-relaxed">
              Our AI-driven platform combines decades of medical expertise with cutting-edge technology 
              to deliver personalized, efficient, and accurate healthcare solutions. From predictive 
              analytics to automated diagnostics, we're transforming how healthcare is delivered worldwide.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}