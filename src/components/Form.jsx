import React, { useEffect, useState } from "react";
import SelectionPanel from "./SelectionPanel";
import { StyledForm } from "./styles/Form.styled";

// To reset the timer
let timer;

const Form = () => {
  const options = ["USD", "EUR"];

  const [source, setSource] = useState("");
  const [destination, setDestination] = useState("");

  const [sourceWallet, setSourceWallet] = useState(options[0]);
  const [targetWallet, setTargetWallet] = useState("");

  const [optionsSource, setOptionsSource] = useState(options);
  const [optionsTarget, setOptionsTarget] = useState(options);

  const [defaultOption, setDefaultOption] = useState("Convert To");
  const [rate, setRate] = useState(0);

  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (optionsTarget.length === 1) setTargetWallet(optionsTarget[0]);
  }, [optionsTarget]);

  // Selection panel
  const handleChange = (e) => {
    const wallet = e.target.name;
    if (wallet === "sourceWallet") {
      setSourceWallet(e.target.value);
      setOptionsTarget(options.filter((option) => option !== e.target.value));
    } else if (wallet === "targetWallet") {
      setTargetWallet(e.target.value);
      setDefaultOption(null);
    }
  };

  // Input

  const handleInputChange = (input, amount, from, to) => {
    let key = "7f59fbb540db633fdba4bac6";

    if (input === "source") {
      setSource(amount);
    } else if (input === "destination") {
      setDestination(amount);
    }

    // clear timeout if already set
    if (timer) {
      clearTimeout(timer);
      timer = null;
    }

    if (!targetWallet) {
      alert("Please select a destination currency");
      setSource("");
      return;
    }

    timer = setTimeout(() => {
      setLoading(true);
      fetch(`https://v6.exchangerate-api.com/v6/${key}/latest/${from}`)
        .then((res) => res.json())
        .then((res) => {
          if (res.conversion_rates && input === "source") {
            setDestination(amount * res.conversion_rates[to]);
            setRate(res.conversion_rates[to]);
          } else {
            setSource(amount * res.conversion_rates[to]);
          }
          setLoading(false);
        })
        .catch((err) => console.log(err));
    }, 1000);
  };

  return (
    <StyledForm>
      <SelectionPanel
        name="sourceWallet"
        options={optionsSource}
        value={sourceWallet}
        onChange={handleChange}
      />
      <input
        name="source"
        value={source}
        onChange={(e) => {
          handleInputChange(
            e.target.name,
            e.target.value,
            sourceWallet,
            targetWallet
          );
        }}
      />
      {rate ? <h5>{`1${sourceWallet} = ${rate}${targetWallet}`}</h5> : null}
      <SelectionPanel
        name="targetWallet"
        defaultOption={defaultOption}
        options={optionsTarget}
        value={targetWallet}
        onChange={handleChange}
      />
      <input
        name="destination"
        value={destination}
        onChange={(e) => {
          handleInputChange(
            e.target.name,
            e.target.value,
            targetWallet,
            sourceWallet
          );
        }}
      />
      <button type="submit">{!loading ? `Convert` : `Loading...`}</button>
    </StyledForm>
  );
};

export default Form;
