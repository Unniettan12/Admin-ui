import { useEffect, useState } from "react";
import axios from "axios";
import Pages from "./Pages";
import Entries from "./Entries";

const Tables = () => {
  const [persons, setPersons] = useState([]);

  const [search, setSearch] = useState("");
  const [page, setPage] = useState(1);

  const handlePage = (val) => {
    setPage(val);
    console.log(page);
  };

  const checkAll = () => {
    setPersons(
      persons
        .filter(
          (person) =>
            person.name.toLowerCase().includes(search) ||
            person.email.toLowerCase().includes(search) ||
            person.role.toLowerCase().includes(search)
        )
        .map((item, index) => {
          if (page === Math.ceil((index + 1) / 10)) {
            return { ...item, checked: true };
            // return (
            //   // item.map((person) => {

            //   { ...item, checked: true }
            // );
          } else return item;
        })
    );
  };

  const unCheckAll = () => {
    persons
      .filter(
        (person) =>
          person.name.toLowerCase().includes(search) ||
          person.email.toLowerCase().includes(search) ||
          person.role.toLowerCase().includes(search)
      )
      .map((item, index) => {
        if (page === Math.ceil((index + 1) / 10)) {
          return { ...item, checked: true };
        } else return item;
      });
  };

  const mltDelete = () => {
    setPersons(persons.filter((person) => person.checked !== true));
  };

  useEffect(() => {
    axios
      .get(
        "https://geektrust.s3-ap-southeast-1.amazonaws.com/adminui-problem/members.json"
      )
      .then((response) => {
        setPersons(response.data.map((item) => ({ ...item, checked: false })));
      });
  }, []);

  const searchFor = (event) => {
    setSearch(event.target.value);
  };
  console.log(search);

  return (
    <div className="flex min-h-screen flex-col items-center justify-center">
      <input
        className="border border-blue-400 rounded w-1/2 my-5"
        value={search}
        onChange={searchFor}
      />
      <table className="border border-slate-500 table-auto px-4 my-5 w-3/4">
        <thead className="text-center">
          <tr className="border border-slate-500 bg-slate-100">
            <th>
              <input
                type="checkbox"
                onChange={(event) => {
                  if (event.target.checked) {
                    checkAll();
                  } else {
                    unCheckAll();
                  }
                }}
              />
            </th>
            <th>Name</th>
            <th>Email</th>
            <th>Role</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody className="text-center">
          <Entries
            persons={persons}
            search={search}
            page={page}
            setPersons={setPersons}
          />
        </tbody>
      </table>
      <div>
        <button
          className="border rounded border-blue-500 mx-1 px-4 py-2 bg-transparent active:bg-blue-300"
          onClick={mltDelete}
        >
          Delete selected
        </button>
        <Pages persons={persons} search={search} handlePage={handlePage} />

        {/*  */}
      </div>
    </div>
  );
};

export default Tables;
