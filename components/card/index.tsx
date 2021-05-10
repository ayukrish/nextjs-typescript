import React from 'react';
import style from '../../styles/card.module.scss';

interface ICardProps {
  imgSrc?: string;
  heading: string;
  dataObj: ICharDataObj | ILocationDataObj | IEpisodeDataObj;
}

interface ICharDataObj {
  STATUS?: string;
  SPECIES?: string;
  GENDER?: string;
  ORIGIN?: string;
  LOCATION?: string;
}

interface ILocationDataObj {
  TYPE?: string;
  DIMENSION?: string;
}

interface IEpisodeDataObj {
  EPISODE?: string;
  'AIR DATE'?: string;
}

const Card: React.FunctionComponent<ICardProps> = ({
  imgSrc,
  heading,
  dataObj,
}: ICardProps) => (
  <article className={`${style.card} flex column`}>
    <div className={style.cardHeader}>
      {imgSrc && <img src={imgSrc} alt={heading} />}
      <div
        className={`${style.cardTitle} ${!imgSrc ? style.cardBlankTitle : ''}`}
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

export default Card;
