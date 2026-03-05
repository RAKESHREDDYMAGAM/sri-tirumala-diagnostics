import { Link } from 'react-router-dom'
import { Phone, MessageCircle, ArrowRight } from 'lucide-react'
import ServiceCard from '../components/ServiceCard'
import { services } from '../data/services'

export default function Home() {
  return (
    <div>
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-primary-50 to-primary-100 py-20 lg:py-28 overflow-hidden">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg width=\'60\' height=\'60\' viewBox=\'0 0 60 60\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Cg fill=\'none\' fill-rule=\'evenodd\'%3E%3Cg fill=\'%232563eb\' fill-opacity=\'0.05\'%3E%3Cpath d=\'M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z\'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')] opacity-50"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center max-w-3xl mx-auto">
            <img
              src={`${import.meta.env.BASE_URL}logo.png`}
              alt="Sri Tirumala Diagnostic Center"
              className="h-28 sm:h-36 mx-auto mb-6 object-contain animate-fade-in"
            />
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-4 animate-fade-in">
              Sri Tirumala Diagnostic Center
            </h1>
            <p className="text-xl text-primary-600 font-semibold mb-2">
              Recognised by Govt of Telangana • Registration No. 340
            </p>
            <p className="text-gray-600 text-lg mb-8">
              Accurate diagnostics for better healthcare. Your health, our priority.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="tel:8978196941"
                className="inline-flex items-center justify-center gap-2 px-6 py-4 bg-primary-600 hover:bg-primary-700 text-white font-semibold rounded-xl shadow-lg hover:shadow-xl transition-all duration-300"
              >
                <Phone size={22} />
                Call Now
              </a>
              <a
                href="https://wa.me/9189781969411"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 px-6 py-4 bg-green-500 hover:bg-green-600 text-white font-semibold rounded-xl shadow-lg hover:shadow-xl transition-all duration-300"
              >
                <MessageCircle size={22} />
                WhatsApp
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Services Preview */}
      <section className="py-16 lg:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Our Services</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Comprehensive diagnostic services to meet all your healthcare needs
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.slice(0, 3).map((service) => (
              <ServiceCard
                key={service.id}
                icon={service.icon}
                title={service.title}
                description={service.description}
              />
            ))}
          </div>
          <div className="text-center mt-10">
            <Link
              to="/services"
              className="inline-flex items-center gap-2 text-primary-600 font-semibold hover:text-primary-700 transition-colors"
            >
              View All Services <ArrowRight size={20} />
            </Link>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-16 lg:py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Why Choose Us</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Trusted by the community for reliable and accurate diagnostics
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white rounded-2xl p-6 shadow-md text-center hover:shadow-lg transition-shadow">
              <div className="text-4xl font-bold text-primary-600 mb-2">Govt Recognised</div>
              <p className="text-gray-600">Our laboratory is officially recognised by the government</p>
            </div>
            <div className="bg-white rounded-2xl p-6 shadow-md text-center hover:shadow-lg transition-shadow">
              <div className="text-4xl font-bold text-primary-600 mb-2">Accurate Results</div>
              <p className="text-gray-600">Precise and reliable test results for informed decisions</p>
            </div>
            <div className="bg-white rounded-2xl p-6 shadow-md text-center hover:shadow-lg transition-shadow">
              <div className="text-4xl font-bold text-primary-600 mb-2">Expert Team</div>
              <p className="text-gray-600">Experienced professionals dedicated to your health</p>
            </div>
          </div>
        </div>
      </section>

      {/* Home Visit Available */}
      <section className="py-16 lg:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row items-center gap-12">
            <div className="flex-1">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">Home Visit Available</h2>
              <p className="text-gray-600 mb-6 leading-relaxed">
                Too busy to visit? No problem! We offer convenient home visit service for sample 
                collection and ECGs. Our trained staff will visit your home at your preferred time. 
                Just book and we&apos;ll handle the rest.
              </p>
              <Link
                to="/book-test"
                className="inline-flex items-center gap-2 px-6 py-3 bg-primary-600 hover:bg-primary-700 text-white font-semibold rounded-xl transition-colors"
              >
                Book Now <ArrowRight size={20} />
              </Link>
            </div>
            <div className="flex-1 bg-primary-50 rounded-2xl p-8 lg:p-12">
              <div className="text-6xl font-bold text-primary-200 mb-2">📋</div>
              <h3 className="text-xl font-bold text-gray-800 mb-4">Easy Booking</h3>
              <ul className="space-y-3 text-gray-600">
                <li className="flex items-center gap-2">✓ Book online or via WhatsApp</li>
                <li className="flex items-center gap-2">✓ Choose your preferred date & time</li>
                <li className="flex items-center gap-2">✓ Samples collected at your doorstep</li>
                <li className="flex items-center gap-2">✓ Reports delivered promptly</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Preview */}
      <section className="py-16 lg:py-24 bg-primary-600">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-white">
          <h2 className="text-3xl font-bold mb-4">Get in Touch</h2>
          <p className="text-primary-100 mb-8 max-w-2xl mx-auto">
            Have questions? Reach out to us. We&apos;re here to help with all your diagnostic needs.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="tel:89781969411"
              className="inline-flex items-center justify-center gap-2 px-6 py-4 bg-white text-primary-600 font-semibold rounded-xl hover:bg-primary-50 transition-colors"
            >
              <Phone size={22} />
              8978196941
            </a>
            <Link
              to="/contact"
              className="inline-flex items-center justify-center gap-2 px-6 py-4 border-2 border-white text-white font-semibold rounded-xl hover:bg-white hover:text-primary-600 transition-colors"
            >
              View Contact Details
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}
