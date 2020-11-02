import React from 'react';
import ReactDOM from 'react-dom';

class DoggoAgeForm extends Component {
  constructor(props) {
    super(props)
    this.generateAges;
  }

  generateAges() {
    var selectAge = document.getElementById("selectAge");
    var contents;

    for (let i = 1; i <= 100; i++) {
      contents += "<option>" + i + "</option>";
    }

    selectAge.innerHTML = contents;
    
  }

  render() {
    return (
      <select class="bootstrap-select" id="selectAge" />
    )


  }
}

export default DoggoAgeForm;