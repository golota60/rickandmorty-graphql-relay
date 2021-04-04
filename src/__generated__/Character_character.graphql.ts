/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ReaderFragment } from "relay-runtime";
import { FragmentRefs } from "relay-runtime";
export type Character_character = {
    readonly name: string | null;
    readonly image: string | null;
    readonly " $refType": "Character_character";
};
export type Character_character$data = Character_character;
export type Character_character$key = {
    readonly " $data"?: Character_character$data;
    readonly " $fragmentRefs": FragmentRefs<"Character_character">;
};



const node: ReaderFragment = {
  "argumentDefinitions": [],
  "kind": "Fragment",
  "metadata": null,
  "name": "Character_character",
  "selections": [
    {
      "alias": null,
      "args": null,
      "kind": "ScalarField",
      "name": "name",
      "storageKey": null
    },
    {
      "alias": null,
      "args": null,
      "kind": "ScalarField",
      "name": "image",
      "storageKey": null
    }
  ],
  "type": "Character",
  "abstractKey": null
};
(node as any).hash = '5c422f1707006d29887b81c3bc5e8ad4';
export default node;
