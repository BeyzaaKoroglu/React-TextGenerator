import { useSelector } from "react-redux";
import { Styled } from "./Paragraphs.styled";

const Paragraphs = () => {
  const paragraphs = useSelector((state) => state.paragraphs.paragraphs);

  return (
    <Styled>
      {paragraphs.map((paragraph, index) => (
        <p key={index}>{paragraph}</p>
      ))}
    </Styled>
  );
};

export default Paragraphs;
