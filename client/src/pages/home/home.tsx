import { use, useState } from "react";
import "./home.css";

interface UserStory {
  name: string;
  story: string;
}

export default function Home() {
  const userStories: UserStory[] = [
    {
      name: "Emily",
      story:
        "I used to struggle with keeping track of my expenses, but this app has been a game-changer. It gives me a clear picture of where my money is going and helps me stay on top of my budget.",
    },
    {
      name: "Michael",
      story:
        "I love how this app allows me to set financial goals and track my progress. It's motivating to see how small changes in my spending habits can lead to big savings over time.",
    },
    {
      name: "Sophia",
      story:
        "As a freelancer, my income can be unpredictable. This app helps me manage my cash flow and plan for the future. I can easily see when I have extra money to invest or save for a rainy day.",
    },
    {
      name: "David",
      story:
        "I appreciate the detailed reports and analytics this app provides. It helps me make informed decisions about my finances and plan for major expenses.",
    },
  ];
  const [storySelectedName, setStorySelectedName] = useState<string>(
    userStories[0].name,
  );
  const [storySelectedIndex, setStorySelectedIndex] = useState<number>(0);

  const [storySelectedStory, setSelectedStory] = useState<string>(
    userStories[0].story,
  );

  const handleClick = (i: number) => {
    setStorySelectedName(userStories[i].name);
    setSelectedStory(userStories[i].story);
    setStorySelectedIndex(i);
  };

  return (
    <>
      <section className="hero-section">
        <div className="text">
          <div className="title">
            <h1>Welcome to the Personal Finance Tracker</h1>
          </div>
          <div className="description">
            <h2>Take Control of Your Money with Clarity and Confidence</h2>
            <p>
              Track your income, expenses, savings, and investments in one
              intuitive dashboard. Gain real-time insights into where your money
              goes, set meaningful financial goals, and build smarter habits
              backed by clear data. Whether you're budgeting monthly expenses or
              planning long-term wealth, this tracker gives you the structure
              and visibility to stay in control.
            </p>
          </div>
        </div>
      </section>
      <div className="stories">
        <h2 className="stories-title">People who we have helped</h2>
        <div className="story-cards">
          <h3 className="story-name">{storySelectedName}'s Story</h3>
          <p className="story-description">{storySelectedStory}</p>
          <div className="story-buttons-group">
            {userStories.map((element, index) => (
              <button
                key={index}
                onClick={() => handleClick(index)}
                className="story-buttons"
              >
                {element.name}
              </button>
            ))}
          </div>
        </div>
      </div>
      <div className="pricing">
        <h2>Choose your plan</h2>
      </div>
    </>
  );
}
