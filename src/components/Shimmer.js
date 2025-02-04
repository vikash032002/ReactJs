const Shimmer = () => {
  return (
    <div className="flex flex-wrap bg-orange-300">
      {Array.from({ length: 10 }).map((_, i) => (
        <div key={i} className="w-[250px] h-[200px] p-[5px] m-[5px] bg-[#f0f0f0]"></div>
      ))}
    </div>
  );
};


export default Shimmer