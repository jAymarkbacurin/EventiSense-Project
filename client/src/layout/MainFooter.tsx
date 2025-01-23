

function MainFooter() {
    return (
      <div>
      <footer className="relative bg-dark-blue pt-8 pb-6 gradient-border">
        <div className="container mx-auto px-4 font-montserrat mt-[5rem]">
          <div className="flex flex-wrap text-center lg:text-left">
            <div className="w-full lg:w-6/12 px-4">
              <h4 className="text-3xl font-semibold text-white">Let's keep in touch!</h4>
              <h5 className="text-lg mt-0 mb-2 text-white">
                Find us on any of these platforms, we respond 1-2 business days.
              </h5>
              <div className="mt-6 lg:mb-0 mb-6">
                <button className="bg-white text-lightBlue-400 shadow-lg font-normal h-10 w-10 items-center justify-center align-center rounded-full outline-none focus:outline-none mr-2" type="button">
                  <i className="fab fa-twitter"></i></button><button className="bg-white text-lightBlue-600 shadow-lg font-normal h-10 w-10 items-center justify-center align-center rounded-full outline-none focus:outline-none mr-2" type="button">
                  <i className="fab fa-facebook-square"></i></button><button className="bg-white text-pink-400 shadow-lg font-normal h-10 w-10 items-center justify-center align-center rounded-full outline-none focus:outline-none mr-2" type="button">
                  <i className="fab fa-dribbble"></i></button><button className="bg-white text-blueGray-800 shadow-lg font-normal h-10 w-10 items-center justify-center align-center rounded-full outline-none focus:outline-none mr-2" type="button">
                  <i className="fab fa-github"></i>
                </button>
              </div>
            </div>
            <div className="w-full lg:w-6/12 px-4 font-montserrat">
              <div className="flex flex-wrap items-top mb-6">
                <div className="w-full lg:w-4/12 px-4 ml-auto">
                  <span className="block uppercase  font-semibold mb-2 text-white">Quick Links</span>
                  <ul className="list-unstyled text-gray-500">
                    <li>
                      <a className="  font-semibold block pb-2 " href="https://www.creative-tim.com/presentation?ref=njs-profile">About Us</a>
                    </li>
                    <li>
                      <a className="  font-semibold block pb-2 " href="https://blog.creative-tim.com?ref=njs-profile">Contact Us</a>
                    </li>
                    <li>
                      <a className=" font-semibold block pb-2 " href="https://www.github.com/creativetimofficial?ref=njs-profile">Help Center</a>
                    </li>
                    <li>
                      <a className="font-semibold block pb-2" href="https://www.creative-tim.com/bootstrap-themes/free?ref=njs-profile">Services</a>
                    </li>
                  </ul>
                </div>
                <div className="w-full lg:w-4/12 px-4 ">
                  <span className="block uppercase  font-semibold mb-2 text-white">Other Resources</span>
                  <ul className="list-unstyled text-gray-500">
                    <li>
                      <a className=" font-semibold block pb-2 " href="https://creative-tim.com/terms?ref=njs-profile">Terms &amp; Conditions</a>
                    </li>
                    <li>
                      <a className="font-semibold block pb-2 " href="https://creative-tim.com/privacy?ref=njs-profile">Privacy Policy</a>
                    </li>
                    <li>
                      <a className=" font-semibold block pb-2 " href="https://creative-tim.com/contact-us?ref=njs-profile">Contact Us</a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
          <hr className="my-6  border-gray-600"/>
          <div className="flex flex-wrap items-center md:justify-between justify-center">
            <div className="w-full md:w-4/12 px-4 mx-auto text-center">
              <div className="text-sm text-gray-400 font-semibold py-1">
                Copyright © <span id="get-current-year">2024</span> EventiSense. All rights reserved.
              </div>
            </div>
          </div>
        </div>
      </footer>
      </div>
    )
  }
  
  export default MainFooter
  