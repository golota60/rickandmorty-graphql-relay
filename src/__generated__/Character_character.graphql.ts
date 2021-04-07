/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ReaderFragment } from "relay-runtime";
import { FragmentRefs } from "relay-runtime";
export type Character_character = {
    readonly id: string | null;
    readonly name: string | null;
    readonly image: string | null;
    readonly created: string | null;
    readonly species: string | null;
    readonly gender: string | null;
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
      "name": "id",
      "storageKey": null
    },
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
    },
    {
      "alias": null,
      "args": null,
      "kind": "ScalarField",
      "name": "created",
      "storageKey": null
    },
    {
      "alias": null,
      "args": null,
      "kind": "ScalarField",
      "name": "species",
      "storageKey": null
    },
    {
      "alias": null,
      "args": null,
      "kind": "ScalarField",
      "name": "gender",
      "storageKey": null
    }
  ],
  "type": "Character",
  "abstractKey": null
};
(node as any).hash = '6999dc82cf36ae37e0d32b56aad15986';
export default node;
