import React, { useState } from "react";
import "./App.css";
import Navbar from "./components/Navbar";
import ChiSono from "./components/ChiSono";
import Education from "./components/Education";
import Experience from "./components/Experience";

function App() {
    const [selectedSection, setSelectedSection] = useState("about");
    const [selectedExperience, setSelectedExperience] = useState("all");

    return (
        <div className="font-sans">
            <Navbar
                selectedSection={selectedSection}
                setSelectedSection={setSelectedSection}
                selectedExperience={selectedExperience}
                setSelectedExperience={setSelectedExperience}
            />

            {selectedSection === "about" && <ChiSono />}
            {selectedSection === "education" && <Education />}
            {selectedSection === "experience" && (
                <Experience selectedExperience={selectedExperience} />
            )}
        </div>
    );
}

export default App;
