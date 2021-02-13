<template>
  <head>
    <link rel="preconnect" href="https://fonts.gstatic.com">
    <link href="https://fonts.googleapis.com/css2?family=Poiret+One&display=swap" rel="stylesheet">
  </head>
  <div class="Index navbar-light customNav navbar navbar-expand-lg">
    <div class="container-sm">
      <div>
        <div id="title">Truth Table Generator</div>
      </div>

      <div class="form-group row">
        <input
          type="text"
          v-model="input"
          class="form-control col-sm-8 col-md-6"
          placeholder="Type your formula..."
        >
        <button type="button" class="btn btn-default col-sm-1 col-md-2">Generate</button>

      </div>
      <div class="row tb table-responsive">
        <table class="table col-sm-11 col-md-9 table-striped">
          <thead>
          <tr>
            <th scope="col">A</th>
            <th scope="col">B</th>
            <th scope="col">R</th>
            <th scope="col">¬B</th>
            <th scope="col">A∧¬B</th>
            <th scope="col">¬R</th>
            <th scope="col">B∧¬R</th>
            <th scope="col">¬A</th>
            <th scope="col">R∧¬A</th>
            <th scope="col">B∧¬R∨R∧¬A</th>
            <th scope="col">A∧¬B∨B∧¬R∨R∧¬A</th>
          </tr>
          </thead>
          <tbody id="tbody">
          <tr>
            <td align='center'>T</td>
            <td align='center'>T</td>
            <td align='center'>T</td>
            <td align='center'>F</td>
            <td align='center'>F</td>
            <td align='center'>F</td>
            <td align='center'>F</td>
            <td align='center'>F</td>
            <td align='center'>F</td>
            <td align='center'>F</td>
            <td align='center'><select name="select" id="" aria-placeholder="Choose">
              <option>Choose</option>
              <option value="T">T</option>
              <option value="F">F</option>
            </select></td>
          </tr>
          <tr>
            <td align='center'>T</td>
            <td align='center'>T</td>
            <td align='center'>T</td>
            <td align='center'>F</td>
            <td align='center'>F</td>
            <td align='center'>F</td>
            <td align='center'>F</td>
            <td align='center'>F</td>
            <td align='center'>F</td>
            <td align='center'>F</td>
            <td align='center'><select name="select" id="" aria-placeholder="Choose">
              <option>Choose</option>
              <option value="T">T</option>
              <option value="F">F</option>
            </select></td>
          </tr>
          <tr>
            <td align='center'>T</td>
            <td align='center'>T</td>
            <td align='center'>F</td>
            <td align='center'>F</td>
            <td align='center'>F</td>
            <td align='center'>T</td>
            <td align='center'>T</td>
            <td align='center'>F</td>
            <td align='center'>F</td>
            <td align='center'>T</td>
            <td align='center'><select name="select" id="" aria-placeholder="Choose">
              <option>Choose</option>
              <option value="T">T</option>
              <option value="F">F</option>
            </select></td>
          </tr>
          <tr>
            <td align='center'>T</td>
            <td align='center'>F</td>
            <td align='center'>F</td>
            <td align='center'>T</td>
            <td align='center'>T</td>
            <td align='center'>T</td>
            <td align='center'>F</td>
            <td align='center'>F</td>
            <td align='center'>F</td>
            <td align='center'>F</td>
            <td align='center'><select name="select" id="" aria-placeholder="Choose">
              <option>Choose</option>
              <option value="T">T</option>
              <option value="F">F</option>
            </select></td>
          </tr>
          <tr>
            <td align='center'>F</td>
            <td align='center'>T</td>
            <td align='center'>T</td>
            <td align='center'>F</td>
            <td align='center'>F</td>
            <td align='center'>F</td>
            <td align='center'>F</td>
            <td align='center'>T</td>
            <td align='center'>T</td>
            <td align='center'>T</td>
            <td align='center'><select name="select" id="" aria-placeholder="Choose">
              <option>Choose</option>
              <option value="T">T</option>
              <option value="F">F</option>
            </select></td>
          </tr>
          <tr>
            <td align='center'>F</td>
            <td align='center'>F</td>
            <td align='center'>T</td>
            <td align='center'>T</td>
            <td align='center'>F</td>
            <td align='center'>F</td>
            <td align='center'>F</td>
            <td align='center'>T</td>
            <td align='center'>T</td>
            <td align='center'>T</td>
            <td align='center'><select name="select" id="" aria-placeholder="Choose">
              <option>Choose</option>
              <option value="T">T</option>
              <option value="F">F</option>
            </select></td>
          </tr>
          <tr>
            <td align='center'>F</td>
            <td align='center'>F</td>
            <td align='center'>F</td>
            <td align='center'>T</td>
            <td align='center'>F</td>
            <td align='center'>T</td>
            <td align='center'>F</td>
            <td align='center'>T</td>
            <td align='center'>F</td>
            <td align='center'>F</td>
            <td align='center'><select name="select" id="" aria-placeholder="Choose">
              <option>Choose</option>
              <option value="T">T</option>
              <option value="F">F</option>
            </select></td>
          </tr>

          </tbody>
        </table>
      </div>
      <div class="row tb table-responsive">
        <table class="table col-sm-11 col-md-9 table-striped">
          <thead>
          <tr>
            <th scope="col">A</th>
            <th scope="col">B</th>
            <th scope="col">A</th>
            <th scope="col">B</th>
            <th scope="col">A</th>
            <th scope="col">B</th>
            <th scope="col">A</th>
            <th scope="col">B</th>
          </tr>
          </thead>
          <tbody id="tbody">
          <tr>
            <td align='center'>A</td>
            <td align='center'>A</td>
            <td align='center'>A</td>
            <td align='center'>A</td>
            <td align='center'>A</td>
            <td align='center'>A</td>
            <td align='center'>A</td>
            <td align='center'>
              <div>
                T
                <input type="radio" name="sex">
                F
                <input
                  type="radio"
                  name="sex"
                >
              </div>
            </td>
          </tr>
          <tr>
            <td align='center'>A</td>
            <td align='center'>A</td>
            <td align='center'>A</td>
            <td align='center'>A</td>
            <td align='center'>A</td>
            <td align='center'>A</td>
            <td align='center'>A</td>
            <td align='center'>
              <select name="select" id="" aria-placeholder="Choose">
                <option>Choose</option>
                <option value="T">T</option>
                <option value="F">F</option>
              </select>
            </td>
          </tr>
          <tr>
            <td align='center'>A</td>
            <td align='center'>A</td>
            <td align='center'>A</td>
            <td align='center'>A</td>
            <td align='center'>A</td>
            <td align='center'>A</td>
            <td align='center'>A</td>
            <td align='center'><select name="select" id="" aria-placeholder="Choose">
              <option>Choose</option>
              <option value="T">T</option>
              <option value="F">F</option>
            </select></td>
          </tr>
          <tr>
            <td align='center'>A</td>
            <td align='center'>A</td>
            <td align='center'>A</td>
            <td align='center'>A</td>
            <td align='center'>A</td>
            <td align='center'>A</td>
            <td align='center'>A</td>
            <td align='center'><select name="select" id="" aria-placeholder="Choose">
              <option>Choose</option>
              <option value="T">T</option>
              <option value="F">F</option>
            </select></td>
          </tr>
          </tbody>
        </table>
      </div>
    </div>
  </div>
