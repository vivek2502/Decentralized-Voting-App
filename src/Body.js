import React, { useState } from "react";

const Body = ({ canidate1, canidate2, canidate3,  votecanidate, account }) => {
  const [Canidate, setCandidate] = useState("");

  const onchange = (e) => {
    setCandidate(e.target.value);
    console.log(e.target.value);
  };

  const onsubmit = (e) => {
    e.preventDefault();
    if (Canidate.id !== 0) votecanidate(Number(Canidate));
    else window.alert("there is error in submission");
  };

  return (
    <div className="body">
      <h2>Election Commission of India</h2>
      <hr
        style={{
          width: "70%",
          borderStyle: "solid",
          borderWidth: "2px",
          borderColor: "#000000",
        }}
      />
      {/* <div className="p-3 ml-auto mr-auto" style={{ width: "40%" }}>
        <div className="row ml-auto mr-auto  mb-2" style={{ width: "90%" }}>
          <div className="col">
            <p>#</p>
          </div>
          <div className="col">
            <p>Name</p>
            
          </div>
          <div className="col">
            <p>Votes</p>
          </div>
        </div>
        <hr
          style={{ width: "90%", borderStyle: "solid", borderColor: "#000000" }}
        />
        <div
          className="row ml-auto mr-auto mt-2  mb-2"
          style={{ width: "90%" }}
        >
          <div className="col">
            <p>{canidate1.id}</p>
          </div>
          
          <div className="col">
            <p>{canidate1.name}</p>
          </div>
          <div className="col">
            <p>{canidate1.voteCount}</p>
          </div>
        </div>
        <hr
          style={{ width: "90%", borderStyle: "solid", borderColor: "#000000" }}
        />
        <div
          className="row ml-auto mr-auto mt-2  mb-2"
          style={{ width: "90%" }}
        >
          <div className="col">
            <p>{canidate2.id}</p>
          </div>
          <div className="col">
            <p>{canidate2.name}</p>
          </div>
          <div className="col">
            <p>{canidate2.voteCount}</p>
          </div>
        </div>
      </div> */}
      
     




      <div className="ui divided unstackable items main">
        <div className="row">
          
          <div className="middle aligned content">
            <div className="description">
              <a>
                <i
                  className="large caret up icon"
                />
                {canidate1.voteCount}
              </a>
              <p>{canidate1.name}</p>
            </div>
            <div className="extra">
              <span className="club"></span>
              <img
                src={require('./images/bjp.png' )}
                className="ui avatar image"
              />
            </div>
          </div>
          <div>
            <img
              className="ui medium circular image"
              src={require('./images/modi.jpg' )}
            />
          </div>
 
          <div className="middle aligned content">
            <div className="description">
              <a>
                <i
                  className="large caret up icon"
                />
                {canidate2.voteCount}
              </a>
              <p>{canidate2.name}</p>
            </div>
            <div className="extra">
              <span className="club"></span>
              <img
                src={require('./images/congress.png' )}
                className="ui avatar image"
              />
            </div>
          </div>
          <div>
            <img
              className="ui medium circular image"
              src={require('./images/priyanka.jpg' )}
            />
          </div>

          <div className="middle aligned content">
            <div className="description">
              <a>
                <i
                  className="large caret up icon"
                />
                {canidate3.voteCount}
              </a>
              <p>{canidate3.name}</p>
            </div>
            <div className="extra">
              <span className="club"></span>
              <img
                src={require('./images/aap.png' )}
                className="ui avatar image"
              />
            </div>
          </div>
          <div>
            <img
              className="ui medium circular image"
              src={require('./images/kejriwal.jpg' )}
            />
          </div>

        </div>
      </div>

      <div className="my-5 mr-auto ml-auto text-left" style={{ width: "70%" }}>
        <h5>Government of the people, by the people, for the people:</h5>
        <form onSubmit={onsubmit}>
          <select name="candidate" className="form-control" onChange={onchange}>
            <option defaultValue value="">
              Vote your Leader
            </option>
            <option value="1">{canidate1.name}</option>
            <option value="2">{canidate2.name}</option>
            <option value="3">{canidate3.name}</option>
          </select>
          <button className="btn btn-primary mt-2 btn-md w-100">
            Vote for{""} {Canidate}
          </button>
        </form>
      </div>

      <p className="my-5 mr-auto ml-auto text-center" style={{ width: "70%" }}>
        Your address: <span className="font-weight-bold">{account}</span>
      </p>
      <img
          className="ui small centered circular image"
          src={require('./images/vote-symbol.jpg' )}
      />
    </div>
  );
};

export default Body;
