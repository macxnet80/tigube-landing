"use client";

import React from "react";

interface Signup {
  id: string;
  email: string;
  source: string;
  created_at: string;
  is_verified?: boolean;
}

export default function EmailSignupsTable({ signups }: { signups: Signup[] }) {
  return (
    <div className="overflow-x-auto">
      <table className="w-full">
        <thead>
          <tr className="border-b">
            <th className="text-left py-3 px-2 font-semibold">E-Mail</th>
            <th className="text-left py-3 px-2 font-semibold">Quelle</th>
            <th className="text-left py-3 px-2 font-semibold">Anmeldedatum</th>
            <th className="text-left py-3 px-2 font-semibold">Status</th>
          </tr>
        </thead>
        <tbody>
          {signups.map((signup, index) => (
            <tr key={signup.id} className={`border-b hover:bg-gray-50 ${index < 2 ? "bg-blue-50" : ""}`}>
              <td className="py-3 px-2 font-medium">
                {signup.email}
                {index < 2 && (
                  <span className="ml-2 px-2 py-1 bg-blue-100 text-blue-800 rounded text-xs">Demo</span>
                )}
              </td>
              <td className="py-3 px-2">
                <span className="px-2 py-1 bg-gray-100 rounded text-sm">
                  {signup.source === "hero_section"
                    ? "Hero"
                    : signup.source === "cta_section"
                    ? "CTA"
                    : signup.source}
                </span>
              </td>
              <td className="py-3 px-2 text-sm text-gray-600">
                {new Date(signup.created_at).toLocaleDateString("de-DE", {
                  year: "numeric",
                  month: "2-digit",
                  day: "2-digit",
                  hour: "2-digit",
                  minute: "2-digit",
                })}
              </td>
              <td className="py-3 px-2">
                <span className="px-2 py-1 bg-green-100 text-green-800 rounded text-xs">Aktiv</span>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
} 