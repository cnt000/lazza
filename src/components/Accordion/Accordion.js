import React from 'react';
import VoteContainer from '../../containers/VoteContainer';
import FieldContainer from '../../containers/FieldContainer';
import PlayContainer from '../../containers/PlayContainer';
import GameTypeContainer from '../../containers/GameTypeContainer';
import SelectContainer from '../../containers/SelectContainer';
import SendResponseContainer from '../../containers/SendResponseContainer';
import ReviewResults from '../../components/ReviewResults/ReviewResults';
import VoteRow from '../../components/VoteRow/VoteRow';
import Total from '../../components/Total';
import WinnerBadge from '../../components/WinnerBadge';
import './Accordion.css';

var Section = React.createClass({
  handleClick: function(){
    if(this.state.open) {
      this.setState({
        open: false,
        class: "section"
      });
    }else{
      this.setState({
        open: true,
        class: "section open"
      });
    }
  },
  getInitialState: function(){
     return {
       open: false,
       class: "section"
     }
  },
  render: function() {
    return (
      <div className={this.state.class}>
        <button className="accordion-toggle">toggle</button>
        <div className="sectionhead" onClick={this.handleClick}>{this.props.title}</div>
        <div className="articlewrap">
          <div className="article">
            {this.props.children}
          </div>
        </div>
      </div>
    );
  }
});

