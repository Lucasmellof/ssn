import { join, sep } from "path";
import { copyFile } from "fs";
import { type Plugin, plugins, paths } from "../info";
import { buildProject, isWindows } from "../utils";

export function buildCommand(name: string) {
  const plugin = plugins[name];

  if (!plugin) {
    console.log("Plugin não encontrado.");
    return;
  }

  build(plugin);
}

function runCopy(path: string, plugin: Plugin, code: number) {
  if (code != 0) {
    console.log(`Process exited with code ${code}`);
    process.exit();
  }
  const jarFile = plugin.customFileName
    ? plugin.customFileName
    : plugin.name + "-0.0.1.jar";

  const targetFolder = plugin.customTargetPath
    ? join(plugin.path, plugin.customTargetPath)
    : "target/";
  const jarPath = join(path, targetFolder, jarFile);

  plugin.target.forEach((target) => {
    const serverPath = paths[target];
    if (!serverPath) {
      console.log("Pasta do servidor não encontrada.");
      return;
    }

    const targetPath = join(process.cwd(), serverPath, "plugins", `${jarFile}`);
    copyFile(jarPath, targetPath, (error) => {
      if (error) {
        console.log(`Error... ${error}`);
      } else {
        console.log(`Copied ${plugin.name} to ${target}`);
      }
    });
  });
}

function build(plugin: Plugin) {
  console.log("Building...");

  const path = join(
    process.cwd(),
    "./plugins/" + (plugin.buildCommand ? "" : plugin.path)
  );
  let buildCommand = "mvn install";

  if (plugin.buildCommand) {
    buildCommand = `.${sep}gradlew${isWindows() && ".bat"} ${
      plugin.buildCommand
    }`;
  }
  buildProject(
    path,
    buildCommand,
    (error) => {
      //TODO: Handle error
      console.log(error);
    },
    (closeCode) => {
      runCopy(path, plugin, closeCode);
    }
  );
}
