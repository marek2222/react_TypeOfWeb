import React from "react";
import * as axios from "axios";
import Joke from "../joke";
import JokeGenerator from "../jokeGenerator";
// import { render, Simulate, wait } from "react-testing-library";
import { render, fireEvent} from "react-testing-library";
 
import MockAxios from "axios-mock-adapter";
import {
    getByLabelText,
    getByText,
    getByTestId,
    queryByTestId,
    // Tip: all queries are also exposed on an object
    // called "queries" which you could import here as well
    wait,
  } from 'dom-testing-library'

// import 'dom-testing-library'
  // adds special assertions like toHaveTextContent
// import 'jest-dom/extend-expect'


test("Joke konponent otrzymuje propsy, a następnie renderuje tekst", () => {
    const { getByTestId } = render(
        <Joke text="The fanniest joke this year" />
    );

    expect(getByTestId("jode-text")).toHaveTextContent(
        "The fanniest joke this year"
    );
});