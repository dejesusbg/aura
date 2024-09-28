import React from "react";

import Header from "../components/Header";
import Footer from "../components/Footer";

function Container() {
  return (
    <div id="home">
      <section id="intro">
        <h3>Welcome to Aura: Your Habit-Tracking Companion!</h3>
        <h4>Discover Your Vibe</h4>
        <p>
          Aura isn’t just a habit tracker; it’s a lifestyle enhancer! Inspired by the Gen Z slang term “aura,” which
          represents one’s vibe, Aura helps you cultivate a positive and productive atmosphere in your life. The "by" in
          our name playfully nods to the theme of growth and vitality, embodied by our charming carrot mascot. Just like
          a rabbit hops toward its goals, you too can leap into new habits with Aura!
        </p>
      </section>

      <section id="benefits">
        <h4>Why Choose Aura?</h4>
        <ul>
          <li>
            <strong>Engaging Habit Tracking:</strong> Turn the mundane into motivation! Track your daily, weekly, and
            monthly habits with ease.
          </li>
          <li>
            <strong>Earn Points:</strong> For every task you complete, you earn points—making your journey towards
            better habits rewarding and fun.
          </li>
          <li>
            <strong>Redeem Rewards:</strong> Treat yourself! Use your hard-earned points to unlock exciting rewards that
            motivate you to keep going.
          </li>
          <li>
            <strong>User-Friendly Interface:</strong> Our sleek, responsive design ensures that you can access your
            habits and rewards from any device.
          </li>
        </ul>
      </section>

      <section id="features">
        <h4>Key Features</h4>
        <ul>
          <li>
            <strong>Custom Habit Tracking:</strong> Set personalized habits and watch your progress over time.
          </li>
          <li>
            <strong>Point System:</strong> A gamified approach that turns habit formation into an engaging experience.
          </li>
          <li>
            <strong>Reward Redemption:</strong> Choose from a variety of rewards to celebrate your achievements.
          </li>
          <li>
            <strong>Responsive Design:</strong> Access Aura from your computer, tablet, or smartphone, anytime and
            anywhere.
          </li>
        </ul>
      </section>

      <section id="community">
        <h4>Join the Aura Community</h4>
        <p>
          Are you ready to elevate your vibe and transform your habits? Join a community of like-minded individuals who
          are all on their journey toward self-improvement. Share tips, celebrate wins, and inspire each other along the
          way.
        </p>
      </section>

      <section id="getting-started">
        <h4>Get Started Today!</h4>
        <ol>
          <li>
            <strong>Clone the Repository:</strong> Dive into the code and customize Aura to fit your needs.
          </li>
          <li>
            <strong>Install the Application:</strong> Follow our easy installation guide to set it up locally.
          </li>
          <li>
            <strong>Track Your Progress:</strong> Start earning points and redeeming rewards right away!
          </li>
        </ol>
      </section>

      <section id="connect">
        <h4>Connect with Us</h4>
        <p>
          Have questions or suggestions? We’d love to hear from you! Reach out through our GitHub repository, where you
          can open issues or submit pull requests.
        </p>
        <p>Aura is licensed under the MIT License, allowing you to use, modify, and distribute the software freely.</p>
        <h4>Explore Aura Now!</h4>
        <p>
          Ready to jump in? Check out the live application <a href="https://auraby.netlify.app/">here</a> and start
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
