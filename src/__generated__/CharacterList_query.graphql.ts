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
    } | null;
    readonly " $refType": "CharacterList_query";
};
export type CharacterList_query$data = CharacterList_query;
export type CharacterList_query$key = {
    readonly " $data"?: CharacterList_query$data;
    readonly " $fragmentRefs": FragmentRefs<"CharacterList_query">;
};



const node: ReaderFragment = {
  "argumentDefinitions": [],
  "kind": "Fragment",
  "metadata": null,
  "name": "CharacterList_query",
  "selections": [
    {
      "alias": null,
      "args": null,
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
        }
      ],
      "storageKey": null
    }
  ],
  "type": "Query",
  "abstractKey": null
};
(node as any).hash = 'c03dbcc3d510a29f72a22194ac977686';
export default node;
