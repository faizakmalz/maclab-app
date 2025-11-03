'use client';

import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { FiMenu, FiX } from 'react-icons/fi';

export default function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="flex w-[375px] justify-between items-center px-[6%] overflow-hidden  py-4 bg-white shadow-md relative z-50">
      <div className="font-bold text-xl flex items-center gap-2">
        🍜 MacLab
      </div>

      <button
        className="focus:outline-none cursor-pointer"
        onClick={() => setOpen(!open)}
        aria-label="Toggle menu"
      >
        {open ? <FiX size={26} /> : <FiMenu size={26} />}
      </button>

      {open && (
        <div
          className="fixed inset-0 bg-black/40 z-40"
          onClick={() => setOpen(false)}
        />
      )}

      <aside
        className={`fixed top-0 right-0 h-48 w-3/4 rounded-lg max-w-[250px] bg-white shadow-lg z-50 transform transition-transform duration-300 ${
          open ? 'translate-y-15' : '-translate-y-50'
        }`}
      >
        <div className="flex flex-col p-6 space-y-4 font-medium">
          <Link href="/" onClick={() => setOpen(false)} className="hover:text-red-700">Home</Link>
          <Link href="/about" onClick={() => setOpen(false)} className="hover:text-red-700">About Us</Link>
          <Link href="/menu" onClick={() => setOpen(false)} className="hover:text-red-700">Menu</Link>
        </div>
      </aside>
    </header>
  );
}
