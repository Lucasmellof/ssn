import { Command } from "commander";
import { buildCommand } from "./commands/build";
import { cool_logo } from "./utils";
const program = new Command();

console.log(cool_logo);

program.name("cli").description("CLI bonita do SSN").version("0.0.1");

program
  .command("build")
  .description("Compila um plugin e envia ele para os servidores.")
  .argument("name", "project name")
  .action((name) => {
    buildCommand(name);
  });

program.parse();