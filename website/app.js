
const _projectDetailsContainer = document.createElement('div');
const TagsWrapper = document.getElementById('project-tags-wrapper');
+
const ProjectData = {
  'ProjectData': [
    {
      'project_name': 'Intro component with signup form',
      'project_path': 'intro-component-with-signup-form-master-solution',
      'challenge_url': 'https://www.frontendmentor.io/challenges/intro-component-with-signup-form-5cf91bd49edda32581d28fd1',
      'skill_tag': [
        {
          'color': 'green',
          'tag': 'HTML'
        },
        {
          'color': 'purple',
          'tag': 'CSS'
        },
        {
          'color': 'blue',
          'tag': 'Javascript'
        },
        {
          'color': 'red',
          'tag': 'React JS'
        }
      ]
    }
  ]
};

ProjectData.ProjectData.map((_projectData) => async function() {
  let ProjectCard = document.createElement('div');
  ProjectCard.classList.add('project-card');

  let ProjectName = document.createElement('h2');
  ProjectName.classList.add('project-name');
  ProjectName.textContent = _projectData.project_name;

  let ProjectPath = document.createElement('a');
  ProjectPath.classList.add('project-path');
  ProjectPath.href = `./solutions/${ProjectPath}/index.html`;

  let ChallengePath = document.createElement('a');
  ChallengePath.classList.add('challenge-path');
  ChallengePath.href = _projectData.challenge_url;
  ChallengePath.target = '_blank';

  _projectData.skill_tag.map((_skill_tag) => async function() {
    let skillTag = document.createElement('span');
    skillTag.classList.add('skill-tag');
    skillTag.classList.add(`color-${_skill_tag.color}`);

    TagsWrapper.append(skillTag);
  })
  ProjectCard.append(ProjectName);
  ProjectCard.append(ProjectPath);
  ProjectCard.append(TagsWrapper);

  _projectDetailsContainer.append(ProjectCard)
});

document.getElementById('project-details-container').appendChild(_projectDetailsContainer);