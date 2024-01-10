import { Button } from 'semantic-ui-react';
import { useState } from 'react';

enum DisplayType {
  Movies = "movies",
  TvShows = "tvshows"
}
export const Home = () => {
  const [displayType, setDisplayType] = useState<DisplayType>(
    DisplayType.Movies
  )
    
  return(
    <div style={{ marginTop: 30, height: "auto"}}>
       <Button.Group> 
          <Button color={displayType === DisplayType.Movies ? "blue" : undefined} onClick={() => setDisplayType(DisplayType.Movies)}>Movies </Button>
          <Button color={displayType === DisplayType.TvShows ? "blue" : undefined} onClick={() => setDisplayType(DisplayType.TvShows)}> TvShows</Button>
       </Button.Group>
    </div>
  );
}; 
