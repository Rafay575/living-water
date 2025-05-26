import FeatureCard3 from "@/components/shared/cards/FeatureCard3";
import { BiDroplet, BiLeaf } from "react-icons/bi";
import { FaBirthdayCake } from "react-icons/fa";
function getAllFeatues() {
  return [
    {
      id: 1,
      title: "100% Natural Filtration",
      desc: "No pumps, no chemicals—just gravity and ancient lava rock.",
      icon: <BiDroplet size={48} className="text-white" />,
      path: "/shop",
    },
    {
      id: 2,
      title: "Mineral-Rich",
      desc: "Naturally packed with life-giving minerals for optimal hydration.",
      icon: <BiLeaf size={48} className="text-white" />,
      path: "/shop",
    },
    {
      id: 3,
      title: "Vibrant Longevity",
      desc: "Inspired by villagers who thrive well past 100 years.",
      icon: <FaBirthdayCake size={48} className="text-white" />,
      path: "/shop",
    },
   
  ];
}
const Features6 = () => {
  const services = getAllFeatues()?.filter(({ id }) => id > 0 && id < 4);

  return (
    <div className="ltn__feature-area ltn__primary-bg pt-115 pb-90">
      <div className="container">
        <div className="row">
          <div className="col-lg-12">
            <div className="section-title-area ltn__section-title-2 text-center">
              <h6 className="section-subtitle ltn__secondary-color">
                {"//"} features {"//"}
              </h6>
              <h1 className="section-title white-color">
                Why Choose Us<span>.</span>
              </h1>
            </div>
          </div>
        </div>
        <div className="row justify-content-center">
          {services?.map((feature, idx) => (
            <div key={idx} className="col-xl-4 col-sm-6 col-12">
              <FeatureCard3 feature={feature} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Features6;
