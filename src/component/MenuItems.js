import { parseJSON } from "date-fns";
import React, { useEffect, useState } from "react";

export default function ListItems(props) {
  const handleClick = (option) => {
    props.handleDashComponents(option);
  };

  const [user, setUser] = useState({});

  // useEffect(() => {
  //   const user = JSON.parse(localStorage.getItem("user"));
  //   setUser(user);
  // }, []);
  return (
    <>
      <aside
        class="main-sidebar fixed offcanvas shadow"
        data-toggle="offcanvas"
      >
        <div
          class="slimScrollDiv"
          style={{
            position: "relative",
            overflow: "hidden",
            width: "auto",
            height: "630px",
          }}
        >
          <section
            class="sidebar"
            style={{
              height: "-webkit-fill-available",
              overflow: "scroll",
              width: "auto",
            }}
          >
            <div
              style={{
                width: "100%",
                height: "62px",
                display: "flex",
                justifyContent: "center",
                marginTop: "30px",
                alignItems: "center",
              }}
            >
              <img src="/images/signup.png" alt="" width="200" />
            </div>
            <ul class="sidebar-menu">
              <li class="header">
                <strong>
                  <b>Admin Panel</b>
                </strong>
              </li>

              <li class="treeview">
                <a href="#" onClick={() => handleClick(1)}>
                  <i
                    class="icon icon-sailing-boat-water purple-text s-18"
                    style={{ cursor: "pointer" }}
                  ></i>{" "}
                  <span>Default</span>{" "}
                </a>
              </li>
              <li class="treeview">
                <a href="#" onClick={() => handleClick(2)}>
                  <i class="icon icon-sailing-boat-water purple-text s-18"></i>{" "}
                  <span>Page2</span>{" "}
                  {/* <i class="icon icon-angle-left s-18 pull-right"></i> */}
                </a>
              </li>
            </ul>
          </section>
          <div
            class="slimScrollBar"
            style={{
              background: "rgba(0, 0, 0, 0.3)",
              width: "5px",
              position: "absolute",
              top: "0px",
              opacity: "0.4px",
              display: "none",
              borderRadius: "7px",
              zIndex: "99px",
              right: "1px",
              height: 645.702,
            }}
          ></div>
          <div
            class="slimScrollRail"
            style={{
              width: "5px",
              height: "100%",
              position: "absolute",
              top: "0px",
              display: "none",
              borderRadius: "7px",
              background: "rgb(51, 51, 51)",
              opacity: "0.2",
              zIndex: "90px",
              right: "1px",
            }}
          ></div>
        </div>
      </aside>
    </>
  );
}
