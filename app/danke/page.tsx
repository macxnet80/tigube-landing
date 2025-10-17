import Link from "next/link"

export default function DankePage() {
  return (
    <main className="flex flex-col min-h-screen bg-white">
      {/* Hero Section */}
      <section className="py-16 md:py-24 px-4 text-center">
        <div className="max-w-4xl mx-auto">
          {/* Logo */}
          <div className="mx-auto mb-8">
            <img
              src="/Logos/tigube_logo_mit_hund_katze.svg"
              alt="tigube Logo"
              className="h-20 md:h-24 w-auto mx-auto"
            />
          </div>

          {/* Success Icon */}
          <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-8">
            <svg className="w-10 h-10 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
            </svg>
          </div>

          {/* Main Headline */}
          <h1 className="text-3xl md:text-4xl font-bold mb-6 text-gray-900">
            🎉 Danke für deine Anmeldung!
          </h1>

          {/* Subheadline */}
          <p className="text-xl md:text-2xl text-gray-700 mb-8">
            Willkommen bei tigube – schön, dass du da bist 🐾
          </p>

          {/* Description */}
          <p className="text-lg text-gray-600 mb-12 max-w-3xl mx-auto leading-relaxed">
            Du erhältst ab sofort regelmäßig tierisch gute Tipps, Updates & Einblicke rund um moderne Tierbetreuung – direkt in dein Postfach.
          </p>

          {/* What happens next */}
          <div className="bg-gray-50 rounded-2xl p-8 mb-12 text-left">
            <h2 className="text-2xl font-bold text-gray-900 mb-6 text-center">Was passiert jetzt?</h2>
            <ul className="space-y-4 text-gray-700">
              <li className="flex items-start gap-3">
                <span className="w-6 h-6 bg-[#6b8e46] text-white rounded-full flex items-center justify-center text-sm font-bold mt-0.5">1</span>
                <span>Wir senden dir in den nächsten Tagen erste Einblicke in unsere Plattform.</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="w-6 h-6 bg-[#6b8e46] text-white rounded-full flex items-center justify-center text-sm font-bold mt-0.5">2</span>
                <span>Du erfährst, wie du dich bei tigube anmeldest – als Tierhalter:in oder Betreuungsperson.</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="w-6 h-6 bg-[#6b8e46] text-white rounded-full flex items-center justify-center text-sm font-bold mt-0.5">3</span>
                <span>Du bekommst exklusive Tipps aus der Praxis</span>
              </li>
            </ul>
          </div>

          {/* Important Note */}
          <div className="bg-yellow-50 border border-yellow-200 rounded-xl p-6 mb-12">
            <h3 className="font-bold text-yellow-800 mb-3">Wichtiger Hinweis:</h3>
            <p className="text-yellow-700 text-sm md:text-base">
              Wenn du Lust hast, schau doch gleich mal in dein Postfach – dort findest du schon bald die erste Nachricht von uns.<br />
              Falls du sie nicht siehst, prüfe auch deinen Spam-/Werbeordner und füge uns zu deinen Kontakten hinzu!
            </p>
          </div>

          {/* Contact Info */}
          <div className="mb-12">
            <h3 className="text-xl font-bold text-gray-900 mb-4">Noch Fragen oder Feedback?</h3>
            <p className="text-gray-600 mb-4">
              Dann schreib uns jederzeit an <a href="mailto:info@tigube.de" className="text-[#6b8e46] hover:underline">info@tigube.de</a> – wir freuen uns, von dir zu hören!
            </p>
          </div>

          {/* CTA Section */}
          <div className="bg-[#6b8e46] rounded-2xl p-8 text-white">
            <h2 className="text-2xl font-bold mb-4">Jetzt Teil der tigube-Community werden</h2>
            <p className="text-lg mb-6 opacity-90">
              Finde die passende Unterstützung für dich – oder hilf anderen Tierhalter:innen mit deinem Angebot.
            </p>
            <Link 
              href="/"
              className="inline-block bg-white text-[#6b8e46] font-semibold py-3 px-8 rounded-full text-lg transition-all duration-200 shadow-lg hover:shadow-xl transform hover:-translate-y-0.5"
            >
              Zurück zur Startseite
            </Link>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-[#6b8e46] text-white py-6 px-4 mt-auto">
        <div className="max-w-6xl mx-auto text-center">
          <div className="flex justify-center gap-6 text-sm">
            <a href="/impressum" className="text-white/80 hover:text-white transition-colors">Impressum</a>
            <a href="/datenschutz" className="text-white/80 hover:text-white transition-colors">Datenschutz</a>
          </div>
        </div>
      </footer>
    </main>
  )
}
