import React from 'react';

export default function Footer() {
  return (
    <footer className="bg-gray-50 border-t border-gray-100 py-16">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center gap-12 text-center md:text-left">
          <div className="space-y-4">
            <div className="flex items-center justify-center md:justify-start gap-2">
              <div className="w-10 h-10 bg-indigo-600 rounded-lg flex items-center justify-center text-white font-bold text-xl">A</div>
              <span className="text-2xl font-bold text-gray-900">Arisu Home Tuition</span>
            </div>
            <p className="text-gray-500 max-w-xs text-sm">
              Empowering the next generation with personalized 1-on-1 education.
            </p>
          </div>
          <div className="text-xs text-gray-400 font-medium">
            <p>&copy; 2025 Arisu Home Tuition Consultancy. All rights reserved.</p>
          </div>
        </div>
      </div>
    </footer>
  );
}