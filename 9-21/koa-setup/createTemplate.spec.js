import { createTemplate } from "./createTemplate";
import fs from "fs";
test("should write a json file", () => {
  const temp = createTemplate("package.ejs", {
    packageName: "test",
    port: 8080,
    middleware: {
      router: true,
      static: false,
    },
  });
  fs.writeFileSync("./test/test.json", temp);
  // console.log(temp);
});

test("should write a js file", () => {
  const temp = createTemplate("index.ejs", {
    packageName: "test",
    port: 8080,
    middleware: {
      router: true,
      static: false,
    },
  });
  fs.writeFileSync("./test/test.js", temp);
});
