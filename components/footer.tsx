export default function Footer() {
  return (
    <footer className=" sticky bottom-0 mt-auto border-t bg-[#980404] text-white">
      <div className="mx-auto max-w-7xl px-4 py-6">
        <div className="flex flex-col items-center justify-between gap-4 md:flex-row">
          {/* Left */}
          <p className="text-sm text-white-600">
            © {new Date().getFullYear()} MyApp. All rights reserved.
          </p>

          {/* Links */}
          <div className="flex gap-6">
            <a
              href="/privacy"
              className="text-sm text-white-600 hover:text-white-900"
            >
              Privacy Policy
            </a>
            <a
              href="/terms"
              className="text-sm text-white-600 hover:text-white-900"
            >
              Terms of Service
            </a>
            <a
              href="/contact"
              className="text-sm text-white-600 hover:text-white-900"
            >
              Contact
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
