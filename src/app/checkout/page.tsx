// @ts-nocheck
"use client"
import { useEffect, useState } from "react";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { sendData } from "@/server/send-data";
import { useCart } from "@/context/CartContext";

export default function Checkout() {

  const { state, dispatch } = useCart();
  const router = useRouter();
  const [isRedirecting, setIsRedirecting] = useState(false);

  const subtotal = state.items.reduce(
    (total, item) => total + item.rental * item.quantity, 0
  );

  const [shippingMethod, setShippingMethod] = useState('paxel')

  // const shipping = shippingMethod === 'instant' ? 30000 : (shippingMethod === 'sameday' ? 20000 : (shippingMethod === 'paxel' ? 15000 : 10000));
  const shipping = 30000;
  const deposit = 120000;
  const total = subtotal + shipping + deposit;

  const [full_name, setFullName] = useState('');
  const [nomor_ktp, setNomorKtp] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [bank_deposit, setBankDeposit] = useState('');
  const [address, setAddress] = useState('');
  const [city, setCity] = useState('');
  const [postal_code, setPostalCode] = useState('');
  const [provinces, setProvinces] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);

  const calculateDaysDifference = (startDate: any, endDate: any) => {
    if (!startDate || !endDate) return 0;

    const start = new Date(startDate);
    const end = new Date(endDate);

    const differenceInTime = end.getTime() - start.getTime();
    const differenceInDays = differenceInTime / (1000 * 3600 * 24);

    return Math.ceil(differenceInDays);
  };

  const formatDateRange = (startDate: any, endDate: any) => {
    const options = { day: '2-digit', month: 'short', year: 'numeric' };
    const start = new Date(startDate).toLocaleDateString('en-GB', options);
    const end = new Date(endDate).toLocaleDateString('en-GB', options);

    return `${start} - ${end}`;
  };


  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);

    const formData = {
      id: state.id_session,
      full_name: full_name,
      nomor_ktp: nomor_ktp,
      email: email,
      phone: phone,
      bank_deposit: bank_deposit,
      address: address,
      city: city,
      postal_code: postal_code,
      provinces: provinces,
      shipping_method: shippingMethod,
      shipping_bill: shipping,
      subtotal: subtotal,
      deposit: deposit,
      total: total,
      product: state.items
    }

    try {
      await sendData(formData);
    } catch (error) {
      console.log('Error sending data:', error);
    } finally {
      // const waLink = `https://wa.me/${process.env.NEXT_PUBLIC_WA}?text=saya%20sudah%20menyelesaikan%20transaksi%20dengan%20id:%20${state.id_session}`;
      // const waLink = `https://api.whatsapp.com/send?phone=+6282130085657&text=Nama%20%3A%20Putra%0AAlamat%20%3A%20Jl.%20Merdeka%20123%0ARental%20Durasi%20%3A%204%20hari%0APengiriman%20%3A%20Kurir%20Rentaloca%0APesanan%20Sewa%3A%0A1.%20Gaun%20Elegan%20%28Ukuran%20M%29%20-%20Jumlah%3A%201%20%28Link%20gambar%3A%20https%3A%2F%2Fdown-id.img.susercontent.com%2Ffile%2Ffcfd2b95555d8e1fdd2fa1eeb449be28%29%0A2.%20Kebaya%20Tradisional%20Indonesia%20%28Ukuran%20S%29%20-%20Jumlah%3A%201%20%28Link%20gambar%3A%20https%3A%2F%2Fdynamic.zacdn.com%2FoHXjANofhn4hVnTw8mDkpN6O5PE%3D%2Ffilters%3Aquality%2870%29%3Aformat%28webp%29%2Fhttps%3A%2F%2Fstatic-id.zacdn.com%2Fp%2Fbutik-sireh-pinang-3932-7710893-1.jpg%29`;

      const baseUrl = typeof window !== "undefined" ? window.location.origin : "";

      const ordersText = state.items
        .map(
          (order, index) =>
            // `${index + 1}. ${order.name} (Ukuran ${order.size}) - Jumlah: ${order.quantity} (Link gambar:  ${baseUrl}${order.image})`
            `${index + 1}. ${order.name} (Ukuran ${order.size}) - Jumlah: ${order.quantity}`
        ).join("%0A");

      const message = `Nama%20%3A%20${encodeURIComponent(full_name)}%0AAlamat%20%3A%20${encodeURIComponent(
        address
      )}%0ARental%20Durasi%20%3A%20${encodeURIComponent(
        `${calculateDaysDifference(state.startDate, state.endDate)} Hari (${formatDateRange(state.startDate, state.endDate)})`
      )}%0APengiriman%20%3A%20${encodeURIComponent(
        shippingMethod
      )}%0APesanan%20Sewa%3A%0A${ordersText}`;

      const phoneNumber = process.env.NEXT_PUBLIC_WA;
      const waLink = `https://api.whatsapp.com/send?phone=${encodeURIComponent(
        phoneNumber
      )}&text=${message}`;

      window.open(waLink, "_blank");
      setIsSubmitting(false);
    }
  };

  const [options, setOptions] = useState([]);

  useEffect(() => {
    const fetchProvinces = async () => {
      try {
        const response = await fetch('/data/provinsi.json');
        const data = await response.json();
        setOptions(data);
      } catch (error) {
        console.error("Gagal mengambil data provinsi:", error);
      }
    };

    fetchProvinces();
  }, [])

  const [isStateLoaded, setIsStateLoaded] = useState(false);

  useEffect(() => {
    const savedCart = localStorage.getItem("cartState");
    if (savedCart) {
      const parsedCart = JSON.parse(savedCart);
      dispatch({ type: "RESET_STATE", payload: parsedCart });
    }
    setIsStateLoaded(true);
  }, [dispatch]);

  useEffect(() => {
    if (isStateLoaded && state.items.length === 0) {
      setIsRedirecting(true);
      setTimeout(() => {
        router.push("/catalogue");
      }, 2000);
    }
  }, [state.items, isStateLoaded, router]);

  if (isRedirecting) {
    return <div className="text-macaronidark flex justify-center mt-10">Cart is empty. Redirecting to catalogue...</div>;
  }

  return (
    <div className="bg-gradient-to-r bg-[#FEFAF3] via-[#FBF0DA] to-[#FEFAF3]">
      <div className="container py-20 mx-auto grid grid-cols-1 lg:grid-cols-[60%_auto] gap-x-10 gap-y-[32px]">
        <div>
          <form onSubmit={handleSubmit}>
            <div className="flex flex-col rounded-xl p-5 justify-right border-2 border-[#B19663] mx-5">
              <h1 className="text-macaronidark font-beautiqueMed text-[24px] lg:text-[32px] mt-2">Contact Information</h1>
              <div className="space-y-2 mt-4">
                <label htmlFor="fullName" className="block text-sm lg:text-xl font-Inter font-medium text-macaronidark">
                  Full Name
                </label>
                <input
                  type="text"
                  required
                  id="fullName"
                  placeholder="Enter your full name"
                  className="w-full text-macaronidark border border-[#9A9A9A] placeholder:text-[#9A9A9A] rounded-md px-5 py-[10px] bg-transparent outline-none text-[14px] lg:text-[20px]"
                  value={full_name}
                  onChange={(e) => setFullName(e.target.value)}
                />
              </div>
              <div className="space-y-2 mt-4">
                <label htmlFor="ktp" className="block text-sm lg:text-xl font-Inter font-medium text-macaronidark">
                  Nomor KTP
                </label>
                <input
                  type="number"
                  required
                  id="ktp"
                  placeholder="Enter your number of identity card"
                  className="w-full text-macaronidark border border-[#9A9A9A] placeholder:text-[#9A9A9A] rounded-md px-5 py-[10px] bg-transparent outline-none text-[14px] lg:text-[20px]"
                  value={nomor_ktp}
                  onChange={(e) => setNomorKtp(e.target.value)}
                />
              </div>
              <div className="space-y-2 mt-4">
                <label htmlFor="email" className="block text-sm lg:text-xl font-Inter font-medium text-macaronidark">
                  Email
                </label>
                <input
                  type="email"
                  required
                  id="email"
                  placeholder="Enter your full Email"
                  className="w-full text-macaronidark border border-[#9A9A9A] placeholder:text-[#9A9A9A] rounded-md px-5 py-[10px] bg-transparent outline-none text-[14px] lg:text-[20px]"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
              </div>
              <div className="space-y-2 mt-4">
                <label htmlFor="phone" className="block text-sm lg:text-xl font-Inter font-medium text-macaronidark">
                  Phone
                </label>
                <input
                  type="number"
                  required
                  id="phone"
                  placeholder="Enter your phone"
                  className="w-full text-macaronidark border border-[#9A9A9A] placeholder:text-[#9A9A9A] rounded-md px-5 py-[10px] bg-transparent outline-none text-[14px] lg:text-[20px]"
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                />
              </div>
              <h1 className="text-macaronidark font-beautiqueMed text-[24px] lg:text-[32px] mt-14">Payment</h1>
              <p className="text-[#9A9A9A]">All transactions are secure and encrypted.</p>
              <div className="space-y-2 mt-4">
                <label htmlFor="bank" className="block text-sm lg:text-xl font-Inter font-medium text-macaronidark">
                  Bank Deposit
                </label>
                <div className="bg-gray-100 p-5 rounded-md border border-gray-300 text-gray-500">
                  <p>BANK BJB</p>
                  <p>a.n PT Rentaloca Teknologi Indonesia</p>
                  <p>0144811372001</p>
                </div>
              </div>
              <h1 className="text-macaronidark font-beautiqueMed text-[24px] lg:text-[32px] mt-14">Delivery Address</h1>
              <div className="space-y-2 mt-4">
                <label htmlFor="address" className="block text-sm lg:text-xl font-Inter font-medium text-macaronidark">
                  Address
                </label>
                <input
                  type="text"
                  required
                  id="address"
                  placeholder="Enter Address"
                  className="w-full text-macaronidark border border-[#9A9A9A] placeholder:text-[#9A9A9A] rounded-md px-5 py-[10px] bg-transparent outline-none text-[14px] lg:text-[20px]"
                  value={address}
                  onChange={(e) => setAddress(e.target.value)}
                />
              </div>
              <div className="flex justify-between gap-10 mt-4">
                <div className="space-y-2 w-full">
                  <label htmlFor="city" className="block text-sm lg:text-xl font-Inter font-medium text-macaronidark">
                    City
                  </label>
                  <input
                    type="text"
                    required
                    id="city"
                    placeholder="Enter City"
                    className="w-full text-macaronidark border border-[#9A9A9A] placeholder:text-[#9A9A9A] rounded-md px-5 py-[10px] bg-transparent outline-none text-[14px] lg:text-[20px]"
                    value={city}
                    onChange={(e) => setCity(e.target.value)}
                  />
                </div>
                <div className="space-y-2 w-full">
                  <label htmlFor="postal" className="block text-sm lg:text-xl font-Inter font-medium text-macaronidark">
                    Postal Code
                  </label>
                  <input
                    type="number"
                    required
                    id="postal"
                    placeholder="Enter Postal Code"
                    className="w-full text-macaronidark border border-[#9A9A9A] placeholder:text-[#9A9A9A] rounded-md px-5 py-[10px] bg-transparent outline-none text-[14px] lg:text-[20px]"
                    value={postal_code}
                    onChange={(e) => setPostalCode(e.target.value)}
                  />
                </div>
              </div>
              <div className="space-y-2 mt-4">
                <label htmlFor="provinces" className="block text-sm lg:text-xl font-Inter font-medium text-macaronidark">
                  Provinces
                </label>
                <select
                  id="provinces"
                  required
                  value={provinces}
                  onChange={(e) => setProvinces(e.target.value)}
                  className="w-full text-macaronidark border border-[#9A9A9A] rounded-md px-5 py-[10px] bg-transparent outline-none text-[14px] lg:text-[20px]"
                >
                  <option value="" disabled>
                    Enter Provinces
                  </option>
                  {options.map((province) => (
                    <option key={province.id} value={province.id}>
                      {province.nama}
                    </option>
                  ))}
                </select>
              </div>
              { provinces !== "31" && provinces !== "32" ? (
                <div className="mt-10 text-red-600">
                  <div className="font-bold">Shipping Unavailable </div>
                  <div>We&rsquo;re sorry, but shipping is not available for your location at the moment.</div>
                </div>
              ) : (
                <>
                  <h1 className="text-macaronidark font-beautiqueMed text-[24px] lg:text-[32px] mt-14">Shipping Method</h1>
                  <div className="flex flex-col lg:flex-row justify-between gap-5 text-macaronidark mt-5">
                    <div onClick={() => setShippingMethod('paxel')} className={`${shippingMethod === 'paxel' ? 'bg-macaronilight3' : ''} rounded-md border border-[#9A9A9A] w-full p-4 hover:bg-macaronilight3 cursor-pointer`}>
                      <div className="font-bold text-md lg:text-xl">Paxel</div>
                      <div className="text-sm">(Instant Jabodetabek Only)</div>
                    </div>
                    <div onClick={() => setShippingMethod('instant')} className={`${shippingMethod === 'instant' ? 'bg-macaronilight3' : ''} rounded-md border border-[#9A9A9A] w-full p-4 hover:bg-macaronilight3 cursor-pointer`}>
                      <div className="font-bold text-md lg:text-xl">Gojek / Grab</div>
                      <div className="text-sm">(Jakarta Only)</div>
                    </div>
                  </div>
                </>
              )}
              <div className="mt-10">
                <button type="submit" disabled={isSubmitting || (provinces !== "31" && provinces !== "32")} className="disabled:cursor-not-allowed disabled:opacity-50 bg-macaronidark text-white w-full rounded-lg py-5">{isSubmitting ? 'Sending...' : 'Complete Order'}</button>
              </div>
            </div>
          </form>
        </div>
        <div className="flex flex-col rounded-xl justify-right gap-[24px] text-macaronidark mx-5">
          <div className="flex flex-col w-full border-2 border-[#B19663] rounded-xl p-5 justify-right">
            <h1 className="text-macaronidark font-beautiqueMed text-[24px] lg:text-[32px]">
              Deposit Statement
            </h1>
            <p className="mt-7">
              Biaya deposit sebesar IDR 120.000 dikenakan sebagai jaminan untuk memastikan barang kembali dalam kondisi baik ya, Dear! 😊🤍
            </p>
            <p className="mt-2">
              Jangan khawatir, deposit ini akan kami kembalikan sepenuhnya setelah
              barang dikembalikan tanpa masalah.
            </p>
          </div>
          <div className="flex flex-col w-full border-2 border-[#B19663] rounded-xl p-5 justify-right">
            <h1 className="text-macaronidark font-beautiqueMed text-[24px] lg:text-[32px] mt-2">Term and Conditions</h1>
            <div className="space-y-2 font-Inter text-sm mt-3">
              <div>
                <h2 className="text-lg font-semibold mb-2">1. Pembayaran</h2>
                <ul className="list-disc list-outside space-y-2 pl-5">
                  <li>Ketentuan untuk yang menyewa, <span className="font-bold">WAJIB</span> membayar (Biaya Sewa + Deposit + Ongkir PP).</li>
                  <li>Pembayaran dilakukan melalui via Transfer Bank.</li>
                  <li>Menggunakan sistem <span className="font-bold">FIRST PAY FIRST GET</span>, akan mengutamakan yang melakukan pembayaran DP/Booking yang lebih dahulu.</li>
                </ul>
              </div>
              <div>
                <h2 className="text-lg font-semibold mb-2 mt-3">2. Pengiriman</h2>
                <ul className="list-disc list-outside space-y-2 pl-5">
                  <li> Pengiriman akan dikirimkan melalui jasa pengiriman kurir pilihan instan, sameday, atau Paxel untuk wilayah JABODETABEK dan untuk pengiriman ekspedisi 1 hari (YES) untuk diluar JABODETABEK. </li>
                  <li> Biaya pengiriman PP (Pulang-Pergi) ditanggungkan kepada penyewa. </li>
                  <li> Keterlambatan pengiriman oleh pihak kurir bukan tanggung jawab kami. </li>
                  <li> Produk yang disewa akan dikirimkan dalam keadaan sudah di laundry. </li>
                </ul>
              </div>
              <div>
                <h2 className="text-lg font-semibold mb-2 mt-3">
                  3. Pengembalian
                </h2>
                <ul className="list-disc list-outside space-y-2 pl-5">
                  <li> Pengembalian barang dilakukan hari terakhir masa sewa. Pengembalian akan diatur pickup oleh admin menggunakan pilihan kurir yang sama saat pengiriman. </li>
                  <li> Keterlambatan pengembalian barang melebihi waktu sewa yang ditentukan akan dikenakan biaya extra days. </li>
                </ul>
              </div>
            </div>
          </div>
          <div className="flex flex-col w-full border-2 border-[#B19663] rounded-xl p-5 justify-right">
            <h1 className="text-macaronidark font-beautiqueMed text-[24px] lg:text-[32px] mt-2">
              Order Summary
            </h1>

            {state.items.map((item) => (
              <div
                key={`${item.id}-${item.size}`}
                className="flex items-center mb-4 gap-5 mt-5"
              >
                <div className="shrink-0 w-[80px] h-[80px] lg:w-[100px] lg:h-[100px] rounded-lg">
                  <Image
                    src={item.image}
                    alt={item.name}
                    className="w-full h-full mr-4 object-cover rounded-lg"
                    width={100}
                    height={100}
                  />
                </div>
                <div className="flex justify-between self-start w-full">
                  <div>
                    <h2 className="text-[16px] lg:text-[24px] font-bold">
                      {item.name}
                    </h2>
                    <p className="text-lg text-[#9A9A9A]">Quantity: {item.quantity}</p>
                    <p className="text-lg text-[#9A9A9A]">Size: {item.size}</p>
                    <p className="text-lg text-[#9A9A9A]">
                      Rp {item.rental.toLocaleString()}
                    </p>
                  </div>
                </div>
              </div>
            ))}

            <div className="h-[1px] bg-[#9A9A9A]"></div>

            <div className="text-[#9A9A9A] space-y-1 font-[500] my-3">
              <div className="flex justify-between">
                <div>Subtotal</div>
                <div>Rp {subtotal.toLocaleString()}</div>
              </div>
              <div className="flex justify-between">
                <div>Shipping</div>
                <div>Rp {shipping.toLocaleString()}</div>
              </div>
              <div className="flex justify-between">
                <div>Deposit</div>
                <div>Rp {deposit.toLocaleString()}</div>
              </div>
            </div>

            <div className="h-[1px] bg-[#9A9A9A]"></div>

            <div className="text-macaronidark font-bold pt-5">
              <div className="flex justify-between">
                <div>Total</div>
                <div>Rp {total.toLocaleString()}</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
