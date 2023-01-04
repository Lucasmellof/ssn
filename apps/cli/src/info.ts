type Plugin = {
  name: string;
  path: string;
  target: string[];
  buildCommand?: string;
  customTargetPath?: string;
  customFileName?: string;
};

type Plugins = {
  [key: string]: Plugin;
};

type Paths = {
  [key: string]: string;
};

const plugins: Plugins = {
  runtime: {
    name: "Runtime",
    path: "common/runtime",
    target: ["proxy", "main", "queue"],
    buildCommand: "common:runtime:shadowJar",
    customTargetPath: "build/libs/",
    customFileName: "runtime-all.jar"
  },
  catraca: {
    name: "Catraca",
    path: "spigot/catraca",
    target: ["queue"],
  },
  antiburrow: {
    name: "Antiburrow",
    path: "spigot/antiburrow",
    target: ["main"],
  },
  lagosta: {
    name: "Lagosta",
    path: "spigot/lagosta",
    target: ["main"],
  },
  sensor: {
    name: "Sensor",
    path: "spigot/sensor",
    target: ["main"],
  },
  "spigot-core": {
    name: "SpigotCore",
    path: "spigot/spigot-core",
    target: ["main"],
    buildCommand: "spigot:spigot-core:build",
    customTargetPath: "build/libs/",
  },
  tttalk: {
    name: "Tttalk",
    path: "spigot/tttalk",
    target: ["main"],
  },
  salmos: {
    name: "Salmos",
    path: "bungee/salmos",
    target: ["proxy"],
  },
};

const paths: Paths = {
  proxy: "servers/0-proxy",
  queue: "servers/1-queue",
  main: "servers/2-main",
};

export { paths, plugins, Plugin };
