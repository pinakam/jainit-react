import axios from "axios";
import React, { useEffect, useState } from "react";
import Models from "../../component/model";
// import { Button, Modal } from "bootstrap";
import { Button } from "react-bootstrap";
import Form from "../../component/form";

const Emplloyee = () => {
  const [input, setInput] = useState({
    typename: "",
  });
  const [data, setData] = useState([]);
  const [show, setShow] = useState(false);
  const [edit, setEdit] = useState("");
  const [deletedData, setDeletedData] = useState([]);

  const emplloyesData = async () => {
    const emplloyesGotData = await axios.get(
      `https://doctor.psolution.in/public/api/hospitaltype/index`
    );
    console.log(emplloyesGotData.data.HospitalType);
    setData(emplloyesGotData.data.HospitalType);
  };
  useEffect(() => {
    emplloyesData();
  }, []);
  const handleDelete = async (e) => {
    console.log(e);
    const deletes = await axios.get(
      `https://doctor.psolution.in/public/api/hospitaltype/delete/${e}`
    );
    console.log("delete", deletes);
    if (deletes.status === 200) {
      alert("data deleted succeesfully");
      emplloyesData();
      let deleted = deletes.data.HospitalType.typename;
      setDeletedData({ ...deletedData, deleted });
      console.log("sdsd", deletedData);
    }
  };
  const handleEdit = async (e) => {
    setInput({ typename: e.typename });
    setEdit(e.id);
    setShow(!show);
    // handleClose();
    // setInput("");
  };
  const handleEditedData = async () => {
    console.log("handleEditedData");
    const saveEditChanges = await axios.post(
      `https://doctor.psolution.in/public/api/hospitaltype/update/${edit}`,
      {
        typename: input.typename,
      }
    );
    if (
      saveEditChanges.data.Status == 200 ||
      saveEditChanges.data.Status == 201
    ) {
      alert("user Edited Succesfully");
      handleClose();
      setInput("");
    }
  };
  const handleChange = (e) => {
    setInput({ ...input, [e.target.name]: e.target.value });
  };

  const handleClose = () => {
    setShow(!show);
    setInput("");
  };
  const handleAddData = () => {
    setEdit("");
    setShow(true);
  };
  const handleSubmit = async () => {
    const saveChanges = await axios.post(
      `https://doctor.psolution.in/public/api/hospitaltype/store`,
      {
        typename: input.typename,
      }
    );
    if (saveChanges.data.Status == 200 || saveChanges.data.Status == 201) {
      alert("user Added Succesfully");
      handleClose();
      setInput("");
    }
  };

  return (
    <>
      <Button variant="primary" className="m-5 " onClick={handleAddData}>
        ADD Data
      </Button>
      <Models
        show={show}
        modalTitle={edit === "" ? "Add Title" : "Edit Title"}
        handleClose={handleClose}
        handleSubmit={edit === "" ? handleSubmit : handleEditedData}
      >
        <Form
          lable="Title"
          type="email"
          name="typename"
          value={input.typename}
          handleChange={handleChange}
        ></Form>
      </Models>
      {/* table start */}
      <table class="table m-5">
        <thead>
          <tr>
            <th scope="col">Id</th>
            <th scope="col">Title</th>
            <th>option</th>
          </tr>
        </thead>
        <tbody>
          {data.map((data) => {
            return (
              <tr>
                <th scope="row" key={data.id}>
                  {data.id}
                </th>
                <td>{data.typename}</td>
                <td>
                  <button
                    className="btn btn-secondary"
                    onClick={() => {
                      handleEdit(data);
                    }}
                  >
                    edit
                  </button>
                  <button
                    className="btn btn-danger"
                    onClick={() => {
                      handleDelete(data.id);
                    }}
                  >
                    delete
                  </button>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </>
  );
};

export default Emplloyee;
