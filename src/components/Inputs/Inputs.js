import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { getParagraphs } from "../../redux/paragraphs/services";
import { Styled } from "./Inputs.styled";

const Inputs = () => {
  const dispatch = useDispatch();
  const [formValues, setFormValues] = useState({ paras: 4, format: "text" });

  useEffect(() => {
    dispatch(getParagraphs(formValues));
  }, [formValues]);

  const handleChange = (e) => {
    setFormValues({ ...formValues, [e.target.name]: e.target.value });
  };

  return (
    <Styled>
      <div>
        <label htmlFor="paras">Paragraphs</label>
        <br />
        <input
          name="paras"
          type="number"
          min="1"
          value={formValues.paras}
          onChange={handleChange}
        />
      </div>
      <div>
        <label htmlFor="html">Include HTML</label>
        <br />
        <select name="format" value={formValues.format} onChange={handleChange}>
          <option value="html">Yes</option>
          <option value="text">No</option>
        </select>
      </div>
    </Styled>
  );
};

export default Inputs;
