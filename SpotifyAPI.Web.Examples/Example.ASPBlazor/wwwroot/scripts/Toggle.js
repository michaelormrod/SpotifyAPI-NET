window.exampleJsFunctions = {
  showPrompt: function (element) {
    return prompt(text, 'Type your name here');
  },
  displayWelcome: function (welcomeMessage) {
    document.getElementById('welcome').innerText = welcomeMessage;
  },
  returnArrayAsyncJs: function () {
    DotNet.invokeMethodAsync('BlazorWebAssemblySample', 'ReturnArrayAsync')
      .then(data => {
        data.push(4);
        console.log(data);
      });
  },
  sayHello: function (dotnetHelper) {
    return dotnetHelper.invokeMethodAsync('SayHello')
      .then(r => console.log(r));
  },
  
  displayElement: function (id) {
    if (document.getElementById(id).style.display == "block") {
      document.getElementById(id).style.display = "none";
    }
    else {
      document.getElementById(id).style.display = "block";
    }
  }

  
};