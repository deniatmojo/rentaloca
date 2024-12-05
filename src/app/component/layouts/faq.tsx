"use client";
import React, { useState } from "react";
import ReactDOMServer from "react-dom/server";

type FAQItem = {
  question: string;
  answer: string;
};

const FAQ: React.FC = () => {
  // Data pertanyaan dan jawaban
  const faqData: FAQItem[] = [
    {
      question: "What is Rentaloca Indonesia?",
      answer:
        "Rentaloca Indonesia is a technology platform and a revolutionary business model for the fashion authority, with a mission to address all the problems about reducing textile waste through renting to make sure to fashion-sharing by local clothing brands in Indonesia.",
    },
    {
      question: "How To Rent?",
      answer: ReactDOMServer.renderToString(
        <>
          Check the catalog at www.rentaloca.id or consult the availability of
          your favorite dress on the desired date via WhatsApp Business of
          Rentaloca Indonesia admin WA (0856-6660-999).
          <br />
          <span className="font-bold mt-1">FIRST PAY FIRST GET,</span> The
          fastest payment will be processed directly by the admin.
        </>
      ),
    },
    {
      question: "How long can I rent the Rentaloca Indonesia item?",
      answer:
        "The price listed is the price per 3 days. The price is non-negotiable.\n If the rental is more than 3 days, an additional fee will be charged according to the extra day price for the first day.\n The rental period days are counted from when the clothes are received by the renter until the clothes are received by us.\n If you want to change the rental date, you must notify the admin at least H-3 days before the delivery date.\n If you want to exchange/change the dress, it can be done at least 1 week before the delivery date.",
    },
    {
      question: "Do I need to pay a deposit?",
      answer:
        "Yes, you have to pay including a deposit, because it is a guarantee of the rental.\n Deposit fee starts from IDR 100,000 to IDR 250,000, adjusted to the rental price of the clothes.\n Deposit will be returned 100% after we receive the goods in good condition, with a process of 1x24 hours.",
    },
    {
      question: "Can I order another item before my rental period is over?",
      answer:
        "Yes, you can make another order even before the rental period of your previous order is over.",
    },
    {
      question: "When should I make a reservation for an item?",
      answer:
        "We recommend you to make a reservation immediately whenever the item is available. Always keep an eye on your desired item.",
    },
    {
      question: "Do I have to pay for shipping?",
      answer:
        "Yes, you need to pay for delivery fee while we cover the return fee for you. Worry not, we will conduct various promotions on delivery fee.",
    },
    {
      question: "How to find out when my order will arrive?",
      answer:
        "Admin will send the shipping receipt track via WhatsApp to your number.",
    },
    {
      question: "Can I try the item before I place the order?",
      answer: "You may contact us for more details on fitting appointments.",
    },
    {
      question: "Can I cancel my order?",
      answer:
        " Cancellation of rental less than 5 days will forfeit the rental fee.\n Cancellation of rental less than 10 days will forfeit the deposit.\n Change the rental date a maximum of H-3 days from the delivery schedule, otherwise it will be considered a cancellation of the rental schedule.",
    },
    {
      question: "Do I have to pay for laundry?",
      answer: "No, we cover the laundry fee for you.",
    },
    {
      question: "What will happen if I don't return the items on time?",
      answer:
        "There will be a deduction of the deposit:\n• Found damage or stains that cannot be removed on the clothes.\n Clothes returned are not in complete condition.\n There is damage to the totebag or the totebag is lost.\n Late return of goods (becomes extra days).\n Late return and disrupts other rental schedules the deposit will be deducted 100%.\n If there is severe damage and cannot be reused or the dress is lost, the customer is required to pay compensation of the price of the new dress.",
    },
    {
      question: "How to claim voucher?",
      answer:
        "The amount of the discount is adjusted to the dress rental price.\n The discount is valid for 30 days after the voucher is given.\n The discount is valid for the next order, when the initial order is complete. Multiples are not valid.\n Discounts can be obtained for each rental, and are adjusted to the availability of vouchers.",
    },
  ];

  // State untuk melacak pertanyaan yang terbuka
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div
      id="faq"
      className="container max-w-full h-auto mt-[64px] md:mt-[128px] flex flex-col justify-center items-center mx-auto px-4"
    >
      <div className="container w-full mx-auto text-center">
        <h1 className="text-macaronidark font-beautiqueMed text-4xl md:text-6xl md:mb-8 mb-4">
          FAQ Rentaloca
        </h1>
      </div>
      <div className="container w-full h-auto flex flex-col items-center mt-[32px] md:mt-[48px] mb-[64px] md:mb-[128px] gap-[9px] md:gap-[14px]">
        {faqData.map((faq, index) => (
          <div
            key={index}
            className="container w-full h-auto border-b border-macaronidark pb-2 "
          >
            <div
              className="flex items-center justify-between h-[40px] cursor-pointer"
              onClick={() => toggleFAQ(index)}
            >
              <h1 className="text-macaronidark font-Inter text-sm">
                {faq.question}
              </h1>
              <svg
                width="12"
                height="7"
                viewBox="0 0 12 7"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className={`transition-transform duration-300 ${
                  openIndex === index ? "rotate-180" : ""
                }`}
              >
                <path
                  d="M11.3538 1.35354L6.35375 6.35354C6.30732 6.40003 6.25217 6.43691 6.19147 6.46207C6.13077 6.48723 6.06571 6.50018 6 6.50018C5.9343 6.50018 5.86923 6.48723 5.80853 6.46207C5.74783 6.43691 5.69269 6.40003 5.64625 6.35354L0.646253 1.35354C0.552433 1.25972 0.499725 1.13247 0.499725 0.99979C0.499725 0.867108 0.552433 0.73986 0.646253 0.646039C0.740074 0.552219 0.867321 0.499512 1 0.499512C1.13269 0.499512 1.25993 0.552219 1.35375 0.646039L6 5.29291L10.6463 0.646039C10.6927 0.599584 10.7479 0.562734 10.8086 0.537593C10.8693 0.512452 10.9343 0.499512 11 0.499512C11.0657 0.499512 11.1308 0.512452 11.1915 0.537593C11.2521 0.562734 11.3073 0.599584 11.3538 0.646039C11.4002 0.692495 11.4371 0.747645 11.4622 0.808342C11.4873 0.869038 11.5003 0.934092 11.5003 0.99979C11.5003 1.06549 11.4873 1.13054 11.4622 1.19124C11.4371 1.25193 11.4002 1.30708 11.3538 1.35354Z"
                  fill="#3D3322"
                />
              </svg>
            </div>
            {openIndex === index && (
              <ul className="mt-1 ml-4 mb-2 list-disc text-sm text-macaronidark">
                {faq.answer.split("\n").map((line, idx) => (
                  <li key={idx} className="mb-1">
                    <span
                      dangerouslySetInnerHTML={{
                        __html: line.replace(
                          /<span class="font-bold">(.+?)<\/span>/g,
                          `<span class="font-bold">$1</span>`
                        ),
                      }}
                    />
                  </li>
                ))}
              </ul>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default FAQ;
