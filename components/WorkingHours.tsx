import { FiClock } from 'react-icons/fi'

export default function WorkingHours() {
  return (
    <div className="bg-white border-2 border-primary-200 rounded-lg p-4 mb-6">
      <div className="flex items-center space-x-2 mb-2">
        <FiClock className="text-primary-600" />
        <h4 className="font-semibold text-gray-900">Çalışma Saatleri</h4>
      </div>
      <p className="text-gray-700 text-sm">
        <span className="font-medium">Pazartesi - Cumartesi:</span> 08:00 - 19:00
      </p>
      <p className="text-gray-600 text-xs mt-1">
        Pazar günü kapalıyız
      </p>
    </div>
  )
}


