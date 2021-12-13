import React, { useState, useEffect } from "react";
import MaterialTable from "material-table";
import { makeStyles } from "@material-ui/core/styles";
import Dialog from "@material-ui/core/Dialog";
import DialogContentText from "@material-ui/core/DialogContentText";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogTitle from "@material-ui/core/DialogTitle";
import CloseIcon from '@material-ui/icons/Close';
import swal from "sweetalert";
import {
  postData,
  getData,
  postDataAndImageAxios,
} from "../FetchNodeServices";
const style = {
  maxWidth: 800,
  padding: 16,
  margin: "0 auto",
  backgroundColor: "#FFF",
  borderRadius: 5,
  boxShadow: "0 0 10px -1px #ccc",
};

const useStyles = makeStyles((theme) => ({
  rootx: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    marginTop: 4,
  },

  tablediv: {
    width: 1050,
    // height:'auto'
  },
  dialog: {
    maxWidth: "md",
    paddingTop: "60px",
  },
  closeicon: {
    marginTop: ".5px",
    width: "20px",
    padding: "0.1%",
    position: "relative",
    left: "88%",
    top: "5px",
  },
}));

export default function Mainview() {
  const classes = useStyles();
  const [state, setState] = useState({
    columns: [
      { title: "Id", field: "id" },
      // { title: "Email", field: "email" },
      { title: "Name", field: "name" },
      { title: "Year", field: "year" },
      { title: "Color", field: "color" },
      { title: "Pantone Value", field: "pantone_value" },
    ],
  });

  const [getList, setList] = useState([]);
  const [getOpen, setOpen] = useState(false);
  const [getRowData, setRowData] = useState([]);
  const [getId, setId] = useState("");
  const [getName, setName] = useState("");
  const [getColor, setColor] = useState("");
  const [getYear, setYear] = useState("");
  const [getPantone, setPantone] = useState("");
  const [getLastName, setLastName] = useState("");
  const [getEmail, setEmail] = useState("");

  const fetchData = async () => {
    var list = await getData("user?page=2");
    console.log("LIST", list);
    if (list.data != []) {
      setList(list.data);
    }
  };

  useEffect(function () {
    fetchData();
  }, []);

  const handleClickOpen = (rowData) => {
    console.log(rowData);
    setOpen(true);
    setId(rowData.id);
    setName(rowData.name);
    setYear(rowData.year);
    setColor(rowData.color);
    setPantone(rowData.pantone_value);
    // setLastName(rowData.last_name);
    // setEmail(rowData.email);
  };

  const handleClose = () => {
    setOpen(false);
    fetchData();
  };

  const handleEdit = async (e) => {
    e.preventDefault();

    var body = {
      // id: getId,
      name: getName,
      year: getYear,
      color: getColor,
      pantone_value: getPantone,
    };

    let result = await postData(`users/${getId}`, body);
    console.log("RESULTTTTTT", result);
    if (result != []) {
      swal("Record updated", " ", "success", {
        buttons: false,
      });
    } else {
      swal("Record Not updated", " ", "error", {
        buttons: false,
      });
    }
    fetchData();
    handleClose();
  };

  const editDialog = () => {
    return (
      <Dialog
        fullWidth
        open={getOpen}
        maxWidth="md"
        onClose={handleClose}
        className={classes.dialog}
      >
        <DialogTitle>
          User Details
          <CloseIcon
            onClick={handleClose}
            className={classes.closeicon}
            style={{ cursor: "pointer" }}
          />
        </DialogTitle>
        <DialogContent>
          <div class="card-body">
            <form class="needs-validation" novalidate="">
              <div class="form-row">
                <div class="col-md-6 mb-3">
                  <label for="validationCustom01">Id</label>
                  <input
                    type="text"
                    class="form-control"
                    placeholder="Retailer name"
                    required=""
                    // onChange={(event) => setId(event.target.value)}
                    value={getId}
                  />
                </div>
                <div class="col-md-6 mb-3">
                  <label for="validationCustom01">Name</label>
                  <input
                    type="text"
                    class="form-control"
                    id="validationCustom02"
                    placeholder="Street"
                    required=""
                    onChange={(event) => setName(event.target.value)}
                    value={getName}
                  />
                  <div class="valid-feedback">Looks good!</div>
                </div>
              </div>

              <div class="form-row">
                <div class="col-md-6 mb-3">
                  <label for="validationCustom01">Year</label>
                  <input
                    type="text"
                    class="form-control"
                    id="validationCustom01"
                    placeholder="Locality"
                    required=""
                    onChange={(event) => setYear(event.target.value)}
                    value={getYear}
                  />
                  <div class="valid-feedback">Looks good!</div>
                </div>

                <div class="col-md-6 mb-3">
                  <label for="validationCustom01">Color</label>
                  <input
                    type="text"
                    class="form-control"
                    id="validationCustom01"
                    placeholder="Locality"
                    required=""
                    onChange={(event) => setColor(event.target.value)}
                    value={getColor}
                  />
                </div>
              </div>

              <div class="form-row">
                <div class="col-md-12 mb-3">
                  <label for="validationCustom01">Pantone Value</label>
                  <input
                    type="text"
                    class="form-control"
                    id="validationCustom01"
                    placeholder="District"
                    required=""
                    onChange={(event) => setPantone(event.target.value)}
                    value={getPantone}
                  />

                  <div class="valid-feedback">Looks good!</div>
                </div>
              </div>

              <button
                style={{ backgroundColor: "#003399", width: "100%" }}
                class="btn btn-primary"
                type="submit"
                onClick={handleEdit}
              >
                Save
              </button>
            </form>
          </div>
        </DialogContent>
      </Dialog>
    );
  };

  return (
    <div>
      <MaterialTable
        title="USER"
        columns={state.columns}
        data={getList}
        options={{
          headerStyle: {
            backgroundColor: "#003399",
            color: "#FFF",
          },
          actionsCellStyle: {
            padding: "0 20px",
          },
        }}
        actions={[
          {
            icon: "visibility",
            tooltip: "Edit",
            onClick: (event, rowData) => handleClickOpen(rowData),
          },
        ]}
        editable={{
          onRowDelete: (oldData) =>
            new Promise((resolve) => {
              setTimeout(() => {
                resolve();

                const data = [...getList];
                data.splice(data.indexOf(oldData), 1);
                setList(data);
                // handleDelete(oldData);
              }, 600);
            }),
        }}
      />

      {editDialog()}
    </div>
  );
}
