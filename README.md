# Navigator App

A simple React Native App that harnesses the power of the expo-location library in 3 different ways

## Contents
- [Description](#description)
- [Summary](#summary)
- [Running this Application](#running-this-application)
- [Output](#output)
- [Use Cases](#use-cases)
- [Learning Outcomes](#learning-outcomes)
- [Conclusion](#conclusion)

## Description
The Navigator App is a mobile application that utilizes navigation features to provide users with a seamless experience. It incorporates three main functionalities: user login, location permission, and three major pages
- Card Page, 
- Weather Page
- Map Page.

## Summary
The Navigator App employs navigation techniques to enhance user interaction and provide convenient access to various features. With user login and location permission, it ensures personalized experiences and utilizes the user's location for relevant functionalities. The Card Page displays the user's details, including information entered during login, along with their longitude and latitude. The Weather Page presents the user with their current weather conditions and allows them to search for weather information in other cities. Lastly, the Map Page displays a map interface for users to explore and navigate.

## Running This Application

1. This is a simple repository and doesnt need much contributions hence there is no need to fork this repository

2. Clone this repository to your local environment
```
git clone https://github.com/Secure-Mobile-App-Development/expo-location.git
```

3. Enter the projects directory
```
cd expo-location
```

4. Install all the dependencies required for this project
```
npm install
```

5. Create a `.env` file in the root directory and initialize two variables with the following names
```
MAPS_API_KEY="YOUR TOMTOM MAP API KEY" 
// get the key from here https://developer.tomtom.com/user/register?destination=/how-to-get-tomtom-api-key#
WEATHER_API_KEY="YOUR OPEN WEATHER API KEY" 
// get the key from here https://openweathermap.org/api
```

6. Start the expo development server using the following command
```
npx expo start
```


## Output
The Navigator App delivers a visually appealing and user-friendly interface, providing the following outputs:

<table>
  <tr>
    <th style="min-width:700px" >Card Page</th>
    <th >Description</th>
  </tr>
  <tr>
    <td><img src="https://github.com/Secure-Mobile-App-Development/expo-location/assets/93852415/2c0d2492-ba5f-477b-a903-33438b56e209" width="1000px" height="700px"/></td>
    <td>
      The Card Page displays the user's details, including information entered during login, along with their longitude and latitude. User details and location information displayed on the Card Page.<br>
      The Card Page displays the details provided by the user during the registration process.<br>
      This data includes the Users
      <ul>
        <li>userName</li>
        <li>Phone Number</li>
        <li>Email</li>
      </ul>
      On this page itself, his Longitude and Latitude is displayed so that the user can verify it.<br>
      The display is made simply in a card-like fashion for better readability.
    </td>
  </tr>
  <tr>
    <th>Weather Page</th>
    <th>Description</th>
  </tr>
  <tr>
    <td><img src="https://github.com/Secure-Mobile-App-Development/expo-location/assets/93852415/cec2b144-c46a-468b-a74d-506b28a02d70" width="1000px" height="700px"/></td>
    <td>
      This component has two major features:<br>
      <strong>Current Location Weather:</strong> The Weather Page automatically fetches and displays the weather details of the user's current location. Users can quickly glance at the temperature, humidity, wind speed, and other relevant data.<br>
      <strong>City-based Weather Search:</strong> Users have the option to input a city name and retrieve weather information for that specific location. This feature allows users to stay informed about weather conditions in different cities worldwide.<br>
      It provides details of
      <ul>
        <li>Current Temperature</li>
        <li>Min and Max temperature</li>
        <li>Humidity</li>
        <li>Density</li>
      </ul>
    </td>
  </tr>
  <tr>
    <th>Map Page</th>
    <th>Description</th>
  </tr>
  <tr>
    <td><img src="https://github.com/Secure-Mobile-App-Development/expo-location/assets/93852415/852bb9b5-455e-496d-94f2-d88d8b7ace25" width="1000px" height="700px"/></td>
    <td>The Map Page displays a map interface that allows users to visually explore various locations. It provides an intuitive and interactive experience for users to interact with the map and perform the following actions:<ul><li>Zoom In/Out: Users can zoom in or out on the map to get a closer look at specific areas or have a broader view of the surrounding regions.</li> <li>Pan and Navigate: Users can pan and navigate across the map by dragging and swiping to explore different regions and locations.</li>  <li>Markers and Pins: The Map Page supports the display of markers or pins on the map to mark specific points of interest or locations. These markers can be customized to represent different categories or types of places.</li>  <li>Info Windows: When users interact with a marker or pin on the map, an info window can be displayed to provide additional details or information about that specific location.</li>  <li>Geolocation: The Map Page can utilize the user's device's geolocation capabilities to center the map on their current location, providing a more personalized and relevant experience.</li>  <li>Search Functionality: Users may have the option to search for specific addresses, landmarks, or points of interest on the map. The search functionality can help users find and navigate to desired locations quickly.</li>  <li>Custom Overlays: In addition to markers and pins, the Map Page may support custom overlays, such as polygons, polylines, or circles, to visually represent areas, routes, or boundaries on the map.</li>
</ul>
<p>The Map Page offers a seamless and engaging experience for users to explore and navigate different locations. It provides various interactive features and customization options to enhance the usability and functionality of the map component within your application.</p>
</td>
  </tr>
</table>



**Current weather** conditions displayed on the Weather Page, including **temperature, humidity, wind speed, and other relevant data**.
Weather information for other cities accessible through search functionality on the Weather Page.
A dynamic map interface displayed on the Map Page, allowing users to interact and explore various locations.

## Use Cases

The Navigator App can be utilized in several scenarios, including:

**Navigation and travel applications**: Users can access real-time weather data, view their location details, and explore maps for navigation purposes.
**Personalized experiences**: By requiring user login and permission, the app ensures customized experiences based on user preferences and location.
**Weather information retrieval**: Users can easily obtain weather details for their current location and search for weather forecasts in other cities of interest.

The Navigator App offers flexibility for customization, allowing developers to extend its functionality or integrate additional features as per specific project requirements.

## Learning Outcome
Developing the Navigator App will enable you to acquire knowledge and experience in the following areas:

- **React Native navigation**: Understand the implementation of navigation features in React Native applications, such as handling page transitions and managing navigation stacks.
- **User authentication**: Learn how to incorporate user login functionality to provide personalized experiences and secure access to app features.
- **Location services**: Gain insights into utilizing location permissions to access and utilize the user's geographical coordinates for various functionalities.
- **API integration** : Explore the integration of weather APIs to fetch and display real-time weather data in the app.
- **Map integration** : Familiarize yourself with incorporating map interfaces into mobile applications, allowing users to interact with and explore various locations.

## Conclusion
The Navigator App offers a robust foundation for building a mobile application that employs navigation features efficiently. By incorporating user login, location permission, and three major pages—Card, Weather, and Map—the app ensures a personalized experience for users. The app provides relevant information, including user details, weather conditions, and maps, enhancing its usability and value. Feel free to customize and expand upon this app to suit your specific project requirements. Happy coding!

(PS. this app uses the Registration Page from [here](https://github.com/Secure-Mobile-App-Development/basic-expo-app) ) 
