"use client";

import Image from "next/image";
import Link from "next/link";

export default function PelangganDashboard() {
  return (
    <div className="min-h-screen bg-[#FCFDFD] flex flex-col font-sans overflow-x-hidden">
      <nav className="w-full px-6 lg:px-16 py-6 flex items-center justify-between z-50">
        <Link href="/">
          <Image 
            src="/asset/logo.png" 
            alt="CargoKu Lite" 
            width={180} 
            height={50} 
            className="h-[42px] w-auto object-contain cursor-pointer"
            priority
          />
        </Link>
        
        <div className="hidden lg:flex items-center gap-10 text-[15px] font-bold text-gray-600">
          <Link href="#" className="hover:text-[#65A657] transition-colors">Tracking</Link>
          <Link href="#" className="hover:text-[#65A657] transition-colors">Profil</Link>
          <Link href="#" className="hover:text-[#65A657] transition-colors">Bantuan</Link>
          <div className="h-[2px] w-[16px] bg-gray-300 rounded"></div>
          <Link href="/login" className="bg-[#65A657] hover:bg-[#58964b] text-white px-7 py-3 rounded-[14px] transition-all shadow-sm">
            Keluar
          </Link>
        </div>
      </nav>

      <main className="flex-grow flex flex-col lg:flex-row px-6 lg:px-16 pt-6 pb-20 max-w-[1440px] mx-auto w-full">
        
        <div className="w-full lg:w-[55%] flex flex-col justify-center z-10 pt-4 lg:pt-0">
          <h1 className="text-[40px] md:text-[52px] lg:text-[58px] leading-[1.15] font-extrabold text-[#1E293B] tracking-tight mb-5">
            Lacak Paket Anda <br className="hidden lg:block" />
            dengan <span className="text-[#65A657]">Mudah & Cepat</span>
          </h1>
          
          <p className="text-[#64748B] text-[15px] sm:text-[16px] leading-[1.7] mb-8 max-w-[500px] font-medium">
            Aplikasi tracking resi sederhana untuk UMKM & kurir. Ringan, ramah, dan dibuat untuk mobile.
          </p>

          <div className="flex flex-wrap gap-3 mb-10">
            <span className="bg-[#F0F7F1] text-[#488746] px-4 py-1.5 rounded-full text-[13px] font-bold tracking-wide">Mobile-first</span>
            <span className="bg-[#F0F7F1] text-[#488746] px-4 py-1.5 rounded-full text-[13px] font-bold tracking-wide">Simple</span>
            <span className="bg-[#F0F7F1] text-[#488746] px-4 py-1.5 rounded-full text-[13px] font-bold tracking-wide">Friendly Green</span>
          </div>

      
          <div className="bg-white p-6 sm:p-8 rounded-[2rem] shadow-[0_12px_40px_rgb(0,0,0,0.06)] border border-gray-100 w-full max-w-[620px]">
            
            <div className="flex flex-col sm:flex-row border border-gray-300 rounded-[14px] mb-8 focus-within:ring-2 focus-within:ring-[#65A657] transition-all overflow-hidden bg-white">
              <div className="flex-grow flex items-center pl-4 bg-white">
                 <svg className="w-6 h-6 text-[#A16D41] opacity-80 mr-3 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                   <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4" />
                 </svg>
                <input 
                  type="text" 
                  placeholder="Masukkan nomor resi" 
                  className="w-full bg-transparent border-none outline-none focus:outline-none focus:ring-0 text-[15px] text-gray-800 placeholder:text-gray-400 font-medium py-4 shadow-none"
                />
              </div>
              <button className="bg-[#65A657] hover:bg-[#58964b] transition-colors text-white px-7 py-4 font-bold text-[15px] flex justify-center items-center gap-2 whitespace-nowrap shadow-sm w-full sm:w-auto">
                Lacak Paket
                <svg className="w-5 h-5 text-white stroke-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                </svg>
              </button>
            </div>

            <div className="flex items-center justify-between mb-4 px-1">
              <h3 className="font-bold text-[#1E293B] text-[15px] tracking-tight">Resi Terakhir</h3>
              <button className="text-[#65A657] font-bold text-[13px] hover:underline">Lihat Semua</button>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="border border-gray-100 p-4 rounded-[1.25rem] flex items-center justify-between cursor-pointer hover:border-[#65A657] transition-all group hover:shadow-md hover:shadow-[#F0F7F1]">
                <div className="flex items-center gap-3.5">
                  <div className="w-10 h-10 bg-[#FAF7ED] rounded-xl flex items-center justify-center text-[#A16D41] opacity-90">
                    <svg className="w-5 h-5 drop-shadow-sm" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4" />
                    </svg>
                  </div>
                  <div>
                    <p className="font-bold text-[#1E293B] text-[14px] tracking-tight mb-0.5">JNT123XXX</p>
                    <p className="text-[12px] text-gray-500 font-medium">Sedang Dikirim</p>
                  </div>
                </div>
                <svg className="w-4 h-4 text-gray-400 group-hover:text-[#65A657] transition-colors stroke-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                </svg>
              </div>
              
              <div className="border border-gray-100 p-4 rounded-[1.25rem] flex items-center justify-between cursor-pointer hover:border-[#65A657] transition-all group hover:shadow-md hover:shadow-[#F0F7F1]">
                <div className="flex items-center gap-3.5">
                  <div className="w-10 h-10 bg-[#FAF7ED] rounded-xl flex items-center justify-center text-[#A16D41] opacity-90">
                    <svg className="w-5 h-5 drop-shadow-sm" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4" />
                    </svg>
                  </div>
                  <div>
                    <p className="font-bold text-[#1E293B] text-[14px] tracking-tight mb-0.5">JNE4S6XXX</p>
                    <p className="text-[12px] text-gray-500 font-medium">Tiba di Kota Tujuan</p>
                  </div>
                </div>
                <svg className="w-4 h-4 text-gray-400 group-hover:text-[#65A657] transition-colors stroke-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                </svg>
              </div>
            </div>
          </div>
        </div>

        <div className="w-full lg:w-[45%] relative mt-32 lg:mt-0 flex flex-col justify-end select-none">
          <div className="absolute bottom-[20px] lg:bottom-[-20px] right-[-10px] lg:right-[-140px] w-[125%] lg:w-[165%] max-w-[1100px] z-0 pointer-events-none">
             <Image 
                src="/asset/gambar_mobil.png" 
                alt="Delivery Truck Illustration"
                width={1200}
                height={900}
                className="object-contain object-bottom w-full h-auto"
                priority
             />
          </div>
        </div>
      </main>

      <div className="mt-auto px-6 lg:px-16 pb-8 mx-auto w-full max-w-[1440px]">
        <div className="bg-[#F0F7F1] rounded-[2rem] p-8 lg:p-10 w-full shadow-inner">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-6">
            
            <div className="flex gap-4">
              <div className="mt-1 flex-shrink-0">
                 <div className="text-[#65A657]">
                   <svg className="w-[26px] h-[26px]" fill="none" stroke="currentColor" strokeWidth={2.5} viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.242-4.243a8 8 0 1111.314 0z" /><path strokeLinecap="round" strokeLinejoin="round" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" /></svg>
                 </div>
              </div>
              <div>
                 <h4 className="font-extrabold text-[#111827] text-[15px] mb-1.5 tracking-tight">Tracking Cepat</h4>
                 <p className="text-[12px] text-gray-500 leading-relaxed font-bold">Cek status paketmu sekali klik.</p>
              </div>
            </div>

            <div className="flex gap-4">
              <div className="mt-1 flex-shrink-0">
                 <div className="text-[#65A657]">
                   <svg className="w-[26px] h-[26px]" fill="none" stroke="currentColor" strokeWidth={2.5} viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" /></svg>
                 </div>
              </div>
              <div>
                 <h4 className="font-extrabold text-[#111827] text-[15px] mb-1.5 tracking-tight">Bahasa Ramah</h4>
                 <p className="text-[12px] text-gray-500 leading-relaxed font-bold">Pesan jelas dan mudah dipahami.</p>
              </div>
            </div>

            <div className="flex gap-4">
              <div className="mt-1 flex-shrink-0">
                 <div className="text-[#65A657]">
                   <svg className="w-[26px] h-[26px]" fill="none" stroke="currentColor" strokeWidth={2.5} viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.95 11.95 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" /></svg>
                 </div>
              </div>
              <div>
                 <h4 className="font-extrabold text-[#111827] text-[15px] mb-1.5 tracking-tight">Aman & Terpercaya</h4>
                 <p className="text-[12px] text-gray-500 leading-relaxed font-bold">Data paket Anda selalu kami jaga.</p>
              </div>
            </div>

            <div className="flex gap-4">
              <div className="mt-1 flex-shrink-0">
                 <div className="text-[#65A657]">
                   <svg className="w-[26px] h-[26px]" fill="none" stroke="currentColor" strokeWidth={2.5} viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
                 </div>
              </div>
              <div>
                 <h4 className="font-extrabold text-[#111827] text-[15px] mb-1.5 tracking-tight">Tepat Waktu</h4>
                 <p className="text-[12px] text-gray-500 leading-relaxed font-bold">Informasi ter-update secara real-time.</p>
              </div>
            </div>
            
          </div>
        </div>
      </div>
    </div>
  );
}