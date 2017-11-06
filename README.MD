
Please run "bundle install" in project directory command line first.

Please apply a SendGrid api key and did this in project directory:
      echo "export SENDGRID_API_KEY='YOUR_API_KEY'" > sendgrid.env
      echo "sendgrid.env" >> .gitignore
      source ./sendgrid.env

There are four menu items:
HOME:
Products: show products list and when you select one, the details
Contact: you can select general contact information and email.
        In email, you can send email.
Edit: you can add, delete or update product items.
      When you done, go to Products to see results.
