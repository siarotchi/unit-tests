import { addUser, deleteUser, updateUser } from "../actions/user-actions";
import userReducer from "./user-reducer";

let state = {
  "123456": {
    id: "123456",
    name: "User name",
    email: "smth@test.com",
  },
  abc12: {
    id: "abc12",
    name: "John Doe",
    email: "world@test.com",
  },
};

describe("user-reducer", () => {
  it("should return default state", () => {
    const initialState = undefined;
    const action = { type: "an action" };

    const expectedState = {};
    const actualState = userReducer(initialState, action);

    expect(actualState).toEqual(expectedState);
  });

  it("should add new user", () => {
    const action = addUser({ id: "r2d2", name: "Stan Yaro", email: "stanyaro@test.com" });

    const expectedState = {
      "123456": {
        id: "123456",
        name: "User name",
        email: "smth@test.com",
      },
      abc12: {
        id: "abc12",
        name: "John Doe",
        email: "world@test.com",
      },
      r2d2: {
        id: "r2d2",
        name: "Stan Yaro",
        email: "stanyaro@test.com",
      },
    };

    const actualState = userReducer(state, action);
    expect(actualState).toEqual(expectedState);
  });

  it("should update user by id", () => {
    const action = updateUser("123456", {
      id: "123456",
      name: "User name",
      email: "smthNew@test.com",
    });

    const expectedState = {
      "123456": {
        id: "123456",
        name: "User name",
        email: "smthNew@test.com",
      },
      abc12: {
        id: "abc12",
        name: "John Doe",
        email: "world@test.com",
      },
    };

    const actualState = userReducer(state, action);
    expect(actualState).toEqual(expectedState);
  });

  it("should delete user by id", () => {
    const action = deleteUser("123456");

    const expectedState = {
      abc12: {
        id: "abc12",
        name: "John Doe",
        email: "world@test.com",
      },
    };

    const actualState = userReducer(state, action);
    expect(actualState).toEqual(expectedState);
  });
});
