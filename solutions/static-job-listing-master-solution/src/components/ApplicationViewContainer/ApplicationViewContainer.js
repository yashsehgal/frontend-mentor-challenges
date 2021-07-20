
import React, { useState } from 'react';
import './style.css';
import JobData from '../../data/JobData'
import JobDetailsCard from '../JobDetailsCard/JobDetailsCard';

export default function ApplicationViewContainer() {

  const [jobData] = useState(JobData.job_data);

  return (
    <div className="ApplicationViewContainer">
      {jobData.map((job_role_details) => (
        <JobDetailsCard CompanyLogoImage={job_role_details.company_logo_image} 
          CompanyName={job_role_details.company_name}
          RelevantTags={job_role_details.relevant_tags}
          CompanyJobTitle={job_role_details.company_job_title}
          CompanyJobUpdateDuration={job_role_details.company_job_update_duration}
          JobType={job_role_details.job_type}
          JobLocation={job_role_details.job_location}
          JobSkillTags={job_role_details.job_skill_tags}
        />
      ))}
    </div>
  )
}