export const userInputGameSettingTypes = {
  row: 'row',
  col: 'col',
  mole: 'mole',
} as const;

export interface IUserGameSetting {
  row: number | null;
  col: number | null;
  mole: number | null;
}
