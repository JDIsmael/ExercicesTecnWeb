<?PHP
if (empty ($strAuthor)) { $strAuthor = $aryConfig[$strPagename]["author"]; } 
if (empty ($strContact)) { $strContact = $aryConfig[$strPagename]["contact"]; }
?>
<PRE>
</PRE>
<CENTER>
<A HREF="http://www.coolsite.loc/legal.php">Copyright</A> 1999 By Me<BR>
Written by: <I><?php print $strAuthor; ?></I><BR>
Questions? Write to <B><?php print $strContact; ?></B><BR>
</CENTER>
</BODY>
