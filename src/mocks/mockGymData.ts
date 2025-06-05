export const mockGymData = {
  data: {
    gyms: {
      nodes: [
        {
          id: 1,
          name: "Super Strong Gym",
          description:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
          address: {
            lineOne: "123 West Ave",
            lineTwo: null,
            city: "Westerton",
            state: "MA",
            zip: "12345",
          },
          hasNeutralLockers: false,
          hasNeutralRestrooms: true,
          hasExplicitSupport: true,
        },
        {
          id: 2,
          name: "Big Mike's Gym",
          description:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
          address: {
            lineOne: "54321 Main Street",
            lineTwo: "Bldg 3",
            city: "Chicago",
            state: "IL",
            zip: "456789",
          },
          hasNeutralLockers: false,
          hasNeutralRestrooms: false,
          hasExplicitSupport: true,
        },
        {
          id: 3,
          name: "The Regular Gym",
          description:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
          address: {
            lineOne: "117 East Boulevard",
            lineTwo: null,
            city: "Ruville",
            state: "CA",
            zip: "98765",
          },
          hasNeutralLockers: false,
          hasNeutralRestrooms: false,
          hasExplicitSupport: false,
        },
        {
          id: 4,
          name: "Weightlifting Land",
          description:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
          address: {
            lineOne: "789 Blueberry Ave",
            lineTwo: null,
            city: "Fruitsville",
            state: "NY",
            zip: "78938",
          },
          hasNeutralLockers: true,
          hasNeutralRestrooms: true,
          hasExplicitSupport: false,
        },
        {
          id: 5,
          name: "Gainz n thangs",
          description:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
          address: {
            lineOne: "11456 Friendship St",
            lineTwo: null,
            city: "Friendsville",
            state: "OH",
            zip: "09536",
          },
          hasNeutralLockers: true,
          hasNeutralRestrooms: false,
          hasExplicitSupport: true,
        },
      ],
    },
  },
};

export function getMockGymData() {
  return mockGymData;
}
