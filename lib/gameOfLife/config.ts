interface Config {
  play: Boolean;
  grid: boolean[][];
  frameRate: number;
}

export let config: Config;

export function updateConfig(newConfig: Partial<Config>) {
  config = { ...config, ...newConfig };
  return config;
}
