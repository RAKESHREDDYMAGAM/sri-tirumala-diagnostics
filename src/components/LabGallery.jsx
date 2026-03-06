import { useState } from 'react'
import { Image as ImageIcon } from 'lucide-react'
import { labPhotos } from '../data/labPhotos'

function LabPhoto({ photo, className = '' }) {
  const [loaded, setLoaded] = useState(false)
  const [error, setError] = useState(false)

  return (
    <div className={`overflow-hidden bg-gray-100 shadow-lg hover:shadow-xl transition-all duration-300 rounded-2xl group ${className}`}>
      {error ? (
        <div className="w-full h-full flex items-center justify-center bg-primary-50 min-h-[200px]">
          <ImageIcon className="w-12 h-12 text-primary-200" />
        </div>
      ) : (
        <>
          <img
            src={photo.src}
            alt={photo.alt}
            className={`w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 ${loaded ? 'opacity-100' : 'opacity-0'}`}
            onLoad={() => setLoaded(true)}
            onError={() => setError(true)}
          />
          {!loaded && (
            <div className="absolute inset-0 flex items-center justify-center bg-gray-100">
              <div className="animate-pulse w-full h-full bg-gray-200" />
            </div>
          )}
        </>
      )}
    </div>
  )
}

export default function LabGallery() {
  const [featured, ...rest] = labPhotos

  return (
    <section className="py-12 lg:py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Our Lab & Facility</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Modern equipment, professional staff, and a welcoming environment for your diagnostic needs
          </p>
        </div>

        <div className="space-y-6">
          <div className="relative aspect-[21/9] sm:aspect-[3/1] rounded-2xl overflow-hidden">
            <LabPhoto photo={featured} className="absolute inset-0 w-full h-full" />
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 lg:gap-6">
            {rest.map((photo, i) => (
              <div key={i} className="relative aspect-[4/3] rounded-2xl overflow-hidden">
                <LabPhoto photo={photo} className="absolute inset-0 w-full h-full" />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
