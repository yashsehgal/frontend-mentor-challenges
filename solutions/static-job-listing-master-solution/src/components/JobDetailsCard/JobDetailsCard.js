import React, { useState } from 'react';
import './style.css';
import ImageExports from '../../data/ExportImageData';

export default function JobDetailsCard(JobDetails) {
  
  const [relevantTagsData] = useState(JobDetails.RelevantTags);
  const [jobSkillTagsData] = useState(JobDetails.JobSkillTags);

  return (
    <div className="JobDetailsCard">
      <div className="job-description-wrapper">
        <img src={ImageExports[JobDetails.CompanyLogoImage]} alt={JobDetails.CompanyName} className="company-logo-image" />
        <div className="job-description-content">
          <div className="job-description-header">
            <p className="company-name">{JobDetails.CompanyName}</p>
            <div className="relevant-tags-wrapper">
              {relevantTagsData.map((relevant_tag_data) => {
                return (
                  <span className="relevant-tag">{relevant_tag_data.tag}</span>
                )
              })}
            </div>
          </div>
          <h2 className="company-job-title">{JobDetails.CompanyJobTitle}</h2>
          <div className="job-description-footer">
            <p className="company-job-update-duration">{JobDetails.CompanyJobUpdateDuration}</p>
            <p className="job-type">{JobDetails.JobType}</p>
            <p className="job-location">{JobDetails.JobLocation}</p>
          </div>
        </div>
      </div>
      <div className="job-tags-wrapper">
        {jobSkillTagsData.map((job_skills_tag_data) => {
          return (
            <span className="job-skill-tag">{job_skills_tag_data.tag}</span>
          )
        })}
      </div>
    </div>
  )
}