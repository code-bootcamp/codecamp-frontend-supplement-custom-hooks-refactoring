import { useState } from "react";
import Paginations01UI from "./Paginations01.presenter";

export default function Paginations01Container(props: any) {
  const [startPage, setStartPage] = useState(1);
  const lastPage = props.count ? Math.ceil(props.count / 10) : 0;

  const onClickPage = (page: number) => () => {
    void props.refetch({ page });
  };

  const onClickPrevPage = () => {
    if (startPage === 1) return;
    setStartPage(startPage - 10);
    void props.refetch({ page: startPage - 10 });
  };

  const onClickNextPage = () => {
    if (startPage + 10 <= lastPage) {
      setStartPage(startPage + 10);
      void props.refetch({ page: startPage + 10 });
    }
  };

  return (
    <Paginations01UI
      startPage={startPage}
      lastPage={lastPage}
      onClickPage={onClickPage}
      onClickPrevPage={onClickPrevPage}
      onClickNextPage={onClickNextPage}
    />
  );
}
