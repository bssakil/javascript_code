/*// <=======Javasceipt ES6 DOM Select HTML Tag,Id,Name,Class And InnerHtml=========>
    let sakil = document.getElementById("sakil");
        sakil.innerHTML =("Document Object Model (DOM)")

     let sakilClass = document.getElementsByClassName("sakilClass")[0];
        sakilClass.innerHTML =("HTML Select Javascript In Mathod ES6")

     let names = document.getElementsByName("names")[0];
        names.innerHTML =("DOM Mathod Only Six : 6")

     let p = document.getElementsByTagName("p")[0];
        p.innerHTML =("1.getElementById()")

    let qSelect = document.querySelector("#qSelect");
    qSelect.innerHTML = ("querySelector()")

    let qSelectOne = document.querySelector(".qSelectOne");
        qSelectOne.innerHTML =("querySelectorAll()")


     let button = document.getElementsByTagName("button")[0];
        button.innerHTML =("Show Start")
        function showOne(){
            document.getElementById("display") .innerHTML ="Date()"
        };
        showOne();*/

        function track(){
            
            document.getElementById("display") .innerHTML = Date();
        }

        // <=============tervresing ascess in chaild or parentNode ============>
        let bangla = document.querySelector(".bangla");
        console.log(bangla.parentNode);

        //<=============tervresing ascess in parent to all chaild ============>
            let parentChild = document.querySelector(".parentChild");
            console.log(parentChild.children)

//<=============tervresing ascess in parentchild to siblink or preveiw chaild ============>
    let pChild = document.querySelector(".javascript");
    console.log(pChild.previousElementSibling)