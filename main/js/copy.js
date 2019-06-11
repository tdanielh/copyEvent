var firebaseConfig = {
    apiKey: "AIzaSyBGbQ0PfHQpz6skh1-4WzrG69NgkJp4duQ",
    authDomain: "copy-410ff.firebaseapp.com",
    databaseURL: "https://copy-410ff.firebaseio.com",
    projectId: "copy-410ff",
    storageBucket: "",
    messagingSenderId: "1042624515941",
    appId: "1:1042624515941:web:358c36d2ef283550"
  };
  // Initialize Firebase
  app = firebase.initializeApp(firebaseConfig);
	db = firebase.firestore(app);
    
var element = document.getElementById("container");
//var element = document.querySelector('.container');
var selection, range, clientRects;
var url = location.href;
console.log(element);
element.onmouseup = function(){
	infoBox = document.querySelector('#copyright_info');
	selection	= document.getSelection();
  range		= selection.getRangeAt(0);
  clientRects = range.getClientRects();
    
   	console.log('clientRects');
    console.log(selection.toString());
    console.log(clientRects[0].y);
    infoBox.style.display = 'block';
    infoBox.style.top = clientRects[0].y;
}

element.oncopy = function(){
	db.collection("copies").add({
    text: selection.toString(),
    time: Date.now(),
    
})	
.then(function(docRef) {
    alert('copied');
    
    jQuery.get('http://concept.just-stuff.dk/copy.php?url='+url+'&docId='+docRef.id);

})
.catch(function(error) {
    console.error("Error writing document: ", error);
    
});



};

