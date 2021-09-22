import { createTemplate } from "./createTemplate";
import fs from "fs";

const configOptions = {
  packageName: "test",
  port: 8080,
  middleware: {
    router: true,
    static: false,
  },
};

test("should write a json file", () => {
  const temp = createTemplate("package.ejs", configOptions);
  fs.writeFileSync("./test/test.json", temp);
});

test("should write a js file", () => {
  const temp = createTemplate("index.ejs", configOptions);
  fs.writeFileSync("./test/test.js", temp);
});
