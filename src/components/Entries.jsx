const Entries = ({ persons, search, page, setPersons }) => {
  const handleDelete = (id) => {
    setPersons(persons.filter((person) => person.id !== id));
  };

  const handleUpdate = (id) => {
    const Name = prompt("Update name");
    const Email = prompt("Update email");
    const Role = prompt("Update role");

    setPersons(
      persons.map((person) => {
        if (person.id === id)
          return { ...person, name: Name, email: Email, role: Role };
        else return person;
      })
    );
  };

  return (
    <>
      {persons
        .filter(
          (person) =>
            person.name.toLowerCase().includes(search) ||
            person.email.toLowerCase().includes(search) ||
            person.role.toLowerCase().includes(search)
        )
        .map((item, index) => {
          // if (!item?.name) console.log("bruh", toShow);
          {
            if (page === Math.ceil((index + 1) / 10)) {
              return (
                <tr className="border border-slate-300" key={item.name}>
                  <td>
                    <input
                      type="checkbox"
                      onChange={(event) => {
                        if (event.target.checked) {
                          console.log("checked", item.id);
                          setPersons(
                            persons.map((person) => {
                              if (person.id === item.id) {
                                return { ...person, checked: true };
                              } else return person;
                            })
                          );
                        } else {
                          console.log("unchecked", item.id);
                          setPersons(
                            persons.map((person) => {
                              if (person.id === item.id) {
                                return { ...person, checked: false };
                              } else return person;
                            })
                          );
                        }
                      }}
                    />
                  </td>
                  <td>{item.name}</td>
                  <td>{item.email}</td>
                  <td>{item.role}</td>
                  <td>
                    <button onClick={() => handleDelete(item.id)}>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-5 w-5"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                      >
                        <path
                          fillRule="evenodd"
                          d="M9 2a1 1 0 00-.894.553L7.382 4H4a1 1 0 000 2v10a2 2 0 002 2h8a2 2 0 002-2V6a1 1 0 100-2h-3.382l-.724-1.447A1 1 0 0011 2H9zM7 8a1 1 0 012 0v6a1 1 0 11-2 0V8zm5-1a1 1 0 00-1 1v6a1 1 0 102 0V8a1 1 0 00-1-1z"
                          clipRule="evenodd"
                        />
                      </svg>
                    </button>
                    <button onClick={() => handleUpdate(item.id)}>
                      {" "}
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-5 w-5"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                      >
                        <path d="M17.414 2.586a2 2 0 00-2.828 0L7 10.172V13h2.828l7.586-7.586a2 2 0 000-2.828z" />
                        <path
                          fillRule="evenodd"
                          d="M2 6a2 2 0 012-2h4a1 1 0 010 2H4v10h10v-4a1 1 0 112 0v4a2 2 0 01-2 2H4a2 2 0 01-2-2V6z"
                          clipRule="evenodd"
                        />
                      </svg>
                    </button>
                  </td>
                </tr>
              );
            }
          }
        })}
    </>
  );
};

export default Entries;
