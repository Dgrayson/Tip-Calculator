
function Bill(props) {

  const UpdatePrice = (e) => {
    props.UpdatePrice(e.target.value);
  }
  
  const UpdateTip = (e) => {
    props.UpdateTip((parseFloat(e.target.name) / 100.0).toFixed(2)); 
  }

  const UpdateNumPeople = (e) => {
    props.UpdatePeople(e.target.value); 
  }

  return (
    <div className="Bill">
        <div className="bill-group">
            <span className="bill-label">Bill</span>
            <br />
            <input type="text" onChange={UpdatePrice} />
        </div>
        
        <div className="bill-group">
            <span >Select Tip %</span>

              <div className="tip-buttons">
                  <button className="tip-button" onClick={UpdateTip} name="5">5%</button>
                  <button className="tip-button" onClick={UpdateTip} name="10">10%</button>
                  <button className="tip-button" onClick={UpdateTip} name="15">15%</button>
                  <button className="tip-button" onClick={UpdateTip} name="20">20%</button>
                  <button className="tip-button" onClick={UpdateTip} name="25">25%</button>
                  <button className="tip-button" onClick={UpdateTip} name="30">30%</button>
              </div>
        </div>

        <div className="bill-group">
          <span className="bill-label">Number of People</span>
          <input type="text" onChange={UpdateNumPeople} />
        </div>
    </div>
  );
}

export default Bill;
