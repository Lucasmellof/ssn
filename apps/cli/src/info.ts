type Plugins = {
  [key: string]: {
    path: string;
    target: string[];
  };
};

type Paths = {
  [key: string]: string;
};

const plugins: Plugins = {
  runtime: {
    path: "common/runtime",
    target: ["proxy", "main", "queue"],
  },
  catraca: {
    path: "spigot/catraca",
    target: ["queue"],
  },
  antiburrow: {
    path: "spigot/antiburrow",
    target: ["main"],
  },
  lagosta: {
    path: "spigot/lagosta",
    target: ["main"],
  },
  sensor: {
    path: "spigot/sensor",
    target: ["main"],
  },
  "spigot-core": {
    path: "spigot/spigot-core",
    target: ["main"],
  },
  tttalk: {
    path: "spigot/tttalk",
    target: ["main"],
  },
  salmos: {
    path: "bungee/salmos",
    target: ["proxy"],
  },
};

const paths: Paths = {
  proxy: "servers/0-proxy",
  queue: "servers/1-queue",
  main: "servers/2-main",
};

export { paths, plugins, Plugins };
