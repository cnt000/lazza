import React, { PropTypes } from 'react'

const SendResponse = ({ children, state, onClick }) => {
  return (
    <button className="btn btn-danger btn-lg btn-block" onClick={e => {
           e.preventDefault()
           confirm('Are you sure? It\'s FINAL decision')
           //onClick(state)
           saveData(state)
         }}>
      {children}
    </button>
  );
}

function saveData(state) {
  let dt = new Date();
  let dateFile = dt.getFullYear() + '_' + (dt.getMonth() + 1) + '_' + dt.getDate();
  let identifier = 'lazza_data_' + dateFile + '_' + (Math.random()*1000000).toFixed(2);
  fetch("savefinal.php",
      {
        method: 'post',
        headers: {
           'Accept': 'application/json, text/plain, */*',
           'Content-Type': 'x-www-form-urlencoded'
       },
       body: 'json=' + encodeURI(JSON.stringify(state.judging))
    }).then(function (result) {
      console.log('OK')
    })
    .catch (function (error) {
      console.log('ERROR')
    });
}

SendResponse.propTypes = {
  children: PropTypes.node.isRequired,
  onClick: PropTypes.func.isRequired
}

export default SendResponse
