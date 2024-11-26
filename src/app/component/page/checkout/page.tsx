import React from "react";

const checkout = () => {
  return (
    <div className="flex flex-row relative w-[1280px] h-[1880px] justify-between mt-20 mx-auto mb-5">
      <div className="flex flex-col w-[758px] h-full border-[1.5px] border-macaronidark rounded-xl p-5 justify-right gap-[16px]">
        <h1 className="text-macaronidark font-beautiqueMed text-2xl mt-2">
          Contact Information
        </h1>
        <div className="space-y-2 mt-4">
          <label
            htmlFor="fullName"
            className="block text-xl font-Inter font-medium text-macaronidark"
          >
            Full Name
          </label>
          <input
            type="text"
            id="fullName"
            placeholder="Enter your full name"
            className="w-full h-[64px] border border-gray-300 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
          />
        </div>
        <div className="space-y-2">
          <label
            htmlFor="fullName"
            className="block text-xl font-Inter font-medium text-macaronidark"
          >
            Nomor KTP
          </label>
          <input
            type="text"
            id="fullName"
            placeholder="Enter your number ofidentity card"
            className="w-full h-[64px] border border-gray-300 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
          />
        </div>
        <div className="space-y-2">
          <label
            htmlFor="fullName"
            className="block text-xl font-Inter font-medium text-macaronidark"
          >
            Email
          </label>
          <input
            type="text"
            id="fullName"
            placeholder="Enter your full Email"
            className="w-full h-[64px] border border-gray-300 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
          />
        </div>
        <div className="space-y-2">
          <label
            htmlFor="fullName"
            className="block text-xl font-Inter font-medium text-macaronidark"
          >
            Phone
          </label>
          <input
            type="text"
            id="fullName"
            placeholder="Enter your phone"
            className="w-full h-[64px] border border-gray-300 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
          />
        </div>
      </div>
      <div className="flex flex-col w-[490px] h-full border-macaronidark rounded-xl justify-right gap-[24px]">
        <div className="flex flex-col w-full h-[253px] border-[1.5px] border-macaronidark rounded-xl p-5 justify-right">
          <h1 className="text-macaronidark font-beautiqueMed text-2xl mt-2">
            Deposit Statement
          </h1>
          <p className="mt-7">
            Biaya deposit sebesar IDR 120.000 dikenakan sebagai jaminan untuk
            memastikan barang kembali dalam kondisi baik ya, dear! 😊🤍
          </p>
          <p className="mt-2">
            Jangan khawatir, deposit ini akan kami kembalikan sepenuhnya setelah
            barang dikembalikan tanpa masalah.
          </p>
        </div>
        <div className="flex flex-col w-full h-[653px] border-[1.5px] border-macaronidark rounded-xl p-5 justify-right">
          <h1 className="text-macaronidark font-beautiqueMed text-2xl mt-2">
            Term and Conditions
          </h1>
          <div className="space-y-2 font-Inter text-sm mt-3">
            {/* Bagian 1: Pembayaran */}
            <div>
              <h2 className="text-lg font-semibold mb-2">1. Pembayaran</h2>
              <ul className="list-disc list-inside space-y-2">
                <li>
                  Ketentuan untuk yang menyewa,{" "}
                  <span className="font-bold">WAJIB</span> membayar (Biaya Sewa
                  + Deposit + Ongkir PP).
                </li>
                <li>Pembayaran dilakukan melalui via Transfer Bank.</li>
                <li>
                  Menggunakan sistem{" "}
                  <span className="font-bold">FIRST PAY FIRST GET</span>, akan
                  mengutamakan yang melakukan pembayaran DP/Booking yang lebih
                  dahulu.
                </li>
              </ul>
            </div>

            {/* Bagian 2: Pengiriman */}
            <div>
              <h2 className="text-lg font-semibold mb-2 mt-3">2. Pengiriman</h2>
              <ul className="list-disc list-inside space-y-2">
                <li>
                  Pengiriman akan dikirimkan melalui jasa pengiriman kurir
                  pilihan instan, sameday, atau Paxel untuk wilayah JABODETABEK
                  dan untuk pengiriman ekspedisi 1 hari (YES) untuk diluar
                  JABODETABEK.
                </li>
                <li>
                  Biaya pengiriman PP (Pulang-Pergi) ditanggungkan kepada
                  penyewa.
                </li>
                <li>
                  Keterlambatan pengiriman oleh pihak kurir bukan tanggung jawab
                  kami.
                </li>
                <li>
                  Produk yang disewa akan dikirimkan dalam keadaan sudah di
                  laundry.
                </li>
              </ul>
            </div>

            {/* Bagian 3: Pengembalian */}
            <div>
              <h2 className="text-lg font-semibold mb-2 mt-3">
                3. Pengembalian
              </h2>
              <ul className="list-disc list-inside space-y-2">
                <li>
                  Pengembalian barang dilakukan hari terakhir masa sewa.
                  Pengembalian akan diatur pickup oleh admin menggunakan pilihan
                  kurir yang sama saat pengiriman.
                </li>
                <li>
                  Keterlambatan pengembalian barang melebihi waktu sewa yang
                  ditentukan akan dikenakan biaya extra days.
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="flex flex-col w-full h-[469px] border-[1.5px] border-macaronidark rounded-xl p-5 justify-right">
          <h1 className="text-macaronidark font-beautiqueMed text-2xl mt-2">
            Order Summary
          </h1>
        </div>
      </div>
    </div>
  );
};

export default checkout;