</template>

<script>
import Vue from "vue"

export default {
  data() {
    return {
      input: ""
    }
  }
}
</script>

<style>


.Index {
  width: 100%;
  height: 100%;
  /* height: 100%; */
  overflow: hidden;
  position: relative;
  z-index: 999;
  background: linear-gradient(to right, #4776e6, #8e54e9);
}

.container-sm {
  width: 900px;
  height: 100%;
  padding: 0;
  box-sizing: border-box;
  overflow: hidden;
  display: flex;
  flex-direction: column;
  justify-content: flex-start !important;
}

.form-group {
  height: 60px;
  display: flex;
  justify-content: center;
}

.form-group input {
  height: 100%;
  background: transparent;
  color: #fff;
  border: solid #fff 2px;
}

input::-webkit-input-placeholder {
  color: #fff;
  font-size: 20px;
}

.btn {
  border: solid #fff 2px;
  border-radius: 10px;
  margin-left: 20px;
  color: #fff;
}

.btn:hover {
  color: #4776e6;
  background: #fff;
}

.row {
  width: 100%;
  display: flex;
  /* align-items: center; */
  justify-content: center;
}

.tb {
  width: 100%;
}

.table {
  background: #fff;
  margin-top: 20px;
  padding: 20px;
  box-sizing: border-box;
  border-radius: 20px;
  overflow: hidden;
  overflow-x: scroll;
  width: 100%;
  white-space: nowrap;
}

#title {
  width: 100%;
  height: 80px;
  margin-top: 80px;
  text-align: center;
  /* margin-top: 8vmin;
    margin-bottom: 6vmin; */
  font-size: 40px;
  font-weight: 900;
  font-family: "Courgette", sans-serif;
  text-align: center;
  color: white;
  white-space: normal;
}

select {
  appearance: none;
  border: solid 1px #ccc;
  font-size: 13px;
  padding: 3px;
  box-sizing: border-box;
  border-radius: 5px;
}

select:focus {
  border: solid 1px #ccc;
}

@media (max-width: 768px) {
  /* .form-group{
            display: flex;
            flex-direction: column;
        } */
  .form-group input {
    margin-bottom: 10px;
  }

  #title {
    font-size: 20px;
  }

  .btn {
    margin-left: 0;
  }

  .tb {
    margin-top: 40px;
  }

}

@media (max-width: 480px) {
  /* .form-group{
            display: flex;
            flex-direction: column;
        } */
  .form-group input {
    margin-bottom: 10px;
  }

  #title {
    font-size: 20px;
  }

  .btn {
    margin-left: 0;
  }

  .tb {
    margin-top: 40px;
  }

}
</style>

