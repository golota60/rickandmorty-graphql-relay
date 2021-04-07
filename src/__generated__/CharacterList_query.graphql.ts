/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ReaderFragment } from "relay-runtime";
import { FragmentRefs } from "relay-runtime";
export type CharacterList_query = {
    readonly characters: {
        readonly results: ReadonlyArray<{
            readonly " $fragmentRefs": FragmentRefs<"Character_character">;
        } | null> | null;
        readonly info: {
            readonly count: number | null;
            readonly pages: number | null;
            readonly next: number | null;
            readonly prev: number | null;
        } | null;
    } | null;
    readonly " $refType": "CharacterList_query";
};
export type CharacterList_query$data = CharacterList_query;
export type CharacterList_query$key = {
    readonly " $data"?: CharacterList_query$data;
    readonly " $fragmentRefs": FragmentRefs<"CharacterList_query">;
};



const node: ReaderFragment = {
  "argumentDefinitions": [
    {
      "kind": "RootArgument",
      "name": "page"
    }
  ],
  "kind": "Fragment",
  "metadata": null,
  "name": "CharacterList_query",
  "selections": [
    {
      "alias": null,
      "args": [
        {
          "kind": "Variable",
          "name": "page",
          "variableName": "page"
        }
      ],
      "concreteType": "Characters",
      "kind": "LinkedField",
      "name": "characters",
      "plural": false,
      "selections": [
        {
          "alias": null,
          "args": null,
          "concreteType": "Character",
          "kind": "LinkedField",
          "name": "results",
          "plural": true,
          "selections": [
            {
              "args": null,
              "kind": "FragmentSpread",
              "name": "Character_character"
            }
          ],
          "storageKey": null
        },
        {
          "alias": null,
          "args": null,
          "concreteType": "Info",
          "kind": "LinkedField",
          "name": "info",
          "plural": false,
          "selections": [
            {
              "alias": null,
              "args": null,
              "kind": "ScalarField",
              "name": "count",
              "storageKey": null
            },
            {
              "alias": null,
              "args": null,
              "kind": "ScalarField",
              "name": "pages",
              "storageKey": null
            },
            {
              "alias": null,
              "args": null,
              "kind": "ScalarField",
              "name": "next",
              "storageKey": null
            },
            {
              "alias": null,
              "args": null,
              "kind": "ScalarField",
              "name": "prev",
              "storageKey": null
            }
          ],
          "storageKey": null
        }
      ],
      "storageKey": null
    }
  ],
  "type": "Query",
  "abstractKey": null
};
(node as any).hash = '2d5adda3c979d1ff199a4d0212321c75';
export default node;
