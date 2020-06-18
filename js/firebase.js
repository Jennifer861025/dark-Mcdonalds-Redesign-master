$(document).ready(function () {

    // INITIALIZE FIREBASE
    firebase.initializeApp({
        apiKey: "AIzaSyA14x3WZbuSrRAj9D1kNStCTAzzUqOUVec",
        authDomain: "form-fc17f.firebaseapp.com",
        databaseURL: "https://form-fc17f.firebaseio.com",
        projectId: "form-fc17f",
        storageBucket: "form-fc17f.appspot.com",
        messagingSenderId: "786155087781",
        appId: "1:786155087781:web:f15ad31918283dcaa7aa4c",
        measurementId: "G-EL95W0P0R2"
    });
  
    // REFERENCE CHATROOM DOCUMENT
    let docRef = firebase.firestore()
      .collection("form")
  
    // REGISTER DOM ELEMENTS
    const $name = $('#name');
    const $date = $('#date');
    const $feedback = $('#feedback');
    const $submit = $('#submit');
  
    // LISTEN FOR KEYPRESS EVENT
    $submit.click(function (e) {
        //FIELD VALUES
        let name = $name.val();
        let date = $date.val();
        let feedback = $feedback.val();

        //SAVE DATA TO FIREBASE
         docRef.add({
          "Name": name, 
          "Date": date,
          "feedback": feedback,
        //   "timeStamp": Date.now()
          });

        alert('感謝您的回饋！');
  
        // EMPTY INPUT FIELD
        $name.val('');
        $date.val('');
        $feedback.val('');
    });
  
  });