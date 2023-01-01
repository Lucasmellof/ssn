import { join } from "path";
import { copyFile } from "fs";
import { type Plugin, plugins, paths } from "../info";
import { buildProject } from "../utils";

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
  const jarFile = plugin.name + "-0.0.1.jar";

  const jarPath = join(path, `target/${jarFile}`);

  plugin.target.forEach((target) => {

    const serverPath = paths[target];
    if(!serverPath) {
      console.log("Pasta do servidor não encontrada.")
      return;
    }

    const targetPath = join(process.cwd(), serverPath, "plugins", `${jarFile}`);
    console.log(targetPath);
    copyFile(jarPath, targetPath, (error) => {
      if (error) {
        console.log(`Error... ${error}`);
      } else {
        console.log("Copied");
      }
    });
  });
}

function build(plugin: Plugin) {
  const path = join(process.cwd(), "./plugins/" + plugin.path);
  buildProject(
    path,
    "mvn install",
    (error) => {
      //TODO: Handle error
    },
    (closeCode) => {
      runCopy(path, plugin, closeCode);
    }
  );
}
