export const Card = (props) => {
  let badgeText;
  if (props.item.openSpots === 0) {
    badgeText = "SOLD OUT";
  } else if (props.item.location === "Online") {
    badgeText = "ONLINE";
  }

  return (
    <section className="card">
      {badgeText && <div className="card--badge">{badgeText}</div>}
      <img
        src={`../images/${props.item.coverImg}`}
        alt="katie-zaferes"
        className="card--photo"
      />
      <div className="star--text">
        <img
          src="../images/star.png"
          alt="star image"
          className="star--image"
        />
        <span>{props.item.stats.rating}</span>
        <span className="gray">({props.item.stats.reviewCount}) </span>
        <span className="gray location">{props.item.location}</span>
      </div>
      <p className="card--text">{props.item.title}</p>
      <p className="card--price">
        <strong>From ${props.item.price}</strong>/ person
      </p>
    </section>
  );
};
