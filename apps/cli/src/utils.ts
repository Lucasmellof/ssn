import { exec } from "child_process";

const cool_logo = `
███████╗███████╗███╗   ██╗    ███████╗ ██████╗██████╗ ██╗██████╗ ████████╗███████╗
██╔════╝██╔════╝████╗  ██║    ██╔════╝██╔════╝██╔══██╗██║██╔══██╗╚══██╔══╝██╔════╝
███████╗███████╗██╔██╗ ██║    ███████╗██║     ██████╔╝██║██████╔╝   ██║   ███████╗
╚════██║╚════██║██║╚██╗██║    ╚════██║██║     ██╔══██╗██║██╔═══╝    ██║   ╚════██║
███████║███████║██║ ╚████║    ███████║╚██████╗██║  ██║██║██║        ██║   ███████║
╚══════╝╚══════╝╚═╝  ╚═══╝    ╚══════╝ ╚═════╝╚═╝  ╚═╝╚═╝╚═╝        ╚═╝   ╚══════╝
`;

function buildProject(
  path: string,
  command: string,
  onError: (callback: string) => void,
  onFinish: (code: number) => void
) {
  const task = exec(command, {
    cwd: path,
  });

  // Listen for data events to print the output of the command
  task.stdout?.on("data", (data) => {
    process.stdout.write(data);
  });

  // Listen for error events to print any errors that occur
  task.stderr?.on("data", (data) => {
    onError(data);
  });

  // Listen for the close event to know when the command has finished executing
  task.on("close", (closeCode) => {
    onFinish(closeCode!);
  });
}

function capitalize(text: string) {
  return text.charAt(0).toUpperCase() + text.slice(1);
}

function isWindows(): boolean {
  return process.platform === "win32";
}

export { cool_logo, buildProject, capitalize, isWindows };
