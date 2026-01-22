import React, { useState } from 'react';
import { createRoot } from 'react-dom/client';
import { Box, FileText, Download, ArrowRight, Globe } from 'lucide-react';

// --- Translations ---
const TRANSLATIONS = {
  en: {
    nav: { products: "Products", downloads: "Downloads" },
    hero: {
      title: "Industrial Hydraulic Solutions",
      subtitle: "Engineered for extreme environments. Precision control for mining, construction, and automation.",
      badge: "Client-Side Preview Mode"
    },
    content: {
      featured: "Featured Products",
      showing: "Showing 3 of 12 Series",
      new: "NEW",
      specs: "Specs",
      details: "View Details"
    },
    footer: {
      desc: "Global leader in hydraulic power systems and motion control technology.",
      products: "Products",
      support: "Support",
      legal: "Legal",
      copyright: "© 2024 InduCore Manufacturing. All rights reserved."
    }
  },
  de: {
    nav: { products: "Produkte", downloads: "Downloads" },
    hero: {
      title: "Industrielle Hydrauliklösungen",
      subtitle: "Entwickelt für extreme Umgebungen. Präzisionssteuerung für Bergbau, Bauwesen und Automatisierung.",
      badge: "Client-Seitiger Vorschaumodus"
    },
    content: {
      featured: "Ausgewählte Produkte",
      showing: "Zeige 3 von 12 Serien",
      new: "NEU",
      specs: "Spezifikationen",
      details: "Details anzeigen"
    },
    footer: {
      desc: "Weltmarktführer für hydraulische Antriebssysteme und Antriebstechnik.",
      products: "Produkte",
      support: "Support",
      legal: "Rechtliches",
      copyright: "© 2024 InduCore Manufacturing. Alle Rechte vorbehalten."
    }
  },
  fr: {
    nav: { products: "Produits", downloads: "Téléchargements" },
    hero: {
      title: "Solutions Hydrauliques Industrielles",
      subtitle: "Conçu pour les environnements extrêmes. Contrôle de précision pour l'exploitation minière, la construction et l'automatisation.",
      badge: "Mode Aperçu Côté Client"
    },
    content: {
      featured: "Produits Vedettes",
      showing: "Affichage de 3 sur 12 séries",
      new: "NOUVEAU",
      specs: "Spécifications",
      details: "Voir les détails"
    },
    footer: {
      desc: "Leader mondial des systèmes d'alimentation hydraulique et de contrôle de mouvement.",
      products: "Produits",
      support: "Support",
      legal: "Mentions légales",
      copyright: "© 2024 InduCore Manufacturing. Tous droits réservés."
    }
  }
};

const MOCK_PRODUCTS = [
  {
    id: 1,
    model_name: "X-2000 Pro",
    summary: {
      en: "Heavy duty hydraulic pump for mining applications.",
      de: "Schwerlast-Hydraulikpumpe für Bergbauanwendungen.",
      fr: "Pompe hydraulique robuste pour applications minières."
    },
    thumb: "https://picsum.photos/seed/1/400/300"
  },
  {
    id: 2,
    model_name: "EcoFlow S1",
    summary: {
      en: "Compact standard pump for automation.",
      de: "Kompakte Standardpumpe für die Automatisierung.",
      fr: "Pompe standard compacte pour l'automatisation."
    },
    thumb: "https://picsum.photos/seed/2/400/300"
  },
  {
    id: 3,
    model_name: "HydraMax 500",
    summary: {
      en: "High pressure industrial valve system.",
      de: "Industrielles Hochdruckventilsystem.",
      fr: "Système de vanne industrielle haute pression."
    },
    thumb: "https://picsum.photos/seed/3/400/300"
  }
];

type Lang = 'en' | 'de' | 'fr';

