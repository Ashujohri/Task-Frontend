import React, { useState, useEffect } from "react";
import Default from "./Mainview";
import PageTwo from "./PageTwo";
import ListItems from "./MenuItems";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    "& > * + *": {
      marginLeft: theme.spacing(2),
    },
  },
}));

export default function Dashboard(props) {
  const [getContainerView, setContainerView] = useState(<Default />);
  const [progress, setProgress] = useState(0);
  const [loading, setLoading] = useState(true);

  const handleComponent = (opt) => {
    // alert(opt);
    switch (opt) {
      case 1:
        setContainerView(<Default />);
        break;
      case 2:
        setContainerView(<PageTwo/>);
        break;
      default:
        break;
    }
  };
  var User = JSON.parse(localStorage.getItem("User"));
  var Name = User.firstname + User.lastname;
  console.log("Name", Name);

  const handleLogout = async () => {
    props.history.replace({ pathname: "/SignIn" });
  };

  const style = {
    padding: "300px 0",
    textAlign: "center",
    opacity: 1,
  };

  return (
    <>
      <aside
        class="main-sidebar fixed offcanvas shadow"
        data-toggle="offcanvas"
      >
        <section class="sidebar">
          <ListItems handleDashComponents={handleComponent} />
        </section>
      </aside>

      <div class="has-sidebar-left">
        <div class="pos-f-t">
          <div class="collapse" id="navbarToggleExternalContent">
            <div class="bg-dark pt-2 pb-2 pl-4 pr-2">
              <div class="search-bar">
                <input
                  class="transparent s-24 text-white b-0 font-weight-lighter w-128 height-50"
                  type="text"
                  placeholder="start typing..."
                />
              </div>
              <a
                href="#"
                data-toggle="collapse"
                data-target="#navbarToggleExternalContent"
                aria-expanded="false"
                aria-label="Toggle navigation"
                class="paper-nav-toggle paper-nav-white active "
              >
                <i></i>
              </a>
            </div>
          </div>
        </div>
        <div class="">
          <div class="navbar navbar-expand navbar-dark d-flex justify-content-between bd-navbar blue accent-3">
            <div class="relative">
              <a
                href="#"
                data-toggle="push-menu"
                class="paper-nav-toggle pp-nav-toggle"
              >
                <i></i>
              </a>
            </div>
            {/*Top Menu Start */}
            <div class="navbar-custom-menu">
              <ul class="nav navbar-nav">
                {/* User Account*/}
                <li class="dropdown custom-dropdown notifications-menu">
                  <a href="#" class="nav-link" data-toggle="dropdown">
                      Hi, {Name}
                    {/* <img
                      src="/admintheme/assets/img/dummy/u8.png"
                      class="user-image"
                      alt="User Image"
                      style={{ height: 30 }}
                    /> */}
                    <i class="icon-more_vert "></i>
                  </a>
                  <ul class="dropdown-menu dropdown-menu-right">
                    {/* <li class="header">You have 10 notifications</li> */}
                    <li>
                      {/* inner menu: contains the actual data */}
                      <ul class="menu">
                        {/* <li>
                          <a href="#" style={{fontSize: 15, fontWeight: 'bold' }}>
                            <i class="icon icon-data_usage text-success"></i>{" "}
                            Profile
                          </a>
                        </li> */}
                        <li>
                          <a
                            href="#"
                            onClick={handleLogout}
                            style={{ fontSize: 15, fontWeight: "bold" }}
                          >
                            <i class="icon icon-data_usage text-danger"></i>{" "}
                            Logout
                          </a>
                        </li>
                        {/* <li>
                          <a href="#">
                            <i class="icon icon-data_usage text-yellow"></i> 5
                            new members joined today
                          </a>
                        </li> */}
                      </ul>
                    </li>
                  </ul>

                  {/* <div class="dropdown-menu p-4 dropdown-menu-right">
                    <div class="row box justify-content-between my-4">
                      <div class="col">
                        <a href="#">
                          <i class="icon-apps purple lighten-2 avatar  r-5"></i>
                          <div class="pt-1">Apps</div>
                        </a>
                      </div>
                      <div class="col">
                        <a href="#">
                          <i class="icon-beach_access pink lighten-1 avatar  r-5"></i>
                          <div class="pt-1">Profile</div>
                        </a>
                      </div>
                      <div class="col">
                        <a href="#">
                          <i class="icon-perm_data_setting indigo lighten-2 avatar  r-5"></i>
                          <div class="pt-1">Settings</div>
                        </a>
                      </div>
                    </div>
                    <div class="row box justify-content-between my-4">
                      <div class="col">
                        <a href="#">
                          <i class="icon-star light-green lighten-1 avatar  r-5"></i>
                          <div class="pt-1">Favourites</div>
                        </a>
                      </div>
                      <div class="col">
                        <a href="#">
                          <i class="icon-save2 orange accent-1 avatar  r-5"></i>
                          <div class="pt-1">Saved</div>
                        </a>
                      </div>
                      <div class="col">
                        <a href="#">
                          <i class="icon-perm_data_setting grey darken-3 avatar  r-5"></i>
                          <div class="pt-1">Settings</div>
                        </a>
                      </div>
                    </div>
                    <hr />
                    <div class="row box justify-content-between my-4">
                      <div class="col">
                        <a href="#">
                          <i class="icon-apps purple lighten-2 avatar  r-5"></i>
                          <div class="pt-1">Apps</div>
                        </a>
                      </div>
                      <div class="col">
                        <a href="#">
                          <i class="icon-beach_access pink lighten-1 avatar  r-5"></i>
                          <div class="pt-1">Profile</div>
                        </a>
                      </div>
                      <div class="col">
                        <a href="#">
                          <i class="icon-perm_data_setting indigo lighten-2 avatar  r-5"></i>
                          <div class="pt-1">Settings</div>
                        </a>
                      </div>
                    </div>
                  </div>
                
                 */}
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <div class="page has-sidebar-left" style={{ textAlign: "-webkit-auto" }}>
        <header class="my-3">
          <div class="container-fluid">{getContainerView}</div>
        </header>

        {/* <div class="container-fluid my-3" style={{
          position: 'absolute',
          bottom: 0,
          right: -150
        }}>
          <center>
            <a>© Copyright 2021. Plus91Labs</a>
          </center>
        </div> */}
      </div>
    </>
  );
}
