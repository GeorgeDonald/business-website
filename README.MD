
<p>Please run "bundle install" in project directory command line first.</p>
<br/>
<p>Please apply a SendGrid api key and do these in project directory:</p>
<p>&#160;&#160;&#160;&#160;&#160;&#160;&#160;&#160;echo "export SENDGRID_API_KEY='YOUR_API_KEY'" > sendgrid.env</p>
<p>&#160;&#160;&#160;&#160;&#160;&#160;&#160;&#160;echo "sendgrid.env" >> .gitignore</p>
<p>&#160;&#160;&#160;&#160;&#160;&#160;&#160;&#160;source ./sendgrid.env</p>
<br/>
<p>There are four menu items:</p>
<p>HOME: a demo introduction.</p>
<p>Products: show products list and when you select one, the details</p>
<p>Contact: you can select general contact information and email.</p>
<p>&#160;&#160;&#160;&#160;&#160;&#160;&#160;&#160;&#160;&#160;&#160;&#160;In email, you can send email.</p>
<p>Edit: you can add, delete or update product items.</p>
<p>&#160;&#160;&#160;&#160;&#160;&#160;&#160;&#160;&#160;&#160;&#160;&#160;When you done, go to Products to see results. The information posted to server is saved in products.xml.</p>
