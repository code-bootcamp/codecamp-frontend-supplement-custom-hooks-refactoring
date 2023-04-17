import { Page } from "./Paginations01.styles";
import { IPaginations01Props } from "./Paginations01.types";

export default function Paginations01(props: IPaginations01Props) {
  return (
    <div>
      <Page onClick={props.onClickPrevPage}>{`<`}</Page>
      {new Array(10).fill(1).map(
        (_, index) =>
          props.startPage + index <= props.lastPage && (
            <Page
              key={props.startPage + index}
              onClick={props.onClickPage(props.startPage + index)}
            >
              {props.startPage + index}
            </Page>
          )
      )}
      <Page onClick={props.onClickNextPage}>{`>`}</Page>
    </div>
  );
}
