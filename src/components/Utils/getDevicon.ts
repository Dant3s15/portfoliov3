const getDevicon = (skill = "javascript", modifier = "original") => {
  const skillLowerCase = skill.toLowerCase();
  const modifierLowerCase = modifier.toLowerCase();

  return `https://cdn.jsdelivr.net/gh/devicons/devicon/icons/${skillLowerCase}/${skillLowerCase}-${modifierLowerCase}.svg`;
};

export default getDevicon;
