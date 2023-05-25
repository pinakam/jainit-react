import React, { useEffect, useState } from "react";
import ModalComponent from "../../components/modal/modal";
import { Button } from "react-bootstrap";
import Label from "../../components/form/label";
import Input from "../../components/form/input";
import Validater from "../../utils/helper/validater";
import axios from "axios";
const intionalCatagery = { typename: "" };
const AddHospitalType = () => {
  const [show, setShow] = useState(false);
  const [input, setInput] = useState(intionalCatagery);
  const [hospitalData, setHospitalData] = useState("");
  const [isEditID, setIsEditId] = useState("");
  const [validation, setValidation] = useState(intionalCatagery);

  const handleModal = () => {
    setShow(!show);
    setIsEditId("");
  };

  const getHospitalData = async () => {
    const apiData = await axios.get(
      "https://doctor.psolution.in/public/api/hospitaltype/index"
    );
    setHospitalData(apiData.data.HospitalType);
  };

  useEffect(() => {
    getHospitalData();
  }, []);

  const handleClose = () => {
    setShow(!show);
    setInput(intionalCatagery);
    setValidation(intionalCatagery);
  };

  const modalSave = async () => {
    if (validationForm()) {
      if (isEditID === "") {
        const postData = await axios.post(
          "https://doctor.psolution.in/public/api/hospitaltype/store",
          {
            typename: input.typename,
          }
        );
        const Success = postData.data.Status;
        if (Success === 201 || Success === 200) {
          alert("User Added SuccessFully");
          handleClose();
          getHospitalData();
        }
      } else {
        const postData = await axios.post(
          `https://doctor.psolution.in/public/api/hospitaltype/update/${isEditID}`,
          {
            typename: input.typename,
          }
        );
        const Success = postData.data.Status;
        if (Success === 201 || Success === 200) {
          alert("User Edited SuccessFully");
          handleClose();
          getHospitalData();
        }
      }
    }
  };

  const validationForm = () => {
    let valid = true;
    if (input.typename === "") {
      setValidation((val) => ({
        ...val,
        typename: "select",
      }));
      valid = false;
    } else {
      setValidation((val) => ({
        ...val,
        typename: "",
      }));
      valid = true;
    }
    return valid;
  };

  const handelInput = (e) => {
    setInput({ ...input, [e.target.name]: e.target.value });
  };

  const handleEdit = (e) => {
    setIsEditId(e.id);
    setInput({ typename: e.typename });
    setShow(!show);
  };

  const handleDelete = async (e) => {
    const deleteUser = await axios.get(
      `https://doctor.psolution.in/public/api/hospitaltype/delete/${e}`
    );
    console.log("handleDelete", deleteUser);
    const Success = deleteUser.status;
    if (Success === 201 || Success === 200) {
      alert("User Deleted SuccessFully");
      getHospitalData();
    }
  };
  return (
    <div>
      <div className=" mb-5 cards d-flex justify-content-between bg-dark ">
        <h5 className="card-header bg-dark"> </h5>
        <h5 className="card-header mt-3 mb-3 me-5">
          <Button variant="primary" onClick={handleModal}>
            <i className="bi bi-plus-circle-fill "></i>
          </Button>
        </h5>
      </div>

      <ModalComponent
        show={show}
        modalClose={handleClose}
        modalSave={modalSave}
        heading={isEditID === "" ? "Add data" : "Edit Data"}
      >
        <div className="col-12">
          <Label name="Hospital Category" />
          <Input
            type="text"
            name="typename"
            value={input.typename}
            onChange={handelInput}
          />
          {validation.typename === "select" && (
            <Validater validation="Enter the Hospital Category" />
          )}
        </div>
      </ModalComponent>

      <div className="col-9 mx-auto">
        <table class="table">
          <thead>
            <tr>
              <th scope="col">Id</th>
              <th scope="col">Hospital Category</th>
              <th scope="col">Option</th>
            </tr>
          </thead>
          <tbody>
            {hospitalData &&
              hospitalData.map((data) => {
                return (
                  <tr>
                    <td key={data.id}>{data.id}</td>
                    <td>{data.typename}</td>
                    <td>
                      <button
                        className="btn btn-primary"
                        onClick={(e) => {
                          handleEdit(data);
                        }}
                      >
                        <i class="bi bi-pencil-square"></i>
                      </button>

                      <button
                        className="btn btn-danger ms-2"
                        onClick={(e) => {
                          handleDelete(data.id);
                        }}
                      >
                        <i class="bi bi-trash-fill"></i>
                      </button>
                    </td>
                  </tr>
                );
              })}
          </tbody>
        </table>
      </div>
      {hospitalData === "" && (
        <div class="d-flex justify-content-center">
          <div
            class="spinner-border text-primary mt-3 mb-3 "
            role="status"
          ></div>
          <h4 class="visually mt-3">Loading...</h4>
        </div>
      )}
    </div>
  );
};

export default AddHospitalType;
