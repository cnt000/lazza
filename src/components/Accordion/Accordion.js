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
import ResetAll from '../../components/ResetAll';
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
              <SelectContainer type="team-name-A" />
            </div>
            <div className="playersTeam">
              <div className="playersTeamTitle">Team B name:</div>
              <SelectContainer type="team-name-B" />
            </div>
            <br/>
          </div>
          <div>
              <div className="playersTeam">
                <div className="playersTeamTitle">
                  Players Team A:
                  </div>
                <div className="playerTeamEntry">
                  <PlayContainer type="player-play-A" teamKey="team-name-A" />
                </div>

              </div>
              <div className="playersTeam">
                <div className="playersTeamTitle">
                Team B:
                </div>
                <div className="playerTeamEntry">
                  <PlayContainer type="player-play-B" teamKey="team-name-B" />
                </div>
              </div>
          </div>
        </Section>
        <Section title="2 - Team A - Live judging">
          <div className="vote-row">
              <div className="playersTeamTitle">Difficulty</div>
              <br/>
              <VoteContainer type="difficulty-team-A" weight="-0.5" oneshot="false" nameClass="bad circleBtn vote">BAD<span>0-2.0</span></VoteContainer>
              <VoteContainer type="difficulty-team-A" weight="-0.25" oneshot="false" nameClass="not-good circleBtn" >NOT GOOD<span>2.1-4.0</span></VoteContainer>
              <VoteContainer type="difficulty-team-A" weight="0" oneshot="false" nameClass="medium circleBtn" >MEDIUM<span>4.1-6.0</span></VoteContainer>
              <VoteContainer type="difficulty-team-A" weight="0.25" oneshot="false" nameClass="good circleBtn" >GOOD<span>6.1-8.0</span></VoteContainer>
              <VoteContainer type="difficulty-team-A" weight="0.5" oneshot="false" nameClass="amazing circleBtn">AMAZING<span>8.1-10.0</span></VoteContainer>
              <br/>
              Result: <Total type="difficulty-team-A" startingPoint="5.0" />
          </div>
          <div>
            <VoteRow type="execution-team-A">
              <div className="playersTeamTitle">Execution</div>
              <br/>
              <VoteContainer type="execution-team-A" weight="-0.1" oneshot="false" nameClass="medium circleBtn">MINOR<span>-0.1</span></VoteContainer>
              <VoteContainer type="execution-team-A" weight="-0.3" oneshot="false" nameClass="bad circleBtn">DROP<span>-0.3</span></VoteContainer>
              <br/>
              Result: <Total type="execution-team-A" startingPoint="10.0" />
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
        <Section title="3 - Team A - Review and Artistic Impression">
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
            <Total type="teamwork-team-A" startingPoint="0.0" />
            <VoteContainer type="teamwork-team-A" weight="0" oneshot="true"nameClass="bad circleBtn vote">BAD<span>0-2.0</span></VoteContainer>
            <VoteContainer type="teamwork-team-A" weight="0.5" oneshot="true" nameClass="not-good circleBtn" >NOT GOOD<span>2.1-4.0</span></VoteContainer>
            <VoteContainer type="teamwork-team-A" weight="1" oneshot="true"nameClass="medium circleBtn" >MEDIUM<span>4.1-6.0</span></VoteContainer>
            <VoteContainer type="teamwork-team-A" weight="1.5" oneshot="true"nameClass="good circleBtn" >GOOD<span>6.1-8.0</span></VoteContainer>
            <VoteContainer type="teamwork-team-A" weight="2" oneshot="true" nameClass="amazing circleBtn">AMAZING<span>8.1-10.0</span></VoteContainer>
            <br/>
            Previous annotations: <ReviewResults type="teamwork-team-A-annotation" />
          </div>
          <div className="vote-row">
            <div className="playersTeamTitle">Music</div>
            <Total type="music-team-A" startingPoint="0.0" />
            <VoteContainer type="music-team-A" weight="0" oneshot="true"nameClass="bad circleBtn vote">BAD<span>0-2.0</span></VoteContainer>
            <VoteContainer type="music-team-A" weight="0.5" oneshot="true" nameClass="not-good circleBtn" >NOT GOOD<span>2.1-4.0</span></VoteContainer>
            <VoteContainer type="music-team-A" weight="1" oneshot="true"nameClass="medium circleBtn" >MEDIUM<span>4.1-6.0</span></VoteContainer>
            <VoteContainer type="music-team-A" weight="1.5" oneshot="true"nameClass="good circleBtn" >GOOD<span>6.1-8.0</span></VoteContainer>
            <VoteContainer type="music-team-A" weight="2" oneshot="true" nameClass="amazing circleBtn">AMAZING<span>8.1-10.0</span></VoteContainer>
            <br/>
            Previous annotations: <ReviewResults type="music-team-A-annotation" />
          </div>
          <div className="vote-row">
            <div className="playersTeamTitle">Flow</div>
            <Total type="flow-team-A" startingPoint="0.0" />
            <VoteContainer type="flow-team-A" weight="0" oneshot="true"nameClass="bad circleBtn vote">BAD<span>0-2.0</span></VoteContainer>
            <VoteContainer type="flow-team-A" weight="0.5" oneshot="true" nameClass="not-good circleBtn" >NOT GOOD<span>2.1-4.0</span></VoteContainer>
            <VoteContainer type="flow-team-A" weight="1" oneshot="true"nameClass="medium circleBtn" >MEDIUM<span>4.1-6.0</span></VoteContainer>
            <VoteContainer type="flow-team-A" weight="1.5" oneshot="true"nameClass="good circleBtn" >GOOD<span>6.1-8.0</span></VoteContainer>
            <VoteContainer type="flow-team-A" weight="2" oneshot="true" nameClass="amazing circleBtn">AMAZING<span>8.1-10.0</span></VoteContainer>
            <br/>
            Previous annotations: <ReviewResults type="flow-team-A-annotation" />
          </div>
          <div className="vote-row">
            <div className="playersTeamTitle">Variety</div>
            <Total type="variety-team-A" startingPoint="0.0" />
            <VoteContainer type="variety-team-A" weight="0" oneshot="true"nameClass="bad circleBtn vote">BAD<span>0-2.0</span></VoteContainer>
            <VoteContainer type="variety-team-A" weight="0.5" oneshot="true" nameClass="not-good circleBtn" >NOT GOOD<span>2.1-4.0</span></VoteContainer>
            <VoteContainer type="variety-team-A" weight="1" oneshot="true"nameClass="medium circleBtn" >MEDIUM<span>4.1-6.0</span></VoteContainer>
            <VoteContainer type="variety-team-A" weight="1.5" oneshot="true"nameClass="good circleBtn" >GOOD<span>6.1-8.0</span></VoteContainer>
            <VoteContainer type="variety-team-A" weight="2" oneshot="true" nameClass="amazing circleBtn">AMAZING<span>8.1-10.0</span></VoteContainer>
            <br/>
            Previous annotations: <ReviewResults type="variety-team-A-annotation" />
          </div>
          <div className="vote-row">
            <div className="playersTeamTitle">General Imp.</div>
            <Total type="general-impression-team-A" startingPoint="0.0" />
            <VoteContainer type="general-impression-team-A" weight="0" oneshot="true"nameClass="bad circleBtn vote">BAD<span>0-2.0</span></VoteContainer>
            <VoteContainer type="general-impression-team-A" weight="0.5" oneshot="true" nameClass="not-good circleBtn" >NOT GOOD<span>2.1-4.0</span></VoteContainer>
            <VoteContainer type="general-impression-team-A" weight="1" oneshot="true"nameClass="medium circleBtn" >MEDIUM<span>4.1-6.0</span></VoteContainer>
            <VoteContainer type="general-impression-team-A" weight="1.5" oneshot="true"nameClass="good circleBtn" >GOOD<span>6.1-8.0</span></VoteContainer>
            <VoteContainer type="general-impression-team-A" weight="2" oneshot="true" nameClass="amazing circleBtn">AMAZING<span>8.1-10.0</span></VoteContainer>
            <br/>
            Previous annotations: <ReviewResults type="general-impression-team-A-annotation" />
          </div>
        </Section>
        <Section title="4 - Team B - Live judging">
          <div className="vote-row">
              <div className="playersTeamTitle">Difficulty</div>
              <br/>
              <VoteContainer type="difficulty-team-B" weight="-0.5" oneshot="false" nameClass="bad circleBtn vote">BAD<span>0-2.0</span><span>0-2.0</span></VoteContainer>
              <VoteContainer type="difficulty-team-B" weight="-0.25" oneshot="false" nameClass="not-good circleBtn" >NOT GOOD<span>2.1-4.0</span></VoteContainer>
              <VoteContainer type="difficulty-team-B" weight="0" oneshot="false" nameClass="medium circleBtn" >MEDIUM<span>4.1-6.0</span></VoteContainer>
              <VoteContainer type="difficulty-team-B" weight="0.25" oneshot="false" nameClass="good circleBtn" >GOOD<span>6.1-8.0</span></VoteContainer>
              <VoteContainer type="difficulty-team-B" weight="0.5" oneshot="false" nameClass="amazing circleBtn">AMAZING<span>8.1-10</span></VoteContainer>
              <br/>
              Result: <Total type="difficulty-team-B" startingPoint="5.0" />
          </div>
          <div>
            <VoteRow type="execution-team-B">
              <div className="playersTeamTitle">Execution</div>
              <br/>
              <VoteContainer type="execution-team-B" weight="-0.1" oneshot="false" nameClass="medium circleBtn">MINOR<span>-0.1</span></VoteContainer>
              <VoteContainer type="execution-team-B" weight="-0.3" oneshot="false" nameClass="bad circleBtn">DROP<span>-0.3</span></VoteContainer>
              <br/>
              Result: <Total type="execution-team-B" startingPoint="10.0" />
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
        <Section title="5 - Team B - Review and Artistic Impression">
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
            <Total type="teamwork-team-B" startingPoint="0.0" />
            <VoteContainer type="teamwork-team-B" weight="0" oneshot="true"nameClass="bad circleBtn vote">BAD<span>0-2.0</span></VoteContainer>
            <VoteContainer type="teamwork-team-B" weight="0.5" oneshot="true" nameClass="not-good circleBtn" >NOT GOOD<span>2.1-4.0</span></VoteContainer>
            <VoteContainer type="teamwork-team-B" weight="1" oneshot="true"nameClass="medium circleBtn" >MEDIUM<span>4.1-6.0</span></VoteContainer>
            <VoteContainer type="teamwork-team-B" weight="1.5" oneshot="true"nameClass="good circleBtn" >GOOD<span>6.1-8.0</span></VoteContainer>
            <VoteContainer type="teamwork-team-B" weight="2" oneshot="true" nameClass="amazing circleBtn">AMAZING<span>8.1-10.0</span></VoteContainer>
            <br/>
            Previous annotations: <ReviewResults type="teamwork-team-B-annotation" />
          </div>
          <div className="vote-row">
            <div className="playersTeamTitle">Music</div>
            <Total type="music-team-B" startingPoint="0.0" />
            <VoteContainer type="music-team-B" weight="0" oneshot="true"nameClass="bad circleBtn vote">BAD<span>0-2.0</span></VoteContainer>
            <VoteContainer type="music-team-B" weight="0.5" oneshot="true" nameClass="not-good circleBtn" >NOT GOOD<span>2.1-4.0</span></VoteContainer>
            <VoteContainer type="music-team-B" weight="1" oneshot="true"nameClass="medium circleBtn" >MEDIUM<span>4.1-6.0</span></VoteContainer>
            <VoteContainer type="music-team-B" weight="1.5" oneshot="true"nameClass="good circleBtn" >GOOD<span>6.1-8.0</span></VoteContainer>
            <VoteContainer type="music-team-B" weight="2" oneshot="true" nameClass="amazing circleBtn">AMAZING<span>8.1-10.0</span></VoteContainer>
            <br/>
            Previous annotations: <ReviewResults type="music-team-B-annotation" />
          </div>
          <div className="vote-row">
            <div className="playersTeamTitle">Flow</div>
            <Total type="flow-team-B" startingPoint="0.0" />
            <VoteContainer type="flow-team-B" weight="0" oneshot="true"nameClass="bad circleBtn vote">BAD<span>0-2.0</span></VoteContainer>
            <VoteContainer type="flow-team-B" weight="0.5" oneshot="true" nameClass="not-good circleBtn" >NOT GOOD<span>2.1-4.0</span></VoteContainer>
            <VoteContainer type="flow-team-B" weight="1" oneshot="true"nameClass="medium circleBtn" >MEDIUM<span>4.1-6.0</span></VoteContainer>
            <VoteContainer type="flow-team-B" weight="1.5" oneshot="true"nameClass="good circleBtn" >GOOD<span>6.1-8.0</span></VoteContainer>
            <VoteContainer type="flow-team-B" weight="2" oneshot="true" nameClass="amazing circleBtn">AMAZING<span>8.1-10.0</span></VoteContainer>
            <br/>
            Previous annotations: <ReviewResults type="flow-team-B-annotation" />
          </div>
          <div className="vote-row">
            <div className="playersTeamTitle">Variety</div>
            <Total type="variety-team-B" startingPoint="0.0" />
            <VoteContainer type="variety-team-B" weight="0" oneshot="true"nameClass="bad circleBtn vote">BAD<span>0-2.0</span></VoteContainer>
            <VoteContainer type="variety-team-B" weight="0.5" oneshot="true" nameClass="not-good circleBtn" >NOT GOOD<span>2.1-4.0</span></VoteContainer>
            <VoteContainer type="variety-team-B" weight="1" oneshot="true"nameClass="medium circleBtn" >MEDIUM<span>4.1-6.0</span></VoteContainer>
            <VoteContainer type="variety-team-B" weight="1.5" oneshot="true"nameClass="good circleBtn" >GOOD<span>6.1-8.0</span></VoteContainer>
            <VoteContainer type="variety-team-B" weight="2" oneshot="true" nameClass="amazing circleBtn">AMAZING<span>8.1-10.0</span></VoteContainer>
            <br/>
            Previous annotations: <ReviewResults type="variety-team-B-annotation" />
          </div>
          <div className="vote-row">
            <div className="playersTeamTitle">General Imp.</div>
            <Total type="general-impression-team-B" startingPoint="0.0" />
            <VoteContainer type="general-impression-team-B" weight="0" oneshot="true"nameClass="bad circleBtn vote">BAD<span>0-2.0</span></VoteContainer>
            <VoteContainer type="general-impression-team-B" weight="0.5" oneshot="true" nameClass="not-good circleBtn" >NOT GOOD<span>2.1-4.0</span></VoteContainer>
            <VoteContainer type="general-impression-team-B" weight="1" oneshot="true"nameClass="medium circleBtn" >MEDIUM<span>4.1-6.0</span></VoteContainer>
            <VoteContainer type="general-impression-team-B" weight="1.5" oneshot="true"nameClass="good circleBtn" >GOOD<span>6.1-8.0</span></VoteContainer>
            <VoteContainer type="general-impression-team-B" weight="2" oneshot="true" nameClass="amazing circleBtn">AMAZING<span>8.1-10.0</span></VoteContainer>
            <br/>
            Previous annotations: <ReviewResults type="general-impression-team-B-annotation" />
          </div>
        </Section>
        <Section title="6 - Submit Final Vote">
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
            difficulty A:
            <Total type="difficulty-team-A" startingPoint="5.0" />
            difficulty B:
            <Total type="difficulty-team-B" startingPoint="5.0" />

            execution A:
            <Total type="execution-team-A" startingPoint="10.0" />
            execution B:
            <Total type="execution-team-B" startingPoint="10.0" />

            teamwork A:
            <Total type="teamwork-team-A" startingPoint="0.0" />
            teamwork B:
            <Total type="teamwork-team-B" startingPoint="0.0" />
            music A:
            <Total type="music-team-A" startingPoint="0.0" />
            music B:
            <Total type="music-team-B" startingPoint="0.0" />
            flow A:
            <Total type="flow-team-A" startingPoint="0.0" />
            flow B:
            <Total type="flow-team-B" startingPoint="0.0" />
            variety A:
            <Total type="variety-team-A" startingPoint="0.0" />
            variety B:
            <Total type="variety-team-B" startingPoint="0.0" />
            general impression A:
            <Total type="general-impression-team-A" startingPoint="0.0" />
            general impression B:
            <Total type="general-impression-team-B" startingPoint="0.0" />
            <WinnerBadge />
            <SendResponseContainer>Send Final Response</SendResponseContainer>
          </div>
          <div className="vote-row">
            RESET ALL DATA! USE IT CAREFULLY<br/>
            <ResetAll>Reset All Data</ResetAll>
          </div>
        </Section>
      </div>
    );
  }
});

export default Accordion;
