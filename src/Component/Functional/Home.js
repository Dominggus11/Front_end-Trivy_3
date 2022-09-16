import React from "react";
import Produk from "../Class/Produk";
// import Blog from "./Blog";
import "./CSS/Blog.css";
function Home() {
  return (
    <div className="Home">
      <Produk 
      stok = '10'
      nama = 'Mackbook 2022'
      harga = 'Rp. 27.000.000'
      status = "Tersedia"
      />
      {/* <Blog
        tanggal="16 September 2022"
        judul="Trivy Misconfig"
        summary="my project is Trivy Misconfig"
      />
      <Blog
        tanggal="17 September 2022"
        judul="Trivy Misconfig"
        summary="my project is Trivy Misconfig"
      />
      <Blog
        tanggal="18 September 2022"
        judul="Trivy Misconfig"
        summary="my project is Trivy Misconfig"
      /> */}
    </div>
  );
}

export default Home;
