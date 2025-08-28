import { Shield, Zap, Users, Globe, Award, Lock } from 'lucide-react'

const achievements = [
  {
    icon: <Shield className="w-6 h-6" />,
    text: "HIPAA Compliant & Secure"
  },
  {
    icon: <Zap className="w-6 h-6" />,
    text: "Real-time AI Processing"
  },
  {
    icon: <Users className="w-6 h-6" />,
    text: "24/7 Medical Support"
  },
  {
    icon: <Globe className="w-6 h-6" />,
    text: "Global Healthcare Network"
  },
  {
    icon: <Award className="w-6 h-6" />,
    text: "FDA Approved Technology"
  },
  {
    icon: <Lock className="w-6 h-6" />,
    text: "End-to-End Encryption"
  }
]

export default function AboutSection() {
  return (
    <section className="py-20 bg-gradient-to-r from-blue-600 to-indigo-700 dark:from-blue-800 dark:to-indigo-900">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold text-white mb-6">
              Revolutionizing Healthcare with AI
            </h2>
            <p className="text-xl text-blue-100 mb-8 max-w-3xl mx-auto">
              PrevaCare combines advanced artificial intelligence with medical expertise to create 
              the most comprehensive healthcare management platform available today.
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6 mb-16">
            {achievements.map((achievement, index) => (
              <div key={index} className="text-center">
                <div className="inline-flex items-center justify-center w-12 h-12 bg-white/20 rounded-xl mb-3 text-blue-200">
                  {achievement.icon}
                </div>
                <p className="text-blue-100 text-sm font-medium">
                  {achievement.text}
                </p>
              </div>
            ))}
          </div>

          <div className="bg-white/10 backdrop-blur-sm rounded-3xl p-8 lg:p-12">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <h3 className="text-3xl font-bold text-white mb-6">
                  Our Mission
                </h3>
                <p className="text-blue-100 text-lg leading-relaxed mb-6">
                  We believe that every patient deserves access to the highest quality healthcare, 
                  powered by the latest technological innovations. Our AI-driven platform bridges 
                  the gap between cutting-edge technology and compassionate medical care.
                </p>
                <p className="text-blue-100 text-lg leading-relaxed">
                  From predictive diagnostics to personalized treatment plans, PrevaCare empowers 
                  healthcare professionals to deliver better outcomes while reducing costs and 
                  improving efficiency across the entire healthcare ecosystem.
                </p>
              </div>
              <div className="space-y-6">
                <div className="bg-white/10 rounded-2xl p-6">
                  <h4 className="text-xl font-bold text-white mb-3">AI-Powered Insights</h4>
                  <p className="text-blue-100">
                    Our machine learning algorithms analyze millions of medical records to provide 
                    actionable insights and predictive analytics for better patient outcomes.
                  </p>
                </div>
                <div className="bg-white/10 rounded-2xl p-6">
                  <h4 className="text-xl font-bold text-white mb-3">Seamless Integration</h4>
                  <p className="text-blue-100">
                    Designed to work with existing healthcare systems, our platform integrates 
                    smoothly with EHRs, medical devices, and hospital management systems.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}