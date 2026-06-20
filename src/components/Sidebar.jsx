import React from "react";

const Sidebar = ({
  topics,
  selectedTopic,
  setSelectedTopic,
}) => {
  return (
    <div className="sidebar">
      <div className="logo">
        React Mastery
      </div>

      <div className="topic-list">
        {topics.map((topic) => (
          <div
            key={topic.id}
            className={
              selectedTopic?.id === topic.id
                ? "topic active"
                : "topic"
            }
            onClick={() =>
              setSelectedTopic(topic)
            }
          >
            {topic.title}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Sidebar;