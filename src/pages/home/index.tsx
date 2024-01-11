import { Button } from 'semantic-ui-react';
import { useState } from 'react';
import { useQuery } from 'react-query'
import { ColumnDisplay } from "./column-display";


import { fetchMovies, fetchTvShows } from "./query";

export enum DisplayType {
  Movies = "movies",
  TvShows = "tvshows"
};

 const { data: movieData, isLoading: isLoadingMovies } = useQuery({queryKey: ["movies"], queryFn: fetchMovies})

 const { data: tvShowData, isLoading: isLoadingTvShows } = useQuery({queryKey: ["tvshows"], queryFn: fetchTvShows})

export const Home = () => {
  const [displayType, setDisplayType] = useState<DisplayType>(
    DisplayType.Movies
  );
    
  return(
    <div style={{ marginTop: 30, height: "auto"}}>
       <Button.Group> 
          <Button color={displayType === DisplayType.Movies ? "blue" : undefined} onClick={() => setDisplayType(DisplayType.Movies)}>Movies </Button>
          <Button color={displayType === DisplayType.TvShows ? "blue" : undefined} onClick={() => setDisplayType(DisplayType.TvShows)}> TvShows</Button>
       </Button.Group>


       {isLoadingMovies || isLoadingTvShows ? (
         <div>Loading...</div>
       ) : (
       <div style={{marginTop: 20}}>
          {displayType === DisplayType.Movies ? ( <ColumnDisplay data={movieData.results} displayType={DisplayType.Movies} /> 
          ) : ( 
          <ColumnDisplay data={tvShowData.results}  displayType={DisplayType.TvShows} />
          )}
       </div>
       )}
    </div>
  );
}; 
