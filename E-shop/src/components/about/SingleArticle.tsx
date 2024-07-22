import { useState } from "react";
import { AboutProps } from "../../data/aboutArticle";
import { FaLongArrowAltDown } from "react-icons/fa";
import { FaLongArrowAltUp } from "react-icons/fa";

interface SingleArticleProps {
  item: AboutProps;
}
export default function SingleArticle({ item }: SingleArticleProps) {
  const [showArticle, setShowArticle] = useState(false);

  const toggleArticle = () => {
    setShowArticle(!showArticle);
  };

  return (
    <>
      <li>
        <button onClick={toggleArticle} className="btn about_article_btn">
          {item.articleName}{" "}
          {!showArticle ? <FaLongArrowAltDown /> : <FaLongArrowAltUp />}
        </button>
        {showArticle && (
          <article>
            <p className="about_us_info">{item.articleText}</p>
          </article>
        )}
      </li>
    </>
  );
}
