import React from "react";
import data from "../data/cvData.json";

function Education() {
    return (
        <div className="p-4">
            <h2 className="text-xl font-bold mb-2">Formazione</h2>
            {data.education.map((edu, i) => (
                <div key={i} className="mb-4">
                    <p className="font-semibold">{edu.school}</p>
                    <p>{edu.degree}</p>
                    <p className="text-sm text-gray-600">{edu.date}</p>
                </div>
            ))}
        </div>
    );
}

export default Education;