const App = () => {
  const [lang, setLang] = useState<Lang>('en');
  const t = TRANSLATIONS[lang];

  return (
    <div className="min-h-screen font-sans text-slate-900">
      {/* Navbar */}
      <nav className="bg-slate-900 text-white p-4 sticky top-0 z-50 shadow-md">
        <div className="container mx-auto flex justify-between items-center">
          <div className="flex items-center gap-2">
            <Box className="text-orange-500 w-6 h-6" />
            <span className="text-xl font-bold tracking-tight text-orange-500">INDUCORE</span>
          </div>
          <div className="hidden md:flex space-x-6 text-sm items-center">
            <a href="#" className="hover:text-orange-400 transition-colors">{t.nav.products}</a>
            <a href="#" className="hover:text-orange-400 transition-colors">{t.nav.downloads}</a>
            <span className="text-gray-600">|</span>
            <div className="flex gap-3">
              {(['en', 'de', 'fr'] as Lang[]).map((l) => (
                <button
                  key={l}
                  onClick={() => setLang(l)}
                  className={`uppercase font-medium transition-colors ${
                    lang === l ? 'text-white border-b-2 border-orange-500' : 'text-gray-400 hover:text-white'
                  }`}
                >
                  {l}
                </button>
              ))}
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <div className="bg-slate-800 text-white py-16 relative overflow-hidden">
        <div className="absolute inset-0 opacity-10 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')]"></div>
        <div className="container mx-auto px-4 text-center relative z-10">
          <h1 className="text-4xl md:text-5xl font-bold mb-4 tracking-tight">{t.hero.title}</h1>
          <p className="text-gray-400 max-w-2xl mx-auto text-lg mb-8">
            {t.hero.subtitle}
          </p>
          <div className="inline-block bg-orange-900/50 border border-orange-500/30 text-orange-200 px-4 py-2 rounded-full text-sm">
            {t.hero.badge} <code className="font-mono bg-black/30 px-1 rounded ml-1">npm run dev</code>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="container mx-auto py-12 px-4">
        <div className="flex items-center justify-between mb-8">
          <h2 className="text-2xl font-bold text-slate-800 border-l-4 border-orange-500 pl-4">
            {t.content.featured}
          </h2>
          <div className="text-sm text-gray-500">{t.content.showing}</div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {MOCK_PRODUCTS.map((p) => (
            <div key={p.id} className="bg-white rounded-lg shadow-sm border border-gray-200 hover:shadow-lg transition-all duration-300 group cursor-pointer overflow-hidden flex flex-col">
              <div className="h-48 bg-gray-100 relative overflow-hidden">
                <img 
                  src={p.thumb} 
                  alt={p.model_name} 
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" 
                />
                <div className="absolute top-0 right-0 bg-orange-500 text-white text-xs font-bold px-2 py-1 m-2 rounded">
                  {t.content.new}
                </div>
              </div>
              <div className="p-5 flex-1 flex flex-col">
                <div className="text-xs text-gray-400 mb-1 uppercase tracking-wider">Hydraulic Pumps</div>
                <h3 className="text-xl font-bold text-slate-900 group-hover:text-orange-600 transition-colors mb-2">
                  {p.model_name}
                </h3>
                <p className="text-gray-600 text-sm line-clamp-2 mb-4 flex-1">
                  {p.summary[lang]}
                </p>
                <div className="mt-auto pt-4 border-t border-gray-100 flex items-center justify-between text-sm">
                  <span className="flex items-center text-gray-500">
                    <FileText className="w-4 h-4 mr-1" /> {t.content.specs}
                  </span>
                  <span className="flex items-center text-orange-600 font-semibold group-hover:translate-x-1 transition-transform">
                    {t.content.details} <ArrowRight className="w-4 h-4 ml-1" />
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Footer */}
      <footer className="bg-slate-900 text-slate-400 py-12 mt-12 border-t border-slate-800">
        <div className="container mx-auto px-4 grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          <div>
            <div className="flex items-center gap-2 mb-4">
              <Box className="text-orange-500 w-5 h-5" />
              <span className="text-lg font-bold text-white">INDUCORE</span>
            </div>
            <p className="text-sm">{t.footer.desc}</p>
          </div>
          <div>
            <h4 className="text-white font-semibold mb-4">{t.footer.products}</h4>
            <ul className="space-y-2 text-sm">
              <li><a href="#" className="hover:text-orange-400">Pumps & Motors</a></li>
              <li><a href="#" className="hover:text-orange-400">Valves</a></li>
              <li><a href="#" className="hover:text-orange-400">Cylinders</a></li>
            </ul>
          </div>
          <div>
            <h4 className="text-white font-semibold mb-4">{t.footer.support}</h4>
            <ul className="space-y-2 text-sm">
              <li><a href="#" className="hover:text-orange-400">Documentation</a></li>
              <li><a href="#" className="hover:text-orange-400">CAD Models</a></li>
              <li><a href="#" className="hover:text-orange-400">Contact Sales</a></li>
            </ul>
          </div>
          <div>
            <h4 className="text-white font-semibold mb-4">{t.footer.legal}</h4>
            <ul className="space-y-2 text-sm">
              <li><a href="#" className="hover:text-orange-400">Imprint</a></li>
              <li><a href="#" className="hover:text-orange-400">Privacy Policy</a></li>
            </ul>
          </div>
        </div>
        <div className="container mx-auto px-4 pt-8 border-t border-slate-800 text-center text-xs">
          {t.footer.copyright}
        </div>
      </footer>
    </div>
  );
};

const root = createRoot(document.getElementById('root') as HTMLElement);
root.render(<App />);