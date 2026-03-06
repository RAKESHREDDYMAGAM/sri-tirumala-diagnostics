import { useState } from 'react'
import { MessageCircle } from 'lucide-react'
import { services } from '../data/services'

const WHATSAPP_NUMBER = '918978196941'
const testOptions = services.map((s) => ({ value: s.id, label: s.title }))

function buildWhatsAppMessage(formData) {
  const testLabel = testOptions.find((t) => t.value === formData.testType)?.label || formData.testType
  const testTypeDisplay = formData.testTypeOther
    ? `${testLabel || ''}${testLabel && formData.testTypeOther ? ' - ' : ''}${formData.testTypeOther}`
    : testLabel

  return `*New Test Booking - Sri Tirumala Diagnostic Center*

*Name:* ${formData.fullName}
*Phone:* ${formData.phone}
*Email:* ${formData.email}
*Address:* ${formData.address}
*Test Type:* ${testTypeDisplay}
*Preferred Date:* ${formData.preferredDate}
*Home Visit:* ${formData.homeVisit ? 'Yes' : 'No'}

_Please attach doctor's report/prescription in this chat if you have one._`.trim()
}

export default function BookTest() {
  const [formData, setFormData] = useState({
    fullName: '',
    phone: '',
    email: '',
    address: '',
    testType: '',
    testTypeOther: '',
    preferredDate: '',
    homeVisit: false,
  })

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target
    setFormData((prev) => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value,
    }))
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    const message = buildWhatsAppMessage(formData)
    window.open(`https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`, '_blank')
  }

  return (
    <div className="min-h-screen py-12 lg:py-20">
      <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h1 className="text-3xl font-bold text-gray-900 mb-4">Book a Test</h1>
          <p className="text-gray-600">
            Fill in your details below. You&apos;ll be taken to WhatsApp to send your booking in one message. You can attach your doctor&apos;s report there too.
          </p>
        </div>

        <div className="bg-white rounded-2xl shadow-lg p-6 sm:p-8 border border-gray-100">
          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label htmlFor="fullName" className="block text-sm font-medium text-gray-700 mb-2">
                Full Name
              </label>
              <input
                type="text"
                id="fullName"
                name="fullName"
                required
                value={formData.fullName}
                onChange={handleChange}
                className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:ring-2 focus:ring-primary-500 focus:border-primary-500 outline-none transition"
                placeholder="Enter your full name"
              />
            </div>

            <div>
              <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-2">
                Phone Number
              </label>
              <input
                type="tel"
                id="phone"
                name="phone"
                required
                value={formData.phone}
                onChange={handleChange}
                className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:ring-2 focus:ring-primary-500 focus:border-primary-500 outline-none transition"
                placeholder="Enter your phone number"
              />
            </div>

            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                Email Address
              </label>
              <input
                type="email"
                id="email"
                name="email"
                required
                value={formData.email}
                onChange={handleChange}
                className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:ring-2 focus:ring-primary-500 focus:border-primary-500 outline-none transition"
                placeholder="For sending reports"
              />
            </div>

            <div>
              <label htmlFor="address" className="block text-sm font-medium text-gray-700 mb-2">
                Address
              </label>
              <textarea
                id="address"
                name="address"
                rows={3}
                required
                value={formData.address}
                onChange={handleChange}
                className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:ring-2 focus:ring-primary-500 focus:border-primary-500 outline-none transition resize-none"
                placeholder="Enter your full address"
              />
            </div>

            <div>
              <label htmlFor="testType" className="block text-sm font-medium text-gray-700 mb-2">
                Test Type
              </label>
              <select
                id="testType"
                name="testType"
                required
                value={formData.testType}
                onChange={handleChange}
                className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:ring-2 focus:ring-primary-500 focus:border-primary-500 outline-none transition bg-white"
              >
                <option value="">Select test type</option>
                {testOptions.map((opt) => (
                  <option key={opt.value} value={opt.value}>
                    {opt.label}
                  </option>
                ))}
              </select>
            </div>

            <div>
              <label htmlFor="testTypeOther" className="block text-sm font-medium text-gray-700 mb-2">
                Doctor&apos;s Suggestions / Prescription Details (Optional)
              </label>
              <input
                type="text"
                id="testTypeOther"
                name="testTypeOther"
                value={formData.testTypeOther}
                onChange={handleChange}
                className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:ring-2 focus:ring-primary-500 focus:border-primary-500 outline-none transition"
                placeholder="Specific test names or prescription details"
              />
            </div>

            <div>
              <label htmlFor="preferredDate" className="block text-sm font-medium text-gray-700 mb-2">
                Preferred Date
              </label>
              <input
                type="date"
                id="preferredDate"
                name="preferredDate"
                required
                value={formData.preferredDate}
                onChange={handleChange}
                className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:ring-2 focus:ring-primary-500 focus:border-primary-500 outline-none transition"
              />
            </div>

            <div className="flex items-center gap-3">
              <input
                type="checkbox"
                id="homeVisit"
                name="homeVisit"
                checked={formData.homeVisit}
                onChange={handleChange}
                className="w-5 h-5 rounded border-gray-300 text-primary-600 focus:ring-primary-500"
              />
              <label htmlFor="homeVisit" className="text-sm font-medium text-gray-700">
                Home Visit Required
              </label>
            </div>

            <div className="p-4 bg-green-50 rounded-xl border border-green-100">
              <p className="text-sm text-gray-700 mb-2">
                <strong>One step:</strong> Click below to open WhatsApp with all your details. Attach your doctor&apos;s report/prescription in the same chat, then send.
              </p>
            </div>

            <button
              type="submit"
              className="w-full py-4 bg-green-500 hover:bg-green-600 text-white font-semibold rounded-xl shadow-md hover:shadow-lg transition-all flex items-center justify-center gap-2"
            >
              <MessageCircle className="w-6 h-6" />
              Send via WhatsApp
            </button>
          </form>
        </div>
      </div>
    </div>
  )
}
