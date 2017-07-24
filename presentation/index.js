// Import React
import React from "react";

// Import Spectacle Core tags
import {
  BlockQuote,
  Cite,
  Deck,
  Heading,
  ListItem,
  List,
  Link,
  Quote,
  Slide,
  Text,
  Image
} from "spectacle";

// Import image preloader util
import preloader from "spectacle/lib/utils/preloader";

// Import theme
import createTheme from "spectacle/lib/themes/default";

// Code slide addon
import CodeSlide from "spectacle-code-slide";

// Require CSS
require("normalize.css");
require("spectacle/lib/themes/default/index.css");
require("./styles.css");


const images = {
  city: require("../assets/city.jpg"),
  kat: require("../assets/kat.png"),
  logo: require("../assets/formidable-logo.svg"),
  markdown: require("../assets/markdown.png"),
  joe: require("../assets/joe.png"),
  bill: require("../assets/bill.png"),
  appScreenshot: require("../assets/app-screenshot.png"),
  apolloLogo: require("../assets/apollo-logo.svg"),
  matrixBackground: require("../assets/background-matrix.png"),
  troll: require("../assets/troll.png"),
  allTheThings: require("../assets/all-the-things.png"),
  baggins: require("../assets/baggins.jpg")
};

preloader(images);

const theme = createTheme({
  primary: "#00332b",
  secondary: "white",
  tertiary: "#26A69A",
  quartenary: "#FFD54F"
}, {
  primary: { name: "Roboto", googleFont: true, styles: [ "100" ] },
  secondary: { name: "Roboto Condensed", googleFont: true, styles: [ "100" ] }
});

