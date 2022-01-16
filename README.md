
# Connect+

It is said that all people on average are six, or fewer, social connections away from each
other. Create a React Web App that helps you find the degree of separation between any
two people.
Think of it as selecting two users on Facebook and trying to see how these two people are
connected.



## Demo

Demo video link  
[Click here to watch the video](https://drive.google.com/file/d/1znz64pMms4RFCJv2lwm_nL6IMRbcvGYC/view?usp=sharing)

## Testing the app

* To test the app locally,
  1. Clone this repository.
  2. Run `npm install` in the root directory of the app.   
  3. Run `yarn start` if you use yarn, or `npm run start` to start the app in development mode.  
  4. Open [http://localhost:3000](http://localhost:3000) to view it in the browser.   

* To test the app online,  
  Open [https://sg-connect.netlify.app/](https://sg-connect.netlify.app/) to view it in a new browser tab.  

### Basic working of the app
* Click on the 'Add' tab to add new people.
* Before clicking on add, you can set the relationship between those two people by selecting from the ''Relationship' dropdown. The default value of relationship is set to 'friend' and doesn't need selecting.
* After adding name to your list, switch to the search tab. 
* Search button will be disabled when there are no people in your list.
* You can delete all the people in your list by clicking on 'Delete people data' button.
* This app can only show one degree of separation which is the shortest possible link between 2 people.
* The search result will be displayed in the box at the bottom.  

### 1. Adding people
Please note that the inputs are case sensitive.  
Add the following names as given below.  

1. Sameer is a Friend of Aayushi
2. Aayushi is a Friend of Bhaskar
3. Sameer is a Friend of Kamalnath Sharma
4. Kamalnath Sharma is a Friend of Shanti Kumar Saha
5. Shanti Kumar Saha is a Friend of Bhaskar   

### 2. Searching for a degree of separation
1. If you select two people, let’s say Sameer and Bhaskar, the application should now show the
degree of separation as 'Sameer > Aayushi > Bhaskar'.

2. Or if you select Bhaskar and Sameer, the application should now show the
degree of separation as 'Bhaskar > Aayushi > Sameer'.

3. If you select Kamalnath Sharma and Bhaskar, the application
should now show the degree of separation as 'Kamalnath Sharma > Shanti Kumar Saha > Bhaskar'.

### Result 
For every search, if the result is as given in the respective test condition, then the app is working correctly.   
You can also add different names and test the app.
 