// Without Arguments & Without Return
function displayObject1() {
  let phone = {
    brand: "Iphone",
    model: "18 pro",
    price: 60000,
  };

  console.log(phone);
}

displayObject1();

// With Arguments & Without Return

function displayObject2(laptop) {
  console.log(laptop);
}

displayObject2({
  brand: "VivO",
  model: "laptop 15",
  price: 500000,
});

// Without Arguments & With Return

function displayObject3() {
  return {
    brand: "BMW",
    model: "BMW Y1",
    price: 5000000,
  };
}

console.log(displayObject3());

// With Arguments & With Return

function displayObject4(person) {
  return person;
}

console.log(
  displayObject4({
    name: "Venket",
    age: 22,
    gender: "Male",
  }),
);