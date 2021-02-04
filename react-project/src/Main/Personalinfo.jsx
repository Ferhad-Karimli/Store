import React from "react";

// {()=>props.history.replace('/profile')}
const Personalinfo = (props) => {
  console.log("personalinfo", props.name);

  return (
    <>
      <div className="user_message_post">
        {/* <p>name:{props.name} </p>
        <p>city:{props.city} </p>
        <p> position:{props.position} </p>
        <p>birthday: {props.birthday} </p> */}
      </div>

      <div class="wrapper-img">
        <img src="assets/img/pic2.jpg" alt="img/pic5.jpg" />
        <div class="box-matter">
          <p class="name">John William</p>
          <p class="web">Web Designer</p>
          <ul>
            <li>
              <a target="_blank" href="https://www.facebook.com/">
                <i class="fab fa-facebook"></i>
              </a>
            </li>
            <li>
              <a target="_blank" href="https://twitter.com/">
                <i class="fab fa-twitter"></i>
              </a>
            </li>
            <li>
              <a target="_blank" href="https://plus.google.com/">
                <i class="fab fa-google-plus"></i>
              </a>
            </li>
            <li>
              <a target="_blank" href="https://in.linkedin.com/">
                <i class="fab fa-linkedin"></i>
              </a>
            </li>
            <li>
              <a target="_blank" href="https://www.instagram.com/">
                <i class="fab fa-instagram"></i>
              </a>
            </li>
            <li>
              <a target="_blank" href="https://in.pinterest.com/">
                <i class="fab fa-pinterest-p"></i>
              </a>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
};

export default Personalinfo;
