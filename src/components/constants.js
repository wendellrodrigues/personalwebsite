export const IpadSectionText = {
  state1_description:
    "The iPad App accompanies the iPads that are placed on specific shelves around the clothing store, of which customers are able to approach. When a customer approaches a shelf, they become a nearby user, and when they select Begin, the iPad sends a request to display nearby users.",
  state2_description:
    "The customer then selects their name from the list, which sends another request to fetch more useful information",
  state3_description:
    "The shelf’s item description is displayed on the screen along with the customer’s relevant information including sizing and previously viewed items. A future use case would be to display clothing recommendations to the customer here, thereby allowing for targeted product placement, bridging the gap between an online retail and a traditional in-store retail experience.",
}

export const IphoneSectionText = {
  state1_description:
    "The iPhone application was created using the SwiftUI framework. All user login functionality was done using Firebase + Cloud Firestore. Store customers either login or sign up through the app before visiting the clothing store, and are prompted to enter sizing preferences. ",
  state2_description:
    "Upon entry of the store, the app searches and ranges for nearby Bluetooth iBeacons. When a beacon is within range ( < 1m ), the app sends a request to our server with a JSON payload. ",
  state3_description:
    "The request adds the customer’s ID to the shelf’s nearbyUsers array. When a beacon is out of range ( > 3m), another request is made to the server, removing the customer’s ID from the shelf’s nearbyUsers array. The iPhone application also displays the shelf’s item information upon proximity to the shelf’s beacon.",
}

export const ShelfSectionText = {
  description:
    "When a customer selects Find my Size on the iPad app, the iPad relays a request through our API to an Arduino Web Server with a payload carrying the size requested.  The Arduino receives that request and indicates the specific shelf that holds the size the user requested.",
}

export const ComponentSectionText = {
  beacon_description:
    "Each shelf is equipped with a Blue Charm BC011-Multibeacon Bluetooth BLE iBeacon. The iBeacons transmit one-way Bluetooth signals which can be detected and ranged using an iPhone. Each beacon is assigned a UUID, a major key, and a minor key. The iPhone applicated detects the beacon’s Bluetooth signals and receives the UUID, major key, and minor key. These are the identifiers that are also stored in the Firestore database’s shelf object for searching. For the purposes of this project, we have one beacon being utilized by our system. ",
  API_description:
    "We created the backend using the Express.js framework. The server is utilized by both the iPhone and iPad applications. The server receives requests from customers’ phones when they come in close proximity with a shelf and update the shelf’s nearbyUsers array in the Firestore database. When a customer leaves the close proximity of a shelf (walks away), the server receives another request to remove the customer from the nearbyUsers array. When a customer selects Begin on a shelf iPad, the server also receives a request to list the nearbyUsers, which are gathered from a Firestore shelf object and returned in JSON format. When they select their name, another request is received.",
  NodeMCU_description:
    "We created the backend using the Express.js framework. The server is utilized by both the iPhone and iPad applications. The server receives requests from customers’ phones when they come in close proximity with a shelf and update the shelf’s nearbyUsers array in the Firestore database. When a customer leaves the close proximity of a shelf (walks away), the server receives another request to remove the customer from the nearbyUsers array.When a customer selects Begin on a shelf iPad, the server also receives a request to list the nearbyUsers, which are gathered from a Firestore shelf object and returned in JSON format. When they select their name, another request is received.",
}
