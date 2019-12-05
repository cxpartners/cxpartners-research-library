const randomColour = () => {
  const colours = [
    '#E6F8FC',
    '#F0F9ED',
    '#FCF0EE',
    '#EEF0F7',
    '#FEF7E8',
    '#E6F8FC',
    '#F0F9ED',
    '#FCF0EE',
  ];
  return (
    colours[Math.floor(Math.random() * colours.length)]
  );
};

export default randomColour;
