import profileReducer, {addPostActionCreator, deletePost} from "./profile-reducer";
import {render} from "@testing-library/react";
import App from "../App";
import React from "react";

let state = {
  posts: [
    { id: 1, message: `Hi,how're you ?`, likesCount: 12 },
    { id: 2, message: `it's my first post`, likesCount: 11 },
    { id: 3, message: `Blabla`, likesCount: 11 },
    { id: 4, message: `iNono`, likesCount: 11 },
  ],
  profile: null,
  status: ''
};

test('AC DE', () => {
  let action = deletePost(1)

  let newState = profileReducer(state, action)

  expect(newState.posts.length).toBe(3)

});

