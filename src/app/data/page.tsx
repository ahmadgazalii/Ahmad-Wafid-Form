const getData = async () => {
  const res = await fetch("/api/form", {
    cache: "no-store",
  });
  try {
    if (!res.ok) {
      throw new Error("Failed to fetched");
    } else {
      return res.json();
    }
  } catch (error) {
    console.log(error);
  }
};

async function Data() {
  const data = await getData();
  return (
    <div>
      {data.data?.map((elem: any) => (
        <div className="flex space-x-20" key={elem.id}>
          <div>{elem.city}</div>
          <div>{elem.country}</div>
          <div>{elem.gender}</div>
        </div>
      ))}
    </div>
  );
}

export default Data;
