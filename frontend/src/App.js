import { useState } from 'react'
import XLSX from 'xlsx'
import ReadFile from './screens/ReadFile';
import SendToServer from './screens/SendToServer';
import ThankYou from './screens/ThankYou'

function App() {
  const [items, setItems] = useState([]);
  const [show, setShow] = useState(true)

  function sendJSON() {

    var xmlhttp = new XMLHttpRequest();   // new HttpRequest instance
    xmlhttp.onreadystatechange = function () {
      if (this.readyState === 4 && this.status === 200) {
        document.getElementById("result").innerHTML =
          this.responseText;
      }
    };
    xmlhttp.open("POST", "http://localhost:5000/upload");
    xmlhttp.setRequestHeader("Content-Type", "application/json;charset=UTF-8");
    xmlhttp.send(JSON.stringify(items));

  }

  const readExcel = (file) => {
    const promise = new Promise((resolve, reject) => {
      const fileReader = new FileReader();
      fileReader.readAsArrayBuffer(file);

      fileReader.onload = (e) => {
        const bufferArray = e.target.result;

        const wb = XLSX.read(bufferArray, { type: "buffer" });

        const wsname = wb.SheetNames[0];

        const ws = wb.Sheets[wsname];

        const data = XLSX.utils.sheet_to_json(ws);

        resolve(data);
      };

      fileReader.onerror = (error) => {
        reject(error);
      };
    });

    promise.then((d) => {
      console.log(d)
      setItems(d);
    });
  };

  const showThanks = () => {
    setShow(false)
  }

  return (
    <div className='main'>
      {show && <div><ReadFile readExcel={readExcel} /><SendToServer sendJSON={sendJSON} showThanks={showThanks} /></div>}
      {!show && <ThankYou />}
    </div>
  );
}

export default App;
