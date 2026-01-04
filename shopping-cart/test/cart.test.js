const { addItem, removeItem, getTotalItems } = require('../cart');

describe("Shopping Cart Tests", () => {

  test("Add item - positive", () => {
    const cart = {};
    addItem(cart, "apple", 3);
    expect(cart.apple).toBe(3);
  });

  test("Add item - negative quantity", () => {
    const cart = {};
    addItem(cart, "apple", -2);
    expect(cart.apple).toBeUndefined();
  });

  test("Add item - edge case zero quantity", () => {
    const cart = {};
    addItem(cart, "apple", 0);
    expect(cart.apple).toBeUndefined();
  });

  test("Remove item - positive", () => {
    const cart = { apple: 3 };
    removeItem(cart, "apple");
    expect(cart.apple).toBeUndefined();
  });

  test("Remove item - negative", () => {
    const cart = { apple: 3 };
    removeItem(cart, "banana");
    expect(cart.apple).toBe(3);
  });

  test("Remove last item - edge case", () => {
    const cart = { apple: 1 };
    removeItem(cart, "apple");
    expect(Object.keys(cart).length).toBe(0);
  });

  test("Get total items - positive", () => {
    const cart = { apple: 2, banana: 3 };
    expect(getTotalItems(cart)).toBe(5);
  });

  test("Get total items - empty cart", () => {
    const cart = {};
    expect(getTotalItems(cart)).toBe(0);
  });

  test("Get total items - large quantities", () => {
    const cart = { apple: 1000, banana: 2000 };
    expect(getTotalItems(cart)).toBe(3000);
  });

});
