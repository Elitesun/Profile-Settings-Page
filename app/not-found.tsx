import Link from 'next/link'
 
export default function NotFound() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 p-6">
      <div className="text-center space-y-4">
        <h2 className="text-3xl font-semibold text-gray-800">Not Found</h2>
        <p className="text-gray-500">Could not find requested resource</p>
        <p>Content will be added soon . </p>
        <Link 
          href="/" 
          className="inline-block px-4 py-2 text-sm text-blue-600 bg-blue-50 border border-blue-200 rounded-md transition hover:bg-blue-100"
        >
          Return to Profil 🙄😘
        </Link>
      </div>
    </div>
  )
}