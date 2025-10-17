"use client"

import { useState, useEffect } from "react"
import { X, Mail, CheckCircle, AlertCircle } from "lucide-react"
import { supabase } from "@/lib/supabase"

interface NewsletterModalProps {
  isOpen: boolean
  onClose: () => void
}

export function NewsletterModal({ isOpen, onClose }: NewsletterModalProps) {
  const [step, setStep] = useState(1)
  const [email, setEmail] = useState("")
  const [userType, setUserType] = useState<"pet_owner" | "pet_sitter" | null>(null)
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState("")
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  useEffect(() => {
    if (isOpen) {
      // Prevent body scroll when modal is open
      document.body.style.overflow = 'hidden'
    } else {
      // Restore body scroll when modal is closed
      document.body.style.overflow = 'unset'
    }

    // Cleanup function to restore scroll when component unmounts
    return () => {
      document.body.style.overflow = 'unset'
    }
  }, [isOpen])


  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    if (!email || !userType) return

    setLoading(true)
    setError("")

    try {
      const { error } = await supabase
        .from("email_signups")
        .insert([
          {
            email: email,
            source: "newsletter_modal",
            is_verified: false,
          },
        ])

      if (error) {
        console.log("Supabase error:", error)
        setError("Fehler beim Speichern. Bitte versuchen Sie es erneut.")
        return
      }

      setStep(2)
    } catch (err) {
      console.log("Error:", err)
      setError("Fehler beim Speichern. Bitte versuchen Sie es erneut.")
    } finally {
      setLoading(false)
    }
  }

  const resetModal = () => {
    setStep(1)
    setEmail("")
    setUserType(null)
    setError("")
  }

  const handleClose = () => {
    resetModal()
    onClose()
  }

  if (!isOpen || !mounted) return null

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 backdrop-blur-sm flex items-center justify-center z-50 p-2 md:p-4" style={{ overflow: 'hidden' }}>
      <div className="bg-white rounded-lg max-w-2xl w-full max-h-[95vh] md:max-h-[90vh] overflow-y-auto">
        {/* Close Button */}
        <div className="flex justify-end pt-2 pr-4">
          <button
            onClick={handleClose}
            className="text-gray-400 hover:text-gray-600 transition-colors"
          >
            <X className="h-5 w-5" />
          </button>
        </div>

        {/* Content */}
        <div className="px-4 md:px-6 pb-6">
          {step === 1 ? (
            <div className="space-y-6">
              {/* Introduction */}
              <div className="text-center">
                <h3 className="text-xl md:text-2xl font-bold text-gray-900 mb-4">
                  Bleib tierisch gut informiert – mit dem tigube Newsletter
                </h3>
                <p className="text-gray-600 mb-6 text-sm md:text-base">
                  Werde Teil unserer Community – für alle, die ihre Tiere lieben.
                </p>
              </div>

              {/* Benefits */}
              <div className="bg-gray-50 rounded-lg p-4 md:p-6">
                <h4 className="font-bold text-gray-800 mb-4 text-sm md:text-base">📨 Was dich im Newsletter erwartet</h4>
                <ul className="space-y-2 text-xs md:text-sm text-gray-600">
                  <li>• <strong>Exklusive Einblicke</strong> hinter die Kulissen von tigube</li>
                  <li>• <strong>Alle Updates</strong> über neue Betreuungspersonen & Funktionen</li>
                  <li>• <strong>Impulse & Wissen</strong> aus der Tierbetreuungspraxis</li>
                  <li>• <strong>Specials für unsere Abonnent:innen</strong></li>
                </ul>
              </div>

              {/* Form */}
              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    E-Mail-Adresse
                  </label>
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#6b8e46] focus:border-transparent"
                    placeholder="deine@email.de"
                    required
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Ich bin...
                  </label>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    <button
                      type="button"
                      onClick={() => setUserType("pet_owner")}
                      className={`p-3 rounded-lg border-2 transition-colors text-sm md:text-base ${
                        userType === "pet_owner"
                          ? "border-[#6b8e46] bg-[#6b8e46] text-white"
                          : "border-gray-300 hover:border-gray-400"
                      }`}
                    >
                      Tierhalter:in
                    </button>
                    <button
                      type="button"
                      onClick={() => setUserType("pet_sitter")}
                      className={`p-3 rounded-lg border-2 transition-colors text-sm md:text-base ${
                        userType === "pet_sitter"
                          ? "border-[#6b8e46] bg-[#6b8e46] text-white"
                          : "border-gray-300 hover:border-gray-400"
                      }`}
                    >
                      Betreuungsperson
                    </button>
                  </div>
                </div>

                {error && (
                  <div className="flex items-center gap-2 text-red-600 text-sm">
                    <AlertCircle className="h-4 w-4" />
                    {error}
                  </div>
                )}

                <button
                  type="submit"
                  disabled={loading || !email || !userType}
                  className="w-full bg-[#6b8e46] text-white py-3 px-6 rounded-lg font-semibold hover:bg-[#5a7a3a] transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {loading ? "Wird gespeichert..." : "E-Mail eintragen & dabei sein"}
                </button>
              </form>

              <p className="text-xs text-gray-500 text-center">
                Wir senden dir nur tierisch relevante Inhalte. Kein Spam, keine Verpflichtungen. Abmeldung jederzeit möglich.
              </p>
            </div>
          ) : (
            <div className="text-center space-y-6">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto">
                <CheckCircle className="h-8 w-8 text-green-600" />
              </div>

              <div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">
                  Nur noch ein letzter Schritt...
                </h3>
                <p className="text-gray-600 mb-6">
                  Damit wir dir wirklich tierisch gute Infos schicken dürfen, musst du noch deine E-Mail-Adresse bestätigen.
                </p>
              </div>

              <div className="bg-gray-50 rounded-lg p-6 text-left">
                <h4 className="font-bold text-gray-800 mb-4">📥 So geht's weiter:</h4>
                <ol className="space-y-3 text-sm text-gray-600">
                  <li className="flex items-start gap-3">
                    <span className="w-6 h-6 bg-[#6b8e46] text-white rounded-full flex items-center justify-center text-xs font-bold">1</span>
                    <span><strong>Öffne dein E-Mail-Postfach</strong><br />(Der Absender ist Mara von tigube)</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="w-6 h-6 bg-[#6b8e46] text-white rounded-full flex items-center justify-center text-xs font-bold">2</span>
                    <span><strong>Klick auf den Bestätigungslink</strong><br />Nur dann dürfen wir dir zukünftig Neuigkeiten & Tipps senden.</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="w-6 h-6 bg-[#6b8e46] text-white rounded-full flex items-center justify-center text-xs font-bold">3</span>
                    <span><strong>Schon bald bekommst du deinen ersten Newsletter.</strong><br />Darin erfährst du, was hinter tigube steckt – und wie wir dich unterstützen können.</span>
                  </li>
                </ol>
              </div>

              <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-4">
                <h4 className="font-bold text-yellow-800 mb-2">❗️ Keine E-Mail erhalten?</h4>
                <p className="text-sm text-yellow-700">
                  Prüfe bitte auch deinen <strong>Spam-Ordner</strong> oder den <strong>Werbung-/Promotions-Tab</strong> (z. B. bei Gmail).<br />
                  Falls du keine Mail findest: <strong>erneut anmelden</strong> oder schreib uns an info@tierischgutbetreut.de
                </p>
              </div>

              <div className="space-y-4">
                <p className="text-gray-600">
                  <strong>Danke, dass du dabei bist.</strong><br />
                  Wir freuen uns, dich in der tigube-Community willkommen zu heißen 🐾
                </p>
                <p className="text-xs text-gray-500">
                  Tipp: Speichere unsere E-Mail-Adresse am besten gleich als Kontakt, damit nichts verloren geht.
                </p>
              </div>

              <button
                onClick={handleClose}
                className="bg-[#6b8e46] text-white py-3 px-6 rounded-lg font-semibold hover:bg-[#5a7a3a] transition-colors"
              >
                Verstanden
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  )
}
