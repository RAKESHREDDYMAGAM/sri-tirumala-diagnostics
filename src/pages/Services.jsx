import ServiceCard from '../components/ServiceCard'
import { services } from '../data/services'

export default function Services() {
  return (
    <div className="min-h-screen">
      {/* Page header */}
      <section className="bg-gradient-to-br from-primary-50 to-primary-100 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Our Services</h1>
          <p className="text-gray-600 text-lg max-w-2xl">
            Comprehensive diagnostic services to support your healthcare journey
          </p>
        </div>
      </section>

      {/* Service cards */}
      <section className="py-16 lg:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service) => (
              <ServiceCard
                key={service.id}
                icon={service.icon}
                title={service.title}
                description={service.description}
              />
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}
