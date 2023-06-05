import axios from "axios";
import React, { useState} from "react";

const Search = () => {
  const [search, setSearch] = useState("");
  const [data, setData] = useState([]);
  const [timeOutId, setTimeOutId] = useState(null);
  const handleSearch = (e) => {
    setSearch(e.target.value);
    searchBar();
  };
  const searchBar = () => {
    clearTimeout(timeOutId);

    setTimeOutId(
      setTimeout(() => {
        searchingData(search);
      }, 500)
    );
  };
  const searchingData = async (search) => {
    const searchingDatas = await axios.get(
      `https://jobfair.psolution.in/api/apply-jobseeker?title=${search}`
    );
    console.log(searchingDatas.data.title);
    setData(searchingDatas.data.title);
  };

  return (
    <>
      <form class="d-flex  mt-3" role="search">
        <input
          class="form-control me-2"
          type="search"
          placeholder="Search"
          aria-label="Search"
          value={search}
          onChange={handleSearch}
        />
      </form>
      {data &&
        data.map((data) => {
          return (
            <div class="card mt-5" style={{ width: "18rem" }}>
              <ul class="list-group list-group-flush">
                <li class="list-group-item" key={data.id}>
                  Title :{data.title}
                </li>
                <li class="list-group-item">Education :{data.education}</li>
                <li class="list-group-item"> AgeLimit: {data.ageLimit}</li>
                <li class="list-group-item"> JobType: {data.jobType}</li>
                <li class="list-group-item">
                  OtherDetails: {data.otherDetails}
                </li>
                <li class="list-group-item">SalaryDown: {data.salaryDown}</li>
                <li class="list-group-item">SalaryUp: {data.salaryUp}</li>
                <li class="list-group-item">WorkType: {data.workType}</li>
                <li class="list-group-item">
                  Percentage : {data.percentageCutoff}%
                </li>
              </ul>
            </div>
          );
        })}
    </>
  );
};

export default Search;
