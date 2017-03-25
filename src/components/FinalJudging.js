import React from 'react'
import Total from '../components/Total'
import ReviewResults from '../components/ReviewResults/ReviewResults'
import Slider from 'material-ui/Slider'

const FinalJudging = ({ children, teamLetter, onChange, votes}) => {

  const styles = {
    container: {
      margin: '4px 10px',
      height: 'calc(100vh - 56px)',
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'space-around',
      alignContent: 'stretch',
      alignItems: 'stretch'
    },
    annotation: {
      display: 'flex',
      justifyContent: 'flex-start',
      alignContent: 'stretch',
      alignItems: 'flex-start'
    },
    slider: {
      flex: '1 1 auto'
    },
    info: {
      flex: '0 1 auto',
      width: '4em',
      fontSize: '26px'
    }
  };

  const teamwork = votes.find((obj) =>
    (obj.id === `teamwork-team-${teamLetter}`)
  ) || {value: 0};

  const music = votes.find((obj) =>
    (obj.id === `music-team-${teamLetter}`)
  ) || {value: 0};

  const flow = votes.find((obj) =>
    (obj.id === `flow-team-${teamLetter}`)
  ) || {value: 0};

  const variety = votes.find((obj) =>
    (obj.id === `variety-team-${teamLetter}`)
  ) || {value: 0};

  const generalImpression = votes.find((obj) =>
    (obj.id === `general-impression-team-${teamLetter}`)
  ) || {value: 0};

  const sliders = [
    {
      type: 'teamwork',
      label: 'Teamwork',
      value: teamwork.value
    },
    {
      type: 'music',
      label: 'Music',
      value: music.value
    },
    {
      type: 'flow',
      label: 'Flow',
      value: flow.value
    },
    {
      type: 'variety',
      label: 'Variety',
      value: variety.value
    },
    {
      type: 'general-impression',
      label: 'General Impr.',
      value: generalImpression.value
    }
  ];

  return (
    <div style={styles.container}>
      {sliders.map((obj)=>
        <div style={styles.annotation} key={`${obj.type}-team-${teamLetter}`}>
          <div style={styles.info}>
            <div>{obj.label}</div>
            <Total type={`${obj.type}-team-${teamLetter}`} startingPoint="0.0" />
          </div>
          <div style={styles.slider}>
            <Slider
              min={0}
              max={2}
              step={0.5}
              defaultValue={0}
              value={obj.teamwork}
              onChange={(e,v) => onChange(e, v, obj.type)}
              name={obj.type}
            />
          </div>
          <div style={styles.info}>
            <ReviewResults type={`teamwork-team-${teamLetter}-annotation`} />
          </div>
        </div>
      )}
    </div>
  );
};

export default FinalJudging
