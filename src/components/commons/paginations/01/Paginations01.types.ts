export interface IPaginations01Props {
  startPage: number;
  lastPage: number;
  onClickPage: (page: number) => () => void;
  onClickPrevPage: () => void;
  onClickNextPage: () => void;
}
