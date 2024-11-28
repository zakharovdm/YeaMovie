import { Footer } from "@/widgets/footer";
import { Header } from "@/widgets/header";
import { Outlet } from "react-router-dom";


function BaseLayout () {
  return (
    <div className="container">
      <Header />
      <Outlet />
      <Footer />
    </div>
  )
}

export default BaseLayout;