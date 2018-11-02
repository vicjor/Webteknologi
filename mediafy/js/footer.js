
  document.getElementById("foot").innerHTML =

  '<footer> \
      <div class="foot1"> \
        <h1>Mediafy</h1> \
        <p><i>-The latest in music, movies and series</i></p> \
      </div> \
          <div class="subtext" id="subtext">Subscribe to our newsletter!</div> \
          <input id="email" type="email" name="email" onfocus="this.value=\'\'" onblur="this.value=\'Email\'" value="Email adress" required> \
          <button type="button" name="button" id="toggle" onclick="subscribe()"> SUBSCRIBE</button>\
            <label class="button" for="toggle" >\
            </label> \
        <div class="parent"> \
            <div class="thankstext" id="thanks" >Thank you for subscribing </div> \
        </div> \
    </footer>';
