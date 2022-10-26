import React from "react";
import { Styled } from "./Inputs.styled";

const Inputs = () => {
  return (
    <Styled>
      <div>
        <label for="paras">Paragraphs</label>
        <br />
        <input name="paras" type="number" min="1" value="4" />
      </div>
      <div>
        <label for="html">Include HTML</label>
        <br />
        <select name="format" value="text">
          <option value="html">Yes</option>
          <option value="text">No</option>
        </select>
      </div>
    </Styled>
  );
};

export default Inputs;
