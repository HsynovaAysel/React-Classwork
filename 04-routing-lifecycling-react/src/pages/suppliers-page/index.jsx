import React, { useEffect, useState } from "react";
import axios from "axios";
import SuppliersTable from "../../components/tabel";
import Spinner from "../../components/spinner";

const SuppliersPage = () => {
  const [data, setData] = useState([]);
  const [copyArr, setCopyArr] = useState([]);
  const [loading, setLoading] = useState(false);
  const BASE_URL = "https://northwind.vercel.app/api";
  const getData = async () => {
    try {
      setLoading(true);
      let response = await axios(`${BASE_URL}/suppliers`);
      console.log(response.data);
      setData(response.data);
      setCopyArr(response.data);
    } catch (error) {
    } finally {
      setLoading(false);
    }
  };
  useEffect(() => {
    getData();
  }, []);

  function changeInput(e) {
    let value = e.target.value;
    let filtered = copyArr.filter((elem) =>
      elem.companyName.toLocaleLowerCase().includes(value.toLocaleLowerCase())
    );
    // console.log(filtered);
    setData(filtered);
  }
  return (
    <div id="suppliers">
      <div className="container">
        <div className="suppliers">
          <input
            type="text"
            placeholder="search"
            onChange={(e) => changeInput(e)}
          />
          <div> {loading ? <Spinner /> : <SuppliersTable data={data} />}</div>;
        </div>
      </div>
    </div>
  );
};

export default SuppliersPage;
