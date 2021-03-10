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
