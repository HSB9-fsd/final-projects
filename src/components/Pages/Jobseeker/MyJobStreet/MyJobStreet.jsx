export default function MyJobStreet() {
  return (
    <>
      <div className="w-screen bg-[#e5e5e5]">
        <Navbar />
        <Main />
        <Footer />
      </div>
    </>
  );
}

function Navbar() {
  return (
    <div>
      <nav className="sticky z-[9999] w-full md:flex md:flex-col ">
        <div className="bg-[#1c3f94] capitalize h-[60px]">
          <div className="flex items-center justify-between text-white my-[15px] mx-[80px]">
            <ul className="flex gap-4 w-80%">
              <li>
                <a href="#">beranda</a>
              </li>
              <li>
                <a href="#">cari lowongan</a>
              </li>
              <li>
                <a href="#">MyJobStreet</a>
              </li>
              <li>
                <a href="#">profile perusahaan</a>
              </li>
              <select name="" id="" className="bg-[#1c3f94]">
                <option value={1} selected="" hidden="">
                  Lainnya
                </option>
                <option value={2}>Lowongan Luar Negeri</option>
                <option value={3}>Lowongan Lulusan Baru</option>
              </select>
            </ul>
            <select name="" id="" className="bg-transparent cursor-pointer">
              <option
                value="bahasa"
                className="text-slate-400 hover:text-slate-200 bg-transparent "
              >
                Bahasa
              </option>
              <option
                value="english"
                className="text-slate-400 hover:text-slate-200"
              >
                English
              </option>
            </select>
          </div>
        </div>
        <div className=" h-[60px] bg-[#fff] flex items-center justify-between ">
          <div className="ml-20">
            <img
              src="../public/images/logo.png"
              alt="logo"
              className="w-[180px]"
            />
          </div>
          <div className="text-gray-600 focus-within:text-gray-400 flex w-2/5 -ml-10">
            <input
              type="text"
              className="w-full py-1 pl-10 border rounded-md focus:outline-none focus:ring focus:border-blue-300"
              placeholder="Mencari berdasarkan posisi, keahlian, dan kata kunci..."
            />
            <button
              type="submit"
              className="right-15 top-2 ml bg-[#1c3f94] text-white"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                className="w-8 h-10 py-1"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z"
                />
              </svg>
            </button>
            <div className="my-1 mx-3">
              <a href="">Lanjutkan</a>
            </div>
          </div>
          <div className="text-green-500 font-bold capitalize mr-20">
            perusahaan
          </div>
        </div>
      </nav>
    </div>
  );
}

