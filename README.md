/***********************************************

CS572 - MODERN WEB APPLICATION PROGRAMMING

Lecture 8 / Exercise

************************************************/
1. Create a Node.js/Express CRUD application that uses MongoDB th Add/Update/Delete location points. Location points should include (Name, Category (Hospital,Restaurant, Park, etc), Longtitude, Latitude)
2. Data EntryL Find some locations around University campus(you may use any location picker library) and use the app you created in step 1 to add them to your MongoDB collection.
3. Create the necessary indexes to search for these locations.
4. Write a search page that will locate the nearest 3 points to your current location, your search criteria should include a mandatory category and an optional location name.

Note that Google Maps will give you coorditation as [Lat, Long]. While MongoDB requires coordination to be saved as [Long,Lat]
