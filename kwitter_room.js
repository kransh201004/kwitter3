var firebaseConfig = {
      apiKey: "AIzaSyC1xZu0iIcxsZ4PXaq81PCthoShKb3X-gg",
      authDomain: "kwitter-381f6.firebaseapp.com",
      databaseURL: "https://kwitter-381f6-default-rtdb.firebaseio.com",
      projectId: "kwitter-381f6",
      storageBucket: "kwitter-381f6.appspot.com",
      messagingSenderId: "308866001660",
      appId: "1:308866001660:web:130eff560e00fa01a54579",
      measurementId: "G-63BTGZNWR8"
    };
    firebase.initializeApp(firebaseConfig);

    var username = localStorage.getItem("user_name");
    document.getElementById("user_name").innerHTML = "welcome ," + ":";

    function addRoom()
    {
      Room_name = document.getElementById("room_name").value;
firebase.database().ref("/").child("room_name").update({
  purpose : "adding room name"
});
localStorage.setItem("room_name", room_name);
window.location = "kwitter_room.html";
    }

    function redirectToRoomName(name)
    {
console.log(name);
localStorage.setItem("room_name", name);
window.location = "kwitter.html";
    }

    function logout() 
    {
localStorage.removeItem("user_name");
localStorage.removeItem("room_name");
window.location = "kwitter.html";
    }

    function send() 
    {
 msg = document.getElementById = ("msg").value;
 firebase.database().ref(room_name).push({
   name:user_name,
   message: msg,
   like:0
 }) 
 document.getElementById = ("msg").value = "";
    }

    function getData() 
{
      firebase.database().ref("/").on('value', function(snapshot) 
      {
      document.getElementById("output").innerHTML = "";
      snapshot.forEach(function(childSnapshot) 
        {
          childKey  = childSnapshot.key;
      Room_name = childKey;      
      });})}
      console.log("Room_Name - " + Room_names)
      row = "<div class='room_name'id="+Roomnames+"onclick='redirectToroomName(this.id)'>#"+Roomnames+"</div><hr>"
      document.getElementById("output").innerHTML += row;
getData();