export const menuData = [
  { title: "iPhone App", link: "/#iphone" },
  { title: "iPad App", link: "/#ipad" },
  { title: "Shelf", link: "/#shelf" },
  { title: "Other Components", link: "/#component" },
  { title: "Team", link: "/#team" },
]

export const IntroductionText =
  "Project Retail is an interactive solution for retail shoppers who wish to have their experience tailored directly to their needs. The project was undertaken as a senior capstone project at San Jose State University"

export const IphoneSectionText = {
  state1_description:
    "The iPhone application was created using the SwiftUI framework. All user login functionality was done using Firebase + Cloud Firestore. Store customers either login or sign up through the app before visiting the clothing store, and are prompted to enter sizing preferences. ",
  state2_description:
    "Upon entry of the store, the app searches and ranges for nearby Bluetooth iBeacons. When a beacon is within range ( < 1m ), the app sends a request to our server with a JSON payload. ",
  state3_description:
    "The request adds the customer’s ID to the shelf’s nearbyUsers array. When a beacon is out of range ( > 3m), another request is made to the server, removing the customer’s ID from the shelf’s nearbyUsers array. The iPhone application also displays the shelf’s item information upon proximity to the shelf’s beacon.",
}

export const IpadSectionText = {
  state1_description:
    "The iPad App accompanies the iPads that are placed on specific shelves around the clothing store, of which customers are able to approach. When a customer approaches a shelf, they become a nearby user, and when they select Begin, the iPad sends a request to display nearby users.",
  state2_description:
    "The customer then selects their name from the list, which sends another request to fetch more useful information",
  state3_description:
    "The shelf’s item description is displayed on the screen along with the customer’s relevant information including sizing and previously viewed items. A future use case would be to display clothing recommendations to the customer here, thereby allowing for targeted product placement, bridging the gap between an online retail and a traditional in-store retail experience.",
}

export const ShelfSectionText = {
  description:
    "When a customer selects Find my Size on the iPad app, the iPad relays a request through our API to an Arduino Web Server with a payload carrying the size requested.  The Arduino receives that request and indicates the specific shelf that holds the size the user requested.",
}

export const ComponentSectionText = {
  Beacon_description:
    "Each shelf is equipped with a Blue Charm BC011-Multibeacon Bluetooth BLE iBeacon. The iBeacons transmit one-way Bluetooth signals which can be detected and ranged using an iPhone. Each beacon is assigned a UUID, a major key, and a minor key. The iPhone applicated detects the beacon’s Bluetooth signals and receives the UUID, major key, and minor key. These are the identifiers that are also stored in the Firestore database’s shelf object for searching. For the purposes of this project, we have one beacon being utilized by our system. ",
  API_description:
    "We created the backend using the Express.js framework. The server is utilized by both the iPhone and iPad applications. The server receives requests from customers’ phones when they come in close proximity with a shelf and update the shelf’s nearbyUsers array in the Firestore database. When a customer leaves the close proximity of a shelf (walks away), the server receives another request to remove the customer from the nearbyUsers array. When a customer selects Begin on a shelf iPad, the server also receives a request to list the nearbyUsers, which are gathered from a Firestore shelf object and returned in JSON format. When they select their name, another request is received.",
  Circuit_description:
    "The circuit we created utilizes a NodeMCU development board as a web server. It receives requests from the server and outputs signals to LED strip lights that are attached to the shelf. The circuit is powered by a 12V input that powers the LEDs. The input also powers the NodeMCU with the help of an MC7805 voltage regulator and 2 470uF capacitors to allow a 5V input into the NodeMCU. The NodeMCU accepts requests, and based on those requests, sends signals to pairs of TIP120 transistors, which when applied with current, change their biasing, allowing the LEDs to accept the 12V input. This effectively lights the LED strips, dynamically illuminating specific shelves.",
}

export const ProfileText = {
  Wendell: {
    name: "Wendell",
    description:
      "Wendell Rodrigues is a recent graduate of San Jose State University where he majored in Industrial Technology with a concentration in Computer Technology and Network Electronics. Wendell is also a skilled and eager Software Engineer / Full Stack Developer who is experienced in a variety of frameworks, technologies, and languages including React.js, Node.js, iOS, Arduino, Python, Java, and cloud technologies.",
    photo: "/images/people/Wendell.png",
    link: "https://www.linkedin.com/in/wendellrodrigues/",
  },
  Chris: {
    name: "Chris",
    description:
      "Chris is a recent graduate of San Jose State University with a major in Industrial Technology with a conentration in Computer Electronics and Network Technology. He also has a minor in Business Administration. Chris is an quick learner and always able to tackle any task he undertakes. He is an experienced technical writer with excellent communication and presentation skills. Chris has a strong background in statistical process control, and is also proficient in problem solving and economic decision making.",
    photo: "/images/people/Chris.png",
    link: "https://www.linkedin.com/in/christopher-mamuad-66b100212/",
  },
  Camille: {
    name: "Camille",
    description:
      "Growing up in Silicon Valley, Camille has always been fascinated by the rapid advancement of technology. This led to her passion for technology and software engineering. Camille graduated from San Jose State Univerity in 2021 with a Bachelors in Industrial Technology and minors Computer Science and Business. Camille is also a skilled software engineer, proficient in Java, and has experience with MySQL, Python, JavaScript, HTML, and CSS.",
    photo: "/images/people/Camille.png",
    link: "https://www.linkedin.com/in/camillebarker/",
  },
  Kilho: {
    name: "Kilho",
    description:
      "Kilho is an international student from South Korea majoring in Industrial Technology with a minor in Business Administration. His passion is exploring and learning new technologies. He recently graduated from San Jose State University in May 2021. Kilho is proficient in Javascript, HTML, CSS, Flutter, Python, Dart, PostgreSQL, and Selenium Webdriver. Kilho also is skilled at 3-D printing and modeling",
    photo: "/images/people/Kilho.jpg",
    link: "https://www.linkedin.com/in/kilho-chang-683123148/",
  },
}

export const FooterText = {
  line1: "Site designed and created by Wendell Rodrigues",
  line2: "2021 All Rights Reserved",
}
