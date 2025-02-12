export function Footer() {
  return (
    <footer className='container mx-auto px-4 py-8 border-t border-gray-800 mt-6 md:mt-10'>
      <div className='flex flex-col items-center justify-center gap-4'>
        <p className='text-sm text-gray-400'>© {new Date().getFullYear()} Miracle Tree. All rights reserved.</p>
      </div>
    </footer>
  )
}
