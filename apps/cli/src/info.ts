type Plugin = {
  name: string;
  path: string;
  targetServer: string[];
  buildCommand: string;
  jarFolder: string;
  customFileName?: string;
  isGradle?: boolean;
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
    targetServer: ["proxy", "main", "queue"],
    buildCommand: "common:runtime:shadowJar",
    jarFolder: "build/libs/",
    customFileName: "runtime-all.jar",
    isGradle: true,
  },
  catraca: {
    name: "Catraca",
    path: "spigot/catraca",
    targetServer: ["queue"],
    buildCommand: "mvn install",
    jarFolder: "target/",
  },
  antiburrow: {
    name: "Antiburrow",
    path: "spigot/antiburrow",
    targetServer: ["main"],
    buildCommand: "mvn install",
    jarFolder: "target/",
  },
  lagosta: {
    name: "Lagosta",
    path: "spigot/lagosta",
    targetServer: ["main"],
    buildCommand: "mvn install",
    jarFolder: "target/",
  },
  sensor: {
    name: "Sensor",
    path: "spigot/sensor",
    targetServer: ["main"],
    buildCommand: "mvn install",
    jarFolder: "target/",
  },
  "spigot-core": {
    name: "SpigotCore",
    path: "spigot/spigot-core",
    targetServer: ["main"],
    buildCommand: "spigot:spigot-core:build",
    jarFolder: "build/libs/",
    isGradle: true,
  },
  tttalk: {
    name: "Tttalk",
    path: "spigot/tttalk",
    targetServer: ["main"],
    buildCommand: "mvn install",
    jarFolder: "target/",
  },
  salmos: {
    name: "Salmos",
    path: "bungee/salmos",
    targetServer: ["proxy"],
    buildCommand: "mvn install",
    jarFolder: "target/",
  },
};

const paths: Paths = {
  proxy: "servers/0-proxy",
  queue: "servers/1-queue",
  main: "servers/2-main",
};

export { paths, plugins, Plugin };
