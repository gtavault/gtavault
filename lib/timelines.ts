export type TimelineEvent = {
  id: string;
  title: string;
};

export type TimelinePuzzle = {
  id: number;
  events: TimelineEvent[];
};

export const timelines: TimelinePuzzle[] = [
  {
    id: 1,
    events: [
      { id: "1a", title: "Michael retires from crime and moves to Los Santos" },
      { id: "1b", title: "Michael meets Franklin" },
      { id: "1c", title: "The Jewel Store Job" },
      { id: "1d", title: "Trevor discovers Michael is still alive" },
    ],
  },

  {
    id: 2,
    events: [
      { id: "2a", title: "Franklin steals Jimmy De Santa's car" },
      { id: "2b", title: "Michael rescues Jimmy from the yacht" },
      { id: "2c", title: "The Jewel Store Job" },
      { id: "2d", title: "Trevor arrives in Los Santos" },
    ],
  },

  {
    id: 3,
    events: [
      { id: "3a", title: "Franklin works for Simeon Yetarian" },
      { id: "3b", title: "Michael destroys Simeon's dealership" },
      { id: "3c", title: "Franklin moves into his new house" },
      { id: "3d", title: "Franklin meets Trevor" },
    ],
  },

  {
    id: 4,
    events: [
      { id: "4a", title: "Michael and Franklin rescue Lamar from the sawmill" },
      { id: "4b", title: "Trevor arrives in Los Santos" },
      { id: "4c", title: "The Merryweather Heist" },
      { id: "4d", title: "The Paleto Score" },
    ],
  },

  {
    id: 5,
    events: [
      { id: "5a", title: "Michael meets Franklin" },
      { id: "5b", title: "The Father/Son mission" },
      { id: "5c", title: "Marriage Counselling" },
      { id: "5d", title: "Daddy's Little Girl" },
    ],
  },

  {
    id: 6,
    events: [
      { id: "6a", title: "Franklin steals the motorcycle from Simeon's dealership" },
      { id: "6b", title: "Franklin repossesses Jimmy's car" },
      { id: "6c", title: "Franklin rescues Michael from the yacht" },
      { id: "6d", title: "Michael and Franklin complete Chop" },
    ],
  },

  {
    id: 7,
    events: [
      { id: "7a", title: "Trevor tortures Mr. K" },
      { id: "7b", title: "Trevor discovers Michael is alive" },
      { id: "7c", title: "Trevor arrives in Los Santos" },
      { id: "7d", title: "Trevor meets Michael again" },
    ],
  },

  {
    id: 8,
    events: [
      { id: "8a", title: "The Jewel Store Job" },
      { id: "8b", title: "Trevor investigates the mystery of the Lost MC" },
      { id: "8c", title: "Trevor meets Wade" },
      { id: "8d", title: "Trevor arrives at Floyd's apartment" },
    ],
  },

  {
    id: 9,
    events: [
      { id: "9a", title: "Michael visits Dr. Friedlander" },
      { id: "9b", title: "Michael and Franklin steal a car for Simeon" },
      { id: "9c", title: "Michael destroys Simeon's dealership" },
      { id: "9d", title: "Michael meets Trevor again" },
    ],
  },

  {
    id: 10,
    events: [
      { id: "10a", title: "Franklin completes his first assassination for Lester" },
      { id: "10b", title: "Franklin rescues Lamar from the Ballas" },
      { id: "10c", title: "The Multi Target Assassination" },
      { id: "10d", title: "The Vice Assassination" },
    ],
  },

  {
    id: 11,
    events: [
      { id: "11a", title: "Trevor takes over the Lost MC's trailer park" },
      { id: "11b", title: "Trevor attacks the O'Neil brothers" },
      { id: "11c", title: "Trevor destroys the O'Neil operation" },
      { id: "11d", title: "Trevor meets Wade" },
    ],
  },

  {
    id: 12,
    events: [
      { id: "12a", title: "Michael's family leaves him" },
      { id: "12b", title: "Michael visits Franklin's house" },
      { id: "12c", title: "Michael returns to his family" },
      { id: "12d", title: "Michael goes to therapy with Dr. Friedlander" },
    ],
  },

  {
    id: 13,
    events: [
      { id: "13a", title: "The Bugstars team prepares for the Jewel Store Job" },
      { id: "13b", title: "The Jewel Store Job takes place" },
      { id: "13c", title: "Michael and Trevor speak on the phone" },
      { id: "13d", title: "Trevor begins investigating Michael's past" },
    ],
  },

  {
    id: 14,
    events: [
      { id: "14a", title: "Franklin buys the Downtown Cab Co." },
      { id: "14b", title: "Franklin purchases a new safehouse" },
      { id: "14c", title: "Franklin receives a call from Simeon" },
      { id: "14d", title: "Franklin becomes involved with Lamar's gang problems" },
    ],
  },

  {
    id: 15,
    events: [
      { id: "15a", title: "Trevor steals the meth shipment from the Lost MC" },
      { id: "15b", title: "Trevor meets Chef" },
      { id: "15c", title: "Trevor attacks the O'Neil brothers" },
      { id: "15d", title: "Trevor takes over the O'Neil ranch" },
    ],
  },

  {
    id: 16,
    events: [
      { id: "16a", title: "Michael and Franklin chase down the stolen bike" },
      { id: "16b", title: "Michael's house is attacked by the Triads" },
      { id: "16c", title: "Michael rescues Amanda from the tennis coach" },
      { id: "16d", title: "Michael and Franklin investigate the Epsilon Program" },
    ],
  },

  {
    id: 17,
    events: [
      { id: "17a", title: "Trevor discovers the truth about Brad" },
      { id: "17b", title: "Trevor travels to Los Santos" },
      { id: "17c", title: "Trevor confronts Michael at the graveyard" },
      { id: "17d", title: "Trevor reunites with Michael at the FIB building" },
    ],
  },

  {
    id: 18,
    events: [
      { id: "18a", title: "The Merryweather Heist" },
      { id: "18b", title: "The Paleto Score" },
      { id: "18c", title: "The Bureau Raid" },
      { id: "18d", title: "The Big Score" },
    ],
  },

  {
    id: 19,
    events: [
      { id: "19a", title: "Michael meets Dave Norton" },
      { id: "19b", title: "Dave introduces Michael to the FIB operation" },
      { id: "19c", title: "The Bureau Raid is planned" },
      { id: "19d", title: "The Bureau Raid takes place" },
    ],
  },

  {
    id: 20,
    events: [
      { id: "20a", title: "Franklin helps Michael escape from the Chinese gangsters" },
      { id: "20b", title: "Trevor attacks the Lost MC" },
      { id: "20c", title: "Trevor destroys the O'Neil operation" },
      { id: "20d", title: "Trevor and Michael plan the Merryweather Heist" },
    ],
  },

  {
    id: 21,
    events: [
      { id: "21a", title: "The Hotel Assassination" },
      { id: "21b", title: "The Multi Target Assassination" },
      { id: "21c", title: "The Vice Assassination" },
      { id: "21d", title: "The Bus Assassination" },
    ],
  },

  {
    id: 22,
    events: [
      { id: "22a", title: "Michael discovers Amanda's affair" },
      { id: "22b", title: "Michael chases the tennis coach" },
      { id: "22c", title: "Michael and Franklin destroy the mansion" },
      { id: "22d", title: "Michael's family leaves the house" },
    ],
  },

  {
    id: 23,
    events: [
      { id: "23a", title: "Trevor meets Ron" },
      { id: "23b", title: "Trevor attacks the Lost MC" },
      { id: "23c", title: "Trevor steals a military convoy" },
      { id: "23d", title: "Trevor begins working with Martin Madrazo" },
    ],
  },

  {
    id: 24,
    events: [
      { id: "24a", title: "Franklin and Lamar steal cars for Simeon" },
      { id: "24b", title: "Franklin becomes Simeon's best repossession man" },
      { id: "24c", title: "Michael attacks Simeon's dealership" },
      { id: "24d", title: "Franklin leaves Simeon's employment" },
    ],
  },

  {
    id: 25,
    events: [
      { id: "25a", title: "The Paleto Score" },
      { id: "25b", title: "Trevor takes over the Lost MC's business" },
      { id: "25c", title: "Michael returns to Los Santos after the Paleto Score" },
      { id: "25d", title: "The Bureau Raid" },
    ],
  },

  {
    id: 26,
    events: [
      { id: "26a", title: "Michael and Franklin meet Lester" },
      { id: "26b", title: "Lester helps plan the Jewel Store Job" },
      { id: "26c", title: "Lester helps plan the Paleto Score" },
      { id: "26d", title: "Lester helps plan the Big Score" },
    ],
  },

  {
    id: 27,
    events: [
      { id: "27a", title: "Trevor meets Wade" },
      { id: "27b", title: "Trevor searches for Michael in Los Santos" },
      { id: "27c", title: "Trevor meets Franklin" },
      { id: "27d", title: "Trevor begins working with Michael again" },
    ],
  },

  {
    id: 28,
    events: [
      { id: "28a", title: "Franklin helps Lamar rescue a kidnapped friend" },
      { id: "28b", title: "Franklin helps Lamar escape the Ballas" },
      { id: "28c", title: "Franklin rescues Lamar from the sawmill" },
      { id: "28d", title: "Franklin rescues Lamar from Stretch" },
    ],
  },

  {
    id: 29,
    events: [
      { id: "29a", title: "Michael and Franklin meet Lester at the observatory" },
      { id: "29b", title: "The Merryweather Heist" },
      { id: "29c", title: "The Paleto Score" },
      { id: "29d", title: "The Bureau Raid" },
    ],
  },

  {
    id: 30,
    events: [
      { id: "30a", title: "Michael returns to his family" },
      { id: "30b", title: "Michael and Franklin begin working together again" },
      { id: "30c", title: "Trevor discovers Michael is alive" },
      { id: "30d", title: "Trevor arrives in Los Santos" },
    ],
  },

  {
    id: 31,
    events: [
      { id: "31a", title: "Franklin meets Lamar" },
      { id: "31b", title: "Franklin meets Michael" },
      { id: "31c", title: "Franklin meets Trevor" },
      { id: "31d", title: "Franklin becomes involved in the FIB's plans" },
    ],
  },

  {
    id: 32,
    events: [
      { id: "32a", title: "Michael's house is attacked" },
      { id: "32b", title: "Michael discovers Trevor is alive" },
      { id: "32c", title: "Trevor confronts Michael" },
      { id: "32d", title: "Michael and Trevor work together again" },
    ],
  },

  {
    id: 33,
    events: [
      { id: "33a", title: "The Jewel Store Job is planned" },
      { id: "33b", title: "The Jewel Store Job is completed" },
      { id: "33c", title: "Trevor learns about Michael's involvement in the robbery" },
      { id: "33d", title: "Trevor confronts Michael about Brad" },
    ],
  },

  {
    id: 34,
    events: [
      { id: "34a", title: "Trevor arrives in Los Santos" },
      { id: "34b", title: "Trevor meets Franklin" },
      { id: "34c", title: "Trevor and Michael meet at the FIB building" },
      { id: "34d", title: "Trevor helps Michael with the Paleto Score" },
    ],
  },

  {
    id: 35,
    events: [
      { id: "35a", title: "Michael begins therapy with Dr. Friedlander" },
      { id: "35b", title: "Michael's family leaves him" },
      { id: "35c", title: "Michael's family returns" },
      { id: "35d", title: "Michael confronts Dr. Friedlander" },
    ],
  },

  {
    id: 36,
    events: [
      { id: "36a", title: "Franklin completes the Hotel Assassination" },
      { id: "36b", title: "Franklin completes the Multi Target Assassination" },
      { id: "36c", title: "Franklin completes the Vice Assassination" },
      { id: "36d", title: "Franklin completes the Bus Assassination" },
    ],
  },

  {
    id: 37,
    events: [
      { id: "37a", title: "Trevor steals the military jet" },
      { id: "37b", title: "Trevor attacks the Merryweather base" },
      { id: "37c", title: "Trevor and Michael perform the Merryweather Heist" },
      { id: "37d", title: "Trevor and Michael plan the Paleto Score" },
    ],
  },

  {
    id: 38,
    events: [
      { id: "38a", title: "Michael and Franklin complete the Jewel Store Job" },
      { id: "38b", title: "Franklin receives a new house from Michael" },
      { id: "38c", title: "Franklin begins working with Lester" },
      { id: "38d", title: "Franklin becomes involved in the Big Score" },
    ],
  },

  {
    id: 39,
    events: [
      { id: "39a", title: "Trevor discovers Michael's fake death story" },
      { id: "39b", title: "Trevor visits Michael's old grave" },
      { id: "39c", title: "Trevor confronts Michael" },
      { id: "39d", title: "Trevor agrees to work with Michael again" },
    ],
  },

  {
    id: 40,
    events: [
      { id: "40a", title: "Michael and Franklin meet Devin Weston" },
      { id: "40b", title: "Devin manipulates Franklin into targeting Michael" },
      { id: "40c", title: "Franklin chooses Michael's fate" },
      { id: "40d", title: "The final confrontation takes place" },
    ],
  },

  {
    id: 41,
    events: [
      { id: "41a", title: "The Paleto Score is planned" },
      { id: "41b", title: "The Paleto Score begins" },
      { id: "41c", title: "Michael and Trevor escape the military response" },
      { id: "41d", title: "The crew begins preparing for the Bureau Raid" },
    ],
  },

  {
    id: 42,
    events: [
      { id: "42a", title: "Michael is contacted by Steve Haines" },
      { id: "42b", title: "The FIB forces Michael and Franklin into a raid" },
      { id: "42c", title: "The Bureau Raid is planned" },
      { id: "42d", title: "The Bureau Raid is completed" },
    ],
  },

  {
    id: 43,
    events: [
      { id: "43a", title: "Franklin moves into the Vinewood Hills house" },
      { id: "43b", title: "Franklin begins working with Lester" },
      { id: "43c", title: "Franklin helps prepare for the Big Score" },
      { id: "43d", title: "Franklin participates in the Big Score" },
    ],
  },

  {
    id: 44,
    events: [
      { id: "44a", title: "Trevor meets Michael's family" },
      { id: "44b", title: "Trevor meets Jimmy" },
      { id: "44c", title: "Trevor meets Amanda" },
      { id: "44d", title: "Trevor becomes involved in Michael's family problems" },
    ],
  },

  {
    id: 45,
    events: [
      { id: "45a", title: "Michael and Trevor reunite" },
      { id: "45b", title: "The Merryweather Heist" },
      { id: "45c", title: "The Paleto Score" },
      { id: "45d", title: "The final heist is planned" },
    ],
  },

  {
    id: 46,
    events: [
      { id: "46a", title: "Franklin works for Simeon" },
      { id: "46b", title: "Franklin meets Michael" },
      { id: "46c", title: "Franklin meets Lester" },
      { id: "46d", title: "Franklin meets Trevor" },
    ],
  },

  {
    id: 47,
    events: [
      { id: "47a", title: "Michael and Franklin rescue Lamar" },
      { id: "47b", title: "Trevor discovers Michael's secret" },
      { id: "47c", title: "Michael and Trevor reunite" },
      { id: "47d", title: "Franklin becomes involved in the final heist" },
    ],
  },

  {
    id: 48,
    events: [
      { id: "48a", title: "The Jewel Store Job" },
      { id: "48b", title: "The Merryweather Heist" },
      { id: "48c", title: "The Paleto Score" },
      { id: "48d", title: "The Big Score" },
    ],
  },

  {
    id: 49,
    events: [
      { id: "49a", title: "Franklin meets Michael" },
      { id: "49b", title: "Trevor arrives in Los Santos" },
      { id: "49c", title: "The Paleto Score" },
      { id: "49d", title: "Franklin makes the final choice" },
    ],
  },

  {
    id: 50,
    events: [
      { id: "50a", title: "Michael's family returns" },
      { id: "50b", title: "Trevor and Michael complete another major heist" },
      { id: "50c", title: "The Big Score" },
      { id: "50d", title: "The final decision is made" },
    ],
  },

  {
    id: 51,
    events: [
      { id: "51a", title: "Franklin and Lamar steal two motorcycles for Simeon" },
      { id: "51b", title: "Michael catches Franklin breaking into his son's car" },
      { id: "51c", title: "Michael and Franklin rescue Jimmy from the yacht" },
      { id: "51d", title: "Michael and Franklin take Chop to search for D" },
    ],
  },

  {
    id: 52,
    events: [
      { id: "52a", title: "Michael discovers Jimmy has been spending time with Lamar" },
      { id: "52b", title: "Michael destroys the tennis coach's car" },
      { id: "52c", title: "Michael and Franklin destroy the mansion belonging to Martin Madrazo" },
      { id: "52d", title: "Michael begins attending therapy with Dr. Friedlander" },
    ],
  },

  {
    id: 53,
    events: [
      { id: "53a", title: "Franklin takes Jimmy's car back to Simeon's dealership" },
      { id: "53b", title: "Franklin and Lamar attempt another vehicle repossession" },
      { id: "53c", title: "Michael storms into Simeon's dealership and destroys it" },
      { id: "53d", title: "Franklin's relationship with Simeon comes to an end" },
    ],
  },

  {
    id: 54,
    events: [
      { id: "54a", title: "Michael and Franklin rescue Jimmy from the yacht" },
      { id: "54b", title: "Michael takes Franklin to the golf course to deal with his problems" },
      { id: "54c", title: "Michael discovers Amanda with the tennis coach" },
      { id: "54d", title: "Michael takes Franklin to meet Lester at the observatory" },
    ],
  },

  {
    id: 55,
    events: [
      { id: "55a", title: "Franklin helps Lamar steal a motorcycle from the Ballas" },
      { id: "55b", title: "Franklin and Lamar steal a van from a rival gang" },
      { id: "55c", title: "Franklin helps Lamar escape from the sawmill" },
      { id: "55d", title: "Franklin later helps Lamar escape from Stretch's gang" },
    ],
  },

  {
    id: 56,
    events: [
      { id: "56a", title: "Michael takes Jimmy out on his first day at the beach" },
      { id: "56b", title: "Michael and Franklin chase down the stolen yacht" },
      { id: "56c", title: "Michael and Franklin work together to rescue Jimmy" },
      { id: "56d", title: "Michael introduces Franklin to Lester" },
    ],
  },

  {
    id: 57,
    events: [
      { id: "57a", title: "Trevor discovers that Michael is living in Los Santos" },
      { id: "57b", title: "Trevor travels to Los Santos to find Michael" },
      { id: "57c", title: "Trevor confronts Michael at the cemetery" },
      { id: "57d", title: "Trevor and Michael begin working together again" },
    ],
  },

  {
    id: 58,
    events: [
      { id: "58a", title: "Trevor arrives at Floyd's apartment after reaching Los Santos" },
      { id: "58b", title: "Trevor forces Floyd to help him with a port operation" },
      { id: "58c", title: "Trevor steals a submarine for the Merryweather operation" },
      { id: "58d", title: "Trevor and Michael steal the Merryweather cargo" },
    ],
  },

  {
    id: 59,
    events: [
      { id: "59a", title: "Trevor destroys the Lost MC's trailer park" },
      { id: "59b", title: "Trevor begins taking over the meth business in Blaine County" },
      { id: "59c", title: "Trevor attacks the O'Neil brothers" },
      { id: "59d", title: "Trevor takes control of the O'Neil ranch" },
    ],
  },

  {
    id: 60,
    events: [
      { id: "60a", title: "Michael and Franklin scout the port for a Merryweather operation" },
      { id: "60b", title: "Trevor steals a submarine for the heist" },
      { id: "60c", title: "Michael and Trevor steal the Merryweather cargo" },
      { id: "60d", title: "The crew begins preparing for the Paleto Score" },
    ],
  },

  {
    id: 61,
    events: [
      { id: "61a", title: "Trevor meets Ron at his trailer in Sandy Shores" },
      { id: "61b", title: "Trevor helps Ron investigate the Lost MC" },
      { id: "61c", title: "Trevor attacks the Lost MC's trailer park" },
      { id: "61d", title: "Trevor takes control of the Lost MC's local operation" },
    ],
  },

  {
    id: 62,
    events: [
      { id: "62a", title: "Michael and Franklin meet Dave Norton at the Kortz Center" },
      { id: "62b", title: "The FIB forces Michael, Franklin and Trevor to work together" },
      { id: "62c", title: "Michael, Franklin and Trevor rescue Mr. K" },
      { id: "62d", title: "The trio carry out an FIB interrogation operation" },
    ],
  },

  {
    id: 63,
    events: [
      { id: "63a", title: "Trevor learns that the O'Neil brothers are competing with him" },
      { id: "63b", title: "Trevor attacks the O'Neil ranch with explosives" },
      { id: "63c", title: "Trevor kills the remaining O'Neil brothers" },
      { id: "63d", title: "Trevor takes over the O'Neil operation" },
    ],
  },

  {
    id: 64,
    events: [
      { id: "64a", title: "Franklin helps Lamar escape after a drug deal goes wrong" },
      { id: "64b", title: "Franklin and Trevor rescue Michael from the Chinese gangsters" },
      { id: "64c", title: "Franklin helps Lamar escape from the sawmill" },
      { id: "64d", title: "Franklin helps Lamar deal with Stretch's betrayal" },
    ],
  },

  {
    id: 65,
    events: [
      { id: "65a", title: "Michael discovers that his family has left the house" },
      { id: "65b", title: "Michael tries to repair his relationship with Amanda" },
      { id: "65c", title: "Michael reunites with his family" },
      { id: "65d", title: "Michael returns to working with Franklin" },
    ],
  },

  {
    id: 66,
    events: [
      { id: "66a", title: "Trevor discovers that Michael's former partner is still alive" },
      { id: "66b", title: "Trevor travels from Sandy Shores to Los Santos" },
      { id: "66c", title: "Trevor discovers Michael's house" },
      { id: "66d", title: "Trevor finally confronts Michael" },
    ],
  },

  {
    id: 67,
    events: [
      { id: "67a", title: "Franklin begins working with Lester on assassination jobs" },
      { id: "67b", title: "Franklin carries out the assassination at the hotel" },
      { id: "67c", title: "Franklin carries out the multi-target assassination" },
      { id: "67d", title: "Franklin carries out the assassination involving the bus" },
    ],
  },

  {
    id: 68,
    events: [
      { id: "68a", title: "Michael and Franklin steal a police helicopter" },
      { id: "68b", title: "Michael and Franklin follow a celebrity using the helicopter" },
      { id: "68c", title: "Michael helps Solomon Richards deal with Rocco" },
      { id: "68d", title: "Michael steals a movie star's car for Devin Weston" },
    ],
  },

  {
    id: 69,
    events: [
      { id: "69a", title: "Michael and Franklin begin planning the Paleto bank robbery" },
      { id: "69b", title: "Trevor steals military equipment for the robbery" },
      { id: "69c", title: "The crew robs the Paleto Bay bank" },
      { id: "69d", title: "Michael and Trevor escape the military response after the robbery" },
    ],
  },

  {
    id: 70,
    events: [
      { id: "70a", title: "Trevor and Michael steal the Merryweather device" },
      { id: "70b", title: "Trevor discovers Michael has been hiding the truth about Brad" },
      { id: "70c", title: "Trevor travels to North Yankton with Michael" },
      { id: "70d", title: "Trevor discovers Brad's grave is actually Michael's old hiding place" },
    ],
  },

  {
    id: 71,
    events: [
      { id: "71a", title: "Franklin discovers Lamar has been kidnapped" },
      { id: "71b", title: "Franklin contacts Michael for help rescuing Lamar" },
      { id: "71c", title: "Michael and Franklin storm the sawmill" },
      { id: "71d", title: "Franklin and Michael rescue Lamar" },
    ],
  },

  {
    id: 72,
    events: [
      { id: "72a", title: "Michael and Franklin steal a military vehicle for the FIB" },
      { id: "72b", title: "The crew prepares the equipment for the Paleto Score" },
      { id: "72c", title: "The Paleto Bay bank is robbed" },
      { id: "72d", title: "The crew escapes through the military blockade" },
    ],
  },

  {
    id: 73,
    events: [
      { id: "73a", title: "Trevor learns that Michael has been working with the FIB" },
      { id: "73b", title: "Trevor confronts Michael about his past" },
      { id: "73c", title: "Michael and Trevor are forced to work together by the FIB" },
      { id: "73d", title: "Michael, Franklin and Trevor complete an FIB operation" },
    ],
  },

  {
    id: 74,
    events: [
      { id: "74a", title: "Michael helps Solomon Richards regain control of his movie studio" },
      { id: "74b", title: "Michael steals a movie prop for Solomon" },
      { id: "74c", title: "Michael confronts Rocco at the studio" },
      { id: "74d", title: "Michael helps complete filming for Meltdown" },
    ],
  },

  {
    id: 75,
    events: [
      { id: "75a", title: "Franklin begins living in his new Vinewood Hills house" },
      { id: "75b", title: "Franklin becomes involved with Lamar's problems with Stretch" },
      { id: "75c", title: "Franklin helps rescue Lamar from the sawmill" },
      { id: "75d", title: "Franklin becomes involved in planning the final heist" },
    ],
  },

  {
    id: 76,
    events: [
      { id: "76a", title: "Michael and Trevor investigate the disappearance of Patricia" },
      { id: "76b", title: "Trevor learns that Martin Madrazo wants revenge" },
      { id: "76c", title: "Michael and Trevor kidnap Martin Madrazo's wife" },
      { id: "76d", title: "Michael and Trevor hide at Trevor's airfield" },
    ],
  },

  {
    id: 77,
    events: [
      { id: "77a", title: "Michael returns to Los Santos after hiding in Blaine County" },
      { id: "77b", title: "Michael reunites with his family" },
      { id: "77c", title: "Michael begins repairing his relationship with Jimmy" },
      { id: "77d", title: "Michael prepares for the final heist" },
    ],
  },

  {
    id: 78,
    events: [
      { id: "78a", title: "The crew begins planning the Union Depository robbery" },
      { id: "78b", title: "Franklin obtains the necessary equipment for the heist" },
      { id: "78c", title: "Michael and Trevor prepare for the Big Score" },
      { id: "78d", title: "The Union Depository is robbed" },
    ],
  },

  {
    id: 79,
    events: [
      { id: "79a", title: "Michael and Franklin meet Devin Weston" },
      { id: "79b", title: "Devin orders Franklin to deal with Trevor" },
      { id: "79c", title: "Devin pressures Franklin to choose between Michael and Trevor" },
      { id: "79d", title: "Franklin makes the final choice" },
    ],
  },

  {
    id: 80,
    events: [
      { id: "80a", title: "Franklin helps Lamar escape from the Ballas" },
      { id: "80b", title: "Franklin discovers that Stretch has betrayed Lamar" },
      { id: "80c", title: "Franklin helps rescue Lamar from the sawmill" },
      { id: "80d", title: "Franklin confronts the people responsible for Lamar's problems" },
    ],
  },

  {
    id: 81,
    events: [
      { id: "81a", title: "Trevor takes control of the Lost MC's trailer park" },
      { id: "81b", title: "Trevor begins attacking the O'Neil operation" },
      { id: "81c", title: "Trevor destroys the O'Neil ranch" },
      { id: "81d", title: "Trevor begins working with Martin Madrazo" },
    ],
  },

  {
    id: 82,
    events: [
      { id: "82a", title: "Michael and Franklin steal a sports car for Devin Weston" },
      { id: "82b", title: "Michael helps Devin obtain another target's vehicle" },
      { id: "82c", title: "Franklin is ordered to deal with Trevor" },
      { id: "82d", title: "Franklin is forced to decide the fate of Michael and Trevor" },
    ],
  },

  {
    id: 83,
    events: [
      { id: "83a", title: "Michael's family leaves after his life becomes increasingly dangerous" },
      { id: "83b", title: "Michael begins trying to repair his relationship with his family" },
      { id: "83c", title: "Michael's family returns home" },
      { id: "83d", title: "Michael's family attends the premiere of Meltdown" },
    ],
  },

  {
    id: 84,
    events: [
      { id: "84a", title: "Trevor discovers Michael's secret about Brad" },
      { id: "84b", title: "Trevor travels to North Yankton" },
      { id: "84c", title: "Trevor discovers Brad's body" },
      { id: "84d", title: "Trevor returns to Los Santos with Michael" },
    ],
  },

  {
    id: 85,
    events: [
      { id: "85a", title: "Michael and Franklin meet Lester at the garment factory" },
      { id: "85b", title: "The crew steals the necessary equipment for the Bureau Raid" },
      { id: "85c", title: "Michael and Franklin infiltrate the FIB building" },
      { id: "85d", title: "The Bureau Raid is completed" },
    ],
  },

  {
    id: 86,
    events: [
      { id: "86a", title: "Franklin helps Michael escape from the Chinese gangsters" },
      { id: "86b", title: "Franklin discovers Lamar has been kidnapped" },
      { id: "86c", title: "Franklin and Michael rescue Lamar from the sawmill" },
      { id: "86d", title: "Franklin begins preparing for the final heist" },
    ],
  },

  {
    id: 87,
    events: [
      { id: "87a", title: "Trevor and Michael steal the Merryweather cargo" },
      { id: "87b", title: "Trevor and Michael rob the Paleto Bay bank" },
      { id: "87c", title: "Trevor and Michael travel to North Yankton" },
      { id: "87d", title: "Trevor discovers the truth about Brad" },
    ],
  },

  {
    id: 88,
    events: [
      { id: "88a", title: "Michael and Franklin complete the Jewel Store Job" },
      { id: "88b", title: "Trevor discovers that Michael is alive" },
      { id: "88c", title: "Michael and Trevor reunite in Los Santos" },
      { id: "88d", title: "The crew prepares for the Paleto Score" },
    ],
  },

  {
    id: 89,
    events: [
      { id: "89a", title: "Franklin meets Michael after chasing down his son" },
      { id: "89b", title: "Michael introduces Franklin to Lester" },
      { id: "89c", title: "Franklin begins working with Michael on major heists" },
      { id: "89d", title: "Franklin becomes involved in the final score" },
    ],
  },

  {
    id: 90,
    events: [
      { id: "90a", title: "Trevor arrives in Los Santos looking for Michael" },
      { id: "90b", title: "Trevor discovers Michael's new life" },
      { id: "90c", title: "Trevor confronts Michael at his home" },
      { id: "90d", title: "Trevor and Michael are forced to work together again" },
    ],
  },

  {
    id: 91,
    events: [
      { id: "91a", title: "The crew completes the Jewel Store robbery" },
      { id: "91b", title: "The crew completes the Merryweather operation" },
      { id: "91c", title: "The crew completes the Paleto Bay robbery" },
      { id: "91d", title: "The crew prepares for the Bureau Raid" },
    ],
  },

  {
    id: 92,
    events: [
      { id: "92a", title: "Michael and Franklin meet Lester for the first major heist" },
      { id: "92b", title: "Trevor discovers Michael is alive" },
      { id: "92c", title: "Michael and Trevor complete the Merryweather Heist" },
      { id: "92d", title: "Michael, Franklin and Trevor prepare for the final score" },
    ],
  },

  {
    id: 93,
    events: [
      { id: "93a", title: "Franklin begins working for Simeon" },
      { id: "93b", title: "Franklin meets Michael" },
      { id: "93c", title: "Franklin meets Trevor" },
      { id: "93d", title: "Franklin is forced to choose Michael or Trevor" },
    ],
  },

  {
    id: 94,
    events: [
      { id: "94a", title: "Michael's family leaves him after his life spirals out of control" },
      { id: "94b", title: "Michael becomes involved in the FIB's plans" },
      { id: "94c", title: "Michael's family returns to Los Santos" },
      { id: "94d", title: "Michael prepares for the final heist" },
    ],
  },

  {
    id: 95,
    events: [
      { id: "95a", title: "Trevor discovers Michael's secret about Brad" },
      { id: "95b", title: "Trevor travels to North Yankton" },
      { id: "95c", title: "Trevor discovers Brad's grave" },
      { id: "95d", title: "Trevor returns to Los Santos" },
    ],
  },

  {
    id: 96,
    events: [
      { id: "96a", title: "Franklin helps Lamar deal with the Ballas" },
      { id: "96b", title: "Franklin discovers Lamar has been kidnapped" },
      { id: "96c", title: "Franklin and Michael rescue Lamar" },
      { id: "96d", title: "Franklin helps Lamar after Stretch's betrayal" },
    ],
  },

  {
    id: 97,
    events: [
      { id: "97a", title: "Michael and Franklin begin working with Lester" },
      { id: "97b", title: "The Jewel Store is robbed" },
      { id: "97c", title: "The Paleto Bay bank is robbed" },
      { id: "97d", title: "The Union Depository is robbed" },
    ],
  },

  {
    id: 98,
    events: [
      { id: "98a", title: "Trevor arrives in Los Santos" },
      { id: "98b", title: "Trevor reunites with Michael" },
      { id: "98c", title: "Trevor learns the truth about Brad" },
      { id: "98d", title: "Trevor helps prepare for the final heist" },
    ],
  },

  {
    id: 99,
    events: [
      { id: "99a", title: "Franklin meets Michael for the first time" },
      { id: "99b", title: "Michael and Franklin complete the Jewel Store Job" },
      { id: "99c", title: "Franklin becomes involved with Trevor" },
      { id: "99d", title: "Franklin becomes involved in the final heist" },
    ],
  },

  {
    id: 100,
    events: [
      { id: "100a", title: "Michael meets Franklin for the first time" },
      { id: "100b", title: "The Jewel Store Job takes place" },
      { id: "100c", title: "The Paleto Score takes place" },
      { id: "100d", title: "The Big Score takes place" },
    ],
  },
];