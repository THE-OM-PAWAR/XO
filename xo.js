// ---------------------------------------------------//

let i = localStorage.getItem("i"); 

// ---------------------------------------------------//

let container3 = document.getElementById('container3')
      let scorexxx = document.getElementById("score1x");
      let scoreooo = document.getElementById("score2x");
      let drawn = document.getElementById("score3");
      let per = document.getElementsByClassName("svg");

      // ALL P TAG ARE GETTING HERE
      let idp1 = document.getElementById("idp1");
      let idp2 = document.getElementById("idp2");
      let idp3 = document.getElementById("idp3");
      let idp4 = document.getElementById("idp4");
      let idp5 = document.getElementById("idp5");
      let idp6 = document.getElementById("idp6");
      let idp7 = document.getElementById("idp7");
      let idp8 = document.getElementById("idp8");
      let idp9 = document.getElementById("idp9");

      let idpAll = [idp1, idp2, idp3, idp4, idp5, idp6, idp7, idp8, idp9];

      // ALL BOX ARE GETTING HERE
      let box1 = document.getElementById("box1");
      let box2 = document.getElementById("box2");
      let box3 = document.getElementById("box3");
      let box4 = document.getElementById("box4");
      let box5 = document.getElementById("box5");
      let box6 = document.getElementById("box6");
      let box7 = document.getElementById("box7");
      let box8 = document.getElementById("box8");
      let box9 = document.getElementById("box9");

      let boxes = [box1, box2, box3, box4, box5, box6, box7, box8, box9];
      let result = (box_1, box_2, box_3, value, name) => {
        if (
          box_1.children[0].firstChild.innerHTML === value &&
          box_2.children[0].firstChild.innerHTML === value &&
          box_3.children[0].firstChild.innerHTML === value
        ) {





            // --------------------------------------------------//
            
            i++
            localStorage.setItem("i", i)
            localStorage.setItem(i+'strat' , strat)
            
            // --------------------------------------------------//
            






          // console.log(value + " is winner with " + name + " set");
          boxes.forEach((element) => {
            element.removeAttribute("onclick");
            op = 8;
            
            box_3.children[0].classList.add = 'new'
            box_1.children[0].classList.add = 'new'
            box_2.children[0].classList.add = 'new'
            
           setTimeout(() => {
	 box_3.children[0].firstChild.style = "stroke : green; width : 8rem; transition: .2s";
	            box_1.children[0].firstChild.style = "stroke : green; width : 8rem; transition: .2s";
	            box_2.children[0].firstChild.style = "stroke : green; width : 8rem; transition: .2s";
}, 300);
            setTimeout(() => {
            box_3.children[0].firstChild.style = "stroke : green; width: 9rem";
            box_1.children[0].firstChild.style = "stroke : green; width: 9rem";
            box_2.children[0].firstChild.style = "stroke : green; width: 9rem";
          }, 2850);
            setTimeout(() => {
              box_3.children[0].firstChild.style = "stroke : black;";
              box_1.children[0].firstChild.style = "stroke : black;";
              box_2.children[0].firstChild.style = "stroke : black;";
              refresh();
            }, 3000);
          });
          if (value == x) {
            scoreX++;
            console.log(scoreO, scoreX);
            container3.style = ' padding: 2rem;'
            scoreooo.textContent = "score : O = " + scoreO;
            scorexxx.textContent = "score : X = " + scoreX;
          }
          if (value == o) {
            scoreO++;
            console.log(scoreO, scoreX);
            container3.style = ' padding: 2rem;'
            scoreooo.textContent = "score : O = " + scoreO;
            scorexxx.textContent = "score : X = " + scoreX;
          }
        }
      };
      let scoreX = 0;
      let scoreO = 0;
      let is = 0;
      let op = 0;
      let x = `<defs><style>.cls-1{fill:none; stroke-linecap:round;stroke-linejoin:round;stroke-width:20px;}</style></defs><line class="cls-1" x1="10" y1="174" x2="174" y2="10"></line><line class="cls-1" x1="174" y1="174" x2="10" y2="10"></line>`
      let o = `<defs><style>.cls-1{fill:none;stroke-miterlimit:10;stroke-width:20px;}</style></defs><circle class="cls-1" cx="92" cy="92" r="82"></circle>`
      let strat='';
      let value = (element) => {
        op = 0;
        element.children[0].firstChild.hidden;
        if (element.classList.contains("b0xes")) {
             strat += element.id
            element.children[0].firstChild.innerHTML = o;
            element.children[0].firstChild.style = 'opacity : 100% ; width :8rem';
            setTimeout(() => {
                element.children[0].firstChild.style = 'opacity : 100% ;width: 6rem;    stroke: #064357;';
                
            }, 200);          
        } else {
             strat += element.id
          element.children[0].firstChild.innerHTML = x;
  element.children[0].firstChild.style = 'opacity : 100% ; width :8rem';
  setTimeout(() => {
              element.children[0].firstChild.style = 'opacity : 100% ;width: 6rem;    stroke: #064357;';
    
  }, 200);          
        }
        // let straitagy = '';
        // straitagy= straitagy+strat
        // console.log(strat)


        element.removeAttribute("onclick");
        element.children[0].firstChild.classList.remove("om");
        for (let d of boxes) {
          d.classList.toggle("b0xes");
        }
        
        result(box1, box2, box3, o, "horizontal top");
        result(box1, box4, box7, o, "vertical left");
        result(box1, box5, box9, x, "top left slid");
        result(box2, box5, box8, x, "middel vertical");
        result(box4, box5, box6, x, "middel hirizontal");
        result(box3, box5, box7, x, "top right slid");
        result(box3, box6, box9, x, "vertical right");
        result(box7, box8, box9, x, "horizontal bottom");
        
        result(box1, box2, box3, o, "horizontal top");
        result(box1, box4, box7, o, "vertical left");
        result(box1, box5, box9, o, "top left slid");
        result(box2, box5, box8, o, "middel vertical");
        result(box4, box5, box6, o, "middel hirizontal");
        result(box3, box5, box7, o, "top right slid");
        result(box3, box6, box9, o, "vertical right");
        result(box7, box8, box9, o, "horizontal bottom");
        
        is++;
          
        for (let index = 0; index < idpAll.length; index++) {
          if (idpAll[index].classList.contains("om")) {
            op++;
          }
        }
        if (op == 0) {
            
            
          drawn.textContent = "match draw";
          container3.style = ' padding: 2rem;'
          for (let index = 0; index < idpAll.length; index++) {
            setTimeout(() => {
              idpAll[index].style = ' stroke: rgb(177, 26, 46) ; font-size : 12rem;'
            }, 300);
            setTimeout(() => {
              idpAll[index].style = ' stroke: rgb(177, 26, 46) ; font-size : 9rem;'
            }, 450);
            setTimeout(() => {
              idpAll[index].style = 'color : red ; font-size : 13rem;'
            }, 1900);
          }
          setTimeout(() => {
            for (let index = 0; index < idpAll.length; index++) {
              idpAll[index].style = 'color : black ; font-size : 15rem;'
            }
            refresh(element);
          }, 2000);
          setTimeout(() => {
            drawn.textContent = "";
            if (scoreooo.textContent.includes('score')) {
              console.log('ompawar')
              container3.style = ' padding: 2rem;'
            }else{
              container3.style = ' padding: 0rem;'

            }
          }, 3000);



        }
      };


    // --------------------------------------------------------//
    // let localStorageIndex = localStorage.length
    for (let i = 0; i < localStorage.length; i++) {
        
        let om = localStorage.key(i)
        console.log(localStorage.getItem(om))
        // const element = array[i];
        
    }
    console.log()



    // --------------------------------------------------------//














      var refresh = () => {
        idp1.textContent = "";
        idp2.textContent = "";
        idp3.textContent = "";
        idp4.textContent = "";
        idp5.textContent = "";
        idp6.textContent = "";
        idp7.textContent = "";
        idp8.textContent = "";
        idp9.textContent = "";

        box1.setAttribute("onclick", "value(this)");
        box2.setAttribute("onclick", "value(this)");
        box3.setAttribute("onclick", "value(this)");
        box4.setAttribute("onclick", "value(this)");
        box5.setAttribute("onclick", "value(this)");
        box6.setAttribute("onclick", "value(this)");
        box7.setAttribute("onclick", "value(this)");
        box8.setAttribute("onclick", "value(this)");
        box9.setAttribute("onclick", "value(this)");
        is = 0;
        // for (let i of boxes) {
        //   i.classList.toggle("b0xes");
        // }
        for (let index = 0; index < idpAll.length; index++) {
          idpAll[index].classList.add("om");
          op++;
        }
      };




      
