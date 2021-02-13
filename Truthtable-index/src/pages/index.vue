<template>

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
      <div class="legend__content container card">
        <div id="operands" class="flex-row space-between">
          <div class="operand flex-column text-center">
            <div class="operand__original">And</div>
            <div class="operand__code">^/&amp;/and</div>
          </div>
          <div class="operand flex-column text-center">
            <div class="operand__original">Or</div>
            <div class="operand__code">v/|/or</div>
          </div>
          <div class="operand flex-column text-center">
            <div class="operand__original">Not</div>
            <div class="operand__code">~/!/not</div>
          </div>
          <div class="operand flex-column text-center">
            <div class="operand__original">Xor</div>
            <div class="operand__code">xor/⊕</div>
          </div>
          <div class="operand flex-column text-center">
            <div class="operand__original">Implication</div>
            <div class="operand__code">&gt;/-&gt;/=&gt;</div>
          </div>
          <div class="operand flex-column text-center">
            <div class="operand__original">Equivalence</div>
            <div class="operand__code">=/&lt;=&gt;</div>
          </div>
        </div>
        <hr>
        <h3> How to type </h3>
        <div id="details"><p>Use the above characters for the logical operators. Identifiers can be either upper or
          lower case letters: A, B, x, y... You can also type <b>true</b> and <b>false</b>.</p>
          <p class="example"> Example: !(A &amp; B) = !A v !B </p></div>
      </div>
      <div class="row tb table-responsive">
        <table class="table col-sm-11 col-md-9 table-striped">
          <thead>
          <tr>
            <th scope="col">Q</th>
            <th scope="col">P</th>
            <th scope="col">Q∧P</th>
            <th scope="col">¬(Q∧P)</th>
            <th scope="col">¬Q</th>
            <th scope="col">¬P</th>
            <th scope="col">¬Q∨¬P</th>
            <th scope="col">¬(Q∧P)<->¬Q∨¬P</th>
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
            <td align='center'>F</td>
            <td align='center'>T</td>
            <td align='center'>T</td>
            <td align='center'>
              <select name="select" id="" aria-placeholder="Choose">
                <option>Choose</option>
                <option value="T">T</option>
                <option value="F">F</option>
              </select>
            </td>
          </tr>
          <tr>
            <td align='center'>F</td>
            <td align='center'>T</td>
            <td align='center'>F</td>
            <td align='center'>T</td>
            <td align='center'>T</td>
            <td align='center'>F</td>
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
            <td align='center'>T</td>
            <td align='center'>T</td>
            <td align='center'>T</td>
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


@font-face {
  font-family: mFont;
  src: url('/src/assets/css/PoiretOne-Regular.ttf');
}

.Index {
  width: 100%;
  height: 100%;
  /* height: 100%; */
  overflow: hidden;
  position: relative;
  z-index: 999;
  background: linear-gradient(to right, #BFCDBB, #EDE5CE);
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

.table th, .table td {
  padding: 0.75rem;
  vertical-align: top;
  border-top: none;
}

#title {
  width: 100%;
  height: 80px;
  margin-top: 8vmin;
  margin-bottom: 6vmin;
  text-align: center;
  /* margin-top: 8vmin;
    margin-bottom: 6vmin; */
  font-size: 80px;
  font-weight: 900;
  font-family: 'Poiret One', cursive;
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
    font-size: 40px;
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
    font-size: 40px;
  }

  .btn {
    margin-left: 0;
  }

  .tb {
    margin-top: 40px;
  }

}
</style>

