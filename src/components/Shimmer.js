const Shimmer = () => {
  return (
    <div className="shimmer-container">
      {Array.from({ length: 10 }).map((_, i) => (
        <div key={i} className="card"></div>
      ))}
    </div>
  );
};


export default Shimmer