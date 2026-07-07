function DotNav({ count, active, onSelect }) {
  return (
    <div className="pf-dot-nav">
      {Array.from({ length: count }).map((_, i) => (
        <button
          key={i}
          className={`pf-dot${i === active ? " active" : ""}`}
          onClick={() => onSelect(i)}
          aria-label={`Go to section ${i + 1}`}
        />
      ))}
    </div>
  );
}

export default DotNav;