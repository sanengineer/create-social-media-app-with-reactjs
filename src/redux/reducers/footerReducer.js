import { WEB_INFO_FOOTER_SIDEBAR } from "../actions/actionTypes";

const initialState = [
  "about",
  "explore",
  "hastag",
  "community-guideline",
  "privacy-policy",
  "terms",
  "careers",
  "developers",
  "newsroom",
  "ads",
  "investors",
  "contact",
];

export default function footerReducer(state = initialState, action) {
  switch (action.type) {
    case WEB_INFO_FOOTER_SIDEBAR:
      return state;
    default:
      return state;
  }
}
