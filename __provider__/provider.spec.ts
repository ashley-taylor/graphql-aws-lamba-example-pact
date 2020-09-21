import * as path from "path";
import { Verifier } from "@pact-foundation/pact";

describe("Pact Verification", () => {
  it("returns the correct response", async () => {
    return new Verifier({
      customProviderHeaders: [
        "Authorization: 5152fa08-1806-4514-9f66-730e9b59486e",
      ],
      pactUrls: [
        path.resolve(
          process.cwd(),
          "./pacts/graphqlconsumer-graphqlprovider.json"
        ),
      ],
      providerBaseUrl: "REPLACE WITH REMOTE URL",
    }).verifyProvider();
  });
});
