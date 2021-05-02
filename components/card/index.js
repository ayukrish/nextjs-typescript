import style from '../../styles/card.module.scss';

const Card = ({ imgSrc, heading, dataObj }) => {
  return (
    <article className={`${style.card} flex column`}>
      <div className={style.cardHeader}>
        {imgSrc && <img src={imgSrc} alt={heading} />}
        <div
          className={`${style.cardTitle} ${
            !imgSrc ? style.cardBlankTitle : ''
          }`}
        >
          <h2>{heading}</h2>
        </div>
      </div>
      <div className={style.cardInfo}>
        {Object.entries(dataObj).map(([key, value]) => (
          <div className={`${style.characterText} flex center`} key={key}>
            <span>{key}</span>
            <span>{value}</span>
          </div>
        ))}
      </div>
    </article>
  );
};

export default Card