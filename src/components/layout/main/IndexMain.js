import Blogs2 from "@/components/sections/blogs/Blogs2";
import Features4 from "@/components/sections/features/Features4";
import Hero1 from "@/components/sections/hero-banners/Hero1";
import HotDeal3 from "@/components/sections/hot-deals/HotDeal3";
import Offer4 from "@/components/sections/offers/Offer4";
import FeaturedProducts from "@/components/sections/products/FeaturedProducts";
import Products3 from "@/components/sections/products/Products3";
import Testimonials3 from "@/components/sections/testimonils/Testimonials3";
import Video from "@/components/sections/videos/Video";
import FeaturesSection from "./FeaturesSection";
import PromoSection from "./PromoSection";

const IndexMain = () => {
  return (
    <main>
      <Hero1 />
     
     <FeaturesSection />
     <PromoSection />

      <Video />
      <Testimonials3 />
     

    </main>
  );
};

export default IndexMain;
