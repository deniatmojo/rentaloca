import React from "react";

const Testimoni = () => {
  return (
    <div className="container flex flex-col justify-center items-center md:mt-[128px] mt-[64px] w-full h-full mx-auto">
      {/* Judul */}
      <h1 className="text-macaronidark w-[160px] md:w-full font-beautiqueMed text-4xl md:text-6xl text-center mb-8">
        Style with Rentaloca
      </h1>

      {/* Kontainer Testimoni */}
      <div className="flex flex-wrap md:flex-nowrap justify-center items-center gap-2 px-0 mt-[32px] md:mt-[48px]">
        {/* Kartu Testimoni */}
        <div className="relative md:w-[305px] md:h-[219px] w-[165px] h-[220px] flex flex-col items-center border-2 bg-macaronilight4 md:rounded-3xl rounded-xl md:px-[20px] md:pt-[56px] px-[8px] pt-[35px] pb-[24px] gap-[1px]">
          {/* Lingkaran Profil */}
          <div
            className="absolute md:-top-10 md:left-8 -top-9 left-4 md:w-[80px] md:h-[80px] w-[60px] h-[60px] bg-macaronidark rounded-full bg-cover bg-center"
            style={{ backgroundImage: "url('/img/sarah_math.PNG')" }}
          ></div>

          {/* Konten Testimoni */}
          <p className="text-left md:text-[12px] text-[10px] text-macaronidark md:pb-2 -mt-2">
            Pengalaman saya menyewa di Rentaloca koleksi bajunya lengkap,
            modelnya trendy, dan kualitasnya sangat terjaga. Proses pemesanannya
            juga mudah dan pengiriman cepat. Sangat membantu untuk acara spesial
            saya! Terima kasih, Rentaloca!
          </p>

          {/* Nama dan Perusahaan, rata kanan */}
          <div className="absolute bottom-1.5 md:bottom-1 left-2 md:left-5 border-t-2 w-[140px] md:w-[255px] border-macaronidark">
            <h1 className="mt-1 text-left md:text-[14px] w-full md:text-md md:font-bold text-[12px] text-macaronidark">
              Sarah Math
            </h1>
            <h1 className="text-left md:text-[14px] w-full md:text-md text-[12px] text-macaronidark">
              Graduation Testimoni
            </h1>
          </div>
        </div>
        <div className="relative md:w-[305px] md:h-[219px] w-[165px] h-[220px] flex flex-col items-center border-2 bg-macaronilight4 md:rounded-3xl rounded-xl md:px-[20px] md:pt-[56px] px-[8px] pt-[35px] pb-[24px] gap-[1px]">
          {/* Lingkaran Profil */}
          <div
            className="absolute md:-top-10 md:left-8 -top-9 left-4 md:h-[80px] md:w-[80px] w-[60px] h-[60px] bg-macaronidark rounded-full bg-cover bg-center"
            style={{ backgroundImage: "url('/img/refana.PNG')" }}
          ></div>
          {/* Konten Testimoni */}
          <p className="text-left md:text-[12px] text-[10px] text-macaronidark md:pb-[22px] -mt-2">
            Saya sewa dress di sini, modelnya cantik dan elegan banget. Bahannya
            nyaman dipakai, dan ukurannya pas, plus baju datang dalam kondisi
            bersih dan wangi. Acara jadi lebih percaya diri berkat Rentaloca!
          </p>

          {/* Nama dan Perusahaan, rata kanan */}
          <div className="absolute bottom-1.5 md:bottom-1 left-2 border-t-2 md:left-5 w-[140px] md:w-[255px] border-macaronidark">
            <h1 className="mt-1 text-left w-full md:text-[14px] md:font-bold text-[12px] text-macaronidark">
              Refanda Sutargo
            </h1>
            <h1 className="text-left w-full md:text-[14px] text-[12px] text-macaronidark">
              Kondangan Testimoni
            </h1>
          </div>
        </div>
        <div className="relative md:w-[305px] md:h-[219px] w-[165px] h-[220px] md:mt-0 mt-8 flex flex-col items-center border-2 bg-macaronilight4 md:rounded-3xl rounded-xl md:px-[20px] md:pt-[56px] px-[8px] pt-[35px] pb-[24px] gap-[1px]">
          {/* Lingkaran Profil */}
          <div
            className="absolute md:-top-10 md:left-8 -top-9 left-4 md:h-[80px] md:w-[80px] w-[60px] h-[60px] bg-macaronidark rounded-full bg-cover bg-center"
            style={{ backgroundImage: "url('/img/hannan.png')" }}
          ></div>
          {/* Konten Testimoni */}
          <p className="text-left md:text-[12px] text-[10px] text-macaronidark md:pb-[22px] -mt-2">
            Koleksi gaunnya elegan dan kekinian, cocok banget untuk acara
            formal. Baju yang saya sewa fit di badan, bersih, dan nyaman dipakai
            seharian. Prosesnya juga mudah, tinggal pesan dan langsung dikirim.
          </p>

          {/* Nama dan Perusahaan, rata kanan */}
          <div className="absolute bottom-1.5 md:bottom-1 left-2 border-t-2 md:left-5 w-[140px] md:w-[255px] border-macaronidark">
            <h1 className="mt-1 text-left w-full md:text-[14px] md:font-bold text-[12px] text-macaronidark">
              Hannan Cinthya
            </h1>
            <h1 className="text-left w-full md:text-[14px] text-[12px] text-macaronidark">
              Kondangan Testimoni
            </h1>
          </div>
        </div>
        <div className="relative md:w-[305px] md:h-[219px] w-[165px] h-[220px] md:mt-0 mt-8 flex flex-col items-center border-2 bg-macaronilight4 md:rounded-3xl rounded-xl md:px-[20px] md:pt-[56px] px-[8px] pt-[35px] pb-[24px] gap-[1px]">
          {/* Lingkaran Profil */}
          <div
            className="absolute md:-top-10 md:left-8 -top-9 left-4 md:h-[80px] md:w-[80px] w-[60px] h-[60px] bg-macaronidark rounded-full bg-cover bg-center"
            style={{ backgroundImage: "url('/img/kyara.PNG')" }}
          ></div>
          {/* Konten Testimoni */}
          <p className="text-left md:text-[12px] text-[10px] text-macaronidark md:pb-[22px] -mt-2">
            Pilihan bajunya cantik-cantik dan sesuai dengan deskripsi di
            website. Prosesnya simpel, mulai dari pemesanan sampai pengembalian.
            Baju yang saya sewa juga bersih dan wangi, benar-benar seperti baru.
          </p>

          {/* Nama dan Perusahaan, rata kanan */}
          <div className="absolute bottom-1.5 md:bottom-1 left-2 border-t-2 md:left-5 w-[140px] md:w-[255px] border-macaronidark">
            <h1 className="mt-1 text-left w-full md:text-[14px] md:font-bold text-[12px] text-macaronidark">
              Kyara Octora
            </h1>
            <h1 className="text-left w-full md:text-[14px] text-[12px] text-macaronidark">
              Occasional Testimoni
            </h1>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Testimoni;