export default class Presentation extends React.Component {
  render() {
    return (
      <Deck transition={["zoom", "slide"]} transitionDuration={500} theme={theme}>
        <Slide bgColor="transparent">
          <Heading size={1} fit lineHeight={0.9} textColor="secondary">
            Taming micro services with
            <Image src={images.apolloLogo} width="100px" display="block" />
          </Heading>
          <Text margin="20px 0 0" textColor="tertiary" size={1} bold>
            🤓 featuring emoji and dog pics 🐕
          </Text>
        </Slide>

        <Slide bgColor="transparent">
          <Heading size={2} textColor="secondary">Building a new app</Heading>

          <Text margin="60px 0 40px 0" size={6} textColor="secondary">
            Designs are provided 🎨
          </Text>

          <Text size={6} textColor="secondary">
            A REST API is being written and we don’t know its structure yet 🙊
          </Text>
        </Slide>

        <Slide bgColor="transparent">
          <Heading size={4} textColor="secondary">
            Let's try redux-saga!

            <Image src={images.allTheThings} width="50px" display="inline-block" margin="0 0 0 20px" />
          </Heading>

          <Text margin="60px 0 50px 0" fontSize="2rem" textColor="secondary" lineHeight="1.4">
            Makes REST calls to a <b>mock API</b><br />
            Manages <b>asynchronous state</b><br />
            Assumption that the API will be <b>tailored to the application</b>
          </Text>

          <Text fontSize="3rem" textColor="secondary">
            Too <b>complex</b> to set up and maintain 😵
          </Text>
        </Slide>

        <Slide bgColor="transparent">
          <Heading size={4} textColor="secondary">
            APIs are getting ready
          </Heading>

          <Heading size={6} textColor="secondary" margin="1rem 0 4rem 0">
            Time to sync up! 
          </Heading>

          <Text size={5} textColor="secondary" lineHeight="1.2">
            "Hey, so… we need to fetch a list of customers, where each item contains: <b>name</b>, <b>email</b>, list of <b>favourite books</b> and <b>last book read</b>."

            <Cite textAlign="right">FE developer</Cite>
          </Text>

          <Text size={5} textColor="secondary" margin="4rem 0 0" lineHeight="1.2">
            "Alright, so you fetch the <b>list of customers</b>, and then <b>for each customer</b> fetch the <b>list of books</b> and the <b>last book read</b>, separately. 🤓"

            <Cite textAlign="right">API developer</Cite>
          </Text>
        </Slide>

        <Slide bgColor="transparent">
          <Text textSize="3rem" textColor="secondary" lineHeight="1.2">
            "The browser will need to get a list, then make <b>two http requests</b> for <b>each user</b> in the list. I’m sure we can find a solution where it only gets <b>one</b> list?"

            <Cite textAlign="right">FE developer</Cite>
          </Text>

          <Text textSize="3.5rem" textColor="secondary" lineHeight="1.2" margin="3rem 0 0 0">
            "The services <b>don’t have access to each other’s databases</b>. You’ll need to make those two requests
            <Image margin="0 0 0 20px" src={images.troll} width="50px" display="inline-block" style={{verticalAlign: 'middle'}} />."

            <Cite textAlign="right">API developer</Cite>
          </Text>
        </Slide>

        <Slide bgColor="transparent" transition={["fade"]} bgImage={images.matrixBackground}>
          <Text textSize="140px">
            😱 🙈
          </Text>
        </Slide>

        <Slide bgColor="transparent">
          <Heading textSize="5rem" textColor="tertiary">
            Lunch with friends
          </Heading>

          <Heading textSize="2.5rem" textColor="secondary" margin="1rem 0 0 0">
            Claudia complains over red curry 🍛
          </Heading>

          <Text textSize="4.5rem" textColor="secondary" margin="4rem 0 0 0" lineHeight="1.2">
            "I think that GraphQL may be able to solve that problem."

            <Cite textAlign="right">
              <Image src={images.joe} width="40px" display="inline-block" margin="0 0.5rem" style={{verticalAlign: 'middle'}} />

              smart guy
            </Cite>
          </Text>
        </Slide>

        <Slide bgColor="transparent">
          <Heading textSize="5rem" textColor="secondary">
            Back to work!
          </Heading>

          <Text textSize="2.5rem" textColor="tertiary" margin="5rem 0 0 0">
            "Hey, I heard that GraphQL may be able to help us link those micro services together… Have you ever worked with it?"
          </Text>

          <Text textSize="4rem" textColor="secondary" margin="4rem 0 0 0">
            "No, but it looks awesome and I shall investigate! ✨"

            <Cite textSize="2rem" textAlign="right">
              <Image src={images.bill} width="40px" display="inline-block" margin="0 0.5rem" style={{verticalAlign: 'middle'}} />

              another smart guy
            </Cite>
          </Text>
        </Slide>

        <Slide bgColor="transparent">
          <Heading textSize="4.5rem" textColor="secondary">
            Hey, this looks promising:
          </Heading>

          <Image src={images.apolloLogo} width="400px" display="block" margin="1rem auto 0 auto" />

          <Text textSize="2.3rem" textColor="secondary" margin="3rem 0 0 0" lineHeight="1.2">
            Works out of the box with plain JS, React, Angular, iOS and Android, which means <b>other teams can use it</b> too.
          </Text>

          <Text textSize="2.3rem" textColor="secondary" margin="1.5rem 0 0 0" lineHeight="1.2">
            <b>Well documented</b> and easier to use than Relay (according to the feedback of other developers).
          </Text>

          <Text textSize="2.3rem" textColor="secondary" margin="1.5rem 0 0" lineHeight="1.2">
            Has in-browser <b>developer tools</b> and integrates with GraphiQL.
          </Text>
        </Slide>

        <Slide bgColor="transparent">
          <Heading textSize="5rem" textColor="secondary">
            Let's use it!
          </Heading>

          <Text margin="3rem 0 0">
            <Image src={images.allTheThings} width="10rem" />
          </Text>
        </Slide>

        <Slide bgColor="transparent">
          <Heading textSize="5rem" textColor="tertiary">
            Demo time!
          </Heading>

          <Text margin="3rem 0 0">
            <Image src={images.appScreenshot} height="60vh" />
          </Text>
        </Slide>

        <Slide bgColor="transparent">
          <Heading textSize="5rem" fit textColor="secondary">
            <Link
              href="https://graphql-dogs.claudiamatosa.com"
              target="_blank"
            >
              https://graphql-dogs.claudiamatosa.com
            </Link>
          </Heading>

          <Heading textSize="4rem" textColor="secondary" margin="5rem 0 0">
            <Link
              href="http://bit.ly/2gXnxna"
              target="_blank"
            >
              http://bit.ly/2gXnxna
            </Link>
          </Heading>
        </Slide>

        <Slide bgColor="transparent">
          <Heading textSize="5rem" fit textColor="secondary">
            <Link
              href="https://graphql-dogs.claudiamatosa.com/graphiql"
              target="_blank"
            >
              https://graphql-dogs.claudiamatosa.com/graphiql
            </Link>
          </Heading>

          <Heading textSize="4rem" textColor="secondary" margin="5rem 0 0">
            <Link
              href="http://bit.ly/2gXrt7n"
              target="_blank"
            >
              http://bit.ly/2gXrt7n
            </Link>
          </Heading>
        </Slide>

        <CodeSlide
          bgColor="transparent"
          lang="js"
          code={require("raw-loader!../assets/code/schema.code")}
          ranges={[
            { loc: [0, 0], title: "Schemas are everything" },
            { loc: [23, 26] },
            { loc: [15, 22] },
            { loc: [27, 30] },
            { loc: [31, 34] },
            { loc: [36, 37] },
            { loc: [36, 37], image: images.allTheThings },
        ]}/>

        <CodeSlide
          bgColor="transparent"
          lang="js"
          code={require("raw-loader!../assets/code/resolvers.code")}
          ranges={[
            { loc: [0, 0], title: "Resolving the schema" },
            { loc: [19, 25] },
            { loc: [26, 29] },
            { loc: [35, 38] },
            { loc: [30, 34] },
            { loc: [40, 51] },
            { loc: [19, 20] },
            { loc: [26, 27] },
            { loc: [41, 42] },
            { loc: [53, 54], note: "Type resolver" },
            { loc: [55, 59] },
        ]}/>

        <CodeSlide
          bgColor="transparent"
          lang="js"
          code={require("raw-loader!../assets/code/setup-server.code")}
          ranges={[
            { loc: [0, 0], title: "Server setup" },
            { loc: [28, 31] },
            { loc: [42, 50] },
            { loc: [47, 49] },
        ]}/>

        <CodeSlide
          bgColor="transparent"
          lang="js"
          code={require("raw-loader!../assets/code/test.code")}
          ranges={[
            { loc: [0, 0], title: "Testing" },
            { loc: [21, 33] },
            { loc: [58, 60], note: "Mock api requests" },
            { loc: [68, 88] },
        ]}/>

        <CodeSlide
          bgColor="transparent"
          lang="js"
          code={require("raw-loader!../assets/code/setup-client.code")}
          ranges={[
            { loc: [0, 0], title: "Apollo client" },
            { loc: [32, 35] },
            { loc: [37, 40] },
        ]}/>

        <CodeSlide
          bgColor="transparent"
          lang="js"
          code={require("raw-loader!../assets/code/photos.code")}
          ranges={[
            { loc: [0, 0], title: "Fetching photos" },
            { loc: [44, 55] },
            { loc: [96, 97] },
            { loc: [9, 18] },
            { loc: [11, 12] },
            { loc: [12, 13] },
            { loc: [13, 16] },
            { loc: [22, 23] },
            { loc: [24, 25] },
            { loc: [56, 64], title: "Subscribing to new ratings" },
            { loc: [56, 64]},
            { loc: [66, 68]},
            { loc: [78, 88]},
        ]}/>

        <CodeSlide
          bgColor="transparent"
          lang="js"
          code={require("raw-loader!../assets/code/votes.code")}
          ranges={[
            { loc: [0, 0], title: "Adding new votes" },
            { loc: [47, 55] },
            { loc: [56, 57] },
            { loc: [8, 9] },
            { loc: [21, 24] },
            { loc: [22, 23] },
            { loc: [48, 49] },
        ]}/>

        <Slide bgColor="transparent">
          <Heading textSize="5rem" textColor="secondary">
            That's all! Questions? ☝️
          </Heading>

          <Image src={images.baggins} height="50vh" margin="3rem 0 0" />

          <Text margin="3rem 0 0" textSize="2rem" textColor="secondary">
            (or just rate my dog instead ✨)
          </Text>
        </Slide>

        <Slide bgColor="transparent">
          <Heading textSize="5rem" textColor="secondary">
            Thank you! ❤️
          </Heading>

          <Text margin="3rem 0 0" textSize="2.5rem" textColor="secondary" lineHeight="1.3">
            <Link href="https://github.com/claudiamatosa/graphql-dogs">
              https://github.com/claudiamatosa/graphql-dogs
            </Link><br />

            <Link href="https://graphql-dogs.claudiamatosa.com">
              https://graphql-dogs.claudiamatosa.com
            </Link><br />

            <Link href="http://graphql-dogs.surge.sh">
              http://graphql-dogs.surge.sh
            </Link>
          </Text>

          <Text margin="3rem 0 0" textSize="2rem" textColor="secondary">
            claudiamatosa<br />
            <Link href="https://github.com/claudiamatosa">@github</Link><br />
            <Link href="https://twitter.com/claudiamatosa">@twitter</Link>
          </Text>
        </Slide>
      </Deck>
    );
  }
}
