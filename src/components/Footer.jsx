import { Link } from 'react-router-dom'
import { Phone, MapPin } from 'lucide-react'
import { services as servicesData } from '../data/services'

const services = servicesData.map((s) => s.title)

export default function Footer() {
  return (
    <footer className="bg-gray-100 mt-auto">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Clinic info */}
          <div>
            <img
              src="/logo.png"
              alt="Sri Tirumala Diagnostic Center"
              className="h-12 w-auto mb-3 object-contain"
            />
            <p className="text-sm text-gray-600 mb-2">Recognised by Govt of Telangana • Registration No. 340</p>
            <a
              href="tel:8978196941"
              className="flex items-center gap-2 text-gray-600 hover:text-primary-600 transition-colors"
            >
              <Phone size={18} />
              <span>8978196941</span>
            </a>
            <div className="flex items-start gap-2 text-gray-600 mt-2">
              <MapPin size={18} className="flex-shrink-0 mt-0.5" />
              <span>Cheriyal</span>
            </div>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-lg font-bold text-gray-800 mb-4">Our Services</h3>
            <ul className="space-y-2">
              {services.map((service) => (
                <li key={service}>
                  <Link
                    to="/services"
                    className="text-gray-600 hover:text-primary-600 text-sm transition-colors"
                  >
                    {service}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Quick links */}
          <div>
            <h3 className="text-lg font-bold text-gray-800 mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link
                  to="/"
                  className="text-gray-600 hover:text-primary-600 text-sm transition-colors"
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                  to="/services"
                  className="text-gray-600 hover:text-primary-600 text-sm transition-colors"
                >
                  Services
                </Link>
              </li>
              <li>
                <Link
                  to="/book-test"
                  className="text-gray-600 hover:text-primary-600 text-sm transition-colors"
                >
                  Book Test
                </Link>
              </li>
              <li>
                <Link
                  to="/contact"
                  className="text-gray-600 hover:text-primary-600 text-sm transition-colors"
                >
                  Contact
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-200 mt-8 pt-8 text-center text-sm text-gray-500">
          © {new Date().getFullYear()} Sri Tirumala Diagnostics. All rights reserved.
        </div>
      </div>
    </footer>
  )
}
