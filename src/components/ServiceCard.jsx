export default function ServiceCard({ icon: Icon, title, description }) {
  return (
    <div className="group bg-white rounded-2xl shadow-md hover:shadow-xl p-6 transition-all duration-300 hover:-translate-y-1 border border-gray-100">
      <div className="flex items-center gap-4 mb-4">
        <div className="p-3 bg-primary-100 rounded-xl group-hover:bg-primary-500 transition-colors duration-300">
          <Icon className="w-8 h-8 text-primary-600 group-hover:text-white transition-colors" />
        </div>
        <h3 className="text-xl font-bold text-gray-800">{title}</h3>
      </div>
      <p className="text-gray-600 text-sm leading-relaxed">{description}</p>
    </div>
  )
}
