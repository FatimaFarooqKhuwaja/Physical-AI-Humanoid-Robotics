import React from 'react';
import StaticChatbot from './StaticChatbot';

function HomeHero() {
  return (
    <div
      className="hero hero--primary hero--showcase"
      style={{
        background: "#0d0d0d",
        color: "white",
        padding: "4rem 1rem",
      }}
    >
      <div
        className="container"
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          gap: "3rem",
          flexWrap: "wrap",
        }}
      >
        {/* LEFT SIDE – TEXT CONTENT */}
        <div style={{ maxWidth: "480px", textAlign: "left" }}>
          <h1
            className="hero__title"
            style={{ fontSize: "3rem", marginBottom: "1rem", lineHeight: "1.2" }}
          >
            Welcome to the Physical AI Humanoid Robotics Book!
          </h1>

          <p className="hero__subtitle" style={{ opacity: 0.8, fontSize: "1.2rem" }}>
            A premium resource for AI-Native Driven Development.
          </p>

          <p className="hero__subtitle" style={{ opacity: 0.8, marginBottom: "2rem" }}>
            By Fatima Farooq
          </p>

          <div className="hero__buttons">
            <a
              href="/docs/introduction/what-is-physical-ai"
              className="button button--secondary button--lg"
            >
              Start Reading
            </a>
            
          </div>
          
        </div>

        {/* RIGHT SIDE – BOOK IMAGE */}
        <div style={{ display: "flex", justifyContent: "center" }}>
          
          <img
            src="data:image/jpeg;base64,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"
            alt="Book Cover"
            style={{
              width: "260px",
              borderRadius: "12px",
              boxShadow: "0 8px 25px rgba(0,0,0,0.6)",
            }}
          />
          
        </div>
        
      </div>
      <StaticChatbot />
    </div>
  );
}

export default HomeHero;
