import { DisplayType } from "./index.tsx";

interface DisplayData {
  id: number;
  title: string;
  poster_path: string;
  vote_average: number;
  release_date: string;
}

interface Props {
  data: DisplayData[];
  displayType: DisplayType;
}

export const ColumnDisplay = (props: Props) => {
  return <div>{props.data[0].title}</div>
};