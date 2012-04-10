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
	<div class="ui-page ui-body-c ui-page-active" id="pageLogin" data-role="page" data-url=
	"/test/docs/pages/page-template.html" style="min-height: 450px;" tabindex=
	"0">
		<div class="ui-header ui-bar-a" data-role="header">
			<h1 class="ui-title">Twitter Log-in</h1>
		</div><!-- /header -->

		<div class="ui-field-contain ui-body ui-br" data-role="content">
			<div class="ui-field-contain ui-body ui-br" data-role=
			"fieldcontain">
				<input autofocus="true" class=
				"ui-input-text ui-body-c ui-corner-all ui-shadow-inset ui-focus"
				id="userID" name="userID" placeholder="Username/email" type=
				"email">
			</div>

			<div class="ui-field-contain ui-body ui-br" data-role=
			"fieldcontain">
				<input class=
				"ui-input-text ui-body-c ui-corner-all ui-shadow-inset" id=
				"userPsw" name="userPassword" placeholder="User Password" type=
				"password">
			</div>

			<div data-role="fieldcontain" data-inline="true">
				<a class=
				"ui-shadow ui-btn-corner-all ui-btn-icon-left ui-btn-up-b"
				id="loginBtn"data-iconshadow="true" data-role="button" data-shadow="true" data-theme="b" data-wrapperels=
				"span"><span class=
				"ui-btn-corner-all"><span class="ui-btn-text">Log-in</span></span></a>
                            <span id="errorMsg"  style="text-decoration-color: red"></span>
                        </div>
                    
		</div><!-- /content -->

		<div class="ui-footer ui-bar-a" data-role="footer">
			<h4 class="ui-title">Final Project</h4>
		</div><!-- /footer -->
	</div>
</body>
</html>