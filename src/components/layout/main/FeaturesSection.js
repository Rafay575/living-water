"use client";
import Image from "next/image";

export default function FeaturesSection() {
  // Living Water features
  const leftFeatures = [
    {
      title: "100% Natural Filtration",
      description: "No pumps, no chemicals—just gravity and ancient lava rock.",
      icon: "💧",
    },
    {
      title: "Mineral-Rich",
      description: "Naturally packed with life-giving minerals for optimal hydration.",
      icon: "🪨",
    },
  ];

  const rightFeatures = [
    {
      title: "Vibrant Longevity",
      description: "Inspired by villagers who thrive well past 100 years.",
      icon: "🎉",
    },
    {
      title: "Eco-Conscious",
      description: "Sourced responsibly from a protected Costa Rican spring.",
      icon: "🌿",
    },
  ];

  return (
    <section className="features-section">
      <div className="container">
        <div className="features-grid">
          {/* Left Features */}
          <div className="feature-column left-column">
            {leftFeatures.map((feature, index) => (
              <FeatureBubble key={index} feature={feature} />
            ))}
          </div>

          {/* Center Text + Splash Image */}
          <div className="feature-image">
            <Image
              src="/img/splashes.png" // your splash image
              alt="Lava-filtered spring water"
              layout="fill"
              className="image"
              priority
            />
            <div className="image-overlay">
              <h2 className="image-text">
                Pure, Lava-Filtered <br /> Mineral Water
              </h2>
            </div>
          </div>

          {/* Right Features */}
          <div className="feature-column right-column">
            {rightFeatures.map((feature, index) => (
              <FeatureBubble key={index} feature={feature} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function FeatureBubble({ feature }) {
  return (
    <div className="feature-bubble">
      <div className="feature-icon">{feature.icon}</div>
      <h3 className="feature-title">{feature.title}</h3>
      <p className="feature-description">{feature.description}</p>
    </div>
  );
}
