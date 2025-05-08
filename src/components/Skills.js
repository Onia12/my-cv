import React from "react";
import data from "../data/cvData.json";

function Skills() {
    const { skills } = data;

    return (
        <div className="p-4">
            <h2 className="text-xl font-bold mb-2">Competenze</h2>
            {Object.entries(skills).map(([category, items], i) => (
                <div key={i} className="mb-4">
                    <h3 className="font-semibold capitalize">{category}</h3>
                    <ul className="list-disc list-inside ml-4">
                        {items.map((skill, idx) => (
                            <li key={idx}>{skill}</li>
                        ))}
                    </ul>
                </div>
            ))}
        </div>
    );
}

export default Skills;
