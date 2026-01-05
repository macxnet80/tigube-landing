"use client"

import { useState } from "react"
import { NewsletterModal } from "../components/newsletter-modal"
import Link from "next/link"

export default function LandingPage() {
  const [isModalOpen, setIsModalOpen] = useState(false)

  return (
    <main className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="bg-white py-12 md:py-20 px-4 text-center">
        <div className="max-w-5xl mx-auto">
          {/* Announcement Banner */}
          <div className="inline-flex items-center gap-2 bg-red-50 border border-red-200 rounded-full px-3 md:px-4 py-2 mb-6 md:mb-8">
            <div className="w-2 h-2 bg-red-500 rounded-full"></div>
            <span className="text-red-700 text-xs md:text-sm font-medium">3 Monate gratis nur für kurze Zeit</span>
          </div>

          {/* Logo */}
          <div className="mx-auto mb-6 md:mb-8">
            <img
              src="/Logos/tigube_logo_mit_hund_katze.svg"
              alt="tigube Logo"
              className="h-20 md:h-32 w-auto mx-auto"
            />
          </div>

          {/* Main Headline */}
          <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold mb-4 md:mb-6 text-gray-900 leading-tight px-2">
            Finde liebevolle Tierbetreuung in deiner Nähe
          </h1>

          {/* Subheadline */}
          <p className="text-lg md:text-xl text-gray-600 mb-8 md:mb-12 max-w-3xl mx-auto leading-relaxed px-2">
            tigube verbindet Tierhalter:innen mit geprüften, engagierten Betreuungspersonen. Egal ob Hund, Katze oder Kleintier – hier findest du zuverlässige Hilfe für Alltag, Urlaub & Notfälle.
          </p>

          {/* CTA Button */}
          <div className="mb-6 md:mb-8">
            <button 
              onClick={() => setIsModalOpen(true)}
              className="bg-[#6b8e46] hover:bg-[#5a7a3a] text-white font-semibold py-3 md:py-4 px-6 md:px-8 rounded-full text-base md:text-lg transition-all duration-200 shadow-lg hover:shadow-xl transform hover:-translate-y-0.5 w-full max-w-xs mx-auto block"
            >
              Jetzt vormerken
            </button>
          </div>

        </div>
      </section>

      {/* Image Section - Overlapping Hero */}
      <section className="relative -mt-10 md:-mt-20 pb-12 md:pb-16 px-4 my-4 md:my-6">
        <div className="max-w-6xl mx-auto">
          <div className="relative">
            <img
              src="/images/tigube-tierisch-gut-betreut-10-17-2025_03_10_PM.png"
              alt="tigube - Tierisch gut betreut"
              className="w-full h-auto rounded-xl md:rounded-2xl shadow-2xl my-4 md:my-6"
            />
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-12 md:py-16 px-4 bg-white">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-2xl md:text-3xl font-bold text-center mb-8 md:mb-12 px-2">So funktioniert Tigube!</h2>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12">
            {/* Für Tierhalter */}
            <div className="text-center">
              <div className="bg-[#eaede3] rounded-full w-20 h-20 mx-auto mb-6 flex items-center justify-center">
                <svg width="32" height="32" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path
                    d="M12 21C16.9706 21 21 16.9706 21 12C21 7.02944 16.9706 3 12 3C7.02944 3 3 7.02944 3 12C3 16.9706 7.02944 21 12 21Z"
                    stroke="#6b8e46"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M8 14S9.5 16 12 16S16 14 16 14M9 9H9.01M15 9H15.01"
                    stroke="#6b8e46"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </div>
              <h3 className="text-2xl font-bold mb-4 text-[#6b8e46]">Für Tierhalter:innen</h3>
              <p className="text-gray-600 mb-6">
                Finde zuverlässige Betreuung für dein Tier – einfach, sicher und transparent.
              </p>
              <ul className="text-left space-y-2 text-gray-600">
                <li className="flex items-center gap-2">
                  <span className="w-2 h-2 bg-[#6b8e46] rounded-full"></span>
                  Einfach & kostenlos registrieren
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-2 h-2 bg-[#6b8e46] rounded-full"></span>
                  Betreuungspersonen nach Ort, Tierart & Verfügbarkeit filtern
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-2 h-2 bg-[#6b8e46] rounded-full"></span>
                  Alle Betreuer:innen geprüft & gebrieft
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-2 h-2 bg-[#6b8e46] rounded-full"></span>
                  Transparente Profile
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-2 h-2 bg-[#6b8e46] rounded-full"></span>
                  Ideal für Berufstätige, Urlaube, Notfälle oder den Alltag
                </li>
              </ul>
            </div>

            {/* Für Betreuungspersonen */}
            <div className="text-center">
              <div className="bg-[#eaede3] rounded-full w-20 h-20 mx-auto mb-6 flex items-center justify-center">
                <svg width="32" height="32" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path
                    d="M16 21V19C16 17.9391 15.5786 16.9217 14.8284 16.1716C14.0783 15.4214 13.0609 15 12 15H5C3.93913 15 2.92172 15.4214 2.17157 16.1716C1.42143 16.9217 1 17.9391 1 19V21M12.5 7C12.5 9.20914 10.7091 11 8.5 11C6.29086 11 4.5 9.20914 4.5 7C4.5 4.79086 6.29086 3 8.5 3C10.7091 3 12.5 4.79086 12.5 7ZM20 8V14M23 11H17"
                    stroke="#6b8e46"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </div>
              <h3 className="text-2xl font-bold mb-4 text-[#6b8e46]">Für Betreuungspersonen</h3>
              <p className="text-gray-600 mb-6">
                Werde Teil unserer Community und biete deine Tierbetreuung an.
              </p>
              <ul className="text-left space-y-2 text-gray-600">
                <li className="flex items-center gap-2">
                  <span className="w-2 h-2 bg-[#6b8e46] rounded-full"></span>
                  Sichtbar werden für lokale Tierhalter
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-2 h-2 bg-[#6b8e46] rounded-full"></span>
                  Eigene Betreuung anbieten & Profil gestalten
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-2 h-2 bg-[#6b8e46] rounded-full"></span>
                  Kostenlos starten – mit professioneller Unterstützung
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-2 h-2 bg-[#6b8e46] rounded-full"></span>
                  Verlässliches Matching & direkte Anfragen
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-2 h-2 bg-[#6b8e46] rounded-full"></span>
                  Teil einer wachsenden Community
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Why Tigube Section */}
      <section className="py-12 md:py-16 px-4 bg-gray-50">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-2xl md:text-3xl font-bold text-center mb-2 px-2">Warum tigube?</h2>
          <p className="text-center text-gray-600 mb-8 md:mb-12 px-2">
            Vertrauen, Erfahrung und Leidenschaft für Tiere
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
            <div className="text-center">
              <div className="bg-white rounded-full w-16 h-16 mx-auto mb-4 flex items-center justify-center shadow-sm">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path
                    d="M9 12L11 14L15 10M21 12C21 16.9706 16.9706 21 12 21C7.02944 21 3 16.9706 3 12C3 7.02944 7.02944 3 12 3C16.9706 3 21 7.02944 21 12Z"
                    stroke="#6b8e46"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </div>
              <h3 className="font-bold mb-2">Geprüfte Betreuungspersonen</h3>
              <p className="text-gray-600 text-sm">Alle Tierbetreuer:innen werden vor Freischaltung sorgfältig ausgewählt, geprüft und geschult</p>
            </div>

            <div className="text-center">
              <div className="bg-white rounded-full w-16 h-16 mx-auto mb-4 flex items-center justify-center shadow-sm">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path
                    d="M12 21.35L10.55 20.03C5.4 15.36 2 12.27 2 8.5C2 5.42 4.42 3 7.5 3C9.24 3 10.91 3.81 12 5.08C13.09 3.81 14.76 3 16.5 3C19.58 3 22 5.42 22 8.5C22 12.27 18.6 15.36 13.45 20.03L12 21.35Z"
                    stroke="#6b8e46"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </div>
              <h3 className="font-bold mb-2">Für alle Tiere</h3>
              <p className="text-gray-600 text-sm">Ob Hund, Katze oder Meerschweinchen – bei Tigube findest du passende Unterstützung</p>
            </div>

            <div className="text-center">
              <div className="bg-white rounded-full w-16 h-16 mx-auto mb-4 flex items-center justify-center shadow-sm">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path
                    d="M12 8V12L15 15M21 12C21 16.9706 16.9706 21 12 21C7.02944 21 3 16.9706 3 12C3 7.02944 7.02944 3 12 3C16.9706 3 21 7.02944 21 12Z"
                    stroke="#6b8e46"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </div>
              <h3 className="font-bold mb-2">Alltag & Notfall</h3>
              <p className="text-gray-600 text-sm">Ob regelmäßig oder spontan – wir bringen euch zuverlässig zusammen</p>
            </div>

            <div className="text-center">
              <div className="bg-white rounded-full w-16 h-16 mx-auto mb-4 flex items-center justify-center shadow-sm">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path
                    d="M17 20H22V18C22 16.3431 20.6569 15 19 15C18.0444 15 17.1931 15.4468 16.6438 16.1429M17 20H7M17 20V18C17 17.3438 16.8736 16.717 16.6438 16.1429M7 20H2V18C2 16.3431 3.34315 15 5 15C5.95561 15 6.80686 15.4468 7.35625 16.1429M7 20V18C7 17.3438 7.12642 16.717 7.35625 16.1429M7.35625 16.1429C8.0935 14.301 9.89482 13 12 13C14.1052 13 15.9065 14.301 16.6438 16.1429M15 7C15 8.65685 13.6569 10 12 10C10.3431 10 9 8.65685 9 7C9 5.34315 10.3431 4 12 4C13.6569 4 15 5.34315 15 7ZM21 10C21 11.1046 20.1046 12 19 12C17.8954 12 17 11.1046 17 10C17 8.89543 17.8954 8 19 8C20.1046 8 21 8.89543 21 10ZM7 10C7 11.1046 6.10457 12 5 12C3.89543 12 3 11.1046 3 10C3 8.89543 3.89543 8 5 8C6.10457 8 7 8.89543 7 10Z"
                    stroke="#6b8e46"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </div>
              <h3 className="font-bold mb-2">Erfahrung aus der Praxis</h3>
              <p className="text-gray-600 text-sm">tigube wurde von echten Tierprofis entwickelt – mit Herz, Verstand und jahrzehntelanger Erfahrung</p>
            </div>
          </div>
        </div>
      </section>

      {/* Personal Story Section */}
      <section className="py-16 px-4 bg-white">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold mb-12 text-center">Von Tiermenschen für Tiermenschen</h2>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Images Section */}
            <div className="relative">
              {/* Mobile Layout - Stacked Images with Natural Aspect Ratios */}
              <div className="block lg:hidden space-y-6">
                {/* Gabriel - Natural aspect ratio */}
                <div className="w-full max-w-sm mx-auto">
                  <img
                    src="/images/tigube_Gabriel_Haaga.jpg"
                    alt="Gabriel Haaga"
                    className="w-full h-auto object-contain rounded-lg shadow-lg"
                  />
                </div>
                {/* Tamara - Natural aspect ratio */}
                <div className="w-full max-w-sm mx-auto">
                  <img
                    src="/images/tigube_Tamara_Pfaff.jpg"
                    alt="Tamara Pfaff"
                    className="w-full h-auto object-contain rounded-lg shadow-lg"
                  />
                </div>
                {/* Luna - Natural aspect ratio */}
                <div className="w-full max-w-sm mx-auto">
                  <img
                    src="/images/Boxer_Hund_Luna.jpg"
                    alt="Luna - Boxer Hund"
                    className="w-full h-auto object-contain rounded-lg shadow-lg"
                  />
                </div>
              </div>

              {/* Desktop Layout - Overlapping Images */}
              <div className="hidden lg:block relative w-full h-96">
                {/* Gabriel - Hintergrund */}
                <div className="absolute top-0 left-0 w-64 h-80 rounded-lg overflow-hidden shadow-lg z-10">
                  <img
                    src="/images/tigube_Gabriel_Haaga.jpg"
                    alt="Gabriel Haaga"
                    className="w-full h-full object-cover"
                  />
                </div>
                
                {/* Tamara - Mitte */}
                <div className="absolute top-8 right-0 w-64 h-80 rounded-lg overflow-hidden shadow-lg z-20">
                  <img
                    src="/images/tigube_Tamara_Pfaff.jpg"
                    alt="Tamara Pfaff"
                    className="w-full h-full object-cover"
                  />
                </div>
                
                {/* Luna - Vordergrund */}
                <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-48 h-60 rounded-lg overflow-hidden shadow-lg z-30">
                  <img
                    src="/images/Boxer_Hund_Luna.jpg"
                    alt="Luna - Boxer Hund"
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
            </div>

            {/* Text Section */}
            <div className="space-y-6">
              <p className="text-lg text-gray-700">
                Mara und Gabriel haben tigube gegründet, denn sie wissen aus erster Hand, wie schwer es sein kann, gute Betreuung für geliebte Vierbeiner zu finden.
              </p>
              <p className="text-lg text-gray-700">
                Aus ihrer langjährigen Arbeit in der eigenen Hundepension und Katzenbetreuung entstand der Wunsch, eine digitale Lösung zu schaffen – zuverlässig, menschlich und professionell.
              </p>
              <p className="text-lg text-gray-700">
                Mit über einem Dutzend Aus- und Weiterbildungen (u. a. Hundetraining, Problemhundeberatung, Tierernährung, Sachkundenachweise, Tierschutzgesetz, …) bringen sie nicht nur Fachwissen, sondern echte Leidenschaft mit.
              </p>
              <p className="text-lg text-gray-700">
                tigube ist das Ergebnis dieser Vision: eine Plattform, die Vertrauen schafft – und Tierliebe mit Alltag vereinbar macht.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 px-4 bg-gray-50">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12">Häufige Fragen</h2>

          <div className="space-y-6">
            <div className="bg-white rounded-lg p-6 shadow-sm">
              <h3 className="text-lg font-bold mb-3 text-[#6b8e46]">Welche Tiere kann ich betreuen lassen?</h3>
              <p className="text-gray-600">
                tigube vermittelt Betreuung für Hunde, Katzen und andere Kleintiere.
              </p>
            </div>

            <div className="bg-white rounded-lg p-6 shadow-sm">
              <h3 className="text-lg font-bold mb-3 text-[#6b8e46]">Wie finde ich jemanden in meiner Nähe?</h3>
              <p className="text-gray-600">
                Mit deiner Postleitzahl und Filtern zur Tierart und Verfügbarkeit findest du passende Betreuung in deiner Umgebung.
              </p>
            </div>

            <div className="bg-white rounded-lg p-6 shadow-sm">
              <h3 className="text-lg font-bold mb-3 text-[#6b8e46]">Wie wird sichergestellt, dass die Sitter:innen geeignet sind?</h3>
              <p className="text-gray-600">
                Alle Betreuungspersonen durchlaufen einen strukturierten Check und ein Onboarding durch das tigube-Team.
              </p>
            </div>

            <div className="bg-white rounded-lg p-6 shadow-sm">
              <h3 className="text-lg font-bold mb-3 text-[#6b8e46]">Kann ich selbst Tierbetreuung anbieten?</h3>
              <p className="text-gray-600">
                Ja! Registriere dich als Dienstleister und erstelle dein Profil.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-[#6b8e46] py-16 px-4 text-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-4">Bereit für mehr (Planungs-) Sicherheit im Alltag – für dich und dein Tier?</h2>
          <p className="mb-8 text-lg">
            tigube bringt zusammen, was zusammengehört.
          </p>

          <button 
            onClick={() => setIsModalOpen(true)}
            className="bg-white text-[#6b8e46] font-semibold py-4 px-8 rounded-full text-lg transition-all duration-200 shadow-lg hover:shadow-xl transform hover:-translate-y-0.5 hover:bg-gray-50"
          >
            Jetzt vormerken
          </button>

          <p className="mt-6 text-sm opacity-90">
            Kostenlose Registrierung • Keine versteckten Gebühren • Jederzeit kündbar
          </p>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-white text-gray-900 py-12 px-4">
        <div className="max-w-6xl mx-auto">
          {/* Logo */}
          <div className="text-center mb-8">
            <img
              src="/Logos/tigube_logo_mit_hund_katze.svg"
              alt="tigube Logo"
              className="h-24 w-auto mx-auto"
            />
          </div>

          {/* Bottom Bar */}
          <div className="border-t border-gray-300 pt-6">
            <div className="flex flex-col md:flex-row justify-between items-center gap-4">
              <p className="text-gray-600 text-sm">
                © 2024 tigube. Alle Rechte vorbehalten.
              </p>
              <div className="flex gap-6 text-sm">
                <a href="/impressum" className="text-gray-600 hover:text-gray-900 transition-colors">Impressum</a>
                <a href="/datenschutz" className="text-gray-600 hover:text-gray-900 transition-colors">Datenschutz</a>
              </div>
            </div>
          </div>
        </div>
      </footer>

      {/* Single Newsletter Modal - shared by all CTAs */}
      <NewsletterModal 
        isOpen={isModalOpen} 
        onClose={() => setIsModalOpen(false)} 
      />
    </main>
  )
}
