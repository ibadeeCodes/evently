const Footer = () => {
  return (
    <footer className="bg-primary-500 text-white py-4">
      <div className="container mx-auto flex justify-between items-center">
        <p className="text-sm">© 2024 Evently. All rights reserved.</p>
        <div className="flex space-x-4">
          <a href="#" className="text-xs hover:text-gray-300">Privacy Policy</a>
          <a href="#" className="text-xs hover:text-gray-300">Terms of Service</a>
        </div>
      </div>
    </footer>
  )
}

export default Footer