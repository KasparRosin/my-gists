// <-- FROM -->
const example_json = [
  {
    Title_1: {
      name: "john",
      age: 19
    }
  },
  {
    Title_2: {
      name: "jane",
      age: 26
    }
  }
];

const result = example_json.reduce((obj, item) => {
  Object.entries(item).map(([key, value]) => {
    return (obj[key] = value);
  });
  return obj;
}, {});

// <-- OUTPUT -->
/*[
    Title_1: [OBJECT],
    Title_2: [OBJECT]
]*/
