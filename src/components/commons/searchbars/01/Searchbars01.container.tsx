import { ChangeEvent } from "react";
import Searchbars01UI from "./Searchbars01.presenter";
import _ from "lodash";

export default function Searchbars01Container(props: any) {
  const getDebounce = _.debounce((value: string) => {
    void props.refetch({ search: value, page: 1 });
    void props.refetchBoardsCount({ search: value });
    props.onChangeKeyword(value);
  }, 1000);

  const onChangeSearchbar = (event: ChangeEvent<HTMLInputElement>) => {
    getDebounce(event.target.value);
  };

  return <Searchbars01UI onChangeSearchbar={onChangeSearchbar} />;
}
