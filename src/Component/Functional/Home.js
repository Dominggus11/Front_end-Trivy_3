import React from "react";
import Blog from "./Blog";
import "./CSS/Blog.css";
function Home() {
  return (
    <div className="Home">
      <Blog
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
      />
    </div>
  );
}

export default Home;
