export default function NavBox({ name, iconSrc, path }) {
  return (
    <div>
      <img src={iconSrc} alt="" style={{ width: "10%" }} />
      <span>{name}</span>
    </div>
  );
}
