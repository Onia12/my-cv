import React from "react";
import data from "../data/cvData.json";

function Experience({ selectedExperience }) {
    const filtered = selectedExperience === "all"
        ? data.experiences
        : data.experiences.filter(exp => exp.company === selectedExperience);

    return (
        <div className="p-4">
            <h2 className="text-2xl font-bold mb-4">Esperienze</h2>
            {filtered.map((exp, i) => (
                <div key={i} className="mb-4 border-b pb-2">
                    <h3 className="text-xl font-semibold">{exp.role} - {exp.company}</h3>
                    <p className="text-sm text-gray-600">{exp.period}</p>
                    <ul className="list-disc list-inside ml-4 mt-1">
                        {exp.details.map((item, idx) => (
                            <li key={idx}>{item}</li>
                        ))}
                    </ul>
                </div>
            ))}
        </div>
    );
}

export default Experience;
