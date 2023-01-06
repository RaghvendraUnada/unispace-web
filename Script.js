const demo = async (event) => {
  alert("hello");

  var x = document.getElementById("name").value;
  console.log(x);
  var data = {
    name: x,
  };
  console.log(data);

  await fetch("http://localhost:3000/add/name", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: data,
  })
    .then((res) => {
      res.json();

      //download file
      document.getElementById("downloadLink").click();
    })
    .then((data) => {
      console.log(data);
      document.getElementById("downloadLink").click();
    })
    .catch((err) => {
      console.log(err);
      console.log(err.status);
      document.getElementById("downloadLink").click();
    });
};
