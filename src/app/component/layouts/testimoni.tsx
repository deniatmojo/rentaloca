import React from "react";

const Testimoni = () => {
  return (
    <div className="container flex flex-col justify-center items-center mt-20 w-[1280px] h-[345px] mx-auto">
      {/* Judul */}
      <h1 className="text-macaronidark font-beautiqueMed text-6xl text-center mb-8">
        Style with Rentaloca
      </h1>

      {/* Kontainer Testimoni */}
      <div className="grid grid-cols-2 md:flex md:flex-row justify-center items-center gap-2 px-0 mt-8">
        {/* Kartu Testimoni */}
        <div className="relative w-[300px] h-[219px] flex flex-col items-center border-2 bg-macaronilight3 rounded-3xl px-[32px] pt-[56px] pb-[24px] gap-[1px]">
          {/* Lingkaran Profil */}
          <div
            className="absolute -top-10 left-8 w-[80px] h-[80px] bg-macaronidark rounded-full bg-cover bg-center"
            style={{ backgroundImage: "url('/img/sarah_math.PNG')" }}
          ></div>

          {/* Konten Testimoni */}
          <p className="text-left text-xs text-macaronidark pb-2 border-b-2 border-macaronidark -mt-2">
            Pengalaman saya menyewa di Rentaloca koleksi bajunya lengkap,
            modelnya trendy, dan kualitasnya sangat terjaga. Proses pemesanannya
            juga mudah dan pengiriman cepat. Sangat membantu untuk acara spesial
            saya! Terima kasih, Rentaloca!
          </p>

          {/* Nama dan Perusahaan, rata kanan */}
          <h1 className="mt-1 text-left w-full">Sarah Math</h1>
          <h1 className="mb-3 -mt-[6px] text-left w-full">
            Graduation Testimoni
          </h1>
        </div>
        <div className="relative w-[305px] h-[219px] flex flex-col items-center border-2 bg-macaronilight3 rounded-3xl px-[32px] pt-[56px] pb-[24px] gap-[1px]">
          {/* Lingkaran Profil */}
          <div
            className="absolute -top-10 left-8 w-[80px] h-[80px] bg-macaronidark rounded-full bg-cover bg-center"
            style={{ backgroundImage: "url('/img/refana.PNG')" }}
          ></div>
          {/* Konten Testimoni */}
          <p className="text-left text-xs text-macaronidark pb-[22px] border-b-2 border-macaronidark -mt-2">
            Saya sewa dress di sini, modelnya cantik dan elegan banget. Bahannya
            nyaman dipakai, dan ukurannya pas, plus baju datang dalam kondisi
            bersih dan wangi. Acara jadi lebih percaya diri berkat Rentaloca!
          </p>

          {/* Nama dan Perusahaan, rata kanan */}
          <h1 className="mt-1 text-left w-full">Refanda Sutargo</h1>
          <h1 className="mb-3 -mt-[6px] text-left w-full">
            Kondangan Testimoni
          </h1>
        </div>
        <div className="relative w-[305px] h-[219px] flex flex-col items-center border-2 bg-macaronilight3 rounded-3xl px-[32px] pt-[56px] pb-[24px] gap-[1px]">
          {/* Lingkaran Profil */}
          <div
            className="absolute -top-10 left-8 w-[80px] h-[80px] bg-macaronidark rounded-full bg-cover bg-center"
            style={{ backgroundImage: "url('/img/hannan.png')" }}
          ></div>

          {/* Konten Testimoni */}
          <p className="text-left text-xs text-macaronidark pb-[37px] border-b-2 border-macaronidark -mt-2">
            Koleksi gaunnya elegan dan kekinian, cocok banget untuk acara
            formal. Baju yang saya sewa fit di badan, bersih, dan nyaman dipakai
            seharian. Prosesnya juga mudah, tinggal pesan dan langsung dikirim.
          </p>

          {/* Nama dan Perusahaan, rata kanan */}
          <h1 className="mt-1 text-left w-full">Hannan Cinthya</h1>
          <h1 className="mb-3 -mt-[6px] text-left w-full">
            Kondangan Testimoni
          </h1>
        </div>
        <div className="relative w-[305px] h-[219px] flex flex-col items-center border-2 bg-macaronilight3 rounded-3xl px-[32px] pt-[56px] pb-[24px] gap-[1px]">
          {/* Lingkaran Profil */}
          <div
            className="absolute -top-10 left-8 w-[80px] h-[80px] bg-macaronidark rounded-full bg-cover bg-center"
            style={{ backgroundImage: "url('/img/kyara.PNG')" }}
          ></div>

          {/* Konten Testimoni */}
          <p className="text-left text-xs text-macaronidark pb-[36px] border-b-2 border-macaronidark -mt-2">
            Pilihan bajunya cantik-cantik dan sesuai dengan deskripsi di
            website. Prosesnya simpel, mulai dari pemesanan sampai pengembalian.
            Baju yang saya sewa juga bersih dan wangi, benar-benar seperti baru.
          </p>

          {/* Nama dan Perusahaan, rata kanan */}
          <h1 className="mt-1 text-left w-full">Kyana Octora</h1>
          <h1 className="mb-3 -mt-[6px] text-left w-full">
            Occasional Testimoni
          </h1>
        </div>
      </div>
    </div>
  );
};

export default Testimoni;
