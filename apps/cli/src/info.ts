type Plugin = {
  name: string;
  path: string;
  target: string[];
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
