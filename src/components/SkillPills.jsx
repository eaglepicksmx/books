import React from "react";

export function SkillPills({ skills, small = false }) {
  return (
    <div className={`skill-pills ${small ? "small" : ""}`}>
      {skills.map((skill) => (
        <span key={skill}>{skill}</span>
      ))}
    </div>
  );
}
