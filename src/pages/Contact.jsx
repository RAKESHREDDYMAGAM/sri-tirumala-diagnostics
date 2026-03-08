import { Phone, MapPin } from 'lucide-react'

const PHONE = '8978196941'
const WHATSAPP_URL = 'https://wa.me/918978196941'
const LOCATION = 'Cheriyal'
const MAP_URL = 'https://www.google.com/maps/place/SRI+THIRUMALA+DIAGNOSTIC+CENTER/@17.9220938,78.9718904,21z'
const MAP_EMBED_URL = 'https://www.google.com/maps?q=17.9220208,78.9720688&z=17&output=embed'

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
                    <a
                      href={MAP_URL}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-start gap-3 text-gray-800 hover:text-primary-600 transition-colors"
                    >
                      <MapPin className="w-5 h-5 flex-shrink-0 mt-0.5" />
                      <span className="font-medium">{LOCATION} — View on Google Maps</span>
                    </a>
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
                    title="Sri Tirumala Diagnostic Center Location"
                    src={MAP_EMBED_URL}
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
