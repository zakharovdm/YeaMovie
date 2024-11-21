import { Footer } from "@/widgets/footer";
import { Header } from "@/widgets/header";


function BaseLayout () {
  return (
    <div className="container">
      <Header />
      <main></main>
      <Footer />
    </div>
  )
}

export default BaseLayout;