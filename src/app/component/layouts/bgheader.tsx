const bgheader = () => {
  return (
    <div className="container bg-white -mt-[80px] h-auto max-w-full mx-auto">
      <div
        className="h-full w-full bg-cover flex items-center justify-center relative"
        style={{ backgroundImage: "url('/img/bgheader.png')" }}
      >
        {/* Container Utama */}
        <div className="container justify-between h-auto max-w-7xl bg-transparent px-5 sm:px-10">
          <div className="flex flex-col mt-20 ml-4 md:ml-0 md:flex-row justify-between items-center h-auto md:mt-0">
            {/* Kolom Kiri */}
            <div className="w-full md:w-[616px] mt-5 md:mt-20 flex flex-col items-start">
              <h1 className="text-4xl text-center md:text-left md:text-6xl font-bold font-beautiqueMed text-macaronidark leading-tight mx-auto">
                Experience the Best <br /> of Indonesia Local <br /> Brands on
                Rent
              </h1>
              <p className="md:ml-6 mt-5 text-sm text-center md:text-lg text-macaronidark w-full md:w-[522px] md:text-left">
                Rentaloca Indonesia is a technology and a revolutionary business
                model the fashion authority into the hands of our users and
                offers them a platform for exchange that addresses all of the
                problems with borrowing clothes and will be able to access
                thousands of outfits (and still growing!).
              </p>
              <div className="md:ml-6 w-[148px] h-[47px] gap-[10px] px-6 py-2.5 rounded-lg mt-5 bg-macaronidark mx-auto">
                <a href="#" className="text-lg text-macaronidark2 shadow-sm">
                  Get Started
                </a>
              </div>
            </div>

            {/* Kolom Kanan */}
            <div
              className="w-[350px] md:w-[483px] h-[500px] md:h-[630px] bg-cover -mt-12 md:mt-20"
              style={{ backgroundImage: "url('/img/home1.png')" }}
            ></div>
          </div>
        </div>
        {/* Footer Absolute */}
        <div className="absolute flex flex-row my-auto w-[333px] h-[46px] md:w-[683px] md:h-[96px] md:-bottom-12 -bottom-6 rounded-lg border-2 border-macaronidark3 mx-auto bg-macaronilight items-center justify-between md:justify-center md:gap-8">
          <div className="md:ml-5 ml-1 flex items-center">
            <svg
              className="w-[15px] h-auto md:w-[32px]"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M22 0H2C1.46957 0 0.960859 0.210714 0.585786 0.585786C0.210714 0.960859 0 1.46957 0 2V22C0 22.5304 0.210714 23.0391 0.585786 23.4142C0.960859 23.7893 1.46957 24 2 24H22C22.5304 24 23.0391 23.7893 23.4142 23.4142C23.7893 23.0391 24 22.5304 24 22V2C24 1.46957 23.7893 0.960859 23.4142 0.585786C23.0391 0.210714 22.5304 0 22 0ZM22 22H2V2H22V22ZM12 4C10.4177 4 8.87103 4.46919 7.55544 5.34824C6.23984 6.22729 5.21447 7.47672 4.60896 8.93853C4.00346 10.4003 3.84504 12.0089 4.15372 13.5607C4.4624 15.1126 5.22433 16.538 6.34315 17.6569C7.46197 18.7757 8.88743 19.5376 10.4393 19.8463C11.9911 20.155 13.5997 19.9965 15.0615 19.391C16.5233 18.7855 17.7727 17.7602 18.6518 16.4446C19.5308 15.129 20 13.5823 20 12C19.9977 9.87898 19.1541 7.84549 17.6543 6.3457C16.1545 4.84591 14.121 4.00232 12 4ZM12 18C10.8133 18 9.65327 17.6481 8.66658 16.9888C7.67988 16.3295 6.91085 15.3925 6.45672 14.2961C6.0026 13.1997 5.88378 11.9933 6.11529 10.8295C6.3468 9.66557 6.91824 8.59647 7.75736 7.75736C8.59647 6.91824 9.66557 6.3468 10.8295 6.11529C11.9933 5.88378 13.1997 6.0026 14.2961 6.45672C15.3925 6.91085 16.3295 7.67988 16.9888 8.66658C17.6481 9.65327 18 10.8133 18 12C17.9983 13.5908 17.3657 15.116 16.2408 16.2408C15.116 17.3657 13.5908 17.9983 12 18ZM21 4.5C21 4.79667 20.912 5.08668 20.7472 5.33335C20.5824 5.58003 20.3481 5.77229 20.074 5.88582C19.7999 5.99935 19.4983 6.02906 19.2074 5.97118C18.9164 5.9133 18.6491 5.77044 18.4393 5.56066C18.2296 5.35088 18.0867 5.08361 18.0288 4.79264C17.9709 4.50166 18.0007 4.20006 18.1142 3.92597C18.2277 3.65189 18.42 3.41762 18.6666 3.2528C18.9133 3.08797 19.2033 3 19.5 3C19.8978 3 20.2794 3.15804 20.5607 3.43934C20.842 3.72064 21 4.10218 21 4.5ZM11.7075 10.7075L9.7075 12.7075C9.51986 12.8951 9.26536 13.0006 9 13.0006C8.73464 13.0006 8.48014 12.8951 8.2925 12.7075C8.10486 12.5199 7.99944 12.2654 7.99944 12C7.99944 11.7346 8.10486 11.4801 8.2925 11.2925L10.2925 9.2925C10.4801 9.10486 10.7346 8.99944 11 8.99944C11.2654 8.99944 11.5199 9.10486 11.7075 9.2925C11.8951 9.48014 12.0006 9.73464 12.0006 10C12.0006 10.2654 11.8951 10.5199 11.7075 10.7075ZM15.7075 10.2925C15.8005 10.3854 15.8742 10.4957 15.9246 10.6171C15.9749 10.7385 16.0008 10.8686 16.0008 11C16.0008 11.1314 15.9749 11.2615 15.9246 11.3829C15.8742 11.5043 15.8005 11.6146 15.7075 11.7075L11.7075 15.7075C11.6146 15.8004 11.5043 15.8741 11.3829 15.9244C11.2615 15.9747 11.1314 16.0006 11 16.0006C10.8686 16.0006 10.7385 15.9747 10.6171 15.9244C10.4957 15.8741 10.3854 15.8004 10.2925 15.7075C10.1996 15.6146 10.1259 15.5043 10.0756 15.3829C10.0253 15.2615 9.99944 15.1314 9.99944 15C9.99944 14.8686 10.0253 14.7385 10.0756 14.6171C10.1259 14.4957 10.1996 14.3854 10.2925 14.2925L14.2925 10.2925C14.3854 10.1995 14.4957 10.1258 14.6171 10.0754C14.7385 10.0251 14.8686 9.99921 15 9.99921C15.1314 9.99921 15.2615 10.0251 15.3829 10.0754C15.5043 10.1258 15.6146 10.1995 15.7075 10.2925Z"
                fill="#6D5C3D"
              />
            </svg>

            <a
              href="#"
              className="bg-transparant -ml-2 px-5 py-[10px] text-xs md:text-xl text-macaronidark3 whitespace-nowrap"
            >
              FREE DRY CLEANING
            </a>
          </div>
          <div className="mr-2 my-auto">
            <h1 className="text-xl md:text-4xl text-macaronidark3">|</h1>
          </div>
          <div className="flex items-center">
            <svg
              className="w-[15px] h-auto md:w-[32px]"
              viewBox="0 0 26 26"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M17.7075 9.7075L14.4138 13L17.7075 16.2925C17.8004 16.3854 17.8741 16.4957 17.9244 16.6171C17.9747 16.7385 18.0006 16.8686 18.0006 17C18.0006 17.1314 17.9747 17.2615 17.9244 17.3829C17.8741 17.5043 17.8004 17.6146 17.7075 17.7075C17.6146 17.8004 17.5043 17.8741 17.3829 17.9244C17.2615 17.9747 17.1314 18.0006 17 18.0006C16.8686 18.0006 16.7385 17.9747 16.6171 17.9244C16.4957 17.8741 16.3854 17.8004 16.2925 17.7075L13 14.4137L9.70751 17.7075C9.6146 17.8004 9.50429 17.8741 9.3829 17.9244C9.26151 17.9747 9.1314 18.0006 9 18.0006C8.86861 18.0006 8.7385 17.9747 8.61711 17.9244C8.49572 17.8741 8.38542 17.8004 8.2925 17.7075C8.19959 17.6146 8.12589 17.5043 8.07561 17.3829C8.02533 17.2615 7.99945 17.1314 7.99945 17C7.99945 16.8686 8.02533 16.7385 8.07561 16.6171C8.12589 16.4957 8.19959 16.3854 8.2925 16.2925L11.5863 13L8.2925 9.7075C8.10486 9.51986 7.99945 9.26536 7.99945 9C7.99945 8.73464 8.10486 8.48014 8.2925 8.2925C8.48015 8.10486 8.73464 7.99944 9 7.99944C9.26537 7.99944 9.51987 8.10486 9.70751 8.2925L13 11.5862L16.2925 8.2925C16.3854 8.19959 16.4957 8.12589 16.6171 8.07561C16.7385 8.02532 16.8686 7.99944 17 7.99944C17.1314 7.99944 17.2615 8.02532 17.3829 8.07561C17.5043 8.12589 17.6146 8.19959 17.7075 8.2925C17.8004 8.38541 17.8741 8.49571 17.9244 8.6171C17.9747 8.7385 18.0006 8.8686 18.0006 9C18.0006 9.13139 17.9747 9.2615 17.9244 9.3829C17.8741 9.50429 17.8004 9.61459 17.7075 9.7075ZM26 13C26 15.5712 25.2376 18.0846 23.8091 20.2224C22.3807 22.3603 20.3503 24.0265 17.9749 25.0104C15.5994 25.9944 12.9856 26.2518 10.4638 25.7502C7.94208 25.2486 5.6257 24.0105 3.80762 22.1924C1.98953 20.3743 0.751405 18.0579 0.249797 15.5362C-0.251811 13.0144 0.0056327 10.4006 0.989572 8.02511C1.97351 5.64968 3.63975 3.61935 5.77759 2.19089C7.91543 0.762437 10.4288 0 13 0C16.4467 0.00363977 19.7512 1.37445 22.1884 3.81163C24.6256 6.24882 25.9964 9.5533 26 13ZM24 13C24 10.8244 23.3549 8.69767 22.1462 6.88873C20.9375 5.07979 19.2195 3.66989 17.2095 2.83732C15.1995 2.00476 12.9878 1.78692 10.854 2.21136C8.72022 2.6358 6.76021 3.68345 5.22183 5.22183C3.68345 6.7602 2.6358 8.72021 2.21137 10.854C1.78693 12.9878 2.00477 15.1995 2.83733 17.2095C3.66989 19.2195 5.07979 20.9375 6.88873 22.1462C8.69767 23.3549 10.8244 24 13 24C15.9164 23.9967 18.7123 22.8367 20.7745 20.7745C22.8367 18.7123 23.9967 15.9164 24 13Z"
                fill="#6D5C3D"
              />
            </svg>
            <a
              href="#"
              className="bg-transparant -ml-2 px-5 py-[10px] text-xs md:text-xl text-macaronidark3 whitespace-nowrap"
            >
              CANCEL ANYTIME
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default bgheader;
