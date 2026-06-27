"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { AlertTriangle, Menu, X } from "lucide-react";
import { NAV_ITEMS } from "@/data/siteContent";

export function SiteHeader() {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();

  return (
    <>
      <div className="hidden md:block bg-red-600 text-white text-center py-2 px-4 text-sm font-rubik font-bold flex justify-center items-center gap-2">
        <AlertTriangle size={16} />
        <span>18+ APENAS. O jogo envolve risco. Jogue com responsabilidade.</span>
      </div>

      <header className="w-full bg-portal-white shadow-sm sticky top-0 z-50 border-b border-portal-gray/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between">
          <Link href="/" className="flex items-center shrink-0">
            <Image
              src="/logo.png"
              alt="ReelSorte"
              width={221}
              height={45}
              className="h-10 w-auto"
              priority
            />
          </Link>

          <nav className="hidden md:flex items-center gap-6 font-rubik font-bold text-portal-purple-dark text-sm tracking-wide">
            {NAV_ITEMS.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className={`hover:text-portal-purple transition-colors ${
                  pathname === item.href ? "text-portal-purple" : ""
                }`}
              >
                {item.name}
              </Link>
            ))}
          </nav>

          <button
            className="md:hidden p-2 text-portal-purple-dark"
            onClick={() => setIsOpen(!isOpen)}
            aria-label={isOpen ? "Fechar menu" : "Abrir menu"}
            aria-expanded={isOpen}
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {isOpen && (
          <nav className="md:hidden border-t border-portal-gray/10 bg-portal-white px-4 py-4 space-y-2">
            {NAV_ITEMS.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                onClick={() => setIsOpen(false)}
                className={`block py-3 font-rubik font-bold text-sm ${
                  pathname === item.href ? "text-portal-purple" : "text-portal-purple-dark"
                }`}
              >
                {item.name}
              </Link>
            ))}
          </nav>
        )}
      </header>
    </>
  );
}
