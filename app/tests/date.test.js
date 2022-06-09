const DateFilter = require("../util/date");

const mockData = [
  {
    date_ms: 1641772800000,
    performance: 0.2,
  },
  {
    date_ms: 1641859200000,
    performance: 0.33,
  },
  {
    date_ms: 1641945600000,
    performance: 0.83,
  },
  {
    date_ms: 1642032000000,
    performance: 0.31,
  },
  {
    date_ms: 1642118400000,
    performance: 0.65,
  },
  {
    date_ms: 1642204800000,
    performance: 0.88,
  },
  {
    date_ms: 1642291200000,
    performance: 0.9,
  },
];

test("empty Data returned", () => {
  const filterDate = new DateFilter(mockData);
  const filteredDate = filterDate.between(
    "2022-07-07",
    "2022-08-14",
    "date_ms"
  );
  expect(filteredDate).toEqual([]);
});

test("Data returned", () => {
  const filterDate = new DateFilter(mockData);
  const filteredDate = filterDate.between(
    "2022-01-01",
    "2022-06-14",
    "date_ms"
  );
  expect(filteredDate).toEqual(mockData);
});

test("Data single data", () => {
  const filterDate = new DateFilter(mockData);
  const filteredDate = filterDate.between(
    "2022-01-01",
    "2022-01-12",
    "date_ms"
  );
  expect(filteredDate).toEqual([
    {
      date_ms: 1641772800000,
      performance: 0.2,
    },
    {
      date_ms: 1641859200000,
      performance: 0.33,
    },
  ]);
});
