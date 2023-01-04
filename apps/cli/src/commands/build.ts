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

  const jarFolder = plugin.isGradle
    ? join(plugin.path, plugin.jarFolder)
    : plugin.jarFolder;

  const jarPath = join(path, jarFolder, jarFile);

  plugin.targetServer.forEach((target) => {
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
    "./plugins/" + (plugin.isGradle ? "" : plugin.path)
  );

  let prefix = plugin.isGradle ? `.${sep}gradlew${isWindows() && ".bat"} ` : "";

  buildProject(
    path,
    prefix + plugin.buildCommand,
    (error) => {
      //TODO: Handle error
      console.log(error);
    },
    (closeCode) => {
      runCopy(path, plugin, closeCode);
    }
  );
}
