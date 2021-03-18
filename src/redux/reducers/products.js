const initialState = [
  {
    id: 1,
    name: "iphone 6s",
    price: 1250,
    status: true,
  },
  {
    id: 2,
    name: "iphone 7s",
    price: 1250,
    status: false,
  },
  {
    id: 1,
    name: "iphone 8s",
    price: 1250,
    status: true,
  },
  {
    id: 1,
    name: "iphone 9s",
    price: 1250,
    status: false,
  },
  {
    id: 1,
    name: "iphone 10s",
    price: 1250,
    status: true,
  },
];

const products = (state = initialState, action) => {
  switch (action.type) {
    default:
      return [...state];
  }
};

export default products;
