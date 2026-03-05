import { useState } from 'react'
import { CheckCircle, Loader2 } from 'lucide-react'
import { services } from '../data/services'
import { FORMSPREE_FORM_ID } from '../config'

const testOptions = services.map((s) => ({ value: s.id, label: s.title }))

export default function BookTest() {
  const [formData, setFormData] = useState({
    fullName: '',
    phone: '',
    email: '',
    address: '',
    testType: '',
    preferredDate: '',
    homeVisit: false,
  })
  const [submitted, setSubmitted] = useState(false)
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState(null)

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target
    setFormData((prev) => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value,
    }))
    setError(null)
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setLoading(true)
    setError(null)

    const testLabel = testOptions.find((t) => t.value === formData.testType)?.label || formData.testType
    const submittedAt = new Date().toLocaleString('en-IN', {
      dateStyle: 'medium',
      timeStyle: 'short',
    })

    const payload = {
      fullName: formData.fullName,
      phone: formData.phone,
      email: formData.email,
      address: formData.address,
      testType: testLabel,
      preferredDate: formData.preferredDate,
      homeVisit: formData.homeVisit ? 'Yes' : 'No',
      submittedAt,
      _subject: `New Test Booking - ${formData.fullName} (${submittedAt})`,
    }

    try {
      const res = await fetch(`https://formspree.io/f/${FORMSPREE_FORM_ID}`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload),
      })

      if (res.ok) {
        setSubmitted(true)
      } else {
        setError('Something went wrong. Please try again or book via WhatsApp.')
      }
    } catch {
      setError('Failed to send. Please try again or book via WhatsApp.')
    } finally {
      setLoading(false)
    }
  }

  if (submitted) {
    return (
      <div className="min-h-screen py-20">
        <div className="max-w-lg mx-auto px-4 text-center">
          <div className="bg-white rounded-2xl shadow-lg p-8 border border-gray-100">
            <div className="inline-flex items-center justify-center w-16 h-16 bg-green-100 rounded-full mb-6">
              <CheckCircle className="w-10 h-10 text-green-600" />
            </div>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">
              Booking Request Received!
            </h2>
            <p className="text-gray-600 mb-6">
              Thank you for your booking. We will contact you shortly to confirm your 
              appointment. For immediate assistance, you can reach us on WhatsApp.
            </p>
            <a
              href="https://wa.me/918978196941"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-green-500 hover:bg-green-600 text-white font-semibold rounded-xl transition-colors"
            >
              Chat on WhatsApp
            </a>
          </div>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen py-12 lg:py-20">
      <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-3xl font-bold text-gray-900 mb-4">Book a Test</h1>
          <p className="text-gray-600">
            Fill out the form below or book directly via WhatsApp
          </p>
        </div>

        {/* WhatsApp booking button */}
        <div className="mb-8 text-center">
          <a
            href="https://wa.me/918978196941"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-2 px-6 py-4 bg-green-500 hover:bg-green-600 text-white font-semibold rounded-xl shadow-md hover:shadow-lg transition-all w-full sm:w-auto"
          >
            Quick Book via WhatsApp
          </a>
        </div>

        {/* Form */}
        <div className="bg-white rounded-2xl shadow-lg p-6 sm:p-8 border border-gray-100">
          {error && (
            <div className="mb-6 p-4 bg-red-50 border border-red-200 rounded-xl text-red-700 text-sm">
              {error}
            </div>
          )}
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
                placeholder="Enter your email (for sending reports)"
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
              <label htmlFor="homeCollection" className="text-sm font-medium text-gray-700">
                Home Visit Available
              </label>
            </div>

            <button
              type="submit"
              disabled={loading}
              className="w-full py-4 bg-primary-600 hover:bg-primary-700 disabled:opacity-70 disabled:cursor-not-allowed text-white font-semibold rounded-xl shadow-md hover:shadow-lg transition-all flex items-center justify-center gap-2"
            >
              {loading ? (
                <>
                  <Loader2 className="w-5 h-5 animate-spin" />
                  Sending...
                </>
              ) : (
                'Submit Booking'
              )}
            </button>
          </form>
        </div>
      </div>
    </div>
  )
}
