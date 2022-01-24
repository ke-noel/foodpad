# foodpad | McHacks9

## How to Use

- `npm install`
- `expo start`

## Requirements

- [NodeJS 16.13.0](https://nodejs.org/en/download/)

## Technology

- [Expo](https://expo.dev/)
- [NativeBase](https://nativebase.io/)
- [React Native](https://reactnative.dev/)

## Inspiration

Food waste is a huge issue globally. Overall, we throw out about 1/3 of all of the food we produce ([FAO](https://www.fao.org/3/mb060e/mb060e00.pdf)), and that number is even higher at up to 40% in the U.S. ([Gunders] (<https://www.nrdc.org/sites/default/files/wasted-food-IP.pdf>)). Young adults throw away an even higher proportion of their food than other age groups ([University of Illinois](https://www.sciencedaily.com/releases/2018/08/180822122832.htm)).

All of us have on the team have had problems with buying food and then forgetting about it. It's been especially bad in the last couple of years because the pandemic has pushed us to buy more food less often. The potatoes will be hiding behind some other things and by the time we remember them, they're almost potato plants.

## What it does

Foodpad is an application to help users track what food they have at home and when it needs to be used by. Users simply add their groceries and select how they're planning to store the item (fridge, pantry, freezer), and the app suggests an expiry date. The app even suggests the best storage method for the type of grocery. The items are sorted so that the soonest expiry date is at the top. As the items are used, the user removes them from the list. At any time, the user can access recipes for the ingredients.

## How we built it

We prototyped the application in Figma and built a proof-of-concept version with React JS. We use API calls to the opensourced TheMealDB, which has recipes for given ingredients.

## Challenges we ran into

Only one of us had ever used JavaScript before, so it was tough to figure out how to use that, especially to get it to look nice. None of us had ever used Figma either, and it was tricky at first, but it's a really lovely tool and we'll definitely use it again in the future!

## Accomplishments that we're proud of

- We think it's a really cool idea that would be helpful in our own lives and would also be useful for other people.

- We're all more hardware/backend coders, so we're really proud of the design work that went into this and just pushing ourselves outside of our comfort zones.

## What we learned

- how to prioritize tasks in a project over a very short timeframe for an MVP
- how to code in JS and use React
- how to design an application to look nice
- how to use Figma

## What's next for foodPad

- make the application's UI match the design more closely
- expanding the available food options
- giving users the option of multiple recipes for an ingredient
- selecting recipes that use many of the ingredients on the food list
- send push notifications to the user if the product is going to expire in the next day
- if a certain food keeps spoiling, suggest to the user that they should buy less of an item
