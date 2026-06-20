import React, { useState, useEffect } from "react";

import Sidebar from "./components/Sidebar";
import Header from "./components/Header";
import Dashboard from "./components/Dashboard";
import TopicContent from "./components/TopicContent";
import QuizSection from "./components/QuizSection";
import Certificate from "./components/Certificate";
import Footer from "./components/Footer";

import topicsData from "./data/reactTopics.json";

import "./styles/app.css";

function App() {
  const [topics] = useState(topicsData);

  const [selectedTopic, setSelectedTopic] = useState(
    topicsData.length > 0 ? topicsData[0] : null
  );

  const [searchTerm, setSearchTerm] = useState("");

  const [completedTopics, setCompletedTopics] =
    useState([]);

  const [totalScore, setTotalScore] =
    useState(0);

  const [showCertificate, setShowCertificate] =
    useState(false);

  const [studentName] =
    useState("Sahakar");

  useEffect(() => {
    const savedCompleted =
      JSON.parse(
        localStorage.getItem(
          "completedTopics"
        )
      ) || [];

    const savedScore =
      JSON.parse(
        localStorage.getItem(
          "totalScore"
        )
      ) || 0;

    setCompletedTopics(savedCompleted);
    setTotalScore(savedScore);
  }, []);

  useEffect(() => {
    localStorage.setItem(
      "completedTopics",
      JSON.stringify(completedTopics)
    );

    localStorage.setItem(
      "totalScore",
      JSON.stringify(totalScore)
    );
  }, [completedTopics, totalScore]);

  const filteredTopics = topics.filter(
    (topic) =>
      topic.title
        .toLowerCase()
        .includes(
          searchTerm.toLowerCase()
        )
  );

  const handleQuizComplete = (
    score
  ) => {
    setTotalScore(
      (prevScore) =>
        prevScore + score
    );

    if (
      selectedTopic &&
      !completedTopics.includes(
        selectedTopic.id
      )
    ) {
      setCompletedTopics([
        ...completedTopics,
        selectedTopic.id,
      ]);
    }
  };

  const progress =
    topics.length > 0
      ? Math.round(
          (completedTopics.length /
            topics.length) *
            100
        )
      : 0;

  useEffect(() => {
    if (
      topics.length > 0 &&
      completedTopics.length ===
        topics.length
    ) {
      setShowCertificate(true);
    }
  }, [
    completedTopics,
    topics.length,
  ]);

  return (
    <div className="app-container">

      <Sidebar
        topics={filteredTopics}
        selectedTopic={
          selectedTopic
        }
        setSelectedTopic={
          setSelectedTopic
        }
      />

      <div className="main-content">

        <Header
          searchTerm={
            searchTerm
          }
          setSearchTerm={
            setSearchTerm
          }
        />

        <Dashboard
          totalTopics={
            topics.length
          }
          completedTopics={
            completedTopics.length
          }
          score={
            totalScore
          }
          progress={
            progress
          }
        />

        {selectedTopic && (
          <>
            <TopicContent
              topic={
                selectedTopic
              }
            />

            <QuizSection
              mcqs={
                selectedTopic.mcqs
              }
              onQuizComplete={
                handleQuizComplete
              }
            />
          </>
        )}

        {showCertificate && (
          <Certificate
            studentName={
              studentName
            }
            score={
              totalScore
            }
          />
        )}

         <Footer />


      </div>

    </div>
  );
}

export default App;