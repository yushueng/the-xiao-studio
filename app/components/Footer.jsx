export default function Footer() {
  return (
    <footer className="bg-green-950 opacity-80 text-white py-8 ">
      <div className="container mx-auto px-4 text-center">
        <p className="text-sm mb-4">
          &copy; {new Date().getFullYear()} The Xiao Studio. Tutti i diritti
          riservati.
        </p>
        <div className="flex justify-center space-x-6 text-sm">
          <a
            href="/privacy"
            className="hover:text-gray-400 transition-colors duration-200">
            Privacy Policy
          </a>
          <a
            href="/terms"
            className="hover:text-gray-400 transition-colors duration-200">
            Termini di Servizio
          </a>
        </div>
      </div>
    </footer>
  );
}
