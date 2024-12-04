const footer = () => {
  return (
    <div>
      <div
        className="w-full pt-10 bg-macaronilight3"
        // style={{ backgroundImage: "url('/img/bgfooter.png')" }}
      >
        <div className="container mx-auto px-4 md:px-4">
          <div className="relative flex flex-col lg:flex-row lg:justify-between gap-x-24 gap-y-10">
            <div className="flex flex-col relative">
              <a
                className="-mt-5 h-[42.43px] w-[197px] bg-cover mb-5"
                href="#"
                style={{ backgroundImage: "url('/img/rentaloca.png')" }}
              ></a>
              <p className="text-sm text-macaronidark leading-relaxed max-w-2xl text-pretty">
                Rentaloca Indonesia is a technology platform and a revolutionary
                business model for the fashion authority that addresses all of
                the problems with borrowing clotes and will be able to acces
                thousands of outfits of designers and local clothing brands in
                Indonesia throught Subscription-bases renting and one time
                rentals.
              </p>
              <div className="flex gap-[10px] mt-5">
                <a href="https://www.instagram.com/rentaloca.id" target="_blank" className="">
                  <svg
                    width="20"
                    height="21"
                    viewBox="0 0 20 21"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M10 5.93066C9.10998 5.93066 8.23995 6.19458 7.49993 6.68905C6.75991 7.18352 6.18314 7.88632 5.84254 8.70859C5.50195 9.53086 5.41283 10.4357 5.58647 11.3086C5.7601 12.1815 6.18868 12.9833 6.81802 13.6126C7.44736 14.242 8.24918 14.6706 9.12209 14.8442C9.99501 15.0178 10.8998 14.9287 11.7221 14.5881C12.5443 14.2475 13.2471 13.6708 13.7416 12.9307C14.2361 12.1907 14.5 11.3207 14.5 10.4307C14.4988 9.23757 14.0243 8.0937 13.1806 7.25005C12.337 6.40641 11.1931 5.9319 10 5.93066ZM10 13.4307C9.40666 13.4307 8.82664 13.2547 8.33329 12.9251C7.83994 12.5954 7.45542 12.1269 7.22836 11.5787C7.0013 11.0305 6.94189 10.4273 7.05764 9.84539C7.1734 9.26345 7.45912 8.7289 7.87868 8.30934C8.29824 7.88979 8.83279 7.60406 9.41473 7.48831C9.99667 7.37255 10.5999 7.43196 11.1481 7.65903C11.6962 7.88609 12.1648 8.27061 12.4944 8.76395C12.8241 9.2573 13 9.83732 13 10.4307C13 11.2263 12.6839 11.9894 12.1213 12.552C11.5587 13.1146 10.7956 13.4307 10 13.4307ZM14.5 0.680664H5.5C4.10807 0.682153 2.77358 1.23575 1.78933 2.22C0.805091 3.20424 0.251489 4.53873 0.25 5.93066V14.9307C0.251489 16.3226 0.805091 17.6571 1.78933 18.6413C2.77358 19.6256 4.10807 20.1792 5.5 20.1807H14.5C15.8919 20.1792 17.2264 19.6256 18.2107 18.6413C19.1949 17.6571 19.7485 16.3226 19.75 14.9307V5.93066C19.7485 4.53873 19.1949 3.20424 18.2107 2.22C17.2264 1.23575 15.8919 0.682153 14.5 0.680664ZM18.25 14.9307C18.25 15.9252 17.8549 16.8791 17.1516 17.5823C16.4484 18.2856 15.4946 18.6807 14.5 18.6807H5.5C4.50544 18.6807 3.55161 18.2856 2.84835 17.5823C2.14509 16.8791 1.75 15.9252 1.75 14.9307V5.93066C1.75 4.9361 2.14509 3.98228 2.84835 3.27901C3.55161 2.57575 4.50544 2.18066 5.5 2.18066H14.5C15.4946 2.18066 16.4484 2.57575 17.1516 3.27901C17.8549 3.98228 18.25 4.9361 18.25 5.93066V14.9307ZM16 5.55566C16 5.77817 15.934 5.99568 15.8104 6.18068C15.6868 6.36569 15.5111 6.50988 15.3055 6.59503C15.1 6.68018 14.8738 6.70246 14.6555 6.65905C14.4373 6.61564 14.2368 6.50849 14.0795 6.35116C13.9222 6.19383 13.815 5.99337 13.7716 5.77514C13.7282 5.55691 13.7505 5.33071 13.8356 5.12514C13.9208 4.91958 14.065 4.74388 14.25 4.62026C14.435 4.49664 14.6525 4.43066 14.875 4.43066C15.1734 4.43066 15.4595 4.54919 15.6705 4.76017C15.8815 4.97115 16 5.2573 16 5.55566Z"
                      fill="#3D3322"
                    />
                  </svg>
                </a>
                <a href="https://www.tiktok.com/@rentaloca.id" target="_blank" className="">
                  <svg
                    width="20"
                    height="22"
                    viewBox="0 0 20 22"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M19 6.18066C17.8069 6.17942 16.663 5.70492 15.8194 4.86127C14.9757 4.01763 14.5012 2.87376 14.5 1.68066C14.5 1.48175 14.421 1.29099 14.2803 1.15033C14.1397 1.00968 13.9489 0.930664 13.75 0.930664H10C9.80109 0.930664 9.61032 1.00968 9.46967 1.15033C9.32902 1.29099 9.25 1.48175 9.25 1.68066V14.0557C9.24985 14.3912 9.15967 14.7205 8.98887 15.0093C8.81807 15.2981 8.57291 15.5358 8.27896 15.6975C7.98501 15.8593 7.65304 15.9392 7.31768 15.9289C6.98232 15.9187 6.65586 15.8186 6.37234 15.6392C6.08883 15.4598 5.85865 15.2076 5.70582 14.9089C5.55299 14.6102 5.4831 14.276 5.50345 13.9411C5.5238 13.6062 5.63364 13.2829 5.82151 13.0049C6.00939 12.7269 6.26841 12.5044 6.57156 12.3607C6.6998 12.2998 6.80813 12.2038 6.88397 12.0838C6.95981 11.9638 7.00005 11.8248 7 11.6829V7.68066C7.00005 7.57103 6.97606 7.46272 6.92972 7.36336C6.88339 7.264 6.81584 7.17601 6.73182 7.10558C6.6478 7.03515 6.54937 6.98399 6.44345 6.95572C6.33752 6.92744 6.22669 6.92273 6.11875 6.94191C2.77281 7.53816 0.25 10.5963 0.25 14.0557C0.25 15.9453 1.00067 17.7576 2.33686 19.0938C3.67306 20.43 5.48533 21.1807 7.375 21.1807C9.26467 21.1807 11.0769 20.43 12.4131 19.0938C13.7493 17.7576 14.5 15.9453 14.5 14.0557V10.3329C15.889 11.0576 17.4333 11.4343 19 11.4307C19.1989 11.4307 19.3897 11.3516 19.5303 11.211C19.671 11.0703 19.75 10.8796 19.75 10.6807V6.93066C19.75 6.73175 19.671 6.54099 19.5303 6.40033C19.3897 6.25968 19.1989 6.18066 19 6.18066ZM18.25 9.89691C16.7843 9.76704 15.3809 9.24395 14.1878 8.38285C14.0757 8.30223 13.9434 8.25413 13.8057 8.24387C13.668 8.23361 13.5301 8.26159 13.4072 8.32471C13.2844 8.38783 13.1814 8.48365 13.1095 8.6016C13.0376 8.71955 12.9997 8.85505 13 8.99316V14.0557C13 15.5475 12.4074 16.9782 11.3525 18.0331C10.2976 19.088 8.86684 19.6807 7.375 19.6807C5.88316 19.6807 4.45242 19.088 3.39752 18.0331C2.34263 16.9782 1.75 15.5475 1.75 14.0557C1.75 11.6275 3.31 9.44973 5.5 8.65566V11.2497C5.01517 11.5737 4.62254 12.0177 4.36037 12.5385C4.09821 13.0593 3.97545 13.6392 4.00407 14.2216C4.03268 14.804 4.2117 15.369 4.52366 15.8617C4.83562 16.3543 5.26989 16.7577 5.78414 17.0325C6.29839 17.3074 6.87508 17.4443 7.458 17.4299C8.04091 17.4156 8.61017 17.2505 9.11028 16.9507C9.6104 16.6509 10.0243 16.2266 10.3117 15.7193C10.599 15.2119 10.7501 14.6388 10.75 14.0557V2.43066H13.0469C13.2155 3.75168 13.818 4.97933 14.7597 5.92101C15.7013 6.86269 16.929 7.46512 18.25 7.63379V9.89691Z"
                      fill="#3D3322"
                    />
                  </svg>
                </a>
              </div>
            </div>
            <div className="flex flex-col lg:flex-row flex-wrap gap-y-4 gap-x-16 lg:justify-end w-full">
              <div className="">
                <h1 className="text-macaronidark text-xs font-Inter font-bold whitespace-nowrap">
                  PRODUCT & SERVICE
                </h1>
                <h1 className="text-macaronidark text-xs font-Inter mt-2 mb-2">
                  ON TIME RENTAL
                </h1>
                <h1 className="text-macaronidark text-xs font-Inter mb-2 whitespace-nowrap">
                  RENTALOCA WARDOBE
                </h1>
                <h1 className="text-macaronidark text-xs font-Inter mb-2">
                  SELLING/BUYING
                </h1>
              </div>
              <div className="">
                <h2 className="text-macaronidark text-xs font-Inter font-bold">
                  HELP
                </h2>
                <h1 className="text-macaronidark text-xs font-Inter mt-2 mb-2">
                  +62 8566660999
                </h1>
                <h1 className="text-macaronidark text-xs font-Inter mb-2">
                  Rentalocaindonesia@gmail.com
                </h1>
                <h1 className="text-macaronidark text-xs font-Inter mb-2">
                  @Rentaloca.Id
                </h1>
              </div>
              <div className="">
                <h2 className="text-macaronidark text-xs font-Inter font-bold">
                  COMPANY
                </h2>
                <a href="/catalogue">
                  <h1 className="text-macaronidark text-xs font-Inter mt-2 mb-2">
                    CATALOGUE
                  </h1>
                </a>
                <h1 className="text-macaronidark text-xs font-Inter mb-2">
                  <a href="#faq" >
                      FAQ
                  </a>
                </h1>
                <h1 className="text-macaronidark text-xs font-Inter mb-2">
                  <a href="#howitwork">
                      HOW IT WORK
                  </a>
                </h1>
              </div>
            </div>
          </div>
          <div className="h-[1px] bg-macaronidark w-full mt-5"></div>
          <div className="w-full mx-auto flex flx-row justify-center items-center h-[48px]">
            <h1 className="text-macaronidark3 text-xs font-Inter">
              © 2024 Rentaloca Private Limited. All Rights Reserved.
            </h1>
          </div>
        </div>
      </div>
    </div>
  );
};

export default footer;
