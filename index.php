<!DOCTYPE html>

<html>
<head>
	<meta content="width=device-width, initial-scale=1" name="viewport">
	<meta charset="UTF-8&quot;">
	<link href="css/jquery.mobile-1.0.1.css" rel="stylesheet">
        <script data-main="Scripts/main.js" src="Scripts/js/require.js"></script>

	<title>Twitter API</title>
</head>

<body class="ui-mobile-viewport ui-overlay-c">
	<div class="ui-page ui-body-c ui-page-active" data-role="page" data-url=
	"/test/docs/pages/page-template.html" style="min-height: 450px;" tabindex=
	"0">
                <div class="ui-header ui-bar-a" data-role="header">
			<h1 class="ui-title">Twitter Sign-in</h1>
		</div><!-- /header -->

		<div class="ui-field-contain ui-body ui-br" data-role="content">
                    <div data-role="fieldcontain" class="ui-field-contain ui-body ui-br center">
                        <input class="ui-input-text ui-body-c ui-corner-all ui-shadow-inset ui-focus center" type="email" id="userID" name="userID" placeholder="Username/email" autofocus="true">
                    </div>
                    <div data-role="fieldcontain" class="ui-field-contain ui-body ui-br center">
                        <input class="ui-input-text ui-body-c ui-corner-all ui-shadow-inset center" type="password" id="userPsw" name="userPassword" placeholder="User Password">
                    </div>
                    
                </div><!-- /content -->

		<div class="ui-footer ui-bar-a" data-role="footer">
			<h4 class="ui-title">Final Project</h4>
		</div><!-- /footer -->
	</div>
</body>
</html>
