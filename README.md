# Ae1 Database project
#  How to Run 
Clone this repository https://github.com/rikin459/ae1-shopdata
When cloned open project in Visual Studio Code, install the dependencies listed below:
- npm install
- npm install body-parser
- npm install dotenv
- npm install ejs
- npm install express 
- npm install mongodb 
- npm install mongoose 


# Running the project:
In the terminal type in:

    npm run dev 
    
Then you can run the program on  (http://localhost:3000) 


# System Requirements
The system requirements for this project is listed below 

- Windows 7 or later (preferably)
- VS code 
- Google Chrome or any Browser 
- stable internet connection (if running the heroku version )

## Introduction 
This is a project I had to work on during my university. The main purpose of this project was the create a database logging programs which logs data using a web application. For the project, we had to choose our one project theme however the project theme must solve a problem and be very realistic. 
 
 My project was based on my local family business. Our family has a local store in a very old village which doesn't even have street lights. As a result in an area like this everyone knows everyone therefore sometimes customers may owe there local stores such as ours however our business normally writes down name and amount due on a little piece of paper which most of the time gets lost or messy.  After seeing this situation again and again I decided to make this into a CRUD app which will allow the user to add details related to the transaction and update them. 

## System overview

Below you can see the screenshots of my web application. The web application mostly contains forms and shows the data. The titles are :

- ID: This is for the dataset and it is how it is identified. 
- Name: This is where the person behind the till would enter the customer's name who wishes to pay later.
- Date: The date would also be entered this is because it can be easy to trace CCTV footage if necessary.
- Price: The price of the totals.
- Method of payment: This is how the customers would like to pay when they return.
- Reason for the IOU: The reason why they didn't pay. 


![photo](https://user-images.githubusercontent.com/72072104/150546202-58dca81c-41e6-435d-acd1-a7ca07aa96ac.PNG)




## Database design 
This web application can display, update, create and delete records. It does this by using schemas as the base of the CRUD code. If requested by the user it can also create a record on the database which is connected to MongoDB. This means it is not stored locally and can be accessed more conveniently. The application can also work on most devices such as phones this is possible due to CSS media queries which allow the whole web app to scale down and be in a useable format for mobile phone browsers. This current web all also needs to be secure therefore people who only have access have a link that can allow them to use the web application. 
One idea could be that I could have created a login system however due to multiple users I decided not to as some of the users don't have great memory and experience on technology. 

Below one can also see the design of the database it allows the user to use the web application with ease. the big and white text makes the buttons clear and the dark background and layout help the user for getting eye strains and the device battery drain. For the front end of the web application to make all of the pages HTML code was used this includes the form for the data to be inserted into. One reason why is because this was the perfect way to layout the web application. Then the web app was styled with CSS to make the user interface more convenient. 
![photo 2](https://user-images.githubusercontent.com/72072104/150546239-c5a06812-1dc3-49af-b36e-2b44ed84e59a.PNG)




## Concusion 
Overall this project has been a great experience . one reason why is because we were told to solve a real-life problem which means there will be used for this project when completed. Most of the projects that I created have no meaning once completed however this one will solve a problem. building the project has been a great experience as well and also I have learned a lot of new features. For example, when creating the front end of the project instead of making 5 headers and footers for 5 pages I use the HTML import feature this can be good as it helps save time, as a result, it was a great learning experience. Another new thing I learned was the connection to MongoDB and the cloud database. My previous experiences have mostly been with SQL and python based databases as a result the cloud database was very new to me. However, saying that it didn't take me long to learn this is due to a vast amount of informative articles on the internet about it. Overall I'm starting to prefer it. 



