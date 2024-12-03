const Wardobe = () => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center">
      <div className="container w-full md:mt-0 mx-auto px-4">
        <div className="text-center text-4xl md:text-6xl font-beautiqueMed text-black">
          <h1>Rentaloca Wardrobe</h1>
        </div>
        <div className="container h-auto mt-2 md:mt-10 pt-5">
          <div className="flex flex-col md:flex-row gap-2 md:gap-2 justify-center items-center">
            {/* Card 1 */}
            <a href="/detail-catalogue/kanawa-dress-black">
              <div className="w-[333px] h-[540px] md:w-[304px] md:h-[493px] flex flex-col items-center px-4 py-4 bg-white border-black border-[1px] shadow-md overflow-hidden rounded-lg">
                <div
                  className="w-full h-[432px] bg-cover rounded-lg"
                  style={{
                    backgroundImage: "url('/img/kanawa.png')",
                    backgroundSize: "cover",
                    backgroundPosition: "top",
                  }}
                ></div>
                <h2 className="text-black mt-2 font-beautiqueMed text-lg">
                  Kanawa Dress
                </h2>
                <h3 className="text-black mt-1 text-sm">Black</h3>
              </div>
            </a>
            <a href="/detail-catalogue/sasha-dress-green">
              <div className="w-[333px] h-[540px] md:w-[304px] md:h-[493px] flex flex-col items-center px-4 py-4 bg-white border-black border-[1px] shadow-md overflow-hidden rounded-lg">
                <div
                  className="w-full h-[432px] bg-cover rounded-lg"
                  style={{
                    backgroundImage: "url('/img/sasha.png')",
                    backgroundSize: "cover",
                    backgroundPosition: "top",
                  }}
                ></div>
                <h2 className="text-black mt-2 font-beautiqueMed text-lg">
                  Sasha Dress
                </h2>
                <h3 className="text-black mt-1 text-sm">Green</h3>
              </div>
            </a>
            <a href="/detail-catalogue/bonita-dress-pink">
              <div className="w-[333px] h-[540px] md:w-[304px] md:h-[493px] flex flex-col items-center px-4 py-4 bg-white border-black border-[1px] shadow-md overflow-hidden rounded-lg">
                <div
                  className="w-full h-[432px] bg-cover rounded-lg"
                  style={{
                    backgroundImage: "url('/img/bonita.png')",
                    backgroundSize: "cover",
                    backgroundPosition: "top",
                  }}
                ></div>
                <h2 className="text-black mt-2 font-beautiqueMed text-lg">
                  Bonita Dress
                </h2>
                <h3 className="text-black mt-1 text-sm">Pink</h3>
              </div>
            </a>
            <a href="/detail-catalogue/leona-dress-rose-gold">
              <div className="w-[333px] h-[540px] md:w-[304px] md:h-[493px] flex flex-col items-center px-4 py-4 bg-white border-black border-[1px] shadow-md overflow-hidden rounded-lg">
                <div
                  className="w-full h-[432px] bg-cover rounded-lg"
                  style={{
                    backgroundImage: "url('/img/leona.png')",
                    backgroundSize: "cover",
                    backgroundPosition: "top",
                  }}
                ></div>
                <h2 className="text-black mt-2 font-beautiqueMed text-lg">
                  Leona Dress
                </h2>
                <h3 className="text-black mt-1 text-sm">Wine Gold</h3>
              </div>
            </a>
          </div>

          {/* Button */}
          <div className="flex items-center justify-center w-full gap-4 h-16 md:mt-10 mt-5">
            <a
              href="/component/page/catalogue"
              className="flex items-center gap-2 text-xl px-6 py-2 rounded-lg bg-macaronidark text-macaronidark2"
            >
              View All Product
              <svg
                width="20"
                height="21"
                viewBox="0 0 20 21"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M10 0.75C8.07164 0.75 6.18657 1.32183 4.58319 2.39317C2.97982 3.46451 1.73013 4.98726 0.992179 6.76884C0.254225 8.55042 0.061142 10.5108 0.437348 12.4021C0.813554 14.2934 1.74215 16.0307 3.10571 17.3943C4.46928 18.7579 6.20656 19.6865 8.09787 20.0627C9.98919 20.4389 11.9496 20.2458 13.7312 19.5078C15.5127 18.7699 17.0355 17.5202 18.1068 15.9168C19.1782 14.3134 19.75 12.4284 19.75 10.5C19.7473 7.91498 18.7192 5.43661 16.8913 3.60872C15.0634 1.78084 12.585 0.75273 10 0.75ZM10 18.75C8.36831 18.75 6.77326 18.2661 5.41655 17.3596C4.05984 16.4531 3.00242 15.1646 2.378 13.6571C1.75358 12.1496 1.5902 10.4908 1.90853 8.8905C2.22685 7.29016 3.01259 5.82015 4.16637 4.66637C5.32016 3.51259 6.79017 2.72685 8.39051 2.40852C9.99085 2.09019 11.6497 2.25357 13.1571 2.87799C14.6646 3.50242 15.9531 4.55984 16.8596 5.91655C17.7661 7.27325 18.25 8.8683 18.25 10.5C18.2475 12.6873 17.3775 14.7843 15.8309 16.3309C14.2843 17.8775 12.1873 18.7475 10 18.75ZM14.2806 9.96937C14.3504 10.039 14.4057 10.1217 14.4434 10.2128C14.4812 10.3038 14.5006 10.4014 14.5006 10.5C14.5006 10.5986 14.4812 10.6962 14.4434 10.7872C14.4057 10.8783 14.3504 10.961 14.2806 11.0306L11.2806 14.0306C11.1399 14.1714 10.949 14.2504 10.75 14.2504C10.551 14.2504 10.3601 14.1714 10.2194 14.0306C10.0786 13.8899 9.99959 13.699 9.99959 13.5C9.99959 13.301 10.0786 13.1101 10.2194 12.9694L11.9397 11.25H6.25C6.05109 11.25 5.86033 11.171 5.71967 11.0303C5.57902 10.8897 5.5 10.6989 5.5 10.5C5.5 10.3011 5.57902 10.1103 5.71967 9.96967C5.86033 9.82902 6.05109 9.75 6.25 9.75H11.9397L10.2194 8.03063C10.0786 7.88989 9.99959 7.69902 9.99959 7.5C9.99959 7.30098 10.0786 7.11011 10.2194 6.96937C10.3601 6.82864 10.551 6.74958 10.75 6.74958C10.949 6.74958 11.1399 6.82864 11.2806 6.96937L14.2806 9.96937Z"
                  fill="#B5B0A9"
                />
              </svg>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Wardobe;