function Main() {
  return (
    <div>
      {" "}
      <main className="bg-[#e5e5e5] w-full">
        <div className="container max-w-md mx-auto bg-white p-8 rounded-md shadow-md mt-10 md:max-w-xl">
          <h2 className="text-2xl font-bold mb-4">Kandidat Masuk</h2>
          <h2>Temukan lowongan sesuai gaji Anda</h2>
          {/* <p>kemudian lamar.</p> */}
          <div className="mt-6 mb-2">
            <button
              type="submit"
              className="w-full bg-[#1c3f94] text-white font-semibold py-2 rounded-md hover:bg-blue-700 flex items-center justify-center"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width={16}
                height={16}
                fill="currentColor"
                className="bi bi-facebook"
                viewBox="0 0 16 16"
              >
                <path d="M16 8.049c0-4.446-3.582-8.05-8-8.05C3.58 0-.002 3.603-.002 8.05c0 4.017 2.926 7.347 6.75 7.951v-5.625h-2.03V8.05H6.75V6.275c0-2.017 1.195-3.131 3.022-3.131.876 0 1.791.157 1.791.157v1.98h-1.009c-.993 0-1.303.621-1.303 1.258v1.51h2.218l-.354 2.326H9.25V16c3.824-.604 6.75-3.934 6.75-7.951z" />
              </svg>
              <span className="ml-2">Masuk dengan Facebook </span>
            </button>
          </div>
          <div className="text-slate-400 mb-2 text-sm">
            Sangat Mudah dan cepat. Kami tidak akan menggungah apapun tanpa izin
            dari Anda.
          </div>
          <div className="flex flex-row items-center justify-center capitalize mb-2">
            <hr />
            <p>atau</p>
            <hr />
          </div>
          <form>
            {/* <div className="mb-4 flex gap-2">
              <input
                type="text"
                id="NamaDepan"
                name="NamaDepan"
                placeholder="Nama Depan"
                required=""
                className="w-1/2 px-3 py-2 border rounded-md"
              />
              <input
                type="text"
                id="NamaBelakang"
                name="NamaBelakang"
                placeholder="Nama belakang"
                required=""
                className="w-1/2 px-3 py-2 border rounded-md"
              />
            </div> */}
            <div className="mb-4 flex gap-2">
              <input
                type="email"
                id="email"
                name="email"
                placeholder="Email"
                required=""
                className="w-full px-3 py-2 border rounded-md"
              />
            </div>
            <div className="mb-4 flex gap-2  items-center">
              <input
                type="password"
                id="password"
                name="password"
                placeholder="Kata Sandi"
                required=""
                className="w-full px-3 py-2 border rounded-md relative"
              />
              {/* <svg
                xmlns="http://www.w3.org/2000/svg"
                width={16}
                height={16}
                fill="currentColor"
                className="bi bi-question-circle-fill w-5 h-5 absolute ml-[22rem] md:ml-[30rem]"
                viewBox="0 0 16 16"
              >
                <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zM5.496 6.033h.825c.138 0 .248-.113.266-.25.09-.656.54-1.134 1.342-1.134.686 0 1.314.343 1.314 1.168 0 .635-.374.927-.965 1.371-.673.489-1.206 1.06-1.168 1.987l.003.217a.25.25 0 0 0 .25.246h.811a.25.25 0 0 0 .25-.25v-.105c0-.718.273-.927 1.01-1.486.609-.463 1.244-.977 1.244-2.056 0-1.511-1.276-2.241-2.673-2.241-1.267 0-2.655.59-2.75 2.286a.237.237 0 0 0 .241.247zm2.325 6.443c.61 0 1.029-.394 1.029-.927 0-.552-.42-.94-1.029-.94-.584 0-1.009.388-1.009.94 0 .533.425.927 1.01.927z" />
              </svg> */}
            </div>
            <div className="flex justify-between">
              <div>
                <input type="checkbox" name="" id="" defaultChecked="true" />
                <span className="ml-2">Ingat saya</span>
              </div>
              <div>
                <p className="text-blue-800">
                  <a href="">Lupa?</a>
                </p>
              </div>
            </div>
            <div className="mt-6">
              <button
                type="submit"
                className="w-full bg-[#e60278] text-white font-semibold py-2 rounded-md hover:bg-blue-700"
              >
                Mendaftar
              </button>
            </div>
            <div className="text-center mt-3 mb-3 text-sm md:text-md">
              Pengguna Baru ?{" "}
              <a href="#" className="text-blue-600">
                Daftar GRATIS sekarang
              </a>
            </div>
            <div className="justify-start">
              <p className="text-xs md:text-sm">
                Dengan Terhubung ke Facebook, Saya telah membaca dan menyetujui
              </p>
              <p className="text-xs md:text-sm">
                <a href="#" className="text-blue-600">
                  Ketentuan Penggunaan
                </a>{" "}
                dan <a href="#">Kebijakan Privasi</a>
                JobStreet.com
              </p>
            </div>
          </form>
        </div>
      </main>
    </div>
  );
}

function Footer() {
  return (
    <div>
      {" "}
      <footer className="bg-transparent mt-6 justify-center">
        <ul className="flex justify-around w-7/12 text-xs mx-auto text-blue-800 mb-3 md:text-sm">
          <li>
            <a href="#">JobStreet International</a>
          </li>
          <li>
            <a href="#">Site Map</a>
          </li>
          <li>
            <a href="#">Tentang Kami</a>
          </li>
          <li>
            <a href="#">Berkarier bersama kami</a>
          </li>
          <li>
            <a href="#">Ketentuan Penggunaan</a>
          </li>
          <li>
            <a href="#">Kebijakan Kerahasiaan</a>
          </li>
        </ul>
        <ul className="flex justify-evenly w-4/12 text-sm mx-auto text-blue-800 mb-3">
          <li>
            <a href="#">Panduan Mencari Kerja Secara Aman</a>
          </li>
          <li>
            <a href="#">Bantuan</a>
          </li>
          <li>
            <a href="#">Kirim Saran</a>
          </li>
        </ul>
        <hr />
      </footer>
    </div>
  );
}
