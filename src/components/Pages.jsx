import calcRange from "./calcRange";

const Pages = ({ persons, search, handlePage }) => {
  const pagesNo = calcRange(
    persons.filter(
      (person) =>
        person.name.toLowerCase().includes(search) ||
        person.email.toLowerCase().includes(search) ||
        person.role.toLowerCase().includes(search)
    ),
    10
  );
  console.log("Pages: ", pagesNo);
  return (
    <>
      {pagesNo.map((item, index) => {
        //   if (pagesNo.length >= 1) {
        return (
          <button
            className="border rounded border-blue-500 mx-1 px-4 py-2 bg-transparent focus:bg-blue-300"
            key={index}
            onClick={() => handlePage(item)}
          >
            {item}
          </button>
        );
        //   }
        // else {
        //   handlePage(1);
        //   return (
        //     <button key={index} onClick={() => handlePage(item)}>
        //       {item}
        //     </button>
        //   );
        // }
      })}
    </>
  );
};

export default Pages;