var Accordion = React.createClass({

  render: function() {
    return (
      <div className="main-accordion">
        <div className="title">{this.props.title}</div>
        <Section title="1 - Registration">
          <div>
            <div id="JudgeName">
              <span>Judge</span>
              <FieldContainer type="judge" />
            </div>
            <div id="gameType">
              Type of game
              <GameTypeContainer type="gametype" />
            </div>
            <div className="playersTeam">
              <div className="playersTeamTitle">Team A name:</div>
              <FieldContainer type="team-name-A" />
            </div>
            <div className="playersTeam">
              <div className="playersTeamTitle">Team B name:</div>
              <FieldContainer type="team-name-B" />
            </div>
            <br/>
          </div>
        </Section>
        <Section title="2 - Players">
          <div>
              <div className="playersTeam">
                <div className="playersTeamTitle">
                  Players Team A:
                  </div>
                <div className="playerTeamEntry">
                <SelectContainer type="player-name-A1" />
                <PlayContainer type="player-play-A1" />

                </div>
                <div className="playerTeamEntry">
                <SelectContainer type="player-name-A2" />
                <PlayContainer type="player-play-A2" />

                </div>
                <div className="playerTeamEntry">
                <SelectContainer type="player-name-A3" />
                <PlayContainer type="player-play-A3" />

                </div>
                <div className="playerTeamEntry">
                <SelectContainer type="player-name-A4" />
                <PlayContainer type="player-play-A4" />

                </div>
                <div className="playerTeamEntry">
                <SelectContainer type="player-name-A5" />
                <PlayContainer type="player-play-A5" />
                </div>
              </div>
              <div className="playersTeam">
                <div className="playersTeamTitle">
                Team B:
                </div>
                <div className="playerTeamEntry">
                <SelectContainer type="player-name-B1" />
                <PlayContainer type="player-play-B1" />

                </div>
                <div className="playerTeamEntry">
                <SelectContainer type="player-name-B2" />
                <PlayContainer type="player-play-B2" />

                </div>
                <div className="playerTeamEntry">
                <SelectContainer type="player-name-B3" />
                <PlayContainer type="player-play-B3" />

                </div>
                <div className="playerTeamEntry">
                <SelectContainer type="player-name-B4" />
                <PlayContainer type="player-play-B4" />

                </div>
                <div className="playerTeamEntry">
                <SelectContainer type="player-name-B5" />
                <PlayContainer type="player-play-B5" />
              </div>
              </div>
          </div>
        </Section>
        <Section title="3 - Team A - Live judging">
          <div className="vote-row">
              <div className="playersTeamTitle">Difficulty</div>
              <br/>
              <VoteContainer type="difficulty-team-A" weight="-0.5" oneshot="false" nameClass="bad circleBtn vote">BAD</VoteContainer>
              <VoteContainer type="difficulty-team-A" weight="-0.25" oneshot="false" nameClass="not-good circleBtn" >NOT GOOD</VoteContainer>
              <VoteContainer type="difficulty-team-A" weight="0" oneshot="false" nameClass="medium circleBtn" >MEDIUM</VoteContainer>
              <VoteContainer type="difficulty-team-A" weight="0.25" oneshot="false" nameClass="good circleBtn" >GOOD</VoteContainer>
              <VoteContainer type="difficulty-team-A" weight="0.5" oneshot="false" nameClass="amazing circleBtn">AMAZING</VoteContainer>
              <br/>
              Result: <Total type="difficulty-team-A" />
          </div>
          <div>
            <VoteRow type="execution-team-A">
              <div className="playersTeamTitle">Execution</div>
              <br/>
              <VoteContainer type="execution-team-A" weight="-0.1" oneshot="false" nameClass="medium circleBtn">MINOR</VoteContainer>
              <VoteContainer type="execution-team-A" weight="-0.3" oneshot="false" nameClass="bad circleBtn">DROP</VoteContainer>
              <br/>
              Result: <Total type="execution-team-A" />
            </VoteRow>
          </div>
          //----- Under this line it's only an annotation, not final vote -----
          <div className="vote-row annotation-block">
            <div>
              <div className="playersTeamTitle">Teamwork</div>
              <br/>
              <VoteContainer type="teamwork-team-A-annotation" weight="-1" oneshot="false" nameClass="bad circleBtn">-</VoteContainer>
              <VoteContainer type="teamwork-team-A-annotation" weight="1" oneshot="false" nameClass="amazing circleBtn">+</VoteContainer>
              <ReviewResults type="teamwork-team-A-annotation" />
            </div>
            <div>
              <div className="playersTeamTitle">Music</div>
              <br/>
              <VoteContainer type="music-team-A-annotation" weight="-1" oneshot="false" nameClass="bad circleBtn">-</VoteContainer>
              <VoteContainer type="music-team-A-annotation" weight="1" oneshot="false" nameClass="amazing circleBtn">+</VoteContainer>
              <ReviewResults type="music-team-A-annotation" />
            </div>
            <div>
              <div className="playersTeamTitle">Flow</div>
              <br/>
              <VoteContainer type="flow-team-A-annotation" weight="-1" oneshot="false" nameClass="bad circleBtn">-</VoteContainer>
              <VoteContainer type="flow-team-A-annotation" weight="1" oneshot="false" nameClass="amazing circleBtn">+</VoteContainer>
              <ReviewResults type="flow-team-A-annotation" />
            </div>
            <div>
              <div className="playersTeamTitle">Variety</div>
              <br/>
              <VoteContainer type="variety-team-A-annotation" weight="-1" oneshot="false" nameClass="bad circleBtn">-</VoteContainer>
              <VoteContainer type="variety-team-A-annotation" weight="1" oneshot="false" nameClass="amazing circleBtn">+</VoteContainer>
              <ReviewResults type="variety-team-A-annotation" />
            </div>
            <div>
              <div className="playersTeamTitle">General Imp.</div>
              <br/>
              <VoteContainer type="general-impression-team-A-annotation" weight="-1" oneshot="false" nameClass="bad circleBtn">-</VoteContainer>
              <VoteContainer type="general-impression-team-A-annotation" weight="1" oneshot="false" nameClass="amazing circleBtn">+</VoteContainer>
              <ReviewResults type="general-impression-team-A-annotation" />
            </div>
          </div>
        </Section>
        <Section title="4 - Team A - Review and Artistic Impression">
          <h2>REVIEW DIFFICULTY / EXECUTION</h2>
          <div className="vote-row">
            <div className="playersTeamTitle">Difficulty Review:</div>
            <ReviewResults type="difficulty-team-A" />
            <br/>
            <div className="playersTeamTitle">Execution Review:</div>
            <ReviewResults type="execution-team-A" />
          </div>
          <h2>VOTE ARTISTIC IMPRESSION</h2>
          <div className="vote-row">
            <div className="playersTeamTitle">Teamwork</div>
            <Total type="teamwork-team-A" />
            <VoteContainer type="teamwork-team-A" weight="0" oneshot="true"nameClass="bad circleBtn vote">BAD</VoteContainer>
            <VoteContainer type="teamwork-team-A" weight="0.5" oneshot="true" nameClass="not-good circleBtn" >NOT GOOD</VoteContainer>
            <VoteContainer type="teamwork-team-A" weight="1" oneshot="true"nameClass="medium circleBtn" >MEDIUM</VoteContainer>
            <VoteContainer type="teamwork-team-A" weight="1.5" oneshot="true"nameClass="good circleBtn" >GOOD</VoteContainer>
            <VoteContainer type="teamwork-team-A" weight="2" oneshot="true" nameClass="amazing circleBtn">AMAZING</VoteContainer>
            <br/>
            Previous annotations: <ReviewResults type="teamwork-team-A-annotation" />
          </div>
          <div className="vote-row">
            <div className="playersTeamTitle">Music</div>
            <Total type="music-team-A" />
            <VoteContainer type="music-team-A" weight="0" oneshot="true"nameClass="bad circleBtn vote">BAD</VoteContainer>
            <VoteContainer type="music-team-A" weight="0.5" oneshot="true" nameClass="not-good circleBtn" >NOT GOOD</VoteContainer>
            <VoteContainer type="music-team-A" weight="1" oneshot="true"nameClass="medium circleBtn" >MEDIUM</VoteContainer>
            <VoteContainer type="music-team-A" weight="1.5" oneshot="true"nameClass="good circleBtn" >GOOD</VoteContainer>
            <VoteContainer type="music-team-A" weight="2" oneshot="true" nameClass="amazing circleBtn">AMAZING</VoteContainer>
            <br/>
            Previous annotations: <ReviewResults type="music-team-A-annotation" />
          </div>
          <div className="vote-row">
            <div className="playersTeamTitle">Flow</div>
            <Total type="flow-team-A" />
            <VoteContainer type="flow-team-A" weight="0" oneshot="true"nameClass="bad circleBtn vote">BAD</VoteContainer>
            <VoteContainer type="flow-team-A" weight="0.5" oneshot="true" nameClass="not-good circleBtn" >NOT GOOD</VoteContainer>
            <VoteContainer type="flow-team-A" weight="1" oneshot="true"nameClass="medium circleBtn" >MEDIUM</VoteContainer>
            <VoteContainer type="flow-team-A" weight="1.5" oneshot="true"nameClass="good circleBtn" >GOOD</VoteContainer>
            <VoteContainer type="flow-team-A" weight="2" oneshot="true" nameClass="amazing circleBtn">AMAZING</VoteContainer>
            <br/>
            Previous annotations: <ReviewResults type="flow-team-A-annotation" />
          </div>
          <div className="vote-row">
            <div className="playersTeamTitle">Variety</div>
            <Total type="variety-team-A" />
            <VoteContainer type="variety-team-A" weight="0" oneshot="true"nameClass="bad circleBtn vote">BAD</VoteContainer>
            <VoteContainer type="variety-team-A" weight="0.5" oneshot="true" nameClass="not-good circleBtn" >NOT GOOD</VoteContainer>
            <VoteContainer type="variety-team-A" weight="1" oneshot="true"nameClass="medium circleBtn" >MEDIUM</VoteContainer>
            <VoteContainer type="variety-team-A" weight="1.5" oneshot="true"nameClass="good circleBtn" >GOOD</VoteContainer>
            <VoteContainer type="variety-team-A" weight="2" oneshot="true" nameClass="amazing circleBtn">AMAZING</VoteContainer>
            <br/>
            Previous annotations: <ReviewResults type="variety-team-A-annotation" />
          </div>
          <div className="vote-row">
            <div className="playersTeamTitle">General Imp.</div>
            <Total type="general-impression-team-A" />
            <VoteContainer type="general-impression-team-A" weight="0" oneshot="true"nameClass="bad circleBtn vote">BAD</VoteContainer>
            <VoteContainer type="general-impression-team-A" weight="0.5" oneshot="true" nameClass="not-good circleBtn" >NOT GOOD</VoteContainer>
            <VoteContainer type="general-impression-team-A" weight="1" oneshot="true"nameClass="medium circleBtn" >MEDIUM</VoteContainer>
            <VoteContainer type="general-impression-team-A" weight="1.5" oneshot="true"nameClass="good circleBtn" >GOOD</VoteContainer>
            <VoteContainer type="general-impression-team-A" weight="2" oneshot="true" nameClass="amazing circleBtn">AMAZING</VoteContainer>
            <br/>
            Previous annotations: <ReviewResults type="general-impression-team-A-annotation" />
          </div>
        </Section>
        <Section title="5 - Team B - Live judging">
          <div className="vote-row">
              <div className="playersTeamTitle">Difficulty</div>
              <br/>
              <VoteContainer type="difficulty-team-B" weight="-0.5" oneshot="false" nameClass="bad circleBtn vote">BAD</VoteContainer>
              <VoteContainer type="difficulty-team-B" weight="-0.25" oneshot="false" nameClass="not-good circleBtn" >NOT GOOD</VoteContainer>
              <VoteContainer type="difficulty-team-B" weight="0" oneshot="false"nameClass="medium circleBtn" >MEDIUM</VoteContainer>
              <VoteContainer type="difficulty-team-B" weight="0.25" oneshot="false"nameClass="good circleBtn" >GOOD</VoteContainer>
              <VoteContainer type="difficulty-team-B" weight="0.5" oneshot="false" nameClass="amazing circleBtn">AMAZING</VoteContainer>
              <br/>
              Result: <Total type="difficulty-team-B" />
          </div>
          <div>
            <VoteRow type="execution-team-B">
              <div className="playersTeamTitle">Execution</div>
              <br/>
              <VoteContainer type="execution-team-B" weight="-0.1" oneshot="false" nameClass="medium circleBtn">MINOR</VoteContainer>
              <VoteContainer type="execution-team-B" weight="-0.3" oneshot="false" nameClass="bad circleBtn">DROP</VoteContainer>
              <br/>
              Result: <Total type="execution-team-B" />
            </VoteRow>
          </div>
          //----- Under this line it's only an annotation, not final vote -----
          <div className="vote-row annotation-block">
            <div>
              <div className="playersTeamTitle">Teamwork</div>
              <br/>
              <VoteContainer type="teamwork-team-B-annotation" weight="-1" oneshot="false" nameClass="bad circleBtn">-</VoteContainer>
              <VoteContainer type="teamwork-team-B-annotation" weight="1" oneshot="false" nameClass="amazing circleBtn">+</VoteContainer>
              <ReviewResults type="teamwork-team-B-annotation" />
            </div>
            <div>
              <div className="playersTeamTitle">Music</div>
              <br/>
              <VoteContainer type="music-team-B-annotation" weight="-1" oneshot="false" nameClass="bad circleBtn">-</VoteContainer>
              <VoteContainer type="music-team-B-annotation" weight="1" oneshot="false" nameClass="amazing circleBtn">+</VoteContainer>
              <ReviewResults type="music-team-B-annotation" />
            </div>
            <div>
              <div className="playersTeamTitle">Flow</div>
              <br/>
              <VoteContainer type="flow-team-B-annotation" weight="-1" oneshot="false" nameClass="bad circleBtn">-</VoteContainer>
              <VoteContainer type="flow-team-B-annotation" weight="1" oneshot="false" nameClass="amazing circleBtn">+</VoteContainer>
              <ReviewResults type="flow-team-B-annotation" />
            </div>
            <div>
              <div className="playersTeamTitle">Variety</div>
              <br/>
              <VoteContainer type="variety-team-B-annotation" weight="-1" oneshot="false" nameClass="bad circleBtn">-</VoteContainer>
              <VoteContainer type="variety-team-B-annotation" weight="1" oneshot="false" nameClass="amazing circleBtn">+</VoteContainer>
              <ReviewResults type="variety-team-B-annotation" />
            </div>
            <div>
              <div className="playersTeamTitle">General Imp.</div>
              <br/>
              <VoteContainer type="general-impression-team-B-annotation" weight="-1" oneshot="false" nameClass="bad circleBtn">-</VoteContainer>
              <VoteContainer type="general-impression-team-B-annotation" weight="1" oneshot="false" nameClass="amazing circleBtn">+</VoteContainer>
              <ReviewResults type="general-impression-team-B-annotation" />
            </div>
          </div>
        </Section>
        <Section title="6 - Team B - Review and Artistic Impression">
          <h2>REVIEW DIFFICULTY / EXECUTION</h2>
          <div className="vote-row">
            <div className="playersTeamTitle">Difficulty Review:</div>
            <ReviewResults type="difficulty-team-B" />
            <br/>
            <div className="playersTeamTitle">Execution Review:</div>
            <ReviewResults type="execution-team-B" />
          </div>
          <h2>VOTE ARTISTIC IMPRESSION</h2>
          <div className="vote-row">
            <div className="playersTeamTitle">Teamwork</div>
            <Total type="teamwork-team-B" />
            <VoteContainer type="teamwork-team-B" weight="0" oneshot="true"nameClass="bad circleBtn vote">BAD</VoteContainer>
            <VoteContainer type="teamwork-team-B" weight="0.5" oneshot="true" nameClass="not-good circleBtn" >NOT GOOD</VoteContainer>
            <VoteContainer type="teamwork-team-B" weight="1" oneshot="true"nameClass="medium circleBtn" >MEDIUM</VoteContainer>
            <VoteContainer type="teamwork-team-B" weight="1.5" oneshot="true"nameClass="good circleBtn" >GOOD</VoteContainer>
            <VoteContainer type="teamwork-team-B" weight="2" oneshot="true" nameClass="amazing circleBtn">AMAZING</VoteContainer>
            <br/>
            Previous annotations: <ReviewResults type="teamwork-team-B-annotation" />
          </div>
          <div className="vote-row">
            <div className="playersTeamTitle">Music</div>
            <Total type="music-team-B" />
            <VoteContainer type="music-team-B" weight="0" oneshot="true"nameClass="bad circleBtn vote">BAD</VoteContainer>
            <VoteContainer type="music-team-B" weight="0.5" oneshot="true" nameClass="not-good circleBtn" >NOT GOOD</VoteContainer>
            <VoteContainer type="music-team-B" weight="1" oneshot="true"nameClass="medium circleBtn" >MEDIUM</VoteContainer>
            <VoteContainer type="music-team-B" weight="1.5" oneshot="true"nameClass="good circleBtn" >GOOD</VoteContainer>
            <VoteContainer type="music-team-B" weight="2" oneshot="true" nameClass="amazing circleBtn">AMAZING</VoteContainer>
            <br/>
            Previous annotations: <ReviewResults type="music-team-B-annotation" />
          </div>
          <div className="vote-row">
            <div className="playersTeamTitle">Flow</div>
            <Total type="flow-team-B" />
            <VoteContainer type="flow-team-B" weight="0" oneshot="true"nameClass="bad circleBtn vote">BAD</VoteContainer>
            <VoteContainer type="flow-team-B" weight="0.5" oneshot="true" nameClass="not-good circleBtn" >NOT GOOD</VoteContainer>
            <VoteContainer type="flow-team-B" weight="1" oneshot="true"nameClass="medium circleBtn" >MEDIUM</VoteContainer>
            <VoteContainer type="flow-team-B" weight="1.5" oneshot="true"nameClass="good circleBtn" >GOOD</VoteContainer>
            <VoteContainer type="flow-team-B" weight="2" oneshot="true" nameClass="amazing circleBtn">AMAZING</VoteContainer>
            <br/>
            Previous annotations: <ReviewResults type="flow-team-B-annotation" />
          </div>
          <div className="vote-row">
            <div className="playersTeamTitle">Variety</div>
            <Total type="variety-team-B" />
            <VoteContainer type="variety-team-B" weight="0" oneshot="true"nameClass="bad circleBtn vote">BAD</VoteContainer>
            <VoteContainer type="variety-team-B" weight="0.5" oneshot="true" nameClass="not-good circleBtn" >NOT GOOD</VoteContainer>
            <VoteContainer type="variety-team-B" weight="1" oneshot="true"nameClass="medium circleBtn" >MEDIUM</VoteContainer>
            <VoteContainer type="variety-team-B" weight="1.5" oneshot="true"nameClass="good circleBtn" >GOOD</VoteContainer>
            <VoteContainer type="variety-team-B" weight="2" oneshot="true" nameClass="amazing circleBtn">AMAZING</VoteContainer>
            <br/>
            Previous annotations: <ReviewResults type="variety-team-B-annotation" />
          </div>
          <div className="vote-row">
            <div className="playersTeamTitle">General Imp.</div>
            <Total type="general-impression-team-B" />
            <VoteContainer type="general-impression-team-B" weight="0" oneshot="true"nameClass="bad circleBtn vote">BAD</VoteContainer>
            <VoteContainer type="general-impression-team-B" weight="0.5" oneshot="true" nameClass="not-good circleBtn" >NOT GOOD</VoteContainer>
            <VoteContainer type="general-impression-team-B" weight="1" oneshot="true"nameClass="medium circleBtn" >MEDIUM</VoteContainer>
            <VoteContainer type="general-impression-team-B" weight="1.5" oneshot="true"nameClass="good circleBtn" >GOOD</VoteContainer>
            <VoteContainer type="general-impression-team-B" weight="2" oneshot="true" nameClass="amazing circleBtn">AMAZING</VoteContainer>
            <br/>
            Previous annotations: <ReviewResults type="general-impression-team-B-annotation" />
          </div>
        </Section>
        <Section title="7 - Submit Final Vote">
          <div className="final-vote-row vote-row">

            <div className="playersTeamTitle">Team A Final Review:</div>
            <div className="resultBox">
              <div className="playersTeamTitle">Execution:</div>
              <ReviewResults type="execution-team-A" />
            </div>
            <div className="resultBox">
              <div className="playersTeamTitle">Difficulty:</div>
              <ReviewResults type="difficulty-team-A" />
            </div>
            <div className="resultBox small">
              <div className="playersTeamTitle">Teamwork:</div>
              <ReviewResults type="teamwork-team-A" />
            </div>
            <div className="resultBox small">
              <div className="playersTeamTitle">Music:</div>
              <ReviewResults type="music-team-A" />
            </div>
            <div className="resultBox small">
              <div className="playersTeamTitle">Flow:</div>
              <ReviewResults type="flow-team-A" />
            </div>
            <div className="resultBox small">
              <div className="playersTeamTitle">Variety:</div>
              <ReviewResults type="variety-team-A" />
            </div>
            <div className="resultBox small">
              <div className="playersTeamTitle">General Imp.:</div>
              <ReviewResults type="general-impression-team-A" />
            </div>
          </div>
          <div className="final-vote-row vote-row">
            <div className="playersTeamTitle">Team B Final Review:</div>
            <div className="resultBox">
              <div className="playersTeamTitle">Execution:</div>
              <ReviewResults type="execution-team-B" />
            </div>
            <div className="resultBox">
              <div className="playersTeamTitle">Difficulty:</div>
              <ReviewResults type="difficulty-team-B" />
            </div>
            <div className="resultBox small">
              <div className="playersTeamTitle">Teamwork:</div>
              <ReviewResults type="teamwork-team-B" />
            </div>
            <div className="resultBox small">
              <div className="playersTeamTitle">Music:</div>
              <ReviewResults type="music-team-B" />
            </div>
            <div className="resultBox small">
              <div className="playersTeamTitle">Flow:</div>
              <ReviewResults type="flow-team-B" />
            </div>
            <div className="resultBox small">
              <div className="playersTeamTitle">Variety:</div>
              <ReviewResults type="variety-team-B" />
            </div>
            <div className="resultBox small">
              <div className="playersTeamTitle">General Imp.:</div>
              <ReviewResults type="general-impression-team-B" />
            </div>
          </div>
          <div className="vote-row">
            <WinnerBadge />
            <SendResponseContainer>Send Final Response</SendResponseContainer>
          </div>
        </Section>
      </div>
    );
  }
});

export default Accordion;
