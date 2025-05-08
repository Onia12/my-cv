import React from "react";

function Navbar({ selectedSection, setSelectedSection, selectedExperience, setSelectedExperience }) {
    return (
        <nav className="flex flex-col gap-3 sm:flex-row sm:justify-between sm:items-center bg-gray-900 text-white px-4 py-4 shadow-md">
            <div className="flex flex-col sm:flex-row gap-2 sm:gap-4">
                {["about", "education", "experience"].map((sec) => (
                    <button
                        key={sec}
                        onClick={() => setSelectedSection(sec)}
                        className={`px-3 py-2 text-sm sm:text-base rounded hover:bg-gray-700 transition ${
                            selectedSection === sec ? "font-bold underline" : ""
                        }`}
                    >
                        {sec === "about" ? "Chi sono" : sec === "education" ? "Educazione" : "Esperienze"}
                    </button>
                ))}
            </div>

            {selectedSection === "experience" && (
                <select
                    value={selectedExperience}
                    onChange={(e) => setSelectedExperience(e.target.value)}
                    className="bg-white text-black rounded px-3 py-2 text-sm"
                >
                    <option value="all">Tutte</option>
                    <option value="QOTA">QOTA</option>
                    <option value="CTE SpA">CTE SpA</option>
                </select>
            )}
        </nav>
    );
}

export default Navbar;
