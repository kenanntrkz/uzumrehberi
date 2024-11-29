export function Footer() {
  return (
    <footer className="bg-gray-50 border-t">
      <div className="max-w-4xl mx-auto px-4 py-8">
        <div className="text-center text-gray-600">
          <p>&copy; {new Date().getFullYear()} Blog. Tüm hakları saklıdır.</p>
        </div>
      </div>
    </footer>
  );
}