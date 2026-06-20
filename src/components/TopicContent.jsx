import React from "react";

const TopicContent = ({
  topic,
}) => {

  if (!topic) {
    return (
      <div>
        Select a topic
      </div>
    );
  }

  return (
    <div className="content-card">

      <h2>{topic.title}</h2>

      <h3>Definition</h3>

      <p>
        {topic.definition}
      </p>

      <h3>Explanation</h3>

      <p>
        {topic.explanation}
      </p>

      <h3>Example</h3>

      <pre>
        <code>
          {topic.example}
        </code>
      </pre>

    </div>
  );
};

export default TopicContent;