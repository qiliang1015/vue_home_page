<template>
  <div id="contentL">
      <div class="containerL">
          <table class="table">
              <tr>
                  <td><span>ID</span></td>
                  <td>
                      <input type="text" name="" id="" placeholder="添加时可不输入ID">
                  </td>
              </tr>
              <tr>
                  <td><span>简称</span></td>
                  <td>
                      <input type="text" name="" id="" placeholder="给地址一个简称吧">
                  </td>
              </tr>
              <tr>
                  <td><span>URL</span></td>
                  <td>
                      <input type="text" name="" id="" placeholder="URL地址">
                  </td>
                  
              </tr>
              <tr>
                  <td><span>类型</span></td>
                  <td>
                      <input type="text" name="" id="" placeholder="链接类型">
                  </td>
              </tr>
              <tr>
                  <td></td>
                  <td >
                      <button class="addBtn">ADD</button>
                  </td>
              </tr>
              <tr>
                  <td></td>
                  <td >
                      <button class="delBtn">删 除</button>
                  </td>
              </tr>
          </table>

      </div>
  </div>
</template>

<script>
export default {

}
</script>

<style >
    #contentL{
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        min-height: 700px;
        
    }
    .span{
        height: 40px;
        margin: 20px 0;
        font-size: 3em;
    }
    .containerL{
        display: flex;
        flex-direction: column;
        justify-content: center;
        background: rgba(255,255,255, 0.507);
        align-items: center;
        width: 90%;
        height: 550px;
        margin: 10px 0 30px 0;
        border-radius: 10px;
        box-shadow:
  0 2.8px 2.2px rgba(0, 0, 0, 0.046),
  0 6.7px 5.3px rgba(0, 0, 0, 0.064),
  0 12.5px 10px rgba(0, 0, 0, 0.077),
  0 22.3px 17.9px rgba(0, 0, 0, 0.088),
  0 41.8px 33.4px rgba(0, 0, 0, 0.103),
  0 100px 80px rgba(0, 0, 0, 0.14)
;


    }
    .table{
        display: flex;
        flex-direction: column;
        width: 90%;
        margin: 10px;
        margin-top: 50px;
        align-items: center;
    }
    .table tbody{
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        width: 100%;
        min-width: 200px;
    }
    .table tr{
        display: flex;
        justify-content: space-around;
        align-items: center;
        margin: 20px 0px;
        width: 90%;
    }
    .table tr td:nth-child(1){
        width: 40%;
    }
    .table tr td:nth-child(2){
        width: 150%;
    }
    .table tr td span{
        font-size: 1.2em;
    }
    .table tr td input{
        outline-style: none;
        width: 80%;
        border: 1px solid #ccc; 
        padding: 7px 10px;
        font-size: 20px;
        background-color: rgba(238, 238, 238, 0.651);
        border-radius: 6px;
    }
    .table tr td input:hover{
        background-color: rgba(255, 255, 255, 0.699);
        transition: 0.5s;
        
    }
    .table tr td input:focus{
        background-color: #fff;
        transition: 0.5s;
        border: 1px solid rgb(64,158,255);
    }
    .addBtn{
        outline-style: none;
        width: 80%;
        border: none;
        color: #fff;
        padding: 7px;
        font-size: 20px;
        background-color: #a4e9e2;
        border-radius: 6px;
        transition: 0.4s;
    }
    .addBtn:hover{
        background-color: #f1afae;
        transition: 0.4s linear;
    }
    .delBtn{
        outline-style: none;
        width: 80%;
        border: none;
        color: #fff;
        padding: 7px;
        font-size: 20px;
        background-color: #a4e9e2;
        border-radius: 6px;
        transition: 0.4s;
    }
    .delBtn:hover{
        background-color: #f1afae;
        transition: 0.4s;
    }
</style>
