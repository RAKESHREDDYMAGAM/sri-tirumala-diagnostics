import { Phone, MapPin } from 'lucide-react'

const PHONE = '8978196941'
const WHATSAPP_URL = 'https://wa.me/918978196941'
const LOCATION = 'Cheriyal'

export default function Contact() {
  return (
    <div className="min-h-screen">
      {/* Page header */}
      <section className="bg-gradient-to-br from-primary-50 to-primary-100 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Contact Us</h1>
          <p className="text-gray-600 text-lg max-w-2xl">
            Get in touch with us for appointments, enquiries, or home sample collection
          </p>
        </div>
      </section>

      <section className="py-16 lg:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact info */}
            <div className="space-y-8">
              <div className="bg-white rounded-2xl shadow-md p-6 border border-gray-100">
                <h2 className="text-xl font-bold text-gray-900 mb-6">Contact Information</h2>
                
                <div className="space-y-6">
                  <div>
                    <p className="text-sm font-medium text-gray-500 mb-2">Phone</p>
                    <a
                      href={`tel:${PHONE}`}
                      className="flex items-center gap-3 text-gray-800 font-semibold text-lg hover:text-primary-600 transition-colors"
                    >
                      <Phone className="w-5 h-5" />
                      {PHONE}
                    </a>
                  </div>

                  <div>
                    <p className="text-sm font-medium text-gray-500 mb-2">Location</p>
                    <div className="flex items-start gap-3 text-gray-800">
                      <MapPin className="w-5 h-5 flex-shrink-0 mt-0.5" />
                      <span className="font-medium">{LOCATION}</span>
                    </div>
                  </div>
                </div>

                <div className="flex flex-col sm:flex-row gap-4 mt-8">
                  <a
                    href={`tel:${PHONE}`}
                    className="inline-flex items-center justify-center gap-2 px-6 py-4 bg-primary-600 hover:bg-primary-700 text-white font-semibold rounded-xl transition-colors"
                  >
                    <Phone size={20} />
                    Call Clinic
                  </a>
                  <a
                    href={WHATSAPP_URL}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center gap-2 px-6 py-4 bg-green-500 hover:bg-green-600 text-white font-semibold rounded-xl transition-colors"
                  >
                    WhatsApp Clinic
                  </a>
                </div>
              </div>
            </div>

            {/* Map */}
            <div className="bg-white rounded-2xl shadow-md overflow-hidden border border-gray-100">
              <h2 className="text-xl font-bold text-gray-900 p-6 pb-0">Find Us</h2>
              <div className="p-6 pt-4">
                <div className="aspect-video bg-gray-100 rounded-xl overflow-hidden">
                  <iframe
                    title="Sri Tirumala Diagnostics Location"
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3774.2434900409126!2d79.31356631490143!3d18.872698987167597!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a334f1e63eae9d1%3A0x3e3dc1e74b95ce89!2sCheriyal%2C%20Telangana!5e0!3m2!1sen!2sin!4v1640000000000!5m2!1sen!2sin"
                    width="100%"
                    height="100%"
                    style={{ border: 0 }}
                    allowFullScreen
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    className="min-h-[300px]"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
