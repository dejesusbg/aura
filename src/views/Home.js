import React from "react";

import Header from "components/Header";
import Footer from "components/Footer";

function Container() {
  return (
    <div id="home">
      <section id="intro">
        <h3>Welcome to Aura: Your Habit-Tracking Companion!</h3>
        <p>
          Aura isn’t just a habit tracker; it’s a tool to help you live better. Inspired by the Gen Z term “aura”, which
          represents your vibe, helping you cultivate a positive atmosphere. Our logo, a carrot reflects growth and
          vitality, just like a rabbit hops toward its goals, you too can leap into better habits with Aura.
        </p>
      </section>

      <section id="benefits">
        <h4>Why Choose Aura?</h4>
        <p>
          Aura makes habit tracking fun and rewarding. With a simple interface, you can track your habits daily, weekly,
          and monthly. Each task you complete earns you points, turning the process into a motivating game. You can then
          redeem your points for exciting rewards, pushing you to continue improving.
        </p>
        <p>
          We offer personalized habit tracking, allowing you to set your goals and monitor your progress over time. Our
          point system adds a gamified element, making habit formation engaging. Plus, you can unlock rewards as you go
          and access the app from any device with our responsive design.
        </p>
      </section>

      <section id="connect">
        <h4>Connect with Us</h4>
        <p>
          If you have any questions or feedback, we’d love to hear from you! Reach out through our GitHub repository to
          open issues or submit pull requests. Aura is licensed under the MIT License, giving you the freedom to use,
          modify, and distribute the software as you wish.
        </p>
        <p>
          Ready to get started? Check out the live app <a href="https://auraby.netlify.app/">here</a> and start
          transforming your habits today!
        </p>
      </section>
    </div>
  );
}

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Container />
      </main>
      <Footer />
    </>
  );
}
