declare module '*.jpg' {
  const value: string;
  export = value;
}

declare module '*.png' {
  const value: string;
  export = value;
}

declare module '*.svg' {
  const value: any;
  export default value;
}

declare module '*.scss' {
  const content: { [className: string]: string };
  export default content;
}
