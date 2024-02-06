class React {
  constructor() {
    this.library = "react";
    this.server = "htpps://localhost:3000";

    /*
    document
      .querySelector("button")
      .addEventListener("click", this.handleClick);
    */
    // reference of button is passed but the reference of this is not passed we have to bind it
    document
      .querySelector("button")
      .addEventListener("click", this.handleClick.bind(this));
  }

  handleClick(e) {
    console.log(e.target);
    console.log("Button Clicked");
    console.log(this.library);
    console.log(this);
  }
}

const app = new React();
