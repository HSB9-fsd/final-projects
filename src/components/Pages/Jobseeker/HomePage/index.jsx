import "./index.css";

function HomePage() {
  return (
    <>
      {/* <!-- NAVIGATION SECTION --> */}
      <nav className="navigation">
        <div className="menu">
          <select defaultValue="option1" name="" id="">
            <option value="option1">Menu</option>
          </select>
        </div>
        <div className="left-side">
          <div className="logo">
            <a href="">
              <img src="images/logo.png" alt="" width="150" />
            </a>
          </div>
          <ul className="list-items">
            <li>
              <a href="#">Cari lowongan</a>
            </li>
            <li>
              <a href="">MyJobStreet</a>
            </li>
            <li>
              <a href="">Profil perusahaan</a>
            </li>
            <li>
              <a href="">Tips karir</a>
            </li>
          </ul>
        </div>
        <div className="right-side">
          <span className="fa-solid fa-globe"></span>
          <select defaultValue="option" name="" id="">
            <option value="option">Bahasa</option>
            <option value="option">English</option>
          </select>
          <a href="" className="register">
            Masuk
          </a>
          <a href="" className="company">
            Untuk perusahaan
          </a>
        </div>
      </nav>
      {/* <!-- END NAVIGATION SECTION --> */}

      {/* <!-- HERO SECTION --> */}
      <section className="container">
        <div className="box">
          <h2>Dapatkan pekerjaan yang berarti bagimu</h2>
          <div className="cards">
            <div className="card">
              <span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="20"
                  viewBox="0 0 59 59"
                  fill="none"
                >
                  <path
                    d="M43.2986 38.1436C46.8692 33.2713 48.4684 27.2304 47.7763 21.2296C47.0843 15.2288 44.1519 9.71056 39.566 5.77892C34.98 1.84727 29.0787 -0.207835 23.0425 0.0247468C17.0064 0.257329 11.2807 2.76045 7.01088 7.03332C2.74106 11.3062 0.24204 17.0337 0.0137772 23.07C-0.214486 29.1063 1.84484 35.0062 5.77977 39.5893C9.7147 44.1724 15.235 47.1008 21.2363 47.7886C27.2376 48.4764 33.2774 46.8728 38.1471 43.2987H38.1435C38.2541 43.4462 38.3721 43.5864 38.5048 43.7228L52.7017 57.9197C53.3931 58.6116 54.3311 59.0005 55.3093 59.0009C56.2875 59.0012 57.2257 58.613 57.9177 57.9215C58.6096 57.2301 58.9985 56.2921 58.9989 55.3139C58.9992 54.3357 58.611 53.3975 57.9195 52.7056L43.7226 38.5087C43.5908 38.3752 43.449 38.2557 43.2986 38.1436ZM44.25 23.9689C44.25 26.6322 43.7254 29.2695 42.7061 31.7302C41.6869 34.1908 40.193 36.4266 38.3097 38.3099C36.4264 40.1932 34.1906 41.6871 31.73 42.7063C29.2694 43.7255 26.6321 44.2501 23.9687 44.2501C21.3053 44.2501 18.668 43.7255 16.2074 42.7063C13.7468 41.6871 11.511 40.1932 9.62769 38.3099C7.74441 36.4266 6.2505 34.1908 5.23127 31.7302C4.21204 29.2695 3.68745 26.6322 3.68745 23.9689C3.68745 18.59 5.82422 13.4313 9.6277 9.62787C13.4312 5.8244 18.5898 3.68763 23.9687 3.68763C29.3476 3.68763 34.5062 5.8244 38.3097 9.62787C42.1132 13.4313 44.25 18.59 44.25 23.9689Z"
                    fill="#4964E9"
                  />
                </svg>
              </span>
              <input
                type="text"
                name=""
                id=""
                placeholder="Jabatan, kata kunci, perusahaan"
              />
            </div>
            <div className="card">
              <span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="20"
                  viewBox="0 0 20 20"
                  fill="none"
                >
                  <g clipPath="url(#clip0_142_183)">
                    <path
                      d="M15.2075 11.175C14.5525 12.5025 13.665 13.825 12.7575 15.0125C11.8966 16.132 10.9761 17.2044 10 18.225C9.02385 17.2044 8.10336 16.132 7.2425 15.0125C6.335 13.825 5.4475 12.5025 4.7925 11.175C4.13 9.83375 3.75 8.5775 3.75 7.5C3.75 5.8424 4.40848 4.25269 5.58058 3.08058C6.75269 1.90848 8.3424 1.25 10 1.25C11.6576 1.25 13.2473 1.90848 14.4194 3.08058C15.5915 4.25269 16.25 5.8424 16.25 7.5C16.25 8.5775 15.8688 9.83375 15.2075 11.175ZM10 20C10 20 17.5 12.8925 17.5 7.5C17.5 5.51088 16.7098 3.60322 15.3033 2.1967C13.8968 0.790176 11.9891 0 10 0C8.01088 0 6.10322 0.790176 4.6967 2.1967C3.29018 3.60322 2.5 5.51088 2.5 7.5C2.5 12.8925 10 20 10 20Z"
                      fill="#4964E9"
                    />
                    <path
                      d="M10 10C9.33696 10 8.70107 9.73661 8.23223 9.26777C7.76339 8.79893 7.5 8.16304 7.5 7.5C7.5 6.83696 7.76339 6.20107 8.23223 5.73223C8.70107 5.26339 9.33696 5 10 5C10.663 5 11.2989 5.26339 11.7678 5.73223C12.2366 6.20107 12.5 6.83696 12.5 7.5C12.5 8.16304 12.2366 8.79893 11.7678 9.26777C11.2989 9.73661 10.663 10 10 10ZM10 11.25C10.9946 11.25 11.9484 10.8549 12.6517 10.1517C13.3549 9.44839 13.75 8.49456 13.75 7.5C13.75 6.50544 13.3549 5.55161 12.6517 4.84835C11.9484 4.14509 10.9946 3.75 10 3.75C9.00544 3.75 8.05161 4.14509 7.34835 4.84835C6.64509 5.55161 6.25 6.50544 6.25 7.5C6.25 8.49456 6.64509 9.44839 7.34835 10.1517C8.05161 10.8549 9.00544 11.25 10 11.25Z"
                      fill="#4964E9"
                    />
                  </g>
                  <defs>
                    <clipPath id="clip0_142_183">
                      <rect width="20" height="20" fill="white" />
                    </clipPath>
                  </defs>
                </svg>
              </span>
              <input
                type="text"
                name=""
                id=""
                placeholder="Daerah, kota atau kabupaten"
              />
            </div>
            <div className="card">
              <span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="20"
                  viewBox="0 0 20 20"
                  fill="none"
                >
                  <path
                    d="M7.5 10C8.49456 10 9.44839 9.60491 10.1517 8.90165C10.8549 8.19839 11.25 7.24456 11.25 6.25C11.25 5.25544 10.8549 4.30161 10.1517 3.59835C9.44839 2.89509 8.49456 2.5 7.5 2.5C6.50544 2.5 5.55161 2.89509 4.84835 3.59835C4.14509 4.30161 3.75 5.25544 3.75 6.25C3.75 7.24456 4.14509 8.19839 4.84835 8.90165C5.55161 9.60491 6.50544 10 7.5 10ZM1.25 17.5C1.25 17.5 0 17.5 0 16.25C0 15 1.25 11.25 7.5 11.25C13.75 11.25 15 15 15 16.25C15 17.5 13.75 17.5 13.75 17.5H1.25ZM13.75 4.375C13.75 4.20924 13.8158 4.05027 13.9331 3.93306C14.0503 3.81585 14.2092 3.75 14.375 3.75H19.375C19.5408 3.75 19.6997 3.81585 19.8169 3.93306C19.9342 4.05027 20 4.20924 20 4.375C20 4.54076 19.9342 4.69973 19.8169 4.81694C19.6997 4.93415 19.5408 5 19.375 5H14.375C14.2092 5 14.0503 4.93415 13.9331 4.81694C13.8158 4.69973 13.75 4.54076 13.75 4.375ZM14.375 7.5C14.2092 7.5 14.0503 7.56585 13.9331 7.68306C13.8158 7.80027 13.75 7.95924 13.75 8.125C13.75 8.29076 13.8158 8.44973 13.9331 8.56694C14.0503 8.68415 14.2092 8.75 14.375 8.75H19.375C19.5408 8.75 19.6997 8.68415 19.8169 8.56694C19.9342 8.44973 20 8.29076 20 8.125C20 7.95924 19.9342 7.80027 19.8169 7.68306C19.6997 7.56585 19.5408 7.5 19.375 7.5H14.375ZM16.875 11.25C16.7092 11.25 16.5503 11.3158 16.4331 11.4331C16.3158 11.5503 16.25 11.7092 16.25 11.875C16.25 12.0408 16.3158 12.1997 16.4331 12.3169C16.5503 12.4342 16.7092 12.5 16.875 12.5H19.375C19.5408 12.5 19.6997 12.4342 19.8169 12.3169C19.9342 12.1997 20 12.0408 20 11.875C20 11.7092 19.9342 11.5503 19.8169 11.4331C19.6997 11.3158 19.5408 11.25 19.375 11.25H16.875ZM16.875 15C16.7092 15 16.5503 15.0658 16.4331 15.1831C16.3158 15.3003 16.25 15.4592 16.25 15.625C16.25 15.7908 16.3158 15.9497 16.4331 16.0669C16.5503 16.1842 16.7092 16.25 16.875 16.25H19.375C19.5408 16.25 19.6997 16.1842 19.8169 16.0669C19.9342 15.9497 20 15.7908 20 15.625C20 15.4592 19.9342 15.3003 19.8169 15.1831C19.6997 15.0658 19.5408 15 19.375 15H16.875Z"
                    fill="#4964E9"
                  />
                </svg>
              </span>
              <select defaultValue="option" name="" id="">
                <option value="option">Semua spesialis pekerjaan</option>
              </select>
            </div>
            <button>Cari</button>
          </div>
        </div>
      </section>
      {/* <!-- END HERO SECTION --> */}

      {/* <!-- SEARCHING HISTORY SECTION --> */}
      <section className="searching-histories">
        <div className="items">
          <h3>Pencarian terakhir</h3>
          <div className="item">
            <a href="#">
              <span>9 baru </span>editor
            </a>
            <a href="#" className="caption">
              Semua lokasi
            </a>
          </div>
          <div className="item">
            <a href="#">
              <span>99+ baru </span> Semua lowongan
            </a>
            <a href="#" className="caption">
              Semua lokasi
            </a>
          </div>
        </div>
      </section>
      {/* <!-- END SEARCHING HISTORY SECTION --> */}

      {/* <!-- MAIN CONTENT SECTION --> */}
      <main className="main-content">
        {/* <!-- recommendation --> */}
        <section className="recommendation">
          <h2 className="recomen-title">
            Direkomendasikan berdasarkan preferensimu
          </h2>
          <div className="card-register">
            <span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="40"
                height="40"
                viewBox="0 0 100 100"
                fill="none"
              >
                <g clipPath="url(#clip0_144_182)">
                  <path
                    d="M75.9125 0.9125C76.2028 0.621479 76.5476 0.390587 76.9273 0.233046C77.307 0.0755059 77.714 -0.00558662 78.125 -0.00558662C78.5361 -0.00558662 78.9431 0.0755059 79.3227 0.233046C79.7024 0.390587 80.0472 0.621479 80.3375 0.9125L99.0875 19.6625C99.3785 19.9528 99.6094 20.2976 99.767 20.6773C99.9245 21.0569 100.006 21.464 100.006 21.875C100.006 22.286 99.9245 22.6931 99.767 23.0727C99.6094 23.4524 99.3785 23.7972 99.0875 24.0875L36.5875 86.5875C36.2876 86.8853 35.9304 87.1192 35.5375 87.275L4.28751 99.775C3.71961 100.002 3.09748 100.058 2.49826 99.935C1.89903 99.8121 1.34905 99.516 0.916513 99.0835C0.483973 98.651 0.187888 98.101 0.0649667 97.5018C-0.0579549 96.9025 -0.00230801 96.2804 0.225009 95.7125L12.725 64.4625C12.8808 64.0696 13.1147 63.7124 13.4125 63.4125L75.9125 0.9125ZM70.0438 15.625L84.375 29.9562L92.4563 21.875L78.125 7.54375L70.0438 15.625ZM79.9563 34.375L65.625 20.0437L25 60.6687V62.5H28.125C28.9538 62.5 29.7487 62.8292 30.3347 63.4153C30.9208 64.0013 31.25 64.7962 31.25 65.625V68.75H34.375C35.2038 68.75 35.9987 69.0792 36.5847 69.6653C37.1708 70.2513 37.5 71.0462 37.5 71.875V75H39.3313L79.9563 34.375ZM18.95 66.7187L18.2875 67.3812L8.73751 91.2625L32.6188 81.7125L33.2813 81.05C32.6851 80.8273 32.1712 80.4278 31.8082 79.9051C31.4452 79.3824 31.2505 78.7614 31.25 78.125V75H28.125C27.2962 75 26.5014 74.6708 25.9153 74.0847C25.3292 73.4987 25 72.7038 25 71.875V68.75H21.875C21.2386 68.7495 20.6176 68.5548 20.0949 68.1918C19.5722 67.8288 19.1727 67.3149 18.95 66.7187Z"
                    fill="black"
                  />
                </g>
                <defs>
                  <clipPath id="clip0_144_182">
                    <rect width="100" height="100" fill="white" />
                  </clipPath>
                </defs>
              </svg>
            </span>

            <p>
              <a href=""> Daftar </a> sekarang untuk menemukan lowongan yang
              dipilih hanya untukmu
            </p>
          </div>
        </section>
        {/* <!-- end recommendation --> */}

        {/* <!-- last history fitur --> */}
        <section className="last-history">
          <div className="card-title">
            <h2>Berdasarkan pencarian terakhirmu</h2>
            <a href="">Tampilkan semua lowongan </a>
          </div>
          <div className="card-carousel">
            <div className="card">
              <img src="images/waiting.png" alt="" width="90" />
              <span className="anoun">new</span>
              <div className="caption-1">
                <a href="">
                  <h6>Videographer</h6>
                  <p>PT. Bali Properti Konstruksi</p>
                </a>
              </div>
              <div className="caption-2">
                <a href="">
                  <p>Bandung, Bali</p>
                  <p>IDR 4 jt - 5,5 jt per bulan</p>
                </a>
              </div>
              <span>11 jam yang lalu</span>
            </div>
            <div className="card">
              <img src="images/waiting.png" alt="" width="90" />
              <span className="anoun"></span>
              <div className="caption-1">
                <a href="">
                  <h6>Social Media Specialist</h6>
                  <p>PT. Dewa Tunggal Abadi</p>
                </a>
              </div>
              <div className="caption-2">
                <a href="">
                  <p>Jakarta Raya</p>
                  <p>IDR 4,5 jt - 5 jt per bulan</p>
                </a>
              </div>
              <span>1 hari yang lalu</span>
            </div>
            <div className="card">
              <img src="images/waiting.png" alt="" width="90" />
              <span className="anoun"></span>
              <div className="caption-1">
                <a href="">
                  <h6>Photo Editor - Day Shift</h6>
                  <p>PT. Mindreach Consulting</p>
                </a>
              </div>
              <div className="caption-2">
                <a href="">
                  <p>DI Yogyakarta</p>
                  <p>IDR 1,6 jt - 2,5 jt per bulan</p>
                </a>
              </div>
              <span>11 jam yang lalu</span>
            </div>
            <div className="card">
              <img src="images/waiting.png" alt="" width="90" />
              <span className="anoun">new</span>
              <div className="caption-1">
                <a href="">
                  <h6>Content Creator</h6>
                  <p>PT. Raja Plafon Indonesia</p>
                </a>
              </div>
              <div className="caption-2">
                <a href="">
                  <p>Bekasi, Jawa Barat</p>
                  <p>IDR 6 jt - 7 jt per bulan</p>
                </a>
              </div>
              <span>11 jam yang lalu</span>
            </div>
          </div>
        </section>
        {/* <!-- end last history fitur --> */}

        {/* <!-- Perusahaan ternama --> */}
        <h2 className="company-title">Perusahaan ternama</h2>
        <section className="companies">
          <div className="left-side">
            <div className="box">
              <a href="">
                <img src="images/img-bank-danamon-logo.jpg" alt="" />
              </a>
            </div>
            <div className="box">
              <a href="">
                <img src="images/img-cimb-niaga-logo.jpg" alt="" />
              </a>
            </div>
            <div className="box">
              <a href="">
                <img
                  src="images/img-coca-cola-amatil-indonesia-logo.jpg"
                  alt=""
                />
              </a>
            </div>
            <div className="box">
              <a href="">
                <img src="images/img-combiphar-logo.jpg" alt="" />
              </a>
            </div>
            <div className="box">
              <a href="">
                <img src="images/img-dwidaya-tour-logo.jpg" alt="" />
              </a>
            </div>
            <div className="box">
              <a href="">
                <img src="images/img-home-credit-logo.jpg" alt="" />
              </a>
            </div>
            <div className="box">
              <a href="">
                <img src="images/img-lippo-karawaci-logo.jpg" alt="" />
              </a>
            </div>
            <div className="box">
              <a href="">
                <img src="images/img-metrodata-electronics-logo.jpg" alt="" />
              </a>
            </div>
            <div className="box">
              <a href="">
                <img src="images/img-ocbc-nisp-logo.jpg" alt="" />
              </a>
            </div>
            <div className="box">
              <a href="">
                <img src="images/img-orang-tua-group-logo.jpg" alt="" />
              </a>
            </div>
            <div className="box">
              <a href="">
                <img src="images/img-tirta-investama-aqua-logo.jpg" alt="" />
              </a>
            </div>
            <div className="box">
              <a href="">
                <img src="images/img-tnt-logo.jpg" alt="" />
              </a>
            </div>
          </div>
          <div className="right-side">
            <div className="box">
              <a href="">
                <img src="images/waiting.png" alt="" />
              </a>
            </div>
            <div className="box">
              <a href="">
                <img src="images/waiting.png" alt="" />
              </a>
            </div>
          </div>
        </section>
        {/* <!-- End Perusahaan ternama --> */}

        {/* <!-- banner --> */}
        <section className="banner">
          <img src="images/banner.jpg" alt="Banner" />
        </section>
        {/* <!-- end banner --> */}
      </main>
      {/* <!-- END MAIN CONTENT --/> */}

      {/* <!-- FOOTER --> */}
      <footer className="footer">
        <div className="item-1">
          <div className="pencari-kerja">
            <h2>Pencari kerja</h2>
            <ul>
              <li>
                <a href="">Panduan mencari kerja secara aman</a>
              </li>
              <li>
                <a href="">Sumber daya karir</a>
              </li>
              <li>
                <a href="">Bantuan karir</a>
              </li>
              <li>
                <a href="">Eksplorasi karir</a>
              </li>
              <li>
                <a href="">Eksplorasi gaji</a>
              </li>
              <li>
                <a href="">Testimoni</a>
              </li>
              <li>
                <select defaultValue="option1" name="" id="">
                  <option value="option1">Unduh aplikasi</option>
                </select>
              </li>
            </ul>
          </div>
          <div className="perusahaan">
            <h2>Perusahaan</h2>
            <ul>
              <li>
                <a href="">Pasang iklan lowongan kerja</a>
              </li>
              <li>
                <a href="">Talent Search</a>
              </li>
              <li>
                <a href="">Barikan dengan kami</a>
              </li>
              <li>
                <a href="">Profil perusahaan</a>
              </li>
            </ul>
          </div>
          <div className="tentang">
            <h2>Tentang JobStreet</h2>
            <ul>
              <li>
                <a href="">Tenang kami</a>
              </li>
              <li>
                <a href="">Berkarier JobStreet</a>
              </li>
              <li>
                <select defaultValue="option1" name="" id="">
                  <option value="option1">Mitra internasional</option>
                </select>
              </li>
            </ul>
          </div>
          <div className="kontak">
            <h2>Kontak</h2>
            <ul>
              <li>
                <a href="">Hubungi kami</a>
              </li>
              <li>
                <a href="">FAQ</a>
              </li>
              <li>
                <a href="">Kirim saran</a>
              </li>
              <li>
                <select defaultValue="option1" name="" id="">
                  <option value="option1">Media sosial</option>
                </select>
              </li>
            </ul>
          </div>
        </div>

        <hr />
        <div className="more-information">
          <select defaultValue="opotion" name="" id="">
            <option value="opotion">Indonesia</option>
          </select>

          <div className="privasi">
            <ul>
              <li>
                <a href="">Pernyataan privasi</a>
              </li>
              <li>
                <a href="">Persyaratan & Ketentuan</a>
              </li>
              <li>
                <a href="">Hak cipta @ 2023 JobStreet</a>
              </li>
            </ul>
          </div>
        </div>
      </footer>
      {/* <!-- END FOOTER --> */}
    </>
  );
}

export default HomePage;
