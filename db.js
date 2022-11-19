var logInnState = false;
var admin = false;

function logInnFuction() {

  db.collection('Brukere').get().then((snapshot) => {
    snapshot.docs.forEach(doc => {
      console.log(doc.data());



      let uName = doc.data().Navn;
      let uPassword = doc.data().Passord;
      let uRole = doc.data().Role;

      var UserInput = document.getElementById("username").value;
      var UserPassword = document.getElementById("password").value;


      console.log(uName);
      console.log(UserInput);
      console.log(uPassword);
      console.log(UserPassword);
      console.log(uRole);
      // console.log(UserInput);

      if ((UserInput === uName && UserPassword === uPassword) && uRole === 'Kunde') {
        // window.location.replace = "https://www.vg.no";
        console.log("is this true?");
        logInnState = true;
        console.log(logInnState);
        // document.location.src = "./index.html"
        // logInnState = logInnState + 1
      }

      if ((UserInput === uName && UserPassword === uPassword) && uRole === 'Admin') {
        // window.location.replace = "https://www.vg.no";
        console.log("is this true?");
        logInnState = true;
        admin = true
        console.log(logInnState);
        console.log(admin);
      }
    });

    if (logInnState && !admin) {
      window.location.replace("http://127.0.0.1:5501/html/index.html")
    }
    if (logInnState && admin) {
      window.location.replace("http://127.0.0.1:5501/html/adminside.html")

    }


  }).catch(err => {
    console.log(err);
  });
}

function noLogInnFunction() {
  window.location.replace("http://127.0.0.1:5501/html/index.html")
}


db.collection('Pants').get().then((snapshot) => {
  snapshot.docs.forEach(doc => {
    console.log(doc.data());
  });
})

db.collection('Sweaters').get().then((snapshot) => {
  snapshot.docs.forEach(doc => {
    console.log(doc.data());
  });
})

db.collection('T-shirts').get().then((snapshot) => {
  snapshot.docs.forEach(doc => {
    console.log(doc.data());
  });
})

db.collection('Hoodies').get().then((snapshot) => {
  snapshot.docs.forEach(doc => {
    console.log(doc.data());
  });
})

function getId() {
  var itemIDB = document.getElementById("pants").innerText;
  if (itemIDB = "pants") {
    console.log("click");
    window.location.replace("http://127.0.0.1:5501/html/clothes.html")
    break
  }
  var err = document.getElementById("jewlery").innerText;
  if else (itemIDB = "jewlery"){
    console.log();
    
  }
  var err = document.getElementById("hoodies").innerText;
  if (){

  }
}
documen.getElementById(addToCart).addEventListener(click, console.log("click");)
function addToCart(){
  console.log("click");
  alert("ITEM IS ADDED TO CART(I RAN OUT OF TIME)");
}

function newUser(){
  await setDoc(doc(db "Brukere"))
}

function sSC(){
  alert("click")
}