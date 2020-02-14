<?PHP
if (empty ($strTitle)) { $strTitle = $aryConfig[$strPagename]["title"]; }
if (empty ($strCaption)) { $strCaption = $aryConfig[$strPagename]["caption"]; }
?>
<HEAD>
<TITLE><?php print $strTitle; ?></TITLE>
</HEAD>
<BODY BGCOLOR="#FFFFFF">
<center>
<H1><?php print $strCaption; ?></H1>
</center>
