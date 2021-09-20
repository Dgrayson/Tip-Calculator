

function Results(props) {

  function CalculateTip(){
    return (props.amount * props.tip) / props.numPeople; 
  }
  function CalculateTotal(){
    return parseFloat(props.amount / props.numPeople) + CalculateTip();
  }

  const Reset = () => {
    props.Reset(); 
  }

  return (
    <div className="Results">
        <div className="ResultsField">
            <span className="results-label">Total Bill</span>
            <h2 className="number-label">${parseFloat(props.amount).toFixed(2)}</h2>
        </div>
        <ResultsField text="Tip Amount" amount={CalculateTip()}/>
        <ResultsField text="Total" amount={CalculateTotal()}/>

        <div className="spacer"></div>
        <button value="Reset" className="reset-button" onClick={Reset}>Reset</button>
    </div>
  );
}

function ResultsField(props){
    return (
        <div className="ResultsField">
            <span className="results-label">{props.text}<br />/ person</span>
            <h2 className="number-label">${props.amount.toFixed(2)}</h2>
        </div>
    )
}

export default Results;
