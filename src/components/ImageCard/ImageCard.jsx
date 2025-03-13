import style from './ImageCard.module.css';

export default function ImageCard({ item }) {
  return (
    <div className={style.imgWrap}>
      <img
        className={style.img}
        src={item.urls.small}
        alt={item.alt_description}
      />
    </div>
  );
}
