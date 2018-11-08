
  document.getElementById("foot").innerHTML =

  '\
      \
        <h1>MEDIAFY</h1> \
        <p><i>-The latest in music, movies and series</i></p> \
      \
          <div class="subtext" id="subtext">Subscribe to our newsletter!</div> \
          <input id="email" type="email" name="email" onfocus="this.value=\'\'" value="Email adress" required> \
          <input type="button" name="button" id="toggle" onclick="subscribe(); return false" value="SUBSCRIBE"> \
            <label class="button" for="toggle" >\
            </label> \
        <div class="parent"> \
            <div class="thankstext" id="thanks" >Thank you for subscribing </div> \
        </div> \
    ';
