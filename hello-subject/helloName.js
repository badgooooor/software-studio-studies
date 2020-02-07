// Function for changing name from upon input your name and click that button.
    function helloName() {
      let name = document.getElementById("name").value;
      let newHello = "Hola, " + name + "!";
      document.getElementById("hello").innerHTML = newHello;
      document.title = newHello;
    }